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
const { ProductListLoadQuery } = require('./ProductListLoadQuery')

/** 
 * Handles API Request RelatedProductList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/relatedproductlist_load_query
 * @class
 */
class RelatedProductListLoadQuery extends ProductListLoadQuery {
  /**
   * RelatedProductListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client);
    this.function = 'RelatedProductList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productId = null;
    this.productCode = null;
    this.editProduct = null;
    this.assigned = null;
    this.unassigned = null;

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
   * Get Assigned.
   * @returns {boolean}
   */
  getAssigned() {
    return this.assigned;
  }

  /**
   * Get Unassigned.
   * @returns {boolean}
   */
  getUnassigned() {
    return this.unassigned;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {RelatedProductListLoadQuery}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {RelatedProductListLoadQuery}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {RelatedProductListLoadQuery}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {RelatedProductListLoadQuery}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Set Unassigned.
   * @param {boolean} unassigned
   * @returns {RelatedProductListLoadQuery}
   */
  setUnassigned(unassigned) {
    this.unassigned = unassigned;
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

    if (!util.isNullOrUndefined(this.assigned)) {
      data['Assigned'] = this.assigned;
    }

    if (!util.isNullOrUndefined(this.unassigned)) {
      data['Unassigned'] = this.unassigned;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.RelatedProductListLoadQuery(this, httpResponse, data);
  }
}

module.exports.RelatedProductListLoadQuery = RelatedProductListLoadQuery;