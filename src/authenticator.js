const crypto   = require('crypto');
const fs       = require('fs');
const util     = require('./util');
const sshagent = require('./sshagent');

/**
 * Base Authenticator
 * @class
 */
class Authenticator {
  /**
   * Generates the authentication header value
   * @param {string|buffer}
   */
  generateAuthenticationHeader(data) {
		throw Error('Must be implemented in inherited class');
	}

  /**
   * @param {string|buffer}
   */
	signData(data) {
    throw Error('Must be implemented in inherited class');
	}
}

/** SIGN_DIGEST constants */
/** @ignore */
const SIGN_DIGEST_SHA1    = 'sha1';
/** @ignore */
const SIGN_DIGEST_SHA256  = 'sha256';
/** @ignore */
const SIGN_DIGEST_NONE    = '';
/** @ignore */
const SIGN_DIGEST_SSH_RSA_SHA256  = 'RSA-SHA256';
/** @ignore */
const SIGN_DIGEST_SSH_RSA_SHA512  = 'RSA-SHA512';


/**
 * TokenAuthenticator - Authenticates requests using an api token
 * and optional (but default) HMAC signature
 * @class
 */
class TokenAuthenticator extends Authenticator {
  /**
   * Constant SIGN_DIGEST_SHA1
   * @constant
   * @returns {string}
   */
  static get SIGN_DIGEST_SHA1() {
    return SIGN_DIGEST_SHA1;
  }

  /**
   * Constant SIGN_DIGEST_SHA256
   * @constant
   * @returns {string}
   */
  static get SIGN_DIGEST_SHA256() {
    return SIGN_DIGEST_SHA256;
  }

  /**
   * Constant SIGN_DIGEST_NONE
   * @constant
   * @returns {string}
   */
  static get SIGN_DIGEST_NONE() {
    return SIGN_DIGEST_NONE;
  }

  /**
   * Constructor
   * @param {string} apiToken
   * @param {string} signingKey (base64 encoded)
   * @param {string} digestType
   */
  constructor(apiToken, signingKey, digestType) {
    super();
    this.apiToken = apiToken;
    this.signingKey = signingKey;
    this.digestType = digestType;

    if (util.isNullOrUndefined(digestType)) {
      this.digestType = SIGN_DIGEST_SHA256;
    }
  }

  /**
   * Get the api token used to authenticate the request.
   * @returns {string}
   */
  getApiToken() {
    return this.apiToken;
  }

  /**
   * Set the api token used to authenticate the request.
   * @param {string} apiToken
   * @returns {Client}
   */
  setApiToken(apiToken) {
    this.apiToken = apiToken;
    return this;
  }

  /**
   * Get the signing key used to sign requests. Base64 encoded.
   * @returns {string}
   */
  getSigningKey() {
    return this.signingKey;
  }

  /**
   * Set the signing key used to sign requests. Base64 encoded.
   * @param {string} signingKey
   * @returns {Client}
   */
  setSigningKey(signingKey) {
    this.signingKey = signingKey;
    return this;
  }

  /**
   * Get the sign digest type
   * @returns {string}
   */
  getDigestType() {
    return this.digestType;
  }

  /**
   * Set the sign digest type
   * @param {string}
   */
  setDigestType(digestType) {
    this.digestType = digestType;
    return this;
  }

  /**
   * Generates the authentication header value
   * @param {string|buffer}
   */
  generateAuthenticationHeader(data) {
    var self = this;

    return new Promise(function(resolve, reject) { 
      try {
        if (self.digestType == SIGN_DIGEST_SHA1) {
          resolve(util.format('MIVA-HMAC-SHA1 %s:%s', self.getApiToken(), self.signData(data)));
        } else if (self.digestType == SIGN_DIGEST_SHA256) {
          resolve(util.format('MIVA-HMAC-SHA256 %s:%s', self.getApiToken(), self.signData(data)));
        } else {
          resolve(util.format('MIVA %s', self.getApiToken()));
        }
      } catch(e) {
        reject(e);
      }
    });
  }

  /**
   * @param {string|buffer}
   */
  signData(data) {
    var key;
    var hash;
    
    if (this.digestType !== SIGN_DIGEST_SHA1 && this.digestType !== SIGN_DIGEST_SHA256) {
      throw new Error('Invalid digest type');
    }

    key = Buffer.from(this.getSigningKey(), 'base64');

    if (!key.byteLength) {
      throw new Error('No signing key assigned to sign request');
    }

    hash = crypto.createHmac(this.digestType, key).update(data);

    return hash.digest('base64');
  }
}

/**
 * SSHPrivateKeyAuthenticator
 * @class
 */ 
class SSHPrivateKeyAuthenticator extends Authenticator {
  /**
   * Constant SIGN_DIGEST_SSH_RSA_SHA256
   * @constant
   * @returns {string}
   */
  static get SIGN_DIGEST_SSH_RSA_SHA256() {
    return SIGN_DIGEST_SSH_RSA_SHA256;
  }

  /**
   * Constant SIGN_DIGEST_SSH_RSA_SHA512
   * @constant
   * @returns {string}
   */
  static get SIGN_DIGEST_SSH_RSA_SHA512() {
    return SIGN_DIGEST_SSH_RSA_SHA512;
  }

  /**
   * Constructor
   * @param {string} username
   * @param {string} private key path
   * @param {string} private key password
   * @param {int} digest type
   */
  constructor(username, privateKeyPath, password, digestType = SIGN_DIGEST_SSH_RSA_SHA256) {
    super();
    this.username = username;
    this.digestType = digestType;

    if (privateKeyPath.length) {
      this.setPrivateKey(privateKeyPath, password);
    }
  }

  /**
   * Set the username to authenticate with
   * @param {stirng} username
   * @return self
   */
  setUsername(username) {
    this.username = username;
    return this;
  }

  /**
   * Get the username to authenticate with
   * @return {stirng} username
   */
  getUsername() {
    return this.username;
  }

  /**
   * Set the private key file to authenticate with
   * @param {string} path to the private key file
   * @param {string} private key password
   * @returns self
   */
  setPrivateKey(privateKeyPath, password) {
    var self = this;

    this.privateKey = crypto.createPrivateKey({
      key: fs.readFileSync(privateKeyPath, { encoding: 'utf-8', flag: 'r' }),
      format: 'pem',
      passphrase: password 
    });
  }

  /**
   * Get the private key to authenticate with
   */
  getPrivateKey() {
    return this.privateKey;
  }

  /**
   * Set the sign digest type
   * @param {string}
   */
  setDigestType(digestType) {
    this.digestType = digestType;
    return this;
  }

  /**
   * Get the sign digest type
   * @returns {string}
   */
  getDigestType() {
    return this.digestType;
  }

  /**
   * Generates the authentication header value
   * @param {string|buffer}
   */
	generateAuthenticationHeader(data) {
    var self = this;
    return new Promise(function(resolve, reject) { 
      try {
        if (self.digestType == SIGN_DIGEST_SSH_RSA_SHA256) {
          resolve(util.format('SSH-RSA-SHA2-256 %s:%s', Buffer.from(self.getUsername(), 'utf-8').toString('base64'), self.signData(data)));
        } else if (self.digestType == SIGN_DIGEST_SSH_RSA_SHA512) {
          resolve(util.format('SSH-RSA-SHA2-512 %s:%s', Buffer.from(self.getUsername(), 'utf-8').toString('base64'), self.signData(data)));
        } else {
          reject(new Error('Invalid digest type'));
        }
      } catch(e) {
        reject(e);
      }
    });
	}
	
  /**
   * @param {string|buffer}
   */
	signData(data) {
    var signature;

    if (!util.isObject(this.privateKey)) {
      throw new Error('No key available to sign with: ' + typeof this.privateKey);
    } else if (this.digestType !== SIGN_DIGEST_SSH_RSA_SHA256 && this.digestType !== SIGN_DIGEST_SSH_RSA_SHA512) {
      throw new Error('Invalid digest type');
    }

    signature = crypto.sign(this.digestType, Buffer.from(data), {
      key: this.privateKey,
      padding: crypto.constants.RSA_PKCS1_PADDING,
    });

    return signature.toString('base64');
	}
}

/**
 * SSHAgentAuthenticator
 * @class
 */ 
class SSHAgentAuthenticator extends Authenticator {
  /**
   * Constant SIGN_DIGEST_SHA1
   * @constant
   * @returns {string}
   */
  static get SIGN_DIGEST_SSH_RSA_SHA256() {
    return SIGN_DIGEST_SSH_RSA_SHA256;
  }

  /**
   * Constant SIGN_DIGEST_SHA256
   * @constant
   * @returns {string}
   */
  static get SIGN_DIGEST_SSH_RSA_SHA512() {
    return SIGN_DIGEST_SSH_RSA_SHA512;
  }

  /**
   * Constructor
   * @param {string} username
   * @param {string} public key path
   * @param {int} digest type
   */
  constructor(username, publicKeyPath, agentSocketPath = null, digestType = SIGN_DIGEST_SSH_RSA_SHA256) {
    super();
    var self = this;
    this.username = username;
    this.digestType = digestType;
    this.publicKey = null;
    this.agent = new sshagent.SSHAgentSignClient(agentSocketPath, {
      error: function() {
        if (self.agent.isConnected()) {
          self.agent.disconnect();
        }
      },
      timeout: function() {
        if (self.agent.isConnected()) {
          self.agent.disconnect();
        }
      }
    });

    if (publicKeyPath.length) {
      this.setPublicKey(publicKeyPath);
    }
  }

  /**
   * Get the username to authenticate with
   * @return {stirng} username
   */
  getUsername() {
    return this.username;
  }

  /**
   * Set the username to authenticate with
   * @param {stirng} username
   * @return self
   */
  setUsername(username) {
    this.username = username;
    return this;
  }

  /**
   * Get the public key
   * @param {Buffer}
   */
  getPublicKey() {
    return this.publicKey;
  }
  /**
   * Set the public key
   * @param {string} Public key path
   */
  setPublicKey(publicKeyPath) {
    let content = fs.readFileSync(publicKeyPath, { encoding: 'utf-8', flag: 'r' });

    if (!content.length) {
      throw new Error('Invalid Public Key File');
    }

    if (content.indexOf('ssh-rsa') === 0) {
      let split = content.split(' ');

      if (split.length >= 2) {
        this.publicKey = Buffer.from(split[1], 'base64');
      } else {
        throw new Error('Invalid Public Key File');
      }
    } else {
      this.publicKey = Buffer.from(content, 'base64');
    }
  }
  
  /**
   * Set the sign digest type
   * @param {string}
   */
  setDigestType(digestType) {
    this.digestType = digestType;
    return this;
  }

  /**
   * Get the sign digest type
   * @returns {string}
   */
  getDigestType() {
    return this.digestType;
  }

  /**
   * Generates the authentication header value
   * @param {string|buffer}
   */
	generateAuthenticationHeader(data) {
    var self = this;
    return new Promise(function(resolve, reject) { 
      if (self.digestType == SIGN_DIGEST_SSH_RSA_SHA256 || self.digestType == SIGN_DIGEST_SSH_RSA_SHA512) {
        var prefix = 'SSH-RSA-SHA2-256';

        if (self.digestType == SIGN_DIGEST_SSH_RSA_SHA512) {
          prefix = 'SSH-RSA-SHA2-512';
        }

        self.signData(data, function(signature) {
          if (!signature.length) {
            reject("Received an invalid signature");
          } else {
            resolve(util.format('%s %s:%s', prefix, Buffer.from(self.getUsername(), 'utf-8').toString('base64'), signature));
          }
        },
        function(error) {
          reject(error);
        });
      } else {
        reject(new Error('Invalid digest type'));
      }
    });
	}

  /**
   * @param {string|buffer}
   */
	signData(data, completeCallback, errorCallback = null) {
		var self = this;
    var request = new sshagent.SSHAgentSignRequest();
    request.setPublicKey(this.publicKey);
    request.setSignData(data);

    if (this.digestType == SIGN_DIGEST_SSH_RSA_SHA512) {
      request.setDigestType(sshagent.SSHAgentSignClient.SSH_AGENT_RSA_SHA2_512);
    } else {
      request.setDigestType(sshagent.SSHAgentSignClient.SSH_AGENT_RSA_SHA2_256);
    }

    this.agent.send(request, function(request) {
        if (util.isFunction(completeCallback)) {
          completeCallback(request.getSignature().toString('base64'));
        }

        self.agent.disconnect();
      },
      function(error) {
        if (util.isFunction(errorCallback)) {
          errorCallback(error);
        }

        self.agent.disconnect();
      }
    );
	}
}

module.exports = {
  Authenticator,
  TokenAuthenticator,
  SSHPrivateKeyAuthenticator,
  SSHAgentAuthenticator
};
