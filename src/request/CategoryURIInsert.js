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
 * Handles API Request CategoryURI_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/categoryuri_insert
 * @class
 */
class CategoryURIInsert extends Request {
  /**
   * CategoryURIInsert Constructor.
   * @param {?BaseClient} client
   * @param {?Category} category
   */
  constructor(client, category = null) {
    super(client);
    this.function = 'CategoryURI_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.uri = null;
    this.status = null;
    this.canonical = null;
    this.categoryId = null;
    this.categoryCode = null;
    this.editCategory = null;

    if (util.isInstanceOf(category, models.Category)) {
      if (category.getId()) {
        this.setCategoryId(category.getId());
      } else if (category.getCode()) {
        this.setCategoryCode(category.getCode());
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
   * Set URI.
   * @param {string} uri
   * @returns {CategoryURIInsert}
   */
  setUri(uri) {
    this.uri = uri;
    return this;
  }

  /**
   * Set Status.
   * @param {number} status
   * @returns {CategoryURIInsert}
   */
  setStatus(status) {
    this.status = status;
    return this;
  }

  /**
   * Set Canonical.
   * @param {boolean} canonical
   * @returns {CategoryURIInsert}
   */
  setCanonical(canonical) {
    this.canonical = canonical;
    return this;
  }

  /**
   * Set Category_ID.
   * @param {number} categoryId
   * @returns {CategoryURIInsert}
   */
  setCategoryId(categoryId) {
    this.categoryId = categoryId;
    return this;
  }

  /**
   * Set Category_Code.
   * @param {string} categoryCode
   * @returns {CategoryURIInsert}
   */
  setCategoryCode(categoryCode) {
    this.categoryCode = categoryCode;
    return this;
  }

  /**
   * Set Edit_Category.
   * @param {string} editCategory
   * @returns {CategoryURIInsert}
   */
  setEditCategory(editCategory) {
    this.editCategory = editCategory;
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
    } else if (!util.isNullOrUndefined(this.categoryCode)) {
      data['Category_Code'] = this.categoryCode;
    } else if (!util.isNullOrUndefined(this.editCategory)) {
      data['Edit_Category'] = this.editCategory;
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
    return new responses.CategoryURIInsert(this, httpResponse, data);
  }
}

module.exports.CategoryURIInsert = CategoryURIInsert;