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
 * Handles API Request Branch_Create. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/branch_create
 * @class
 */
class BranchCreate extends Request {
  /**
   * BranchCreate Constructor.
   * @param {?BaseClient} client
   * @param {?Branch} branch
   */
  constructor(client, branch = null) {
    super(client);
    this.function = 'Branch_Create';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.parentBranchId = null;
    this.name = null;
    this.color = null;
    this.changesetId = null;
    this.tags = null;

    if (util.isInstanceOf(branch, models.Branch)) {
      if (branch.getId()) {
        this.setParentBranchId(branch.getId());
      }
    }
  }

  /**
   * Get Parent_Branch_ID.
   * @returns {number}
   */
  getParentBranchId() {
    return this.parentBranchId;
  }

  /**
   * Get Name.
   * @returns {string}
   */
  getName() {
    return this.name;
  }

  /**
   * Get Color.
   * @returns {string}
   */
  getColor() {
    return this.color;
  }

  /**
   * Get Changeset_ID.
   * @returns {number}
   */
  getChangesetId() {
    return this.changesetId;
  }

  /**
   * Get Tags.
   * @returns {string}
   */
  getTags() {
    return this.tags;
  }

  /**
   * Set Parent_Branch_ID.
   * @param {number} parentBranchId
   * @returns {BranchCreate}
   */
  setParentBranchId(parentBranchId) {
    this.parentBranchId = parentBranchId;
    return this;
  }

  /**
   * Set Name.
   * @param {string} name
   * @returns {BranchCreate}
   */
  setName(name) {
    this.name = name;
    return this;
  }

  /**
   * Set Color.
   * @param {string} color
   * @returns {BranchCreate}
   */
  setColor(color) {
    this.color = color;
    return this;
  }

  /**
   * Set Changeset_ID.
   * @param {number} changesetId
   * @returns {BranchCreate}
   */
  setChangesetId(changesetId) {
    this.changesetId = changesetId;
    return this;
  }

  /**
   * Set Tags.
   * @param {string} tags
   * @returns {BranchCreate}
   */
  setTags(tags) {
    this.tags = tags;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.parentBranchId)) {
      data['Parent_Branch_ID'] = this.parentBranchId;
    }

    if (!util.isNullOrUndefined(this.name)) {
      data['Name'] = this.name;
    }

    if (!util.isNullOrUndefined(this.color)) {
      data['Color'] = this.color;
    }

    if (!util.isNullOrUndefined(this.changesetId)) {
      data['Changeset_ID'] = this.changesetId;
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
    return new responses.BranchCreate(this, httpResponse, data);
  }
}

module.exports.BranchCreate = BranchCreate;