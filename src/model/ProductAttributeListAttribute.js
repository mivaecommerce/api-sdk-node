/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const models = require('./../models');
const { Model } = require('./../abstract');
const Decimal = require('decimal.js-light');

/** 
 * ProductAttributeListAttribute data model.
 * @class
 */
class ProductAttributeListAttribute extends Model {
  /**
   * ProductAttributeListAttribute Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    var i;
    var l;

    super(data);

    if (!util.isUndefined(this.attributes) && util.isArray(this.attributes)) {
      for (i = 0, l = this.attributes.length; i < l; i++) {
        if (!util.isInstanceOf(this.attributes[i], models.ProductAttributeListAttribute) && util.isObject(data['attributes'][i])) {
          this.attributes[i] = new models.ProductAttributeListAttribute(this.attributes[i]);
        } else if (!util.isInstanceOf(this.attributes[i], models.ProductAttributeListAttribute)) {
          throw new Error(util.format('Expected array of ProductAttributeListAttribute or an array of Objects but got %s',
            typeof this.attributes[i]));
        }
      }
    } else {
      this.attributes = [];
    }

    if (!util.isUndefined(this.options) && util.isArray(this.options)) {
      for (i = 0, l = this.options.length; i < l; i++) {
        if (!util.isInstanceOf(this.options[i], models.ProductOption) && util.isObject(data['options'][i])) {
          this.options[i] = new models.ProductOption(this.options[i]);
        } else if (!util.isInstanceOf(this.options[i], models.ProductOption)) {
          throw new Error(util.format('Expected array of ProductOption or an array of Objects but got %s',
            typeof this.options[i]));
        }
      }
    } else {
      this.options = [];
    }

    if (!util.isUndefined(this.template)) {
      if (!util.isInstanceOf(this.template, models.ProductAttributeListTemplate) && util.isObject(this.template)) {
        this.template = new models.ProductAttributeListTemplate(this.template);
      } else if (!util.isInstanceOf(this.template, models.ProductAttributeListTemplate)) {
        throw new Error(util.format('Expected ProductAttributeListTemplate or an Object but got %s',
          typeof this.template));
      }
    } else {
      this.template = {};
    }

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
   * Get product_id.
   * @returns {number}
   */
  getProductId() {
    return this.getField('product_id', 0);
  }
  
  /**
   * Get default_id.
   * @returns {number}
   */
  getDefaultId() {
    return this.getField('default_id', 0);
  }
  
  /**
   * Get disp_order.
   * @returns {number}
   */
  getDisplayOrder() {
    if (this.hasField('disp_order')) {
      return this.getField('disp_order', 0);
    } else if (this.hasField('disporder')) {
      return this.getField('disporder', 0);
    }
    return 0;
  }
  
  /**
   * Get attemp_id.
   * @returns {number}
   */
  getAttributeTemplateId() {
    return this.getField('attemp_id', 0);
  }
  
  /**
   * Get code.
   * @returns {string}
   */
  getCode() {
    return this.getField('code');
  }
  
  /**
   * Get type.
   * @returns {string}
   */
  getType() {
    return this.getField('type');
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
   * Get formatted_price.
   * @returns {string}
   */
  getFormattedPrice() {
    return this.getField('formatted_price');
  }
  
  /**
   * Get cost.
   * @returns {Decimal}
   */
  getCost() {
    return this.getField('cost', new Decimal(0.00));
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
   * @returns {Decimal}
   */
  getWeight() {
    return this.getField('weight', new Decimal(0.00));
  }
  
  /**
   * Get formatted_weight.
   * @returns {string}
   */
  getFormattedWeight() {
    return this.getField('formatted_weight');
  }
  
  /**
   * Get required.
   * @returns {boolean}
   */
  getRequired() {
    return this.getField('required', false);
  }
  
  /**
   * Get inventory.
   * @returns {boolean}
   */
  getInventory() {
    return this.getField('inventory', false);
  }
  
  /**
   * Get image.
   * @returns {string}
   */
  getImage() {
    return this.getField('image');
  }
  
  /**
   * Get attributes.
   * @returns {ProductAttributeListAttribute[]}
   */
  getTemplateAttributes() {
    return this.getField('attributes', []);
  }
  
  /**
   * Get options.
   * @returns {ProductOption[]}
   */
  getOptions() {
    return this.getField('options', []);
  }
  
  /**
   * Get has_variant_parts.
   * @returns {boolean}
   */
  getHasVariantParts() {
    return this.getField('has_variant_parts', false);
  }
  
  /**
   * Get template.
   * @returns {ProductAttributeListTemplate|*}
   */
  getTemplate() {
    return this.getField('template', null);
  }
  
  /**
   * @override
   */
  toObject() {
    var i;
    var l;
    var ret = Object.assign(this);

    if (util.isArray(ret['attributes'])) {
      for (i = 0, l = ret['attributes'].length; i < l; i++) {
        if (util.isInstanceOf(ret['attributes'][i], models.ProductAttributeListAttribute)) {
          ret['attributes'][i] = ret['attributes'][i].toObject();
        }
      }
    }

    if (util.isArray(ret['options'])) {
      for (i = 0, l = ret['options'].length; i < l; i++) {
        if (util.isInstanceOf(ret['options'][i], models.ProductOption)) {
          ret['options'][i] = ret['options'][i].toObject();
        }
      }
    }

    if (util.isInstanceOf(ret['template'], models.ProductAttributeListTemplate)) {
      ret['template'] = ret['template'].toObject();
    }

    return ret;
  }
}

module.exports.ProductAttributeListAttribute = ProductAttributeListAttribute;