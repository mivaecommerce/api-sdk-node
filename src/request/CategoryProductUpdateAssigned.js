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
 * Handles API Request CategoryProduct_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/categoryproduct_update_assigned
 * @class
 */
class CategoryProductUpdateAssigned extends Request {
  /**
   * CategoryProductUpdateAssigned Constructor.
   * @param {?BaseClient} client
   * @param {?Category} category
   */
  constructor(client, category = null) {
    super(client);
    this.function = 'CategoryProduct_Update_Assigned';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.categoryId = null;
    this.editCategory = null;
    this.categoryCode = null;
    this.productId = null;
    this.editProduct = null;
    this.productCode = null;
    this.productSku = null;
    this.assigned = null;

    if (util.isInstanceOf(category, models.Category)) {
      if (category.getId()) {
        this.setCategoryId(category.getId());
      } else if (category.getCode()) {
        this.setEditCategory(category.getCode());
      }
    }
  }

  /**
   * Get Category_ID.
   * @returns {number}
   */
  getCategoryId() {
    return this.categoryId;
  }

  /**
   * Get Edit_Category.
   * @returns {string}
   */
  getEditCategory() {
    return this.editCategory;
  }

  /**
   * Get Category_Code.
   * @returns {string}
   */
  getCategoryCode() {
    return this.categoryCode;
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
   * Get Product_SKU.
   * @returns {string}
   */
  getProductSku() {
    return this.productSku;
  }

  /**
   * Get Assigned.
   * @returns {boolean}
   */
  getAssigned() {
    return this.assigned;
  }

  /**
   * Set Category_ID.
   * @param {number} categoryId
   * @returns {CategoryProductUpdateAssigned}
   */
  setCategoryId(categoryId) {
    this.categoryId = categoryId;
    return this;
  }

  /**
   * Set Edit_Category.
   * @param {string} editCategory
   * @returns {CategoryProductUpdateAssigned}
   */
  setEditCategory(editCategory) {
    this.editCategory = editCategory;
    return this;
  }

  /**
   * Set Category_Code.
   * @param {string} categoryCode
   * @returns {CategoryProductUpdateAssigned}
   */
  setCategoryCode(categoryCode) {
    this.categoryCode = categoryCode;
    return this;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {CategoryProductUpdateAssigned}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {CategoryProductUpdateAssigned}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {CategoryProductUpdateAssigned}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Product_SKU.
   * @param {string} productSku
   * @returns {CategoryProductUpdateAssigned}
   */
  setProductSku(productSku) {
    this.productSku = productSku;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {CategoryProductUpdateAssigned}
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

    if (!util.isNullOrUndefined(this.categoryId)) {
      data['Category_ID'] = this.categoryId;
    } else if (!util.isNullOrUndefined(this.editCategory)) {
      data['Edit_Category'] = this.editCategory;
    } else if (!util.isNullOrUndefined(this.categoryCode)) {
      data['Category_Code'] = this.categoryCode;
    }

    if (!util.isNullOrUndefined(this.productId)) {
      data['Product_ID'] = this.productId;
    } else if (!util.isNullOrUndefined(this.editProduct)) {
      data['Edit_Product'] = this.editProduct;
    } else if (!util.isNullOrUndefined(this.productCode)) {
      data['Product_Code'] = this.productCode;
    } else if (!util.isNullOrUndefined(this.productSku)) {
      data['Product_SKU'] = this.productSku;
    }

    data['Assigned'] = this.assigned;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CategoryProductUpdateAssigned(this, httpResponse, data);
  }
}

module.exports.CategoryProductUpdateAssigned = CategoryProductUpdateAssigned;