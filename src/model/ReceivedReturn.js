/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** 
 * ReceivedReturn data model.
 * @class
 */
class ReceivedReturn extends Model {
  /**
   * ReceivedReturn Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get return_id.
   * @returns {number}
   */
  getReturnId() {
    return this.getField('return_id', 0);
  }
  
  /**
   * Get adjust_inventory.
   * @returns {number}
   */
  getAdjustInventory() {
    return this.getField('adjust_inventory', 0);
  }
  
  /**
   * Set return_id.
   * @param {number} returnId
   * @returns {ReceivedReturn}
   */
  setReturnId(returnId) {
    return this.setField('return_id', returnId);
  }

  /**
   * Set adjust_inventory.
   * @param {number} adjustInventory
   * @returns {ReceivedReturn}
   */
  setAdjustInventory(adjustInventory) {
    return this.setField('adjust_inventory', adjustInventory);
  }
}

module.exports.ReceivedReturn = ReceivedReturn;