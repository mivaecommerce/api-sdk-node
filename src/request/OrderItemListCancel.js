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
 * Handles API Request OrderItemList_Cancel. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/orderitemlist_cancel
 * @class
 */
class OrderItemListCancel extends Request {
  /**
   * OrderItemListCancel Constructor.
   * @param {?BaseClient} client
   * @param {?Order} order
   */
  constructor(client, order = null) {
    super(client);
    this.function = 'OrderItemList_Cancel';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.orderId = null;
    this.lineIds = [];
    this.reason = null;

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
   * Get Line_IDs.
   * @returns {Array}
   */
  getLineIds() {
    return this.lineIds;
  }

  /**
   * Get Reason.
   * @returns {string}
   */
  getReason() {
    return this.reason;
  }

  /**
   * Set Order_ID.
   * @param {number} orderId
   * @returns {OrderItemListCancel}
   */
  setOrderId(orderId) {
    this.orderId = orderId;
    return this;
  }

  /**
   * Set Reason.
   * @param {string} reason
   * @returns {OrderItemListCancel}
   */
  setReason(reason) {
    this.reason = reason;
    return this;
  }

  /**
   * Add Line_IDs.
   * @param {number} lineId
   * @returns {OrderItemListCancel}
   */
  addLineId(lineId) {
    this.lineIds.push(lineId);
    return this;
  }

  /**
   * Add OrderItem model.
   * @param {OrderItem} orderItem
   * @throws {Error}
   * @returns {OrderItemListCancel}
   */
  addOrderItem(orderItem) {
    if (!util.isInstanceOf(orderItem, models.OrderItem)) {
      throw new Error(util.format('Expected instance of OrderItem but got %s',
        typeof orderItem));
    }

    if (orderItem.getLineId()) {
      this.lineIds.push(orderItem.getLineId());
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

    data['Order_ID'] = this.getOrderId();

    data['Line_IDs'] = this.lineIds;

    if (!util.isNullOrUndefined(this.reason)) {
      data['Reason'] = this.reason;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.OrderItemListCancel(this, httpResponse, data);
  }
}

module.exports.OrderItemListCancel = OrderItemListCancel;