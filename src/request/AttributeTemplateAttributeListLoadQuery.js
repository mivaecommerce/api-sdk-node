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
 * Handles API Request AttributeTemplateAttributeList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/attributetemplateattributelist_load_query
 * @class
 */
class AttributeTemplateAttributeListLoadQuery extends ListQueryRequest {
  /**
   * AttributeTemplateAttributeListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?AttributeTemplate} attributeTemplate
   */
  constructor(client, attributeTemplate = null) {
    super(client);
    this.function = 'AttributeTemplateAttributeList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'attr_code',
      'attr_prompt',
      'attr_price',
      'attr_cost',
      'attr_weight',
      'attr_image',
      'opt_code',
      'opt_prompt',
      'opt_price',
      'opt_cost',
      'opt_weight',
      'opt_image',
      'code',
      'prompt',
      'price',
      'cost',
      'weight',
      'image',
      'required',
      'inventory'
    ];

    this.availableSortFields = [
      'id',
      'code',
      'type',
      'prompt',
      'price',
      'cost',
      'weight',
      'image',
      'required',
      'inventory',
      'attr_code',
      'attr_prompt',
      'attr_price',
      'attr_cost',
      'attr_weight',
      'attr_image',
      'opt_code',
      'opt_prompt',
      'opt_price',
      'opt_cost',
      'opt_weight',
      'opt_image'
    ];

    this.attributeTemplateId = null;
    this.attributeTemplateCode = null;
    this.editAttributeTemplate = null;

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
   * Set AttributeTemplate_ID.
   * @param {number} attributeTemplateId
   * @returns {AttributeTemplateAttributeListLoadQuery}
   */
  setAttributeTemplateId(attributeTemplateId) {
    this.attributeTemplateId = attributeTemplateId;
    return this;
  }

  /**
   * Set AttributeTemplate_Code.
   * @param {string} attributeTemplateCode
   * @returns {AttributeTemplateAttributeListLoadQuery}
   */
  setAttributeTemplateCode(attributeTemplateCode) {
    this.attributeTemplateCode = attributeTemplateCode;
    return this;
  }

  /**
   * Set Edit_AttributeTemplate.
   * @param {string} editAttributeTemplate
   * @returns {AttributeTemplateAttributeListLoadQuery}
   */
  setEditAttributeTemplate(editAttributeTemplate) {
    this.editAttributeTemplate = editAttributeTemplate;
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

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.AttributeTemplateAttributeListLoadQuery(this, httpResponse, data);
  }
}

module.exports.AttributeTemplateAttributeListLoadQuery = AttributeTemplateAttributeListLoadQuery;