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
const { ListQueryRequest }  = require('./../listquery');

/** 
 * Handles API Request SubscriptionShippingMethodList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/subscriptionshippingmethodlist_load_query
 * @class
 */
class SubscriptionShippingMethodListLoadQuery extends ListQueryRequest {
  /**
   * SubscriptionShippingMethodListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client);
    this.function = 'SubscriptionShippingMethodList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'method',
      'price'
    ];

    this.availableSortFields = [
      'method',
      'price'
    ];

    this.productId = null;
    this.editProduct = null;
    this.productCode = null;
    this.productSubscriptionTermId = null;
    this.productSubscriptionTermDescription = null;
    this.customerAddressId = null;
    this.addressId = null;
    this.paymentCardId = null;
    this.customerPaymentCardId = null;
    this.customerId = null;
    this.editCustomer = null;
    this.customerLogin = null;
    this.attributes = [];
    this.quantity = null;

    if (util.isInstanceOf(product, models.Product)) {
      if (product.getId()) {
        this.setProductId(product.getId());
      } else if (product.getCode()) {
        this.setEditProduct(product.getCode());
      }
    }
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
   * Get CustomerAddress_ID.
   * @returns {number}
   */
  getCustomerAddressId() {
    return this.customerAddressId;
  }

  /**
   * Get Address_ID.
   * @returns {number}
   */
  getAddressId() {
    return this.addressId;
  }

  /**
   * Get PaymentCard_ID.
   * @returns {number}
   */
  getPaymentCardId() {
    return this.paymentCardId;
  }

  /**
   * Get CustomerPaymentCard_ID.
   * @returns {number}
   */
  getCustomerPaymentCardId() {
    return this.customerPaymentCardId;
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
   * Get Attributes.
   * @returns {SubscriptionAttribute[]}
   */
  getAttributes() {
    return this.attributes;
  }

  /**
   * Get Quantity.
   * @returns {number}
   */
  getQuantity() {
    return this.quantity;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {SubscriptionShippingMethodListLoadQuery}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {SubscriptionShippingMethodListLoadQuery}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {SubscriptionShippingMethodListLoadQuery}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set ProductSubscriptionTerm_ID.
   * @param {number} productSubscriptionTermId
   * @returns {SubscriptionShippingMethodListLoadQuery}
   */
  setProductSubscriptionTermId(productSubscriptionTermId) {
    this.productSubscriptionTermId = productSubscriptionTermId;
    return this;
  }

  /**
   * Set ProductSubscriptionTerm_Description.
   * @param {string} productSubscriptionTermDescription
   * @returns {SubscriptionShippingMethodListLoadQuery}
   */
  setProductSubscriptionTermDescription(productSubscriptionTermDescription) {
    this.productSubscriptionTermDescription = productSubscriptionTermDescription;
    return this;
  }

  /**
   * Set CustomerAddress_ID.
   * @param {number} customerAddressId
   * @returns {SubscriptionShippingMethodListLoadQuery}
   */
  setCustomerAddressId(customerAddressId) {
    this.customerAddressId = customerAddressId;
    return this;
  }

  /**
   * Set Address_ID.
   * @param {number} addressId
   * @returns {SubscriptionShippingMethodListLoadQuery}
   */
  setAddressId(addressId) {
    this.addressId = addressId;
    return this;
  }

  /**
   * Set PaymentCard_ID.
   * @param {number} paymentCardId
   * @returns {SubscriptionShippingMethodListLoadQuery}
   */
  setPaymentCardId(paymentCardId) {
    this.paymentCardId = paymentCardId;
    return this;
  }

  /**
   * Set CustomerPaymentCard_ID.
   * @param {number} customerPaymentCardId
   * @returns {SubscriptionShippingMethodListLoadQuery}
   */
  setCustomerPaymentCardId(customerPaymentCardId) {
    this.customerPaymentCardId = customerPaymentCardId;
    return this;
  }

  /**
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {SubscriptionShippingMethodListLoadQuery}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
    return this;
  }

  /**
   * Set Edit_Customer.
   * @param {string} editCustomer
   * @returns {SubscriptionShippingMethodListLoadQuery}
   */
  setEditCustomer(editCustomer) {
    this.editCustomer = editCustomer;
    return this;
  }

  /**
   * Set Customer_Login.
   * @param {string} customerLogin
   * @returns {SubscriptionShippingMethodListLoadQuery}
   */
  setCustomerLogin(customerLogin) {
    this.customerLogin = customerLogin;
    return this;
  }

  /**
   * Set Attributes.
   * @param {SubscriptionAttribute[]} attributes
   * @throws {Error}
   * @returns {SubscriptionShippingMethodListLoadQuery}
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
   * Set Quantity.
   * @param {number} quantity
   * @returns {SubscriptionShippingMethodListLoadQuery}
   */
  setQuantity(quantity) {
    this.quantity = quantity;
    return this;
  }

  /**
   * Add Attributes.
   * @param {SubscriptionAttribute} subscriptionAttribute
   * @throws {Error}
   * @returns {SubscriptionShippingMethodListLoadQuery}
   */
  addSubscriptionAttribute(subscriptionAttribute) {
    if (util.isInstanceOf(subscriptionAttribute, models.SubscriptionAttribute)) {
      this.attributes.push(subscriptionAttribute);
    } else if (util.isObject(subscriptionAttribute)) {
      this.attributes.push(new models.SubscriptionAttribute(subscriptionAttribute));
    } else {
      throw new Error(util.format('Expected instance of SubscriptionAttribute or Object but got %s',
        typeof subscriptionAttribute));
    }

    return this;
  }

  /**
   * Add many SubscriptionAttribute.
   * @param {SubscriptionAttribute[]} attributes
   * @throws {Error}
   * @returns {SubscriptionShippingMethodListLoadQuery}
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

    if (!util.isNullOrUndefined(this.customerAddressId)) {
      data['CustomerAddress_ID'] = this.customerAddressId;
    } else if (!util.isNullOrUndefined(this.addressId)) {
      data['Address_ID'] = this.addressId;
    }

    if (!util.isNullOrUndefined(this.paymentCardId)) {
      data['PaymentCard_ID'] = this.paymentCardId;
    } else if (!util.isNullOrUndefined(this.customerPaymentCardId)) {
      data['CustomerPaymentCard_ID'] = this.customerPaymentCardId;
    }

    if (!util.isNullOrUndefined(this.customerId)) {
      data['Customer_ID'] = this.customerId;
    } else if (!util.isNullOrUndefined(this.editCustomer)) {
      data['Edit_Customer'] = this.editCustomer;
    } else if (!util.isNullOrUndefined(this.customerLogin)) {
      data['Customer_Login'] = this.customerLogin;
    }

    if (util.isArray(this.attributes)) {
      data['Attributes'] = [];

      for (i = 0, l = this.attributes.length; i < l; i++) {
        if (util.isObject(this.attributes[i])) {
            data['Attributes'].push(this.attributes[i].toObject());
        }
      }
    }

    data['Quantity'] = this.quantity;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.SubscriptionShippingMethodListLoadQuery(this, httpResponse, data);
  }
}

module.exports.SubscriptionShippingMethodListLoadQuery = SubscriptionShippingMethodListLoadQuery;