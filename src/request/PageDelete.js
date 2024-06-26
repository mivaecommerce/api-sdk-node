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
 * Handles API Request Page_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/page_delete
 * @class
 */
class PageDelete extends Request {
  /**
   * PageDelete Constructor.
   * @param {?BaseClient} client
   * @param {?Page} page
   */
  constructor(client, page = null) {
    super(client);
    this.function = 'Page_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.pageId = null;
    this.editPage = null;
    this.pageCode = null;
    this.branchId = null;
    this.editBranch = null;
    this.branchName = null;

    if (util.isInstanceOf(page, models.Page)) {
      if (page.getId()) {
        this.setPageId(page.getId());
      } else if (page.getCode()) {
        this.setEditPage(page.getCode());
      } else if (page.getCode()) {
        this.setPageCode(page.getCode());
      }
    }
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
   * Get Branch_ID.
   * @returns {number}
   */
  getBranchId() {
    return this.branchId;
  }

  /**
   * Get Edit_Branch.
   * @returns {string}
   */
  getEditBranch() {
    return this.editBranch;
  }

  /**
   * Get Branch_Name.
   * @returns {string}
   */
  getBranchName() {
    return this.branchName;
  }

  /**
   * Set Page_ID.
   * @param {number} pageId
   * @returns {PageDelete}
   */
  setPageId(pageId) {
    this.pageId = pageId;
    return this;
  }

  /**
   * Set Edit_Page.
   * @param {string} editPage
   * @returns {PageDelete}
   */
  setEditPage(editPage) {
    this.editPage = editPage;
    return this;
  }

  /**
   * Set Page_Code.
   * @param {string} pageCode
   * @returns {PageDelete}
   */
  setPageCode(pageCode) {
    this.pageCode = pageCode;
    return this;
  }

  /**
   * Set Branch_ID.
   * @param {number} branchId
   * @returns {PageDelete}
   */
  setBranchId(branchId) {
    this.branchId = branchId;
    return this;
  }

  /**
   * Set Edit_Branch.
   * @param {string} editBranch
   * @returns {PageDelete}
   */
  setEditBranch(editBranch) {
    this.editBranch = editBranch;
    return this;
  }

  /**
   * Set Branch_Name.
   * @param {string} branchName
   * @returns {PageDelete}
   */
  setBranchName(branchName) {
    this.branchName = branchName;
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

    if (!util.isNullOrUndefined(this.branchId)) {
      data['Branch_ID'] = this.branchId;
    } else if (!util.isNullOrUndefined(this.editBranch)) {
      data['Edit_Branch'] = this.editBranch;
    } else if (!util.isNullOrUndefined(this.branchName)) {
      data['Branch_Name'] = this.branchName;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.PageDelete(this, httpResponse, data);
  }
}

module.exports.PageDelete = PageDelete;