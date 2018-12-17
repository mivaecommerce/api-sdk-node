/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * $Id: abstract.js 71977 2018-12-13 22:32:26Z gidriss $
 */

const util = require('./util');

/** @module Abstract */

/** Abstract data model */
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

/** Abstract request all api requests inherit from. */
class Request {
  /**
   * Request Constructor.
   * @param {?Client} client
   * @returns {void}
   */
  constructor(client = null) {
    this.client    = client;
    this.storeCode = null;
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

    if (!util.isNullOrUndefined(this.storeCode)) {
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
   * @param {Object} data
   * @returns {Response}
   */
  createResponse(data) {
    return new Response(this, data);
  }
}

/** Abstract response all api responses inherit from. */
class Response {
  /**
   * Response constructor.
   * @param {Request} request
   * @param {Object} data
   * @returns void
   */
  constructor(request, data = {}) {
    if (!util.isInstanceOf(request, Request)) {
      throw new Error(util.format('Expected request to be an instance of Request but but got %s',
        typeof request));
    } else if (!util.isObject(data)) {
      throw new Error(util.format('Expected data to be an Object but got %s',
        typeof data));
    }

    this.request = request;
    this.data    = data;
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
}

module.exports = {
  Model,
  Request,
  Response
};
