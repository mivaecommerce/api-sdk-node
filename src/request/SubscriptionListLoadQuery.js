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
 * Handles API Request SubscriptionList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/subscriptionlist_load_query
 * @class
 */
class SubscriptionListLoadQuery extends ListQueryRequest {
  /**
   * SubscriptionListLoadQuery Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'SubscriptionList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'order_id',
      'quantity',
      'termrem',
      'termproc',
      'firstdate',
      'lastdate',
      'nextdate',
      'status',
      'message',
      'cncldate',
      'tax',
      'shipping',
      'subtotal',
      'total',
      'authfails',
      'lastafail',
      'frequency',
      'term',
      'descrip',
      'n',
      'fixed_dow',
      'fixed_dom',
      'sub_count',
      'customer_login',
      'customer_pw_email',
      'customer_business_title',
      'product_code',
      'product_name',
      'product_sku',
      'product_price',
      'product_cost',
      'product_weight',
      'product_descrip',
      'product_taxable',
      'product_thumbnail',
      'product_image',
      'product_active',
      'product_page_title',
      'product_cancat_code',
      'product_page_code',
      'address_descrip',
      'address_fname',
      'address_lname',
      'address_email',
      'address_phone',
      'address_fax',
      'address_comp',
      'address_addr1',
      'address_addr2',
      'address_city',
      'address_state',
      'address_zip',
      'address_cntry',
      'product_inventory_active'
    ];

    this.availableSortFields = [
      'id',
      'order_id',
      'custpc_id',
      'quantity',
      'termrem',
      'termproc',
      'firstdate',
      'lastdate',
      'nextdate',
      'status',
      'message',
      'cncldate',
      'tax',
      'shipping',
      'subtotal',
      'total',
      'authfails',
      'lastafail',
      'frequency',
      'term',
      'descrip',
      'n',
      'fixed_dow',
      'fixed_dom',
      'sub_count',
      'customer_login',
      'customer_pw_email',
      'customer_business_title',
      'product_code',
      'product_name',
      'product_sku',
      'product_cancat_code',
      'product_page_code',
      'product_price',
      'product_cost',
      'product_weight',
      'product_descrip',
      'product_taxable',
      'product_thumbnail',
      'product_image',
      'product_active',
      'product_page_title',
      'address_descrip',
      'address_fname',
      'address_lname',
      'address_email',
      'address_phone',
      'address_fax',
      'address_comp',
      'address_addr1',
      'address_addr2',
      'address_city',
      'address_state',
      'address_zip',
      'address_cntry',
      'product_inventory'
    ];

    this.availableOnDemandColumns = [
      'imagetypes',
      'imagetype_count',
      'product_descrip'
    ];
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.SubscriptionListLoadQuery(this, httpResponse, data);
  }
}

module.exports.SubscriptionListLoadQuery = SubscriptionListLoadQuery;