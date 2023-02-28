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
 * Handles API Request OrderItemList_BackOrder. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/orderitemlist_backorder
 * @class
 */
class OrderItemListBackOrder extends Request {
  /**
   * OrderItemListBackOrder Constructor.
   * @param {?BaseClient} client
   * @param {?Order} order
   */
  constructor(client, order = null) {
    super(client);
    this.function = 'OrderItemList_BackOrder';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.orderId = null;
    this.lineIds = [];
    this.dateInStock = null;

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
   * Get Line_IDs.
   * @returns {Array}
   */
  getLineIds() {
    return this.lineIds;
  }

  /**
   * Get Date_InStock.
   * @returns {number}
   */
  getDateInStock() {
    return this.dateInStock;
  }

  /**
   * Set Order_ID.
   * @param {number} orderId
   * @returns {OrderItemListBackOrder}
   */
  setOrderId(orderId) {
    this.orderId = orderId;
    return this;
  }

  /**
   * Set Date_InStock.
   * @param {number|Date} dateInStock
   * @returns {OrderItemListBackOrder}
   */
  setDateInStock(dateInStock) {
    if (util.isDate(dateInStock)) {
      this.dateInStock = Math.floor(dateInStock.getTime()/1000);      
    } else {
      this.dateInStock = dateInStock;
    }

    return this;
  }

  /**
   * Add Line_IDs.
   * @param {number} lineId
   * @returns {OrderItemListBackOrder}
   */
  addLineId(lineId) {
    this.lineIds.push(lineId);
    return this;
  }

  /**
   * Add OrderItem model.
   * @param {OrderItem} orderItem
   * @throws {Error}
   * @returns {OrderItemListBackOrder}
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

    if (!util.isNullOrUndefined(this.orderId)) {
      data['Order_ID'] = this.orderId;
    }

    data['Line_IDs'] = this.lineIds;

    if (!util.isNullOrUndefined(this.dateInStock)) {
      data['Date_InStock'] = this.dateInStock;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.OrderItemListBackOrder(this, httpResponse, data);
  }
}

module.exports.OrderItemListBackOrder = OrderItemListBackOrder;