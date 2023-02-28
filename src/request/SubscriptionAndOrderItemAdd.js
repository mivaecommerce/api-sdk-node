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
 * Handles API Request SubscriptionAndOrderItem_Add. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/subscriptionandorderitem_add
 * @class
 */
class SubscriptionAndOrderItemAdd extends Request {
  /**
   * SubscriptionAndOrderItemAdd Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'SubscriptionAndOrderItem_Add';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.orderId = null;
    this.customerId = null;
    this.editCustomer = null;
    this.customerLogin = null;
    this.addressId = null;
    this.customerAddressId = null;
    this.productId = null;
    this.editProduct = null;
    this.productCode = null;
    this.productSubscriptionTermId = null;
    this.productSubscriptionTermDescription = null;
    this.quantity = null;
    this.nextDate = null;
    this.paymentCardId = null;
    this.shipId = null;
    this.shipData = null;
    this.attributes = [];
  }

  /**
   * Get Order_ID.
   * @returns {number}
   */
  getOrderId() {
    return this.orderId;
  }

  /**
   * Get Customer_ID.
   * @returns {number}
   */
  getCustomerId() {
    return this.customerId;
  }

  /**
   * Get Edit_Customer.
   * @returns {string}
   */
  getEditCustomer() {
    return this.editCustomer;
  }

  /**
   * Get Customer_Login.
   * @returns {string}
   */
  getCustomerLogin() {
    return this.customerLogin;
  }

  /**
   * Get Address_ID.
   * @returns {number}
   */
  getAddressId() {
    return this.addressId;
  }

  /**
   * Get CustomerAddress_ID.
   * @returns {number}
   */
  getCustomerAddressId() {
    return this.customerAddressId;
  }

  /**
   * Get Product_ID.
   * @returns {number}
   */
  getProductId() {
    return this.productId;
  }

  /**
   * Get Edit_Product.
   * @returns {string}
   */
  getEditProduct() {
    return this.editProduct;
  }

  /**
   * Get Product_Code.
   * @returns {string}
   */
  getProductCode() {
    return this.productCode;
  }

  /**
   * Get ProductSubscriptionTerm_ID.
   * @returns {number}
   */
  getProductSubscriptionTermId() {
    return this.productSubscriptionTermId;
  }

  /**
   * Get ProductSubscriptionTerm_Description.
   * @returns {string}
   */
  getProductSubscriptionTermDescription() {
    return this.productSubscriptionTermDescription;
  }

  /**
   * Get Quantity.
   * @returns {number}
   */
  getQuantity() {
    return this.quantity;
  }

  /**
   * Get NextDate.
   * @returns {number}
   */
  getNextDate() {
    return this.nextDate;
  }

  /**
   * Get PaymentCard_ID.
   * @returns {number}
   */
  getPaymentCardId() {
    return this.paymentCardId;
  }

  /**
   * Get Ship_ID.
   * @returns {number}
   */
  getShipId() {
    return this.shipId;
  }

  /**
   * Get Ship_Data.
   * @returns {string}
   */
  getShipData() {
    return this.shipData;
  }

  /**
   * Get Attributes.
   * @returns {SubscriptionAttribute[]}
   */
  getAttributes() {
    return this.attributes;
  }

  /**
   * Set Order_ID.
   * @param {number} orderId
   * @returns {SubscriptionAndOrderItemAdd}
   */
  setOrderId(orderId) {
    this.orderId = orderId;
    return this;
  }

  /**
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {SubscriptionAndOrderItemAdd}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
    return this;
  }

  /**
   * Set Edit_Customer.
   * @param {string} editCustomer
   * @returns {SubscriptionAndOrderItemAdd}
   */
  setEditCustomer(editCustomer) {
    this.editCustomer = editCustomer;
    return this;
  }

  /**
   * Set Customer_Login.
   * @param {string} customerLogin
   * @returns {SubscriptionAndOrderItemAdd}
   */
  setCustomerLogin(customerLogin) {
    this.customerLogin = customerLogin;
    return this;
  }

  /**
   * Set Address_ID.
   * @param {number} addressId
   * @returns {SubscriptionAndOrderItemAdd}
   */
  setAddressId(addressId) {
    this.addressId = addressId;
    return this;
  }

  /**
   * Set CustomerAddress_ID.
   * @param {number} customerAddressId
   * @returns {SubscriptionAndOrderItemAdd}
   */
  setCustomerAddressId(customerAddressId) {
    this.customerAddressId = customerAddressId;
    return this;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {SubscriptionAndOrderItemAdd}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {SubscriptionAndOrderItemAdd}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {SubscriptionAndOrderItemAdd}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set ProductSubscriptionTerm_ID.
   * @param {number} productSubscriptionTermId
   * @returns {SubscriptionAndOrderItemAdd}
   */
  setProductSubscriptionTermId(productSubscriptionTermId) {
    this.productSubscriptionTermId = productSubscriptionTermId;
    return this;
  }

  /**
   * Set ProductSubscriptionTerm_Description.
   * @param {string} productSubscriptionTermDescription
   * @returns {SubscriptionAndOrderItemAdd}
   */
  setProductSubscriptionTermDescription(productSubscriptionTermDescription) {
    this.productSubscriptionTermDescription = productSubscriptionTermDescription;
    return this;
  }

  /**
   * Set Quantity.
   * @param {number} quantity
   * @returns {SubscriptionAndOrderItemAdd}
   */
  setQuantity(quantity) {
    this.quantity = quantity;
    return this;
  }

  /**
   * Set NextDate.
   * @param {number|Date} nextDate
   * @returns {SubscriptionAndOrderItemAdd}
   */
  setNextDate(nextDate) {
    if (util.isDate(nextDate)) {
      this.nextDate = Math.floor(nextDate.getTime()/1000);      
    } else {
      this.nextDate = nextDate;
    }

    return this;
  }

  /**
   * Set PaymentCard_ID.
   * @param {number} paymentCardId
   * @returns {SubscriptionAndOrderItemAdd}
   */
  setPaymentCardId(paymentCardId) {
    this.paymentCardId = paymentCardId;
    return this;
  }

  /**
   * Set Ship_ID.
   * @param {number} shipId
   * @returns {SubscriptionAndOrderItemAdd}
   */
  setShipId(shipId) {
    this.shipId = shipId;
    return this;
  }

  /**
   * Set Ship_Data.
   * @param {string} shipData
   * @returns {SubscriptionAndOrderItemAdd}
   */
  setShipData(shipData) {
    this.shipData = shipData;
    return this;
  }

  /**
   * Set Attributes.
   * @param {SubscriptionAttribute[]} attributes
   * @throws {Error}
   * @returns {SubscriptionAndOrderItemAdd}
   */
  setAttributes(attributes) {
    var i;
    var l;

    if (!util.isArray(attributes)) {
      throw new Error(util.format('Expected an array but got %s', typeof attributes));
    }

    for (i = 0, l = attributes.length; i < l; i++) {
      if (!util.isInstanceOf(attributes[i], models.SubscriptionAttribute) && util.isObject(attributes[i])) {
        attributes[i] = new models.SubscriptionAttribute(attributes[i]);
      } else if (!util.isInstanceOf(attributes[i], models.SubscriptionAttribute)) {
        throw new Error(util.format('Expected instance of SubscriptionAttribute or an Object but got %s',
          typeof attributes[i]));
      }
    }

    this.attributes = attributes;
    return this;
  }

  /**
   * Add Attributes.
   * @param {SubscriptionAttribute} attribute
   * @throws {Error}
   * @returns {SubscriptionAndOrderItemAdd}
   */
  addAttribute(attribute) {
    if (util.isInstanceOf(attribute, models.SubscriptionAttribute)) {
      this.attributes.push(attribute);
    } else if (util.isObject(attribute)) {
      this.attributes.push(new models.SubscriptionAttribute(attribute));
    } else {
      throw new Error(util.format('Expected instance of SubscriptionAttribute or Object but got %s',
        typeof attribute));
    }

    return this;
  }

  /**
   * Add many SubscriptionAttribute.
   * @param {SubscriptionAttribute[]} attributes
   * @throws {Error}
   * @returns {SubscriptionAndOrderItemAdd}
   */
  addAttributes(attributes) {
    var i;
    var l;

    if (!util.isArray(attributes)) {
      throw new Error(util.format('Expecting an array of SubscriptionAttribute but got %s',
        typeof attributes));
    }

    for (i = 0, l = attributes.length; i < l; i++) {
      if (util.isInstanceOf(attributes[i], models.SubscriptionAttribute)) {
        this.attributes.push(attributes[i]);
      } else if (util.isObject(attributes[i])) {
        this.attributes.push(new models.SubscriptionAttribute(attributes[i]));
      } else {
        throw new Error(util.format('Expected array of SubscriptionAttribute or an array of Object but got %s',
          typeof attributes[i]));
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

    if (!util.isNullOrUndefined(this.orderId)) {
      data['Order_ID'] = this.orderId;
    }

    if (!util.isNullOrUndefined(this.productId)) {
      data['Product_ID'] = this.productId;
    } else if (!util.isNullOrUndefined(this.editProduct)) {
      data['Edit_Product'] = this.editProduct;
    } else if (!util.isNullOrUndefined(this.productCode)) {
      data['Product_Code'] = this.productCode;
    }

    if (!util.isNullOrUndefined(this.productSubscriptionTermId)) {
      data['ProductSubscriptionTerm_ID'] = this.productSubscriptionTermId;
    } else if (!util.isNullOrUndefined(this.productSubscriptionTermDescription)) {
      data['ProductSubscriptionTerm_Description'] = this.productSubscriptionTermDescription;
    }

    if (!util.isNullOrUndefined(this.customerId)) {
      data['Customer_ID'] = this.customerId;
    } else if (!util.isNullOrUndefined(this.editCustomer)) {
      data['Edit_Customer'] = this.editCustomer;
    } else if (!util.isNullOrUndefined(this.customerLogin)) {
      data['Customer_Login'] = this.customerLogin;
    }

    if (!util.isNullOrUndefined(this.addressId)) {
      data['Address_ID'] = this.addressId;
    } else if (!util.isNullOrUndefined(this.customerAddressId)) {
      data['CustomerAddress_ID'] = this.customerAddressId;
    }

    data['Quantity'] = this.quantity;

    data['NextDate'] = this.nextDate;

    if (!util.isNullOrUndefined(this.paymentCardId)) {
      data['PaymentCard_ID'] = this.paymentCardId;
    }

    if (!util.isNullOrUndefined(this.shipId)) {
      data['Ship_ID'] = this.shipId;
    }

    if (!util.isNullOrUndefined(this.shipData)) {
      data['Ship_Data'] = this.shipData;
    }

    if (util.isArray(this.attributes)) {
      data['Attributes'] = [];

      for (i = 0, l = this.attributes.length; i < l; i++) {
        if (util.isObject(this.attributes[i])) {
            data['Attributes'].push(this.attributes[i].toObject());
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
    return new responses.SubscriptionAndOrderItemAdd(this, httpResponse, data);
  }
}

module.exports.SubscriptionAndOrderItemAdd = SubscriptionAndOrderItemAdd;