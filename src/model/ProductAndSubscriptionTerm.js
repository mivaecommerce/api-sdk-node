/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Product } = require('./Product');

/** 
 * ProductAndSubscriptionTerm data model.
 * @class
 */
class ProductAndSubscriptionTerm extends Product {
  /**
   * ProductAndSubscriptionTerm Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get term_id.
   * @returns {number}
   */
  getTermId() {
    return this.getField('term_id', 0);
  }
  
  /**
   * Get term_frequency.
   * @returns {string}
   */
  getTermFrequency() {
    return this.getField('term_frequency');
  }
  
  /**
   * Get term_term.
   * @returns {number}
   */
  getTermTerm() {
    return this.getField('term_term', 0);
  }
  
  /**
   * Get term_descrip.
   * @returns {string}
   */
  getTermDescription() {
    return this.getField('term_descrip');
  }
  
  /**
   * Get term_n.
   * @returns {number}
   */
  getTermN() {
    return this.getField('term_n', 0);
  }
  
  /**
   * Get term_fixed_dow.
   * @returns {number}
   */
  getTermFixedDayOfWeek() {
    return this.getField('term_fixed_dow', 0);
  }
  
  /**
   * Get term_fixed_dom.
   * @returns {number}
   */
  getTermFixedDayOfMonth() {
    return this.getField('term_fixed_dom', 0);
  }
  
  /**
   * Get term_sub_count.
   * @returns {number}
   */
  getTermSubscriptionCount() {
    return this.getField('term_sub_count', 0);
  }
}

module.exports.ProductAndSubscriptionTerm = ProductAndSubscriptionTerm;