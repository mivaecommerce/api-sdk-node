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
 * Handles API Request ProductKit_Update_Parts. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/productkit_update_parts
 * @class
 */
class ProductKitUpdateParts extends Request {
  /**
   * ProductKitUpdateParts Constructor.
   * @param {?BaseClient} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client);
    this.function = 'ProductKit_Update_Parts';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productId = null;
    this.productCode = null;
    this.editProduct = null;
    this.attributeId = null;
    this.attributeTemplateAttributeId = null;
    this.optionId = null;
    this.parts = [];

    if (util.isInstanceOf(product, models.Product)) {
      if (product.getId()) {
        this.setProductId(product.getId());
      } else if (product.getCode()) {
        this.setEditProduct(product.getCode());
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
   * Get Attribute_ID.
   * @returns {number}
   */
  getAttributeId() {
    return this.attributeId;
  }

  /**
   * Get AttributeTemplateAttribute_ID.
   * @returns {number}
   */
  getAttributeTemplateAttributeId() {
    return this.attributeTemplateAttributeId;
  }

  /**
   * Get Option_ID.
   * @returns {number}
   */
  getOptionId() {
    return this.optionId;
  }

  /**
   * Get Parts.
   * @returns {KitPart[]}
   */
  getParts() {
    return this.parts;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {ProductKitUpdateParts}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {ProductKitUpdateParts}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {ProductKitUpdateParts}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Attribute_ID.
   * @param {number} attributeId
   * @returns {ProductKitUpdateParts}
   */
  setAttributeId(attributeId) {
    this.attributeId = attributeId;
    return this;
  }

  /**
   * Set AttributeTemplateAttribute_ID.
   * @param {number} attributeTemplateAttributeId
   * @returns {ProductKitUpdateParts}
   */
  setAttributeTemplateAttributeId(attributeTemplateAttributeId) {
    this.attributeTemplateAttributeId = attributeTemplateAttributeId;
    return this;
  }

  /**
   * Set Option_ID.
   * @param {number} optionId
   * @returns {ProductKitUpdateParts}
   */
  setOptionId(optionId) {
    this.optionId = optionId;
    return this;
  }

  /**
   * Set Parts.
   * @param {KitPart[]} parts
   * @throws {Error}
   * @returns {ProductKitUpdateParts}
   */
  setParts(parts) {
    var i;
    var l;

    if (!util.isArray(parts)) {
      throw new Error(util.format('Expected an array but got %s', typeof parts));
    }

    for (i = 0, l = parts.length; i < l; i++) {
      if (!util.isInstanceOf(parts[i], models.KitPart) && util.isObject(parts[i])) {
        parts[i] = new models.KitPart(parts[i]);
      } else if (!util.isInstanceOf(parts[i], models.KitPart)) {
        throw new Error(util.format('Expected instance of KitPart or an Object but got %s',
          typeof parts[i]));
      }
    }

    this.parts = parts;
    return this;
  }

  /**
   * Add Parts.
   * @param {KitPart} kitPart
   * @throws {Error}
   * @returns {ProductKitUpdateParts}
   */
  addKitPart(kitPart) {
    if (util.isInstanceOf(kitPart, models.KitPart)) {
      this.parts.push(kitPart);
    } else if (util.isObject(kitPart)) {
      this.parts.push(new models.KitPart(kitPart));
    } else {
      throw new Error(util.format('Expected instance of KitPart or Object but got %s',
        typeof kitPart));
    }

    return this;
  }

  /**
   * Add many KitPart.
   * @param {KitPart[]} parts
   * @throws {Error}
   * @returns {ProductKitUpdateParts}
   */
  addParts(parts) {
    var i;
    var l;

    if (!util.isArray(parts)) {
      throw new Error(util.format('Expecting an array of KitPart but got %s',
        typeof parts));
    }

    for (i = 0, l = parts.length; i < l; i++) {
      if (util.isInstanceOf(parts[i], models.KitPart)) {
        this.parts.push(parts[i]);
      } else if (util.isObject(parts[i])) {
        this.parts.push(new models.KitPart(parts[i]));
      } else {
        throw new Error(util.format('Expected array of KitPart or an array of Object but got %s',
          typeof parts[i]));
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
    }

    if (!util.isNullOrUndefined(this.attributeId)) {
      data['Attribute_ID'] = this.attributeId;
    }

    if (!util.isNullOrUndefined(this.attributeTemplateAttributeId)) {
      data['AttributeTemplateAttribute_ID'] = this.attributeTemplateAttributeId;
    }

    if (!util.isNullOrUndefined(this.optionId)) {
      data['Option_ID'] = this.optionId;
    }

    if (util.isArray(this.parts)) {
      data['Parts'] = [];

      for (i = 0, l = this.parts.length; i < l; i++) {
        data['Parts'].push(this.parts[i].toObject());
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
    return new responses.ProductKitUpdateParts(this, httpResponse, data);
  }
}

module.exports.ProductKitUpdateParts = ProductKitUpdateParts;