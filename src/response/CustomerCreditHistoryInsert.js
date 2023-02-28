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
 * API Response for CustomerCreditHistory_Insert.
 * @see https://docs.miva.com/json-api/functions/customercredithistory_insert
 * @class
 */
class CustomerCreditHistoryInsert extends Response {
  /**
   * CustomerCreditHistoryInsert Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);

    if (!this.isSuccess()) {
      return;
    }

    this.data['data'] = new models.CustomerCreditHistory(this.data['data']);
  }

  /**
   * Get customerCreditHistory.
   * @returns {?CustomerCreditHistory}
   */
  getCustomerCreditHistory() {
    return util.isNullOrUndefined(this.data['data']) ?
      {} : this.data['data'];
  }
}

module.exports.CustomerCreditHistoryInsert = CustomerCreditHistoryInsert;