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
 * Handles API Request Order_Authorize. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/order_authorize
 * @class
 */
class OrderAuthorize extends Request {
  /**
   * OrderAuthorize Constructor.
   * @param {?BaseClient} client
   * @param {?Order} order
   */
  constructor(client, order = null) {
    super(client);
    this.function = 'Order_Authorize';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.orderId = null;
    this.moduleId = null;
    this.moduleData = null;
    this.amount = null;
    this.moduleFields = {};

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
   * Get Module_ID.
   * @returns {number}
   */
  getModuleId() {
    return this.moduleId;
  }

  /**
   * Get Module_Data.
   * @returns {string}
   */
  getModuleData() {
    return this.moduleData;
  }

  /**
   * Get Amount.
   * @returns {number}
   */
  getAmount() {
    return this.amount;
  }

  /**
   * Get Module_Fields.
   * @returns {Object}
   */
  getModuleFields() {
    return this.moduleFields;
  }

  /**
   * Set Order_ID.
   * @param {number} orderId
   * @returns {OrderAuthorize}
   */
  setOrderId(orderId) {
    this.orderId = orderId;
    return this;
  }

  /**
   * Set Module_ID.
   * @param {number} moduleId
   * @returns {OrderAuthorize}
   */
  setModuleId(moduleId) {
    this.moduleId = moduleId;
    return this;
  }

  /**
   * Set Module_Data.
   * @param {string} moduleData
   * @returns {OrderAuthorize}
   */
  setModuleData(moduleData) {
    this.moduleData = moduleData;
    return this;
  }

  /**
   * Set Amount.
   * @param {number} amount
   * @returns {OrderAuthorize}
   */
  setAmount(amount) {
    this.amount = amount;
    return this;
  }

  /**
   * Set Module_Fields.
   * @param {Object} moduleFields
   * @returns {OrderAuthorize}
   */
  setModuleFields(moduleFields) {
    this.moduleFields = moduleFields;
    return this;
  }

  /**
   * Add custom data to the request.
   *
   * @param {string}
   * @param {*}
   * @returns {OrderAuthorize}
   */
  setModuleField(field, value)
  {
      this.moduleFields[field] = value;
      return this;
  }
    
  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = Object.assign(super.toObject(), this.getModuleFields());

    if (!util.isNullOrUndefined(this.orderId)) {
      data['Order_ID'] = this.orderId;
    }

    if (!util.isNullOrUndefined(this.moduleId)) {
      data['Module_ID'] = this.moduleId;
    }

    if (!util.isNullOrUndefined(this.moduleData)) {
      data['Module_Data'] = this.moduleData;
    }

    data['Amount'] = this.amount;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.OrderAuthorize(this, httpResponse, data);
  }
}

module.exports.OrderAuthorize = OrderAuthorize;