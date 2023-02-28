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
 * Handles API Request RelatedProduct_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/relatedproduct_update_assigned
 * @class
 */
class RelatedProductUpdateAssigned extends Request {
  /**
   * RelatedProductUpdateAssigned Constructor.
   * @param {?BaseClient} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client);
    this.function = 'RelatedProduct_Update_Assigned';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productId = null;
    this.productCode = null;
    this.editProduct = null;
    this.relatedProductId = null;
    this.relatedProductCode = null;
    this.editRelatedProduct = null;
    this.assigned = null;

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
   * Get RelatedProduct_ID.
   * @returns {number}
   */
  getRelatedProductId() {
    return this.relatedProductId;
  }

  /**
   * Get RelatedProduct_Code.
   * @returns {string}
   */
  getRelatedProductCode() {
    return this.relatedProductCode;
  }

  /**
   * Get Edit_RelatedProduct.
   * @returns {string}
   */
  getEditRelatedProduct() {
    return this.editRelatedProduct;
  }

  /**
   * Get Assigned.
   * @returns {boolean}
   */
  getAssigned() {
    return this.assigned;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {RelatedProductUpdateAssigned}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {RelatedProductUpdateAssigned}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {RelatedProductUpdateAssigned}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set RelatedProduct_ID.
   * @param {number} relatedProductId
   * @returns {RelatedProductUpdateAssigned}
   */
  setRelatedProductId(relatedProductId) {
    this.relatedProductId = relatedProductId;
    return this;
  }

  /**
   * Set RelatedProduct_Code.
   * @param {string} relatedProductCode
   * @returns {RelatedProductUpdateAssigned}
   */
  setRelatedProductCode(relatedProductCode) {
    this.relatedProductCode = relatedProductCode;
    return this;
  }

  /**
   * Set Edit_RelatedProduct.
   * @param {string} editRelatedProduct
   * @returns {RelatedProductUpdateAssigned}
   */
  setEditRelatedProduct(editRelatedProduct) {
    this.editRelatedProduct = editRelatedProduct;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {RelatedProductUpdateAssigned}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
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

    if (!util.isNullOrUndefined(this.relatedProductId)) {
      data['RelatedProduct_ID'] = this.relatedProductId;
    } else if (!util.isNullOrUndefined(this.relatedProductCode)) {
      data['RelatedProduct_Code'] = this.relatedProductCode;
    } else if (!util.isNullOrUndefined(this.editRelatedProduct)) {
      data['Edit_RelatedProduct'] = this.editRelatedProduct;
    }

    if (!util.isNullOrUndefined(this.assigned)) {
      data['Assigned'] = this.assigned;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.RelatedProductUpdateAssigned(this, httpResponse, data);
  }
}

module.exports.RelatedProductUpdateAssigned = RelatedProductUpdateAssigned;