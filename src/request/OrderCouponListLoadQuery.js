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
const { CouponListLoadQuery } = require('./CouponListLoadQuery')

/** 
 * Handles API Request OrderCouponList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/ordercouponlist_load_query
 * @class
 */
class OrderCouponListLoadQuery extends CouponListLoadQuery {
  /**
   * OrderCouponListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?Order} order
   */
  constructor(client, order = null) {
    super(client);
    this.function = 'OrderCouponList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.orderId = null;
    this.assigned = null;
    this.unassigned = null;

    if (util.isInstanceOf(order, models.Order)) {
      this.setOrderId(order.getId());
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
   * Set Order_ID.
   * @param {number} orderId
   * @returns {OrderCouponListLoadQuery}
   */
  setOrderId(orderId) {
    this.orderId = orderId;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {OrderCouponListLoadQuery}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Set Unassigned.
   * @param {boolean} unassigned
   * @returns {OrderCouponListLoadQuery}
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

    data['Order_ID'] = this.getOrderId();

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
    return new responses.OrderCouponListLoadQuery(this, httpResponse, data);
  }
}

module.exports.OrderCouponListLoadQuery = OrderCouponListLoadQuery;