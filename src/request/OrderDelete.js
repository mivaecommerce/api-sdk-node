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
 * Handles API Request Order_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/order_delete
 * @class
 */
class OrderDelete extends Request {
  /**
   * OrderDelete Constructor.
   * @param {?BaseClient} client
   * @param {?Order} order
   */
  constructor(client, order = null) {
    super(client);
    this.function = 'Order_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.orderId = null;

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
   * Set Order_ID.
   * @param {number} orderId
   * @returns {OrderDelete}
   */
  setOrderId(orderId) {
    this.orderId = orderId;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['Order_ID'] = this.orderId;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.OrderDelete(this, httpResponse, data);
  }
}

module.exports.OrderDelete = OrderDelete;