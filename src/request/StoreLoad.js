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

/** 
 * Handles API Request Store_Load. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/store_load
 * @class
 */
class StoreLoad extends Request {
  /**
   * StoreLoad Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'Store_Load';
    this.scope = Request.REQUEST_SCOPE_STORE;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.StoreLoad(this, httpResponse, data);
  }
}

module.exports.StoreLoad = StoreLoad;