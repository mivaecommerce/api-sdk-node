/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** 
 * ProductImageData data model.
 * @class
 */
class ProductImageData extends Model {
  /**
   * ProductImageData Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get id.
   * @returns {number}
   */
  getId() {
    return this.getField('id', 0);
  }
  
  /**
   * Get product_id.
   * @returns {number}
   */
  getProductId() {
    return this.getField('product_id', 0);
  }
  
  /**
   * Get image_id.
   * @returns {number}
   */
  getImageId() {
    return this.getField('image_id', 0);
  }
  
  /**
   * Get type_id.
   * @returns {number}
   */
  getTypeId() {
    return this.getField('type_id', 0);
  }
  
  /**
   * Get code.
   * @returns {string}
   */
  getCode() {
    return this.getField('code');
  }
  
  /**
   * Get type_desc.
   * @returns {string}
   */
  getTypeDescription() {
    return this.getField('type_desc');
  }
  
  /**
   * Get image.
   * @returns {string}
   */
  getImage() {
    return this.getField('image');
  }
  
  /**
   * Get width.
   * @returns {number}
   */
  getWidth() {
    return this.getField('width', 0);
  }
  
  /**
   * Get height.
   * @returns {number}
   */
  getHeight() {
    return this.getField('height', 0);
  }
  
  /**
   * Get disp_order.
   * @returns {number}
   */
  getDisplayOrder() {
    return this.getField('disp_order', 0);
  }
}

module.exports.ProductImageData = ProductImageData;