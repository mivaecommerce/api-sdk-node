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
 * Handles API Request BusinessAccountList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/businessaccountlist_load_query
 * @class
 */
class BusinessAccountListLoadQuery extends ListQueryRequest {
  /**
   * BusinessAccountListLoadQuery Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'BusinessAccountList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'title',
      'note_count',
      'tax_exempt',
      'order_cnt',
      'order_avg',
      'order_tot'
    ];

    this.availableSortFields = [
      'title',
      'note_count',
      'tax_exempt',
      'order_cnt',
      'order_avg',
      'order_tot'
    ];
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.BusinessAccountListLoadQuery(this, httpResponse, data);
  }
}

module.exports.BusinessAccountListLoadQuery = BusinessAccountListLoadQuery;