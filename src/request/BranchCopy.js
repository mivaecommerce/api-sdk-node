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
 * Handles API Request Branch_Copy. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/branch_copy
 * @class
 */
class BranchCopy extends Request {
  /**
   * BranchCopy Constructor.
   * @param {?BaseClient} client
   * @param {?Branch} branch
   */
  constructor(client, branch = null) {
    super(client);
    this.function = 'Branch_Copy';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.sourceBranchId = null;
    this.destinationBranchId = null;
    this.notes = null;

    if (util.isInstanceOf(branch, models.Branch)) {
      if (branch.getId()) {
        this.setSourceBranchId(branch.getId());
      }
    }
  }

  /**
   * Get Source_Branch_ID.
   * @returns {number}
   */
  getSourceBranchId() {
    return this.sourceBranchId;
  }

  /**
   * Get Destination_Branch_ID.
   * @returns {number}
   */
  getDestinationBranchId() {
    return this.destinationBranchId;
  }

  /**
   * Get Notes.
   * @returns {string}
   */
  getNotes() {
    return this.notes;
  }

  /**
   * Set Source_Branch_ID.
   * @param {number} sourceBranchId
   * @returns {BranchCopy}
   */
  setSourceBranchId(sourceBranchId) {
    this.sourceBranchId = sourceBranchId;
    return this;
  }

  /**
   * Set Destination_Branch_ID.
   * @param {number} destinationBranchId
   * @returns {BranchCopy}
   */
  setDestinationBranchId(destinationBranchId) {
    this.destinationBranchId = destinationBranchId;
    return this;
  }

  /**
   * Set Notes.
   * @param {string} notes
   * @returns {BranchCopy}
   */
  setNotes(notes) {
    this.notes = notes;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.sourceBranchId)) {
      data['Source_Branch_ID'] = this.sourceBranchId;
    }

    if (!util.isNullOrUndefined(this.destinationBranchId)) {
      data['Destination_Branch_ID'] = this.destinationBranchId;
    }

    if (!util.isNullOrUndefined(this.notes)) {
      data['Notes'] = this.notes;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.BranchCopy(this, httpResponse, data);
  }
}

module.exports.BranchCopy = BranchCopy;