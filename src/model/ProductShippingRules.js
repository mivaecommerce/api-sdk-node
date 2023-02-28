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
 * ProductShippingRules data model.
 * @class
 */
class ProductShippingRules extends Model {
  /**
   * ProductShippingRules Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    var i;
    var l;

    super(data);

    if (!util.isUndefined(this.methods) && util.isArray(this.methods)) {
      for (i = 0, l = this.methods.length; i < l; i++) {
        if (!util.isInstanceOf(this.methods[i], models.ProductShippingMethod) && util.isObject(data['methods'][i])) {
          this.methods[i] = new models.ProductShippingMethod(this.methods[i]);
        } else if (!util.isInstanceOf(this.methods[i], models.ProductShippingMethod)) {
          throw new Error(util.format('Expected array of ProductShippingMethod or an array of Objects but got %s',
            typeof this.methods[i]));
        }
      }
    } else {
      this.methods = [];
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
   * Get ownpackage.
   * @returns {boolean}
   */
  getOwnPackage() {
    return this.getField('ownpackage', false);
  }
  
  /**
   * Get width.
   * @returns {number}
   */
  getWidth() {
    return this.getField('width', 0.00);
  }
  
  /**
   * Get length.
   * @returns {number}
   */
  getLength() {
    return this.getField('length', 0.00);
  }
  
  /**
   * Get height.
   * @returns {number}
   */
  getHeight() {
    return this.getField('height', 0.00);
  }
  
  /**
   * Get limitmeths.
   * @returns {boolean}
   */
  getLimitMethods() {
    return this.getField('limitmeths', false);
  }
  
  /**
   * Get methods.
   * @returns {ProductShippingMethod[]}
   */
  getMethods() {
    return this.getField('methods', []);
  }
  
  /**
   * @override
   */
  toObject() {
    var i;
    var l;
    var ret = Object.assign(this);

    if (util.isArray(ret['methods'])) {
      for (i = 0, l = ret['methods'].length; i < l; i++) {
        if (util.isInstanceOf(ret['methods'][i], models.ProductShippingMethod)) {
          ret['methods'][i] = ret['methods'][i].toObject();
        }
      }
    }

    return ret;
  }
}

module.exports.ProductShippingRules = ProductShippingRules;