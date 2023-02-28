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
 * Handles API Request PriceGroupList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/pricegrouplist_load_query
 * @class
 */
class PriceGroupListLoadQuery extends ListQueryRequest {
  /**
   * PriceGroupListLoadQuery Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'PriceGroupList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'name',
      'type',
      'module_id',
      'custscope',
      'rate',
      'discount',
      'markup',
      'dt_start',
      'dt_end',
      'priority',
      'exclusion',
      'descrip',
      'display',
      'qmn_subtot',
      'qmx_subtot',
      'qmn_quan',
      'qmx_quan',
      'qmn_weight',
      'qmx_weight',
      'bmn_subtot',
      'bmx_subtot',
      'bmn_quan',
      'bmx_quan',
      'bmn_weight',
      'bmx_weight'
    ];

    this.availableSortFields = [
      'id',
      'name',
      'type',
      'module_id',
      'custscope',
      'rate',
      'discount',
      'markup',
      'dt_start',
      'dt_end',
      'priority',
      'exclusion',
      'descrip',
      'display',
      'qmn_subtot',
      'qmx_subtot',
      'qmn_quan',
      'qmx_quan',
      'qmn_weight',
      'qmx_weight',
      'bmn_subtot',
      'bmx_subtot',
      'bmn_quan',
      'bmx_quan',
      'bmn_weight',
      'bmx_weight'
    ];
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.PriceGroupListLoadQuery(this, httpResponse, data);
  }
}

module.exports.PriceGroupListLoadQuery = PriceGroupListLoadQuery;