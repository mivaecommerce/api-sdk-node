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
const { ProductListLoadQuery } = require('./ProductListLoadQuery')

/** 
 * Handles API Request AttributeTemplateProductList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/attributetemplateproductlist_load_query
 * @class
 */
class AttributeTemplateProductListLoadQuery extends ProductListLoadQuery {
  /**
   * AttributeTemplateProductListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?AttributeTemplate} attributeTemplate
   */
  constructor(client, attributeTemplate = null) {
    super(client);
    this.function = 'AttributeTemplateProductList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.attributeTemplateId = null;
    this.attributeTemplateCode = null;
    this.editAttributeTemplate = null;
    this.assigned = null;
    this.unassigned = null;

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
   * Get Assigned.
   * @returns {boolean}
   */
  getAssigned() {
    return this.assigned;
  }

  /**
   * Get Unassigned.
   * @returns {boolean}
   */
  getUnassigned() {
    return this.unassigned;
  }

  /**
   * Set AttributeTemplate_ID.
   * @param {number} attributeTemplateId
   * @returns {AttributeTemplateProductListLoadQuery}
   */
  setAttributeTemplateId(attributeTemplateId) {
    this.attributeTemplateId = attributeTemplateId;
    return this;
  }

  /**
   * Set AttributeTemplate_Code.
   * @param {string} attributeTemplateCode
   * @returns {AttributeTemplateProductListLoadQuery}
   */
  setAttributeTemplateCode(attributeTemplateCode) {
    this.attributeTemplateCode = attributeTemplateCode;
    return this;
  }

  /**
   * Set Edit_AttributeTemplate.
   * @param {string} editAttributeTemplate
   * @returns {AttributeTemplateProductListLoadQuery}
   */
  setEditAttributeTemplate(editAttributeTemplate) {
    this.editAttributeTemplate = editAttributeTemplate;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {AttributeTemplateProductListLoadQuery}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Set Unassigned.
   * @param {boolean} unassigned
   * @returns {AttributeTemplateProductListLoadQuery}
   */
  setUnassigned(unassigned) {
    this.unassigned = unassigned;
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

    if (!util.isNullOrUndefined(this.assigned)) {
      data['Assigned'] = this.assigned;
    }

    if (!util.isNullOrUndefined(this.unassigned)) {
      data['Unassigned'] = this.unassigned;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.AttributeTemplateProductListLoadQuery(this, httpResponse, data);
  }
}

module.exports.AttributeTemplateProductListLoadQuery = AttributeTemplateProductListLoadQuery;