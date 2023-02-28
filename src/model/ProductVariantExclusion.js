/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** 
 * ProductVariantExclusion data model.
 * @class
 */
class ProductVariantExclusion extends Model {
  /**
   * ProductVariantExclusion Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get attr_id.
   * @returns {number}
   */
  getAttributeId() {
    return this.getField('attr_id', 0);
  }
  
  /**
   * Get attmpat_id.
   * @returns {number}
   */
  getAttributeTemplateId() {
    return this.getField('attmpat_id', 0);
  }
  
  /**
   * Get option_id.
   * @returns {number}
   */
  getOptionId() {
    return this.getField('option_id', 0);
  }
  
  /**
   * Get attr_code.
   * @returns {string}
   */
  getAttributeCode() {
    return this.getField('attr_code');
  }
  
  /**
   * Get attmpat_code.
   * @returns {string}
   */
  getAttributeTemplateCode() {
    return this.getField('attmpat_code');
  }
  
  /**
   * Get option_code.
   * @returns {string}
   */
  getOptionCode() {
    return this.getField('option_code');
  }
  
  /**
   * Set attr_id.
   * @param {number} attributeId
   * @returns {ProductVariantExclusion}
   */
  setAttributeId(attributeId) {
    return this.setField('attr_id', attributeId);
  }

  /**
   * Set attmpat_id.
   * @param {number} attributeTemplateId
   * @returns {ProductVariantExclusion}
   */
  setAttributeTemplateId(attributeTemplateId) {
    return this.setField('attmpat_id', attributeTemplateId);
  }

  /**
   * Set option_id.
   * @param {number} optionId
   * @returns {ProductVariantExclusion}
   */
  setOptionId(optionId) {
    return this.setField('option_id', optionId);
  }

  /**
   * Set attr_code.
   * @param {string} attributeCode
   * @returns {ProductVariantExclusion}
   */
  setAttributeCode(attributeCode) {
    return this.setField('attr_code', attributeCode);
  }

  /**
   * Set attmpat_code.
   * @param {string} attributeTemplateCode
   * @returns {ProductVariantExclusion}
   */
  setAttributeTemplateCode(attributeTemplateCode) {
    return this.setField('attmpat_code', attributeTemplateCode);
  }

  /**
   * Set option_code.
   * @param {string} optionCode
   * @returns {ProductVariantExclusion}
   */
  setOptionCode(optionCode) {
    return this.setField('option_code', optionCode);
  }
}

module.exports.ProductVariantExclusion = ProductVariantExclusion;