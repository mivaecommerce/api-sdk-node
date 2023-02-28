/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** 
 * KitPart data model.
 * @class
 */
class KitPart extends Model {
  /**
   * KitPart Constructor.
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
   * Get quantity.
   * @returns {number}
   */
  getQuantity() {
    return this.getField('quantity', 0);
  }
  
  /**
   * Set part_id.
   * @param {number} partId
   * @returns {KitPart}
   */
  setPartId(partId) {
    return this.setField('part_id', partId);
  }

  /**
   * Set quantity.
   * @param {number} quantity
   * @returns {KitPart}
   */
  setQuantity(quantity) {
    return this.setField('quantity', quantity);
  }
}

module.exports.KitPart = KitPart;