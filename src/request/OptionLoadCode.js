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
 * Handles API Request Option_Load_Code. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/option_load_code
 * @class
 */
class OptionLoadCode extends Request {
  /**
   * OptionLoadCode Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'Option_Load_Code';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productId = null;
    this.productCode = null;
    this.editProduct = null;
    this.attributeId = null;
    this.attributeCode = null;
    this.editAttribute = null;
    this.optionCode = null;
    this.customerId = null;
  }

  /**
   * Get Product_ID.
   * @returns {number}
   */
  getProductId() {
    return this.productId;
  }

  /**
   * Get Product_Code.
   * @returns {string}
   */
  getProductCode() {
    return this.productCode;
  }

  /**
   * Get Edit_Product.
   * @returns {string}
   */
  getEditProduct() {
    return this.editProduct;
  }

  /**
   * Get Attribute_ID.
   * @returns {number}
   */
  getAttributeId() {
    return this.attributeId;
  }

  /**
   * Get Attribute_Code.
   * @returns {string}
   */
  getAttributeCode() {
    return this.attributeCode;
  }

  /**
   * Get Edit_Attribute.
   * @returns {string}
   */
  getEditAttribute() {
    return this.editAttribute;
  }

  /**
   * Get Option_Code.
   * @returns {string}
   */
  getOptionCode() {
    return this.optionCode;
  }

  /**
   * Get Customer_ID.
   * @returns {number}
   */
  getCustomerId() {
    return this.customerId;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {OptionLoadCode}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {OptionLoadCode}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {OptionLoadCode}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Attribute_ID.
   * @param {number} attributeId
   * @returns {OptionLoadCode}
   */
  setAttributeId(attributeId) {
    this.attributeId = attributeId;
    return this;
  }

  /**
   * Set Attribute_Code.
   * @param {string} attributeCode
   * @returns {OptionLoadCode}
   */
  setAttributeCode(attributeCode) {
    this.attributeCode = attributeCode;
    return this;
  }

  /**
   * Set Edit_Attribute.
   * @param {string} editAttribute
   * @returns {OptionLoadCode}
   */
  setEditAttribute(editAttribute) {
    this.editAttribute = editAttribute;
    return this;
  }

  /**
   * Set Option_Code.
   * @param {string} optionCode
   * @returns {OptionLoadCode}
   */
  setOptionCode(optionCode) {
    this.optionCode = optionCode;
    return this;
  }

  /**
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {OptionLoadCode}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.productId)) {
      data['Product_ID'] = this.productId;
    } else if (!util.isNullOrUndefined(this.productCode)) {
      data['Product_Code'] = this.productCode;
    } else if (!util.isNullOrUndefined(this.editProduct)) {
      data['Edit_Product'] = this.editProduct;
    }

    if (!util.isNullOrUndefined(this.attributeId)) {
      data['Attribute_ID'] = this.attributeId;
    } else if (!util.isNullOrUndefined(this.attributeCode)) {
      data['Attribute_Code'] = this.attributeCode;
    } else if (!util.isNullOrUndefined(this.editAttribute)) {
      data['Edit_Attribute'] = this.editAttribute;
    }

    if (!util.isNullOrUndefined(this.optionCode)) {
      data['Option_Code'] = this.optionCode;
    }

    if (!util.isNullOrUndefined(this.customerId)) {
      data['Customer_ID'] = this.customerId;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.OptionLoadCode(this, httpResponse, data);
  }
}

module.exports.OptionLoadCode = OptionLoadCode;