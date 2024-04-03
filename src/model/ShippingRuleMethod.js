/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** 
 * ShippingRuleMethod data model.
 * @class
 */
class ShippingRuleMethod extends Model {
  /**
   * ShippingRuleMethod Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get module_code.
   * @returns {string}
   */
  getModuleCode() {
    return this.getField('module_code');
  }
  
  /**
   * Get method_code.
   * @returns {string}
   */
  getMethodCode() {
    return this.getField('method_code');
  }
  
  /**
   * Set module_code.
   * @param {string} moduleCode
   * @returns {ShippingRuleMethod}
   */
  setModuleCode(moduleCode) {
    return this.setField('module_code', moduleCode);
  }

  /**
   * Set method_code.
   * @param {string} methodCode
   * @returns {ShippingRuleMethod}
   */
  setMethodCode(methodCode) {
    return this.setField('method_code', methodCode);
  }
}

module.exports.ShippingRuleMethod = ShippingRuleMethod;