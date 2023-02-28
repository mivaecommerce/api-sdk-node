/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** 
 * SubscriptionOption data model.
 * @class
 */
class SubscriptionOption extends Model {
  /**
   * SubscriptionOption Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get subscrp_id.
   * @returns {number}
   */
  getSubscriptionId() {
    return this.getField('subscrp_id', 0);
  }
  
  /**
   * Get templ_code.
   * @returns {string}
   */
  getTemplateCode() {
    return this.getField('templ_code');
  }
  
  /**
   * Get attr_code.
   * @returns {string}
   */
  getAttributeCode() {
    return this.getField('attr_code');
  }
  
  /**
   * Get value.
   * @returns {string}
   */
  getValue() {
    return this.getField('value');
  }
}

module.exports.SubscriptionOption = SubscriptionOption;