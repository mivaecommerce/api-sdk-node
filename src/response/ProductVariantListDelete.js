/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const models = require('./../models');
const { Response }  = require('./../abstract');

/** 
 * API Response for ProductVariantList_Delete.
 * @see https://docs.miva.com/json-api/functions/productvariantlist_delete
 * @class
 */
class ProductVariantListDelete extends Response {
  /**
   * ProductVariantListDelete Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }

  /**
   * Get processed.
   * @returns {number}
   */
  getProcessed() {
    if (!util.isNullOrUndefined(this.data['processed'])) {
      return this.data['processed'];
    }

    return 0;
  }
}

module.exports.ProductVariantListDelete = ProductVariantListDelete;