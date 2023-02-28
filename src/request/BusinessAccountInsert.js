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
 * Handles API Request BusinessAccount_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/businessaccount_insert
 * @class
 */
class BusinessAccountInsert extends Request {
  /**
   * BusinessAccountInsert Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'BusinessAccount_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.businessAccountTitle = null;
    this.businessAccountTaxExempt = null;
  }

  /**
   * Get BusinessAccount_Title.
   * @returns {string}
   */
  getBusinessAccountTitle() {
    return this.businessAccountTitle;
  }

  /**
   * Get BusinessAccount_Tax_Exempt.
   * @returns {boolean}
   */
  getBusinessAccountTaxExempt() {
    return this.businessAccountTaxExempt;
  }

  /**
   * Set BusinessAccount_Title.
   * @param {string} businessAccountTitle
   * @returns {BusinessAccountInsert}
   */
  setBusinessAccountTitle(businessAccountTitle) {
    this.businessAccountTitle = businessAccountTitle;
    return this;
  }

  /**
   * Set BusinessAccount_Tax_Exempt.
   * @param {boolean} businessAccountTaxExempt
   * @returns {BusinessAccountInsert}
   */
  setBusinessAccountTaxExempt(businessAccountTaxExempt) {
    this.businessAccountTaxExempt = businessAccountTaxExempt;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.businessAccountTitle)) {
      data['BusinessAccount_Title'] = this.businessAccountTitle;
    }

    if (!util.isNullOrUndefined(this.businessAccountTaxExempt)) {
      data['BusinessAccount_Tax_Exempt'] = this.businessAccountTaxExempt;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.BusinessAccountInsert(this, httpResponse, data);
  }
}

module.exports.BusinessAccountInsert = BusinessAccountInsert;