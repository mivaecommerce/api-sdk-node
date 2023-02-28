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
 * Handles API Request ProductURI_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/producturi_insert
 * @class
 */
class ProductURIInsert extends Request {
  /**
   * ProductURIInsert Constructor.
   * @param {?BaseClient} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client);
    this.function = 'ProductURI_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.uri = null;
    this.status = null;
    this.canonical = null;
    this.productId = null;
    this.productCode = null;
    this.editProduct = null;

    if (util.isInstanceOf(product, models.Product)) {
      if (product.getId()) {
        this.setProductId(product.getId());
      } else if (product.getCode()) {
        this.setProductCode(product.getCode());
      }
    }
  }

  /**
   * Get URI.
   * @returns {string}
   */
  getUri() {
    return this.uri;
  }

  /**
   * Get Status.
   * @returns {number}
   */
  getStatus() {
    return this.status;
  }

  /**
   * Get Canonical.
   * @returns {boolean}
   */
  getCanonical() {
    return this.canonical;
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
   * Set URI.
   * @param {string} uri
   * @returns {ProductURIInsert}
   */
  setUri(uri) {
    this.uri = uri;
    return this;
  }

  /**
   * Set Status.
   * @param {number} status
   * @returns {ProductURIInsert}
   */
  setStatus(status) {
    this.status = status;
    return this;
  }

  /**
   * Set Canonical.
   * @param {boolean} canonical
   * @returns {ProductURIInsert}
   */
  setCanonical(canonical) {
    this.canonical = canonical;
    return this;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {ProductURIInsert}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {ProductURIInsert}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {ProductURIInsert}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
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

    if (!util.isNullOrUndefined(this.uri)) {
      data['URI'] = this.uri;
    }

    if (!util.isNullOrUndefined(this.status)) {
      data['Status'] = this.status;
    }

    if (!util.isNullOrUndefined(this.canonical)) {
      data['Canonical'] = this.canonical;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ProductURIInsert(this, httpResponse, data);
  }
}

module.exports.ProductURIInsert = ProductURIInsert;