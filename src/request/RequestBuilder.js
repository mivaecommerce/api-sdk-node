/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const responses = require('./../responses');
const { Request } = require('./../abstract');
const { ListQueryRequest } = require('./../listquery');

/** 
 * This class is a utility to create custom requests.
 * @class
 */
class RequestBuilder extends Request
{
  /**
   * RequestBuilder Constructor.
   * @param {?BaseClient} client
   * @param {string} apiFunction
   * @param {?Object} data
   */
  constructor(client, apiFunction, data = {}) {
    super(client);
    this.setScope(Request.REQUEST_SCOPE_STORE);
    this.setFunction(apiFunction);

    if (util.isObject(data)) {
      this.data = data;
    }
  }

  /**
   * Set the api function name to call.
   * @param {string} apiFunction
   * @returns {RequestBuilder}
   */
  setFunction(apiFunction) {
    this.function = apiFunction;
    return this;
  }

  /**
   * Set the request scope. Use store or domain.
   * @param {string} apiFunction
   * @throws Error
   * @returns {RequestBuilder}
   */
  setScope(scope) {
    if (!util.isString(scope)) {
      throw new Error(util.format('Expected a string but got %s', typeof scope));
    }

    scope = scope.toLowerCase();

    if (scope != Request.REQUEST_SCOPE_DOMAIN && scope != Request.REQUEST_SCOPE_STORE) {
      throw new Error('Invalid Request Scope Value');
    }

    this.scope = scope;
    return this;
  }

  /**
   * Set a field value.
   * @param {string} field
   * @param {*} value
   * @returns {RequestBuilder}
   */
  set(field, value) {
    if (!util.isString(field)) {
      throw new Error(util.format('Expected string but got %s', typeof field));
    }

    var nameLower = field.toLowerCase();

    if (nameLower == 'function') {
      return this.setFunction(value);
    } else if (nameLower == 'store_code') {
      return this.setStoreCode(value);
    }

    this.data[field] = value;

    return this;
  }

  /**
   * Get a defined field value or defaultValue if it does not exist.
   * @param {string} field
   * @param {*} defaultValue
   * @returns {*}
   */
  get(field, defaultValue = null) {
    if (!util.isString(field)) {
      throw new Error(util.format('Expected string but got %s', typeof field));
    }

    var nameLower = field.toLowerCase();

    if (nameLower == 'function') {
      return this.getFunction();
    } else if (nameLower == 'store_code') {
      return this.getStoreCode();
    }

    return field in this.data ?
      this.data[field] : defaultValue;
  }

  /**
   * Check if a field is defined in the request data.
   * @param {string} field
   * @returns {bool}
   */
  has(field) {
    if (!util.isString(field)) {
      throw new Error(util.format('Expected string but got %s', typeof field));
    }

    var nameLower = field.toLowerCase();

    if (nameLower == 'function' || nameLower == 'store_code') {
      return true;
    }

    return field in this.data;
  }

  /**
   * Remove a field from the request data.
   * @param {string} field
   * @returns {RequestBuilder}
   */
  remove(field) {
    if (!util.isString(field)) {
      throw new Error(util.format('Expected string but got %s', typeof field));
    }

    var nameLower = field.toLowerCase();

    if (nameLower == 'function' || nameLower == 'store_code') {
      return this;
    }

    if (field in this.data) {
      delete this.data[field];
    }

    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {    
    return Object.assign(super.toObject(), this.data);
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.RequestBuilder(this, httpResponse, data);
  }
}

/** 
 * This class is a utility to create custom list query requests.
 * @class
 */
class ListQueryRequestBuilder extends ListQueryRequest
{
  /**
   * RequestBuilder Constructor.
   * @param {?BaseClient} client
   * @param {string} apiFunction
   * @param {?Object} data
   */
  constructor(client, apiFunction, data = {}) {
    super(client);
    this.setScope(Request.REQUEST_SCOPE_STORE);
    this.setFunction(apiFunction);

    if (util.isObject(data)) {
      this.data = data;
    }
  }

  /**
   * Set the api function name to call.
   * @param {string} apiFunction
   * @returns {ListQueryRequestBuilder}
   */
  setFunction(apiFunction) {
    this.function = apiFunction;
    return this;
  }

  /**
   * Set the request scope. Use store or domain.
   * @param {string} apiFunction
   * @throws Error
   * @returns {ListQueryRequestBuilder}
   */
  setScope(scope) {
    if (!util.isString(scope)) {
      throw new Error(util.format('Expected a string but got %s', typeof scope));
    }

    scope = scope.toLowerCase();

    if (scope != Request.REQUEST_SCOPE_DOMAIN && scope != Request.REQUEST_SCOPE_STORE) {
      throw new Error('Invalid Request Scope Value');
    }

    this.scope = scope;
    return this;
  }

  /**
   * Set a field value.
   * @param {string} field
   * @param {*} value
   * @returns {ListQueryRequestBuilder}
   */
  set(field, value) {
    if (!util.isString(field)) {
      throw new Error(util.format('Expected string but got %s', typeof field));
    }

    var nameLower = field.toLowerCase();

    if (nameLower == 'function') {
      return this.setFunction(value);
    } else if (nameLower == 'store_code') {
      return this.setStoreCode(value);
    }

    this.data[field] = value;

    return this;
  }

  /**
   * Get a defined field value or defaultValue if it does not exist.
   * @param {string} field
   * @param {*} defaultValue
   * @returns {*}
   */
  get(field, defaultValue = null) {
    if (!util.isString(field)) {
      throw new Error(util.format('Expected string but got %s', typeof field));
    }

    var nameLower = field.toLowerCase();

    if (nameLower == 'function') {
      return this.getFunction();
    } else if (nameLower == 'store_code') {
      return this.getStoreCode();
    }

    return field in this.data ?
      this.data[field] : defaultValue;
  }

  /**
   * Check if a field is defined in the request data.
   * @param {string} field
   * @returns {bool}
   */
  has(field) {
    if (!util.isString(field)) {
      throw new Error(util.format('Expected string but got %s', typeof field));
    }

    var nameLower = field.toLowerCase();

    if (nameLower == 'function' || nameLower == 'store_code') {
      return true;
    }

    return field in this.data;
  }

  /**
   * Remove a field from the request data.
   * @param {string} field
   * @returns {ListQueryRequestBuilder}
   */
  remove(field) {
    if (!util.isString(field)) {
      throw new Error(util.format('Expected string but got %s', typeof field));
    }

    var nameLower = field.toLowerCase();

    if (nameLower == 'function' || nameLower == 'store_code') {
      return this;
    }

    if (field in this.data) {
      delete this.data[field];
    }

    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {    
    return Object.assign(super.toObject(), this.data);
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ListQueryRequestBuilder(this, httpResponse, data);
  }
}

module.exports = {
  RequestBuilder,
  ListQueryRequestBuilder
};