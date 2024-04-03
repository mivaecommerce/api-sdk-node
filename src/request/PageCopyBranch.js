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
 * Handles API Request Page_Copy_Branch. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/page_copy_branch
 * @class
 */
class PageCopyBranch extends Request {
  /**
   * PageCopyBranch Constructor.
   * @param {?BaseClient} client
   * @param {?Page} page
   */
  constructor(client, page = null) {
    super(client);
    this.function = 'Page_Copy_Branch';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.sourcePageId = null;
    this.sourceEditPage = null;
    this.sourcePageCode = null;
    this.destinationBranchId = null;
    this.destinationEditBranch = null;
    this.destinationBranchName = null;
    this.copyPageRulesId = null;
    this.copyPageRulesName = null;
    this.changesetNotes = null;

    if (util.isInstanceOf(page, models.Page)) {
      if (page.getId()) {
        this.setSourcePageId(page.getId());
      } else if (page.getCode()) {
        this.setSourceEditPage(page.getCode());
      }
    }
  }

  /**
   * Get Source_Page_ID.
   * @returns {number}
   */
  getSourcePageId() {
    return this.sourcePageId;
  }

  /**
   * Get Source_Edit_Page.
   * @returns {string}
   */
  getSourceEditPage() {
    return this.sourceEditPage;
  }

  /**
   * Get Source_Page_Code.
   * @returns {string}
   */
  getSourcePageCode() {
    return this.sourcePageCode;
  }

  /**
   * Get destination_branch_id.
   * @returns {number}
   */
  getDestinationBranchId() {
    return this.destinationBranchId;
  }

  /**
   * Get destination_edit_branch.
   * @returns {string}
   */
  getDestinationEditBranch() {
    return this.destinationEditBranch;
  }

  /**
   * Get destination_branch_name.
   * @returns {string}
   */
  getDestinationBranchName() {
    return this.destinationBranchName;
  }

  /**
   * Get CopyPageRules_ID.
   * @returns {number}
   */
  getCopyPageRulesId() {
    return this.copyPageRulesId;
  }

  /**
   * Get CopyPageRules_Name.
   * @returns {string}
   */
  getCopyPageRulesName() {
    return this.copyPageRulesName;
  }

  /**
   * Get Changeset_Notes.
   * @returns {string}
   */
  getChangesetNotes() {
    return this.changesetNotes;
  }

  /**
   * Set Source_Page_ID.
   * @param {number} sourcePageId
   * @returns {PageCopyBranch}
   */
  setSourcePageId(sourcePageId) {
    this.sourcePageId = sourcePageId;
    return this;
  }

  /**
   * Set Source_Edit_Page.
   * @param {string} sourceEditPage
   * @returns {PageCopyBranch}
   */
  setSourceEditPage(sourceEditPage) {
    this.sourceEditPage = sourceEditPage;
    return this;
  }

  /**
   * Set Source_Page_Code.
   * @param {string} sourcePageCode
   * @returns {PageCopyBranch}
   */
  setSourcePageCode(sourcePageCode) {
    this.sourcePageCode = sourcePageCode;
    return this;
  }

  /**
   * Set destination_branch_id.
   * @param {number} destinationBranchId
   * @returns {PageCopyBranch}
   */
  setDestinationBranchId(destinationBranchId) {
    this.destinationBranchId = destinationBranchId;
    return this;
  }

  /**
   * Set destination_edit_branch.
   * @param {string} destinationEditBranch
   * @returns {PageCopyBranch}
   */
  setDestinationEditBranch(destinationEditBranch) {
    this.destinationEditBranch = destinationEditBranch;
    return this;
  }

  /**
   * Set destination_branch_name.
   * @param {string} destinationBranchName
   * @returns {PageCopyBranch}
   */
  setDestinationBranchName(destinationBranchName) {
    this.destinationBranchName = destinationBranchName;
    return this;
  }

  /**
   * Set CopyPageRules_ID.
   * @param {number} copyPageRulesId
   * @returns {PageCopyBranch}
   */
  setCopyPageRulesId(copyPageRulesId) {
    this.copyPageRulesId = copyPageRulesId;
    return this;
  }

  /**
   * Set CopyPageRules_Name.
   * @param {string} copyPageRulesName
   * @returns {PageCopyBranch}
   */
  setCopyPageRulesName(copyPageRulesName) {
    this.copyPageRulesName = copyPageRulesName;
    return this;
  }

  /**
   * Set Changeset_Notes.
   * @param {string} changesetNotes
   * @returns {PageCopyBranch}
   */
  setChangesetNotes(changesetNotes) {
    this.changesetNotes = changesetNotes;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.sourcePageId)) {
      data['Source_Page_ID'] = this.sourcePageId;
    } else if (!util.isNullOrUndefined(this.sourceEditPage)) {
      data['Source_Edit_Page'] = this.sourceEditPage;
    } else if (!util.isNullOrUndefined(this.sourcePageCode)) {
      data['Source_Page_Code'] = this.sourcePageCode;
    }

    if (!util.isNullOrUndefined(this.destinationBranchId)) {
      data['Dest_Branch_ID'] = this.destinationBranchId;
    } else if (!util.isNullOrUndefined(this.destinationEditBranch)) {
      data['Dest_Edit_Branch'] = this.destinationEditBranch;
    } else if (!util.isNullOrUndefined(this.destinationBranchName)) {
      data['Dest_Branch_Name'] = this.destinationBranchName;
    }

    if (!util.isNullOrUndefined(this.copyPageRulesId)) {
      data['CopyPageRules_ID'] = this.copyPageRulesId;
    } else if (!util.isNullOrUndefined(this.copyPageRulesName)) {
      data['CopyPageRules_Name'] = this.copyPageRulesName;
    }

    if (!util.isNullOrUndefined(this.changesetNotes)) {
      data['Changeset_Notes'] = this.changesetNotes;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.PageCopyBranch(this, httpResponse, data);
  }
}

module.exports.PageCopyBranch = PageCopyBranch;