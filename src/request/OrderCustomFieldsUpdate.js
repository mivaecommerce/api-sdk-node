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
 * Handles API Request OrderCustomFields_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/ordercustomfields_update
 * @class
 */
class OrderCustomFieldsUpdate extends Request {
  /**
   * OrderCustomFieldsUpdate Constructor.
   * @param {?BaseClient} client
   * @param {?Order} order
   */
  constructor(client, order = null) {
    super(client);
    this.function = 'OrderCustomFields_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.orderId = null;
    this.customFieldValues = new models.CustomFieldValues();

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
   * Get CustomField_Values.
   * @returns {?CustomFieldValues}
   */
  getCustomFieldValues() {
    return this.customFieldValues;
  }

  /**
   * Set Order_ID.
   * @param {number} orderId
   * @returns {OrderCustomFieldsUpdate}
   */
  setOrderId(orderId) {
    this.orderId = orderId;
    return this;
  }

  /**
   * Set CustomField_Values.
   * @param {?CustomFieldValues} customFieldValues
   * @throws {Error}
   * @returns {OrderCustomFieldsUpdate}
   */
  setCustomFieldValues(customFieldValues) {
    if (!util.isInstanceOf(customFieldValues, models.CustomFieldValues) && util.isObject(customFieldValues)) {
      customFieldValues = new models.CustomFieldValues(customFieldValues);
    } else if (!util.isInstanceOf(customFieldValues, models.CustomFieldValues)) {
      throw new Error(util.format('Expected instance of CustomFieldValues or an Object but got %s',
        typeof customFieldValues));
    }

    this.customFieldValues = customFieldValues;
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

    if (this.customFieldValues) {
      data['CustomField_Values'] = this.customFieldValues.toObject();
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.OrderCustomFieldsUpdate(this, httpResponse, data);
  }
}

module.exports.OrderCustomFieldsUpdate = OrderCustomFieldsUpdate;