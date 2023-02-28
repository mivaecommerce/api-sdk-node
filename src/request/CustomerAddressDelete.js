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
 * Handles API Request CustomerAddress_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/customeraddress_delete
 * @class
 */
class CustomerAddressDelete extends Request {
  /**
   * CustomerAddressDelete Constructor.
   * @param {?BaseClient} client
   * @param {?CustomerAddress} customerAddress
   */
  constructor(client, customerAddress = null) {
    super(client);
    this.function = 'CustomerAddress_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.addressId = null;
    this.customerAddressId = null;
    this.customerId = null;
    this.customerLogin = null;
    this.editCustomer = null;

    if (util.isInstanceOf(customerAddress, models.CustomerAddress)) {
      if (customerAddress.getCustomerId()) {
        this.setCustomerId(customerAddress.getCustomerId());
      }

      if (customerAddress.getId()) {
        this.setAddressId(customerAddress.getId());
      }
    }
  }

  /**
   * Get Address_ID.
   * @returns {number}
   */
  getAddressId() {
    return this.addressId;
  }

  /**
   * Get CustomerAddress_ID.
   * @returns {number}
   */
  getCustomerAddressId() {
    return this.customerAddressId;
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
   * Set Address_ID.
   * @param {number} addressId
   * @returns {CustomerAddressDelete}
   */
  setAddressId(addressId) {
    this.addressId = addressId;
    return this;
  }

  /**
   * Set CustomerAddress_ID.
   * @param {number} customerAddressId
   * @returns {CustomerAddressDelete}
   */
  setCustomerAddressId(customerAddressId) {
    this.customerAddressId = customerAddressId;
    return this;
  }

  /**
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {CustomerAddressDelete}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
    return this;
  }

  /**
   * Set Customer_Login.
   * @param {string} customerLogin
   * @returns {CustomerAddressDelete}
   */
  setCustomerLogin(customerLogin) {
    this.customerLogin = customerLogin;
    return this;
  }

  /**
   * Set Edit_Customer.
   * @param {string} editCustomer
   * @returns {CustomerAddressDelete}
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

    if (!util.isNullOrUndefined(this.addressId)) {
      data['Address_ID'] = this.addressId;
    } else if (!util.isNullOrUndefined(this.customerAddressId)) {
      data['CustomerAddress_ID'] = this.customerAddressId;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CustomerAddressDelete(this, httpResponse, data);
  }
}

module.exports.CustomerAddressDelete = CustomerAddressDelete;