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
 * Handles API Request ProductVariantList_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/productvariantlist_delete
 * @class
 */
class ProductVariantListDelete extends Request {
  /**
   * ProductVariantListDelete Constructor.
   * @param {?BaseClient} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client);
    this.function = 'ProductVariantList_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productId = null;
    this.productCode = null;
    this.editProduct = null;
    this.productVariantIds = [];

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
   * Get ProductVariant_IDs.
   * @returns {Array}
   */
  getProductVariantIds() {
    return this.productVariantIds;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {ProductVariantListDelete}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {ProductVariantListDelete}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {ProductVariantListDelete}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Add ProductVariant_IDs.
   * @param {number} variantId
   * @returns {ProductVariantListDelete}
   */
  addVariantId(variantId) {
    this.productVariantIds.push(variantId);
    return this;
  }

  /**
   * Add ProductVariant model.
   * @param {ProductVariant} productVariant
   * @throws {Error}
   * @returns {ProductVariantListDelete}
   */
  addProductVariant(productVariant) {
    if (!util.isInstanceOf(productVariant, models.ProductVariant)) {
      throw new Error(util.format('Expected instance of ProductVariant but got %s',
        typeof productVariant));
    }

    if (productVariant.getVariantId()) {
      this.productVariantIds.push(productVariant.getVariantId());
    }

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

    data['ProductVariant_IDs'] = this.productVariantIds;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ProductVariantListDelete(this, httpResponse, data);
  }
}

module.exports.ProductVariantListDelete = ProductVariantListDelete;