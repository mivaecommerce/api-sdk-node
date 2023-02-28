/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** 
 * OrderProductAttribute data model.
 * @class
 */
class OrderProductAttribute extends Model {
  /**
   * OrderProductAttribute Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get code.
   * @returns {string}
   */
  getCode() {
    return this.getField('code');
  }
  
  /**
   * Get template_code.
   * @returns {string}
   */
  getTemplateCode() {
    return this.getField('template_code');
  }
  
  /**
   * Get value.
   * @returns {string}
   */
  getValue() {
    return this.getField('value');
  }
  
  /**
   * Set code.
   * @param {string} code
   * @returns {OrderProductAttribute}
   */
  setCode(code) {
    return this.setField('code', code);
  }

  /**
   * Set template_code.
   * @param {string} templateCode
   * @returns {OrderProductAttribute}
   */
  setTemplateCode(templateCode) {
    return this.setField('template_code', templateCode);
  }

  /**
   * Set value.
   * @param {string} value
   * @returns {OrderProductAttribute}
   */
  setValue(value) {
    return this.setField('value', value);
  }
}

module.exports.OrderProductAttribute = OrderProductAttribute;