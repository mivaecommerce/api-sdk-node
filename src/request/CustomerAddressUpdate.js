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
 * Handles API Request CustomerAddress_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/customeraddress_update
 * @class
 */
class CustomerAddressUpdate extends Request {
  /**
   * CustomerAddressUpdate Constructor.
   * @param {?BaseClient} client
   * @param {?CustomerAddress} customerAddress
   */
  constructor(client, customerAddress = null) {
    super(client);
    this.function = 'CustomerAddress_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.addressId = null;
    this.customerAddressId = null;
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

    if (util.isInstanceOf(customerAddress, models.CustomerAddress)) {
      if (customerAddress.getCustomerId()) {
        this.setCustomerId(customerAddress.getCustomerId());
      }

      if (customerAddress.getId()) {
        this.setAddressId(customerAddress.getId());
      }

      this.setDescription(customerAddress.getDescription());
      this.setFirstName(customerAddress.getFirstName());
      this.setLastName(customerAddress.getLastName());
      this.setEmail(customerAddress.getEmail());
      this.setPhone(customerAddress.getPhone());
      this.setFax(customerAddress.getFax());
      this.setCompany(customerAddress.getCompany());
      this.setAddress1(customerAddress.getAddress1());
      this.setAddress2(customerAddress.getAddress2());
      this.setCity(customerAddress.getCity());
      this.setState(customerAddress.getState());
      this.setZip(customerAddress.getZip());
      this.setCountry(customerAddress.getCountry());
      this.setResidential(customerAddress.getResidential());
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
   * Set Address_ID.
   * @param {number} addressId
   * @returns {CustomerAddressUpdate}
   */
  setAddressId(addressId) {
    this.addressId = addressId;
    return this;
  }

  /**
   * Set CustomerAddress_ID.
   * @param {number} customerAddressId
   * @returns {CustomerAddressUpdate}
   */
  setCustomerAddressId(customerAddressId) {
    this.customerAddressId = customerAddressId;
    return this;
  }

  /**
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {CustomerAddressUpdate}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
    return this;
  }

  /**
   * Set Customer_Login.
   * @param {string} customerLogin
   * @returns {CustomerAddressUpdate}
   */
  setCustomerLogin(customerLogin) {
    this.customerLogin = customerLogin;
    return this;
  }

  /**
   * Set Description.
   * @param {string} description
   * @returns {CustomerAddressUpdate}
   */
  setDescription(description) {
    this.description = description;
    return this;
  }

  /**
   * Set FirstName.
   * @param {string} firstName
   * @returns {CustomerAddressUpdate}
   */
  setFirstName(firstName) {
    this.firstName = firstName;
    return this;
  }

  /**
   * Set LastName.
   * @param {string} lastName
   * @returns {CustomerAddressUpdate}
   */
  setLastName(lastName) {
    this.lastName = lastName;
    return this;
  }

  /**
   * Set Email.
   * @param {string} email
   * @returns {CustomerAddressUpdate}
   */
  setEmail(email) {
    this.email = email;
    return this;
  }

  /**
   * Set Phone.
   * @param {string} phone
   * @returns {CustomerAddressUpdate}
   */
  setPhone(phone) {
    this.phone = phone;
    return this;
  }

  /**
   * Set Fax.
   * @param {string} fax
   * @returns {CustomerAddressUpdate}
   */
  setFax(fax) {
    this.fax = fax;
    return this;
  }

  /**
   * Set Company.
   * @param {string} company
   * @returns {CustomerAddressUpdate}
   */
  setCompany(company) {
    this.company = company;
    return this;
  }

  /**
   * Set Address1.
   * @param {string} address1
   * @returns {CustomerAddressUpdate}
   */
  setAddress1(address1) {
    this.address1 = address1;
    return this;
  }

  /**
   * Set Address2.
   * @param {string} address2
   * @returns {CustomerAddressUpdate}
   */
  setAddress2(address2) {
    this.address2 = address2;
    return this;
  }

  /**
   * Set City.
   * @param {string} city
   * @returns {CustomerAddressUpdate}
   */
  setCity(city) {
    this.city = city;
    return this;
  }

  /**
   * Set State.
   * @param {string} state
   * @returns {CustomerAddressUpdate}
   */
  setState(state) {
    this.state = state;
    return this;
  }

  /**
   * Set Zip.
   * @param {string} zip
   * @returns {CustomerAddressUpdate}
   */
  setZip(zip) {
    this.zip = zip;
    return this;
  }

  /**
   * Set Country.
   * @param {string} country
   * @returns {CustomerAddressUpdate}
   */
  setCountry(country) {
    this.country = country;
    return this;
  }

  /**
   * Set Residential.
   * @param {boolean} residential
   * @returns {CustomerAddressUpdate}
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
    }

    if (!util.isNullOrUndefined(this.addressId)) {
      data['Address_ID'] = this.addressId;
    } else if (!util.isNullOrUndefined(this.customerAddressId)) {
      data['CustomerAddress_ID'] = this.customerAddressId;
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
    return new responses.CustomerAddressUpdate(this, httpResponse, data);
  }
}

module.exports.CustomerAddressUpdate = CustomerAddressUpdate;