/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** 
 * OrderPaymentAuthorize data model.
 * @class
 */
class OrderPaymentAuthorize extends Model {
  /**
   * OrderPaymentAuthorize Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get valid.
   * @returns {boolean}
   */
  getValid() {
    return this.getField('valid', false);
  }
  
  /**
   * Get total_auth.
   * @returns {number}
   */
  getTotalAuthorized() {
    return this.getField('total_auth', 0.00);
  }
  
  /**
   * Get formatted_total_auth.
   * @returns {string}
   */
  getFormattedTotalAuthorized() {
    return this.getField('formatted_total_auth');
  }
  
  /**
   * Get total_capt.
   * @returns {number}
   */
  getTotalCaptured() {
    return this.getField('total_capt', 0.00);
  }
  
  /**
   * Get formatted_total_capt.
   * @returns {string}
   */
  getFormattedTotalCaptured() {
    return this.getField('formatted_total_capt');
  }
  
  /**
   * Get total_rfnd.
   * @returns {number}
   */
  getTotalRefunded() {
    return this.getField('total_rfnd', 0.00);
  }
  
  /**
   * Get formatted_total_rfnd.
   * @returns {string}
   */
  getFormattedTotalRefunded() {
    return this.getField('formatted_total_rfnd');
  }
  
  /**
   * Get net_capt.
   * @returns {number}
   */
  getNetCaptured() {
    return this.getField('net_capt', 0.00);
  }
  
  /**
   * Get formatted_net_capt.
   * @returns {string}
   */
  getFormattedNetCaptured() {
    return this.getField('formatted_net_capt');
  }
}

module.exports.OrderPaymentAuthorize = OrderPaymentAuthorize;