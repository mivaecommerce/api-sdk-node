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
const { CustomerListLoadQuery } = require('./CustomerListLoadQuery')

/** 
 * Handles API Request BusinessAccountCustomerList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/businessaccountcustomerlist_load_query
 * @class
 */
class BusinessAccountCustomerListLoadQuery extends CustomerListLoadQuery {
  /**
   * BusinessAccountCustomerListLoadQuery Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'BusinessAccountCustomerList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.businessAccountId = null;
    this.editBusinessAccount = null;
    this.businessAccountTitle = null;
    this.assigned = null;
    this.unassigned = null;
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
   * Get Assigned.
   * @returns {boolean}
   */
  getAssigned() {
    return this.assigned;
  }

  /**
   * Get Unassigned.
   * @returns {boolean}
   */
  getUnassigned() {
    return this.unassigned;
  }

  /**
   * Set BusinessAccount_ID.
   * @param {number} businessAccountId
   * @returns {BusinessAccountCustomerListLoadQuery}
   */
  setBusinessAccountId(businessAccountId) {
    this.businessAccountId = businessAccountId;
    return this;
  }

  /**
   * Set Edit_BusinessAccount.
   * @param {number} editBusinessAccount
   * @returns {BusinessAccountCustomerListLoadQuery}
   */
  setEditBusinessAccount(editBusinessAccount) {
    this.editBusinessAccount = editBusinessAccount;
    return this;
  }

  /**
   * Set BusinessAccount_Title.
   * @param {string} businessAccountTitle
   * @returns {BusinessAccountCustomerListLoadQuery}
   */
  setBusinessAccountTitle(businessAccountTitle) {
    this.businessAccountTitle = businessAccountTitle;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {BusinessAccountCustomerListLoadQuery}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Set Unassigned.
   * @param {boolean} unassigned
   * @returns {BusinessAccountCustomerListLoadQuery}
   */
  setUnassigned(unassigned) {
    this.unassigned = unassigned;
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

    if (!util.isNullOrUndefined(this.businessAccountId)) {
      data['BusinessAccount_ID'] = this.businessAccountId;
    }

    if (!util.isNullOrUndefined(this.assigned)) {
      data['Assigned'] = this.assigned;
    }

    if (!util.isNullOrUndefined(this.unassigned)) {
      data['Unassigned'] = this.unassigned;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.BusinessAccountCustomerListLoadQuery(this, httpResponse, data);
  }
}

module.exports.BusinessAccountCustomerListLoadQuery = BusinessAccountCustomerListLoadQuery;