/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * $Id: client.js 72014 2018-12-13 23:53:31Z gidriss $
 */

const http      = require('http');
const https     = require('https');
const crypto    = require('crypto');
const util      = require('./util');
const abstract  = require('./abstract');
const requests  = require('./requests');
const { MultiCallRequest } = require('./multicall');

/** @module Client */

/** SIGN_DIGEST constants */
/** @ignore */
const SIGN_DIGEST_SHA1    = 'sha1';
/** @ignore */
const SIGN_DIGEST_SHA256  = 'sha256';
/** @ignore */
const SIGN_DIGEST_NONE    = '';

/** 
 * Handles sending API requests
 * @see https://docs.miva.com/json-api/#authentication
 */
class Client {
  /**
   * Client Constructor.
   * @param {URL|string} endpoint
   * @param {string} apiToken
   * @param {string} signingKey
   * @param {Object} options
   */
  constructor(endpoint, apiToken, signingKey, options = {}) {
    this.setEndpoint(endpoint);
    this.setApiToken(apiToken);
    this.setSigningKey(signingKey);

    this.options = Object.assign({
      require_timestamps: true,
      signing_key_digest: 'sha256',
      default_store_code: '',
    }, options);
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
   * Queue a Request object for a Promise.
   * @param {Request} request
   * @returns {Promise}
   */
  promise(request) {
    var self = this;

    return new Promise(function onResolvePromise(resolve, reject) {
      self.send(request, function onRequestComplete(response, error) {
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
   * @throws {Error} when invalid Request object or invalid callback
   * @returns {void}
   */
  send(request, callback) {
    var data;
    var i;
    var l;
    var i2;
    var l2;

    if (!util.isFunction(callback)) {
      throw new Error('Expecting a function callback');
    } else if (!util.isInstanceOf(request, abstract.Request)) {
      callback(new Error('Expecting instance of Request'), null);
    }

    data = request.toObject();

    if (!util.isInstanceOf(request, MultiCallRequest)) {
      if (!util.isObject(data)) {
        throw new Error(util.format('Expected an Object but but a %s', typeof data));
      }

      data['Function'] = request.getFunction();

      if (util.isNullOrUndefined(data['Store_Code']) && !util.isNullOrUndefined(this.options.default_store_code)) {
        data['Store_Code'] = this.options.default_store_code
      }
    } else {
      if (!util.isUndefined(data['Operations']) && util.isArray(data['Operations'])) {
        for (i = 0, l = data['Operations'].length; i < l; i++) {
          if (util.isNullOrUndefined(data['Operations'][i]['Store_Code'])) {
            data['Operations'][i]['Store_Code'] = this.options.default_store_code;
          }

          if (!util.isUndefined(data['Operations'][i]['Iterations']) && util.isArray(data['Operations'][i]['Iterations'])) {
            for (i2 = 0, l2 = data['Operations'][i]['Iterations'].length; i2 < l2; i2++) {
              if (util.isNullOrUndefined(data['Operations'][i]['Iterations'][i2]['Store_Code'])) {
                data['Operations'][i]['Iterations'][i2]['Store_Code'] = this.options.default_store_code;
              }
            }
          }
        }
      }
    }

    if (this.options.require_timestamps) {
      data['Miva_Request_Timestamp'] = Math.floor(Date.now() / 1000);
    }

    this.sendLowLevel(data, function onJsonResponse(error, json) {
      var response;

      if (error) {
        callback(error, null);
      } else {
        response = request.createResponse(json);

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
   * @param {Client~sendLowLevelCallback} callback
   * @returns {http.ClientRequest|https.ClientRequest}
   */
  sendLowLevel(data, callback) {
    var body;
    var options;
    var proto;

    if (this.endpoint.protocol.toLowerCase() === 'https:') {
      proto = https;
    } else {
      proto = http;
    }

    body = JSON.stringify(data);

    options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body, 'utf8'),
        'X-Miva-API-Authorization': this.generateAuthHeader(body)
      }
    };

    const request = proto.request(this.endpoint, options, function onPrepareResponse(response) {
      var json;
      var content  = '';

      response.setEncoding('utf8');

      response.on('data', function onChunkReceived(chunk) {
        content += chunk;
      }).on('end', function onResponseEnd() {
        try {          
          json = JSON.parse(content);
        } catch (e) {
          callback(new Error(e.message), null);
          return;
        }

        callback(null, json);
      }).on('error', function onResponseError(error) {
        callback(error, null);
      });
    });

    request.write(body);
    request.end();

    return request;
  }

  /**
   * The callback signature for Client~sendLowLevel
   * @callback Client~sendLowLevelCallback
   * @param {?Error} error
   * @param {?Object} response
   */

  /**
   * Generates the authentication header value.
   * @param {string} data
   * @returns {string}
   */
  generateAuthHeader(data) {
    var key;
    var hash;
    var digest = this.getOption('signing_key_digest');
    
    if (digest !== SIGN_DIGEST_SHA1 && digest !== SIGN_DIGEST_SHA256) {
      return util.format('MIVA %s', this.getApiToken());
    }

    key = Buffer.from(this.getSigningKey(), 'base64');

    if (!key.byteLength) {
      throw new Error('No signing key assigned to sign request');
    }

    hash = crypto.createHmac(digest, key).update(data);

    return util.format('MIVA-HMAC-%s %s:%s', digest.toUpperCase(), this.getApiToken(), hash.digest('base64'));
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

module.exports = {
  Client
};