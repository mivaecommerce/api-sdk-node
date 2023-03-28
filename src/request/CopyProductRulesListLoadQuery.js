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
 * Handles API Request CopyProductRulesList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/copyproductruleslist_load_query
 * @class
 */
class CopyProductRulesListLoadQuery extends ListQueryRequest {
  /**
   * CopyProductRulesListLoadQuery Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'CopyProductRulesList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'name'
    ];

    this.availableSortFields = [
      'name'
    ];
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CopyProductRulesListLoadQuery(this, httpResponse, data);
  }
}

module.exports.CopyProductRulesListLoadQuery = CopyProductRulesListLoadQuery;