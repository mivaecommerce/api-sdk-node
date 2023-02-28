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
 * API Response for BusinessAccount_Insert.
 * @see https://docs.miva.com/json-api/functions/businessaccount_insert
 * @class
 */
class BusinessAccountInsert extends Response {
  /**
   * BusinessAccountInsert Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);

    if (!this.isSuccess()) {
      return;
    }

    this.data['data'] = new models.BusinessAccount(this.data['data']);
  }

  /**
   * Get businessAccount.
   * @returns {?BusinessAccount}
   */
  getBusinessAccount() {
    return util.isNullOrUndefined(this.data['data']) ?
      {} : this.data['data'];
  }
}

module.exports.BusinessAccountInsert = BusinessAccountInsert;