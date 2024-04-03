/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const models = require('./../models');
const responses = require('./../responses');
const { Request }  = require('./../abstract');

/** 
 * Handles API Request ProductShippingRules_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/productshippingrules_update
 * @class
 */
class ProductShippingRulesUpdate extends Request {
  /**
   * ProductShippingRulesUpdate Constructor.
   * @param {?BaseClient} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client);
    this.function = 'ProductShippingRules_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productId = null;
    this.editProduct = null;
    this.productCode = null;
    this.productSku = null;
    this.shipsInOwnPackaging = null;
    this.limitShippingMethods = null;
    this.width = null;
    this.length = null;
    this.height = null;
    this.shippingMethods = [];

    if (util.isInstanceOf(product, models.Product)) {
      if (product.getId()) {
        this.setProductId(product.getId());
      } else if (product.getCode()) {
        this.setEditProduct(product.getCode());
      } else if (product.getSku()) {
        this.setProductSku(product.getSku());
      }
    }
  }

  /**
   * Get Product_ID.
   * @returns {number}
   */
  getProductId() {
    return this.productId;
  }

  /**
   * Get Edit_Product.
   * @returns {string}
   */
  getEditProduct() {
    return this.editProduct;
  }

  /**
   * Get Product_Code.
   * @returns {string}
   */
  getProductCode() {
    return this.productCode;
  }

  /**
   * Get Product_SKU.
   * @returns {string}
   */
  getProductSku() {
    return this.productSku;
  }

  /**
   * Get ShipsInOwnPackaging.
   * @returns {boolean}
   */
  getShipsInOwnPackaging() {
    return this.shipsInOwnPackaging;
  }

  /**
   * Get LimitShippingMethods.
   * @returns {boolean}
   */
  getLimitShippingMethods() {
    return this.limitShippingMethods;
  }

  /**
   * Get Width.
   * @returns {number}
   */
  getWidth() {
    return this.width;
  }

  /**
   * Get Length.
   * @returns {number}
   */
  getLength() {
    return this.length;
  }

  /**
   * Get Height.
   * @returns {number}
   */
  getHeight() {
    return this.height;
  }

  /**
   * Get ShippingMethods.
   * @returns {ShippingRuleMethod[]}
   */
  getShippingMethods() {
    return this.shippingMethods;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {ProductShippingRulesUpdate}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {ProductShippingRulesUpdate}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {ProductShippingRulesUpdate}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Product_SKU.
   * @param {string} productSku
   * @returns {ProductShippingRulesUpdate}
   */
  setProductSku(productSku) {
    this.productSku = productSku;
    return this;
  }

  /**
   * Set ShipsInOwnPackaging.
   * @param {boolean} shipsInOwnPackaging
   * @returns {ProductShippingRulesUpdate}
   */
  setShipsInOwnPackaging(shipsInOwnPackaging) {
    this.shipsInOwnPackaging = shipsInOwnPackaging;
    return this;
  }

  /**
   * Set LimitShippingMethods.
   * @param {boolean} limitShippingMethods
   * @returns {ProductShippingRulesUpdate}
   */
  setLimitShippingMethods(limitShippingMethods) {
    this.limitShippingMethods = limitShippingMethods;
    return this;
  }

  /**
   * Set Width.
   * @param {number} width
   * @returns {ProductShippingRulesUpdate}
   */
  setWidth(width) {
    this.width = width;
    return this;
  }

  /**
   * Set Length.
   * @param {number} length
   * @returns {ProductShippingRulesUpdate}
   */
  setLength(length) {
    this.length = length;
    return this;
  }

  /**
   * Set Height.
   * @param {number} height
   * @returns {ProductShippingRulesUpdate}
   */
  setHeight(height) {
    this.height = height;
    return this;
  }

  /**
   * Set ShippingMethods.
   * @param {ShippingRuleMethod[]} shippingMethods
   * @throws {Error}
   * @returns {ProductShippingRulesUpdate}
   */
  setShippingMethods(shippingMethods) {
    var i;
    var l;

    if (!util.isArray(shippingMethods)) {
      throw new Error(util.format('Expected an array but got %s', typeof shippingMethods));
    }

    for (i = 0, l = shippingMethods.length; i < l; i++) {
      if (!util.isInstanceOf(shippingMethods[i], models.ShippingRuleMethod) && util.isObject(shippingMethods[i])) {
        shippingMethods[i] = new models.ShippingRuleMethod(shippingMethods[i]);
      } else if (!util.isInstanceOf(shippingMethods[i], models.ShippingRuleMethod)) {
        throw new Error(util.format('Expected instance of ShippingRuleMethod or an Object but got %s',
          typeof shippingMethods[i]));
      }
    }

    this.shippingMethods = shippingMethods;
    return this;
  }

  /**
   * Add ShippingMethods.
   * @param {ShippingRuleMethod} shippingMethod
   * @throws {Error}
   * @returns {ProductShippingRulesUpdate}
   */
  addShippingMethod(shippingMethod) {
    if (util.isInstanceOf(shippingMethod, models.ShippingRuleMethod)) {
      this.shippingMethods.push(shippingMethod);
    } else if (util.isObject(shippingMethod)) {
      this.shippingMethods.push(new models.ShippingRuleMethod(shippingMethod));
    } else {
      throw new Error(util.format('Expected instance of ShippingRuleMethod or Object but got %s',
        typeof shippingMethod));
    }

    return this;
  }

  /**
   * Add many ShippingRuleMethod.
   * @param {ShippingRuleMethod[]} shippingMethods
   * @throws {Error}
   * @returns {ProductShippingRulesUpdate}
   */
  addShippingMethods(shippingMethods) {
    var i;
    var l;

    if (!util.isArray(shippingMethods)) {
      throw new Error(util.format('Expecting an array of ShippingRuleMethod but got %s',
        typeof shippingMethods));
    }

    for (i = 0, l = shippingMethods.length; i < l; i++) {
      if (util.isInstanceOf(shippingMethods[i], models.ShippingRuleMethod)) {
        this.shippingMethods.push(shippingMethods[i]);
      } else if (util.isObject(shippingMethods[i])) {
        this.shippingMethods.push(new models.ShippingRuleMethod(shippingMethods[i]));
      } else {
        throw new Error(util.format('Expected array of ShippingRuleMethod or an array of Object but got %s',
          typeof shippingMethods[i]));
      }
    }

    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var i;
    var l;
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.productId)) {
      data['Product_ID'] = this.productId;
    } else if (!util.isNullOrUndefined(this.editProduct)) {
      data['Edit_Product'] = this.editProduct;
    } else if (!util.isNullOrUndefined(this.productCode)) {
      data['Product_Code'] = this.productCode;
    } else if (!util.isNullOrUndefined(this.productSku)) {
      data['Product_SKU'] = this.productSku;
    }

    if (!util.isNullOrUndefined(this.shipsInOwnPackaging)) {
      data['ShipsInOwnPackaging'] = this.shipsInOwnPackaging;
    }

    if (!util.isNullOrUndefined(this.limitShippingMethods)) {
      data['LimitShippingMethods'] = this.limitShippingMethods;
    }

    if (!util.isNullOrUndefined(this.width)) {
      data['Width'] = this.width;
    }

    if (!util.isNullOrUndefined(this.length)) {
      data['Length'] = this.length;
    }

    if (!util.isNullOrUndefined(this.height)) {
      data['Height'] = this.height;
    }

    if (util.isArray(this.shippingMethods)) {
      data['ShippingMethods'] = [];

      for (i = 0, l = this.shippingMethods.length; i < l; i++) {
        if (util.isObject(this.shippingMethods[i])) {
            data['ShippingMethods'].push(this.shippingMethods[i].toObject());
        }
      }
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ProductShippingRulesUpdate(this, httpResponse, data);
  }
}

module.exports.ProductShippingRulesUpdate = ProductShippingRulesUpdate;