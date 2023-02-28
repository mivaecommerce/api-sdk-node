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
 * Handles API Request Customer_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/customer_insert
 * @class
 */
class CustomerInsert extends Request {
  /**
   * CustomerInsert Constructor.
   * @param {?BaseClient} client
   * @param {?Customer} customer
   */
  constructor(client, customer = null) {
    super(client);
    this.function = 'Customer_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.customerLogin = null;
    this.customerPasswordEmail = null;
    this.customerPassword = null;
    this.customerShipResidential = null;
    this.customerShipFirstName = null;
    this.customerShipLastName = null;
    this.customerShipEmail = null;
    this.customerShipCompany = null;
    this.customerShipPhone = null;
    this.customerShipFax = null;
    this.customerShipAddress1 = null;
    this.customerShipAddress2 = null;
    this.customerShipCity = null;
    this.customerShipState = null;
    this.customerShipZip = null;
    this.customerShipCountry = null;
    this.customerBillFirstName = null;
    this.customerBillLastName = null;
    this.customerBillEmail = null;
    this.customerBillCompany = null;
    this.customerBillPhone = null;
    this.customerBillFax = null;
    this.customerBillAddress1 = null;
    this.customerBillAddress2 = null;
    this.customerBillCity = null;
    this.customerBillState = null;
    this.customerBillZip = null;
    this.customerBillCountry = null;
    this.customerTaxExempt = null;
    this.customerBusinessAccount = null;
    this.customFieldValues = new models.CustomFieldValues();

    if (util.isInstanceOf(customer, models.Customer)) {
      this.setCustomerLogin(customer.getLogin());
      this.setCustomerPasswordEmail(customer.getPasswordEmail());
      this.setCustomerShipResidential(customer.getShippingResidential());
      this.setCustomerShipFirstName(customer.getShipFirstName());
      this.setCustomerShipLastName(customer.getShipLastName());
      this.setCustomerShipEmail(customer.getShipEmail());
      this.setCustomerShipCompany(customer.getShipCompany());
      this.setCustomerShipPhone(customer.getShipPhone());
      this.setCustomerShipFax(customer.getShipFax());
      this.setCustomerShipAddress1(customer.getShipAddress1());
      this.setCustomerShipAddress2(customer.getShipAddress2());
      this.setCustomerShipCity(customer.getShipCity());
      this.setCustomerShipState(customer.getShipState());
      this.setCustomerShipZip(customer.getShipZip());
      this.setCustomerShipCountry(customer.getShipCountry());
      this.setCustomerBillFirstName(customer.getBillFirstName());
      this.setCustomerBillLastName(customer.getBillLastName());
      this.setCustomerBillEmail(customer.getBillEmail());
      this.setCustomerBillCompany(customer.getBillCompany());
      this.setCustomerBillPhone(customer.getBillPhone());
      this.setCustomerBillFax(customer.getBillFax());
      this.setCustomerBillAddress1(customer.getBillAddress1());
      this.setCustomerBillAddress2(customer.getBillAddress2());
      this.setCustomerBillCity(customer.getBillCity());
      this.setCustomerBillState(customer.getBillState());
      this.setCustomerBillZip(customer.getBillZip());
      this.setCustomerBillCountry(customer.getBillCountry());
      this.setCustomerTaxExempt(customer.getTaxExempt());
      this.setCustomerBusinessAccount(customer.getBusinessTitle());

      if (customer.getCustomFieldValues()) {
        this.setCustomFieldValues(customer.getCustomFieldValues());
      }
    }
  }

  /**
   * Get Customer_Login.
   * @returns {string}
   */
  getCustomerLogin() {
    return this.customerLogin;
  }

  /**
   * Get Customer_PasswordEmail.
   * @returns {string}
   */
  getCustomerPasswordEmail() {
    return this.customerPasswordEmail;
  }

  /**
   * Get Customer_Password.
   * @returns {string}
   */
  getCustomerPassword() {
    return this.customerPassword;
  }

  /**
   * Get Customer_ShipResidential.
   * @returns {boolean}
   */
  getCustomerShipResidential() {
    return this.customerShipResidential;
  }

  /**
   * Get Customer_ShipFirstName.
   * @returns {string}
   */
  getCustomerShipFirstName() {
    return this.customerShipFirstName;
  }

  /**
   * Get Customer_ShipLastName.
   * @returns {string}
   */
  getCustomerShipLastName() {
    return this.customerShipLastName;
  }

  /**
   * Get Customer_ShipEmail.
   * @returns {string}
   */
  getCustomerShipEmail() {
    return this.customerShipEmail;
  }

  /**
   * Get Customer_ShipCompany.
   * @returns {string}
   */
  getCustomerShipCompany() {
    return this.customerShipCompany;
  }

  /**
   * Get Customer_ShipPhone.
   * @returns {string}
   */
  getCustomerShipPhone() {
    return this.customerShipPhone;
  }

  /**
   * Get Customer_ShipFax.
   * @returns {string}
   */
  getCustomerShipFax() {
    return this.customerShipFax;
  }

  /**
   * Get Customer_ShipAddress1.
   * @returns {string}
   */
  getCustomerShipAddress1() {
    return this.customerShipAddress1;
  }

  /**
   * Get Customer_ShipAddress2.
   * @returns {string}
   */
  getCustomerShipAddress2() {
    return this.customerShipAddress2;
  }

  /**
   * Get Customer_ShipCity.
   * @returns {string}
   */
  getCustomerShipCity() {
    return this.customerShipCity;
  }

  /**
   * Get Customer_ShipState.
   * @returns {string}
   */
  getCustomerShipState() {
    return this.customerShipState;
  }

  /**
   * Get Customer_ShipZip.
   * @returns {string}
   */
  getCustomerShipZip() {
    return this.customerShipZip;
  }

  /**
   * Get Customer_ShipCountry.
   * @returns {string}
   */
  getCustomerShipCountry() {
    return this.customerShipCountry;
  }

  /**
   * Get Customer_BillFirstName.
   * @returns {string}
   */
  getCustomerBillFirstName() {
    return this.customerBillFirstName;
  }

  /**
   * Get Customer_BillLastName.
   * @returns {string}
   */
  getCustomerBillLastName() {
    return this.customerBillLastName;
  }

  /**
   * Get Customer_BillEmail.
   * @returns {string}
   */
  getCustomerBillEmail() {
    return this.customerBillEmail;
  }

  /**
   * Get Customer_BillCompany.
   * @returns {string}
   */
  getCustomerBillCompany() {
    return this.customerBillCompany;
  }

  /**
   * Get Customer_BillPhone.
   * @returns {string}
   */
  getCustomerBillPhone() {
    return this.customerBillPhone;
  }

  /**
   * Get Customer_BillFax.
   * @returns {string}
   */
  getCustomerBillFax() {
    return this.customerBillFax;
  }

  /**
   * Get Customer_BillAddress1.
   * @returns {string}
   */
  getCustomerBillAddress1() {
    return this.customerBillAddress1;
  }

  /**
   * Get Customer_BillAddress2.
   * @returns {string}
   */
  getCustomerBillAddress2() {
    return this.customerBillAddress2;
  }

  /**
   * Get Customer_BillCity.
   * @returns {string}
   */
  getCustomerBillCity() {
    return this.customerBillCity;
  }

  /**
   * Get Customer_BillState.
   * @returns {string}
   */
  getCustomerBillState() {
    return this.customerBillState;
  }

  /**
   * Get Customer_BillZip.
   * @returns {string}
   */
  getCustomerBillZip() {
    return this.customerBillZip;
  }

  /**
   * Get Customer_BillCountry.
   * @returns {string}
   */
  getCustomerBillCountry() {
    return this.customerBillCountry;
  }

  /**
   * Get Customer_Tax_Exempt.
   * @returns {boolean}
   */
  getCustomerTaxExempt() {
    return this.customerTaxExempt;
  }

  /**
   * Get Customer_BusinessAccount.
   * @returns {string}
   */
  getCustomerBusinessAccount() {
    return this.customerBusinessAccount;
  }

  /**
   * Get CustomField_Values.
   * @returns {?CustomFieldValues}
   */
  getCustomFieldValues() {
    return this.customFieldValues;
  }

  /**
   * Set Customer_Login.
   * @param {string} customerLogin
   * @returns {CustomerInsert}
   */
  setCustomerLogin(customerLogin) {
    this.customerLogin = customerLogin;
    return this;
  }

  /**
   * Set Customer_PasswordEmail.
   * @param {string} customerPasswordEmail
   * @returns {CustomerInsert}
   */
  setCustomerPasswordEmail(customerPasswordEmail) {
    this.customerPasswordEmail = customerPasswordEmail;
    return this;
  }

  /**
   * Set Customer_Password.
   * @param {string} customerPassword
   * @returns {CustomerInsert}
   */
  setCustomerPassword(customerPassword) {
    this.customerPassword = customerPassword;
    return this;
  }

  /**
   * Set Customer_ShipResidential.
   * @param {boolean} customerShipResidential
   * @returns {CustomerInsert}
   */
  setCustomerShipResidential(customerShipResidential) {
    this.customerShipResidential = customerShipResidential;
    return this;
  }

  /**
   * Set Customer_ShipFirstName.
   * @param {string} customerShipFirstName
   * @returns {CustomerInsert}
   */
  setCustomerShipFirstName(customerShipFirstName) {
    this.customerShipFirstName = customerShipFirstName;
    return this;
  }

  /**
   * Set Customer_ShipLastName.
   * @param {string} customerShipLastName
   * @returns {CustomerInsert}
   */
  setCustomerShipLastName(customerShipLastName) {
    this.customerShipLastName = customerShipLastName;
    return this;
  }

  /**
   * Set Customer_ShipEmail.
   * @param {string} customerShipEmail
   * @returns {CustomerInsert}
   */
  setCustomerShipEmail(customerShipEmail) {
    this.customerShipEmail = customerShipEmail;
    return this;
  }

  /**
   * Set Customer_ShipCompany.
   * @param {string} customerShipCompany
   * @returns {CustomerInsert}
   */
  setCustomerShipCompany(customerShipCompany) {
    this.customerShipCompany = customerShipCompany;
    return this;
  }

  /**
   * Set Customer_ShipPhone.
   * @param {string} customerShipPhone
   * @returns {CustomerInsert}
   */
  setCustomerShipPhone(customerShipPhone) {
    this.customerShipPhone = customerShipPhone;
    return this;
  }

  /**
   * Set Customer_ShipFax.
   * @param {string} customerShipFax
   * @returns {CustomerInsert}
   */
  setCustomerShipFax(customerShipFax) {
    this.customerShipFax = customerShipFax;
    return this;
  }

  /**
   * Set Customer_ShipAddress1.
   * @param {string} customerShipAddress1
   * @returns {CustomerInsert}
   */
  setCustomerShipAddress1(customerShipAddress1) {
    this.customerShipAddress1 = customerShipAddress1;
    return this;
  }

  /**
   * Set Customer_ShipAddress2.
   * @param {string} customerShipAddress2
   * @returns {CustomerInsert}
   */
  setCustomerShipAddress2(customerShipAddress2) {
    this.customerShipAddress2 = customerShipAddress2;
    return this;
  }

  /**
   * Set Customer_ShipCity.
   * @param {string} customerShipCity
   * @returns {CustomerInsert}
   */
  setCustomerShipCity(customerShipCity) {
    this.customerShipCity = customerShipCity;
    return this;
  }

  /**
   * Set Customer_ShipState.
   * @param {string} customerShipState
   * @returns {CustomerInsert}
   */
  setCustomerShipState(customerShipState) {
    this.customerShipState = customerShipState;
    return this;
  }

  /**
   * Set Customer_ShipZip.
   * @param {string} customerShipZip
   * @returns {CustomerInsert}
   */
  setCustomerShipZip(customerShipZip) {
    this.customerShipZip = customerShipZip;
    return this;
  }

  /**
   * Set Customer_ShipCountry.
   * @param {string} customerShipCountry
   * @returns {CustomerInsert}
   */
  setCustomerShipCountry(customerShipCountry) {
    this.customerShipCountry = customerShipCountry;
    return this;
  }

  /**
   * Set Customer_BillFirstName.
   * @param {string} customerBillFirstName
   * @returns {CustomerInsert}
   */
  setCustomerBillFirstName(customerBillFirstName) {
    this.customerBillFirstName = customerBillFirstName;
    return this;
  }

  /**
   * Set Customer_BillLastName.
   * @param {string} customerBillLastName
   * @returns {CustomerInsert}
   */
  setCustomerBillLastName(customerBillLastName) {
    this.customerBillLastName = customerBillLastName;
    return this;
  }

  /**
   * Set Customer_BillEmail.
   * @param {string} customerBillEmail
   * @returns {CustomerInsert}
   */
  setCustomerBillEmail(customerBillEmail) {
    this.customerBillEmail = customerBillEmail;
    return this;
  }

  /**
   * Set Customer_BillCompany.
   * @param {string} customerBillCompany
   * @returns {CustomerInsert}
   */
  setCustomerBillCompany(customerBillCompany) {
    this.customerBillCompany = customerBillCompany;
    return this;
  }

  /**
   * Set Customer_BillPhone.
   * @param {string} customerBillPhone
   * @returns {CustomerInsert}
   */
  setCustomerBillPhone(customerBillPhone) {
    this.customerBillPhone = customerBillPhone;
    return this;
  }

  /**
   * Set Customer_BillFax.
   * @param {string} customerBillFax
   * @returns {CustomerInsert}
   */
  setCustomerBillFax(customerBillFax) {
    this.customerBillFax = customerBillFax;
    return this;
  }

  /**
   * Set Customer_BillAddress1.
   * @param {string} customerBillAddress1
   * @returns {CustomerInsert}
   */
  setCustomerBillAddress1(customerBillAddress1) {
    this.customerBillAddress1 = customerBillAddress1;
    return this;
  }

  /**
   * Set Customer_BillAddress2.
   * @param {string} customerBillAddress2
   * @returns {CustomerInsert}
   */
  setCustomerBillAddress2(customerBillAddress2) {
    this.customerBillAddress2 = customerBillAddress2;
    return this;
  }

  /**
   * Set Customer_BillCity.
   * @param {string} customerBillCity
   * @returns {CustomerInsert}
   */
  setCustomerBillCity(customerBillCity) {
    this.customerBillCity = customerBillCity;
    return this;
  }

  /**
   * Set Customer_BillState.
   * @param {string} customerBillState
   * @returns {CustomerInsert}
   */
  setCustomerBillState(customerBillState) {
    this.customerBillState = customerBillState;
    return this;
  }

  /**
   * Set Customer_BillZip.
   * @param {string} customerBillZip
   * @returns {CustomerInsert}
   */
  setCustomerBillZip(customerBillZip) {
    this.customerBillZip = customerBillZip;
    return this;
  }

  /**
   * Set Customer_BillCountry.
   * @param {string} customerBillCountry
   * @returns {CustomerInsert}
   */
  setCustomerBillCountry(customerBillCountry) {
    this.customerBillCountry = customerBillCountry;
    return this;
  }

  /**
   * Set Customer_Tax_Exempt.
   * @param {boolean} customerTaxExempt
   * @returns {CustomerInsert}
   */
  setCustomerTaxExempt(customerTaxExempt) {
    this.customerTaxExempt = customerTaxExempt;
    return this;
  }

  /**
   * Set Customer_BusinessAccount.
   * @param {string} customerBusinessAccount
   * @returns {CustomerInsert}
   */
  setCustomerBusinessAccount(customerBusinessAccount) {
    this.customerBusinessAccount = customerBusinessAccount;
    return this;
  }

  /**
   * Set CustomField_Values.
   * @param {?CustomFieldValues} customFieldValues
   * @throws {Error}
   * @returns {CustomerInsert}
   */
  setCustomFieldValues(customFieldValues) {
    if (!util.isInstanceOf(customFieldValues, models.CustomFieldValues) && util.isObject(customFieldValues)) {
      customFieldValues = new models.CustomFieldValues(customFieldValues);
    } else if (!util.isInstanceOf(customFieldValues, models.CustomFieldValues)) {
      throw new Error(util.format('Expected instance of CustomFieldValues or an Object but got %s',
        typeof customFieldValues));
    }

    this.customFieldValues = customFieldValues;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['Customer_Login'] = this.customerLogin;

    data['Customer_PasswordEmail'] = this.customerPasswordEmail;

    data['Customer_Password'] = this.customerPassword;

    if (!util.isNullOrUndefined(this.customerShipResidential)) {
      data['Customer_ShipResidential'] = this.customerShipResidential;
    }

    if (!util.isNullOrUndefined(this.customerShipFirstName)) {
      data['Customer_ShipFirstName'] = this.customerShipFirstName;
    }

    if (!util.isNullOrUndefined(this.customerShipLastName)) {
      data['Customer_ShipLastName'] = this.customerShipLastName;
    }

    if (!util.isNullOrUndefined(this.customerShipEmail)) {
      data['Customer_ShipEmail'] = this.customerShipEmail;
    }

    if (!util.isNullOrUndefined(this.customerShipCompany)) {
      data['Customer_ShipCompany'] = this.customerShipCompany;
    }

    if (!util.isNullOrUndefined(this.customerShipPhone)) {
      data['Customer_ShipPhone'] = this.customerShipPhone;
    }

    if (!util.isNullOrUndefined(this.customerShipFax)) {
      data['Customer_ShipFax'] = this.customerShipFax;
    }

    if (!util.isNullOrUndefined(this.customerShipAddress1)) {
      data['Customer_ShipAddress1'] = this.customerShipAddress1;
    }

    if (!util.isNullOrUndefined(this.customerShipAddress2)) {
      data['Customer_ShipAddress2'] = this.customerShipAddress2;
    }

    if (!util.isNullOrUndefined(this.customerShipCity)) {
      data['Customer_ShipCity'] = this.customerShipCity;
    }

    if (!util.isNullOrUndefined(this.customerShipState)) {
      data['Customer_ShipState'] = this.customerShipState;
    }

    if (!util.isNullOrUndefined(this.customerShipZip)) {
      data['Customer_ShipZip'] = this.customerShipZip;
    }

    if (!util.isNullOrUndefined(this.customerShipCountry)) {
      data['Customer_ShipCountry'] = this.customerShipCountry;
    }

    if (!util.isNullOrUndefined(this.customerBillFirstName)) {
      data['Customer_BillFirstName'] = this.customerBillFirstName;
    }

    if (!util.isNullOrUndefined(this.customerBillLastName)) {
      data['Customer_BillLastName'] = this.customerBillLastName;
    }

    if (!util.isNullOrUndefined(this.customerBillEmail)) {
      data['Customer_BillEmail'] = this.customerBillEmail;
    }

    if (!util.isNullOrUndefined(this.customerBillCompany)) {
      data['Customer_BillCompany'] = this.customerBillCompany;
    }

    if (!util.isNullOrUndefined(this.customerBillPhone)) {
      data['Customer_BillPhone'] = this.customerBillPhone;
    }

    if (!util.isNullOrUndefined(this.customerBillFax)) {
      data['Customer_BillFax'] = this.customerBillFax;
    }

    if (!util.isNullOrUndefined(this.customerBillAddress1)) {
      data['Customer_BillAddress1'] = this.customerBillAddress1;
    }

    if (!util.isNullOrUndefined(this.customerBillAddress2)) {
      data['Customer_BillAddress2'] = this.customerBillAddress2;
    }

    if (!util.isNullOrUndefined(this.customerBillCity)) {
      data['Customer_BillCity'] = this.customerBillCity;
    }

    if (!util.isNullOrUndefined(this.customerBillState)) {
      data['Customer_BillState'] = this.customerBillState;
    }

    if (!util.isNullOrUndefined(this.customerBillZip)) {
      data['Customer_BillZip'] = this.customerBillZip;
    }

    if (!util.isNullOrUndefined(this.customerBillCountry)) {
      data['Customer_BillCountry'] = this.customerBillCountry;
    }

    if (!util.isNullOrUndefined(this.customerTaxExempt)) {
      data['Customer_Tax_Exempt'] = this.customerTaxExempt;
    }

    if (!util.isNullOrUndefined(this.customerBusinessAccount)) {
      data['Customer_BusinessAccount'] = this.customerBusinessAccount;
    }

    if (this.customFieldValues && util.isObject(this.customFieldValues)) {
      data['CustomField_Values'] = this.customFieldValues.toObject();
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CustomerInsert(this, httpResponse, data);
  }
}

module.exports.CustomerInsert = CustomerInsert;