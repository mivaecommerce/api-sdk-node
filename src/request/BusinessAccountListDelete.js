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
 * Handles API Request BusinessAccountList_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/businessaccountlist_delete
 * @class
 */
class BusinessAccountListDelete extends Request {
  /**
   * BusinessAccountListDelete Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'BusinessAccountList_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.businessAccountIds = [];
  }

  /**
   * Get BusinessAccount_IDs.
   * @returns {Array}
   */
  getBusinessAccountIds() {
    return this.businessAccountIds;
  }

  /**
   * Add BusinessAccount_IDs.
   * @param {number} businessAccountId
   * @returns {BusinessAccountListDelete}
   */
  addBusinessAccountId(businessAccountId) {
    this.businessAccountIds.push(businessAccountId);
    return this;
  }

  /**
   * Add BusinessAccount model.
   * @param {BusinessAccount} businessAccount
   * @throws {Error}
   * @returns {BusinessAccountListDelete}
   */
  addBusinessAccount(businessAccount) {
    if (!util.isInstanceOf(businessAccount, models.BusinessAccount)) {
      throw new Error(util.format('Expected instance of BusinessAccount but got %s',
        typeof businessAccount));
    }

    if (businessAccount.getId()) {
      this.businessAccountIds.push(businessAccount.getId());
    }

    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['BusinessAccount_IDs'] = this.businessAccountIds;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.BusinessAccountListDelete(this, httpResponse, data);
  }
}

module.exports.BusinessAccountListDelete = BusinessAccountListDelete;