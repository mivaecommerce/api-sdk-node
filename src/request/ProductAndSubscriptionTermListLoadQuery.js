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
const { ProductListLoadQuery } = require('./ProductListLoadQuery')

/** 
 * Handles API Request ProductAndSubscriptionTermList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/productandsubscriptiontermlist_load_query
 * @class
 */
class ProductAndSubscriptionTermListLoadQuery extends ProductListLoadQuery {
  /**
   * ProductAndSubscriptionTermListLoadQuery Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'ProductAndSubscriptionTermList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ProductAndSubscriptionTermListLoadQuery(this, httpResponse, data);
  }
}

module.exports.ProductAndSubscriptionTermListLoadQuery = ProductAndSubscriptionTermListLoadQuery;