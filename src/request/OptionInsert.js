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
const Decimal = require('decimal.js-light');

/** 
 * Handles API Request Option_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/option_insert
 * @class
 */
class OptionInsert extends Request {
  /**
   * OptionInsert Constructor.
   * @param {?BaseClient} client
   * @param {?ProductAttribute} productAttribute
   */
  constructor(client, productAttribute = null) {
    super(client);
    this.function = 'Option_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productId = null;
    this.productCode = null;
    this.editProduct = null;
    this.attributeId = null;
    this.editAttribute = null;
    this.attributeCode = null;
    this.code = null;
    this.prompt = null;
    this.image = null;
    this.price = null;
    this.cost = null;
    this.weight = null;
    this.defaultOption = null;

    if (util.isInstanceOf(productAttribute, models.ProductAttribute)) {
      if (productAttribute.getProductId()) {
        this.setProductId(productAttribute.getProductId());
      }

      if (productAttribute.getId()) {
        this.setAttributeId(productAttribute.getId());
      } else if (productAttribute.getCode()) {
        this.setEditAttribute(productAttribute.getCode());
      } else if (productAttribute.getCode()) {
        this.setAttributeCode(productAttribute.getCode());
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
   * Get Edit_Attribute.
   * @returns {string}
   */
  getEditAttribute() {
    return this.editAttribute;
  }

  /**
   * Get Attribute_Code.
   * @returns {string}
   */
  getAttributeCode() {
    return this.attributeCode;
  }

  /**
   * Get Code.
   * @returns {string}
   */
  getCode() {
    return this.code;
  }

  /**
   * Get Prompt.
   * @returns {string}
   */
  getPrompt() {
    return this.prompt;
  }

  /**
   * Get Image.
   * @returns {string}
   */
  getImage() {
    return this.image;
  }

  /**
   * Get Price.
   * @returns {Decimal}
   */
  getPrice() {
    return this.price;
  }

  /**
   * Get Cost.
   * @returns {Decimal}
   */
  getCost() {
    return this.cost;
  }

  /**
   * Get Weight.
   * @returns {Decimal}
   */
  getWeight() {
    return this.weight;
  }

  /**
   * Get default_option.
   * @returns {boolean}
   */
  getDefaultOption() {
    return this.defaultOption;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {OptionInsert}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {OptionInsert}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {OptionInsert}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Attribute_ID.
   * @param {number} attributeId
   * @returns {OptionInsert}
   */
  setAttributeId(attributeId) {
    this.attributeId = attributeId;
    return this;
  }

  /**
   * Set Edit_Attribute.
   * @param {string} editAttribute
   * @returns {OptionInsert}
   */
  setEditAttribute(editAttribute) {
    this.editAttribute = editAttribute;
    return this;
  }

  /**
   * Set Attribute_Code.
   * @param {string} attributeCode
   * @returns {OptionInsert}
   */
  setAttributeCode(attributeCode) {
    this.attributeCode = attributeCode;
    return this;
  }

  /**
   * Set Code.
   * @param {string} code
   * @returns {OptionInsert}
   */
  setCode(code) {
    this.code = code;
    return this;
  }

  /**
   * Set Prompt.
   * @param {string} prompt
   * @returns {OptionInsert}
   */
  setPrompt(prompt) {
    this.prompt = prompt;
    return this;
  }

  /**
   * Set Image.
   * @param {string} image
   * @returns {OptionInsert}
   */
  setImage(image) {
    this.image = image;
    return this;
  }

  /**
   * Set Price.
   * @param {Decimal} price
   * @returns {OptionInsert}
   */
  setPrice(price) {
    if (util.isInstanceOf(price, Decimal)) {
      this.price = price;
    } else {
      this.price = new Decimal(price);
    }
    return this;
  }

  /**
   * Set Cost.
   * @param {Decimal} cost
   * @returns {OptionInsert}
   */
  setCost(cost) {
    if (util.isInstanceOf(cost, Decimal)) {
      this.cost = cost;
    } else {
      this.cost = new Decimal(cost);
    }
    return this;
  }

  /**
   * Set Weight.
   * @param {Decimal} weight
   * @returns {OptionInsert}
   */
  setWeight(weight) {
    if (util.isInstanceOf(weight, Decimal)) {
      this.weight = weight;
    } else {
      this.weight = new Decimal(weight);
    }
    return this;
  }

  /**
   * Set default_option.
   * @param {boolean} defaultOption
   * @returns {OptionInsert}
   */
  setDefaultOption(defaultOption) {
    this.defaultOption = defaultOption;
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
    }

    if (!util.isNullOrUndefined(this.attributeId)) {
      data['Attribute_ID'] = this.attributeId;
    } else if (!util.isNullOrUndefined(this.editAttribute)) {
      data['Edit_Attribute'] = this.editAttribute;
    } else if (!util.isNullOrUndefined(this.attributeCode)) {
      data['Attribute_Code'] = this.attributeCode;
    }

    data['Code'] = this.code;

    data['Prompt'] = this.prompt;

    if (!util.isNullOrUndefined(this.image)) {
      data['Image'] = this.image;
    }

    if (!util.isNullOrUndefined(this.price)) {
      data['Price'] = this.price;
    }

    if (!util.isNullOrUndefined(this.cost)) {
      data['Cost'] = this.cost;
    }

    if (!util.isNullOrUndefined(this.weight)) {
      data['Weight'] = this.weight;
    }

    if (!util.isNullOrUndefined(this.defaultOption)) {
      data['Default'] = this.defaultOption;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.OptionInsert(this, httpResponse, data);
  }
}

module.exports.OptionInsert = OptionInsert;