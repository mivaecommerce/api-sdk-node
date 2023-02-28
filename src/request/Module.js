/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const models = require('./../models');
const responses = require('./../responses');
const { Request }  = require('./../abstract');

/** 
 * Handles API Request Module. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/module
 * @class
 */
class Module extends Request {
  /**
   * Module Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'Module';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.moduleCode = null;
    this.moduleFunction = null;
    this.moduleFields = {};
  }

  /**
   * Get Module_Code.
   * @returns {string}
   */
  getModuleCode() {
    return this.moduleCode;
  }

  /**
   * Get Module_Function.
   * @returns {string}
   */
  getModuleFunction() {
    return this.moduleFunction;
  }

  /**
   * Get Module_Fields.
   * @returns {Object}
   */
  getModuleFields() {
    return this.moduleFields;
  }

  /**
   * Set Module_Code.
   * @param {string} moduleCode
   * @returns {Module}
   */
  setModuleCode(moduleCode) {
    this.moduleCode = moduleCode;
    return this;
  }

  /**
   * Set Module_Function.
   * @param {string} moduleFunction
   * @returns {Module}
   */
  setModuleFunction(moduleFunction) {
    this.moduleFunction = moduleFunction;
    return this;
  }

  /**
   * Set Module_Fields.
   * @param {Object} moduleFields
   * @returns {Module}
   */
  setModuleFields(moduleFields) {
    this.moduleFields = moduleFields;
    return this;
  }

  /**
   * Add custom data to the request.
   *
   * @param {string}
   * @param {*}
   * @returns {Module}
   */
  setModuleField(field, value)
  {
      this.moduleFields[field] = value;
      return this;
  }
    
  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = Object.assign(super.toObject(), this.getModuleFields());

    data['Module_Code'] = this.moduleCode;

    data['Module_Function'] = this.moduleFunction;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.Module(this, httpResponse, data);
  }
}

module.exports.Module = Module;