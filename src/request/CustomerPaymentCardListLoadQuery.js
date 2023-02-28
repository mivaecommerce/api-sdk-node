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
const { ListQueryRequest }  = require('./../listquery');

/** 
 * Handles API Request CustomerPaymentCardList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/customerpaymentcardlist_load_query
 * @class
 */
class CustomerPaymentCardListLoadQuery extends ListQueryRequest {
  /**
   * CustomerPaymentCardListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?Customer} customer
   */
  constructor(client, customer = null) {
    super(client);
    this.function = 'CustomerPaymentCardList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'fname',
      'lname',
      'exp_month',
      'exp_year',
      'lastfour',
      'lastused',
      'type',
      'addr1',
      'addr2',
      'city',
      'state',
      'zip',
      'cntry',
      'refcount',
      'mod_code',
      'meth_code',
      'id'
    ];

    this.availableSortFields = [
      'fname',
      'lname',
      'expires',
      'lastfour',
      'lastused',
      'type',
      'addr1',
      'addr2',
      'city',
      'state',
      'zip',
      'cntry',
      'refcount',
      'mod_code',
      'meth_code',
      'id'
    ];

    this.customerId = null;
    this.editCustomer = null;
    this.customerLogin = null;

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
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {CustomerPaymentCardListLoadQuery}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
    return this;
  }

  /**
   * Set Edit_Customer.
   * @param {string} editCustomer
   * @returns {CustomerPaymentCardListLoadQuery}
   */
  setEditCustomer(editCustomer) {
    this.editCustomer = editCustomer;
    return this;
  }

  /**
   * Set Customer_Login.
   * @param {string} customerLogin
   * @returns {CustomerPaymentCardListLoadQuery}
   */
  setCustomerLogin(customerLogin) {
    this.customerLogin = customerLogin;
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

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CustomerPaymentCardListLoadQuery(this, httpResponse, data);
  }
}

module.exports.CustomerPaymentCardListLoadQuery = CustomerPaymentCardListLoadQuery;