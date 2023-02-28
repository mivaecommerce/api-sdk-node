/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** 
 * RelatedProduct data model.
 * @class
 */
class RelatedProduct extends Model {
  /**
   * RelatedProduct Constructor.
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
   * Get code.
   * @returns {string}
   */
  getCode() {
    return this.getField('code');
  }
  
  /**
   * Get sku.
   * @returns {string}
   */
  getSku() {
    return this.getField('sku');
  }
  
  /**
   * Get name.
   * @returns {string}
   */
  getName() {
    return this.getField('name');
  }
  
  /**
   * Get thumbnail.
   * @returns {string}
   */
  getThumbnail() {
    return this.getField('thumbnail');
  }
  
  /**
   * Get image.
   * @returns {string}
   */
  getImage() {
    return this.getField('image');
  }
  
  /**
   * Get price.
   * @returns {number}
   */
  getPrice() {
    return this.getField('price', 0.00);
  }
  
  /**
   * Get formatted_price.
   * @returns {string}
   */
  getFormattedPrice() {
    return this.getField('formatted_price');
  }
  
  /**
   * Get cost.
   * @returns {number}
   */
  getCost() {
    return this.getField('cost', 0.00);
  }
  
  /**
   * Get formatted_cost.
   * @returns {string}
   */
  getFormattedCost() {
    return this.getField('formatted_cost');
  }
  
  /**
   * Get weight.
   * @returns {number}
   */
  getWeight() {
    return this.getField('weight', 0.00);
  }
  
  /**
   * Get active.
   * @returns {boolean}
   */
  getActive() {
    return this.getField('active', false);
  }
  
  /**
   * Get page_title.
   * @returns {string}
   */
  getPageTitle() {
    return this.getField('page_title');
  }
  
  /**
   * Get taxable.
   * @returns {boolean}
   */
  getTaxable() {
    return this.getField('taxable', false);
  }
  
  /**
   * Get dt_created.
   * @returns {number}
   */
  getDateTimeCreated() {
    return this.getTimestampField('dt_created');
  }
  
  /**
   * Get dt_updated.
   * @returns {number}
   */
  getDateTimeUpdated() {
    return this.getTimestampField('dt_updated');
  }
  
  /**
   * Get assigned.
   * @returns {boolean}
   */
  getAssigned() {
    return this.getField('assigned', false);
  }
  
  /**
   * Get disp_order.
   * @returns {number}
   */
  getDisplayOrder() {
    return this.getField('disp_order', 0);
  }
}

module.exports.RelatedProduct = RelatedProduct;