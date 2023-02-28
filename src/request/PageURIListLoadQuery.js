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
 * Handles API Request PageURIList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/pageurilist_load_query
 * @class
 */
class PageURIListLoadQuery extends ListQueryRequest {
  /**
   * PageURIListLoadQuery Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'PageURIList_Load_Query';
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

    this.pageId = null;
    this.editPage = null;
    this.pageCode = null;
  }

  /**
   * Get Page_ID.
   * @returns {number}
   */
  getPageId() {
    return this.pageId;
  }

  /**
   * Get Edit_Page.
   * @returns {string}
   */
  getEditPage() {
    return this.editPage;
  }

  /**
   * Get Page_Code.
   * @returns {string}
   */
  getPageCode() {
    return this.pageCode;
  }

  /**
   * Set Page_ID.
   * @param {number} pageId
   * @returns {PageURIListLoadQuery}
   */
  setPageId(pageId) {
    this.pageId = pageId;
    return this;
  }

  /**
   * Set Edit_Page.
   * @param {string} editPage
   * @returns {PageURIListLoadQuery}
   */
  setEditPage(editPage) {
    this.editPage = editPage;
    return this;
  }

  /**
   * Set Page_Code.
   * @param {string} pageCode
   * @returns {PageURIListLoadQuery}
   */
  setPageCode(pageCode) {
    this.pageCode = pageCode;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.pageId)) {
      data['Page_ID'] = this.pageId;
    } else if (!util.isNullOrUndefined(this.editPage)) {
      data['Edit_Page'] = this.editPage;
    } else if (!util.isNullOrUndefined(this.pageCode)) {
      data['Page_Code'] = this.pageCode;
    }

    data['Page_Code'] = this.pageCode;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.PageURIListLoadQuery(this, httpResponse, data);
  }
}

module.exports.PageURIListLoadQuery = PageURIListLoadQuery;