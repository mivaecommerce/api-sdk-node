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
 * Handles API Request CustomerAddressList_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/customeraddresslist_delete
 * @class
 */
class CustomerAddressListDelete extends Request {
  /**
   * CustomerAddressListDelete Constructor.
   * @param {?BaseClient} client
   * @param {?Customer} customer
   */
  constructor(client, customer = null) {
    super(client);
    this.function = 'CustomerAddressList_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.customerId = null;
    this.customerLogin = null;
    this.editCustomer = null;
    this.customerAddressIds = [];

    if (util.isInstanceOf(customer, models.Customer)) {
      if (customer.getId()) {
        this.setCustomerId(customer.getId());
      } else if (customer.getLogin()) {
        this.setCustomerLogin(customer.getLogin());
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
   * Get CustomerAddress_IDs.
   * @returns {Array}
   */
  getCustomerAddressIds() {
    return this.customerAddressIds;
  }

  /**
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {CustomerAddressListDelete}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
    return this;
  }

  /**
   * Set Customer_Login.
   * @param {string} customerLogin
   * @returns {CustomerAddressListDelete}
   */
  setCustomerLogin(customerLogin) {
    this.customerLogin = customerLogin;
    return this;
  }

  /**
   * Set Edit_Customer.
   * @param {string} editCustomer
   * @returns {CustomerAddressListDelete}
   */
  setEditCustomer(editCustomer) {
    this.editCustomer = editCustomer;
    return this;
  }

  /**
   * Add CustomerAddress_IDs.
   * @param {number} customerAddressId
   * @returns {CustomerAddressListDelete}
   */
  addCustomerAddress_ID(customerAddressId) {
    this.customerAddressIds.push(customerAddressId);
    return this;
  }

  /**
   * Add CustomerAddress model.
   * @param {CustomerAddress} customerAddress
   * @throws {Error}
   * @returns {CustomerAddressListDelete}
   */
  addCustomerAddress(customerAddress) {
    if (!util.isInstanceOf(customerAddress, models.CustomerAddress)) {
      throw new Error(util.format('Expected instance of CustomerAddress but got %s',
        typeof customerAddress));
    }

    if (customerAddress.getId()) {
      this.customerAddressIds.push(customerAddress.getId());
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

    if (!util.isNullOrUndefined(this.customerId)) {
      data['Customer_ID'] = this.customerId;
    } else if (!util.isNullOrUndefined(this.customerLogin)) {
      data['Customer_Login'] = this.customerLogin;
    } else if (!util.isNullOrUndefined(this.editCustomer)) {
      data['Edit_Customer'] = this.editCustomer;
    }

    data['CustomerAddress_IDs'] = this.customerAddressIds;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CustomerAddressListDelete(this, httpResponse, data);
  }
}

module.exports.CustomerAddressListDelete = CustomerAddressListDelete;