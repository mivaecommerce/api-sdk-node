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
 * Handles API Request BranchList_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/branchlist_delete
 * @class
 */
class BranchListDelete extends Request {
  /**
   * BranchListDelete Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'BranchList_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.branchIds = [];
  }

  /**
   * Get Branch_IDs.
   * @returns {Array}
   */
  getBranchIds() {
    return this.branchIds;
  }

  /**
   * Add Branch_IDs.
   * @param {number} branchId
   * @returns {BranchListDelete}
   */
  addBranchId(branchId) {
    this.branchIds.push(branchId);
    return this;
  }

  /**
   * Add Branch model.
   * @param {Branch} branch
   * @throws {Error}
   * @returns {BranchListDelete}
   */
  addBranch(branch) {
    if (!util.isInstanceOf(branch, models.Branch)) {
      throw new Error(util.format('Expected instance of Branch but got %s',
        typeof branch));
    }

    if (branch.getId()) {
      this.branchIds.push(branch.getId());
    }

    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['Branch_IDs'] = this.branchIds;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.BranchListDelete(this, httpResponse, data);
  }
}

module.exports.BranchListDelete = BranchListDelete;