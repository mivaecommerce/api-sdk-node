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
 * Handles API Request OptionList_Load_Attribute. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/optionlist_load_attribute
 * @class
 */
class OptionListLoadAttribute extends Request {
  /**
   * OptionListLoadAttribute Constructor.
   * @param {?BaseClient} client
   * @param {?ProductAttribute} productAttribute
   */
  constructor(client, productAttribute = null) {
    super(client);
    this.function = 'OptionList_Load_Attribute';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productId = null;
    this.productCode = null;
    this.editProduct = null;
    this.attributeId = null;
    this.editAttribute = null;
    this.attributeCode = null;
    this.customerId = null;

    if (util.isInstanceOf(productAttribute, models.ProductAttribute)) {
      if (productAttribute.getProductId()) {
        this.setProductId(productAttribute.getProductId());
      }

      if (productAttribute.getId()) {
        this.setAttributeId(productAttribute.getId());
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
   * Get Edit_Attribute.
   * @returns {string}
   */
  getEditAttribute() {
    return this.editAttribute;
  }

  /**
   * Get Attribute_Code.
   * @returns {string}
   */
  getAttributeCode() {
    return this.attributeCode;
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
   * @returns {OptionListLoadAttribute}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {OptionListLoadAttribute}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {OptionListLoadAttribute}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Attribute_ID.
   * @param {number} attributeId
   * @returns {OptionListLoadAttribute}
   */
  setAttributeId(attributeId) {
    this.attributeId = attributeId;
    return this;
  }

  /**
   * Set Edit_Attribute.
   * @param {string} editAttribute
   * @returns {OptionListLoadAttribute}
   */
  setEditAttribute(editAttribute) {
    this.editAttribute = editAttribute;
    return this;
  }

  /**
   * Set Attribute_Code.
   * @param {string} attributeCode
   * @returns {OptionListLoadAttribute}
   */
  setAttributeCode(attributeCode) {
    this.attributeCode = attributeCode;
    return this;
  }

  /**
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {OptionListLoadAttribute}
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
    } else if (!util.isNullOrUndefined(this.editProduct)) {
      data['Edit_Product'] = this.editProduct;
    } else if (!util.isNullOrUndefined(this.productCode)) {
      data['Product_Code'] = this.productCode;
    }

    if (!util.isNullOrUndefined(this.attributeId)) {
      data['Attribute_ID'] = this.attributeId;
    } else if (!util.isNullOrUndefined(this.editAttribute)) {
      data['Edit_Attribute'] = this.editAttribute;
    } else if (!util.isNullOrUndefined(this.attributeCode)) {
      data['Attribute_Code'] = this.attributeCode;
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
    return new responses.OptionListLoadAttribute(this, httpResponse, data);
  }
}

module.exports.OptionListLoadAttribute = OptionListLoadAttribute;