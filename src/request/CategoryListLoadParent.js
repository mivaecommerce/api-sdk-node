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
 * Handles API Request CategoryList_Load_Parent. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/categorylist_load_parent
 * @class
 */
class CategoryListLoadParent extends Request {
  /**
   * CategoryListLoadParent Constructor.
   * @param {?BaseClient} client
   * @param {?Category} category
   */
  constructor(client, category = null) {
    super(client);
    this.function = 'CategoryList_Load_Parent';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.parentId = null;

    if (util.isInstanceOf(category, models.Category)) {
      this.setParentId(category.getId());
    }
  }

  /**
   * Get Parent_ID.
   * @returns {number}
   */
  getParentId() {
    return this.parentId;
  }

  /**
   * Set Parent_ID.
   * @param {number} parentId
   * @returns {CategoryListLoadParent}
   */
  setParentId(parentId) {
    this.parentId = parentId;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['Parent_ID'] = this.getParentId();

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CategoryListLoadParent(this, httpResponse, data);
  }
}

module.exports.CategoryListLoadParent = CategoryListLoadParent;