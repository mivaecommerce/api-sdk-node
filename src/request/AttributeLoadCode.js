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
 * Handles API Request Attribute_Load_Code. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/attribute_load_code
 * @class
 */
class AttributeLoadCode extends Request {
  /**
   * AttributeLoadCode Constructor.
   * @param {?BaseClient} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client);
    this.function = 'Attribute_Load_Code';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productId = null;
    this.productCode = null;
    this.editProduct = null;
    this.customerId = null;
    this.attributeCode = null;

    if (util.isInstanceOf(product, models.Product)) {
      if (product.getId()) {
        this.setProductId(product.getId());
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
   * Get Customer_ID.
   * @returns {number}
   */
  getCustomerId() {
    return this.customerId;
  }

  /**
   * Get Attribute_Code.
   * @returns {string}
   */
  getAttributeCode() {
    return this.attributeCode;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {AttributeLoadCode}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {AttributeLoadCode}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {AttributeLoadCode}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {AttributeLoadCode}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
    return this;
  }

  /**
   * Set Attribute_Code.
   * @param {string} attributeCode
   * @returns {AttributeLoadCode}
   */
  setAttributeCode(attributeCode) {
    this.attributeCode = attributeCode;
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

    if (!util.isNullOrUndefined(this.customerId)) {
      data['Customer_ID'] = this.customerId;
    }

    data['Attribute_Code'] = this.attributeCode;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.AttributeLoadCode(this, httpResponse, data);
  }
}

module.exports.AttributeLoadCode = AttributeLoadCode;