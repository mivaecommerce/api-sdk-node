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
 * Handles API Request Page_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/page_insert
 * @class
 */
class PageInsert extends Request {
  /**
   * PageInsert Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'Page_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.pageCode = null;
    this.pageName = null;
    this.pageTitle = null;
    this.pageTemplate = null;
    this.pageLayout = null;
    this.pageSecure = null;
    this.pageCache = null;
    this.changesetNotes = null;
    this.pageUri = null;
    this.customFieldValues = new models.CustomFieldValues();
    this.branchId = null;
    this.editBranch = null;
    this.branchName = null;
  }

  /**
   * Get Page_Code.
   * @returns {string}
   */
  getPageCode() {
    return this.pageCode;
  }

  /**
   * Get Page_Name.
   * @returns {string}
   */
  getPageName() {
    return this.pageName;
  }

  /**
   * Get Page_Title.
   * @returns {string}
   */
  getPageTitle() {
    return this.pageTitle;
  }

  /**
   * Get Page_Template.
   * @returns {string}
   */
  getPageTemplate() {
    return this.pageTemplate;
  }

  /**
   * Get Page_Layout.
   * @returns {boolean}
   */
  getPageLayout() {
    return this.pageLayout;
  }

  /**
   * Get Page_Secure.
   * @returns {boolean}
   */
  getPageSecure() {
    return this.pageSecure;
  }

  /**
   * Get Page_Cache.
   * @returns {string}
   */
  getPageCache() {
    return this.pageCache;
  }

  /**
   * Get Changeset_Notes.
   * @returns {string}
   */
  getChangesetNotes() {
    return this.changesetNotes;
  }

  /**
   * Get Page_URI.
   * @returns {string}
   */
  getPageUri() {
    return this.pageUri;
  }

  /**
   * Get CustomField_Values.
   * @returns {?CustomFieldValues}
   */
  getCustomFieldValues() {
    return this.customFieldValues;
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
   * Set Page_Code.
   * @param {string} pageCode
   * @returns {PageInsert}
   */
  setPageCode(pageCode) {
    this.pageCode = pageCode;
    return this;
  }

  /**
   * Set Page_Name.
   * @param {string} pageName
   * @returns {PageInsert}
   */
  setPageName(pageName) {
    this.pageName = pageName;
    return this;
  }

  /**
   * Set Page_Title.
   * @param {string} pageTitle
   * @returns {PageInsert}
   */
  setPageTitle(pageTitle) {
    this.pageTitle = pageTitle;
    return this;
  }

  /**
   * Set Page_Template.
   * @param {string} pageTemplate
   * @returns {PageInsert}
   */
  setPageTemplate(pageTemplate) {
    this.pageTemplate = pageTemplate;
    return this;
  }

  /**
   * Set Page_Layout.
   * @param {boolean} pageLayout
   * @returns {PageInsert}
   */
  setPageLayout(pageLayout) {
    this.pageLayout = pageLayout;
    return this;
  }

  /**
   * Set Page_Secure.
   * @param {boolean} pageSecure
   * @returns {PageInsert}
   */
  setPageSecure(pageSecure) {
    this.pageSecure = pageSecure;
    return this;
  }

  /**
   * Set Page_Cache.
   * @param {string} pageCache
   * @returns {PageInsert}
   */
  setPageCache(pageCache) {
    this.pageCache = pageCache;
    return this;
  }

  /**
   * Set Changeset_Notes.
   * @param {string} changesetNotes
   * @returns {PageInsert}
   */
  setChangesetNotes(changesetNotes) {
    this.changesetNotes = changesetNotes;
    return this;
  }

  /**
   * Set Page_URI.
   * @param {string} pageUri
   * @returns {PageInsert}
   */
  setPageUri(pageUri) {
    this.pageUri = pageUri;
    return this;
  }

  /**
   * Set CustomField_Values.
   * @param {?CustomFieldValues} customFieldValues
   * @throws {Error}
   * @returns {PageInsert}
   */
  setCustomFieldValues(customFieldValues) {
    if (!util.isInstanceOf(customFieldValues, models.CustomFieldValues) && util.isObject(customFieldValues)) {
      customFieldValues = new models.CustomFieldValues(customFieldValues);
    } else if (!util.isInstanceOf(customFieldValues, models.CustomFieldValues)) {
      throw new Error(util.format('Expected instance of CustomFieldValues or an Object but got %s',
        typeof customFieldValues));
    }

    this.customFieldValues = customFieldValues;
    return this;
  }

  /**
   * Set Branch_ID.
   * @param {number} branchId
   * @returns {PageInsert}
   */
  setBranchId(branchId) {
    this.branchId = branchId;
    return this;
  }

  /**
   * Set Edit_Branch.
   * @param {string} editBranch
   * @returns {PageInsert}
   */
  setEditBranch(editBranch) {
    this.editBranch = editBranch;
    return this;
  }

  /**
   * Set Branch_Name.
   * @param {string} branchName
   * @returns {PageInsert}
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

    if (!util.isNullOrUndefined(this.branchId)) {
      data['Branch_ID'] = this.branchId;
    } else if (!util.isNullOrUndefined(this.editBranch)) {
      data['Edit_Branch'] = this.editBranch;
    } else if (!util.isNullOrUndefined(this.branchName)) {
      data['Branch_Name'] = this.branchName;
    }

    data['Page_Code'] = this.pageCode;

    data['Page_Name'] = this.pageName;

    if (!util.isNullOrUndefined(this.pageTitle)) {
      data['Page_Title'] = this.pageTitle;
    }

    if (!util.isNullOrUndefined(this.pageTemplate)) {
      data['Page_Template'] = this.pageTemplate;
    }

    if (!util.isNullOrUndefined(this.pageLayout)) {
      data['Page_Layout'] = this.pageLayout;
    }

    if (!util.isNullOrUndefined(this.pageSecure)) {
      data['Page_Secure'] = this.pageSecure;
    }

    if (!util.isNullOrUndefined(this.pageCache)) {
      data['Page_Cache'] = this.pageCache;
    }

    if (!util.isNullOrUndefined(this.changesetNotes)) {
      data['Changeset_Notes'] = this.changesetNotes;
    }

    if (!util.isNullOrUndefined(this.pageUri)) {
      data['Page_URI'] = this.pageUri;
    }

    if (this.customFieldValues && util.isObject(this.customFieldValues)) {
      data['CustomField_Values'] = this.customFieldValues.toObject();
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.PageInsert(this, httpResponse, data);
  }
}

module.exports.PageInsert = PageInsert;