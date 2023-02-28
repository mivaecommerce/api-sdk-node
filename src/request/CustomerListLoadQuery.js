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
 * Handles API Request CustomerList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/customerlist_load_query
 * @class
 */
class CustomerListLoadQuery extends ListQueryRequest {
  /**
   * CustomerListLoadQuery Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'CustomerList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'login',
      'pw_email',
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
      'ship_res',
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
      'business_title',
      'note_count',
      'dt_created',
      'dt_login',
      'credit'
    ];

    this.availableSortFields = [
      'id',
      'login',
      'pw_email',
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
      'ship_res',
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
      'business_title',
      'note_count',
      'dt_created',
      'dt_login',
      'credit'
    ];
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CustomerListLoadQuery(this, httpResponse, data);
  }
}

module.exports.CustomerListLoadQuery = CustomerListLoadQuery;