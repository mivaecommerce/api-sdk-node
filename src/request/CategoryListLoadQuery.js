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

/** CATEGORY_SHOW constants. */
/** @ignore */
const CATEGORY_SHOW_ALL = 'All';
/** @ignore */
const CATEGORY_SHOW_ACTIVE = 'Active';

/** 
 * Handles API Request CategoryList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/categorylist_load_query
 * @class
 */
class CategoryListLoadQuery extends ListQueryRequest {
  /**
   * CategoryListLoadQuery Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'CategoryList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'code',
      'name',
      'page_title',
      'parent_category',
      'page_code',
      'dt_created',
      'dt_updated',
      'depth'
    ];

    this.availableSortFields = [
      'id',
      'code',
      'name',
      'page_title',
      'active',
      'page_code',
      'parent_category',
      'disp_order',
      'dt_created',
      'dt_updated',
      'depth'
    ];

    this.availableOnDemandColumns = [
      'uris'
    ];

    this.availableCustomFilters = {
      Category_Show : [
          CATEGORY_SHOW_ALL,
          CATEGORY_SHOW_ACTIVE
      ],
    };
  }

  /**
   * Constant CATEGORY_SHOW_ALL
   * @returns {string}
   * @const
   * @static
   */
  static get CATEGORY_SHOW_ALL() {
    return CATEGORY_SHOW_ALL;
  }

  /**
   * Constant CATEGORY_SHOW_ACTIVE
   * @returns {string}
   * @const
   * @static
   */
  static get CATEGORY_SHOW_ACTIVE() {
    return CATEGORY_SHOW_ACTIVE;
  }
  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CategoryListLoadQuery(this, httpResponse, data);
  }
}

module.exports.CategoryListLoadQuery = CategoryListLoadQuery;