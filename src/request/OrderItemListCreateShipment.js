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
 * Handles API Request OrderItemList_CreateShipment. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/orderitemlist_createshipment
 * @class
 */
class OrderItemListCreateShipment extends Request {
  /**
   * OrderItemListCreateShipment Constructor.
   * @param {?BaseClient} client
   * @param {?Order} order
   */
  constructor(client, order = null) {
    super(client);
    this.function = 'OrderItemList_CreateShipment';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.orderId = null;
    this.lineIds = [];

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
   * Set Order_ID.
   * @param {number} orderId
   * @returns {OrderItemListCreateShipment}
   */
  setOrderId(orderId) {
    this.orderId = orderId;
    return this;
  }

  /**
   * Add Line_IDs.
   * @param {number} lineId
   * @returns {OrderItemListCreateShipment}
   */
  addLineId(lineId) {
    this.lineIds.push(lineId);
    return this;
  }

  /**
   * Add OrderItem model.
   * @param {OrderItem} orderItem
   * @throws {Error}
   * @returns {OrderItemListCreateShipment}
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

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.OrderItemListCreateShipment(this, httpResponse, data);
  }
}

module.exports.OrderItemListCreateShipment = OrderItemListCreateShipment;