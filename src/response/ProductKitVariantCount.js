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
 * API Response for ProductKit_Variant_Count.
 * @see https://docs.miva.com/json-api/functions/productkit_variant_count
 * @class
 */
class ProductKitVariantCount extends Response {
  /**
   * ProductKitVariantCount Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }

  /**
   * Get variants.
   * @returns {number}
   */
  getVariants() {
    if (!util.isNullOrUndefined(this.data['data']) && !util.isNullOrUndefined(this.data['data']['variants'])) {
      return this.data['data']['variants'];
    }

    return 0;
  }
}

module.exports.ProductKitVariantCount = ProductKitVariantCount;