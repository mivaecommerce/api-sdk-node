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
 * Handles API Request CouponList_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/couponlist_delete
 * @class
 */
class CouponListDelete extends Request {
  /**
   * CouponListDelete Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'CouponList_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.couponIds = [];
  }

  /**
   * Get Coupon_IDs.
   * @returns {Array}
   */
  getCouponIds() {
    return this.couponIds;
  }

  /**
   * Add Coupon_IDs.
   * @param {number} couponId
   * @returns {CouponListDelete}
   */
  addCouponId(couponId) {
    this.couponIds.push(couponId);
    return this;
  }

  /**
   * Add Coupon model.
   * @param {Coupon} coupon
   * @throws {Error}
   * @returns {CouponListDelete}
   */
  addCoupon(coupon) {
    if (!util.isInstanceOf(coupon, models.Coupon)) {
      throw new Error(util.format('Expected instance of Coupon but got %s',
        typeof coupon));
    }

    if (coupon.getId()) {
      this.couponIds.push(coupon.getId());
    }

    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['Coupon_IDs'] = this.couponIds;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CouponListDelete(this, httpResponse, data);
  }
}

module.exports.CouponListDelete = CouponListDelete;