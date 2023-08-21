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
 * Handles API Request CSSResourceList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/cssresourcelist_load_query
 * @class
 */
class CSSResourceListLoadQuery extends ListQueryRequest {
  /**
   * CSSResourceListLoadQuery Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'CSSResourceList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'code',
      'type',
      'is_global',
      'active',
      'file',
      'mod_code',
      'mod_data'
    ];

    this.availableSortFields = [
      'id',
      'code',
      'type',
      'is_global',
      'active',
      'file',
      'mod_code',
      'mod_data'
    ];
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CSSResourceListLoadQuery(this, httpResponse, data);
  }
}

module.exports.CSSResourceListLoadQuery = CSSResourceListLoadQuery;