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

/** VARIANT_PRICING_METHOD constants. */
/** @ignore */
const VARIANT_PRICING_METHOD_MASTER = 'master';
/** @ignore */
const VARIANT_PRICING_METHOD_SPECIFIC = 'specific';
/** @ignore */
const VARIANT_PRICING_METHOD_SUM = 'sum';

/** 
 * Handles API Request ProductVariantPricing_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/productvariantpricing_update
 * @class
 */
class ProductVariantPricingUpdate extends Request {
  /**
   * ProductVariantPricingUpdate Constructor.
   * @param {?BaseClient} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client);
    this.function = 'ProductVariantPricing_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productId = null;
    this.editProduct = null;
    this.productCode = null;
    this.productSku = null;
    this.variantId = null;
    this.method = null;
    this.price = null;
    this.cost = null;
    this.weight = null;

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
   * Constant VARIANT_PRICING_METHOD_MASTER
   * @returns {string}
   * @const
   * @static
   */
  static get VARIANT_PRICING_METHOD_MASTER() {
    return VARIANT_PRICING_METHOD_MASTER;
  }

  /**
   * Constant VARIANT_PRICING_METHOD_SPECIFIC
   * @returns {string}
   * @const
   * @static
   */
  static get VARIANT_PRICING_METHOD_SPECIFIC() {
    return VARIANT_PRICING_METHOD_SPECIFIC;
  }

  /**
   * Constant VARIANT_PRICING_METHOD_SUM
   * @returns {string}
   * @const
   * @static
   */
  static get VARIANT_PRICING_METHOD_SUM() {
    return VARIANT_PRICING_METHOD_SUM;
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
   * Get Variant_ID.
   * @returns {number}
   */
  getVariantId() {
    return this.variantId;
  }

  /**
   * Get Method.
   * @returns {string}
   */
  getMethod() {
    return this.method;
  }

  /**
   * Get Price.
   * @returns {number}
   */
  getPrice() {
    return this.price;
  }

  /**
   * Get Cost.
   * @returns {number}
   */
  getCost() {
    return this.cost;
  }

  /**
   * Get Weight.
   * @returns {number}
   */
  getWeight() {
    return this.weight;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {ProductVariantPricingUpdate}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {ProductVariantPricingUpdate}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {ProductVariantPricingUpdate}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Product_SKU.
   * @param {string} productSku
   * @returns {ProductVariantPricingUpdate}
   */
  setProductSku(productSku) {
    this.productSku = productSku;
    return this;
  }

  /**
   * Set Variant_ID.
   * @param {number} variantId
   * @returns {ProductVariantPricingUpdate}
   */
  setVariantId(variantId) {
    this.variantId = variantId;
    return this;
  }

  /**
   * Set Method.
   * @param {string} method
   * @returns {ProductVariantPricingUpdate}
   */
  setMethod(method) {
    this.method = method;
    return this;
  }

  /**
   * Set Price.
   * @param {number} price
   * @returns {ProductVariantPricingUpdate}
   */
  setPrice(price) {
    this.price = price;
    return this;
  }

  /**
   * Set Cost.
   * @param {number} cost
   * @returns {ProductVariantPricingUpdate}
   */
  setCost(cost) {
    this.cost = cost;
    return this;
  }

  /**
   * Set Weight.
   * @param {number} weight
   * @returns {ProductVariantPricingUpdate}
   */
  setWeight(weight) {
    this.weight = weight;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
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

    data['Variant_ID'] = this.variantId;

    data['Method'] = this.method;

    if (!util.isNullOrUndefined(this.price)) {
      data['Price'] = this.price;
    }

    if (!util.isNullOrUndefined(this.cost)) {
      data['Cost'] = this.cost;
    }

    if (!util.isNullOrUndefined(this.weight)) {
      data['Weight'] = this.weight;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ProductVariantPricingUpdate(this, httpResponse, data);
  }
}

module.exports.ProductVariantPricingUpdate = ProductVariantPricingUpdate;