/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const models = require('./../models');
const { Response }  = require('./../abstract');

/** 
 * API Response for ChangesetList_Merge.
 * @see https://docs.miva.com/json-api/functions/changesetlist_merge
 * @class
 */
class ChangesetListMerge extends Response {
  /**
   * ChangesetListMerge Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);

    if (!this.isSuccess()) {
      return;
    }

    if (this.data.hasOwnProperty('data')){
        this.data['data'] = new models.Changeset(this.data['data']);
    }
  }

  /**
   * Get completed.
   * @returns {boolean}
   */
  getCompleted() {
    if (!util.isNullOrUndefined(this.data['completed'])) {
      return this.data['completed'];
    }

    return false;
  }

  /**
   * Get changesetlist_merge_session_id.
   * @returns {string}
   */
  getChangesetlistMergeSessionId() {
    if (!util.isNullOrUndefined(this.data['changesetlist_merge_session_id'])) {
      return this.data['changesetlist_merge_session_id'];
    }

    return null;
  }

  /**
   * Get changeset.
   * @returns {?Changeset}
   */
  getChangeset() {
    return util.isNullOrUndefined(this.data['data']) ?
      {} : this.data['data'];
  }
}

module.exports.ChangesetListMerge = ChangesetListMerge;