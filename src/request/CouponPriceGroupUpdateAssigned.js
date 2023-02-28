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
 * Handles API Request CouponPriceGroup_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/couponpricegroup_update_assigned
 * @class
 */
class CouponPriceGroupUpdateAssigned extends Request {
  /**
   * CouponPriceGroupUpdateAssigned Constructor.
   * @param {?BaseClient} client
   * @param {?Coupon} coupon
   */
  constructor(client, coupon = null) {
    super(client);
    this.function = 'CouponPriceGroup_Update_Assigned';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.couponId = null;
    this.editCoupon = null;
    this.couponCode = null;
    this.priceGroupId = null;
    this.priceGroupName = null;
    this.assigned = null;

    if (util.isInstanceOf(coupon, models.Coupon)) {
      if (coupon.getId()) {
        this.setCouponId(coupon.getId());
      } else if (coupon.getCode()) {
        this.setEditCoupon(coupon.getCode());
      }
    }
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
   * Get PriceGroup_ID.
   * @returns {number}
   */
  getPriceGroupId() {
    return this.priceGroupId;
  }

  /**
   * Get PriceGroup_Name.
   * @returns {string}
   */
  getPriceGroupName() {
    return this.priceGroupName;
  }

  /**
   * Get Assigned.
   * @returns {boolean}
   */
  getAssigned() {
    return this.assigned;
  }

  /**
   * Set Coupon_ID.
   * @param {number} couponId
   * @returns {CouponPriceGroupUpdateAssigned}
   */
  setCouponId(couponId) {
    this.couponId = couponId;
    return this;
  }

  /**
   * Set Edit_Coupon.
   * @param {string} editCoupon
   * @returns {CouponPriceGroupUpdateAssigned}
   */
  setEditCoupon(editCoupon) {
    this.editCoupon = editCoupon;
    return this;
  }

  /**
   * Set Coupon_Code.
   * @param {string} couponCode
   * @returns {CouponPriceGroupUpdateAssigned}
   */
  setCouponCode(couponCode) {
    this.couponCode = couponCode;
    return this;
  }

  /**
   * Set PriceGroup_ID.
   * @param {number} priceGroupId
   * @returns {CouponPriceGroupUpdateAssigned}
   */
  setPriceGroupId(priceGroupId) {
    this.priceGroupId = priceGroupId;
    return this;
  }

  /**
   * Set PriceGroup_Name.
   * @param {string} priceGroupName
   * @returns {CouponPriceGroupUpdateAssigned}
   */
  setPriceGroupName(priceGroupName) {
    this.priceGroupName = priceGroupName;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {CouponPriceGroupUpdateAssigned}
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

    if (!util.isNullOrUndefined(this.couponId)) {
      data['Coupon_ID'] = this.couponId;
    } else if (!util.isNullOrUndefined(this.editCoupon)) {
      data['Edit_Coupon'] = this.editCoupon;
    } else if (!util.isNullOrUndefined(this.couponCode)) {
      data['Coupon_Code'] = this.couponCode;
    }

    if (!util.isNullOrUndefined(this.priceGroupId)) {
      data['PriceGroup_ID'] = this.priceGroupId;
    } else if (!util.isNullOrUndefined(this.priceGroupName)) {
      data['PriceGroup_Name'] = this.priceGroupName;
    }

    data['Assigned'] = this.assigned;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CouponPriceGroupUpdateAssigned(this, httpResponse, data);
  }
}

module.exports.CouponPriceGroupUpdateAssigned = CouponPriceGroupUpdateAssigned;