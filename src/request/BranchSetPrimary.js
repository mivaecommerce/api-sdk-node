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
 * Handles API Request Branch_SetPrimary. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/branch_setprimary
 * @class
 */
class BranchSetPrimary extends Request {
  /**
   * BranchSetPrimary Constructor.
   * @param {?BaseClient} client
   * @param {?Branch} branch
   */
  constructor(client, branch = null) {
    super(client);
    this.function = 'Branch_SetPrimary';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.branchId = null;
    this.editBranch = null;
    this.branchName = null;

    if (util.isInstanceOf(branch, models.Branch)) {
      if (branch.getId()) {
        this.setBranchId(branch.getId());
      } else if (branch.getName()) {
        this.setEditBranch(branch.getName());
      } else if (branch.getName()) {
        this.setBranchName(branch.getName());
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
   * @returns {BranchSetPrimary}
   */
  setBranchId(branchId) {
    this.branchId = branchId;
    return this;
  }

  /**
   * Set Edit_Branch.
   * @param {string} editBranch
   * @returns {BranchSetPrimary}
   */
  setEditBranch(editBranch) {
    this.editBranch = editBranch;
    return this;
  }

  /**
   * Set Branch_Name.
   * @param {string} branchName
   * @returns {BranchSetPrimary}
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
    return new responses.BranchSetPrimary(this, httpResponse, data);
  }
}

module.exports.BranchSetPrimary = BranchSetPrimary;