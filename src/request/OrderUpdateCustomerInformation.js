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
 * Handles API Request Order_Update_Customer_Information. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/order_update_customer_information
 * @class
 */
class OrderUpdateCustomerInformation extends Request {
  /**
   * OrderUpdateCustomerInformation Constructor.
   * @param {?BaseClient} client
   * @param {?Order} order
   */
  constructor(client, order = null) {
    super(client);
    this.function = 'Order_Update_Customer_Information';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.orderId = null;
    this.customerId = null;
    this.shipResidential = null;
    this.shipFirstName = null;
    this.shipLastName = null;
    this.shipEmail = null;
    this.shipPhone = null;
    this.shipFax = null;
    this.shipCompany = null;
    this.shipAddress1 = null;
    this.shipAddress2 = null;
    this.shipCity = null;
    this.shipState = null;
    this.shipZip = null;
    this.shipCountry = null;
    this.billFirstName = null;
    this.billLastName = null;
    this.billEmail = null;
    this.billPhone = null;
    this.billFax = null;
    this.billCompany = null;
    this.billAddress1 = null;
    this.billAddress2 = null;
    this.billCity = null;
    this.billState = null;
    this.billZip = null;
    this.billCountry = null;

    if (util.isInstanceOf(order, models.Order)) {
      this.setOrderId(order.getId());
    }
  }

  /**
   * Get Order_ID.
   * @returns {number}
   */
  getOrderId() {
    return this.orderId;
  }

  /**
   * Get Customer_ID.
   * @returns {number}
   */
  getCustomerId() {
    return this.customerId;
  }

  /**
   * Get Ship_Residential.
   * @returns {boolean}
   */
  getShipResidential() {
    return this.shipResidential;
  }

  /**
   * Get Ship_FirstName.
   * @returns {string}
   */
  getShipFirstName() {
    return this.shipFirstName;
  }

  /**
   * Get Ship_LastName.
   * @returns {string}
   */
  getShipLastName() {
    return this.shipLastName;
  }

  /**
   * Get Ship_Email.
   * @returns {string}
   */
  getShipEmail() {
    return this.shipEmail;
  }

  /**
   * Get Ship_Phone.
   * @returns {string}
   */
  getShipPhone() {
    return this.shipPhone;
  }

  /**
   * Get Ship_Fax.
   * @returns {string}
   */
  getShipFax() {
    return this.shipFax;
  }

  /**
   * Get Ship_Company.
   * @returns {string}
   */
  getShipCompany() {
    return this.shipCompany;
  }

  /**
   * Get Ship_Address1.
   * @returns {string}
   */
  getShipAddress1() {
    return this.shipAddress1;
  }

  /**
   * Get Ship_Address2.
   * @returns {string}
   */
  getShipAddress2() {
    return this.shipAddress2;
  }

  /**
   * Get Ship_City.
   * @returns {string}
   */
  getShipCity() {
    return this.shipCity;
  }

  /**
   * Get Ship_State.
   * @returns {string}
   */
  getShipState() {
    return this.shipState;
  }

  /**
   * Get Ship_Zip.
   * @returns {string}
   */
  getShipZip() {
    return this.shipZip;
  }

  /**
   * Get Ship_Country.
   * @returns {string}
   */
  getShipCountry() {
    return this.shipCountry;
  }

  /**
   * Get Bill_FirstName.
   * @returns {string}
   */
  getBillFirstName() {
    return this.billFirstName;
  }

  /**
   * Get Bill_LastName.
   * @returns {string}
   */
  getBillLastName() {
    return this.billLastName;
  }

  /**
   * Get Bill_Email.
   * @returns {string}
   */
  getBillEmail() {
    return this.billEmail;
  }

  /**
   * Get Bill_Phone.
   * @returns {string}
   */
  getBillPhone() {
    return this.billPhone;
  }

  /**
   * Get Bill_Fax.
   * @returns {string}
   */
  getBillFax() {
    return this.billFax;
  }

  /**
   * Get Bill_Company.
   * @returns {string}
   */
  getBillCompany() {
    return this.billCompany;
  }

  /**
   * Get Bill_Address1.
   * @returns {string}
   */
  getBillAddress1() {
    return this.billAddress1;
  }

  /**
   * Get Bill_Address2.
   * @returns {string}
   */
  getBillAddress2() {
    return this.billAddress2;
  }

  /**
   * Get Bill_City.
   * @returns {string}
   */
  getBillCity() {
    return this.billCity;
  }

  /**
   * Get Bill_State.
   * @returns {string}
   */
  getBillState() {
    return this.billState;
  }

  /**
   * Get Bill_Zip.
   * @returns {string}
   */
  getBillZip() {
    return this.billZip;
  }

  /**
   * Get Bill_Country.
   * @returns {string}
   */
  getBillCountry() {
    return this.billCountry;
  }

  /**
   * Set Order_ID.
   * @param {number} orderId
   * @returns {OrderUpdateCustomerInformation}
   */
  setOrderId(orderId) {
    this.orderId = orderId;
    return this;
  }

  /**
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {OrderUpdateCustomerInformation}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
    return this;
  }

  /**
   * Set Ship_Residential.
   * @param {boolean} shipResidential
   * @returns {OrderUpdateCustomerInformation}
   */
  setShipResidential(shipResidential) {
    this.shipResidential = shipResidential;
    return this;
  }

  /**
   * Set Ship_FirstName.
   * @param {string} shipFirstName
   * @returns {OrderUpdateCustomerInformation}
   */
  setShipFirstName(shipFirstName) {
    this.shipFirstName = shipFirstName;
    return this;
  }

  /**
   * Set Ship_LastName.
   * @param {string} shipLastName
   * @returns {OrderUpdateCustomerInformation}
   */
  setShipLastName(shipLastName) {
    this.shipLastName = shipLastName;
    return this;
  }

  /**
   * Set Ship_Email.
   * @param {string} shipEmail
   * @returns {OrderUpdateCustomerInformation}
   */
  setShipEmail(shipEmail) {
    this.shipEmail = shipEmail;
    return this;
  }

  /**
   * Set Ship_Phone.
   * @param {string} shipPhone
   * @returns {OrderUpdateCustomerInformation}
   */
  setShipPhone(shipPhone) {
    this.shipPhone = shipPhone;
    return this;
  }

  /**
   * Set Ship_Fax.
   * @param {string} shipFax
   * @returns {OrderUpdateCustomerInformation}
   */
  setShipFax(shipFax) {
    this.shipFax = shipFax;
    return this;
  }

  /**
   * Set Ship_Company.
   * @param {string} shipCompany
   * @returns {OrderUpdateCustomerInformation}
   */
  setShipCompany(shipCompany) {
    this.shipCompany = shipCompany;
    return this;
  }

  /**
   * Set Ship_Address1.
   * @param {string} shipAddress1
   * @returns {OrderUpdateCustomerInformation}
   */
  setShipAddress1(shipAddress1) {
    this.shipAddress1 = shipAddress1;
    return this;
  }

  /**
   * Set Ship_Address2.
   * @param {string} shipAddress2
   * @returns {OrderUpdateCustomerInformation}
   */
  setShipAddress2(shipAddress2) {
    this.shipAddress2 = shipAddress2;
    return this;
  }

  /**
   * Set Ship_City.
   * @param {string} shipCity
   * @returns {OrderUpdateCustomerInformation}
   */
  setShipCity(shipCity) {
    this.shipCity = shipCity;
    return this;
  }

  /**
   * Set Ship_State.
   * @param {string} shipState
   * @returns {OrderUpdateCustomerInformation}
   */
  setShipState(shipState) {
    this.shipState = shipState;
    return this;
  }

  /**
   * Set Ship_Zip.
   * @param {string} shipZip
   * @returns {OrderUpdateCustomerInformation}
   */
  setShipZip(shipZip) {
    this.shipZip = shipZip;
    return this;
  }

  /**
   * Set Ship_Country.
   * @param {string} shipCountry
   * @returns {OrderUpdateCustomerInformation}
   */
  setShipCountry(shipCountry) {
    this.shipCountry = shipCountry;
    return this;
  }

  /**
   * Set Bill_FirstName.
   * @param {string} billFirstName
   * @returns {OrderUpdateCustomerInformation}
   */
  setBillFirstName(billFirstName) {
    this.billFirstName = billFirstName;
    return this;
  }

  /**
   * Set Bill_LastName.
   * @param {string} billLastName
   * @returns {OrderUpdateCustomerInformation}
   */
  setBillLastName(billLastName) {
    this.billLastName = billLastName;
    return this;
  }

  /**
   * Set Bill_Email.
   * @param {string} billEmail
   * @returns {OrderUpdateCustomerInformation}
   */
  setBillEmail(billEmail) {
    this.billEmail = billEmail;
    return this;
  }

  /**
   * Set Bill_Phone.
   * @param {string} billPhone
   * @returns {OrderUpdateCustomerInformation}
   */
  setBillPhone(billPhone) {
    this.billPhone = billPhone;
    return this;
  }

  /**
   * Set Bill_Fax.
   * @param {string} billFax
   * @returns {OrderUpdateCustomerInformation}
   */
  setBillFax(billFax) {
    this.billFax = billFax;
    return this;
  }

  /**
   * Set Bill_Company.
   * @param {string} billCompany
   * @returns {OrderUpdateCustomerInformation}
   */
  setBillCompany(billCompany) {
    this.billCompany = billCompany;
    return this;
  }

  /**
   * Set Bill_Address1.
   * @param {string} billAddress1
   * @returns {OrderUpdateCustomerInformation}
   */
  setBillAddress1(billAddress1) {
    this.billAddress1 = billAddress1;
    return this;
  }

  /**
   * Set Bill_Address2.
   * @param {string} billAddress2
   * @returns {OrderUpdateCustomerInformation}
   */
  setBillAddress2(billAddress2) {
    this.billAddress2 = billAddress2;
    return this;
  }

  /**
   * Set Bill_City.
   * @param {string} billCity
   * @returns {OrderUpdateCustomerInformation}
   */
  setBillCity(billCity) {
    this.billCity = billCity;
    return this;
  }

  /**
   * Set Bill_State.
   * @param {string} billState
   * @returns {OrderUpdateCustomerInformation}
   */
  setBillState(billState) {
    this.billState = billState;
    return this;
  }

  /**
   * Set Bill_Zip.
   * @param {string} billZip
   * @returns {OrderUpdateCustomerInformation}
   */
  setBillZip(billZip) {
    this.billZip = billZip;
    return this;
  }

  /**
   * Set Bill_Country.
   * @param {string} billCountry
   * @returns {OrderUpdateCustomerInformation}
   */
  setBillCountry(billCountry) {
    this.billCountry = billCountry;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['Order_ID'] = this.orderId;

    if (!util.isNullOrUndefined(this.customerId)) {
      data['Customer_ID'] = this.customerId;
    }

    if (!util.isNullOrUndefined(this.shipResidential)) {
      data['Ship_Residential'] = this.shipResidential;
    }

    if (!util.isNullOrUndefined(this.shipFirstName)) {
      data['Ship_FirstName'] = this.shipFirstName;
    }

    if (!util.isNullOrUndefined(this.shipLastName)) {
      data['Ship_LastName'] = this.shipLastName;
    }

    if (!util.isNullOrUndefined(this.shipEmail)) {
      data['Ship_Email'] = this.shipEmail;
    }

    if (!util.isNullOrUndefined(this.shipPhone)) {
      data['Ship_Phone'] = this.shipPhone;
    }

    if (!util.isNullOrUndefined(this.shipFax)) {
      data['Ship_Fax'] = this.shipFax;
    }

    if (!util.isNullOrUndefined(this.shipCompany)) {
      data['Ship_Company'] = this.shipCompany;
    }

    if (!util.isNullOrUndefined(this.shipAddress1)) {
      data['Ship_Address1'] = this.shipAddress1;
    }

    if (!util.isNullOrUndefined(this.shipAddress2)) {
      data['Ship_Address2'] = this.shipAddress2;
    }

    if (!util.isNullOrUndefined(this.shipCity)) {
      data['Ship_City'] = this.shipCity;
    }

    if (!util.isNullOrUndefined(this.shipState)) {
      data['Ship_State'] = this.shipState;
    }

    if (!util.isNullOrUndefined(this.shipZip)) {
      data['Ship_Zip'] = this.shipZip;
    }

    if (!util.isNullOrUndefined(this.shipCountry)) {
      data['Ship_Country'] = this.shipCountry;
    }

    if (!util.isNullOrUndefined(this.billFirstName)) {
      data['Bill_FirstName'] = this.billFirstName;
    }

    if (!util.isNullOrUndefined(this.billLastName)) {
      data['Bill_LastName'] = this.billLastName;
    }

    if (!util.isNullOrUndefined(this.billEmail)) {
      data['Bill_Email'] = this.billEmail;
    }

    if (!util.isNullOrUndefined(this.billPhone)) {
      data['Bill_Phone'] = this.billPhone;
    }

    if (!util.isNullOrUndefined(this.billFax)) {
      data['Bill_Fax'] = this.billFax;
    }

    if (!util.isNullOrUndefined(this.billCompany)) {
      data['Bill_Company'] = this.billCompany;
    }

    if (!util.isNullOrUndefined(this.billAddress1)) {
      data['Bill_Address1'] = this.billAddress1;
    }

    if (!util.isNullOrUndefined(this.billAddress2)) {
      data['Bill_Address2'] = this.billAddress2;
    }

    if (!util.isNullOrUndefined(this.billCity)) {
      data['Bill_City'] = this.billCity;
    }

    if (!util.isNullOrUndefined(this.billState)) {
      data['Bill_State'] = this.billState;
    }

    if (!util.isNullOrUndefined(this.billZip)) {
      data['Bill_Zip'] = this.billZip;
    }

    if (!util.isNullOrUndefined(this.billCountry)) {
      data['Bill_Country'] = this.billCountry;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.OrderUpdateCustomerInformation(this, httpResponse, data);
  }
}

module.exports.OrderUpdateCustomerInformation = OrderUpdateCustomerInformation;