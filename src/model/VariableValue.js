/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');

/** 
 * VariableValue data model.
 * @class
 */
class VariableValue {
  /**
   * VariableValue Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    this.data = data;
  }

  /**
   * Check if the underlying data is a scalar value
   * @return {bool}
   */
  isScalar() {
    return !util.isArray(this.data) && !util.isObject(this.data);
  }

  /**
   * Check if the underlying data is an array
   * @return {bool}
   */
  isArray() {
    return util.isArray(this.data);
  }

  /**
   * Check if the underlying data is an object
   * @return {bool}
   */
  isObject() {
    return util.isObject(this.data);
  }

  /**
   * Get the underlying data.
   * @return {*}
   */
  getData() {
    return this.data;
  }

  /**
   * Get the data for the request.
   * @return {Object}
   */
  toObject() {
    return this.getData();
  }
}

module.exports.VariableValue = VariableValue;