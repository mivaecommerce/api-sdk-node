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
 * Handles API Request OrderShipmentList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/ordershipmentlist_load_query
 * @class
 */
class OrderShipmentListLoadQuery extends ListQueryRequest {
  /**
   * OrderShipmentListLoadQuery Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'OrderShipmentList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'order_id',
      'code',
      'tracknum',
      'tracktype',
      'weight',
      'cost',
      'status',
      'ship_date',
      'batch_id',
      'order_batch_id',
      'order_pay_id',
      'order_status',
      'order_pay_status',
      'order_stk_status',
      'order_orderdate',
      'order_dt_instock',
      'order_cust_id',
      'order_ship_res',
      'order_ship_fname',
      'order_ship_lname',
      'order_ship_email',
      'order_ship_comp',
      'order_ship_phone',
      'order_ship_fax',
      'order_ship_addr1',
      'order_ship_addr2',
      'order_ship_city',
      'order_ship_state',
      'order_ship_zip',
      'order_ship_cntry',
      'order_bill_fname',
      'order_bill_lname',
      'order_bill_email',
      'order_bill_comp',
      'order_bill_phone',
      'order_bill_fax',
      'order_bill_addr1',
      'order_bill_addr2',
      'order_bill_city',
      'order_bill_state',
      'order_bill_zip',
      'order_bill_cntry',
      'order_ship_id',
      'order_ship_data',
      'order_source',
      'order_source_id',
      'order_total',
      'order_total_ship',
      'order_total_tax',
      'order_total_auth',
      'order_total_capt',
      'order_total_rfnd',
      'order_net_capt',
      'order_pend_count',
      'order_bord_count',
      'order_note_count'
    ];

    this.availableSortFields = [
      'id',
      'order_id',
      'code',
      'tracknum',
      'tracktype',
      'weight',
      'cost',
      'status',
      'ship_date',
      'batch_id',
      'order_batch_id',
      'order_pay_id',
      'order_status',
      'order_pay_status',
      'order_stk_status',
      'order_dt_instock',
      'order_orderdate',
      'order_cust_id',
      'order_ship_res',
      'order_ship_fname',
      'order_ship_lname',
      'order_ship_email',
      'order_ship_comp',
      'order_ship_phone',
      'order_ship_fax',
      'order_ship_addr1',
      'order_ship_addr2',
      'order_ship_city',
      'order_ship_state',
      'order_ship_zip',
      'order_ship_cntry',
      'order_bill_fname',
      'order_bill_lname',
      'order_bill_email',
      'order_bill_comp',
      'order_bill_phone',
      'order_bill_fax',
      'order_bill_addr1',
      'order_bill_addr2',
      'order_bill_city',
      'order_bill_state',
      'order_bill_zip',
      'order_bill_cntry',
      'order_ship_id',
      'order_ship_data',
      'order_source',
      'order_source_id',
      'order_total',
      'order_total_ship',
      'order_total_tax',
      'order_total_auth',
      'order_total_capt',
      'order_total_rfnd',
      'order_net_capt',
      'order_pend_count',
      'order_bord_count',
      'order_note_count'
    ];

    this.availableOnDemandColumns = [
      'items',
      'include_order'
    ];
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.OrderShipmentListLoadQuery(this, httpResponse, data);
  }
}

module.exports.OrderShipmentListLoadQuery = OrderShipmentListLoadQuery;