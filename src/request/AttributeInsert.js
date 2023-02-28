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
 * Handles API Request Attribute_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/attribute_insert
 * @class
 */
class AttributeInsert extends Request {
  /**
   * AttributeInsert Constructor.
   * @param {?BaseClient} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client);
    this.function = 'Attribute_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productId = null;
    this.productCode = null;
    this.editProduct = null;
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

    if (util.isInstanceOf(product, models.Product)) {
      if (product.getId()) {
        this.setProductId(product.getId());
      } else if (product.getCode()) {
        this.setEditProduct(product.getCode());
      }

      this.setProductCode(product.getCode());
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
   * @returns {AttributeInsert}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {AttributeInsert}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {AttributeInsert}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Code.
   * @param {string} code
   * @returns {AttributeInsert}
   */
  setCode(code) {
    this.code = code;
    return this;
  }

  /**
   * Set Prompt.
   * @param {string} prompt
   * @returns {AttributeInsert}
   */
  setPrompt(prompt) {
    this.prompt = prompt;
    return this;
  }

  /**
   * Set Type.
   * @param {string} type
   * @returns {AttributeInsert}
   */
  setType(type) {
    this.type = type;
    return this;
  }

  /**
   * Set Image.
   * @param {string} image
   * @returns {AttributeInsert}
   */
  setImage(image) {
    this.image = image;
    return this;
  }

  /**
   * Set Price.
   * @param {number} price
   * @returns {AttributeInsert}
   */
  setPrice(price) {
    this.price = price;
    return this;
  }

  /**
   * Set Cost.
   * @param {number} cost
   * @returns {AttributeInsert}
   */
  setCost(cost) {
    this.cost = cost;
    return this;
  }

  /**
   * Set Weight.
   * @param {number} weight
   * @returns {AttributeInsert}
   */
  setWeight(weight) {
    this.weight = weight;
    return this;
  }

  /**
   * Set Copy.
   * @param {boolean} copy
   * @returns {AttributeInsert}
   */
  setCopy(copy) {
    this.copy = copy;
    return this;
  }

  /**
   * Set Required.
   * @param {boolean} required
   * @returns {AttributeInsert}
   */
  setRequired(required) {
    this.required = required;
    return this;
  }

  /**
   * Set Inventory.
   * @param {boolean} inventory
   * @returns {AttributeInsert}
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
    } else if (!util.isNullOrUndefined(this.editProduct)) {
      data['Edit_Product'] = this.editProduct;
    }

    if (!util.isNullOrUndefined(this.productCode)) {
      data['Product_Code'] = this.productCode;
    }

    data['Code'] = this.code;

    if (!util.isNullOrUndefined(this.prompt)) {
      data['Prompt'] = this.prompt;
    }

    data['Type'] = this.type;

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
    return new responses.AttributeInsert(this, httpResponse, data);
  }
}

module.exports.AttributeInsert = AttributeInsert;