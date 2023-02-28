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
 * API Response for OrderItem_Update.
 * @see https://docs.miva.com/json-api/functions/orderitem_update
 * @class
 */
class OrderItemUpdate extends Response {
  /**
   * OrderItemUpdate Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);

    if (!this.isSuccess()) {
      return;
    }

    this.data['data'] = new models.OrderTotal(this.data['data']);
  }

  /**
   * Get orderTotal.
   * @returns {?OrderTotal}
   */
  getOrderTotal() {
    return util.isNullOrUndefined(this.data['data']) ?
      {} : this.data['data'];
  }
}

module.exports.OrderItemUpdate = OrderItemUpdate;