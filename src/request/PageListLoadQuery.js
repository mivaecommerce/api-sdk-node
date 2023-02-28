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
 * Handles API Request PageList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/pagelist_load_query
 * @class
 */
class PageListLoadQuery extends ListQueryRequest {
  /**
   * PageListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?Branch} branch
   */
  constructor(client, branch = null) {
    super(client);
    this.function = 'PageList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'code',
      'name',
      'secure',
      'title',
      'cache',
      'admin',
      'layout'
    ];

    this.availableSortFields = [
      'code',
      'name',
      'secure',
      'title',
      'cache',
      'admin',
      'layout'
    ];

    this.availableOnDemandColumns = [
      'notes',
      'source',
      'settings',
      'url',
      'uris'
    ];
    this.branchId = null;
    this.editBranch = null;
    this.branchName = null;

    if (util.isInstanceOf(branch, models.Branch)) {
      if (branch.get()) {
        this.setBranchId(branch.get());
      } else if (branch.get()) {
        this.setEditBranch(branch.get());
      } else if (branch.get()) {
        this.setBranchName(branch.get());
      }
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
   * Set Branch_ID.
   * @param {number} branchId
   * @returns {PageListLoadQuery}
   */
  setBranchId(branchId) {
    this.branchId = branchId;
    return this;
  }

  /**
   * Set Edit_Branch.
   * @param {string} editBranch
   * @returns {PageListLoadQuery}
   */
  setEditBranch(editBranch) {
    this.editBranch = editBranch;
    return this;
  }

  /**
   * Set Branch_Name.
   * @param {string} branchName
   * @returns {PageListLoadQuery}
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

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.PageListLoadQuery(this, httpResponse, data);
  }
}

module.exports.PageListLoadQuery = PageListLoadQuery;