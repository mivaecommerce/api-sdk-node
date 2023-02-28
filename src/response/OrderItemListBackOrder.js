/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const models = require('./../models');
const { Response }  = require('./../abstract');

/** 
 * API Response for OrderItemList_BackOrder.
 * @see https://docs.miva.com/json-api/functions/orderitemlist_backorder
 * @class
 */
class OrderItemListBackOrder extends Response {
  /**
   * OrderItemListBackOrder Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

module.exports.OrderItemListBackOrder = OrderItemListBackOrder;