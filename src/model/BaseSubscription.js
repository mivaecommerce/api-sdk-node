/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** 
 * BaseSubscription data model.
 * @class
 */
class BaseSubscription extends Model {
  /**
   * BaseSubscription Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get id.
   * @returns {number}
   */
  getId() {
    return this.getField('id', 0);
  }
  
  /**
   * Get order_id.
   * @returns {number}
   */
  getOrderId() {
    return this.getField('order_id', 0);
  }
  
  /**
   * Get line_id.
   * @returns {number}
   */
  getLineId() {
    return this.getField('line_id', 0);
  }
  
  /**
   * Get cust_id.
   * @returns {number}
   */
  getCustomerId() {
    return this.getField('cust_id', 0);
  }
  
  /**
   * Get custpc_id.
   * @returns {number}
   */
  getCustomerPaymentCardId() {
    return this.getField('custpc_id', 0);
  }
  
  /**
   * Get product_id.
   * @returns {number}
   */
  getProductId() {
    return this.getField('product_id', 0);
  }
  
  /**
   * Get subterm_id.
   * @returns {number}
   */
  getSubscriptionTermId() {
    return this.getField('subterm_id', 0);
  }
  
  /**
   * Get addr_id.
   * @returns {number}
   */
  getAddressId() {
    return this.getField('addr_id', 0);
  }
  
  /**
   * Get ship_id.
   * @returns {number}
   */
  getShipId() {
    return this.getField('ship_id', 0);
  }
  
  /**
   * Get ship_data.
   * @returns {string}
   */
  getShipData() {
    return this.getField('ship_data');
  }
  
  /**
   * Get quantity.
   * @returns {number}
   */
  getQuantity() {
    return this.getField('quantity', 0);
  }
  
  /**
   * Get termrem.
   * @returns {number}
   */
  getTermRemaining() {
    return this.getField('termrem', 0);
  }
  
  /**
   * Get termproc.
   * @returns {number}
   */
  getTermProcessed() {
    return this.getField('termproc', 0);
  }
  
  /**
   * Get firstdate.
   * @returns {number}
   */
  getFirstDate() {
    return this.getTimestampField('firstdate');
  }
  
  /**
   * Get lastdate.
   * @returns {number}
   */
  getLastDate() {
    return this.getTimestampField('lastdate');
  }
  
  /**
   * Get nextdate.
   * @returns {number}
   */
  getNextDate() {
    return this.getTimestampField('nextdate');
  }
  
  /**
   * Get status.
   * @returns {string}
   */
  getStatus() {
    return this.getField('status');
  }
  
  /**
   * Get message.
   * @returns {string}
   */
  getMessage() {
    return this.getField('message');
  }
  
  /**
   * Get cncldate.
   * @returns {number}
   */
  getCancelDate() {
    return this.getTimestampField('cncldate');
  }
  
  /**
   * Get tax.
   * @returns {number}
   */
  getTax() {
    return this.getField('tax', 0.00);
  }
  
  /**
   * Get formatted_tax.
   * @returns {string}
   */
  getFormattedTax() {
    return this.getField('formatted_tax');
  }
  
  /**
   * Get shipping.
   * @returns {number}
   */
  getShipping() {
    return this.getField('shipping', 0.00);
  }
  
  /**
   * Get formatted_shipping.
   * @returns {string}
   */
  getFormattedShipping() {
    return this.getField('formatted_shipping');
  }
  
  /**
   * Get subtotal.
   * @returns {number}
   */
  getSubtotal() {
    return this.getField('subtotal', 0.00);
  }
  
  /**
   * Get formatted_subtotal.
   * @returns {string}
   */
  getFormattedSubtotal() {
    return this.getField('formatted_subtotal');
  }
  
  /**
   * Get total.
   * @returns {number}
   */
  getTotal() {
    return this.getField('total', 0.00);
  }
  
  /**
   * Get formatted_total.
   * @returns {string}
   */
  getFormattedTotal() {
    return this.getField('formatted_total');
  }
  
  /**
   * Get authfails.
   * @returns {number}
   */
  getAuthorizationFailureCount() {
    return this.getField('authfails', 0);
  }
  
  /**
   * Get lastafail.
   * @returns {number}
   */
  getLastAuthorizationFailure() {
    return this.getTimestampField('lastafail');
  }
}

module.exports.BaseSubscription = BaseSubscription;