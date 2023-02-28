/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const models = require('./../models');
const responses = require('./../responses');
const { Request }  = require('./../abstract');

/** 
 * Handles API Request OrderCoupon_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/ordercoupon_update_assigned
 * @class
 */
class OrderCouponUpdateAssigned extends Request {
  /**
   * OrderCouponUpdateAssigned Constructor.
   * @param {?BaseClient} client
   * @param {?Order} order
   */
  constructor(client, order = null) {
    super(client);
    this.function = 'OrderCoupon_Update_Assigned';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.orderId = null;
    this.couponId = null;
    this.editCoupon = null;
    this.couponCode = null;
    this.assigned = null;

    if (util.isInstanceOf(order, models.Order)) {
      if (order.getId()) {
        this.setOrderId(order.getId());
      }
    }
  }

  /**
   * Get Order_ID.
   * @returns {number}
   */
  getOrderId() {
    return this.orderId;
  }

  /**
   * Get Coupon_ID.
   * @returns {number}
   */
  getCouponId() {
    return this.couponId;
  }

  /**
   * Get Edit_Coupon.
   * @returns {string}
   */
  getEditCoupon() {
    return this.editCoupon;
  }

  /**
   * Get Coupon_Code.
   * @returns {string}
   */
  getCouponCode() {
    return this.couponCode;
  }

  /**
   * Get Assigned.
   * @returns {boolean}
   */
  getAssigned() {
    return this.assigned;
  }

  /**
   * Set Order_ID.
   * @param {number} orderId
   * @returns {OrderCouponUpdateAssigned}
   */
  setOrderId(orderId) {
    this.orderId = orderId;
    return this;
  }

  /**
   * Set Coupon_ID.
   * @param {number} couponId
   * @returns {OrderCouponUpdateAssigned}
   */
  setCouponId(couponId) {
    this.couponId = couponId;
    return this;
  }

  /**
   * Set Edit_Coupon.
   * @param {string} editCoupon
   * @returns {OrderCouponUpdateAssigned}
   */
  setEditCoupon(editCoupon) {
    this.editCoupon = editCoupon;
    return this;
  }

  /**
   * Set Coupon_Code.
   * @param {string} couponCode
   * @returns {OrderCouponUpdateAssigned}
   */
  setCouponCode(couponCode) {
    this.couponCode = couponCode;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {OrderCouponUpdateAssigned}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.orderId)) {
      data['Order_ID'] = this.orderId;
    }

    if (!util.isNullOrUndefined(this.couponId)) {
      data['Coupon_ID'] = this.couponId;
    } else if (!util.isNullOrUndefined(this.editCoupon)) {
      data['Edit_Coupon'] = this.editCoupon;
    } else if (!util.isNullOrUndefined(this.couponCode)) {
      data['Coupon_Code'] = this.couponCode;
    }

    if (!util.isNullOrUndefined(this.assigned)) {
      data['Assigned'] = this.assigned;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.OrderCouponUpdateAssigned(this, httpResponse, data);
  }
}

module.exports.OrderCouponUpdateAssigned = OrderCouponUpdateAssigned;