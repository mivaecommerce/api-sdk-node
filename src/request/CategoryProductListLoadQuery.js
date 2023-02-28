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
 * Handles API Request CategoryProductList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/categoryproductlist_load_query
 * @class
 */
class CategoryProductListLoadQuery extends ProductListLoadQuery {
  /**
   * CategoryProductListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?Category} category
   */
  constructor(client, category = null) {
    super(client);
    this.function = 'CategoryProductList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.categoryId = null;
    this.categoryCode = null;
    this.editCategory = null;
    this.assigned = null;
    this.unassigned = null;

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
   * Get Category_Code.
   * @returns {string}
   */
  getCategoryCode() {
    return this.categoryCode;
  }

  /**
   * Get Edit_Category.
   * @returns {string}
   */
  getEditCategory() {
    return this.editCategory;
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
   * Set Category_ID.
   * @param {number} categoryId
   * @returns {CategoryProductListLoadQuery}
   */
  setCategoryId(categoryId) {
    this.categoryId = categoryId;
    return this;
  }

  /**
   * Set Category_Code.
   * @param {string} categoryCode
   * @returns {CategoryProductListLoadQuery}
   */
  setCategoryCode(categoryCode) {
    this.categoryCode = categoryCode;
    return this;
  }

  /**
   * Set Edit_Category.
   * @param {string} editCategory
   * @returns {CategoryProductListLoadQuery}
   */
  setEditCategory(editCategory) {
    this.editCategory = editCategory;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {CategoryProductListLoadQuery}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Set Unassigned.
   * @param {boolean} unassigned
   * @returns {CategoryProductListLoadQuery}
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

    if (!util.isNullOrUndefined(this.categoryId)) {
      data['Category_ID'] = this.categoryId;
    } else if (!util.isNullOrUndefined(this.editCategory)) {
      data['Edit_Category'] = this.editCategory;
    } else if (!util.isNullOrUndefined(this.categoryCode)) {
      data['Category_Code'] = this.categoryCode;
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
    return new responses.CategoryProductListLoadQuery(this, httpResponse, data);
  }
}

module.exports.CategoryProductListLoadQuery = CategoryProductListLoadQuery;