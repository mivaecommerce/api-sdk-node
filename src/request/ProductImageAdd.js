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
 * Handles API Request ProductImage_Add. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/productimage_add
 * @class
 */
class ProductImageAdd extends Request {
  /**
   * ProductImageAdd Constructor.
   * @param {?BaseClient} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client);
    this.function = 'ProductImage_Add';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productCode = null;
    this.productId = null;
    this.editProduct = null;
    this.productSku = null;
    this.filepath = null;
    this.imageTypeId = null;

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
   * Get Product_Code.
   * @returns {string}
   */
  getProductCode() {
    return this.productCode;
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
   * Get Product_SKU.
   * @returns {string}
   */
  getProductSku() {
    return this.productSku;
  }

  /**
   * Get Filepath.
   * @returns {string}
   */
  getFilepath() {
    return this.filepath;
  }

  /**
   * Get ImageType_ID.
   * @returns {number}
   */
  getImageTypeId() {
    return this.imageTypeId;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {ProductImageAdd}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {ProductImageAdd}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {ProductImageAdd}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Product_SKU.
   * @param {string} productSku
   * @returns {ProductImageAdd}
   */
  setProductSku(productSku) {
    this.productSku = productSku;
    return this;
  }

  /**
   * Set Filepath.
   * @param {string} filepath
   * @returns {ProductImageAdd}
   */
  setFilepath(filepath) {
    this.filepath = filepath;
    return this;
  }

  /**
   * Set ImageType_ID.
   * @param {number} imageTypeId
   * @returns {ProductImageAdd}
   */
  setImageTypeId(imageTypeId) {
    this.imageTypeId = imageTypeId;
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

    data['Filepath'] = this.filepath;

    data['ImageType_ID'] = this.imageTypeId;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ProductImageAdd(this, httpResponse, data);
  }
}

module.exports.ProductImageAdd = ProductImageAdd;