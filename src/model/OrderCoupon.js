/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');
const Decimal = require('decimal.js-light');

/** 
 * OrderCoupon data model.
 * @class
 */
class OrderCoupon extends Model {
  /**
   * OrderCoupon Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);

    if (!util.isNullOrUndefined(this.total))  this.total = new Decimal(this.total);
  }

  /**
   * Get order_id.
   * @returns {number}
   */
  getOrderId() {
    return this.getField('order_id', 0);
  }
  
  /**
   * Get coupon_id.
   * @returns {number}
   */
  getCouponId() {
    return this.getField('coupon_id', 0);
  }
  
  /**
   * Get code.
   * @returns {string}
   */
  getCode() {
    return this.getField('code');
  }
  
  /**
   * Get descrip.
   * @returns {string}
   */
  getDescription() {
    return this.getField('descrip');
  }
  
  /**
   * Get total.
   * @returns {Decimal}
   */
  getTotal() {
    return this.getField('total', new Decimal(0.00));
  }
  
  /**
   * Get assigned.
   * @returns {boolean}
   */
  getAssigned() {
    return this.getField('assigned', false);
  }
}

module.exports.OrderCoupon = OrderCoupon;