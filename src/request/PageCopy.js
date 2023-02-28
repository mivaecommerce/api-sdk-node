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
 * Handles API Request Page_Copy. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/page_copy
 * @class
 */
class PageCopy extends Request {
  /**
   * PageCopy Constructor.
   * @param {?BaseClient} client
   * @param {?Page} page
   */
  constructor(client, page = null) {
    super(client);
    this.function = 'Page_Copy';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.sourcePageId = null;
    this.sourceEditPage = null;
    this.sourcePageCode = null;
    this.copyPageRulesId = null;
    this.copyPageRulesName = null;
    this.destinationPageId = null;
    this.destinationEditPage = null;
    this.destinationPageCode = null;
    this.destinationPageCreate = null;
    this.changesetNotes = null;
    this.destinationPageName = null;
    this.destinationPageLayout = null;

    if (util.isInstanceOf(page, models.Page)) {
      if (page.getId()) {
        this.setSourcePageId(page.getId());
      } else if (page.getCode()) {
        this.setSourceEditPage(page.getCode());
      } else if (page.getCode()) {
        this.setSourcePageCode(page.getCode());
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
   * Get destination_page_id.
   * @returns {number}
   */
  getDestinationPageId() {
    return this.destinationPageId;
  }

  /**
   * Get destination_edit_page.
   * @returns {string}
   */
  getDestinationEditPage() {
    return this.destinationEditPage;
  }

  /**
   * Get destination_page_code.
   * @returns {string}
   */
  getDestinationPageCode() {
    return this.destinationPageCode;
  }

  /**
   * Get destination_page_create.
   * @returns {boolean}
   */
  getDestinationPageCreate() {
    return this.destinationPageCreate;
  }

  /**
   * Get Changeset_Notes.
   * @returns {string}
   */
  getChangesetNotes() {
    return this.changesetNotes;
  }

  /**
   * Get destination_page_name.
   * @returns {string}
   */
  getDestinationPageName() {
    return this.destinationPageName;
  }

  /**
   * Get destination_page_layout.
   * @returns {boolean}
   */
  getDestinationPageLayout() {
    return this.destinationPageLayout;
  }

  /**
   * Set Source_Page_ID.
   * @param {number} sourcePageId
   * @returns {PageCopy}
   */
  setSourcePageId(sourcePageId) {
    this.sourcePageId = sourcePageId;
    return this;
  }

  /**
   * Set Source_Edit_Page.
   * @param {string} sourceEditPage
   * @returns {PageCopy}
   */
  setSourceEditPage(sourceEditPage) {
    this.sourceEditPage = sourceEditPage;
    return this;
  }

  /**
   * Set Source_Page_Code.
   * @param {string} sourcePageCode
   * @returns {PageCopy}
   */
  setSourcePageCode(sourcePageCode) {
    this.sourcePageCode = sourcePageCode;
    return this;
  }

  /**
   * Set CopyPageRules_ID.
   * @param {number} copyPageRulesId
   * @returns {PageCopy}
   */
  setCopyPageRulesId(copyPageRulesId) {
    this.copyPageRulesId = copyPageRulesId;
    return this;
  }

  /**
   * Set CopyPageRules_Name.
   * @param {string} copyPageRulesName
   * @returns {PageCopy}
   */
  setCopyPageRulesName(copyPageRulesName) {
    this.copyPageRulesName = copyPageRulesName;
    return this;
  }

  /**
   * Set destination_page_id.
   * @param {number} destinationPageId
   * @returns {PageCopy}
   */
  setDestinationPageId(destinationPageId) {
    this.destinationPageId = destinationPageId;
    return this;
  }

  /**
   * Set destination_edit_page.
   * @param {string} destinationEditPage
   * @returns {PageCopy}
   */
  setDestinationEditPage(destinationEditPage) {
    this.destinationEditPage = destinationEditPage;
    return this;
  }

  /**
   * Set destination_page_code.
   * @param {string} destinationPageCode
   * @returns {PageCopy}
   */
  setDestinationPageCode(destinationPageCode) {
    this.destinationPageCode = destinationPageCode;
    return this;
  }

  /**
   * Set destination_page_create.
   * @param {boolean} destinationPageCreate
   * @returns {PageCopy}
   */
  setDestinationPageCreate(destinationPageCreate) {
    this.destinationPageCreate = destinationPageCreate;
    return this;
  }

  /**
   * Set destination_page_name.
   * @param {string} destinationPageName
   * @returns {PageCopy}
   */
  setDestinationPageName(destinationPageName) {
    this.destinationPageName = destinationPageName;
    return this;
  }

  /**
   * Set destination_page_layout.
   * @param {boolean} destinationPageLayout
   * @returns {PageCopy}
   */
  setDestinationPageLayout(destinationPageLayout) {
    this.destinationPageLayout = destinationPageLayout;
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

    if (!util.isNullOrUndefined(this.destinationPageId)) {
      data['Dest_Page_ID'] = this.destinationPageId;
    } else if (!util.isNullOrUndefined(this.destinationEditPage)) {
      data['Dest_Edit_Page'] = this.destinationEditPage;
    }

    if (!util.isNullOrUndefined(this.copyPageRulesId)) {
      data['CopyPageRules_ID'] = this.copyPageRulesId;
    } else if (!util.isNullOrUndefined(this.copyPageRulesName)) {
      data['CopyPageRules_Name'] = this.copyPageRulesName;
    }

    data['Dest_Page_Code'] = this.destinationPageCode;

    if (!util.isNullOrUndefined(this.destinationPageCreate)) {
      data['Dest_Page_Create'] = this.destinationPageCreate;
    }

    if (!util.isNullOrUndefined(this.changesetNotes)) {
      data['Changeset_Notes'] = this.changesetNotes;
    }

    data['Dest_Page_Name'] = this.destinationPageName;

    if (!util.isNullOrUndefined(this.destinationPageLayout)) {
      data['Dest_Page_Layout'] = this.destinationPageLayout;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.PageCopy(this, httpResponse, data);
  }
}

module.exports.PageCopy = PageCopy;