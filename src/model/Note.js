/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** 
 * Note data model.
 * @class
 */
class Note extends Model {
  /**
   * Note Constructor.
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
   * Get cust_id.
   * @returns {number}
   */
  getCustomerId() {
    return this.getField('cust_id', 0);
  }
  
  /**
   * Get account_id.
   * @returns {number}
   */
  getAccountId() {
    return this.getField('account_id', 0);
  }
  
  /**
   * Get order_id.
   * @returns {number}
   */
  getOrderId() {
    return this.getField('order_id', 0);
  }
  
  /**
   * Get user_id.
   * @returns {number}
   */
  getUserId() {
    return this.getField('user_id', 0);
  }
  
  /**
   * Get notetext.
   * @returns {string}
   */
  getNoteText() {
    return this.getField('notetext');
  }
  
  /**
   * Get dtstamp.
   * @returns {number}
   */
  getDateTimeStamp() {
    return this.getTimestampField('dtstamp');
  }
  
  /**
   * Get cust_login.
   * @returns {string}
   */
  getCustomerLogin() {
    return this.getField('cust_login');
  }
  
  /**
   * Get business_title.
   * @returns {string}
   */
  getBusinessTitle() {
    return this.getField('business_title');
  }
  
  /**
   * Get admin_user.
   * @returns {string}
   */
  getAdminUser() {
    return this.getField('admin_user');
  }
}

module.exports.Note = Note;