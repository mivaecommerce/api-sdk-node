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
 * Handles API Request ProductVariant_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/productvariant_insert
 * @class
 */
class ProductVariantInsert extends Request {
  /**
   * ProductVariantInsert Constructor.
   * @param {?BaseClient} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client);
    this.function = 'ProductVariant_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productId = null;
    this.productCode = null;
    this.editProduct = null;
    this.attributes = [];
    this.parts = [];

    if (util.isInstanceOf(product, models.Product)) {
      if (product.getId()) {
        this.setProductId(product.getId());
      } else if (product.getCode()) {
        this.setProductCode(product.getCode());
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
   * Get Attributes.
   * @returns {VariantAttribute[]}
   */
  getAttributes() {
    return this.attributes;
  }

  /**
   * Get Parts.
   * @returns {VariantPart[]}
   */
  getParts() {
    return this.parts;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {ProductVariantInsert}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {ProductVariantInsert}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {ProductVariantInsert}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Attributes.
   * @param {VariantAttribute[]} attributes
   * @throws {Error}
   * @returns {ProductVariantInsert}
   */
  setAttributes(attributes) {
    var i;
    var l;

    if (!util.isArray(attributes)) {
      throw new Error(util.format('Expected an array but got %s', typeof attributes));
    }

    for (i = 0, l = attributes.length; i < l; i++) {
      if (!util.isInstanceOf(attributes[i], models.VariantAttribute) && util.isObject(attributes[i])) {
        attributes[i] = new models.VariantAttribute(attributes[i]);
      } else if (!util.isInstanceOf(attributes[i], models.VariantAttribute)) {
        throw new Error(util.format('Expected instance of VariantAttribute or an Object but got %s',
          typeof attributes[i]));
      }
    }

    this.attributes = attributes;
    return this;
  }

  /**
   * Set Parts.
   * @param {VariantPart[]} parts
   * @throws {Error}
   * @returns {ProductVariantInsert}
   */
  setParts(parts) {
    var i;
    var l;

    if (!util.isArray(parts)) {
      throw new Error(util.format('Expected an array but got %s', typeof parts));
    }

    for (i = 0, l = parts.length; i < l; i++) {
      if (!util.isInstanceOf(parts[i], models.VariantPart) && util.isObject(parts[i])) {
        parts[i] = new models.VariantPart(parts[i]);
      } else if (!util.isInstanceOf(parts[i], models.VariantPart)) {
        throw new Error(util.format('Expected instance of VariantPart or an Object but got %s',
          typeof parts[i]));
      }
    }

    this.parts = parts;
    return this;
  }

  /**
   * Add Attributes.
   * @param {VariantAttribute} variantAttribute
   * @throws {Error}
   * @returns {ProductVariantInsert}
   */
  addVariantAttribute(variantAttribute) {
    if (util.isInstanceOf(variantAttribute, models.VariantAttribute)) {
      this.attributes.push(variantAttribute);
    } else if (util.isObject(variantAttribute)) {
      this.attributes.push(new models.VariantAttribute(variantAttribute));
    } else {
      throw new Error(util.format('Expected instance of VariantAttribute or Object but got %s',
        typeof variantAttribute));
    }

    return this;
  }

  /**
   * Add many VariantAttribute.
   * @param {VariantAttribute[]} attributes
   * @throws {Error}
   * @returns {ProductVariantInsert}
   */
  addAttributes(attributes) {
    var i;
    var l;

    if (!util.isArray(attributes)) {
      throw new Error(util.format('Expecting an array of VariantAttribute but got %s',
        typeof attributes));
    }

    for (i = 0, l = attributes.length; i < l; i++) {
      if (util.isInstanceOf(attributes[i], models.VariantAttribute)) {
        this.attributes.push(attributes[i]);
      } else if (util.isObject(attributes[i])) {
        this.attributes.push(new models.VariantAttribute(attributes[i]));
      } else {
        throw new Error(util.format('Expected array of VariantAttribute or an array of Object but got %s',
          typeof attributes[i]));
      }
    }

    return this;
  }

  /**
   * Add Parts.
   * @param {VariantPart} variantPart
   * @throws {Error}
   * @returns {ProductVariantInsert}
   */
  addVariantPart(variantPart) {
    if (util.isInstanceOf(variantPart, models.VariantPart)) {
      this.parts.push(variantPart);
    } else if (util.isObject(variantPart)) {
      this.parts.push(new models.VariantPart(variantPart));
    } else {
      throw new Error(util.format('Expected instance of VariantPart or Object but got %s',
        typeof variantPart));
    }

    return this;
  }

  /**
   * Add many VariantPart.
   * @param {VariantPart[]} parts
   * @throws {Error}
   * @returns {ProductVariantInsert}
   */
  addParts(parts) {
    var i;
    var l;

    if (!util.isArray(parts)) {
      throw new Error(util.format('Expecting an array of VariantPart but got %s',
        typeof parts));
    }

    for (i = 0, l = parts.length; i < l; i++) {
      if (util.isInstanceOf(parts[i], models.VariantPart)) {
        this.parts.push(parts[i]);
      } else if (util.isObject(parts[i])) {
        this.parts.push(new models.VariantPart(parts[i]));
      } else {
        throw new Error(util.format('Expected array of VariantPart or an array of Object but got %s',
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

    if (util.isArray(this.attributes)) {
      data['Attributes'] = [];

      for (i = 0, l = this.attributes.length; i < l; i++) {
        data['Attributes'].push(this.attributes[i].toObject());
      }
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
    return new responses.ProductVariantInsert(this, httpResponse, data);
  }
}

module.exports.ProductVariantInsert = ProductVariantInsert;