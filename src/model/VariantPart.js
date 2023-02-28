/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** 
 * VariantPart data model.
 * @class
 */
class VariantPart extends Model {
  /**
   * VariantPart Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get part_id.
   * @returns {number}
   */
  getPartId() {
    return this.getField('part_id', 0);
  }
  
  /**
   * Get part_code.
   * @returns {string}
   */
  getPartCode() {
    return this.getField('part_code');
  }
  
  /**
   * Get quantity.
   * @returns {number}
   */
  getQuantity() {
    return this.getField('quantity', 0);
  }
  
  /**
   * Set part_id.
   * @param {number} partId
   * @returns {VariantPart}
   */
  setPartId(partId) {
    return this.setField('part_id', partId);
  }

  /**
   * Set part_code.
   * @param {string} partCode
   * @returns {VariantPart}
   */
  setPartCode(partCode) {
    return this.setField('part_code', partCode);
  }

  /**
   * Set quantity.
   * @param {number} quantity
   * @returns {VariantPart}
   */
  setQuantity(quantity) {
    return this.setField('quantity', quantity);
  }
}

module.exports.VariantPart = VariantPart;