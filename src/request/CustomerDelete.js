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
 * Handles API Request Customer_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/customer_delete
 * @class
 */
class CustomerDelete extends Request {
  /**
   * CustomerDelete Constructor.
   * @param {?BaseClient} client
   * @param {?Customer} customer
   */
  constructor(client, customer = null) {
    super(client);
    this.function = 'Customer_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.customerId = null;
    this.customerLogin = null;
    this.editCustomer = null;

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
   * Get Customer_Login.
   * @returns {string}
   */
  getCustomerLogin() {
    return this.customerLogin;
  }

  /**
   * Get Edit_Customer.
   * @returns {string}
   */
  getEditCustomer() {
    return this.editCustomer;
  }

  /**
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {CustomerDelete}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
    return this;
  }

  /**
   * Set Customer_Login.
   * @param {string} customerLogin
   * @returns {CustomerDelete}
   */
  setCustomerLogin(customerLogin) {
    this.customerLogin = customerLogin;
    return this;
  }

  /**
   * Set Edit_Customer.
   * @param {string} editCustomer
   * @returns {CustomerDelete}
   */
  setEditCustomer(editCustomer) {
    this.editCustomer = editCustomer;
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
    } else if (!util.isNullOrUndefined(this.customerLogin)) {
      data['Customer_Login'] = this.customerLogin;
    } else if (!util.isNullOrUndefined(this.editCustomer)) {
      data['Edit_Customer'] = this.editCustomer;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CustomerDelete(this, httpResponse, data);
  }
}

module.exports.CustomerDelete = CustomerDelete;