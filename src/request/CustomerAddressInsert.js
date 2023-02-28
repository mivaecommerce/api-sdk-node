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
 * Handles API Request CustomerAddress_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/customeraddress_insert
 * @class
 */
class CustomerAddressInsert extends Request {
  /**
   * CustomerAddressInsert Constructor.
   * @param {?BaseClient} client
   * @param {?Customer} customer
   */
  constructor(client, customer = null) {
    super(client);
    this.function = 'CustomerAddress_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.customerId = null;
    this.customerLogin = null;
    this.description = null;
    this.firstName = null;
    this.lastName = null;
    this.email = null;
    this.phone = null;
    this.fax = null;
    this.company = null;
    this.address1 = null;
    this.address2 = null;
    this.city = null;
    this.state = null;
    this.zip = null;
    this.country = null;
    this.residential = null;

    if (util.isInstanceOf(customer, models.Customer)) {
      if (customer.getId()) {
        this.setCustomerId(customer.getId());
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
   * Get Description.
   * @returns {string}
   */
  getDescription() {
    return this.description;
  }

  /**
   * Get FirstName.
   * @returns {string}
   */
  getFirstName() {
    return this.firstName;
  }

  /**
   * Get LastName.
   * @returns {string}
   */
  getLastName() {
    return this.lastName;
  }

  /**
   * Get Email.
   * @returns {string}
   */
  getEmail() {
    return this.email;
  }

  /**
   * Get Phone.
   * @returns {string}
   */
  getPhone() {
    return this.phone;
  }

  /**
   * Get Fax.
   * @returns {string}
   */
  getFax() {
    return this.fax;
  }

  /**
   * Get Company.
   * @returns {string}
   */
  getCompany() {
    return this.company;
  }

  /**
   * Get Address1.
   * @returns {string}
   */
  getAddress1() {
    return this.address1;
  }

  /**
   * Get Address2.
   * @returns {string}
   */
  getAddress2() {
    return this.address2;
  }

  /**
   * Get City.
   * @returns {string}
   */
  getCity() {
    return this.city;
  }

  /**
   * Get State.
   * @returns {string}
   */
  getState() {
    return this.state;
  }

  /**
   * Get Zip.
   * @returns {string}
   */
  getZip() {
    return this.zip;
  }

  /**
   * Get Country.
   * @returns {string}
   */
  getCountry() {
    return this.country;
  }

  /**
   * Get Residential.
   * @returns {boolean}
   */
  getResidential() {
    return this.residential;
  }

  /**
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {CustomerAddressInsert}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
    return this;
  }

  /**
   * Set Customer_Login.
   * @param {string} customerLogin
   * @returns {CustomerAddressInsert}
   */
  setCustomerLogin(customerLogin) {
    this.customerLogin = customerLogin;
    return this;
  }

  /**
   * Set Description.
   * @param {string} description
   * @returns {CustomerAddressInsert}
   */
  setDescription(description) {
    this.description = description;
    return this;
  }

  /**
   * Set FirstName.
   * @param {string} firstName
   * @returns {CustomerAddressInsert}
   */
  setFirstName(firstName) {
    this.firstName = firstName;
    return this;
  }

  /**
   * Set LastName.
   * @param {string} lastName
   * @returns {CustomerAddressInsert}
   */
  setLastName(lastName) {
    this.lastName = lastName;
    return this;
  }

  /**
   * Set Email.
   * @param {string} email
   * @returns {CustomerAddressInsert}
   */
  setEmail(email) {
    this.email = email;
    return this;
  }

  /**
   * Set Phone.
   * @param {string} phone
   * @returns {CustomerAddressInsert}
   */
  setPhone(phone) {
    this.phone = phone;
    return this;
  }

  /**
   * Set Fax.
   * @param {string} fax
   * @returns {CustomerAddressInsert}
   */
  setFax(fax) {
    this.fax = fax;
    return this;
  }

  /**
   * Set Company.
   * @param {string} company
   * @returns {CustomerAddressInsert}
   */
  setCompany(company) {
    this.company = company;
    return this;
  }

  /**
   * Set Address1.
   * @param {string} address1
   * @returns {CustomerAddressInsert}
   */
  setAddress1(address1) {
    this.address1 = address1;
    return this;
  }

  /**
   * Set Address2.
   * @param {string} address2
   * @returns {CustomerAddressInsert}
   */
  setAddress2(address2) {
    this.address2 = address2;
    return this;
  }

  /**
   * Set City.
   * @param {string} city
   * @returns {CustomerAddressInsert}
   */
  setCity(city) {
    this.city = city;
    return this;
  }

  /**
   * Set State.
   * @param {string} state
   * @returns {CustomerAddressInsert}
   */
  setState(state) {
    this.state = state;
    return this;
  }

  /**
   * Set Zip.
   * @param {string} zip
   * @returns {CustomerAddressInsert}
   */
  setZip(zip) {
    this.zip = zip;
    return this;
  }

  /**
   * Set Country.
   * @param {string} country
   * @returns {CustomerAddressInsert}
   */
  setCountry(country) {
    this.country = country;
    return this;
  }

  /**
   * Set Residential.
   * @param {boolean} residential
   * @returns {CustomerAddressInsert}
   */
  setResidential(residential) {
    this.residential = residential;
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
    }

    if (!util.isNullOrUndefined(this.description)) {
      data['Description'] = this.description;
    }

    if (!util.isNullOrUndefined(this.firstName)) {
      data['FirstName'] = this.firstName;
    }

    if (!util.isNullOrUndefined(this.lastName)) {
      data['LastName'] = this.lastName;
    }

    if (!util.isNullOrUndefined(this.email)) {
      data['Email'] = this.email;
    }

    if (!util.isNullOrUndefined(this.phone)) {
      data['Phone'] = this.phone;
    }

    if (!util.isNullOrUndefined(this.fax)) {
      data['Fax'] = this.fax;
    }

    if (!util.isNullOrUndefined(this.company)) {
      data['Company'] = this.company;
    }

    if (!util.isNullOrUndefined(this.address1)) {
      data['Address1'] = this.address1;
    }

    if (!util.isNullOrUndefined(this.address2)) {
      data['Address2'] = this.address2;
    }

    if (!util.isNullOrUndefined(this.city)) {
      data['City'] = this.city;
    }

    if (!util.isNullOrUndefined(this.state)) {
      data['State'] = this.state;
    }

    if (!util.isNullOrUndefined(this.zip)) {
      data['Zip'] = this.zip;
    }

    if (!util.isNullOrUndefined(this.country)) {
      data['Country'] = this.country;
    }

    if (!util.isNullOrUndefined(this.residential)) {
      data['Residential'] = this.residential;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CustomerAddressInsert(this, httpResponse, data);
  }
}

module.exports.CustomerAddressInsert = CustomerAddressInsert;