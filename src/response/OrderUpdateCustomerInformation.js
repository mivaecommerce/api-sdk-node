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
 * API Response for Order_Update_Customer_Information.
 * @see https://docs.miva.com/json-api/functions/order_update_customer_information
 * @class
 */
class OrderUpdateCustomerInformation extends Response {
  /**
   * OrderUpdateCustomerInformation Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

module.exports.OrderUpdateCustomerInformation = OrderUpdateCustomerInformation;