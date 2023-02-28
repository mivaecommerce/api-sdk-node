/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** 
 * BusinessAccount data model.
 * @class
 */
class BusinessAccount extends Model {
  /**
   * BusinessAccount Constructor.
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
   * Get title.
   * @returns {string}
   */
  getTitle() {
    return this.getField('title');
  }
  
  /**
   * Get tax_exempt.
   * @returns {boolean}
   */
  getTaxExempt() {
    return this.getField('tax_exempt', false);
  }
  
  /**
   * Get order_cnt.
   * @returns {number}
   */
  getOrderCount() {
    return this.getField('order_cnt', 0);
  }
  
  /**
   * Get order_avg.
   * @returns {number}
   */
  getOrderAverage() {
    return this.getField('order_avg', 0.00);
  }
  
  /**
   * Get formatted_order_avg.
   * @returns {string}
   */
  getFormattedOrderAverage() {
    return this.getField('formatted_order_avg');
  }
  
  /**
   * Get order_tot.
   * @returns {number}
   */
  getOrderTotal() {
    return this.getField('order_tot', 0.00);
  }
  
  /**
   * Get formatted_order_tot.
   * @returns {string}
   */
  getFormattedOrderTotal() {
    return this.getField('formatted_order_tot');
  }
  
  /**
   * Get note_count.
   * @returns {number}
   */
  getNoteCount() {
    return this.getField('note_count', 0);
  }
}

module.exports.BusinessAccount = BusinessAccount;