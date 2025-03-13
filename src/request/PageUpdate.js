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
 * Handles API Request Page_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/page_update
 * @class
 */
class PageUpdate extends Request {
  /**
   * PageUpdate Constructor.
   * @param {?BaseClient} client
   * @param {?Page} page
   */
  constructor(client, page = null) {
    super(client);
    this.function = 'Page_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.pageId = null;
    this.editPage = null;
    this.pageCode = null;
    this.pageName = null;
    this.pageTitle = null;
    this.pageSecure = null;
    this.pagePublic = null;
    this.pageCache = null;
    this.changesetNotes = null;
    this.pageUri = null;
    this.customFieldValues = new models.CustomFieldValues();
    this.branchId = null;
    this.editBranch = null;
    this.branchName = null;

    if (util.isInstanceOf(page, models.Page)) {
      if (page.getId()) {
        this.setPageId(page.getId());
      } else if (page.getCode()) {
        this.setEditPage(page.getCode());
      }

      this.setPageCode(page.getCode());

      if (page.getCustomFieldValues()) {
        this.setCustomFieldValues(page.getCustomFieldValues());
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
   * Get Page_Secure.
   * @returns {boolean}
   */
  getPageSecure() {
    return this.pageSecure;
  }

  /**
   * Get Page_Public.
   * @returns {boolean}
   */
  getPagePublic() {
    return this.pagePublic;
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
   * Set Page_ID.
   * @param {number} pageId
   * @returns {PageUpdate}
   */
  setPageId(pageId) {
    this.pageId = pageId;
    return this;
  }

  /**
   * Set Edit_Page.
   * @param {string} editPage
   * @returns {PageUpdate}
   */
  setEditPage(editPage) {
    this.editPage = editPage;
    return this;
  }

  /**
   * Set Page_Code.
   * @param {string} pageCode
   * @returns {PageUpdate}
   */
  setPageCode(pageCode) {
    this.pageCode = pageCode;
    return this;
  }

  /**
   * Set Page_Name.
   * @param {string} pageName
   * @returns {PageUpdate}
   */
  setPageName(pageName) {
    this.pageName = pageName;
    return this;
  }

  /**
   * Set Page_Title.
   * @param {string} pageTitle
   * @returns {PageUpdate}
   */
  setPageTitle(pageTitle) {
    this.pageTitle = pageTitle;
    return this;
  }

  /**
   * Set Page_Secure.
   * @param {boolean} pageSecure
   * @returns {PageUpdate}
   */
  setPageSecure(pageSecure) {
    this.pageSecure = pageSecure;
    return this;
  }

  /**
   * Set Page_Public.
   * @param {boolean} pagePublic
   * @returns {PageUpdate}
   */
  setPagePublic(pagePublic) {
    this.pagePublic = pagePublic;
    return this;
  }

  /**
   * Set Page_Cache.
   * @param {string} pageCache
   * @returns {PageUpdate}
   */
  setPageCache(pageCache) {
    this.pageCache = pageCache;
    return this;
  }

  /**
   * Set Changeset_Notes.
   * @param {string} changesetNotes
   * @returns {PageUpdate}
   */
  setChangesetNotes(changesetNotes) {
    this.changesetNotes = changesetNotes;
    return this;
  }

  /**
   * Set Page_URI.
   * @param {string} pageUri
   * @returns {PageUpdate}
   */
  setPageUri(pageUri) {
    this.pageUri = pageUri;
    return this;
  }

  /**
   * Set CustomField_Values.
   * @param {?CustomFieldValues} customFieldValues
   * @throws {Error}
   * @returns {PageUpdate}
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
   * @returns {PageUpdate}
   */
  setBranchId(branchId) {
    this.branchId = branchId;
    return this;
  }

  /**
   * Set Edit_Branch.
   * @param {string} editBranch
   * @returns {PageUpdate}
   */
  setEditBranch(editBranch) {
    this.editBranch = editBranch;
    return this;
  }

  /**
   * Set Branch_Name.
   * @param {string} branchName
   * @returns {PageUpdate}
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

    if (!util.isNullOrUndefined(this.pageCode)) {
      data['Page_Code'] = this.pageCode;
    }

    data['Page_Name'] = this.pageName;

    if (!util.isNullOrUndefined(this.pageTitle)) {
      data['Page_Title'] = this.pageTitle;
    }

    if (!util.isNullOrUndefined(this.pageSecure)) {
      data['Page_Secure'] = this.pageSecure;
    }

    if (!util.isNullOrUndefined(this.pagePublic)) {
      data['Page_Public'] = this.pagePublic;
    }

    data['Page_Cache'] = this.pageCache;

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
    return new responses.PageUpdate(this, httpResponse, data);
  }
}

module.exports.PageUpdate = PageUpdate;