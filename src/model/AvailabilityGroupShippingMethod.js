/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** 
 * AvailabilityGroupShippingMethod data model.
 * @class
 */
class AvailabilityGroupShippingMethod extends Model {
  /**
   * AvailabilityGroupShippingMethod Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get mod_code.
   * @returns {string}
   */
  getModuleCode() {
    return this.getField('mod_code');
  }
  
  /**
   * Get meth_code.
   * @returns {string}
   */
  getMethodCode() {
    return this.getField('meth_code');
  }
  
  /**
   * Get method_name.
   * @returns {string}
   */
  getMethodName() {
    return this.getField('method_name');
  }
  
  /**
   * Get assigned.
   * @returns {boolean}
   */
  getAssigned() {
    return this.getField('assigned', false);
  }
}

module.exports.AvailabilityGroupShippingMethod = AvailabilityGroupShippingMethod;