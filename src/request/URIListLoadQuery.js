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
 * Handles API Request URIList_Load_Query. Scope: Domain. 
 * @see https://docs.miva.com/json-api/functions/urilist_load_query
 * @class
 */
class URIListLoadQuery extends ListQueryRequest {
  /**
   * URIListLoadQuery Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'URIList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_DOMAIN;

    this.availableSearchFields = [
      'id',
      'uri',
      'screen',
      'status',
      'canonical',
      'store_name',
      'page_code',
      'page_name',
      'category_code',
      'category_name',
      'product_code',
      'product_sku',
      'product_name',
      'feed_code',
      'feed_name'
    ];

    this.availableSortFields = [
      'id',
      'uri',
      'screen',
      'status',
      'canonical',
      'store_name',
      'page_code',
      'page_name',
      'category_code',
      'category_name',
      'product_code',
      'product_sku',
      'product_name',
      'feed_code',
      'feed_name'
    ];
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.URIListLoadQuery(this, httpResponse, data);
  }
}

module.exports.URIListLoadQuery = URIListLoadQuery;