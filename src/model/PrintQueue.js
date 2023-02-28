/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** 
 * PrintQueue data model.
 * @class
 */
class PrintQueue extends Model {
  /**
   * PrintQueue Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get id.
   * @returns {number}
   */
  getId() {
    return this.getField('id', 0);
  }
  
  /**
   * Get descrip.
   * @returns {string}
   */
  getDescription() {
    return this.getField('descrip');
  }
}

module.exports.PrintQueue = PrintQueue;