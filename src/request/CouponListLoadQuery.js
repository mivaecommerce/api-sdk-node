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
 * Handles API Request CouponList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/couponlist_load_query
 * @class
 */
class CouponListLoadQuery extends ListQueryRequest {
  /**
   * CouponListLoadQuery Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'CouponList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'code',
      'descrip',
      'custscope',
      'dt_start',
      'dt_end',
      'max_use',
      'max_per',
      'active',
      'use_count'
    ];

    this.availableSortFields = [
      'id',
      'code',
      'descrip',
      'custscope',
      'dt_start',
      'dt_end',
      'max_use',
      'max_per',
      'active',
      'use_count'
    ];
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CouponListLoadQuery(this, httpResponse, data);
  }
}

module.exports.CouponListLoadQuery = CouponListLoadQuery;