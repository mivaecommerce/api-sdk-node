/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** 
 * ProductInventoryAdjustment data model.
 * @class
 */
class ProductInventoryAdjustment extends Model {
  /**
   * ProductInventoryAdjustment Constructor.
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
   * Get product_sku.
   * @returns {string}
   */
  getProductSku() {
    return this.getField('product_sku');
  }
  
  /**
   * Get adjustment.
   * @returns {number}
   */
  getAdjustment() {
    return this.getField('adjustment', 0.00);
  }
  
  /**
   * Set product_id.
   * @param {number} productId
   * @returns {ProductInventoryAdjustment}
   */
  setProductId(productId) {
    return this.setField('product_id', productId);
  }

  /**
   * Set product_code.
   * @param {string} productCode
   * @returns {ProductInventoryAdjustment}
   */
  setProductCode(productCode) {
    return this.setField('product_code', productCode);
  }

  /**
   * Set product_sku.
   * @param {string} productSku
   * @returns {ProductInventoryAdjustment}
   */
  setProductSku(productSku) {
    return this.setField('product_sku', productSku);
  }

  /**
   * Set adjustment.
   * @param {number} adjustment
   * @returns {ProductInventoryAdjustment}
   */
  setAdjustment(adjustment) {
    return this.setField('adjustment', adjustment);
  }
}

module.exports.ProductInventoryAdjustment = ProductInventoryAdjustment;