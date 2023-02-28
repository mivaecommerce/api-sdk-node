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
 * Handles API Request OrderItem_Split. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/orderitem_split
 * @class
 */
class OrderItemSplit extends Request {
  /**
   * OrderItemSplit Constructor.
   * @param {?BaseClient} client
   * @param {?OrderItem} orderItem
   */
  constructor(client, orderItem = null) {
    super(client);
    this.function = 'OrderItem_Split';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.orderId = null;
    this.lineId = null;
    this.quantity = null;

    if (util.isInstanceOf(orderItem, models.OrderItem)) {
      if (orderItem.getOrderId()) {
        this.setOrderId(orderItem.getOrderId());
      }

      if (orderItem.getLineId()) {
        this.setLineId(orderItem.getLineId());
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
   * Get Line_ID.
   * @returns {number}
   */
  getLineId() {
    return this.lineId;
  }

  /**
   * Get Quantity.
   * @returns {number}
   */
  getQuantity() {
    return this.quantity;
  }

  /**
   * Set Order_ID.
   * @param {number} orderId
   * @returns {OrderItemSplit}
   */
  setOrderId(orderId) {
    this.orderId = orderId;
    return this;
  }

  /**
   * Set Line_ID.
   * @param {number} lineId
   * @returns {OrderItemSplit}
   */
  setLineId(lineId) {
    this.lineId = lineId;
    return this;
  }

  /**
   * Set Quantity.
   * @param {number} quantity
   * @returns {OrderItemSplit}
   */
  setQuantity(quantity) {
    this.quantity = quantity;
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

    if (!util.isNullOrUndefined(this.lineId)) {
      data['Line_ID'] = this.lineId;
    }

    data['Quantity'] = this.quantity;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.OrderItemSplit(this, httpResponse, data);
  }
}

module.exports.OrderItemSplit = OrderItemSplit;