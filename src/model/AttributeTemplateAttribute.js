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

/** TEMPLATE_ATTRIBUTE_TYPE constants. */
/** @ignore */
const TEMPLATE_ATTRIBUTE_TYPE_CHECKBOX = 'checkbox';
/** @ignore */
const TEMPLATE_ATTRIBUTE_TYPE_RADIO = 'radio';
/** @ignore */
const TEMPLATE_ATTRIBUTE_TYPE_TEXT = 'text';
/** @ignore */
const TEMPLATE_ATTRIBUTE_TYPE_SELECT = 'select';
/** @ignore */
const TEMPLATE_ATTRIBUTE_TYPE_MEMO = 'memo';
/** @ignore */
const TEMPLATE_ATTRIBUTE_TYPE_TEMPLATE = 'template';
/** @ignore */
const TEMPLATE_ATTRIBUTE_TYPE_SWATCH_SELECT = 'swatch-select';

/** 
 * AttributeTemplateAttribute data model.
 * @class
 */
class AttributeTemplateAttribute extends Model {
  /**
   * AttributeTemplateAttribute Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    var i;
    var l;

    super(data);

    if (!util.isUndefined(this.options) && util.isArray(this.options)) {
      for (i = 0, l = this.options.length; i < l; i++) {
        if (!util.isInstanceOf(this.options[i], models.AttributeTemplateOption) && util.isObject(data['options'][i])) {
          this.options[i] = new models.AttributeTemplateOption(this.options[i]);
        } else if (!util.isInstanceOf(this.options[i], models.AttributeTemplateOption)) {
          throw new Error(util.format('Expected array of AttributeTemplateOption or an array of Objects but got %s',
            typeof this.options[i]));
        }
      }
    } else {
      this.options = [];
    }

    if (!util.isNullOrUndefined(this.price))  this.price = new Decimal(this.price);
    if (!util.isNullOrUndefined(this.cost))  this.cost = new Decimal(this.cost);
    if (!util.isNullOrUndefined(this.weight))  this.weight = new Decimal(this.weight);
  }

  /**
   * Constant TEMPLATE_ATTRIBUTE_TYPE_CHECKBOX
   * @returns {string}
   * @const
   * @static
   */
  static get TEMPLATE_ATTRIBUTE_TYPE_CHECKBOX() {
    return TEMPLATE_ATTRIBUTE_TYPE_CHECKBOX;
  }

  /**
   * Constant TEMPLATE_ATTRIBUTE_TYPE_RADIO
   * @returns {string}
   * @const
   * @static
   */
  static get TEMPLATE_ATTRIBUTE_TYPE_RADIO() {
    return TEMPLATE_ATTRIBUTE_TYPE_RADIO;
  }

  /**
   * Constant TEMPLATE_ATTRIBUTE_TYPE_TEXT
   * @returns {string}
   * @const
   * @static
   */
  static get TEMPLATE_ATTRIBUTE_TYPE_TEXT() {
    return TEMPLATE_ATTRIBUTE_TYPE_TEXT;
  }

  /**
   * Constant TEMPLATE_ATTRIBUTE_TYPE_SELECT
   * @returns {string}
   * @const
   * @static
   */
  static get TEMPLATE_ATTRIBUTE_TYPE_SELECT() {
    return TEMPLATE_ATTRIBUTE_TYPE_SELECT;
  }

  /**
   * Constant TEMPLATE_ATTRIBUTE_TYPE_MEMO
   * @returns {string}
   * @const
   * @static
   */
  static get TEMPLATE_ATTRIBUTE_TYPE_MEMO() {
    return TEMPLATE_ATTRIBUTE_TYPE_MEMO;
  }

  /**
   * Constant TEMPLATE_ATTRIBUTE_TYPE_TEMPLATE
   * @returns {string}
   * @const
   * @static
   */
  static get TEMPLATE_ATTRIBUTE_TYPE_TEMPLATE() {
    return TEMPLATE_ATTRIBUTE_TYPE_TEMPLATE;
  }

  /**
   * Constant TEMPLATE_ATTRIBUTE_TYPE_SWATCH_SELECT
   * @returns {string}
   * @const
   * @static
   */
  static get TEMPLATE_ATTRIBUTE_TYPE_SWATCH_SELECT() {
    return TEMPLATE_ATTRIBUTE_TYPE_SWATCH_SELECT;
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
   * Get options.
   * @returns {AttributeTemplateOption[]}
   */
  getOptions() {
    return this.getField('options', []);
  }
  
  /**
   * @override
   */
  toObject() {
    var i;
    var l;
    var ret = Object.assign(this);

    if (util.isArray(ret['options'])) {
      for (i = 0, l = ret['options'].length; i < l; i++) {
        if (util.isInstanceOf(ret['options'][i], models.AttributeTemplateOption)) {
          ret['options'][i] = ret['options'][i].toObject();
        }
      }
    }

    return ret;
  }
}

module.exports.AttributeTemplateAttribute = AttributeTemplateAttribute;