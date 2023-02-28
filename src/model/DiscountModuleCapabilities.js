/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** 
 * DiscountModuleCapabilities data model.
 * @class
 */
class DiscountModuleCapabilities extends Model {
  /**
   * DiscountModuleCapabilities Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get preitems.
   * @returns {boolean}
   */
  getPreitems() {
    return this.getField('preitems', false);
  }
  
  /**
   * Get items.
   * @returns {boolean}
   */
  getItems() {
    return this.getField('items', false);
  }
  
  /**
   * Get eligibility.
   * @returns {string}
   */
  getEligibility() {
    return this.getField('eligibility');
  }
  
  /**
   * Get basket.
   * @returns {boolean}
   */
  getBasket() {
    return this.getField('basket', false);
  }
  
  /**
   * Get shipping.
   * @returns {boolean}
   */
  getShipping() {
    return this.getField('shipping', false);
  }
  
  /**
   * Get qualifying.
   * @returns {boolean}
   */
  getQualifying() {
    return this.getField('qualifying', false);
  }
}

module.exports.DiscountModuleCapabilities = DiscountModuleCapabilities;