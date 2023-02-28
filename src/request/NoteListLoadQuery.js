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
 * Handles API Request NoteList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/notelist_load_query
 * @class
 */
class NoteListLoadQuery extends ListQueryRequest {
  /**
   * NoteListLoadQuery Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'NoteList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'notetext',
      'dtstamp',
      'cust_id',
      'account_id',
      'order_id',
      'admin_user',
      'cust_login',
      'business_title'
    ];

    this.availableSortFields = [
      'id',
      'notetext',
      'dtstamp',
      'cust_id',
      'account_id',
      'order_id',
      'admin_user',
      'cust_login',
      'business_title'
    ];
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.NoteListLoadQuery(this, httpResponse, data);
  }
}

module.exports.NoteListLoadQuery = NoteListLoadQuery;