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
 * Handles API Request CopyPageRulesList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/copypageruleslist_load_query
 * @class
 */
class CopyPageRulesListLoadQuery extends ListQueryRequest {
  /**
   * CopyPageRulesListLoadQuery Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'CopyPageRulesList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'name',
      'secure',
      'title',
      'template',
      'items',
      'settings',
      'jsres',
      'cssres',
      'cacheset'
    ];

    this.availableSortFields = [
      'id',
      'name',
      'secure',
      'title',
      'template',
      'items',
      'settings',
      'jsres',
      'cssres',
      'cacheset'
    ];
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CopyPageRulesListLoadQuery(this, httpResponse, data);
  }
}

module.exports.CopyPageRulesListLoadQuery = CopyPageRulesListLoadQuery;