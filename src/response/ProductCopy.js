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
 * API Response for Product_Copy.
 * @see https://docs.miva.com/json-api/functions/product_copy
 * @class
 */
class ProductCopy extends Response {
  /**
   * ProductCopy Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data'])) {
      this.data['data'] = new models.Product(this.data['data']);
    }    
  }

  /**
   * Get completed.
   * @returns {boolean}
   */
  getCompleted() {
    if (!util.isNullOrUndefined(this.data['completed'])) {
      return this.data['completed'];
    }

    return false;
  }

  /**
   * Get product_copy_session_id.
   * @returns {string}
   */
  getProductCopySessionId() {
    if (!util.isNullOrUndefined(this.data['product_copy_session_id'])) {
      return this.data['product_copy_session_id'];
    }

    return null;
  }

  /**
   * Get product.
   * @returns {?Product}
   */
  getProduct() {
    return util.isNullOrUndefined(this.data['data']) ?
      null : this.data['data'];
  }
}

module.exports.ProductCopy = ProductCopy;