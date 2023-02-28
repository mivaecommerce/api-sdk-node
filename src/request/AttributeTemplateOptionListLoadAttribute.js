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
const { ListQueryRequest }  = require('./../listquery');

/** 
 * Handles API Request AttributeTemplateOptionList_Load_Attribute. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/attributetemplateoptionlist_load_attribute
 * @class
 */
class AttributeTemplateOptionListLoadAttribute extends ListQueryRequest {
  /**
   * AttributeTemplateOptionListLoadAttribute Constructor.
   * @param {?BaseClient} client
   * @param {?AttributeTemplateAttribute} attributeTemplateAttribute
   */
  constructor(client, attributeTemplateAttribute = null) {
    super(client);
    this.function = 'AttributeTemplateOptionList_Load_Attribute';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.attributeTemplateId = null;
    this.attributeTemplateCode = null;
    this.editAttributeTemplate = null;
    this.attributeTemplateAttributeId = null;
    this.attributeTemplateAttributeCode = null;
    this.editAttributeTemplateAttribute = null;

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
   * Set AttributeTemplate_ID.
   * @param {number} attributeTemplateId
   * @returns {AttributeTemplateOptionListLoadAttribute}
   */
  setAttributeTemplateId(attributeTemplateId) {
    this.attributeTemplateId = attributeTemplateId;
    return this;
  }

  /**
   * Set AttributeTemplate_Code.
   * @param {string} attributeTemplateCode
   * @returns {AttributeTemplateOptionListLoadAttribute}
   */
  setAttributeTemplateCode(attributeTemplateCode) {
    this.attributeTemplateCode = attributeTemplateCode;
    return this;
  }

  /**
   * Set Edit_AttributeTemplate.
   * @param {string} editAttributeTemplate
   * @returns {AttributeTemplateOptionListLoadAttribute}
   */
  setEditAttributeTemplate(editAttributeTemplate) {
    this.editAttributeTemplate = editAttributeTemplate;
    return this;
  }

  /**
   * Set AttributeTemplateAttribute_ID.
   * @param {number} attributeTemplateAttributeId
   * @returns {AttributeTemplateOptionListLoadAttribute}
   */
  setAttributeTemplateAttributeId(attributeTemplateAttributeId) {
    this.attributeTemplateAttributeId = attributeTemplateAttributeId;
    return this;
  }

  /**
   * Set AttributeTemplateAttribute_Code.
   * @param {string} attributeTemplateAttributeCode
   * @returns {AttributeTemplateOptionListLoadAttribute}
   */
  setAttributeTemplateAttributeCode(attributeTemplateAttributeCode) {
    this.attributeTemplateAttributeCode = attributeTemplateAttributeCode;
    return this;
  }

  /**
   * Set Edit_AttributeTemplateAttribute.
   * @param {string} editAttributeTemplateAttribute
   * @returns {AttributeTemplateOptionListLoadAttribute}
   */
  setEditAttributeTemplateAttribute(editAttributeTemplateAttribute) {
    this.editAttributeTemplateAttribute = editAttributeTemplateAttribute;
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

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.AttributeTemplateOptionListLoadAttribute(this, httpResponse, data);
  }
}

module.exports.AttributeTemplateOptionListLoadAttribute = AttributeTemplateOptionListLoadAttribute;