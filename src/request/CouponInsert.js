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
 * Handles API Request Coupon_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/coupon_insert
 * @class
 */
class CouponInsert extends Request {
  /**
   * CouponInsert Constructor.
   * @param {?BaseClient} client
   * @param {?Coupon} coupon
   */
  constructor(client, coupon = null) {
    super(client);
    this.function = 'Coupon_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.code = null;
    this.description = null;
    this.customerScope = null;
    this.dateTimeStart = null;
    this.dateTimeEnd = null;
    this.maxUse = null;
    this.maxPer = null;
    this.active = null;
    this.priceGroupId = null;

    if (util.isInstanceOf(coupon, models.Coupon)) {
      this.setCode(coupon.getCode());
      this.setDescription(coupon.getDescription());
      this.setCustomerScope(coupon.getCustomerScope());
      this.setDateTimeStart(coupon.getDateTimeStart());
      this.setDateTimeEnd(coupon.getDateTimeEnd());
      this.setMaxUse(coupon.getMaxUse());
      this.setMaxPer(coupon.getMaxPer());
      this.setActive(coupon.getActive());
    }
  }

  /**
   * Get Code.
   * @returns {string}
   */
  getCode() {
    return this.code;
  }

  /**
   * Get Description.
   * @returns {string}
   */
  getDescription() {
    return this.description;
  }

  /**
   * Get CustomerScope.
   * @returns {string}
   */
  getCustomerScope() {
    return this.customerScope;
  }

  /**
   * Get DateTime_Start.
   * @returns {number}
   */
  getDateTimeStart() {
    return this.dateTimeStart;
  }

  /**
   * Get DateTime_End.
   * @returns {number}
   */
  getDateTimeEnd() {
    return this.dateTimeEnd;
  }

  /**
   * Get Max_Use.
   * @returns {number}
   */
  getMaxUse() {
    return this.maxUse;
  }

  /**
   * Get Max_Per.
   * @returns {number}
   */
  getMaxPer() {
    return this.maxPer;
  }

  /**
   * Get Active.
   * @returns {boolean}
   */
  getActive() {
    return this.active;
  }

  /**
   * Get PriceGroup_ID.
   * @returns {number}
   */
  getPriceGroupId() {
    return this.priceGroupId;
  }

  /**
   * Set Code.
   * @param {string} code
   * @returns {CouponInsert}
   */
  setCode(code) {
    this.code = code;
    return this;
  }

  /**
   * Set Description.
   * @param {string} description
   * @returns {CouponInsert}
   */
  setDescription(description) {
    this.description = description;
    return this;
  }

  /**
   * Set CustomerScope.
   * @param {string} customerScope
   * @returns {CouponInsert}
   */
  setCustomerScope(customerScope) {
    this.customerScope = customerScope;
    return this;
  }

  /**
   * Set DateTime_Start.
   * @param {number|Date} dateTimeStart
   * @returns {CouponInsert}
   */
  setDateTimeStart(dateTimeStart) {
    if (util.isDate(dateTimeStart)) {
      this.dateTimeStart = Math.floor(dateTimeStart.getTime()/1000);      
    } else {
      this.dateTimeStart = dateTimeStart;
    }

    return this;
  }

  /**
   * Set DateTime_End.
   * @param {number|Date} dateTimeEnd
   * @returns {CouponInsert}
   */
  setDateTimeEnd(dateTimeEnd) {
    if (util.isDate(dateTimeEnd)) {
      this.dateTimeEnd = Math.floor(dateTimeEnd.getTime()/1000);      
    } else {
      this.dateTimeEnd = dateTimeEnd;
    }

    return this;
  }

  /**
   * Set Max_Use.
   * @param {number} maxUse
   * @returns {CouponInsert}
   */
  setMaxUse(maxUse) {
    this.maxUse = maxUse;
    return this;
  }

  /**
   * Set Max_Per.
   * @param {number} maxPer
   * @returns {CouponInsert}
   */
  setMaxPer(maxPer) {
    this.maxPer = maxPer;
    return this;
  }

  /**
   * Set Active.
   * @param {boolean} active
   * @returns {CouponInsert}
   */
  setActive(active) {
    this.active = active;
    return this;
  }

  /**
   * Set PriceGroup_ID.
   * @param {number} priceGroupId
   * @returns {CouponInsert}
   */
  setPriceGroupId(priceGroupId) {
    this.priceGroupId = priceGroupId;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['Code'] = this.code;

    if (!util.isNullOrUndefined(this.description)) {
      data['Description'] = this.description;
    }

    if (!util.isNullOrUndefined(this.customerScope)) {
      data['CustomerScope'] = this.customerScope;
    }

    if (!util.isNullOrUndefined(this.dateTimeStart)) {
      data['DateTime_Start'] = this.dateTimeStart;
    }

    if (!util.isNullOrUndefined(this.dateTimeEnd)) {
      data['DateTime_End'] = this.dateTimeEnd;
    }

    if (!util.isNullOrUndefined(this.maxUse)) {
      data['Max_Use'] = this.maxUse;
    }

    if (!util.isNullOrUndefined(this.maxPer)) {
      data['Max_Per'] = this.maxPer;
    }

    if (!util.isNullOrUndefined(this.active)) {
      data['Active'] = this.active;
    }

    if (!util.isNullOrUndefined(this.priceGroupId)) {
      data['PriceGroup_ID'] = this.priceGroupId;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CouponInsert(this, httpResponse, data);
  }
}

module.exports.CouponInsert = CouponInsert;