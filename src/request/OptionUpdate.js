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
 * Handles API Request Option_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/option_update
 * @class
 */
class OptionUpdate extends Request {
  /**
   * OptionUpdate Constructor.
   * @param {?BaseClient} client
   * @param {?ProductOption} productOption
   */
  constructor(client, productOption = null) {
    super(client);
    this.function = 'Option_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productId = null;
    this.productCode = null;
    this.editProduct = null;
    this.optionId = null;
    this.optionCode = null;
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

    if (util.isInstanceOf(productOption, models.ProductOption)) {
      if (productOption.getProductId()) {
        this.setProductId(productOption.getProductId());
      }

      if (productOption.getAttributeId()) {
        this.setAttributeId(productOption.getAttributeId());
      }

      if (productOption.getId()) {
        this.setOptionId(productOption.getId());
      } else if (productOption.getCode()) {
        this.setOptionCode(productOption.getCode());
      }

      this.setCode(productOption.getCode());
      this.setPrompt(productOption.getPrompt());
      this.setImage(productOption.getImage());
      this.setPrice(productOption.getPrice());
      this.setCost(productOption.getCost());
      this.setWeight(productOption.getWeight());
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
   * Get Option_ID.
   * @returns {number}
   */
  getOptionId() {
    return this.optionId;
  }

  /**
   * Get Option_Code.
   * @returns {string}
   */
  getOptionCode() {
    return this.optionCode;
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
   * Get default_option.
   * @returns {boolean}
   */
  getDefaultOption() {
    return this.defaultOption;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {OptionUpdate}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {OptionUpdate}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {OptionUpdate}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Option_ID.
   * @param {number} optionId
   * @returns {OptionUpdate}
   */
  setOptionId(optionId) {
    this.optionId = optionId;
    return this;
  }

  /**
   * Set Option_Code.
   * @param {string} optionCode
   * @returns {OptionUpdate}
   */
  setOptionCode(optionCode) {
    this.optionCode = optionCode;
    return this;
  }

  /**
   * Set Attribute_ID.
   * @param {number} attributeId
   * @returns {OptionUpdate}
   */
  setAttributeId(attributeId) {
    this.attributeId = attributeId;
    return this;
  }

  /**
   * Set Edit_Attribute.
   * @param {string} editAttribute
   * @returns {OptionUpdate}
   */
  setEditAttribute(editAttribute) {
    this.editAttribute = editAttribute;
    return this;
  }

  /**
   * Set Attribute_Code.
   * @param {string} attributeCode
   * @returns {OptionUpdate}
   */
  setAttributeCode(attributeCode) {
    this.attributeCode = attributeCode;
    return this;
  }

  /**
   * Set Code.
   * @param {string} code
   * @returns {OptionUpdate}
   */
  setCode(code) {
    this.code = code;
    return this;
  }

  /**
   * Set Prompt.
   * @param {string} prompt
   * @returns {OptionUpdate}
   */
  setPrompt(prompt) {
    this.prompt = prompt;
    return this;
  }

  /**
   * Set Image.
   * @param {string} image
   * @returns {OptionUpdate}
   */
  setImage(image) {
    this.image = image;
    return this;
  }

  /**
   * Set Price.
   * @param {number} price
   * @returns {OptionUpdate}
   */
  setPrice(price) {
    this.price = price;
    return this;
  }

  /**
   * Set Cost.
   * @param {number} cost
   * @returns {OptionUpdate}
   */
  setCost(cost) {
    this.cost = cost;
    return this;
  }

  /**
   * Set Weight.
   * @param {number} weight
   * @returns {OptionUpdate}
   */
  setWeight(weight) {
    this.weight = weight;
    return this;
  }

  /**
   * Set default_option.
   * @param {boolean} defaultOption
   * @returns {OptionUpdate}
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

    if (!util.isNullOrUndefined(this.optionId)) {
      data['Option_ID'] = this.optionId;
    } else if (!util.isNullOrUndefined(this.optionCode)) {
      data['Option_Code'] = this.optionCode;
    }

    if (!util.isNullOrUndefined(this.code)) {
      data['Code'] = this.code;
    }

    if (!util.isNullOrUndefined(this.prompt)) {
      data['Prompt'] = this.prompt;
    }

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
    return new responses.OptionUpdate(this, httpResponse, data);
  }
}

module.exports.OptionUpdate = OptionUpdate;