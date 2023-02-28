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
 * Handles API Request Branch_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/branch_delete
 * @class
 */
class BranchDelete extends Request {
  /**
   * BranchDelete Constructor.
   * @param {?BaseClient} client
   * @param {?Branch} branch
   */
  constructor(client, branch = null) {
    super(client);
    this.function = 'Branch_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.branchId = null;
    this.branchName = null;

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
   * Set Branch_ID.
   * @param {number} branchId
   * @returns {BranchDelete}
   */
  setBranchId(branchId) {
    this.branchId = branchId;
    return this;
  }

  /**
   * Set Branch_Name.
   * @param {string} branchName
   * @returns {BranchDelete}
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
    } else if (!util.isNullOrUndefined(this.branchName)) {
      data['Branch_Name'] = this.branchName;
    }

    if (!util.isNullOrUndefined(this.branchName)) {
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
    return new responses.BranchDelete(this, httpResponse, data);
  }
}

module.exports.BranchDelete = BranchDelete;