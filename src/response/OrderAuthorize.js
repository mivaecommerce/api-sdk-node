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
 * API Response for Order_Authorize.
 * @see https://docs.miva.com/json-api/functions/order_authorize
 * @class
 */
class OrderAuthorize extends Response {
  /**
   * OrderAuthorize Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);

    if (!this.isSuccess()) {
      return;
    }

    this.data['data'] = new models.OrderPaymentAuthorize(this.data['data']);
  }

  /**
   * Get orderPaymentAuthorize.
   * @returns {?OrderPaymentAuthorize}
   */
  getOrderPaymentAuthorize() {
    return util.isNullOrUndefined(this.data['data']) ?
      {} : this.data['data'];
  }
}

module.exports.OrderAuthorize = OrderAuthorize;