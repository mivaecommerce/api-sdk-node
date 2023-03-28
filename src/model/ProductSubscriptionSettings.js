/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** 
 * ProductSubscriptionSettings data model.
 * @class
 */
class ProductSubscriptionSettings extends Model {
  /**
   * ProductSubscriptionSettings Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get product_id.
   * @returns {number}
   */
  getProductId() {
    return this.getField('product_id', 0);
  }
  
  /**
   * Get enabled.
   * @returns {boolean}
   */
  getEnabled() {
    return this.getField('enabled', false);
  }
  
  /**
   * Get mandatory.
   * @returns {boolean}
   */
  getMandatory() {
    return this.getField('mandatory', false);
  }
  
  /**
   * Get can_cancel.
   * @returns {boolean}
   */
  getCanCancel() {
    return this.getField('can_cancel', false);
  }
  
  /**
   * Get cncl_min.
   * @returns {number}
   */
  getCancelMinimumRequiredOrders() {
    return this.getField('cncl_min', 0);
  }
  
  /**
   * Get can_qty.
   * @returns {boolean}
   */
  getCanChangeQuantities() {
    return this.getField('can_qty', false);
  }
  
  /**
   * Get qty_min.
   * @returns {number}
   */
  getQuantitiesMinimumRequiredOrders() {
    return this.getField('qty_min', 0);
  }
  
  /**
   * Get can_term.
   * @returns {boolean}
   */
  getCanChangeTerm() {
    return this.getField('can_term', false);
  }
  
  /**
   * Get term_min.
   * @returns {number}
   */
  getTermMinimumRequiredOrders() {
    return this.getField('term_min', 0);
  }
  
  /**
   * Get can_date.
   * @returns {boolean}
   */
  getCanChangeNextDeliveryDate() {
    return this.getField('can_date', false);
  }
  
  /**
   * Get date_min.
   * @returns {number}
   */
  getNextDeliveryDateMinimumRequiredOrders() {
    return this.getField('date_min', 0);
  }
}

module.exports.ProductSubscriptionSettings = ProductSubscriptionSettings;