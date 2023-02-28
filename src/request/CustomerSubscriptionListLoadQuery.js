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
const { SubscriptionListLoadQuery } = require('./SubscriptionListLoadQuery')

/** 
 * Handles API Request CustomerSubscriptionList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/customersubscriptionlist_load_query
 * @class
 */
class CustomerSubscriptionListLoadQuery extends SubscriptionListLoadQuery {
  /**
   * CustomerSubscriptionListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?Customer} customer
   */
  constructor(client, customer = null) {
    super(client);
    this.function = 'CustomerSubscriptionList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.customerId = null;
    this.editCustomer = null;
    this.customerLogin = null;
    this.customFieldValues = new models.CustomFieldValues();

    if (util.isInstanceOf(customer, models.Customer)) {
      if (customer.getId()) {
        this.setCustomerId(customer.getId());
      } else if (customer.getLogin()) {
        this.setEditCustomer(customer.getLogin());
      }
      if (customer.getCustomFieldValues()) {
        this.setCustomFieldValues(customer.getCustomFieldValues());
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
   * Get CustomField_Values.
   * @returns {?CustomFieldValues}
   */
  getCustomFieldValues() {
    return this.customFieldValues;
  }

  /**
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {CustomerSubscriptionListLoadQuery}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
    return this;
  }

  /**
   * Set Edit_Customer.
   * @param {string} editCustomer
   * @returns {CustomerSubscriptionListLoadQuery}
   */
  setEditCustomer(editCustomer) {
    this.editCustomer = editCustomer;
    return this;
  }

  /**
   * Set Customer_Login.
   * @param {string} customerLogin
   * @returns {CustomerSubscriptionListLoadQuery}
   */
  setCustomerLogin(customerLogin) {
    this.customerLogin = customerLogin;
    return this;
  }

  /**
   * Set CustomField_Values.
   * @param {?CustomFieldValues} customFieldValues
   * @throws {Error}
   * @returns {CustomerSubscriptionListLoadQuery}
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

    if (!util.isNullOrUndefined(this.customerId)) {
      data['Customer_ID'] = this.customerId;
    } else if (!util.isNullOrUndefined(this.editCustomer)) {
      data['Edit_Customer'] = this.editCustomer;
    } else if (!util.isNullOrUndefined(this.customerLogin)) {
      data['Customer_Login'] = this.customerLogin;
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
    return new responses.CustomerSubscriptionListLoadQuery(this, httpResponse, data);
  }
}

module.exports.CustomerSubscriptionListLoadQuery = CustomerSubscriptionListLoadQuery;