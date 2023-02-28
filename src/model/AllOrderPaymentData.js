/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** 
 * AllOrderPaymentData data model.
 * @class
 */
class AllOrderPaymentData extends Model {
  /**
   * AllOrderPaymentData Constructor.
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
   * Get type.
   * @returns {number}
   */
  getType() {
    return this.getField('type', 0);
  }
  
  /**
   * Get refnum.
   * @returns {string}
   */
  getReferenceNumber() {
    return this.getField('refnum');
  }
  
  /**
   * Get amount.
   * @returns {number}
   */
  getAmount() {
    return this.getField('amount', 0.00);
  }
  
  /**
   * Get formatted_amount.
   * @returns {string}
   */
  getFormattedAmount() {
    return this.getField('formatted_amount');
  }
  
  /**
   * Get available.
   * @returns {number}
   */
  getAvailable() {
    return this.getField('available', 0.00);
  }
  
  /**
   * Get formatted_available.
   * @returns {string}
   */
  getFormattedAvailable() {
    return this.getField('formatted_available');
  }
  
  /**
   * Get dtstamp.
   * @returns {number}
   */
  getDateTimeStamp() {
    return this.getField('dtstamp', 0);
  }
  
  /**
   * Get ip.
   * @returns {string}
   */
  getIp() {
    return this.getField('ip');
  }
}

module.exports.AllOrderPaymentData = AllOrderPaymentData;