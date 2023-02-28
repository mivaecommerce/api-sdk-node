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
 * Handles API Request PriceGroupCustomer_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/pricegroupcustomer_update_assigned
 * @class
 */
class PriceGroupCustomerUpdateAssigned extends Request {
  /**
   * PriceGroupCustomerUpdateAssigned Constructor.
   * @param {?BaseClient} client
   * @param {?PriceGroup} priceGroup
   */
  constructor(client, priceGroup = null) {
    super(client);
    this.function = 'PriceGroupCustomer_Update_Assigned';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.priceGroupId = null;
    this.priceGroupName = null;
    this.editCustomer = null;
    this.customerId = null;
    this.customerLogin = null;
    this.assigned = null;

    if (util.isInstanceOf(priceGroup, models.PriceGroup)) {
      if (priceGroup.getId()) {
        this.setPriceGroupId(priceGroup.getId());
      } else if (priceGroup.getName()) {
        this.setPriceGroupName(priceGroup.getName());
      }
    }
  }

  /**
   * Get PriceGroup_ID.
   * @returns {number}
   */
  getPriceGroupId() {
    return this.priceGroupId;
  }

  /**
   * Get PriceGroup_Name.
   * @returns {string}
   */
  getPriceGroupName() {
    return this.priceGroupName;
  }

  /**
   * Get Edit_Customer.
   * @returns {string}
   */
  getEditCustomer() {
    return this.editCustomer;
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
   * Get Assigned.
   * @returns {boolean}
   */
  getAssigned() {
    return this.assigned;
  }

  /**
   * Set PriceGroup_ID.
   * @param {number} priceGroupId
   * @returns {PriceGroupCustomerUpdateAssigned}
   */
  setPriceGroupId(priceGroupId) {
    this.priceGroupId = priceGroupId;
    return this;
  }

  /**
   * Set PriceGroup_Name.
   * @param {string} priceGroupName
   * @returns {PriceGroupCustomerUpdateAssigned}
   */
  setPriceGroupName(priceGroupName) {
    this.priceGroupName = priceGroupName;
    return this;
  }

  /**
   * Set Edit_Customer.
   * @param {string} editCustomer
   * @returns {PriceGroupCustomerUpdateAssigned}
   */
  setEditCustomer(editCustomer) {
    this.editCustomer = editCustomer;
    return this;
  }

  /**
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {PriceGroupCustomerUpdateAssigned}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
    return this;
  }

  /**
   * Set Customer_Login.
   * @param {string} customerLogin
   * @returns {PriceGroupCustomerUpdateAssigned}
   */
  setCustomerLogin(customerLogin) {
    this.customerLogin = customerLogin;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {PriceGroupCustomerUpdateAssigned}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.priceGroupId)) {
      data['PriceGroup_ID'] = this.priceGroupId;
    } else if (!util.isNullOrUndefined(this.priceGroupName)) {
      data['PriceGroup_Name'] = this.priceGroupName;
    }

    if (!util.isNullOrUndefined(this.customerId)) {
      data['Customer_ID'] = this.customerId;
    } else if (!util.isNullOrUndefined(this.editCustomer)) {
      data['Edit_Customer'] = this.editCustomer;
    } else if (!util.isNullOrUndefined(this.customerLogin)) {
      data['Customer_Login'] = this.customerLogin;
    }

    if (!util.isNullOrUndefined(this.assigned)) {
      data['Assigned'] = this.assigned;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.PriceGroupCustomerUpdateAssigned(this, httpResponse, data);
  }
}

module.exports.PriceGroupCustomerUpdateAssigned = PriceGroupCustomerUpdateAssigned;