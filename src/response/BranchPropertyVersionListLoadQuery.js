/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const models = require('./../models');
const { Response }  = require('./../abstract');
const { ListQueryResponse }  = require('./../listquery');

/** 
 * API Response for BranchPropertyVersionList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/branchpropertyversionlist_load_query
 * @class
 */
class BranchPropertyVersionListLoadQuery extends ListQueryResponse {
  /**
   * BranchPropertyVersionListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.BranchPropertyVersion(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get branchPropertyVersions.
   * @returns {BranchPropertyVersion[]}
   */
  getBranchPropertyVersions() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

module.exports.BranchPropertyVersionListLoadQuery = BranchPropertyVersionListLoadQuery;