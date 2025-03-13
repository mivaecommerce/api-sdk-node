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
 * OrderProduct data model.
 * @class
 */
class OrderProduct extends Model {
  /**
   * OrderProduct Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    var i;
    var l;

    super(data);

    if (!util.isUndefined(this.attributes) && util.isArray(this.attributes)) {
      for (i = 0, l = this.attributes.length; i < l; i++) {
        if (!util.isInstanceOf(this.attributes[i], models.OrderProductAttribute) && util.isObject(data['attributes'][i])) {
          this.attributes[i] = new models.OrderProductAttribute(this.attributes[i]);
        } else if (!util.isInstanceOf(this.attributes[i], models.OrderProductAttribute)) {
          throw new Error(util.format('Expected array of OrderProductAttribute or an array of Objects but got %s',
            typeof this.attributes[i]));
        }
      }
    } else {
      this.attributes = [];
    }
  }

  /**
   * Get status.
   * @returns {number}
   */
  getStatus() {
    return this.getField('status', 0);
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
   * Get tracknum.
   * @returns {string}
   */
  getTrackingNumber() {
    return this.getField('tracknum');
  }
  
  /**
   * Get tracktype.
   * @returns {string}
   */
  getTrackingType() {
    return this.getField('tracktype');
  }
  
  /**
   * Get quantity.
   * @returns {number}
   */
  getQuantity() {
    return this.getField('quantity', 0);
  }
  
  /**
   * Get tax.
   * @returns {number}
   */
  getTax() {
    return this.getField('tax', 0.00);
  }
  
  /**
   * Get attributes.
   * @returns {OrderProductAttribute[]}
   */
  getAttributes() {
    return this.getField('attributes', []);
  }
  
  /**
   * Set status.
   * @param {number} status
   * @returns {OrderProduct}
   */
  setStatus(status) {
    return this.setField('status', status);
  }

  /**
   * Set code.
   * @param {string} code
   * @returns {OrderProduct}
   */
  setCode(code) {
    return this.setField('code', code);
  }

  /**
   * Set sku.
   * @param {string} sku
   * @returns {OrderProduct}
   */
  setSku(sku) {
    return this.setField('sku', sku);
  }

  /**
   * Set tracknum.
   * @param {string} trackingNumber
   * @returns {OrderProduct}
   */
  setTrackingNumber(trackingNumber) {
    return this.setField('tracknum', trackingNumber);
  }

  /**
   * Set tracktype.
   * @param {string} trackingType
   * @returns {OrderProduct}
   */
  setTrackingType(trackingType) {
    return this.setField('tracktype', trackingType);
  }

  /**
   * Set quantity.
   * @param {number} quantity
   * @returns {OrderProduct}
   */
  setQuantity(quantity) {
    return this.setField('quantity', quantity);
  }

  /**
   * Set tax.
   * @param {number} tax
   * @returns {OrderProduct}
   */
  setTax(tax) {
    return this.setField('tax', tax);
  }

  /**
   * Set attributes.
   * @param {OrderProductAttribute[]} attributes
   * @throws {Error}
   * @returns {OrderProduct}
   */
  setAttributes(attributes) {
    var i;
    var l;

    if (!util.isArray(attributes)) {
      throw new Error(util.format('Expected an array but got %s', typeof attributes));
    }

    for (i = 0, l = attributes.length; i < l; i++) {
      if (util.isInstanceOf(attributes[i], models.OrderProductAttribute)) {
          continue;
      } else if (util.isObject(attributes[i])) {
          attributes[i] = new models.OrderProductAttribute(attributes[i]);
      } else {
        throw new Error(util.format('Expected instance of OrderProductAttribute, Object, or null but got %s at offset %d',
          typeof attributes[i], i));
      }
    }

    return this.setField('attributes', attributes);
  }

  /**
   * Add a OrderProductAttribute.
   * @param {OrderProductAttribute} attribute
   * @returns {OrderProduct}
   */
  addAttribute(attribute) {
    if (!util.isInstanceOf(attribute, models.OrderProductAttribute)) {
      throw new Error(util.format('Expected instance of OrderProductAttribute but got %s', typeof attribute));
    }

    if (util.isUndefined(this['attributes'])) {
      this['attributes'] = [];
    }

    this['attributes'].push(attribute);

    return this;
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
        if (util.isInstanceOf(ret['attributes'][i], models.OrderProductAttribute)) {
          ret['attributes'][i] = ret['attributes'][i].toObject();
        }
      }
    }

    return ret;
  }
}

module.exports.OrderProduct = OrderProduct;