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
 * API Response for Order_Create_FromOrder.
 * @see https://docs.miva.com/json-api/functions/order_create_fromorder
 * @class
 */
class OrderCreateFromOrder extends Response {
  /**
   * OrderCreateFromOrder Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);

    if (!this.isSuccess()) {
      return;
    }

    this.data['data'] = new models.Order(this.data['data']);
  }

  /**
   * Get order.
   * @returns {?Order}
   */
  getOrder() {
    return util.isNullOrUndefined(this.data['data']) ?
      {} : this.data['data'];
  }
}

module.exports.OrderCreateFromOrder = OrderCreateFromOrder;