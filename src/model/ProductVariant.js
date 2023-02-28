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
 * ProductVariant data model.
 * @class
 */
class ProductVariant extends Model {
  /**
   * ProductVariant Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    var i;
    var l;

    super(data);

    if (!util.isUndefined(this.parts) && util.isArray(this.parts)) {
      for (i = 0, l = this.parts.length; i < l; i++) {
        if (!util.isInstanceOf(this.parts[i], models.ProductVariantPart) && util.isObject(data['parts'][i])) {
          this.parts[i] = new models.ProductVariantPart(this.parts[i]);
        } else if (!util.isInstanceOf(this.parts[i], models.ProductVariantPart)) {
          throw new Error(util.format('Expected array of ProductVariantPart or an array of Objects but got %s',
            typeof this.parts[i]));
        }
      }
    } else {
      this.parts = [];
    }

    if (!util.isUndefined(this.dimensions) && util.isArray(this.dimensions)) {
      for (i = 0, l = this.dimensions.length; i < l; i++) {
        if (!util.isInstanceOf(this.dimensions[i], models.ProductVariantDimension) && util.isObject(data['dimensions'][i])) {
          this.dimensions[i] = new models.ProductVariantDimension(this.dimensions[i]);
        } else if (!util.isInstanceOf(this.dimensions[i], models.ProductVariantDimension)) {
          throw new Error(util.format('Expected array of ProductVariantDimension or an array of Objects but got %s',
            typeof this.dimensions[i]));
        }
      }
    } else {
      this.dimensions = [];
    }

    if (!util.isUndefined(this.attributes) && util.isArray(this.attributes)) {
      for (i = 0, l = this.attributes.length; i < l; i++) {
        if (!util.isInstanceOf(this.attributes[i], models.ProductVariantAttribute) && util.isObject(data['attributes'][i])) {
          this.attributes[i] = new models.ProductVariantAttribute(this.attributes[i]);
        } else if (!util.isInstanceOf(this.attributes[i], models.ProductVariantAttribute)) {
          throw new Error(util.format('Expected array of ProductVariantAttribute or an array of Objects but got %s',
            typeof this.attributes[i]));
        }
      }
    } else {
      this.attributes = [];
    }
  }

  /**
   * Get product_id.
   * @returns {number}
   */
  getProductId() {
    return this.getField('product_id', 0);
  }
  
  /**
   * Get variant_id.
   * @returns {number}
   */
  getVariantId() {
    return this.getField('variant_id', 0);
  }
  
  /**
   * Get parts.
   * @returns {ProductVariantPart[]}
   */
  getParts() {
    return this.getField('parts', []);
  }
  
  /**
   * Get dimensions.
   * @returns {ProductVariantDimension[]}
   */
  getDimensions() {
    return this.getField('dimensions', []);
  }
  
  /**
   * Get attributes.
   * @returns {ProductVariantAttribute[]}
   */
  getAttributes() {
    return this.getField('attributes', []);
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
        if (util.isInstanceOf(ret['parts'][i], models.ProductVariantPart)) {
          ret['parts'][i] = ret['parts'][i].toObject();
        }
      }
    }

    if (util.isArray(ret['dimensions'])) {
      for (i = 0, l = ret['dimensions'].length; i < l; i++) {
        if (util.isInstanceOf(ret['dimensions'][i], models.ProductVariantDimension)) {
          ret['dimensions'][i] = ret['dimensions'][i].toObject();
        }
      }
    }

    if (util.isArray(ret['attributes'])) {
      for (i = 0, l = ret['attributes'].length; i < l; i++) {
        if (util.isInstanceOf(ret['attributes'][i], models.ProductVariantAttribute)) {
          ret['attributes'][i] = ret['attributes'][i].toObject();
        }
      }
    }

    return ret;
  }
}

module.exports.ProductVariant = ProductVariant;