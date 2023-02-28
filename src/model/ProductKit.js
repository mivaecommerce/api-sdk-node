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
 * ProductKit data model.
 * @class
 */
class ProductKit extends Model {
  /**
   * ProductKit Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    var i;
    var l;

    super(data);

    if (!util.isUndefined(this.parts) && util.isArray(this.parts)) {
      for (i = 0, l = this.parts.length; i < l; i++) {
        if (!util.isInstanceOf(this.parts[i], models.ProductKitPart) && util.isObject(data['parts'][i])) {
          this.parts[i] = new models.ProductKitPart(this.parts[i]);
        } else if (!util.isInstanceOf(this.parts[i], models.ProductKitPart)) {
          throw new Error(util.format('Expected array of ProductKitPart or an array of Objects but got %s',
            typeof this.parts[i]));
        }
      }
    } else {
      this.parts = [];
    }
  }

  /**
   * Get attr_id.
   * @returns {number}
   */
  getAttributeId() {
    return this.getField('attr_id', 0);
  }
  
  /**
   * Get attr_type.
   * @returns {string}
   */
  getAttributeType() {
    return this.getField('attr_type');
  }
  
  /**
   * Get attr_code.
   * @returns {string}
   */
  getAttributeCode() {
    return this.getField('attr_code');
  }
  
  /**
   * Get attr_prompt.
   * @returns {string}
   */
  getAttributePrompt() {
    return this.getField('attr_prompt');
  }
  
  /**
   * Get attmpat_id.
   * @returns {number}
   */
  getAttributeTemplateAttributeId() {
    return this.getField('attmpat_id', 0);
  }
  
  /**
   * Get option_id.
   * @returns {number}
   */
  getOptionId() {
    return this.getField('option_id', 0);
  }
  
  /**
   * Get option_code.
   * @returns {string}
   */
  getOptionCode() {
    return this.getField('option_code');
  }
  
  /**
   * Get option_prompt.
   * @returns {string}
   */
  getOptionPrompt() {
    return this.getField('option_prompt');
  }
  
  /**
   * Get option_disp_order.
   * @returns {number}
   */
  getOptionDisplayOrder() {
    return this.getField('option_disp_order', 0);
  }
  
  /**
   * Get parts.
   * @returns {ProductKitPart[]}
   */
  getParts() {
    return this.getField('parts', []);
  }
  
  /**
   * @override
   */
  toObject() {
    var i;
    var l;
    var ret = Object.assign(this);

    if (util.isArray(ret['parts'])) {
      for (i = 0, l = ret['parts'].length; i < l; i++) {
        if (util.isInstanceOf(ret['parts'][i], models.ProductKitPart)) {
          ret['parts'][i] = ret['parts'][i].toObject();
        }
      }
    }

    return ret;
  }
}

module.exports.ProductKit = ProductKit;