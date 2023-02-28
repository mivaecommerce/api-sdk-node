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
 * Handles API Request AttributeTemplateAttribute_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/attributetemplateattribute_insert
 * @class
 */
class AttributeTemplateAttributeInsert extends Request {
  /**
   * AttributeTemplateAttributeInsert Constructor.
   * @param {?BaseClient} client
   * @param {?AttributeTemplate} attributeTemplate
   */
  constructor(client, attributeTemplate = null) {
    super(client);
    this.function = 'AttributeTemplateAttribute_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.attributeTemplateId = null;
    this.attributeTemplateCode = null;
    this.editAttributeTemplate = null;
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

    if (util.isInstanceOf(attributeTemplate, models.AttributeTemplate)) {
      if (attributeTemplate.getId()) {
        this.setAttributeTemplateId(attributeTemplate.getId());
      } else if (attributeTemplate.getCode()) {
        this.setAttributeTemplateCode(attributeTemplate.getCode());
      } else if (attributeTemplate.getCode()) {
        this.setEditAttributeTemplate(attributeTemplate.getCode());
      }
    }
  }

  /**
   * Get AttributeTemplate_ID.
   * @returns {number}
   */
  getAttributeTemplateId() {
    return this.attributeTemplateId;
  }

  /**
   * Get AttributeTemplate_Code.
   * @returns {string}
   */
  getAttributeTemplateCode() {
    return this.attributeTemplateCode;
  }

  /**
   * Get Edit_AttributeTemplate.
   * @returns {string}
   */
  getEditAttributeTemplate() {
    return this.editAttributeTemplate;
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
   * Set AttributeTemplate_ID.
   * @param {number} attributeTemplateId
   * @returns {AttributeTemplateAttributeInsert}
   */
  setAttributeTemplateId(attributeTemplateId) {
    this.attributeTemplateId = attributeTemplateId;
    return this;
  }

  /**
   * Set AttributeTemplate_Code.
   * @param {string} attributeTemplateCode
   * @returns {AttributeTemplateAttributeInsert}
   */
  setAttributeTemplateCode(attributeTemplateCode) {
    this.attributeTemplateCode = attributeTemplateCode;
    return this;
  }

  /**
   * Set Edit_AttributeTemplate.
   * @param {string} editAttributeTemplate
   * @returns {AttributeTemplateAttributeInsert}
   */
  setEditAttributeTemplate(editAttributeTemplate) {
    this.editAttributeTemplate = editAttributeTemplate;
    return this;
  }

  /**
   * Set Code.
   * @param {string} code
   * @returns {AttributeTemplateAttributeInsert}
   */
  setCode(code) {
    this.code = code;
    return this;
  }

  /**
   * Set Prompt.
   * @param {string} prompt
   * @returns {AttributeTemplateAttributeInsert}
   */
  setPrompt(prompt) {
    this.prompt = prompt;
    return this;
  }

  /**
   * Set Type.
   * @param {string} type
   * @returns {AttributeTemplateAttributeInsert}
   */
  setType(type) {
    this.type = type;
    return this;
  }

  /**
   * Set Image.
   * @param {string} image
   * @returns {AttributeTemplateAttributeInsert}
   */
  setImage(image) {
    this.image = image;
    return this;
  }

  /**
   * Set Price.
   * @param {number} price
   * @returns {AttributeTemplateAttributeInsert}
   */
  setPrice(price) {
    this.price = price;
    return this;
  }

  /**
   * Set Cost.
   * @param {number} cost
   * @returns {AttributeTemplateAttributeInsert}
   */
  setCost(cost) {
    this.cost = cost;
    return this;
  }

  /**
   * Set Weight.
   * @param {number} weight
   * @returns {AttributeTemplateAttributeInsert}
   */
  setWeight(weight) {
    this.weight = weight;
    return this;
  }

  /**
   * Set Copy.
   * @param {boolean} copy
   * @returns {AttributeTemplateAttributeInsert}
   */
  setCopy(copy) {
    this.copy = copy;
    return this;
  }

  /**
   * Set Required.
   * @param {boolean} required
   * @returns {AttributeTemplateAttributeInsert}
   */
  setRequired(required) {
    this.required = required;
    return this;
  }

  /**
   * Set Inventory.
   * @param {boolean} inventory
   * @returns {AttributeTemplateAttributeInsert}
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

    if (!util.isNullOrUndefined(this.attributeTemplateId)) {
      data['AttributeTemplate_ID'] = this.attributeTemplateId;
    } else if (!util.isNullOrUndefined(this.attributeTemplateCode)) {
      data['AttributeTemplate_Code'] = this.attributeTemplateCode;
    } else if (!util.isNullOrUndefined(this.editAttributeTemplate)) {
      data['Edit_AttributeTemplate'] = this.editAttributeTemplate;
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
    return new responses.AttributeTemplateAttributeInsert(this, httpResponse, data);
  }
}

module.exports.AttributeTemplateAttributeInsert = AttributeTemplateAttributeInsert;