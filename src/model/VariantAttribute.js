/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** 
 * VariantAttribute data model.
 * @class
 */
class VariantAttribute extends Model {
  /**
   * VariantAttribute Constructor.
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
  getAttributeTemplateAttributeId() {
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
  getAttributeTemplateAttributeCode() {
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
   * @returns {VariantAttribute}
   */
  setAttributeId(attributeId) {
    return this.setField('attr_id', attributeId);
  }

  /**
   * Set attmpat_id.
   * @param {number} attributeTemplateAttributeId
   * @returns {VariantAttribute}
   */
  setAttributeTemplateAttributeId(attributeTemplateAttributeId) {
    return this.setField('attmpat_id', attributeTemplateAttributeId);
  }

  /**
   * Set option_id.
   * @param {number} optionId
   * @returns {VariantAttribute}
   */
  setOptionId(optionId) {
    return this.setField('option_id', optionId);
  }

  /**
   * Set attr_code.
   * @param {string} attributeCode
   * @returns {VariantAttribute}
   */
  setAttributeCode(attributeCode) {
    return this.setField('attr_code', attributeCode);
  }

  /**
   * Set attmpat_code.
   * @param {string} attributeTemplateAttributeCode
   * @returns {VariantAttribute}
   */
  setAttributeTemplateAttributeCode(attributeTemplateAttributeCode) {
    return this.setField('attmpat_code', attributeTemplateAttributeCode);
  }

  /**
   * Set option_code.
   * @param {string} optionCode
   * @returns {VariantAttribute}
   */
  setOptionCode(optionCode) {
    return this.setField('option_code', optionCode);
  }
}

module.exports.VariantAttribute = VariantAttribute;