/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./util');

/** @module Abstract */

/** REQUEST_SCOPE constants. */
/** @ignore */
const REQUEST_SCOPE_STORE = 'store';
/** @ignore */
const REQUEST_SCOPE_DOMAIN = 'domain';

/** BINARY_ENCODING constants. */
/** @ignore */
const BINARY_ENCODING_DEFAULT = 'json';
/** @ignore */
const BINARY_ENCODING_BASE64 = 'base64';

/**
 * Abstract data model
 * @class
 */
class Model {
  /**
   * @param {object} data
   * @returns {void}
   */
  constructor(data = {}) {
    if (util.isObject(data)) {
      Object.assign(this, data);
    }
  }

  /**
   * Get a field value.
   * @param {string} field
   * @param {*} defaultValue
   * @returns {*}
   */
  getField(field, defaultValue = null) {
    if (!util.isUndefined(this[field])) {
      return this[field];
    }

    return defaultValue;
  }

  /**
   * Check if a field is defined.
   * @param {string} field
   * @returns {boolean}
   */
  hasField(field) {
    return field in this;
  }

  /**
   * Set a field value.
   * @param {string} field
   * @param {*} value
   * @returns {Model}
   */
  setField(field, value) {
    this[field] = value;
    return this;
  }

  /**
   * Get the data for the request.
   * @return {Object}
   */
  toObject() {
    return this;
  }
}

/**
 * Abstract request all api requests inherit from.
 * @class
 */
class Request {
  /**
   * Request Constructor.
   * @param {?Client} client
   * @returns {void}
   */
  constructor(client = null) {
    this.client         = client;
    this.storeCode      = null;
    this.scope          = REQUEST_SCOPE_STORE;
    this.binartEncoding = BINARY_ENCODING_DEFAULT;
  }
  
  /**
   * Constant REQUEST_SCOPE_STORE
   * @returns {string}
   * @const
   * @static
   */
  static get REQUEST_SCOPE_STORE() {
    return REQUEST_SCOPE_STORE;
  }

  /**
   * Constant REQUEST_SCOPE_DOMAIN
   * @returns {string}
   * @const
   * @static
   */
  static get REQUEST_SCOPE_DOMAIN() {
    return REQUEST_SCOPE_DOMAIN;
  }

  /**
   * Constant BINARY_ENCODING_DEFAULT
   * @returns {string}
   * @const
   * @static
   */
  static get BINARY_ENCODING_DEFAULT() {
    return BINARY_ENCODING_DEFAULT;
  }

  /**
   * Constant BINARY_ENCODING_BASE64
   * @returns {string}
   * @const
   * @static
   */
  static get BINARY_ENCODING_BASE64() {
    return BINARY_ENCODING_BASE64;
  }

  /**
   * Get the function of the request.
   * @returns {string}
   */
  getFunction() {
    if (util.isNullOrUndefined(this.function) || !this.function.length) {
      return this.constructor.name;
    }

    return this.function;
  }

  /**
   * Get the store code set for the request.
   * @returns {string}
   */
  getStoreCode() {
    return this.storeCode;
  }

  /**
   * Set the store code for the request.
   * @param {string} storeCode
   * @returns {Request}
   */
  setStoreCode(storeCode) {
    this.storeCode = storeCode;
    return this;
  }

  /**
   * Get the scope of request.
   * @returns {string}
   */
  getScope() {
    return this.scope;
  }

  /**
   * Get the type of binary encoding the request uses.
   * @returns {string}
   */
  getBinaryEncoding() {
    return this.binaryEncoding;
  }

  /**
   * Set the type of binary encoding the request uses.
   * @param {string} storeCode
   * @returns {Request}
   */
  setBinaryEncoding(binaryEncoding) {
    if (util.isString(binaryEncoding)) {
      binaryEncoding = binaryEncoding.toLower();

      if (binaryEncoding == BINARY_ENCODING_DEFAULT || binaryEncoding == BINARY_ENCODING_BASE64) {
        this.binaryEncoding = binaryEncoding;
      }      
    }

    return this;
  }

  /**
   * Return the assigned client.
   * @returns {?Client}
   */
  getClient() {
    return this.client;
  }

  /**
   * Set the Client used for the request.
   * @param {?Client} client
   * @returns {Request}
   */
  setClient(client) {
    this.client = client;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @returns {Object}
   */
  toObject() {
    var ret = {};

    if (this.scope == REQUEST_SCOPE_STORE && !util.isNullOrUndefined(this.storeCode)) {
      ret['Store_Code'] = this.storeCode;
    }

    return ret;
  }

  /**
   * Send this object via the assigned client.
   * @param {Request~sendCallback} callback
   * @returns {void}
   */
  send(callback) {
    if (this.client) {
      return this.client.send(this, callback);
    } else {
      callback(new Error('No client assigned to send request'), null);
    }
  }

  /**
   * The callback signature for Request~send
   * @callback Request~sendCallback
   * @param {?Error} error
   * @param {?Response} response
   */

  /**
   * Queue this request via the assigned client and get a Promise.
   * @returns {Promise}
   * @throws {Error}
   */
  promise() {
    if (this.client) {
      return this.client.promise(this);
    }

    throw new Error('No client assigned to send request');
  }

  /**
   * Override this method to create a response for this request.
   * @abstract
   * @param {Object} httpResponse
   * @param {http.IncomingMessage} data
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new Response(this,httpResponse, data);
  }

  /**
   * Override this method to add additional headers into the underlying request
   * @abstract
   * @param {Object} headers
   * @returns {Object}
   */
  processRequestHeaders(headers) {
    return headers;
  }
}

/**
 * Abstract response all api responses inherit from.
 * @class
 */
class Response {
  /**
   * Response constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   * @returns void
   */
  constructor(request, httpResponse, data = {}) {
    if (!util.isInstanceOf(request, Request)) {
      throw new Error(util.format('Expected request to be an instance of Request but but got %s',
        typeof request));
    } else if (!util.isObject(data)) {
      throw new Error(util.format('Expected data to be an Object but got %s',
        typeof data));
    }

    this.request      = request;
    this.httpResponse = httpResponse;
    this.data         = data;
  }

  /**
   * Check is the response was a success.
   * @returns {boolean}
   */
  isSuccess() {
    return !util.isNullOrUndefined(this.data['success']) &&
      (this.data['success'] === true || this.data['success'] === 1);
  }

  /**
   * Check is the response was a error.
   * @returns {boolean}
   */
  isError() {
    return !util.isNullOrUndefined(this.data['success']) &&
      (this.data['success'] === false || this.data['success'] === 0);
  }

  /**
   * Get the error message.
   * @returns {?string}
   */
  getErrorMessage() {
    return !util.isNullOrUndefined(this.data['error_message']) ?
      this.data['error_message'] : null;
  }

  /**
   * Get the error code.
   * @returns {?string}
   */
  getErrorCode() {
      return !util.isNullOrUndefined(this.data['error_code']) ?
          this.data['error_code'] : null;
  }

  /**
   * Get the number of input errors.
   * @returns {number}
   */
  getInputErrorCount() {
    return !util.isNullOrUndefined(this.data['input_errors']) ?
      this.data['input_errors'] : 0;
  }

  /**
   * Get the fields which encountered a validation error.
   * @returns {Array}
   */
  getErrorFields() {
    return !util.isNullOrUndefined(this.data['error_fields']) ?
      this.data['error_fields'] : [];
  }

  /**
   * Get the field which triggered the error.
   * @returns {?string}
   */
  getErrorField() {
    return !util.isNullOrUndefined(this.data['error_field']) ?
      this.data['error_field'] : null;
  }

  /**
   * Get the error message associated with the error field that cause the error.
   * @returns {?string}
   */
  getErrorFieldMessage() {
    return !util.isNullOrUndefined(this.data['error_field_message']) ?
      this.data['error_field_message'] : null;
  }

  /**
   * Check if the error response is a list error.
   * @returns {boolean}
   */
  isListError() {
    return !util.isNullOrUndefined(this.data['list_error']) ?
      this.data['list_error'] : false;
  }

  /**
   * Check if the error response is a validation error.
   * @returns {boolean}
   */
  isValidationError() {
    return !util.isNullOrUndefined(this.data['validation_error']) ?
      this.data['validation_error'] : false;
  }

  /**
   * Check if the error response is a input error.
   * @returns {boolean}
   */
  isInputError() {
    return !util.isNullOrUndefined(this.data['input_errors']) ?
      this.data['input_errors'] : false;
  }

  /**
   * Get the error messages associated with the response.
   * @returns {Array}
   */
  getErrors() {
    return !util.isNullOrUndefined(this.data['errors']) ?
      this.data['errors'] : [];
  }

  /**
   * Get the underlying data object.
   * @returns {Array}
   */
  getData() {
    return this.data;
  }

  /**
   * Get the initiating Request object.
   * @returns {Request}
   */
  getRequest() {
    return this.request;
  }

  /**
   * Get the underlying HttpResponse object
   * @returns {Request}
   */
  getHttpResponse() {
    return this.httpResponse;
  }
}

module.exports = {
  Model,
  Request,
  Response
};
