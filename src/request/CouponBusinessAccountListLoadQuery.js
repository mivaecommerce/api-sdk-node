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
const { ListQueryRequest }  = require('./../listquery');

/** 
 * Handles API Request CouponBusinessAccountList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/couponbusinessaccountlist_load_query
 * @class
 */
class CouponBusinessAccountListLoadQuery extends ListQueryRequest {
  /**
   * CouponBusinessAccountListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?Coupon} coupon
   */
  constructor(client, coupon = null) {
    super(client);
    this.function = 'CouponBusinessAccountList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'title',
      'note_count',
      'tax_exempt',
      'order_cnt',
      'order_avg',
      'order_tot'
    ];

    this.availableSortFields = [
      'id',
      'title',
      'note_count',
      'tax_exempt',
      'order_cnt',
      'order_avg',
      'order_tot'
    ];

    this.couponId = null;
    this.editCoupon = null;
    this.couponCode = null;
    this.assigned = null;
    this.unassigned = null;

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
   * Get Assigned.
   * @returns {boolean}
   */
  getAssigned() {
    return this.assigned;
  }

  /**
   * Get Unassigned.
   * @returns {boolean}
   */
  getUnassigned() {
    return this.unassigned;
  }

  /**
   * Set Coupon_ID.
   * @param {number} couponId
   * @returns {CouponBusinessAccountListLoadQuery}
   */
  setCouponId(couponId) {
    this.couponId = couponId;
    return this;
  }

  /**
   * Set Edit_Coupon.
   * @param {string} editCoupon
   * @returns {CouponBusinessAccountListLoadQuery}
   */
  setEditCoupon(editCoupon) {
    this.editCoupon = editCoupon;
    return this;
  }

  /**
   * Set Coupon_Code.
   * @param {string} couponCode
   * @returns {CouponBusinessAccountListLoadQuery}
   */
  setCouponCode(couponCode) {
    this.couponCode = couponCode;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {CouponBusinessAccountListLoadQuery}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Set Unassigned.
   * @param {boolean} unassigned
   * @returns {CouponBusinessAccountListLoadQuery}
   */
  setUnassigned(unassigned) {
    this.unassigned = unassigned;
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

    if (!util.isNullOrUndefined(this.assigned)) {
      data['Assigned'] = this.assigned;
    }

    if (!util.isNullOrUndefined(this.unassigned)) {
      data['Unassigned'] = this.unassigned;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CouponBusinessAccountListLoadQuery(this, httpResponse, data);
  }
}

module.exports.CouponBusinessAccountListLoadQuery = CouponBusinessAccountListLoadQuery;