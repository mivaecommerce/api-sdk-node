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
 * Handles API Request CouponCustomer_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/couponcustomer_update_assigned
 * @class
 */
class CouponCustomerUpdateAssigned extends Request {
  /**
   * CouponCustomerUpdateAssigned Constructor.
   * @param {?BaseClient} client
   * @param {?Coupon} coupon
   */
  constructor(client, coupon = null) {
    super(client);
    this.function = 'CouponCustomer_Update_Assigned';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.customerId = null;
    this.editCustomer = null;
    this.customerLogin = null;
    this.couponId = null;
    this.editCoupon = null;
    this.couponCode = null;
    this.assigned = null;

    if (util.isInstanceOf(coupon, models.Coupon)) {
      if (coupon.getId()) {
        this.setCouponId(coupon.getId());
      }

      this.setCouponCode(coupon.getCode());
    }
  }

  /**
   * Get Customer_ID.
   * @returns {number}
   */
  getCustomerId() {
    return this.customerId;
  }

  /**
   * Get Edit_Customer.
   * @returns {string}
   */
  getEditCustomer() {
    return this.editCustomer;
  }

  /**
   * Get Customer_Login.
   * @returns {string}
   */
  getCustomerLogin() {
    return this.customerLogin;
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
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {CouponCustomerUpdateAssigned}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
    return this;
  }

  /**
   * Set Edit_Customer.
   * @param {string} editCustomer
   * @returns {CouponCustomerUpdateAssigned}
   */
  setEditCustomer(editCustomer) {
    this.editCustomer = editCustomer;
    return this;
  }

  /**
   * Set Customer_Login.
   * @param {string} customerLogin
   * @returns {CouponCustomerUpdateAssigned}
   */
  setCustomerLogin(customerLogin) {
    this.customerLogin = customerLogin;
    return this;
  }

  /**
   * Set Coupon_ID.
   * @param {number} couponId
   * @returns {CouponCustomerUpdateAssigned}
   */
  setCouponId(couponId) {
    this.couponId = couponId;
    return this;
  }

  /**
   * Set Edit_Coupon.
   * @param {string} editCoupon
   * @returns {CouponCustomerUpdateAssigned}
   */
  setEditCoupon(editCoupon) {
    this.editCoupon = editCoupon;
    return this;
  }

  /**
   * Set Coupon_Code.
   * @param {string} couponCode
   * @returns {CouponCustomerUpdateAssigned}
   */
  setCouponCode(couponCode) {
    this.couponCode = couponCode;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {CouponCustomerUpdateAssigned}
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

    if (!util.isNullOrUndefined(this.customerId)) {
      data['Customer_ID'] = this.customerId;
    } else if (!util.isNullOrUndefined(this.editCustomer)) {
      data['Edit_Customer'] = this.editCustomer;
    } else if (!util.isNullOrUndefined(this.customerLogin)) {
      data['Customer_Login'] = this.customerLogin;
    }

    data['Customer_Login'] = this.customerLogin;

    data['Coupon_Code'] = this.couponCode;

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
    return new responses.CouponCustomerUpdateAssigned(this, httpResponse, data);
  }
}

module.exports.CouponCustomerUpdateAssigned = CouponCustomerUpdateAssigned;