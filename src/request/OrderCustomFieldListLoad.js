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
 * Handles API Request OrderCustomFieldList_Load. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/ordercustomfieldlist_load
 * @class
 */
class OrderCustomFieldListLoad extends Request {
  /**
   * OrderCustomFieldListLoad Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'OrderCustomFieldList_Load';
    this.scope = Request.REQUEST_SCOPE_STORE;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.OrderCustomFieldListLoad(this, httpResponse, data);
  }
}

module.exports.OrderCustomFieldListLoad = OrderCustomFieldListLoad;