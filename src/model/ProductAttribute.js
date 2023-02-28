/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const models = require('./../models');
const { Model } = require('./../abstract');

/** PRODUCT_ATTRIBUTE_TYPE constants. */
/** @ignore */
const PRODUCT_ATTRIBUTE_TYPE_CHECKBOX = 'checkbox';
/** @ignore */
const PRODUCT_ATTRIBUTE_TYPE_RADIO = 'radio';
/** @ignore */
const PRODUCT_ATTRIBUTE_TYPE_TEXT = 'text';
/** @ignore */
const PRODUCT_ATTRIBUTE_TYPE_SELECT = 'select';
/** @ignore */
const PRODUCT_ATTRIBUTE_TYPE_MEMO = 'memo';
/** @ignore */
const PRODUCT_ATTRIBUTE_TYPE_TEMPLATE = 'template';
/** @ignore */
const PRODUCT_ATTRIBUTE_TYPE_SWATCH_SELECT = 'swatch-select';

/** 
 * ProductAttribute data model.
 * @class
 */
class ProductAttribute extends Model {
  /**
   * ProductAttribute Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    var i;
    var l;

    super(data);

    if (!util.isUndefined(this.attributes) && util.isArray(this.attributes)) {
      for (i = 0, l = this.attributes.length; i < l; i++) {
        if (!util.isInstanceOf(this.attributes[i], models.ProductAttribute) && util.isObject(data['attributes'][i])) {
          this.attributes[i] = new models.ProductAttribute(this.attributes[i]);
        } else if (!util.isInstanceOf(this.attributes[i], models.ProductAttribute)) {
          throw new Error(util.format('Expected array of ProductAttribute or an array of Objects but got %s',
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
  }

  /**
   * Constant PRODUCT_ATTRIBUTE_TYPE_CHECKBOX
   * @returns {string}
   * @const
   * @static
   */
  static get PRODUCT_ATTRIBUTE_TYPE_CHECKBOX() {
    return PRODUCT_ATTRIBUTE_TYPE_CHECKBOX;
  }

  /**
   * Constant PRODUCT_ATTRIBUTE_TYPE_RADIO
   * @returns {string}
   * @const
   * @static
   */
  static get PRODUCT_ATTRIBUTE_TYPE_RADIO() {
    return PRODUCT_ATTRIBUTE_TYPE_RADIO;
  }

  /**
   * Constant PRODUCT_ATTRIBUTE_TYPE_TEXT
   * @returns {string}
   * @const
   * @static
   */
  static get PRODUCT_ATTRIBUTE_TYPE_TEXT() {
    return PRODUCT_ATTRIBUTE_TYPE_TEXT;
  }

  /**
   * Constant PRODUCT_ATTRIBUTE_TYPE_SELECT
   * @returns {string}
   * @const
   * @static
   */
  static get PRODUCT_ATTRIBUTE_TYPE_SELECT() {
    return PRODUCT_ATTRIBUTE_TYPE_SELECT;
  }

  /**
   * Constant PRODUCT_ATTRIBUTE_TYPE_MEMO
   * @returns {string}
   * @const
   * @static
   */
  static get PRODUCT_ATTRIBUTE_TYPE_MEMO() {
    return PRODUCT_ATTRIBUTE_TYPE_MEMO;
  }

  /**
   * Constant PRODUCT_ATTRIBUTE_TYPE_TEMPLATE
   * @returns {string}
   * @const
   * @static
   */
  static get PRODUCT_ATTRIBUTE_TYPE_TEMPLATE() {
    return PRODUCT_ATTRIBUTE_TYPE_TEMPLATE;
  }

  /**
   * Constant PRODUCT_ATTRIBUTE_TYPE_SWATCH_SELECT
   * @returns {string}
   * @const
   * @static
   */
  static get PRODUCT_ATTRIBUTE_TYPE_SWATCH_SELECT() {
    return PRODUCT_ATTRIBUTE_TYPE_SWATCH_SELECT;
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
   * @returns {number}
   */
  getPrice() {
    return this.getField('price', 0.00);
  }
  
  /**
   * Get cost.
   * @returns {number}
   */
  getCost() {
    return this.getField('cost', 0.00);
  }
  
  /**
   * Get weight.
   * @returns {number}
   */
  getWeight() {
    return this.getField('weight', 0.00);
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
   * @returns {ProductAttribute[]}
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
   * @override
   */
  toObject() {
    var i;
    var l;
    var ret = Object.assign(this);

    if (util.isArray(ret['attributes'])) {
      for (i = 0, l = ret['attributes'].length; i < l; i++) {
        if (util.isInstanceOf(ret['attributes'][i], models.ProductAttribute)) {
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

    return ret;
  }
}

module.exports.ProductAttribute = ProductAttribute;