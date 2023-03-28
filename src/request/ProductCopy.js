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
 * Handles API Request Product_Copy. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/product_copy
 * @class
 */
class ProductCopy extends Request {
  /**
   * ProductCopy Constructor.
   * @param {?BaseClient} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client);
    this.function = 'Product_Copy';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productCopySessionId = null;
    this.copyProductRulesId = null;
    this.copyProductRulesName = null;
    this.sourceProductId = null;
    this.sourceProductCode = null;
    this.destinationProductCode = null;
    this.destinationProductName = null;
    this.destinationProductSku = null;

    if (util.isInstanceOf(product, models.Product)) {
      if (product.getId()) {
        this.setSourceProductId(product.getId());
      } else if (product.getCode()) {
        this.setSourceProductCode(product.getCode());
      }
    }
  }

  /**
   * Get Product_Copy_Session_ID.
   * @returns {string}
   */
  getProductCopySessionId() {
    return this.productCopySessionId;
  }

  /**
   * Get CopyProductRules_ID.
   * @returns {number}
   */
  getCopyProductRulesId() {
    return this.copyProductRulesId;
  }

  /**
   * Get CopyProductRules_Name.
   * @returns {string}
   */
  getCopyProductRulesName() {
    return this.copyProductRulesName;
  }

  /**
   * Get Source_Product_ID.
   * @returns {number}
   */
  getSourceProductId() {
    return this.sourceProductId;
  }

  /**
   * Get Source_Product_Code.
   * @returns {string}
   */
  getSourceProductCode() {
    return this.sourceProductCode;
  }

  /**
   * Get destination_product_code.
   * @returns {string}
   */
  getDestinationProductCode() {
    return this.destinationProductCode;
  }

  /**
   * Get destination_product_name.
   * @returns {string}
   */
  getDestinationProductName() {
    return this.destinationProductName;
  }

  /**
   * Get destination_product_sku.
   * @returns {string}
   */
  getDestinationProductSku() {
    return this.destinationProductSku;
  }

  /**
   * Set Product_Copy_Session_ID.
   * @param {string} productCopySessionId
   * @returns {ProductCopy}
   */
  setProductCopySessionId(productCopySessionId) {
    this.productCopySessionId = productCopySessionId;
    return this;
  }

  /**
   * Set CopyProductRules_ID.
   * @param {number} copyProductRulesId
   * @returns {ProductCopy}
   */
  setCopyProductRulesId(copyProductRulesId) {
    this.copyProductRulesId = copyProductRulesId;
    return this;
  }

  /**
   * Set CopyProductRules_Name.
   * @param {string} copyProductRulesName
   * @returns {ProductCopy}
   */
  setCopyProductRulesName(copyProductRulesName) {
    this.copyProductRulesName = copyProductRulesName;
    return this;
  }

  /**
   * Set Source_Product_ID.
   * @param {number} sourceProductId
   * @returns {ProductCopy}
   */
  setSourceProductId(sourceProductId) {
    this.sourceProductId = sourceProductId;
    return this;
  }

  /**
   * Set Source_Product_Code.
   * @param {string} sourceProductCode
   * @returns {ProductCopy}
   */
  setSourceProductCode(sourceProductCode) {
    this.sourceProductCode = sourceProductCode;
    return this;
  }

  /**
   * Set destination_product_code.
   * @param {string} destinationProductCode
   * @returns {ProductCopy}
   */
  setDestinationProductCode(destinationProductCode) {
    this.destinationProductCode = destinationProductCode;
    return this;
  }

  /**
   * Set destination_product_name.
   * @param {string} destinationProductName
   * @returns {ProductCopy}
   */
  setDestinationProductName(destinationProductName) {
    this.destinationProductName = destinationProductName;
    return this;
  }

  /**
   * Set destination_product_sku.
   * @param {string} destinationProductSku
   * @returns {ProductCopy}
   */
  setDestinationProductSku(destinationProductSku) {
    this.destinationProductSku = destinationProductSku;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.sourceProductId)) {
      data['Source_Product_ID'] = this.sourceProductId;
    } else if (!util.isNullOrUndefined(this.sourceProductCode)) {
      data['Source_Product_Code'] = this.sourceProductCode;
    }

    if (!util.isNullOrUndefined(this.destinationProductCode)) {
      data['Dest_Product_Code'] = this.destinationProductCode;
    }

    if (!util.isNullOrUndefined(this.copyProductRulesId)) {
      data['CopyProductRules_ID'] = this.copyProductRulesId;
    } else if (!util.isNullOrUndefined(this.copyProductRulesName)) {
      data['CopyProductRules_Name'] = this.copyProductRulesName;
    }

    data['Product_Copy_Session_ID'] = this.productCopySessionId;

    if (!util.isNullOrUndefined(this.copyProductRulesId)) {
      data['CopyProductRules_ID'] = this.copyProductRulesId;
    }

    if (!util.isNullOrUndefined(this.copyProductRulesName)) {
      data['CopyProductRules_Name'] = this.copyProductRulesName;
    }

    if (!util.isNullOrUndefined(this.destinationProductCode)) {
      data['Dest_Product_Code'] = this.destinationProductCode;
    }

    if (!util.isNullOrUndefined(this.destinationProductName)) {
      data['Dest_Product_Name'] = this.destinationProductName;
    }

    if (!util.isNullOrUndefined(this.destinationProductSku)) {
      data['Dest_Product_SKU'] = this.destinationProductSku;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ProductCopy(this, httpResponse, data);
  }
}

module.exports.ProductCopy = ProductCopy;