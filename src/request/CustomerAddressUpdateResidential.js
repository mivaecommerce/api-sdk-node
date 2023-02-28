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
 * Handles API Request CustomerAddress_Update_Residential. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/customeraddress_update_residential
 * @class
 */
class CustomerAddressUpdateResidential extends Request {
  /**
   * CustomerAddressUpdateResidential Constructor.
   * @param {?BaseClient} client
   * @param {?CustomerAddress} customerAddress
   */
  constructor(client, customerAddress = null) {
    super(client);
    this.function = 'CustomerAddress_Update_Residential';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.addressId = null;
    this.customerAddressId = null;
    this.residential = null;

    if (util.isInstanceOf(customerAddress, models.CustomerAddress)) {
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
   * Get Residential.
   * @returns {boolean}
   */
  getResidential() {
    return this.residential;
  }

  /**
   * Set Address_ID.
   * @param {number} addressId
   * @returns {CustomerAddressUpdateResidential}
   */
  setAddressId(addressId) {
    this.addressId = addressId;
    return this;
  }

  /**
   * Set CustomerAddress_ID.
   * @param {number} customerAddressId
   * @returns {CustomerAddressUpdateResidential}
   */
  setCustomerAddressId(customerAddressId) {
    this.customerAddressId = customerAddressId;
    return this;
  }

  /**
   * Set Residential.
   * @param {boolean} residential
   * @returns {CustomerAddressUpdateResidential}
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

    if (!util.isNullOrUndefined(this.addressId)) {
      data['Address_ID'] = this.addressId;
    } else if (!util.isNullOrUndefined(this.customerAddressId)) {
      data['CustomerAddress_ID'] = this.customerAddressId;
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
    return new responses.CustomerAddressUpdateResidential(this, httpResponse, data);
  }
}

module.exports.CustomerAddressUpdateResidential = CustomerAddressUpdateResidential;