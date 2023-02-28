/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** ORDER_RETURN_STATUS constants. */
/** @ignore */
const ORDER_RETURN_STATUS_ISSUED = 500;
/** @ignore */
const ORDER_RETURN_STATUS_RECEIVED = 600;

/** 
 * OrderReturn data model.
 * @class
 */
class OrderReturn extends Model {
  /**
   * OrderReturn Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Constant ORDER_RETURN_STATUS_ISSUED
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_RETURN_STATUS_ISSUED() {
    return ORDER_RETURN_STATUS_ISSUED;
  }

  /**
   * Constant ORDER_RETURN_STATUS_RECEIVED
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_RETURN_STATUS_RECEIVED() {
    return ORDER_RETURN_STATUS_RECEIVED;
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
   * Get code.
   * @returns {string}
   */
  getCode() {
    return this.getField('code');
  }
  
  /**
   * Get status.
   * @returns {number}
   */
  getStatus() {
    return this.getField('status', 0);
  }
  
  /**
   * Get dt_issued.
   * @returns {number}
   */
  getDateTimeIssued() {
    return this.getTimestampField('dt_issued');
  }
  
  /**
   * Get dt_recvd.
   * @returns {number}
   */
  getDateTimeReceived() {
    return this.getTimestampField('dt_recvd');
  }
}

module.exports.OrderReturn = OrderReturn;