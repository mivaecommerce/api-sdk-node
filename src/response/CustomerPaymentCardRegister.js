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
 * API Response for CustomerPaymentCard_Register.
 * @see https://docs.miva.com/json-api/functions/customerpaymentcard_register
 * @class
 */
class CustomerPaymentCardRegister extends Response {
  /**
   * CustomerPaymentCardRegister Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);

    if (!this.isSuccess()) {
      return;
    }

    this.data['data'] = new models.CustomerPaymentCard(this.data['data']);
  }

  /**
   * Get customerPaymentCard.
   * @returns {?CustomerPaymentCard}
   */
  getCustomerPaymentCard() {
    return util.isNullOrUndefined(this.data['data']) ?
      {} : this.data['data'];
  }
}

module.exports.CustomerPaymentCardRegister = CustomerPaymentCardRegister;