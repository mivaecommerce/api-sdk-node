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
const { OrderListLoadQuery } = require('./OrderListLoadQuery')

/** 
 * Handles API Request AllOrderPaymentList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/allorderpaymentlist_load_query
 * @class
 */
class AllOrderPaymentListLoadQuery extends OrderListLoadQuery {
  /**
   * AllOrderPaymentListLoadQuery Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'AllOrderPaymentList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'type',
      'refnum',
      'available',
      'expires,',
      'payment_ip',
      'amount',
      'payment_dtstamp',
      'id',
      'batch_id',
      'status',
      'pay_status',
      'orderdate',
      'dt_instock',
      'ship_res',
      'ship_fname',
      'ship_lname',
      'ship_email',
      'ship_comp',
      'ship_phone',
      'ship_fax',
      'ship_addr1',
      'ship_addr2',
      'ship_city',
      'ship_state',
      'ship_zip',
      'ship_cntry',
      'bill_fname',
      'bill_lname',
      'bill_email',
      'bill_comp',
      'bill_phone',
      'bill_fax',
      'bill_addr1',
      'bill_addr2',
      'bill_city',
      'bill_state',
      'bill_zip',
      'bill_cntry',
      'ship_data',
      'source',
      'source_id',
      'total',
      'total_ship',
      'total_tax',
      'total_auth',
      'total_capt',
      'total_rfnd',
      'net_capt',
      'pend_count',
      'bord_count',
      'cust_login',
      'cust_pw_email',
      'business_title',
      'note_count',
      'payment_module'
    ];

    this.availableSortFields = [
      'type',
      'refnum',
      'available',
      'expires,',
      'payment_ip',
      'amount',
      'payment_dtstamp'
    ];
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.AllOrderPaymentListLoadQuery(this, httpResponse, data);
  }
}

module.exports.AllOrderPaymentListLoadQuery = AllOrderPaymentListLoadQuery;