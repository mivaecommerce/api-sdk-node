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
 * Handles API Request OrderList_Archive. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/orderlist_archive
 * @class
 */
class OrderListArchive extends Request {
  /**
   * OrderListArchive Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'OrderList_Archive';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.deletePaymentData = null;
    this.deleteShippingLabels = null;
    this.orderIds = [];
  }

  /**
   * Get Delete_Payment_Data.
   * @returns {boolean}
   */
  getDeletePaymentData() {
    return this.deletePaymentData;
  }

  /**
   * Get Delete_Shipping_Labels.
   * @returns {boolean}
   */
  getDeleteShippingLabels() {
    return this.deleteShippingLabels;
  }

  /**
   * Get Order_IDs.
   * @returns {Array}
   */
  getOrderIds() {
    return this.orderIds;
  }

  /**
   * Set Delete_Payment_Data.
   * @param {boolean} deletePaymentData
   * @returns {OrderListArchive}
   */
  setDeletePaymentData(deletePaymentData) {
    this.deletePaymentData = deletePaymentData;
    return this;
  }

  /**
   * Set Delete_Shipping_Labels.
   * @param {boolean} deleteShippingLabels
   * @returns {OrderListArchive}
   */
  setDeleteShippingLabels(deleteShippingLabels) {
    this.deleteShippingLabels = deleteShippingLabels;
    return this;
  }

  /**
   * Add Order_IDs.
   * @param {number} orderId
   * @returns {OrderListArchive}
   */
  addOrderId(orderId) {
    this.orderIds.push(orderId);
    return this;
  }

  /**
   * Add Order model.
   * @param {Order} order
   * @throws {Error}
   * @returns {OrderListArchive}
   */
  addOrder(order) {
    if (!util.isInstanceOf(order, models.Order)) {
      throw new Error(util.format('Expected instance of Order but got %s',
        typeof order));
    }

    if (order.getId()) {
      this.orderIds.push(order.getId());
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

    if (!util.isNullOrUndefined(this.deletePaymentData)) {
      data['Delete_Payment_Data'] = this.deletePaymentData;
    }

    if (!util.isNullOrUndefined(this.deleteShippingLabels)) {
      data['Delete_Shipping_Labels'] = this.deleteShippingLabels;
    }

    data['Order_IDs'] = this.orderIds;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.OrderListArchive(this, httpResponse, data);
  }
}

module.exports.OrderListArchive = OrderListArchive;