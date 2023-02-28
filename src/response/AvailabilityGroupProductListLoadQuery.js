/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const models = require('./../models');
const { Response }  = require('./../abstract');
const { ListQueryResponse }  = require('./../listquery');

/** 
 * API Response for AvailabilityGroupProductList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/availabilitygroupproductlist_load_query
 * @class
 */
class AvailabilityGroupProductListLoadQuery extends ListQueryResponse {
  /**
   * AvailabilityGroupProductListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.AvailabilityGroupProduct(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get availabilityGroupProducts.
   * @returns {AvailabilityGroupProduct[]}
   */
  getAvailabilityGroupProducts() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

module.exports.AvailabilityGroupProductListLoadQuery = AvailabilityGroupProductListLoadQuery;