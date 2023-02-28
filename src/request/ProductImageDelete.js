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

/** 
 * Handles API Request ProductImage_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/productimage_delete
 * @class
 */
class ProductImageDelete extends Request {
  /**
   * ProductImageDelete Constructor.
   * @param {?BaseClient} client
   * @param {?ProductImageData} productImageData
   */
  constructor(client, productImageData = null) {
    super(client);
    this.function = 'ProductImage_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productImageId = null;

    if (util.isInstanceOf(productImageData, models.ProductImageData)) {
      this.setProductImageId(productImageData.getId());
    }
  }

  /**
   * Get ProductImage_ID.
   * @returns {number}
   */
  getProductImageId() {
    return this.productImageId;
  }

  /**
   * Set ProductImage_ID.
   * @param {number} productImageId
   * @returns {ProductImageDelete}
   */
  setProductImageId(productImageId) {
    this.productImageId = productImageId;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['ProductImage_ID'] = this.productImageId;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ProductImageDelete(this, httpResponse, data);
  }
}

module.exports.ProductImageDelete = ProductImageDelete;