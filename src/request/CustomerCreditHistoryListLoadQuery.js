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
 * Handles API Request CustomerCreditHistoryList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/customercredithistorylist_load_query
 * @class
 */
class CustomerCreditHistoryListLoadQuery extends ListQueryRequest {
  /**
   * CustomerCreditHistoryListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?Customer} customer
   */
  constructor(client, customer = null) {
    super(client);
    this.function = 'CustomerCreditHistoryList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'user_name',
      'order_id',
      'txref',
      'descrip',
      'amount',
      'dtstamp',
      'id'
    ];

    this.availableSortFields = [
      'user_name',
      'order_id',
      'txref',
      'descrip',
      'amount',
      'dtstamp',
      'id'
    ];

    this.availableOnDemandColumns = [
      'source'
    ];
    this.customerId = null;
    this.editCustomer = null;
    this.customerLogin = null;

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
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {CustomerCreditHistoryListLoadQuery}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
    return this;
  }

  /**
   * Set Edit_Customer.
   * @param {string} editCustomer
   * @returns {CustomerCreditHistoryListLoadQuery}
   */
  setEditCustomer(editCustomer) {
    this.editCustomer = editCustomer;
    return this;
  }

  /**
   * Set Customer_Login.
   * @param {string} customerLogin
   * @returns {CustomerCreditHistoryListLoadQuery}
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
    return new responses.CustomerCreditHistoryListLoadQuery(this, httpResponse, data);
  }
}

module.exports.CustomerCreditHistoryListLoadQuery = CustomerCreditHistoryListLoadQuery;