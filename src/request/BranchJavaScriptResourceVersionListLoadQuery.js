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
 * Handles API Request BranchJavaScriptResourceVersionList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/branchjavascriptresourceversionlist_load_query
 * @class
 */
class BranchJavaScriptResourceVersionListLoadQuery extends ListQueryRequest {
  /**
   * BranchJavaScriptResourceVersionListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?Branch} branch
   */
  constructor(client, branch = null) {
    super(client);
    this.function = 'BranchJavaScriptResourceVersionList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'res_id',
      'code',
      'type',
      'is_global',
      'active',
      'file',
      'templ_id',
      'user_id',
      'user_name',
      'source_user_id',
      'source_user_name'
    ];

    this.availableSortFields = [
      'id',
      'res_id',
      'code',
      'type',
      'is_global',
      'active',
      'file',
      'templ_id',
      'user_id',
      'user_name',
      'source_user_id',
      'source_user_name'
    ];

    this.availableOnDemandColumns = [
      'source',
      'linkedpages',
      'linkedresources',
      'source_notes'
    ];
    this.branchId = null;
    this.branchName = null;
    this.editBranch = null;
    this.changesetId = null;

    if (util.isInstanceOf(branch, models.Branch)) {
      if (branch.getId()) {
        this.setBranchId(branch.getId());
      }

      this.setBranchName(branch.getName());
    }
  }

  /**
   * Get Branch_ID.
   * @returns {number}
   */
  getBranchId() {
    return this.branchId;
  }

  /**
   * Get Branch_Name.
   * @returns {string}
   */
  getBranchName() {
    return this.branchName;
  }

  /**
   * Get Edit_Branch.
   * @returns {string}
   */
  getEditBranch() {
    return this.editBranch;
  }

  /**
   * Get Changeset_ID.
   * @returns {number}
   */
  getChangesetId() {
    return this.changesetId;
  }

  /**
   * Set Branch_ID.
   * @param {number} branchId
   * @returns {BranchJavaScriptResourceVersionListLoadQuery}
   */
  setBranchId(branchId) {
    this.branchId = branchId;
    return this;
  }

  /**
   * Set Branch_Name.
   * @param {string} branchName
   * @returns {BranchJavaScriptResourceVersionListLoadQuery}
   */
  setBranchName(branchName) {
    this.branchName = branchName;
    return this;
  }

  /**
   * Set Edit_Branch.
   * @param {string} editBranch
   * @returns {BranchJavaScriptResourceVersionListLoadQuery}
   */
  setEditBranch(editBranch) {
    this.editBranch = editBranch;
    return this;
  }

  /**
   * Set Changeset_ID.
   * @param {number} changesetId
   * @returns {BranchJavaScriptResourceVersionListLoadQuery}
   */
  setChangesetId(changesetId) {
    this.changesetId = changesetId;
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
    } else if (!util.isNullOrUndefined(this.branchName)) {
      data['Branch_Name'] = this.branchName;
    } else if (!util.isNullOrUndefined(this.editBranch)) {
      data['Edit_Branch'] = this.editBranch;
    }

    if (!util.isNullOrUndefined(this.branchName)) {
      data['Branch_Name'] = this.branchName;
    }

    if (!util.isNullOrUndefined(this.changesetId)) {
      data['Changeset_ID'] = this.changesetId;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.BranchJavaScriptResourceVersionListLoadQuery(this, httpResponse, data);
  }
}

module.exports.BranchJavaScriptResourceVersionListLoadQuery = BranchJavaScriptResourceVersionListLoadQuery;