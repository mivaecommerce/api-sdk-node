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
 * Handles API Request AttributeTemplateOption_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/attributetemplateoption_insert
 * @class
 */
class AttributeTemplateOptionInsert extends Request {
  /**
   * AttributeTemplateOptionInsert Constructor.
   * @param {?BaseClient} client
   * @param {?AttributeTemplateAttribute} attributeTemplateAttribute
   */
  constructor(client, attributeTemplateAttribute = null) {
    super(client);
    this.function = 'AttributeTemplateOption_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.attributeTemplateId = null;
    this.attributeTemplateCode = null;
    this.editAttributeTemplate = null;
    this.attributeTemplateAttributeId = null;
    this.attributeTemplateAttributeCode = null;
    this.editAttributeTemplateAttribute = null;
    this.code = null;
    this.prompt = null;
    this.image = null;
    this.price = null;
    this.cost = null;
    this.weight = null;
    this.defaultOption = null;

    if (util.isInstanceOf(attributeTemplateAttribute, models.AttributeTemplateAttribute)) {
      if (attributeTemplateAttribute.getId()) {
        this.setAttributeTemplateAttributeId(attributeTemplateAttribute.getId());
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
   * Set AttributeTemplate_ID.
   * @param {number} attributeTemplateId
   * @returns {AttributeTemplateOptionInsert}
   */
  setAttributeTemplateId(attributeTemplateId) {
    this.attributeTemplateId = attributeTemplateId;
    return this;
  }

  /**
   * Set AttributeTemplate_Code.
   * @param {string} attributeTemplateCode
   * @returns {AttributeTemplateOptionInsert}
   */
  setAttributeTemplateCode(attributeTemplateCode) {
    this.attributeTemplateCode = attributeTemplateCode;
    return this;
  }

  /**
   * Set Edit_AttributeTemplate.
   * @param {string} editAttributeTemplate
   * @returns {AttributeTemplateOptionInsert}
   */
  setEditAttributeTemplate(editAttributeTemplate) {
    this.editAttributeTemplate = editAttributeTemplate;
    return this;
  }

  /**
   * Set AttributeTemplateAttribute_ID.
   * @param {number} attributeTemplateAttributeId
   * @returns {AttributeTemplateOptionInsert}
   */
  setAttributeTemplateAttributeId(attributeTemplateAttributeId) {
    this.attributeTemplateAttributeId = attributeTemplateAttributeId;
    return this;
  }

  /**
   * Set AttributeTemplateAttribute_Code.
   * @param {string} attributeTemplateAttributeCode
   * @returns {AttributeTemplateOptionInsert}
   */
  setAttributeTemplateAttributeCode(attributeTemplateAttributeCode) {
    this.attributeTemplateAttributeCode = attributeTemplateAttributeCode;
    return this;
  }

  /**
   * Set Edit_AttributeTemplateAttribute.
   * @param {string} editAttributeTemplateAttribute
   * @returns {AttributeTemplateOptionInsert}
   */
  setEditAttributeTemplateAttribute(editAttributeTemplateAttribute) {
    this.editAttributeTemplateAttribute = editAttributeTemplateAttribute;
    return this;
  }

  /**
   * Set Code.
   * @param {string} code
   * @returns {AttributeTemplateOptionInsert}
   */
  setCode(code) {
    this.code = code;
    return this;
  }

  /**
   * Set Prompt.
   * @param {string} prompt
   * @returns {AttributeTemplateOptionInsert}
   */
  setPrompt(prompt) {
    this.prompt = prompt;
    return this;
  }

  /**
   * Set Image.
   * @param {string} image
   * @returns {AttributeTemplateOptionInsert}
   */
  setImage(image) {
    this.image = image;
    return this;
  }

  /**
   * Set Price.
   * @param {number} price
   * @returns {AttributeTemplateOptionInsert}
   */
  setPrice(price) {
    this.price = price;
    return this;
  }

  /**
   * Set Cost.
   * @param {number} cost
   * @returns {AttributeTemplateOptionInsert}
   */
  setCost(cost) {
    this.cost = cost;
    return this;
  }

  /**
   * Set Weight.
   * @param {number} weight
   * @returns {AttributeTemplateOptionInsert}
   */
  setWeight(weight) {
    this.weight = weight;
    return this;
  }

  /**
   * Set default_option.
   * @param {boolean} defaultOption
   * @returns {AttributeTemplateOptionInsert}
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
    return new responses.AttributeTemplateOptionInsert(this, httpResponse, data);
  }
}

module.exports.AttributeTemplateOptionInsert = AttributeTemplateOptionInsert;