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

/** PAY_STATUS_FILTER constants. */
/** @ignore */
const PAY_STATUS_FILTER_AUTH_ONLY = 'auth_0_capt';
/** @ignore */
const PAY_STATUS_FILTER_PARTIAL_CAPTURE = 'partial_capt';
/** @ignore */
const PAY_STATUS_FILTER_CAPTURED_NOT_SHIPPED = 'capt_not_ship';
/** @ignore */
const PAY_STATUS_FILTER_SHIPPED_NOT_CAPTURED = 'ship_not_capt';

/** 
 * Handles API Request OrderList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/orderlist_load_query
 * @class
 */
class OrderListLoadQuery extends ListQueryRequest {
  /**
   * OrderListLoadQuery Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'OrderList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
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
      'ship_id',
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
      'note_count'
    ];

    this.availableSortFields = [
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

    this.availableOnDemandColumns = [
      'ship_method',
      'cust_login',
      'cust_pw_email',
      'business_title',
      'payment_module',
      'customer',
      'items',
      'charges',
      'coupons',
      'discounts',
      'payments',
      'notes',
      'parts',
      'shipments',
      'returns'
    ];

    this.availableCustomFilters = {
      Customer_ID : 'int',
      BusinessAccount_ID : 'int',
      pay_id : 'int',
      payment : [
          PAY_STATUS_FILTER_AUTH_ONLY,
          PAY_STATUS_FILTER_PARTIAL_CAPTURE,
          PAY_STATUS_FILTER_CAPTURED_NOT_SHIPPED,
          PAY_STATUS_FILTER_SHIPPED_NOT_CAPTURED
      ],
      product_code : 'string'
    };

    this.passphrase = null;
  }

  /**
   * Constant PAY_STATUS_FILTER_AUTH_ONLY
   * @returns {string}
   * @const
   * @static
   */
  static get PAY_STATUS_FILTER_AUTH_ONLY() {
    return PAY_STATUS_FILTER_AUTH_ONLY;
  }

  /**
   * Constant PAY_STATUS_FILTER_PARTIAL_CAPTURE
   * @returns {string}
   * @const
   * @static
   */
  static get PAY_STATUS_FILTER_PARTIAL_CAPTURE() {
    return PAY_STATUS_FILTER_PARTIAL_CAPTURE;
  }

  /**
   * Constant PAY_STATUS_FILTER_CAPTURED_NOT_SHIPPED
   * @returns {string}
   * @const
   * @static
   */
  static get PAY_STATUS_FILTER_CAPTURED_NOT_SHIPPED() {
    return PAY_STATUS_FILTER_CAPTURED_NOT_SHIPPED;
  }

  /**
   * Constant PAY_STATUS_FILTER_SHIPPED_NOT_CAPTURED
   * @returns {string}
   * @const
   * @static
   */
  static get PAY_STATUS_FILTER_SHIPPED_NOT_CAPTURED() {
    return PAY_STATUS_FILTER_SHIPPED_NOT_CAPTURED;
  }
  /**
   * Get Passphrase.
   * @returns {string}
   */
  getPassphrase() {
    return this.passphrase;
  }

  /**
   * Set Passphrase.
   * @param {string} passphrase
   * @returns {OrderListLoadQuery}
   */
  setPassphrase(passphrase) {
    this.passphrase = passphrase;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.passphrase)) {
      data['Passphrase'] = this.passphrase;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.OrderListLoadQuery(this, httpResponse, data);
  }
}

module.exports.OrderListLoadQuery = OrderListLoadQuery;