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
 * Handles API Request OrderItem_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/orderitem_update
 * @class
 */
class OrderItemUpdate extends Request {
  /**
   * OrderItemUpdate Constructor.
   * @param {?BaseClient} client
   * @param {?OrderItem} orderItem
   */
  constructor(client, orderItem = null) {
    super(client);
    var i;
    var l;
    var options;
    var attribute;
    this.function = 'OrderItem_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.orderId = null;
    this.lineId = null;
    this.code = null;
    this.name = null;
    this.sku = null;
    this.quantity = null;
    this.price = null;
    this.weight = null;
    this.taxable = null;
    this.options = [];

    if (util.isInstanceOf(orderItem, models.OrderItem)) {
      this.setOrderId(orderItem.getOrderId());
      this.setLineId(orderItem.getLineId());
      this.setCode(orderItem.getCode());
      this.setName(orderItem.getName());
      this.setSku(orderItem.getSku());
      this.setQuantity(orderItem.getQuantity());
      this.setPrice(orderItem.getPrice());
      this.setWeight(orderItem.getWeight());
      this.setTaxable(orderItem.getTaxable());

      if (orderItem.getOptions() && orderItem.getOptions().length) {
        this.options = orderItem.getOptions();
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
   * Get Code.
   * @returns {string}
   */
  getCode() {
    return this.code;
  }

  /**
   * Get Name.
   * @returns {string}
   */
  getName() {
    return this.name;
  }

  /**
   * Get Sku.
   * @returns {string}
   */
  getSku() {
    return this.sku;
  }

  /**
   * Get Quantity.
   * @returns {number}
   */
  getQuantity() {
    return this.quantity;
  }

  /**
   * Get Price.
   * @returns {number}
   */
  getPrice() {
    return this.price;
  }

  /**
   * Get Weight.
   * @returns {number}
   */
  getWeight() {
    return this.weight;
  }

  /**
   * Get Taxable.
   * @returns {boolean}
   */
  getTaxable() {
    return this.taxable;
  }

  /**
   * Get Options.
   * @returns {OrderItemOption[]}
   */
  getOptions() {
    return this.options;
  }

  /**
   * Set Order_ID.
   * @param {number} orderId
   * @returns {OrderItemUpdate}
   */
  setOrderId(orderId) {
    this.orderId = orderId;
    return this;
  }

  /**
   * Set Line_ID.
   * @param {number} lineId
   * @returns {OrderItemUpdate}
   */
  setLineId(lineId) {
    this.lineId = lineId;
    return this;
  }

  /**
   * Set Code.
   * @param {string} code
   * @returns {OrderItemUpdate}
   */
  setCode(code) {
    this.code = code;
    return this;
  }

  /**
   * Set Name.
   * @param {string} name
   * @returns {OrderItemUpdate}
   */
  setName(name) {
    this.name = name;
    return this;
  }

  /**
   * Set Sku.
   * @param {string} sku
   * @returns {OrderItemUpdate}
   */
  setSku(sku) {
    this.sku = sku;
    return this;
  }

  /**
   * Set Quantity.
   * @param {number} quantity
   * @returns {OrderItemUpdate}
   */
  setQuantity(quantity) {
    this.quantity = quantity;
    return this;
  }

  /**
   * Set Price.
   * @param {number} price
   * @returns {OrderItemUpdate}
   */
  setPrice(price) {
    this.price = price;
    return this;
  }

  /**
   * Set Weight.
   * @param {number} weight
   * @returns {OrderItemUpdate}
   */
  setWeight(weight) {
    this.weight = weight;
    return this;
  }

  /**
   * Set Taxable.
   * @param {boolean} taxable
   * @returns {OrderItemUpdate}
   */
  setTaxable(taxable) {
    this.taxable = taxable;
    return this;
  }

  /**
   * Set Options.
   * @param {OrderItemOption[]} options
   * @throws {Error}
   * @returns {OrderItemUpdate}
   */
  setOptions(options) {
    var i;
    var l;

    if (!util.isArray(options)) {
      throw new Error(util.format('Expected an array but got %s', typeof options));
    }

    for (i = 0, l = options.length; i < l; i++) {
      if (!util.isInstanceOf(options[i], models.OrderItemOption) && util.isObject(options[i])) {
        options[i] = new models.OrderItemOption(options[i]);
      } else if (!util.isInstanceOf(options[i], models.OrderItemOption)) {
        throw new Error(util.format('Expected instance of OrderItemOption or an Object but got %s',
          typeof options[i]));
      }
    }

    this.options = options;
    return this;
  }

  /**
   * Add Options.
   * @param {OrderItemOption} option
   * @throws {Error}
   * @returns {OrderItemUpdate}
   */
  addOption(option) {
    if (util.isInstanceOf(option, models.OrderItemOption)) {
      this.options.push(option);
    } else if (util.isObject(option)) {
      this.options.push(new models.OrderItemOption(option));
    } else {
      throw new Error(util.format('Expected instance of OrderItemOption or Object but got %s',
        typeof option));
    }

    return this;
  }

  /**
   * Add many OrderItemOption.
   * @param {OrderItemOption[]} options
   * @throws {Error}
   * @returns {OrderItemUpdate}
   */
  addOptions(options) {
    var i;
    var l;

    if (!util.isArray(options)) {
      throw new Error(util.format('Expecting an array of OrderItemOption but got %s',
        typeof options));
    }

    for (i = 0, l = options.length; i < l; i++) {
      if (util.isInstanceOf(options[i], models.OrderItemOption)) {
        this.options.push(options[i]);
      } else if (util.isObject(options[i])) {
        this.options.push(new models.OrderItemOption(options[i]));
      } else {
        throw new Error(util.format('Expected array of OrderItemOption or an array of Object but got %s',
          typeof options[i]));
      }
    }

    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var i;
    var l;
    var data = super.toObject();

    data['Order_ID'] = this.getOrderId();

    data['Line_ID'] = this.getLineId();

    if (!util.isNullOrUndefined(this.code)) {
      data['Code'] = this.code;
    }

    if (!util.isNullOrUndefined(this.name)) {
      data['Name'] = this.name;
    }

    if (!util.isNullOrUndefined(this.sku)) {
      data['Sku'] = this.sku;
    }

    if (!util.isNullOrUndefined(this.quantity)) {
      data['Quantity'] = this.quantity;
    }

    if (!util.isNullOrUndefined(this.price)) {
      data['Price'] = this.price;
    }

    if (!util.isNullOrUndefined(this.weight)) {
      data['Weight'] = this.weight;
    }

    if (!util.isNullOrUndefined(this.taxable)) {
      data['Taxable'] = this.taxable;
    }

    if (util.isArray(this.options)) {
      data['Options'] = [];

      for (i = 0, l = this.options.length; i < l; i++) {
        if (util.isObject(this.options[i])) {
            data['Options'].push(this.options[i].toObject());
        }
      }
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.OrderItemUpdate(this, httpResponse, data);
  }
}

module.exports.OrderItemUpdate = OrderItemUpdate;