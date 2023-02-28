/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** 
 * ProductInventorySettings data model.
 * @class
 */
class ProductInventorySettings extends Model {
  /**
   * ProductInventorySettings Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get active.
   * @returns {boolean}
   */
  getActive() {
    return this.getField('active', false);
  }
  
  /**
   * Get in_short.
   * @returns {string}
   */
  getInStockMessageShort() {
    return this.getField('in_short');
  }
  
  /**
   * Get in_long.
   * @returns {string}
   */
  getInStockMessageLong() {
    return this.getField('in_long');
  }
  
  /**
   * Get low_track.
   * @returns {string}
   */
  getTrackLowStockLevel() {
    return this.getField('low_track');
  }
  
  /**
   * Get low_level.
   * @returns {number}
   */
  getLowStockLevel() {
    return this.getField('low_level', 0);
  }
  
  /**
   * Get low_lvl_d.
   * @returns {boolean}
   */
  getLowStockLevelDefault() {
    return this.getField('low_lvl_d', false);
  }
  
  /**
   * Get low_short.
   * @returns {string}
   */
  getLowStockMessageShort() {
    return this.getField('low_short');
  }
  
  /**
   * Get low_long.
   * @returns {string}
   */
  getLowStockMessageLong() {
    return this.getField('low_long');
  }
  
  /**
   * Get out_track.
   * @returns {string}
   */
  getTrackOutOfStockLevel() {
    return this.getField('out_track');
  }
  
  /**
   * Get out_hide.
   * @returns {string}
   */
  getHideOutOfStock() {
    return this.getField('out_hide');
  }
  
  /**
   * Get out_level.
   * @returns {number}
   */
  getOutOfStockLevel() {
    return this.getField('out_level', 0);
  }
  
  /**
   * Get out_lvl_d.
   * @returns {boolean}
   */
  getOutOfStockLevelDefault() {
    return this.getField('out_lvl_d', false);
  }
  
  /**
   * Get out_short.
   * @returns {string}
   */
  getOutOfStockMessageShort() {
    return this.getField('out_short');
  }
  
  /**
   * Get out_long.
   * @returns {string}
   */
  getOutOfStockMessageLong() {
    return this.getField('out_long');
  }
  
  /**
   * Get ltd_long.
   * @returns {string}
   */
  getLimitedStockMessage() {
    return this.getField('ltd_long');
  }
}

module.exports.ProductInventorySettings = ProductInventorySettings;