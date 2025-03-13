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
const Decimal = require('decimal.js-light');

/** 
 * Handles API Request OrderItem_Add. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/orderitem_add
 * @class
 */
class OrderItemAdd extends Request {
  /**
   * OrderItemAdd Constructor.
   * @param {?BaseClient} client
   * @param {?Order} order
   */
  constructor(client, order = null) {
    super(client);
    this.function = 'OrderItem_Add';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.orderId = null;
    this.code = null;
    this.name = null;
    this.sku = null;
    this.quantity = null;
    this.price = null;
    this.weight = null;
    this.taxable = null;
    this.options = [];

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
   * @returns {Decimal}
   */
  getPrice() {
    return this.price;
  }

  /**
   * Get Weight.
   * @returns {Decimal}
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
   * @returns {OrderItemAdd}
   */
  setOrderId(orderId) {
    this.orderId = orderId;
    return this;
  }

  /**
   * Set Code.
   * @param {string} code
   * @returns {OrderItemAdd}
   */
  setCode(code) {
    this.code = code;
    return this;
  }

  /**
   * Set Name.
   * @param {string} name
   * @returns {OrderItemAdd}
   */
  setName(name) {
    this.name = name;
    return this;
  }

  /**
   * Set Sku.
   * @param {string} sku
   * @returns {OrderItemAdd}
   */
  setSku(sku) {
    this.sku = sku;
    return this;
  }

  /**
   * Set Quantity.
   * @param {number} quantity
   * @returns {OrderItemAdd}
   */
  setQuantity(quantity) {
    this.quantity = quantity;
    return this;
  }

  /**
   * Set Price.
   * @param {Decimal} price
   * @returns {OrderItemAdd}
   */
  setPrice(price) {
    if (util.isInstanceOf(price, Decimal)) {
      this.price = price;
    } else {
      this.price = new Decimal(price);
    }
    return this;
  }

  /**
   * Set Weight.
   * @param {Decimal} weight
   * @returns {OrderItemAdd}
   */
  setWeight(weight) {
    if (util.isInstanceOf(weight, Decimal)) {
      this.weight = weight;
    } else {
      this.weight = new Decimal(weight);
    }
    return this;
  }

  /**
   * Set Taxable.
   * @param {boolean} taxable
   * @returns {OrderItemAdd}
   */
  setTaxable(taxable) {
    this.taxable = taxable;
    return this;
  }

  /**
   * Set Options.
   * @param {OrderItemOption[]} options
   * @throws {Error}
   * @returns {OrderItemAdd}
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
   * @returns {OrderItemAdd}
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
   * @returns {OrderItemAdd}
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

    data['Code'] = this.code;

    data['Name'] = this.name;

    if (!util.isNullOrUndefined(this.sku)) {
      data['Sku'] = this.sku;
    }

    data['Quantity'] = this.quantity;

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
    return new responses.OrderItemAdd(this, httpResponse, data);
  }
}

module.exports.OrderItemAdd = OrderItemAdd;