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
 * Handles API Request Attribute_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/attribute_update
 * @class
 */
class AttributeUpdate extends Request {
  /**
   * AttributeUpdate Constructor.
   * @param {?BaseClient} client
   * @param {?ProductAttribute} productAttribute
   */
  constructor(client, productAttribute = null) {
    super(client);
    this.function = 'Attribute_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productId = null;
    this.productCode = null;
    this.editProduct = null;
    this.attributeId = null;
    this.editAttribute = null;
    this.attributeCode = null;
    this.code = null;
    this.prompt = null;
    this.type = null;
    this.image = null;
    this.price = null;
    this.cost = null;
    this.weight = null;
    this.copy = null;
    this.required = null;
    this.inventory = null;

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

      this.setEditAttribute(productAttribute.getCode());
      this.setCode(productAttribute.getCode());
      this.setPrompt(productAttribute.getPrompt());
      this.setType(productAttribute.getType());
      this.setImage(productAttribute.getImage());
      this.setPrice(productAttribute.getPrice());
      this.setCost(productAttribute.getCost());
      this.setWeight(productAttribute.getWeight());
      this.setRequired(productAttribute.getRequired());
      this.setInventory(productAttribute.getInventory());
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
   * Get Type.
   * @returns {string}
   */
  getType() {
    return this.type;
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
   * Get Copy.
   * @returns {boolean}
   */
  getCopy() {
    return this.copy;
  }

  /**
   * Get Required.
   * @returns {boolean}
   */
  getRequired() {
    return this.required;
  }

  /**
   * Get Inventory.
   * @returns {boolean}
   */
  getInventory() {
    return this.inventory;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {AttributeUpdate}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {AttributeUpdate}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {AttributeUpdate}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Attribute_ID.
   * @param {number} attributeId
   * @returns {AttributeUpdate}
   */
  setAttributeId(attributeId) {
    this.attributeId = attributeId;
    return this;
  }

  /**
   * Set Edit_Attribute.
   * @param {string} editAttribute
   * @returns {AttributeUpdate}
   */
  setEditAttribute(editAttribute) {
    this.editAttribute = editAttribute;
    return this;
  }

  /**
   * Set Attribute_Code.
   * @param {string} attributeCode
   * @returns {AttributeUpdate}
   */
  setAttributeCode(attributeCode) {
    this.attributeCode = attributeCode;
    return this;
  }

  /**
   * Set Code.
   * @param {string} code
   * @returns {AttributeUpdate}
   */
  setCode(code) {
    this.code = code;
    return this;
  }

  /**
   * Set Prompt.
   * @param {string} prompt
   * @returns {AttributeUpdate}
   */
  setPrompt(prompt) {
    this.prompt = prompt;
    return this;
  }

  /**
   * Set Type.
   * @param {string} type
   * @returns {AttributeUpdate}
   */
  setType(type) {
    this.type = type;
    return this;
  }

  /**
   * Set Image.
   * @param {string} image
   * @returns {AttributeUpdate}
   */
  setImage(image) {
    this.image = image;
    return this;
  }

  /**
   * Set Price.
   * @param {Decimal} price
   * @returns {AttributeUpdate}
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
   * @returns {AttributeUpdate}
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
   * @returns {AttributeUpdate}
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
   * Set Copy.
   * @param {boolean} copy
   * @returns {AttributeUpdate}
   */
  setCopy(copy) {
    this.copy = copy;
    return this;
  }

  /**
   * Set Required.
   * @param {boolean} required
   * @returns {AttributeUpdate}
   */
  setRequired(required) {
    this.required = required;
    return this;
  }

  /**
   * Set Inventory.
   * @param {boolean} inventory
   * @returns {AttributeUpdate}
   */
  setInventory(inventory) {
    this.inventory = inventory;
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

    if (!util.isNullOrUndefined(this.attributeId)) {
      data['Attribute_ID'] = this.attributeId;
    } else if (!util.isNullOrUndefined(this.editAttribute)) {
      data['Edit_Attribute'] = this.editAttribute;
    } else if (!util.isNullOrUndefined(this.attributeCode)) {
      data['Attribute_Code'] = this.attributeCode;
    }

    if (!util.isNullOrUndefined(this.editAttribute)) {
      data['Edit_Attribute'] = this.editAttribute;
    }

    if (!util.isNullOrUndefined(this.code)) {
      data['Code'] = this.code;
    }

    if (!util.isNullOrUndefined(this.prompt)) {
      data['Prompt'] = this.prompt;
    }

    if (!util.isNullOrUndefined(this.type)) {
      data['Type'] = this.type;
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

    if (!util.isNullOrUndefined(this.copy)) {
      data['Copy'] = this.copy;
    }

    if (!util.isNullOrUndefined(this.required)) {
      data['Required'] = this.required;
    }

    if (!util.isNullOrUndefined(this.inventory)) {
      data['Inventory'] = this.inventory;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.AttributeUpdate(this, httpResponse, data);
  }
}

module.exports.AttributeUpdate = AttributeUpdate;