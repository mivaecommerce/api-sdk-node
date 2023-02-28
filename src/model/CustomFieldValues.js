/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const models = require('./../models');
const { Model } = require('./../abstract');

/** 
 * CustomFieldValues data model.
 * @class
 */
class CustomFieldValues extends Model {
  /**
   * CustomFieldValues Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get a value for a module by its code.
   * @param {string} code
   * @param {string} module
   * @returns {*}
   */
  getValue(code, module = 'customfields') {
    return this.hasValue(code, module) ?
      this[module][code] : null;
  }

  /**
   * Check if a value for code and module exists.
   * @param {string} code
   * @param {string} module
   * @returns {boolean}
   */
  hasValue(code, module = 'customfields') {
    return module in this && code in this[module];
  }

  /**
   * Check if a specific module is defined.
   * @param {string} module
   * @returns {boolean}
   */
  hasModule(module) {
    return module in this;
  }

  /**
   * Get a specific modules custom field values.
   * @param {string} module
   * @returns {Object}
   */
  getModule(module) {
      return this.hasModule(module) ? this[module] : {};
  }
  /**
   * Add a custom field value.
   * @param {string} field
   * @param {*} value
   * @param {string} module
   * @returns {CustomFieldValues}
   */
  addValue(field, value, module = 'customfields') {
    if (!this.hasModule(module)) {
      this[module] = {}
    }
    this[module][field] = value;
    return this;
  }
}

module.exports.CustomFieldValues = CustomFieldValues;