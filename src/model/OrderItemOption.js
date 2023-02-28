/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const models = require('./../models');
const { Model } = require('./../abstract');

/** 
 * OrderItemOption data model.
 * @class
 */
class OrderItemOption extends Model {
  /**
   * OrderItemOption Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    var i;
    var l;

    super(data);

    if (!util.isUndefined(this.discounts) && util.isArray(this.discounts)) {
      for (i = 0, l = this.discounts.length; i < l; i++) {
        if (!util.isInstanceOf(this.discounts[i], models.OrderItemOptionDiscount) && util.isObject(data['discounts'][i])) {
          this.discounts[i] = new models.OrderItemOptionDiscount(this.discounts[i]);
        } else if (!util.isInstanceOf(this.discounts[i], models.OrderItemOptionDiscount)) {
          throw new Error(util.format('Expected array of OrderItemOptionDiscount or an array of Objects but got %s',
            typeof this.discounts[i]));
        }
      }
    } else {
      this.discounts = [];
    }
  }

  /**
   * Get id.
   * @returns {number}
   */
  getId() {
    return this.getField('id', 0);
  }
  
  /**
   * Get order_id.
   * @returns {number}
   */
  getOrderId() {
    return this.getField('order_id', 0);
  }
  
  /**
   * Get line_id.
   * @returns {number}
   */
  getLineId() {
    return this.getField('line_id', 0);
  }
  
  /**
   * Get option_id.
   * @returns {number}
   */
  getOptionId() {
    return this.getField('option_id', 0);
  }
  
  /**
   * Get opt_code.
   * @returns {string}
   */
  getOptionCode() {
    return this.getField('opt_code');
  }
  
  /**
   * Get attr_code.
   * @returns {string}
   */
  getAttributeCode() {
    return this.getField('attr_code');
  }
  
  /**
   * Get attr_id.
   * @returns {number}
   */
  getAttributeId() {
    return this.getField('attr_id', 0);
  }
  
  /**
   * Get attmpat_id.
   * @returns {number}
   */
  getAttributeTemplateAttributeId() {
    return this.getField('attmpat_id', 0);
  }
  
  /**
   * Get value.
   * @returns {string}
   */
  getValue() {
    return this.getField('value');
  }
  
  /**
   * Get weight.
   * @returns {number}
   */
  getWeight() {
    return this.getField('weight', 0.00);
  }
  
  /**
   * Get retail.
   * @returns {number}
   */
  getRetail() {
    return this.getField('retail', 0.00);
  }
  
  /**
   * Get base_price.
   * @returns {number}
   */
  getBasePrice() {
    return this.getField('base_price', 0.00);
  }
  
  /**
   * Get price.
   * @returns {number}
   */
  getPrice() {
    return this.getField('price', 0.00);
  }
  
  /**
   * Get data.
   * @returns {string}
   */
  getOptionData() {
    return this.getField('data');
  }
  
  /**
   * Get data_long.
   * @returns {string}
   */
  getOptionDataLong() {
    return this.getField('data_long');
  }
  
  /**
   * Get attr_prompt.
   * @returns {string}
   */
  getAttributePrompt() {
    return this.getField('attr_prompt');
  }
  
  /**
   * Get opt_prompt.
   * @returns {string}
   */
  getOptionPrompt() {
    return this.getField('opt_prompt');
  }
  
  /**
   * Get discounts.
   * @returns {OrderItemOptionDiscount[]}
   */
  getDiscounts() {
    return this.getField('discounts', []);
  }
  
  /**
   * Set attr_code.
   * @param {string} attributeCode
   * @returns {OrderItemOption}
   */
  setAttributeCode(attributeCode) {
    return this.setField('attr_code', attributeCode);
  }

  /**
   * Set attr_id.
   * @param {number} attributeId
   * @returns {OrderItemOption}
   */
  setAttributeId(attributeId) {
    return this.setField('attr_id', attributeId);
  }

  /**
   * Set attmpat_id.
   * @param {number} attributeTemplateAttributeId
   * @returns {OrderItemOption}
   */
  setAttributeTemplateAttributeId(attributeTemplateAttributeId) {
    return this.setField('attmpat_id', attributeTemplateAttributeId);
  }

  /**
   * Set value.
   * @param {string} value
   * @returns {OrderItemOption}
   */
  setValue(value) {
    return this.setField('value', value);
  }

  /**
   * Set weight.
   * @param {number} weight
   * @returns {OrderItemOption}
   */
  setWeight(weight) {
    return this.setField('weight', weight);
  }

  /**
   * Set retail.
   * @param {number} retail
   * @returns {OrderItemOption}
   */
  setRetail(retail) {
    return this.setField('retail', retail);
  }

  /**
   * Set base_price.
   * @param {number} basePrice
   * @returns {OrderItemOption}
   */
  setBasePrice(basePrice) {
    return this.setField('base_price', basePrice);
  }

  /**
   * Set price.
   * @param {number} price
   * @returns {OrderItemOption}
   */
  setPrice(price) {
    return this.setField('price', price);
  }
  
  /**
   * @override
   */
  toObject() {
    var ret = {};
    
    if (this.hasField('attr_code')) {
      ret['attr_code'] = this.getField('attr_code');
    }
    
    if (this.hasField('opt_code_or_data')) {
      ret['opt_code_or_data'] = this.getField('opt_code_or_data');
    }
    
    if (this.hasField('attr_id')) {
      ret['attr_id'] = this.getField('attr_id');
    }
    
    if (this.hasField('attmpat_id')) {
      ret['attmpat_id'] = this.getField('attmpat_id');
    }

    if (this.hasField('value')) {
      ret['opt_code_or_data'] = this.getField('value');
    }

    if (this.hasField('price')) {
      ret['price'] = this.getField('price');
    }

    if (this.hasField('weight')) {
      ret['weight'] = this.getField('weight');
    }

    if (this.hasField('base_price')) {
      ret['base_price'] = this.getField('base_price');
    }

    if (this.hasField('retail')) {
      ret['retail'] = this.getField('retail');
    }

    return ret;
  }
}

module.exports.OrderItemOption = OrderItemOption;