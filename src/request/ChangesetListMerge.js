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
 * Handles API Request ChangesetList_Merge. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/changesetlist_merge
 * @class
 */
class ChangesetListMerge extends Request {
  /**
   * ChangesetListMerge Constructor.
   * @param {?BaseClient} client
   * @param {?Branch} branch
   */
  constructor(client, branch = null) {
    super(client);
    this.function = 'ChangesetList_Merge';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.sourceChangesetIds = [];
    this.destinationBranchId = null;
    this.changesetListMergeSessionId = null;
    this.notes = null;
    this.tags = null;

    if (util.isInstanceOf(branch, models.Branch)) {
      if (branch.getId()) {
        this.setDestinationBranchId(branch.getId());
      }
    }
  }

  /**
   * Get Source_Changeset_IDs.
   * @returns {Array}
   */
  getSourceChangesetIds() {
    return this.sourceChangesetIds;
  }

  /**
   * Get Destination_Branch_ID.
   * @returns {number}
   */
  getDestinationBranchId() {
    return this.destinationBranchId;
  }

  /**
   * Get ChangesetList_Merge_Session_ID.
   * @returns {string}
   */
  getChangesetListMergeSessionId() {
    return this.changesetListMergeSessionId;
  }

  /**
   * Get Notes.
   * @returns {string}
   */
  getNotes() {
    return this.notes;
  }

  /**
   * Get Tags.
   * @returns {string}
   */
  getTags() {
    return this.tags;
  }

  /**
   * Set Destination_Branch_ID.
   * @param {number} destinationBranchId
   * @returns {ChangesetListMerge}
   */
  setDestinationBranchId(destinationBranchId) {
    this.destinationBranchId = destinationBranchId;
    return this;
  }

  /**
   * Set ChangesetList_Merge_Session_ID.
   * @param {string} changesetListMergeSessionId
   * @returns {ChangesetListMerge}
   */
  setChangesetListMergeSessionId(changesetListMergeSessionId) {
    this.changesetListMergeSessionId = changesetListMergeSessionId;
    return this;
  }

  /**
   * Set Notes.
   * @param {string} notes
   * @returns {ChangesetListMerge}
   */
  setNotes(notes) {
    this.notes = notes;
    return this;
  }

  /**
   * Set Tags.
   * @param {string} tags
   * @returns {ChangesetListMerge}
   */
  setTags(tags) {
    this.tags = tags;
    return this;
  }

  /**
   * Add Source_Changeset_IDs.
   * @param {number} sourceChangesetId
   * @returns {ChangesetListMerge}
   */
  addSourceChangesetID(sourceChangesetId) {
    this.sourceChangesetIds.push(sourceChangesetId);
    return this;
  }

  /**
   * Add Changeset model.
   * @param {Changeset} changeset
   * @throws {Error}
   * @returns {ChangesetListMerge}
   */
  addChangeset(changeset) {
    if (!util.isInstanceOf(changeset, models.Changeset)) {
      throw new Error(util.format('Expected instance of Changeset but got %s',
        typeof changeset));
    }

    if (changeset.getId()) {
      this.sourceChangesetIds.push(changeset.getId());
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

    if (!util.isNullOrUndefined(this.destinationBranchId)) {
      data['Destination_Branch_ID'] = this.destinationBranchId;
    }

    data['Source_Changeset_IDs'] = this.sourceChangesetIds;

    if (!util.isNullOrUndefined(this.changesetListMergeSessionId)) {
      data['ChangesetList_Merge_Session_ID'] = this.changesetListMergeSessionId;
    }

    if (!util.isNullOrUndefined(this.notes)) {
      data['Notes'] = this.notes;
    }

    if (!util.isNullOrUndefined(this.tags)) {
      data['Tags'] = this.tags;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ChangesetListMerge(this, httpResponse, data);
  }
}

module.exports.ChangesetListMerge = ChangesetListMerge;