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
 * Handles API Request BusinessAccount_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/businessaccount_update
 * @class
 */
class BusinessAccountUpdate extends Request {
  /**
   * BusinessAccountUpdate Constructor.
   * @param {?BaseClient} client
   * @param {?BusinessAccount} businessAccount
   */
  constructor(client, businessAccount = null) {
    super(client);
    this.function = 'BusinessAccount_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.businessAccountId = null;
    this.editBusinessAccount = null;
    this.businessAccountTitle = null;
    this.businessAccountTaxExempt = null;

    if (util.isInstanceOf(businessAccount, models.BusinessAccount)) {
      if (businessAccount.getId()) {
        this.setBusinessAccountId(businessAccount.getId());
      }

      this.setBusinessAccountTitle(businessAccount.getTitle());
      this.setBusinessAccountTaxExempt(businessAccount.getTaxExempt());
    }
  }

  /**
   * Get BusinessAccount_ID.
   * @returns {number}
   */
  getBusinessAccountId() {
    return this.businessAccountId;
  }

  /**
   * Get Edit_BusinessAccount.
   * @returns {number}
   */
  getEditBusinessAccount() {
    return this.editBusinessAccount;
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
   * Set BusinessAccount_ID.
   * @param {number} businessAccountId
   * @returns {BusinessAccountUpdate}
   */
  setBusinessAccountId(businessAccountId) {
    this.businessAccountId = businessAccountId;
    return this;
  }

  /**
   * Set Edit_BusinessAccount.
   * @param {number} editBusinessAccount
   * @returns {BusinessAccountUpdate}
   */
  setEditBusinessAccount(editBusinessAccount) {
    this.editBusinessAccount = editBusinessAccount;
    return this;
  }

  /**
   * Set BusinessAccount_Title.
   * @param {string} businessAccountTitle
   * @returns {BusinessAccountUpdate}
   */
  setBusinessAccountTitle(businessAccountTitle) {
    this.businessAccountTitle = businessAccountTitle;
    return this;
  }

  /**
   * Set BusinessAccount_Tax_Exempt.
   * @param {boolean} businessAccountTaxExempt
   * @returns {BusinessAccountUpdate}
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

    if (!util.isNullOrUndefined(this.businessAccountId)) {
      data['BusinessAccount_ID'] = this.businessAccountId;
    } else if (!util.isNullOrUndefined(this.editBusinessAccount)) {
      data['Edit_BusinessAccount'] = this.editBusinessAccount;
    } else if (!util.isNullOrUndefined(this.businessAccountTitle)) {
      data['BusinessAccount_Title'] = this.businessAccountTitle;
    }

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
    return new responses.BusinessAccountUpdate(this, httpResponse, data);
  }
}

module.exports.BusinessAccountUpdate = BusinessAccountUpdate;