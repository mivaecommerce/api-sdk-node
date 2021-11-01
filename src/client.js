/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const http            = require('http');
const https           = require('https');
const util            = require('./util');
const abstract        = require('./abstract');
const requests        = require('./requests');
const { Logger }      = require('./logger');
const { MultiCallRequest, MultiCallOperation } = require('./multicall');
const { Authenticator, TokenAuthenticator, SSHPrivateKeyAuthenticator, SSHAgentAuthenticator }  = require('./authenticator');

/** @module Client */

/** SIGN_DIGEST constants */
/** @ignore */
const SIGN_DIGEST_SHA1    = 'sha1';
/** @ignore */
const SIGN_DIGEST_SHA256  = 'sha256';
/** @ignore */
const SIGN_DIGEST_NONE    = '';
/** @ignore */
const CLIENT_DEFAULT_OPERATION_TIMEOUT = 60;

/** 
 * BaseClient - All clients extend this class
 */
class BaseClient {
  /**
   * Client Constructor.
   * @param {URL|string} endpoint
   * @param {string} apiToken
   * @param {string} signingKey
   * @param {Object} options
   */
  constructor(endpoint, authenticator, options = {}) {
    this.setEndpoint(endpoint);
    this.logger = null;
    this.authenticator = authenticator;
    this.globalHeaders = {}

    this.options = Object.assign({
      require_timestamps: true,
      default_store_code: null,
      operation_timeout: CLIENT_DEFAULT_OPERATION_TIMEOUT
    }, options);
  }

  /**
   * Get the API endpoint URL.
   * @returns {URL}
   */
  getEndpoint() {
    return this.endpoint;
  }

  /**
   * Set the API endpoint URL.
   * @param {URL|string} endpoint
   * @returns {Client}
   */
  setEndpoint(endpoint) {
    var proto;

    if (util.isInstanceOf(endpoint, URL)) {
      this.endpoint = endpoint;
    } else {
      this.endpoint = new URL(endpoint);
    }

    proto = this.endpoint.protocol.toLowerCase();

    if (proto !== 'http:' && proto !== 'https:') {
      throw new Error(util.format('Invalid protocol %s. Expected http(s).', proto));
    }

    return this;
  }

  /**
   * Get a client option.
   * @param {string} key
   * @returns {*}
   */
  getOption(key) {
    return this.options[key];
  }

  /**
   * Set a client option.
   * @param {string} key
   * @param {*} value
   * @returns {Client}
   */
  setOption(key, value) {
    this.options[key] = value;
    return this;
  }

  /**
   * Set the logger instance
   * @param {Logger?} logger
   * @returns {Client}
   */
  setLogger(logger) {
    if (!util.isNullOrUndefined(logger) && !util.isInstanceOf(logger, Logger)) {
      throw new Error('Expecting an instance of Logger or null');
    }

    this.logger = logger;
  }

  /**
   * Get the logger instance
   * @returns {Logger?}
   */
  getLogger() {
    return this.logger;
  }

  /**
   * Set a global header to be sent with every request
   * @oaram {str}
   * @oaram {str}
   * @returns {Client?}
   */
  setGlobalHeader(key, value) {
    this.globalHeaders[key] = value;
    return this;
  }
  
  /**
   * Get a global header or null if not defined
   * @oaram {str}
   * @returns {string?}
   */
  getGlobalHeader(key) {
    return key in this.globalHeaders ? this.globalHeaders[key] : null;
  }
  
  /**
   * Check if a global header is defined
   * @oaram {str}
   * @returns {bool}
   */
  hasGlobalHeader(key) {
    return key in this.globalHeaders;
  }

  /**
   * Remove a defined global header
   * @oaram {str}
   * @returns {Client}
   */
  removeGlobalHeader(key) {
    delete this.globalHeaders[key];
    return this;
  }

  /**
   * Queue a Request object for a Promise.
   * @param {Request} request
   * @returns {Promise}
   */
  promise(request) {
    var self = this;

    return new Promise(function onResolvePromise(resolve, reject) {
      self.send(request, function onRequestComplete(error, response) {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  /**
   * Send a Request object with callback.
   * @param {Request} request
   * @param {Client~sendCallback} callback
   * @throws {Error} When an invalid callback is supplied
   * @returns {void}
   */
  send(request, callback) {
    var data, timeout;
    var i, l, i2, l2;
    var mrequests, orequests;
    var headers = this.globalHeaders;
    var self = this;

    var defaultStore = this.getOption('default_store_code');

    if (!util.isFunction(callback)) {
      throw new Error('Expecting a function callback');
    } else if (!util.isInstanceOf(request, abstract.Request)) {
      callback(new Error('Expecting instance of Request'), null);
    }

    if (util.isInstanceOf(request, MultiCallRequest)) {
      mrequests = request.getRequests();

      for (i = 0, l = mrequests.length; i < l; i++) {
        if (util.isInstanceOf(mrequests[i], MultiCallOperation)) {
          orequests = mrequests[i].getRequests();

          for (i2 = 0, l2 = orequests.length; i2 < l2; i2++) {
            if (orequests[i2].getScope() == abstract.Request.REQUEST_SCOPE_STORE &&
                !util.isNullOrUndefined(orequests[i2].getStoreCode()) &&
                !util.isNullOrUndefined(defaultStore) &&
                orequests[i2].getScope() != defaultStore) {
              orequests[i2].setStoreCode(defaultStore);
            }
          }
        } else {
          if (mrequests[i].getScope() == abstract.Request.REQUEST_SCOPE_STORE &&
            util.isNullOrUndefined(mrequests[i].getStoreCode()) &&
            !util.isNullOrUndefined(defaultStore)) {
            mrequests[i].setStoreCode(defaultStore);
          }
        }
      }

      data = request.toObject();
    } else {
      if (request.getScope() == abstract.Request.REQUEST_SCOPE_STORE &&
          util.isNullOrUndefined(request.getStoreCode()) &&
          !util.isNullOrUndefined(defaultStore)) {
          request.setStoreCode(defaultStore);
      }

      data = Object.assign(request.toObject(), { Function: request.getFunction() });
    }

    if (!util.isObject(data)) {
      callback(new Error(util.format('Expected an Object but but a %s', typeof data)), null);
    }

    if (this.options.require_timestamps) {
      data['Miva_Request_Timestamp'] = Math.floor(Date.now() / 1000);
    }

    if ((timeout = parseInt(this.getOption('operation_timeout'))) && timeout != CLIENT_DEFAULT_OPERATION_TIMEOUT) {
      headers['X-Miva-API-Timeout'] = timeout;
    }

    if (request.getBinaryEncoding() == abstract.Request.BINARY_ENCODING_BASE64) {
      headers['X-Miva-API-Binary-Encoding'] = request.getBinaryEncoding();
    }
    
    headers = request.processRequestHeaders(headers);

    if (!util.isObject(headers)) {
      headers = {};
    }

    if (util.isInstanceOf(this.logger, Logger)) {
      this.logger.logRequest(request, headers, data);
    }

    this.sendLowLevel(data, headers, function onJsonResponse(error, httpResponse, content) {
      var response;
      var errorResponse;

      if (error) {
        callback(error, null);
      } else {
        errorResponse = httpResponse.statusCode < 200 || httpResponse.statusCode >= 300;

        try {
          response = request.createResponse(httpResponse, errorResponse ? {} : JSON.parse(content));
          
          if (util.isInstanceOf(self.logger, Logger)) {
            self.logger.logResponse(response, content);
          }

          if (errorResponse) {
            if (httpResponse.statusCode == 401) {
              callback(new Error('HTTP Authentication Error'), httpResponse);
            } else {
              callback(new Error('HTTP Response Error'), httpResponse);
            }

            return;
          }
        } catch(e) {
          callback(e, null);
          return;
        }

        if (!util.isInstanceOf(response, abstract.Response)) {
          callback(new Error('Request object did not return a Response object'), response);
        } else {
          callback(null, response);
        }
      }
    });
  }

  /**
   * The callback signature for Client~send
   * @callback Client~sendCallback
   * @param {?Error} error
   * @param {?Response} response
   */

  /**
   * Send an low level API request with callback.
   * @param {Object} data
   * @param {Object} headers
   * @param {Client~sendLowLevelCallback} callback
   * @returns {http.ClientRequest|https.ClientRequest}
   */
  sendLowLevel(data, headers, callback) {
    var body;
    var options;
    var proto;

    if (this.endpoint.protocol.toLowerCase() === 'https:') {
      proto = https;
    } else {
      proto = http;
    }

    body = JSON.stringify(data);

    // Keep compatibility with Node version less than 10.9.0
    options = {
      hostname: this.endpoint.hostname,
      port: this.endpoint.port,
      path: this.endpoint.pathname,
      method: 'POST',
      headers: Object.assign(headers, {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body, 'utf8')
      })
    };

    const request = proto.request(options, function onPrepareResponse(response) {
      var json;
      var content  = '';

      response.setEncoding('utf8');

      response.on('data', function onChunkReceived(chunk) {
        content += chunk;
      }).on('end', function onResponseEnd() {
        callback(null, this, content);
      })
    }).on('error', function onRequestError(error) {
      callback(error, this, null);
    });

    this.generateAuthHeader(body).then(authHeader => {
      request.setHeader('X-Miva-API-Authorization', authHeader);
      request.write(body);
      request.end();
    }).catch(error => {
      throw error;
    });

    return request;
  }

  /**
   * The callback signature for Client~sendLowLevel
   * @callback Client~sendLowLevelCallback
   * @param {?Error} error
   * @param {?} httpResponse
   * @param {?Buffer} response
   */

  /**
   * Generates the authentication header value.
   * @param {string} data
   * @returns {Promise}
   */
  generateAuthHeader(data) {
    if (!util.isInstanceOf(this.authenticator, Authenticator)) {
      throw new Error('Expected an instance of Authenticator');
    }

    return this.authenticator.generateAuthenticationHeader(data);
  }

  /**
   * Create a Request object by name.
   * @param {string} name
   * @param {?Model} model
   * @throws {Error}
   */
  createRequest(name, model = null) {
    if (name.indexOf('_') !== -1) {
      name = name.replace(/_/g, '');
    }

    if (name in requests && util.isFunction(requests[name])) {
      return new requests[name](this, model);
    }

    throw new Error(util.format('Request %s Not Found', name));
  }
}


/** 
 * Handles sending API requests
 * @see https://docs.miva.com/json-api/#authentication
 */
class Client extends BaseClient {
  /**
   * Client Constructor.
   * @param {URL|string} endpoint
   * @param {string} apiToken
   * @param {string} signingKey
   * @param {Object} options
   */
  constructor(endpoint, apiToken, signingKey, options = {}) {
    super(endpoint, new TokenAuthenticator(apiToken, signingKey), options);
    if (!util.isNullOrUndefined(options.signing_key_digest)) {
      this.authenticator.setDigestType(options.signing_key_digest);
    }
  }

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
   * Get the api token used to authenticate the request.
   * @returns {string}
   */
  getApiToken() {
    if (util.isInstanceOf(this.authenticator, TokenAuthenticator)) {
      return this.authenticator.getApiToken();
    }

    return null;
  }

  /**
   * Set the api token used to authenticate the request.
   * @param {string} apiToken
   * @returns {Client}
   */
  setApiToken(apiToken) {
    if (util.isInstanceOf(this.authenticator, TokenAuthenticator)) {
      this.authenticator.setApiToken(apiToken);
    }

    return this;
  }

  /**
   * Get the signing key used to sign requests. Base64 encoded.
   * @returns {string}
   */
  getSigningKey() {
    if (util.isInstanceOf(this.authenticator, TokenAuthenticator)) {
      return this.authenticator.getSigningKey();
    }

    return null;
  }

  /**
   * Set the signing key used to sign requests. Base64 encoded.
   * @param {string} signingKey
   * @returns {Client}
   */
  setSigningKey(signingKey) {
    if (util.isInstanceOf(this.authenticator, TokenAuthenticator)) {
      this.authenticator.setSigningKey(signingKey);
    }

    return this;
  }

  /**
   * Get a client option.
   * @param {string} key
   * @returns {*}
   */
  getOption(key) {
    if (key === 'signing_key_digest') {
      if (util.isInstanceOf(this.authenticator, TokenAuthenticator)) {
        return this.authenticator.getDigestType();
      }
      return null;
    }

    return super.getOption(key);
  }

  /**
   * Set a client option.
   * @param {string} key
   * @param {*} value
   * @returns {Client}
   */
  setOption(key, value) {
    if (key === 'signing_key_digest') {
      if (util.isInstanceOf(this.authenticator, TokenAuthenticator)) {
        this.authenticator.setDigestType(value);
      }
      return this;
    }

    return super.setOption(key, value);
  }
}


class SSHClient extends BaseClient {
  /**
   * Client Constructor.
   * @param {URL|string} endpoint
   * @param {string} apiToken
   * @param {string} signingKey
   * @param {Object} options
   */
  constructor(endpoint, username, privateKeyPath, password, digestType = SSHPrivateKeyAuthenticator.SIGN_DIGEST_SHA256, options = {}) {
    super(endpoint, new SSHPrivateKeyAuthenticator(username, privateKeyPath, password, digestType), options);
  }

  /**
   * Set the username to authenticate with
   * @param {stirng} username
   * @return self
   */
  setUsername(username) {
    if (util.isInstanceOf(this.authenticator, SSHPrivateKeyAuthenticator)) {
      this.authenticator.setUsername(username);
    }

    return this;
  }

  /**
   * Get the username to authenticate with
   * @return {stirng} username
   */
  getUsername() {
    if (util.isInstanceOf(this.authenticator, SSHPrivateKeyAuthenticator)) {
      return this.authenticator.getUsername();
    }

    return null;
  }

  /**
   * Set the private key file to authenticate with
   * @param {string} path to the private key file
   * @param {string} private key password
   * @returns self
   */
  setPrivateKey(privateKeyPath, password) {
    if (util.isInstanceOf(this.authenticator, SSHPrivateKeyAuthenticator)) {
      this.authenticator.setPrivateKey(privateKeyPath, password);
    }

    return this;
  }

  /**
   * Get the private key to authenticate with
   */
  getPrivateKey() {
    if (util.isInstanceOf(this.authenticator, SSHPrivateKeyAuthenticator)) {
      return this.authenticator.getPrivateKey();
    }

    return null;
  }

  /**
   * Set the sign digest type
   * @param {string}
   */
  setDigestType(digestType) {
    if (util.isInstanceOf(this.authenticator, SSHPrivateKeyAuthenticator)) {
      this.authenticator.setDigestType(digestType);
    }

    return this;
  }

  /**
   * Get the sign digest type
   * @returns {string}
   */
  getDigestType() {
    if (util.isInstanceOf(this.authenticator, SSHPrivateKeyAuthenticator)) {
      return this.authenticator.getDigestType();
    }

    return null;
  }
}


class SSHAgentClient extends BaseClient {
  /**
   * Client Constructor.
   * @param {URL|string} endpoint
   * @param {string} apiToken
   * @param {string} signingKey
   * @param {Object} options
   */
  constructor(endpoint, username, publicKeyFilePath, agentSocketPath = '', digestType = SSHAgentAuthenticator.SIGN_DIGEST_SHA256, options = {}) {
    super(endpoint, new SSHAgentAuthenticator(username, publicKeyFilePath, agentSocketPath, digestType), options);
  }

  /**
   * Set the username to authenticate with
   * @param {stirng} username
   * @return self
   */
  setUsername(username) {
    if (util.isInstanceOf(this.authenticator, SSHAgentAuthenticator)) {
      this.authenticator.setUsername(username);
    }

    return this;
  }

  /**
   * Get the username to authenticate with
   * @return {stirng} username
   */
  getUsername() {
    if (util.isInstanceOf(this.authenticator, SSHAgentAuthenticator)) {
      return this.authenticator.getUsername();
    }

    return null;
  }

  /**
   * Set the public key file to authenticate with
   * @param {string} path to the public key file
   * @returns self
   */
  setPrivateKey(publicKeyPath) {
    if (util.isInstanceOf(this.authenticator, SSHAgentAuthenticator)) {
      this.authenticator.setPublicKey(publicKeyPath);
    }

    return this;
  }

  /**
   * Get the public key to authenticate with
   */
  getPublicKey() {
    if (util.isInstanceOf(this.authenticator, SSHAgentAuthenticator)) {
      return this.authenticator.getPublicKey();
    }

    return null;
  }

  /**
   * Set the sign digest type
   * @param {int}
   */
  setDigestType(digestType) {
    if (util.isInstanceOf(this.authenticator, SSHAgentAuthenticator)) {
      this.authenticator.setDigestType(digestType);
    }

    return this;
  }

  /**
   * Get the sign digest type
   * @returns {int}
   */
  getDigestType() {
    if (util.isInstanceOf(this.authenticator, SSHAgentAuthenticator)) {
      return this.authenticator.getDigestType();
    }

    return null;
  }
}

module.exports = {
  BaseClient,
  Client,
  SSHClient,
  SSHAgentClient
};
