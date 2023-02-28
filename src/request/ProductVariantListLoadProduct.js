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
 * Handles API Request ProductVariantList_Load_Product. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/productvariantlist_load_product
 * @class
 */
class ProductVariantListLoadProduct extends Request {
  /**
   * ProductVariantListLoadProduct Constructor.
   * @param {?BaseClient} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client);
    this.function = 'ProductVariantList_Load_Product';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productId = null;
    this.productCode = null;
    this.editProduct = null;
    this.productSku = null;
    this.includeDefaultVariant = null;
    this.limits = [];
    this.exclusions = [];

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
   * Get Product_Code.
   * @returns {string}
   */
  getProductCode() {
    return this.productCode;
  }

  /**
   * Get Edit_Product.
   * @returns {string}
   */
  getEditProduct() {
    return this.editProduct;
  }

  /**
   * Get Product_SKU.
   * @returns {string}
   */
  getProductSku() {
    return this.productSku;
  }

  /**
   * Get Include_Default_Variant.
   * @returns {boolean}
   */
  getIncludeDefaultVariant() {
    return this.includeDefaultVariant;
  }

  /**
   * Get Limits.
   * @returns {ProductVariantLimit[]}
   */
  getLimits() {
    return this.limits;
  }

  /**
   * Get Exclusions.
   * @returns {ProductVariantExclusion[]}
   */
  getExclusions() {
    return this.exclusions;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {ProductVariantListLoadProduct}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {ProductVariantListLoadProduct}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {ProductVariantListLoadProduct}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Product_SKU.
   * @param {string} productSku
   * @returns {ProductVariantListLoadProduct}
   */
  setProductSku(productSku) {
    this.productSku = productSku;
    return this;
  }

  /**
   * Set Include_Default_Variant.
   * @param {boolean} includeDefaultVariant
   * @returns {ProductVariantListLoadProduct}
   */
  setIncludeDefaultVariant(includeDefaultVariant) {
    this.includeDefaultVariant = includeDefaultVariant;
    return this;
  }

  /**
   * Set Limits.
   * @param {ProductVariantLimit[]} limits
   * @throws {Error}
   * @returns {ProductVariantListLoadProduct}
   */
  setLimits(limits) {
    var i;
    var l;

    if (!util.isArray(limits)) {
      throw new Error(util.format('Expected an array but got %s', typeof limits));
    }

    for (i = 0, l = limits.length; i < l; i++) {
      if (!util.isInstanceOf(limits[i], models.ProductVariantLimit) && util.isObject(limits[i])) {
        limits[i] = new models.ProductVariantLimit(limits[i]);
      } else if (!util.isInstanceOf(limits[i], models.ProductVariantLimit)) {
        throw new Error(util.format('Expected instance of ProductVariantLimit or an Object but got %s',
          typeof limits[i]));
      }
    }

    this.limits = limits;
    return this;
  }

  /**
   * Set Exclusions.
   * @param {ProductVariantExclusion[]} exclusions
   * @throws {Error}
   * @returns {ProductVariantListLoadProduct}
   */
  setExclusions(exclusions) {
    var i;
    var l;

    if (!util.isArray(exclusions)) {
      throw new Error(util.format('Expected an array but got %s', typeof exclusions));
    }

    for (i = 0, l = exclusions.length; i < l; i++) {
      if (!util.isInstanceOf(exclusions[i], models.ProductVariantExclusion) && util.isObject(exclusions[i])) {
        exclusions[i] = new models.ProductVariantExclusion(exclusions[i]);
      } else if (!util.isInstanceOf(exclusions[i], models.ProductVariantExclusion)) {
        throw new Error(util.format('Expected instance of ProductVariantExclusion or an Object but got %s',
          typeof exclusions[i]));
      }
    }

    this.exclusions = exclusions;
    return this;
  }

  /**
   * Add Limits.
   * @param {ProductVariantLimit} limit
   * @throws {Error}
   * @returns {ProductVariantListLoadProduct}
   */
  addLimit(limit) {
    if (util.isInstanceOf(limit, models.ProductVariantLimit)) {
      this.limits.push(limit);
    } else if (util.isObject(limit)) {
      this.limits.push(new models.ProductVariantLimit(limit));
    } else {
      throw new Error(util.format('Expected instance of ProductVariantLimit or Object but got %s',
        typeof limit));
    }

    return this;
  }

  /**
   * Add many ProductVariantLimit.
   * @param {ProductVariantLimit[]} limits
   * @throws {Error}
   * @returns {ProductVariantListLoadProduct}
   */
  addLimits(limits) {
    var i;
    var l;

    if (!util.isArray(limits)) {
      throw new Error(util.format('Expecting an array of ProductVariantLimit but got %s',
        typeof limits));
    }

    for (i = 0, l = limits.length; i < l; i++) {
      if (util.isInstanceOf(limits[i], models.ProductVariantLimit)) {
        this.limits.push(limits[i]);
      } else if (util.isObject(limits[i])) {
        this.limits.push(new models.ProductVariantLimit(limits[i]));
      } else {
        throw new Error(util.format('Expected array of ProductVariantLimit or an array of Object but got %s',
          typeof limits[i]));
      }
    }

    return this;
  }

  /**
   * Add Exclusions.
   * @param {ProductVariantExclusion} exclusion
   * @throws {Error}
   * @returns {ProductVariantListLoadProduct}
   */
  addExclusion(exclusion) {
    if (util.isInstanceOf(exclusion, models.ProductVariantExclusion)) {
      this.exclusions.push(exclusion);
    } else if (util.isObject(exclusion)) {
      this.exclusions.push(new models.ProductVariantExclusion(exclusion));
    } else {
      throw new Error(util.format('Expected instance of ProductVariantExclusion or Object but got %s',
        typeof exclusion));
    }

    return this;
  }

  /**
   * Add many ProductVariantExclusion.
   * @param {ProductVariantExclusion[]} exclusions
   * @throws {Error}
   * @returns {ProductVariantListLoadProduct}
   */
  addExclusions(exclusions) {
    var i;
    var l;

    if (!util.isArray(exclusions)) {
      throw new Error(util.format('Expecting an array of ProductVariantExclusion but got %s',
        typeof exclusions));
    }

    for (i = 0, l = exclusions.length; i < l; i++) {
      if (util.isInstanceOf(exclusions[i], models.ProductVariantExclusion)) {
        this.exclusions.push(exclusions[i]);
      } else if (util.isObject(exclusions[i])) {
        this.exclusions.push(new models.ProductVariantExclusion(exclusions[i]));
      } else {
        throw new Error(util.format('Expected array of ProductVariantExclusion or an array of Object but got %s',
          typeof exclusions[i]));
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
    } else if (!util.isNullOrUndefined(this.productCode)) {
      data['Product_Code'] = this.productCode;
    } else if (!util.isNullOrUndefined(this.editProduct)) {
      data['Edit_Product'] = this.editProduct;
    } else if (!util.isNullOrUndefined(this.productSku)) {
      data['Product_SKU'] = this.productSku;
    }

    if (!util.isNullOrUndefined(this.includeDefaultVariant)) {
      data['Include_Default_Variant'] = this.includeDefaultVariant;
    }

    if (util.isArray(this.limits)) {
      data['Limits'] = [];

      for (i = 0, l = this.limits.length; i < l; i++) {
        if (util.isObject(this.limits[i])) {
            data['Limits'].push(this.limits[i].toObject());
        }
      }
    }

    if (util.isArray(this.exclusions)) {
      data['Exclusions'] = [];

      for (i = 0, l = this.exclusions.length; i < l; i++) {
        if (util.isObject(this.exclusions[i])) {
            data['Exclusions'].push(this.exclusions[i].toObject());
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
    return new responses.ProductVariantListLoadProduct(this, httpResponse, data);
  }
}

module.exports.ProductVariantListLoadProduct = ProductVariantListLoadProduct;