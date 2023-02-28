/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** 
 * ProductSubscriptionTermDate data model.
 * @class
 */
class ProductSubscriptionTermDate extends Model {
  /**
   * ProductSubscriptionTermDate Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get subterm_id.
   * @returns {number}
   */
  getSubscriptionTermId() {
    return this.getField('subterm_id', 0);
  }
  
  /**
   * Get term_dom.
   * @returns {number}
   */
  getTermDayOfMonth() {
    return this.getField('term_dom', 0);
  }
  
  /**
   * Get term_mon.
   * @returns {number}
   */
  getTermMonth() {
    return this.getField('term_mon', 0);
  }
}

module.exports.ProductSubscriptionTermDate = ProductSubscriptionTermDate;