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
 * Handles API Request StoreList_Load_Query. Scope: Domain. 
 * @see https://docs.miva.com/json-api/functions/storelist_load_query
 * @class
 */
class StoreListLoadQuery extends ListQueryRequest {
  /**
   * StoreListLoadQuery Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'StoreList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_DOMAIN;

    this.availableSearchFields = [
      'id',
      'code',
      'license',
      'name',
      'owner',
      'email',
      'company',
      'address',
      'city',
      'state',
      'zip',
      'phone',
      'fax',
      'country'
    ];

    this.availableSortFields = [
      'id',
      'code',
      'license',
      'name',
      'owner',
      'email',
      'company',
      'address',
      'city',
      'state',
      'zip',
      'phone',
      'fax',
      'country'
    ];
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.StoreListLoadQuery(this, httpResponse, data);
  }
}

module.exports.StoreListLoadQuery = StoreListLoadQuery;