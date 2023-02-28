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
 * Handles API Request OrderPayment_VOID. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/orderpayment_void
 * @class
 */
class OrderPaymentVoid extends Request {
  /**
   * OrderPaymentVoid Constructor.
   * @param {?BaseClient} client
   * @param {?OrderPayment} orderPayment
   */
  constructor(client, orderPayment = null) {
    super(client);
    this.function = 'OrderPayment_VOID';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.orderPaymentId = null;
    this.amount = null;

    if (util.isInstanceOf(orderPayment, models.OrderPayment)) {
      this.setOrderPaymentId(orderPayment.getId());
    }
  }

  /**
   * Get OrderPayment_ID.
   * @returns {number}
   */
  getOrderPaymentId() {
    return this.orderPaymentId;
  }

  /**
   * Get Amount.
   * @returns {number}
   */
  getAmount() {
    return this.amount;
  }

  /**
   * Set OrderPayment_ID.
   * @param {number} orderPaymentId
   * @returns {OrderPaymentVoid}
   */
  setOrderPaymentId(orderPaymentId) {
    this.orderPaymentId = orderPaymentId;
    return this;
  }

  /**
   * Set Amount.
   * @param {number} amount
   * @returns {OrderPaymentVoid}
   */
  setAmount(amount) {
    this.amount = amount;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['OrderPayment_ID'] = this.orderPaymentId;

    if (!util.isNullOrUndefined(this.amount)) {
      data['Amount'] = this.amount;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.OrderPaymentVoid(this, httpResponse, data);
  }
}

module.exports.OrderPaymentVoid = OrderPaymentVoid;