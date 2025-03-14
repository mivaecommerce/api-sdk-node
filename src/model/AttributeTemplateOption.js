/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');
const Decimal = require('decimal.js-light');

/** 
 * AttributeTemplateOption data model.
 * @class
 */
class AttributeTemplateOption extends Model {
  /**
   * AttributeTemplateOption Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);

    if (!util.isNullOrUndefined(this.price))  this.price = new Decimal(this.price);
    if (!util.isNullOrUndefined(this.cost))  this.cost = new Decimal(this.cost);
    if (!util.isNullOrUndefined(this.weight))  this.weight = new Decimal(this.weight);
  }

  /**
   * Get id.
   * @returns {number}
   */
  getId() {
    return this.getField('id', 0);
  }
  
  /**
   * Get attemp_id.
   * @returns {number}
   */
  getAttributeTemplateId() {
    return this.getField('attemp_id', 0);
  }
  
  /**
   * Get attmpat_id.
   * @returns {number}
   */
  getAttributeTemplateAttributeId() {
    return this.getField('attmpat_id', 0);
  }
  
  /**
   * Get disporder.
   * @returns {number}
   */
  getDisplayOrder() {
    if (this.hasField('disporder')) {
      return this.getField('disporder', 0);
    } else if (this.hasField('disp_order')) {
      return this.getField('disp_order', 0);
    }
    return 0;
  }
  
  /**
   * Get code.
   * @returns {string}
   */
  getCode() {
    return this.getField('code');
  }
  
  /**
   * Get prompt.
   * @returns {string}
   */
  getPrompt() {
    return this.getField('prompt');
  }
  
  /**
   * Get price.
   * @returns {Decimal}
   */
  getPrice() {
    return this.getField('price', new Decimal(0.00));
  }
  
  /**
   * Get cost.
   * @returns {Decimal}
   */
  getCost() {
    return this.getField('cost', new Decimal(0.00));
  }
  
  /**
   * Get weight.
   * @returns {Decimal}
   */
  getWeight() {
    return this.getField('weight', new Decimal(0.00));
  }
  
  /**
   * Get image.
   * @returns {string}
   */
  getImage() {
    return this.getField('image');
  }
  
  /**
   * Get formatted_price.
   * @returns {string}
   */
  getFormattedPrice() {
    return this.getField('formatted_price');
  }
  
  /**
   * Get formatted_cost.
   * @returns {string}
   */
  getFormattedCost() {
    return this.getField('formatted_cost');
  }
  
  /**
   * Get formatted_weight.
   * @returns {string}
   */
  getFormattedWeight() {
    return this.getField('formatted_weight');
  }
  
  /**
   * Get default_opt.
   * @returns {boolean}
   */
  getDefaultOpt() {
    return this.getField('default_opt', false);
  }
}

module.exports.AttributeTemplateOption = AttributeTemplateOption;