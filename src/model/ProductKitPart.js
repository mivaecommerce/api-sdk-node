/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** 
 * ProductKitPart data model.
 * @class
 */
class ProductKitPart extends Model {
  /**
   * ProductKitPart Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get product_id.
   * @returns {number}
   */
  getProductId() {
    return this.getField('product_id', 0);
  }
  
  /**
   * Get product_code.
   * @returns {string}
   */
  getProductCode() {
    return this.getField('product_code');
  }
  
  /**
   * Get product_name.
   * @returns {string}
   */
  getProductName() {
    return this.getField('product_name');
  }
  
  /**
   * Get quantity.
   * @returns {number}
   */
  getQuantity() {
    return this.getField('quantity', 0);
  }
}

module.exports.ProductKitPart = ProductKitPart;