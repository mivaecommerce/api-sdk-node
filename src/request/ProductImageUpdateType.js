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
 * Handles API Request ProductImage_Update_Type. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/productimage_update_type
 * @class
 */
class ProductImageUpdateType extends Request {
  /**
   * ProductImageUpdateType Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'ProductImage_Update_Type';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productImageId = null;
    this.imageTypeId = null;
  }

  /**
   * Get ProductImage_ID.
   * @returns {number}
   */
  getProductImageId() {
    return this.productImageId;
  }

  /**
   * Get ImageType_ID.
   * @returns {number}
   */
  getImageTypeId() {
    return this.imageTypeId;
  }

  /**
   * Set ProductImage_ID.
   * @param {number} productImageId
   * @returns {ProductImageUpdateType}
   */
  setProductImageId(productImageId) {
    this.productImageId = productImageId;
    return this;
  }

  /**
   * Set ImageType_ID.
   * @param {number} imageTypeId
   * @returns {ProductImageUpdateType}
   */
  setImageTypeId(imageTypeId) {
    this.imageTypeId = imageTypeId;
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

    if (!util.isNullOrUndefined(this.imageTypeId)) {
      data['ImageType_ID'] = this.imageTypeId;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ProductImageUpdateType(this, httpResponse, data);
  }
}

module.exports.ProductImageUpdateType = ProductImageUpdateType;