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
 * Handles API Request CustomerPaymentCard_Register. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/customerpaymentcard_register
 * @class
 */
class CustomerPaymentCardRegister extends Request {
  /**
   * CustomerPaymentCardRegister Constructor.
   * @param {?BaseClient} client
   * @param {?Customer} customer
   */
  constructor(client, customer = null) {
    super(client);
    this.function = 'CustomerPaymentCard_Register';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.customerId = null;
    this.editCustomer = null;
    this.customerLogin = null;
    this.firstName = null;
    this.lastName = null;
    this.cardType = null;
    this.cardNumber = null;
    this.expirationMonth = null;
    this.expirationYear = null;
    this.address1 = null;
    this.address2 = null;
    this.city = null;
    this.state = null;
    this.zip = null;
    this.country = null;

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
   * Get CardType.
   * @returns {string}
   */
  getCardType() {
    return this.cardType;
  }

  /**
   * Get CardNumber.
   * @returns {string}
   */
  getCardNumber() {
    return this.cardNumber;
  }

  /**
   * Get ExpirationMonth.
   * @returns {number}
   */
  getExpirationMonth() {
    return this.expirationMonth;
  }

  /**
   * Get ExpirationYear.
   * @returns {number}
   */
  getExpirationYear() {
    return this.expirationYear;
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
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {CustomerPaymentCardRegister}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
    return this;
  }

  /**
   * Set Edit_Customer.
   * @param {string} editCustomer
   * @returns {CustomerPaymentCardRegister}
   */
  setEditCustomer(editCustomer) {
    this.editCustomer = editCustomer;
    return this;
  }

  /**
   * Set Customer_Login.
   * @param {string} customerLogin
   * @returns {CustomerPaymentCardRegister}
   */
  setCustomerLogin(customerLogin) {
    this.customerLogin = customerLogin;
    return this;
  }

  /**
   * Set FirstName.
   * @param {string} firstName
   * @returns {CustomerPaymentCardRegister}
   */
  setFirstName(firstName) {
    this.firstName = firstName;
    return this;
  }

  /**
   * Set LastName.
   * @param {string} lastName
   * @returns {CustomerPaymentCardRegister}
   */
  setLastName(lastName) {
    this.lastName = lastName;
    return this;
  }

  /**
   * Set CardType.
   * @param {string} cardType
   * @returns {CustomerPaymentCardRegister}
   */
  setCardType(cardType) {
    this.cardType = cardType;
    return this;
  }

  /**
   * Set CardNumber.
   * @param {string} cardNumber
   * @returns {CustomerPaymentCardRegister}
   */
  setCardNumber(cardNumber) {
    this.cardNumber = cardNumber;
    return this;
  }

  /**
   * Set ExpirationMonth.
   * @param {number} expirationMonth
   * @returns {CustomerPaymentCardRegister}
   */
  setExpirationMonth(expirationMonth) {
    this.expirationMonth = expirationMonth;
    return this;
  }

  /**
   * Set ExpirationYear.
   * @param {number} expirationYear
   * @returns {CustomerPaymentCardRegister}
   */
  setExpirationYear(expirationYear) {
    this.expirationYear = expirationYear;
    return this;
  }

  /**
   * Set Address1.
   * @param {string} address1
   * @returns {CustomerPaymentCardRegister}
   */
  setAddress1(address1) {
    this.address1 = address1;
    return this;
  }

  /**
   * Set Address2.
   * @param {string} address2
   * @returns {CustomerPaymentCardRegister}
   */
  setAddress2(address2) {
    this.address2 = address2;
    return this;
  }

  /**
   * Set City.
   * @param {string} city
   * @returns {CustomerPaymentCardRegister}
   */
  setCity(city) {
    this.city = city;
    return this;
  }

  /**
   * Set State.
   * @param {string} state
   * @returns {CustomerPaymentCardRegister}
   */
  setState(state) {
    this.state = state;
    return this;
  }

  /**
   * Set Zip.
   * @param {string} zip
   * @returns {CustomerPaymentCardRegister}
   */
  setZip(zip) {
    this.zip = zip;
    return this;
  }

  /**
   * Set Country.
   * @param {string} country
   * @returns {CustomerPaymentCardRegister}
   */
  setCountry(country) {
    this.country = country;
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

    if (!util.isNullOrUndefined(this.firstName)) {
      data['FirstName'] = this.firstName;
    }

    if (!util.isNullOrUndefined(this.lastName)) {
      data['LastName'] = this.lastName;
    }

    if (!util.isNullOrUndefined(this.cardType)) {
      data['CardType'] = this.cardType;
    }

    if (!util.isNullOrUndefined(this.cardNumber)) {
      data['CardNumber'] = this.cardNumber;
    }

    if (!util.isNullOrUndefined(this.expirationMonth)) {
      data['ExpirationMonth'] = this.expirationMonth;
    }

    if (!util.isNullOrUndefined(this.expirationYear)) {
      data['ExpirationYear'] = this.expirationYear;
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

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CustomerPaymentCardRegister(this, httpResponse, data);
  }
}

module.exports.CustomerPaymentCardRegister = CustomerPaymentCardRegister;