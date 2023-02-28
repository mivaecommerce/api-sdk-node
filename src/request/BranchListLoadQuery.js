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
 * Handles API Request BranchList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/branchlist_load_query
 * @class
 */
class BranchListLoadQuery extends ListQueryRequest {
  /**
   * BranchListLoadQuery Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'BranchList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'immutable',
      'branchkey',
      'name',
      'framework'
    ];

    this.availableSortFields = [
      'id',
      'immutable',
      'branchkey',
      'name',
      'framework'
    ];
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.BranchListLoadQuery(this, httpResponse, data);
  }
}

module.exports.BranchListLoadQuery = BranchListLoadQuery;