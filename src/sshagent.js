const process   = require('process');
const fs   = require('fs');
const net   = require('net');
const util     = require('./util');

const SSH_AGENTC_REQUEST_IDENTITIES = 11;
const SSH_AGENTC_SIGN_REQUEST = 13;
const SSH_AGENT_FAILURE = 5;
const SSH_AGENT_SUCCESS = 6;
const SSH_AGENT_IDENTITIES_ANSWER = 12;
const SSH_AGENT_SIGN_RESPONSE = 14;
const SSH_AGENT_RSA_SHA2_256 = 2;
const SSH_AGENT_RSA_SHA2_512 = 4;

/**
 * SSHAgentMessage
 * @class
 */ 
class SSHAgentMessage {
  constructor() {
    this.responseSize = 0;
  }

  pack()
  {

  }

  unpack(buffer)
  {
    this.responseSize = buffer.readUInt32BE(0);

    if (this.responseSize != (buffer.length - 4)) {
      throw new Error(util.format('Invalid Response: Bad Length'));
    }
  }
}

class SSHAgentKeyListRequest extends SSHAgentMessage {
  constructor() {
    super();
    this.keys = [];
  }

  pack()
  {
      var buffer = Buffer.alloc(5);

      buffer.writeUInt32BE(1, 0);
      buffer.writeUInt8(SSH_AGENTC_REQUEST_IDENTITIES, 4);

      return buffer;
  }

  unpack(buffer)
  {
    super.unpack(buffer);

    let response = buffer.readUInt8(4);

    if (response != SSH_AGENT_IDENTITIES_ANSWER) {
      throw new Error('Invalid Response');
    }

    let keyCount = buffer.readUInt32BE(5);

    var offset = 9;

    if (keyCount > 0) {
      for(var i = 0; i < keyCount; i++) {
        let keyBlobSize = buffer.readUInt32BE(offset);
        offset += 4;

        let keyBlob = buffer.subarray(offset, offset+keyBlobSize);
        offset += keyBlobSize;

        let commentSize = buffer.readUInt32BE(offset);
        offset += 4;

        let comment = buffer.subarray(offset, offset+commentSize);
        offset += commentSize;

        this.keys.push(new SSHAgentKey(keyBlob, comment.toString()));
      }
    }
  }
}

/**
 * SSHAgentSignRequest
 * @class
 */ 
class SSHAgentSignRequest extends SSHAgentMessage {
  constructor() {
    super();
    this.publicKey = Buffer.alloc(0);
    this.signData = Buffer.alloc(0);
    this.signDigestType = SSH_AGENT_RSA_SHA2_256;
    this.signature = Buffer.alloc(0);
  }

  setPublicKey(publicKey) {
    if (util.isInstanceOf(publicKey, Buffer)) {
      this.publicKey = publicKey;
    } else if (util.isString(publicKey)) {
      this.publicKey = Buffer.from(content, 'base64');
    } else {
      throw new Error('Invalid Key Format');
    }
    
    return this;
  }

  getPublicKey() {
    return this.publicKeyBlob;
  }

  setSignData(signData) {
    if (util.isInstanceOf(signData, Buffer)) {
      this.signData = signData;
    } else if (util.isString(signData)) {
      this.signData = Buffer.from(signData.trim(), 'utf-8');
    } else {
      throw new Error('Invalid Sign Data');
    }

    return this;
  }

  getSignData() {
    return this.signData;
  }

  setDigestType(signDigestType) {
    this.signDigestType = signDigestType;
    return this;
  }

  getDigestType() {
    return this.signDigestType;
  }

  getSignature() {
    return this.signature;
  }

  pack() {
    var buffer = Buffer.alloc(17 + this.publicKey.length + this.signData.length);

    var offset = 0;
    offset = buffer.writeUInt32BE(buffer.length - 4, offset);
    offset = buffer.writeUInt8(SSH_AGENTC_SIGN_REQUEST, offset);
    offset = buffer.writeUInt32BE(this.publicKey.length, offset);
    offset += this.publicKey.copy(buffer, offset, 0, this.publicKey.length);
    offset = buffer.writeUInt32BE(this.signData.length, offset);
    offset += this.signData.copy(buffer, offset, 0, this.signData.length);
    offset = buffer.writeUInt32BE(this.signDigestType, offset);

    return buffer;
  }

  unpack(buffer) {
    super.unpack(buffer);

    var offset = 4;

    let response = buffer.readUInt8(offset);

    offset += 4;

    if (response != SSH_AGENT_SIGN_RESPONSE) {
      throw new Error('Invalid response');
    }

    let totalSignatureSize = buffer.readUInt8(offset);
    offset += 4;

    if (totalSignatureSize <= 0) {
      throw new Error('Invalid response: Bad size');
    }

    let signatureTypeLength = buffer.readUInt8(offset);
    offset += 4;

    if (signatureTypeLength <= 0) {
      throw new Error('Invalid response: Bad signature type length');
    }

    let signType = buffer.subarray(offset, offset+signatureTypeLength);
    offset += signatureTypeLength;

    let signatureLength = buffer.readUInt8(offset);
    offset += 4;


    if (signatureLength <= 0) {
      throw new Error('Invalid response: Bad signature length');
    }

    this.signature = buffer.subarray(offset, offset+signatureLength);
  }
}

/**
 * SSHAgentKey
 * @class
 */ 
class SSHAgentKey {
  constructor(keyBlob, comment) {
    this.keyBlob = keyBlob;
    this.comment = comment;
  }

  getKeyBlob() {
    return this.keyBlob;
  }

  getComment() {
    return this.comment;
  }
}

/**
 * SSHAgentSignClient
 * @class
 */ 
class SSHAgentSignClient {

  /**
   * Constant SSH_AGENT_RSA_SHA2_256
   * @constant
   * @returns {string}
   */
  static get SSH_AGENT_RSA_SHA2_256() {
    return SSH_AGENT_RSA_SHA2_256;
  }

  /**
   * Constant SSH_AGENT_RSA_SHA2_512
   * @constant
   * @returns {string}
   */
  static get SSH_AGENT_RSA_SHA2_512() {
    return SSH_AGENT_RSA_SHA2_512;
  }
  
  constructor(agentSocketPath = null, callbacks = {}, timeout = 2000) {
    var self = this;
    
    this.socketPath = process.env.SSH_AUTH_SOCK;
    this.callbacks = {
      error: util.isFunction(callbacks.error) ? callbacks.error : null,
      timeout: util.isFunction(callbacks.timeout) ? callbacks.timeout : null,
      disconnected: util.isFunction(callbacks.disconnected) ? callbacks.disconnected : null
    };

    this.connection = new net.Socket();
    this.connection.on('close', function() { self.onDisconnect(); });
    this.connection.on('error', function(e) { self.onError(e); });
    this.connection.setTimeout(timeout, function() { self.onTimeout(); });

    if (util.isString(agentSocketPath) && agentSocketPath.length) {
      this.socketPath = agentSocketPath;
    }
  }

  connect(callback) {
    var self = this;

    if (this.isConnected()) return;

    this.connection.connect(this.socketPath, function() {
      if (util.isFunction(callback)) {
        callback(self, self.connection);
      }
    });
  }

  send(data, completeCallback, errorCallback = null) {
    try {
      if (!this.isConnected()) {
        this.connect();
      }

      this.connection.once('data', function(received) {
        if (util.isInstanceOf(data, SSHAgentMessage)) {
          data.unpack(received);
        }

        if (util.isFunction(completeCallback)) {
          if (util.isInstanceOf(data, SSHAgentMessage)) {
            completeCallback(data);
          } else {
            completeCallback(received);
          }
        }
      });

      if (util.isInstanceOf(data, SSHAgentMessage)) {
        this.connection.write(data.pack(), 'utf-8');
      } else {
        this.connection.write(data, 'utf-8');
      }
    } catch(e) {
      this.onError(e);
      if (util.isFunction(errorCallback)) {
        errorCallback(e);
      }
    }
  }

  disconnect() {
    if (this.isConnected()) {
      this.connection.destroy();
      this.connection = null;
    }
  }

  isConnected() {
    return this.connection != null && !this.connection.pending;
  }

  getConnection() {
    return this.connection;
  }

  onRead(data) {
    if (util.isFunction(this.callbacks.read)) {
      this.callbacks.read(data, this.request);
    }
  }

  onDisconnect() {
    if (util.isFunction(this.callbacks.disconnected)) {
      this.callbacks.disconnected();
    }
  }

  onError(e) {
    if (this.isConnected()) {
      this.disconnect();
    }
    
    if (util.isFunction(this.callbacks.error)) {
      this.callbacks.error(e);
    }
  }

  onTimeout() {
    if (util.isFunction(this.callbacks.timeout)) {
      this.callbacks.timeout();
    }
  }

  setDisconnectCallback(cb) {
    this.callbacks.disconnected = cb;
  }

  setTimeoutCallback(cb) {
    this.callbacks.timeout = cb;
  }

  setErrorCallback(cb) {
    this.callbacks.error = cb;
  }
}

module.exports = {
  SSHAgentMessage,
  SSHAgentKey,
  SSHAgentKeyListRequest,
  SSHAgentSignRequest,
  SSHAgentSignClient
};