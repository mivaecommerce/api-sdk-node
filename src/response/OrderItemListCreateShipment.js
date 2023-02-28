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
 * API Response for OrderItemList_CreateShipment.
 * @see https://docs.miva.com/json-api/functions/orderitemlist_createshipment
 * @class
 */
class OrderItemListCreateShipment extends Response {
  /**
   * OrderItemListCreateShipment Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);

    if (!this.isSuccess()) {
      return;
    }

    this.data['data'] = new models.OrderShipment(this.data['data']);
  }

  /**
   * Get orderShipment.
   * @returns {?OrderShipment}
   */
  getOrderShipment() {
    return util.isNullOrUndefined(this.data['data']) ?
      {} : this.data['data'];
  }
}

module.exports.OrderItemListCreateShipment = OrderItemListCreateShipment;