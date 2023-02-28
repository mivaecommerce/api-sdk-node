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
 * Handles API Request PrintQueueList_Load_Query. Scope: Domain. 
 * @see https://docs.miva.com/json-api/functions/printqueuelist_load_query
 * @class
 */
class PrintQueueListLoadQuery extends ListQueryRequest {
  /**
   * PrintQueueListLoadQuery Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'PrintQueueList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_DOMAIN;

    this.availableSearchFields = [
      'descrip'
    ];

    this.availableSortFields = [
      'descrip'
    ];
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.PrintQueueListLoadQuery(this, httpResponse, data);
  }
}

module.exports.PrintQueueListLoadQuery = PrintQueueListLoadQuery;