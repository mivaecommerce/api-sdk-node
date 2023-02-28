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
 * Handles API Request AttributeTemplateOption_Set_Default. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/attributetemplateoption_set_default
 * @class
 */
class AttributeTemplateOptionSetDefault extends Request {
  /**
   * AttributeTemplateOptionSetDefault Constructor.
   * @param {?BaseClient} client
   * @param {?AttributeTemplateOption} attributeTemplateOption
   */
  constructor(client, attributeTemplateOption = null) {
    super(client);
    this.function = 'AttributeTemplateOption_Set_Default';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.attributeTemplateOptionId = null;
    this.attributeTemplateOptionCode = null;
    this.editAttributeTemplateOption = null;
    this.attributeTemplateId = null;
    this.attributeTemplateCode = null;
    this.editAttributeTemplate = null;
    this.attributeTemplateAttributeId = null;
    this.attributeTemplateAttributeCode = null;
    this.editAttributeTemplateAttribute = null;
    this.attributeTemplateOptionDefault = null;

    if (util.isInstanceOf(attributeTemplateOption, models.AttributeTemplateOption)) {
      if (attributeTemplateOption.getId()) {
        this.setAttributeTemplateOptionId(attributeTemplateOption.getId());
      }
    }
  }

  /**
   * Get AttributeTemplateOption_ID.
   * @returns {number}
   */
  getAttributeTemplateOptionId() {
    return this.attributeTemplateOptionId;
  }

  /**
   * Get AttributeTemplateOption_Code.
   * @returns {string}
   */
  getAttributeTemplateOptionCode() {
    return this.attributeTemplateOptionCode;
  }

  /**
   * Get Edit_AttributeTemplateOption.
   * @returns {string}
   */
  getEditAttributeTemplateOption() {
    return this.editAttributeTemplateOption;
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
   * Get AttributeTemplateOption_Default.
   * @returns {boolean}
   */
  getAttributeTemplateOptionDefault() {
    return this.attributeTemplateOptionDefault;
  }

  /**
   * Set AttributeTemplateOption_ID.
   * @param {number} attributeTemplateOptionId
   * @returns {AttributeTemplateOptionSetDefault}
   */
  setAttributeTemplateOptionId(attributeTemplateOptionId) {
    this.attributeTemplateOptionId = attributeTemplateOptionId;
    return this;
  }

  /**
   * Set AttributeTemplateOption_Code.
   * @param {string} attributeTemplateOptionCode
   * @returns {AttributeTemplateOptionSetDefault}
   */
  setAttributeTemplateOptionCode(attributeTemplateOptionCode) {
    this.attributeTemplateOptionCode = attributeTemplateOptionCode;
    return this;
  }

  /**
   * Set Edit_AttributeTemplateOption.
   * @param {string} editAttributeTemplateOption
   * @returns {AttributeTemplateOptionSetDefault}
   */
  setEditAttributeTemplateOption(editAttributeTemplateOption) {
    this.editAttributeTemplateOption = editAttributeTemplateOption;
    return this;
  }

  /**
   * Set AttributeTemplate_ID.
   * @param {number} attributeTemplateId
   * @returns {AttributeTemplateOptionSetDefault}
   */
  setAttributeTemplateId(attributeTemplateId) {
    this.attributeTemplateId = attributeTemplateId;
    return this;
  }

  /**
   * Set AttributeTemplate_Code.
   * @param {string} attributeTemplateCode
   * @returns {AttributeTemplateOptionSetDefault}
   */
  setAttributeTemplateCode(attributeTemplateCode) {
    this.attributeTemplateCode = attributeTemplateCode;
    return this;
  }

  /**
   * Set Edit_AttributeTemplate.
   * @param {string} editAttributeTemplate
   * @returns {AttributeTemplateOptionSetDefault}
   */
  setEditAttributeTemplate(editAttributeTemplate) {
    this.editAttributeTemplate = editAttributeTemplate;
    return this;
  }

  /**
   * Set AttributeTemplateAttribute_ID.
   * @param {number} attributeTemplateAttributeId
   * @returns {AttributeTemplateOptionSetDefault}
   */
  setAttributeTemplateAttributeId(attributeTemplateAttributeId) {
    this.attributeTemplateAttributeId = attributeTemplateAttributeId;
    return this;
  }

  /**
   * Set AttributeTemplateAttribute_Code.
   * @param {string} attributeTemplateAttributeCode
   * @returns {AttributeTemplateOptionSetDefault}
   */
  setAttributeTemplateAttributeCode(attributeTemplateAttributeCode) {
    this.attributeTemplateAttributeCode = attributeTemplateAttributeCode;
    return this;
  }

  /**
   * Set Edit_AttributeTemplateAttribute.
   * @param {string} editAttributeTemplateAttribute
   * @returns {AttributeTemplateOptionSetDefault}
   */
  setEditAttributeTemplateAttribute(editAttributeTemplateAttribute) {
    this.editAttributeTemplateAttribute = editAttributeTemplateAttribute;
    return this;
  }

  /**
   * Set AttributeTemplateOption_Default.
   * @param {boolean} attributeTemplateOptionDefault
   * @returns {AttributeTemplateOptionSetDefault}
   */
  setAttributeTemplateOptionDefault(attributeTemplateOptionDefault) {
    this.attributeTemplateOptionDefault = attributeTemplateOptionDefault;
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

    if (!util.isNullOrUndefined(this.attributeTemplateOptionId)) {
      data['AttributeTemplateOption_ID'] = this.attributeTemplateOptionId;
    } else if (!util.isNullOrUndefined(this.attributeTemplateOptionCode)) {
      data['AttributeTemplateOption_Code'] = this.attributeTemplateOptionCode;
    } else if (!util.isNullOrUndefined(this.editAttributeTemplateOption)) {
      data['Edit_AttributeTemplateOption'] = this.editAttributeTemplateOption;
    }

    data['AttributeTemplateOption_Default'] = this.attributeTemplateOptionDefault;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.AttributeTemplateOptionSetDefault(this, httpResponse, data);
  }
}

module.exports.AttributeTemplateOptionSetDefault = AttributeTemplateOptionSetDefault;