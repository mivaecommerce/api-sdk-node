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
 * Handles API Request ProductSubscriptionTermList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/productsubscriptiontermlist_load_query
 * @class
 */
class ProductSubscriptionTermListLoadQuery extends ListQueryRequest {
  /**
   * ProductSubscriptionTermListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client);
    this.function = 'ProductSubscriptionTermList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'frequency',
      'term',
      'descrip',
      'n',
      'fixed_dow',
      'fixed_dom',
      'sub_count'
    ];

    this.availableSortFields = [
      'id',
      'frequency',
      'term',
      'descrip',
      'n',
      'fixed_dow',
      'fixed_dom',
      'sub_count',
      'disp_order'
    ];

    this.productId = null;
    this.editProduct = null;
    this.productCode = null;

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
   * Set Product_ID.
   * @param {number} productId
   * @returns {ProductSubscriptionTermListLoadQuery}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {ProductSubscriptionTermListLoadQuery}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {ProductSubscriptionTermListLoadQuery}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
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

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ProductSubscriptionTermListLoadQuery(this, httpResponse, data);
  }
}

module.exports.ProductSubscriptionTermListLoadQuery = ProductSubscriptionTermListLoadQuery;