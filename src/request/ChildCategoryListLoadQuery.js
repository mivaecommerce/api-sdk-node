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
const { CategoryListLoadQuery } = require('./CategoryListLoadQuery')

/** 
 * Handles API Request ChildCategoryList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/childcategorylist_load_query
 * @class
 */
class ChildCategoryListLoadQuery extends CategoryListLoadQuery {
  /**
   * ChildCategoryListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?Category} category
   */
  constructor(client, category = null) {
    super(client);
    this.function = 'ChildCategoryList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.parentCategoryId = null;
    this.parentCategoryCode = null;
    this.editParentCategory = null;
    this.assigned = null;
    this.unassigned = null;

    if (util.isInstanceOf(category, models.Category)) {
      if (category.getId()) {
        this.setParentCategoryId(category.getId());
      } else if (category.getCode()) {
        this.setEditParentCategory(category.getCode());
      } else if (category.getCode()) {
        this.setParentCategoryCode(category.getCode());
      }
    }
  }

  /**
   * Get ParentCategory_ID.
   * @returns {number}
   */
  getParentCategoryId() {
    return this.parentCategoryId;
  }

  /**
   * Get ParentCategory_Code.
   * @returns {string}
   */
  getParentCategoryCode() {
    return this.parentCategoryCode;
  }

  /**
   * Get Edit_ParentCategory.
   * @returns {string}
   */
  getEditParentCategory() {
    return this.editParentCategory;
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
   * Set ParentCategory_ID.
   * @param {number} parentCategoryId
   * @returns {ChildCategoryListLoadQuery}
   */
  setParentCategoryId(parentCategoryId) {
    this.parentCategoryId = parentCategoryId;
    return this;
  }

  /**
   * Set ParentCategory_Code.
   * @param {string} parentCategoryCode
   * @returns {ChildCategoryListLoadQuery}
   */
  setParentCategoryCode(parentCategoryCode) {
    this.parentCategoryCode = parentCategoryCode;
    return this;
  }

  /**
   * Set Edit_ParentCategory.
   * @param {string} editParentCategory
   * @returns {ChildCategoryListLoadQuery}
   */
  setEditParentCategory(editParentCategory) {
    this.editParentCategory = editParentCategory;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {ChildCategoryListLoadQuery}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Set Unassigned.
   * @param {boolean} unassigned
   * @returns {ChildCategoryListLoadQuery}
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

    if (!util.isNullOrUndefined(this.parentCategoryId)) {
      data['ParentCategory_ID'] = this.parentCategoryId;
    } else if (!util.isNullOrUndefined(this.parentCategoryCode)) {
      data['ParentCategory_Code'] = this.parentCategoryCode;
    } else if (!util.isNullOrUndefined(this.editParentCategory)) {
      data['Edit_ParentCategory'] = this.editParentCategory;
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
    return new responses.ChildCategoryListLoadQuery(this, httpResponse, data);
  }
}

module.exports.ChildCategoryListLoadQuery = ChildCategoryListLoadQuery;