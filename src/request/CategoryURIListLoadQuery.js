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
 * Handles API Request CategoryURIList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/categoryurilist_load_query
 * @class
 */
class CategoryURIListLoadQuery extends ListQueryRequest {
  /**
   * CategoryURIListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?Category} category
   */
  constructor(client, category = null) {
    super(client);
    this.function = 'CategoryURIList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'canonical',
      'status',
      'uri'
    ];

    this.availableSortFields = [
      'uri'
    ];

    this.categoryId = null;
    this.editCategory = null;
    this.categoryCode = null;

    if (util.isInstanceOf(category, models.Category)) {
      if (category.getId()) {
        this.setCategoryId(category.getId());
      } else if (category.getCode()) {
        this.setEditCategory(category.getCode());
      } else if (category.getCode()) {
        this.setCategoryCode(category.getCode());
      }

      this.setCategoryCode(category.getCode());
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
   * Set Category_ID.
   * @param {number} categoryId
   * @returns {CategoryURIListLoadQuery}
   */
  setCategoryId(categoryId) {
    this.categoryId = categoryId;
    return this;
  }

  /**
   * Set Edit_Category.
   * @param {string} editCategory
   * @returns {CategoryURIListLoadQuery}
   */
  setEditCategory(editCategory) {
    this.editCategory = editCategory;
    return this;
  }

  /**
   * Set Category_Code.
   * @param {string} categoryCode
   * @returns {CategoryURIListLoadQuery}
   */
  setCategoryCode(categoryCode) {
    this.categoryCode = categoryCode;
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

    data['Category_Code'] = this.categoryCode;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CategoryURIListLoadQuery(this, httpResponse, data);
  }
}

module.exports.CategoryURIListLoadQuery = CategoryURIListLoadQuery;