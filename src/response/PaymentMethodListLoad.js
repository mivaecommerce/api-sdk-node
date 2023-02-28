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
 * API Response for PaymentMethodList_Load.
 * @see https://docs.miva.com/json-api/functions/paymentmethodlist_load
 * @class
 */
class PaymentMethodListLoad extends Response {
  /**
   * PaymentMethodListLoad Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (util.isArray(this.data['data'])) {
      for (i = 0, l = this.data['data'].length; i < l; i++) {
        this.data['data'][i] = new models.PaymentMethod(this.data['data'][i]);
      }
    }
  }

  /**
   * Get paymentMethods.
   * @returns {PaymentMethod[]}
   */
  getPaymentMethods() {
    return util.isNullOrUndefined(this.data['data']) ?
      [] : this.data['data'];
  }
}

module.exports.PaymentMethodListLoad = PaymentMethodListLoad;