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
 * API Response for AttributeAndOptionList_Load_Product.
 * @see https://docs.miva.com/json-api/functions/attributeandoptionlist_load_product
 * @class
 */
class AttributeAndOptionListLoadProduct extends Response {
  /**
   * AttributeAndOptionListLoadProduct Constructor.
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

    if (util.isArray(this.data['data'])) {
      for (i = 0, l = this.data['data'].length; i < l; i++) {
        this.data['data'][i] = new models.ProductAttribute(this.data['data'][i]);
      }
    }
  }

  /**
   * Get productAttributes.
   * @returns {ProductAttribute[]}
   */
  getProductAttributes() {
    return util.isNullOrUndefined(this.data['data']) ?
      [] : this.data['data'];
  }
}

module.exports.AttributeAndOptionListLoadProduct = AttributeAndOptionListLoadProduct;