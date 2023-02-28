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
 * Handles API Request BusinessAccountCustomer_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/businessaccountcustomer_update_assigned
 * @class
 */
class BusinessAccountCustomerUpdateAssigned extends Request {
  /**
   * BusinessAccountCustomerUpdateAssigned Constructor.
   * @param {?BaseClient} client
   * @param {?BusinessAccount} businessAccount
   */
  constructor(client, businessAccount = null) {
    super(client);
    this.function = 'BusinessAccountCustomer_Update_Assigned';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.customerId = null;
    this.editCustomer = null;
    this.customerLogin = null;
    this.businessAccountId = null;
    this.editBusinessAccount = null;
    this.businessAccountTitle = null;
    this.assigned = null;

    if (util.isInstanceOf(businessAccount, models.BusinessAccount)) {
      if (businessAccount.getId()) {
        this.setBusinessAccountId(businessAccount.getId());
      }
    }
  }

  /**
   * Get Customer_ID.
   * @returns {number}
   */
  getCustomerId() {
    return this.customerId;
  }

  /**
   * Get Edit_Customer.
   * @returns {string}
   */
  getEditCustomer() {
    return this.editCustomer;
  }

  /**
   * Get Customer_Login.
   * @returns {string}
   */
  getCustomerLogin() {
    return this.customerLogin;
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
   * @returns {string}
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
   * Get Assigned.
   * @returns {boolean}
   */
  getAssigned() {
    return this.assigned;
  }

  /**
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {BusinessAccountCustomerUpdateAssigned}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
    return this;
  }

  /**
   * Set Edit_Customer.
   * @param {string} editCustomer
   * @returns {BusinessAccountCustomerUpdateAssigned}
   */
  setEditCustomer(editCustomer) {
    this.editCustomer = editCustomer;
    return this;
  }

  /**
   * Set Customer_Login.
   * @param {string} customerLogin
   * @returns {BusinessAccountCustomerUpdateAssigned}
   */
  setCustomerLogin(customerLogin) {
    this.customerLogin = customerLogin;
    return this;
  }

  /**
   * Set BusinessAccount_ID.
   * @param {number} businessAccountId
   * @returns {BusinessAccountCustomerUpdateAssigned}
   */
  setBusinessAccountId(businessAccountId) {
    this.businessAccountId = businessAccountId;
    return this;
  }

  /**
   * Set Edit_BusinessAccount.
   * @param {string} editBusinessAccount
   * @returns {BusinessAccountCustomerUpdateAssigned}
   */
  setEditBusinessAccount(editBusinessAccount) {
    this.editBusinessAccount = editBusinessAccount;
    return this;
  }

  /**
   * Set BusinessAccount_Title.
   * @param {string} businessAccountTitle
   * @returns {BusinessAccountCustomerUpdateAssigned}
   */
  setBusinessAccountTitle(businessAccountTitle) {
    this.businessAccountTitle = businessAccountTitle;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {BusinessAccountCustomerUpdateAssigned}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
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

    if (!util.isNullOrUndefined(this.customerId)) {
      data['Customer_ID'] = this.customerId;
    } else if (!util.isNullOrUndefined(this.editCustomer)) {
      data['Edit_Customer'] = this.editCustomer;
    } else if (!util.isNullOrUndefined(this.customerLogin)) {
      data['Customer_Login'] = this.customerLogin;
    }

    data['Customer_Login'] = this.customerLogin;

    data['BusinessAccount_Title'] = this.businessAccountTitle;

    if (!util.isNullOrUndefined(this.assigned)) {
      data['Assigned'] = this.assigned;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.BusinessAccountCustomerUpdateAssigned(this, httpResponse, data);
  }
}

module.exports.BusinessAccountCustomerUpdateAssigned = BusinessAccountCustomerUpdateAssigned;