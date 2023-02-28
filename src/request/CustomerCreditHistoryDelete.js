/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const models = require('./../models');
const responses = require('./../responses');
const { Request }  = require('./../abstract');

/** 
 * Handles API Request CustomerCreditHistory_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/customercredithistory_delete
 * @class
 */
class CustomerCreditHistoryDelete extends Request {
  /**
   * CustomerCreditHistoryDelete Constructor.
   * @param {?BaseClient} client
   * @param {?CustomerCreditHistory} customerCreditHistory
   */
  constructor(client, customerCreditHistory = null) {
    super(client);
    this.function = 'CustomerCreditHistory_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.customerCreditHistoryId = null;

    if (util.isInstanceOf(customerCreditHistory, models.CustomerCreditHistory)) {
      this.setCustomerCreditHistoryId(customerCreditHistory.getId());
    }
  }

  /**
   * Get CustomerCreditHistory_ID.
   * @returns {number}
   */
  getCustomerCreditHistoryId() {
    return this.customerCreditHistoryId;
  }

  /**
   * Set CustomerCreditHistory_ID.
   * @param {number} customerCreditHistoryId
   * @returns {CustomerCreditHistoryDelete}
   */
  setCustomerCreditHistoryId(customerCreditHistoryId) {
    this.customerCreditHistoryId = customerCreditHistoryId;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['CustomerCreditHistory_ID'] = this.customerCreditHistoryId;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CustomerCreditHistoryDelete(this, httpResponse, data);
  }
}

module.exports.CustomerCreditHistoryDelete = CustomerCreditHistoryDelete;