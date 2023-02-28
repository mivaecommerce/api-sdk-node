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
 * Handles API Request PageURI_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/pageuri_insert
 * @class
 */
class PageURIInsert extends Request {
  /**
   * PageURIInsert Constructor.
   * @param {?BaseClient} client
   * @param {?Page} page
   */
  constructor(client, page = null) {
    super(client);
    this.function = 'PageURI_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.uri = null;
    this.status = null;
    this.canonical = null;
    this.pageId = null;
    this.pageCode = null;
    this.editPage = null;

    if (util.isInstanceOf(page, models.Page)) {
      if (page.getId()) {
        this.setPageId(page.getId());
      } else if (page.getCode()) {
        this.setPageCode(page.getCode());
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
   * Get Page_ID.
   * @returns {number}
   */
  getPageId() {
    return this.pageId;
  }

  /**
   * Get Page_Code.
   * @returns {string}
   */
  getPageCode() {
    return this.pageCode;
  }

  /**
   * Get Edit_Page.
   * @returns {string}
   */
  getEditPage() {
    return this.editPage;
  }

  /**
   * Set URI.
   * @param {string} uri
   * @returns {PageURIInsert}
   */
  setUri(uri) {
    this.uri = uri;
    return this;
  }

  /**
   * Set Status.
   * @param {number} status
   * @returns {PageURIInsert}
   */
  setStatus(status) {
    this.status = status;
    return this;
  }

  /**
   * Set Canonical.
   * @param {boolean} canonical
   * @returns {PageURIInsert}
   */
  setCanonical(canonical) {
    this.canonical = canonical;
    return this;
  }

  /**
   * Set Page_ID.
   * @param {number} pageId
   * @returns {PageURIInsert}
   */
  setPageId(pageId) {
    this.pageId = pageId;
    return this;
  }

  /**
   * Set Page_Code.
   * @param {string} pageCode
   * @returns {PageURIInsert}
   */
  setPageCode(pageCode) {
    this.pageCode = pageCode;
    return this;
  }

  /**
   * Set Edit_Page.
   * @param {string} editPage
   * @returns {PageURIInsert}
   */
  setEditPage(editPage) {
    this.editPage = editPage;
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
    } else if (!util.isNullOrUndefined(this.pageCode)) {
      data['Page_Code'] = this.pageCode;
    } else if (!util.isNullOrUndefined(this.editPage)) {
      data['Edit_Page'] = this.editPage;
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
    return new responses.PageURIInsert(this, httpResponse, data);
  }
}

module.exports.PageURIInsert = PageURIInsert;