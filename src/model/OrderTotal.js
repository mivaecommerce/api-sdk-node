/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** 
 * OrderTotal data model.
 * @class
 */
class OrderTotal extends Model {
  /**
   * OrderTotal Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get total.
   * @returns {number}
   */
  getTotal() {
    return this.getField('total', 0.00);
  }
  
  /**
   * Get formatted_total.
   * @returns {string}
   */
  getFormattedTotal() {
    return this.getField('formatted_total');
  }
}

module.exports.OrderTotal = OrderTotal;