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
 * Handles API Request AttributeTemplateAttribute_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/attributetemplateattribute_update
 * @class
 */
class AttributeTemplateAttributeUpdate extends Request {
  /**
   * AttributeTemplateAttributeUpdate Constructor.
   * @param {?BaseClient} client
   * @param {?AttributeTemplateAttribute} attributeTemplateAttribute
   */
  constructor(client, attributeTemplateAttribute = null) {
    super(client);
    this.function = 'AttributeTemplateAttribute_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.attributeTemplateId = null;
    this.attributeTemplateCode = null;
    this.editAttributeTemplate = null;
    this.attributeTemplateAttributeId = null;
    this.attributeTemplateAttributeCode = null;
    this.editAttributeTemplateAttribute = null;
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

    if (util.isInstanceOf(attributeTemplateAttribute, models.AttributeTemplateAttribute)) {
      if (attributeTemplateAttribute.getId()) {
        this.setAttributeTemplateAttributeId(attributeTemplateAttribute.getId());
      } else if (attributeTemplateAttribute.getCode()) {
        this.setAttributeTemplateAttributeCode(attributeTemplateAttribute.getCode());
      } else if (attributeTemplateAttribute.getCode()) {
        this.setEditAttributeTemplateAttribute(attributeTemplateAttribute.getCode());
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
   * Get AttributeTemplateAttribute_ID.
   * @returns {number}
   */
  getAttributeTemplateAttributeId() {
    return this.attributeTemplateAttributeId;
  }

  /**
   * Get AttributeTemplateAttribute_Code.
   * @returns {string}
   */
  getAttributeTemplateAttributeCode() {
    return this.attributeTemplateAttributeCode;
  }

  /**
   * Get Edit_AttributeTemplateAttribute.
   * @returns {string}
   */
  getEditAttributeTemplateAttribute() {
    return this.editAttributeTemplateAttribute;
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
   * @returns {AttributeTemplateAttributeUpdate}
   */
  setAttributeTemplateId(attributeTemplateId) {
    this.attributeTemplateId = attributeTemplateId;
    return this;
  }

  /**
   * Set AttributeTemplate_Code.
   * @param {string} attributeTemplateCode
   * @returns {AttributeTemplateAttributeUpdate}
   */
  setAttributeTemplateCode(attributeTemplateCode) {
    this.attributeTemplateCode = attributeTemplateCode;
    return this;
  }

  /**
   * Set Edit_AttributeTemplate.
   * @param {string} editAttributeTemplate
   * @returns {AttributeTemplateAttributeUpdate}
   */
  setEditAttributeTemplate(editAttributeTemplate) {
    this.editAttributeTemplate = editAttributeTemplate;
    return this;
  }

  /**
   * Set AttributeTemplateAttribute_ID.
   * @param {number} attributeTemplateAttributeId
   * @returns {AttributeTemplateAttributeUpdate}
   */
  setAttributeTemplateAttributeId(attributeTemplateAttributeId) {
    this.attributeTemplateAttributeId = attributeTemplateAttributeId;
    return this;
  }

  /**
   * Set AttributeTemplateAttribute_Code.
   * @param {string} attributeTemplateAttributeCode
   * @returns {AttributeTemplateAttributeUpdate}
   */
  setAttributeTemplateAttributeCode(attributeTemplateAttributeCode) {
    this.attributeTemplateAttributeCode = attributeTemplateAttributeCode;
    return this;
  }

  /**
   * Set Edit_AttributeTemplateAttribute.
   * @param {string} editAttributeTemplateAttribute
   * @returns {AttributeTemplateAttributeUpdate}
   */
  setEditAttributeTemplateAttribute(editAttributeTemplateAttribute) {
    this.editAttributeTemplateAttribute = editAttributeTemplateAttribute;
    return this;
  }

  /**
   * Set Code.
   * @param {string} code
   * @returns {AttributeTemplateAttributeUpdate}
   */
  setCode(code) {
    this.code = code;
    return this;
  }

  /**
   * Set Prompt.
   * @param {string} prompt
   * @returns {AttributeTemplateAttributeUpdate}
   */
  setPrompt(prompt) {
    this.prompt = prompt;
    return this;
  }

  /**
   * Set Type.
   * @param {string} type
   * @returns {AttributeTemplateAttributeUpdate}
   */
  setType(type) {
    this.type = type;
    return this;
  }

  /**
   * Set Image.
   * @param {string} image
   * @returns {AttributeTemplateAttributeUpdate}
   */
  setImage(image) {
    this.image = image;
    return this;
  }

  /**
   * Set Price.
   * @param {number} price
   * @returns {AttributeTemplateAttributeUpdate}
   */
  setPrice(price) {
    this.price = price;
    return this;
  }

  /**
   * Set Cost.
   * @param {number} cost
   * @returns {AttributeTemplateAttributeUpdate}
   */
  setCost(cost) {
    this.cost = cost;
    return this;
  }

  /**
   * Set Weight.
   * @param {number} weight
   * @returns {AttributeTemplateAttributeUpdate}
   */
  setWeight(weight) {
    this.weight = weight;
    return this;
  }

  /**
   * Set Copy.
   * @param {boolean} copy
   * @returns {AttributeTemplateAttributeUpdate}
   */
  setCopy(copy) {
    this.copy = copy;
    return this;
  }

  /**
   * Set Required.
   * @param {boolean} required
   * @returns {AttributeTemplateAttributeUpdate}
   */
  setRequired(required) {
    this.required = required;
    return this;
  }

  /**
   * Set Inventory.
   * @param {boolean} inventory
   * @returns {AttributeTemplateAttributeUpdate}
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

    if (!util.isNullOrUndefined(this.attributeTemplateAttributeId)) {
      data['AttributeTemplateAttribute_ID'] = this.attributeTemplateAttributeId;
    } else if (!util.isNullOrUndefined(this.attributeTemplateAttributeCode)) {
      data['AttributeTemplateAttribute_Code'] = this.attributeTemplateAttributeCode;
    } else if (!util.isNullOrUndefined(this.editAttributeTemplateAttribute)) {
      data['Edit_AttributeTemplateAttribute'] = this.editAttributeTemplateAttribute;
    }

    data['Code'] = this.code;

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
    return new responses.AttributeTemplateAttributeUpdate(this, httpResponse, data);
  }
}

module.exports.AttributeTemplateAttributeUpdate = AttributeTemplateAttributeUpdate;