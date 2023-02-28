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
 * Handles API Request ProductAttributeAndOptionList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/productattributeandoptionlist_load_query
 * @class
 */
class ProductAttributeAndOptionListLoadQuery extends ListQueryRequest {
  /**
   * ProductAttributeAndOptionListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client);
    this.function = 'ProductAttributeAndOptionList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'code',
      'prompt',
      'price',
      'cost',
      'weight',
      'image',
      'type',
      'template',
      'required',
      'inventory',
      'attr_code',
      'attr_prompt',
      'attr_price',
      'attr_cost',
      'attr_weight',
      'attr_image',
      'opt_code',
      'opt_prompt',
      'opt_price',
      'opt_cost',
      'opt_weight',
      'opt_image'
    ];

    this.availableSortFields = [
      'code',
      'prompt',
      'price',
      'cost',
      'weight',
      'image',
      'type',
      'required',
      'inventory',
      'attr_code',
      'attr_prompt',
      'attr_price',
      'attr_cost',
      'attr_weight',
      'attr_image',
      'opt_code',
      'opt_prompt',
      'opt_price',
      'opt_cost',
      'opt_weight',
      'opt_image',
      'disporder'
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
   * @returns {ProductAttributeAndOptionListLoadQuery}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {ProductAttributeAndOptionListLoadQuery}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {ProductAttributeAndOptionListLoadQuery}
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
    return new responses.ProductAttributeAndOptionListLoadQuery(this, httpResponse, data);
  }
}

module.exports.ProductAttributeAndOptionListLoadQuery = ProductAttributeAndOptionListLoadQuery;