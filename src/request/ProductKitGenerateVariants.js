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
 * Handles API Request ProductKit_Generate_Variants. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/productkit_generate_variants
 * @class
 */
class ProductKitGenerateVariants extends Request {
  /**
   * ProductKitGenerateVariants Constructor.
   * @param {?BaseClient} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client);
    this.function = 'ProductKit_Generate_Variants';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productId = null;
    this.productCode = null;
    this.editProduct = null;
    this.pricingMethod = null;

    if (util.isInstanceOf(product, models.Product)) {
      if (product.getId()) {
        this.setProductId(product.getId());
      } else if (product.getCode()) {
        this.setEditProduct(product.getCode());
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
   * Get Pricing_Method.
   * @returns {string}
   */
  getPricingMethod() {
    return this.pricingMethod;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {ProductKitGenerateVariants}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {ProductKitGenerateVariants}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {ProductKitGenerateVariants}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Pricing_Method.
   * @param {string} pricingMethod
   * @returns {ProductKitGenerateVariants}
   */
  setPricingMethod(pricingMethod) {
    this.pricingMethod = pricingMethod;
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
    } else if (!util.isNullOrUndefined(this.productCode)) {
      data['Product_Code'] = this.productCode;
    } else if (!util.isNullOrUndefined(this.editProduct)) {
      data['Edit_Product'] = this.editProduct;
    }

    data['Pricing_Method'] = this.pricingMethod;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ProductKitGenerateVariants(this, httpResponse, data);
  }
}

module.exports.ProductKitGenerateVariants = ProductKitGenerateVariants;