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
 * Handles API Request CustomerCreditHistory_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/customercredithistory_insert
 * @class
 */
class CustomerCreditHistoryInsert extends Request {
  /**
   * CustomerCreditHistoryInsert Constructor.
   * @param {?BaseClient} client
   * @param {?Customer} customer
   */
  constructor(client, customer = null) {
    super(client);
    this.function = 'CustomerCreditHistory_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.customerId = null;
    this.editCustomer = null;
    this.customerLogin = null;
    this.amount = null;
    this.description = null;
    this.transactionReference = null;

    if (util.isInstanceOf(customer, models.Customer)) {
      if (customer.getId()) {
        this.setCustomerId(customer.getId());
      } else if (customer.getLogin()) {
        this.setEditCustomer(customer.getLogin());
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
   * Get Amount.
   * @returns {number}
   */
  getAmount() {
    return this.amount;
  }

  /**
   * Get Description.
   * @returns {string}
   */
  getDescription() {
    return this.description;
  }

  /**
   * Get TransactionReference.
   * @returns {string}
   */
  getTransactionReference() {
    return this.transactionReference;
  }

  /**
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {CustomerCreditHistoryInsert}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
    return this;
  }

  /**
   * Set Edit_Customer.
   * @param {string} editCustomer
   * @returns {CustomerCreditHistoryInsert}
   */
  setEditCustomer(editCustomer) {
    this.editCustomer = editCustomer;
    return this;
  }

  /**
   * Set Customer_Login.
   * @param {string} customerLogin
   * @returns {CustomerCreditHistoryInsert}
   */
  setCustomerLogin(customerLogin) {
    this.customerLogin = customerLogin;
    return this;
  }

  /**
   * Set Amount.
   * @param {number} amount
   * @returns {CustomerCreditHistoryInsert}
   */
  setAmount(amount) {
    this.amount = amount;
    return this;
  }

  /**
   * Set Description.
   * @param {string} description
   * @returns {CustomerCreditHistoryInsert}
   */
  setDescription(description) {
    this.description = description;
    return this;
  }

  /**
   * Set TransactionReference.
   * @param {string} transactionReference
   * @returns {CustomerCreditHistoryInsert}
   */
  setTransactionReference(transactionReference) {
    this.transactionReference = transactionReference;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.customerId)) {
      data['Customer_ID'] = this.customerId;
    } else if (!util.isNullOrUndefined(this.editCustomer)) {
      data['Edit_Customer'] = this.editCustomer;
    } else if (!util.isNullOrUndefined(this.customerLogin)) {
      data['Customer_Login'] = this.customerLogin;
    }

    data['Amount'] = this.amount;

    data['Description'] = this.description;

    if (!util.isNullOrUndefined(this.transactionReference)) {
      data['TransactionReference'] = this.transactionReference;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CustomerCreditHistoryInsert(this, httpResponse, data);
  }
}

module.exports.CustomerCreditHistoryInsert = CustomerCreditHistoryInsert;