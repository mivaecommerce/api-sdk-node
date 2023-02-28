/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** 
 * PaymentCardType data model.
 * @class
 */
class PaymentCardType extends Model {
  /**
   * PaymentCardType Constructor.
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
   * Get type.
   * @returns {string}
   */
  getType() {
    return this.getField('type');
  }
  
  /**
   * Get prefixes.
   * @returns {string}
   */
  getPrefixes() {
    return this.getField('prefixes');
  }
  
  /**
   * Get lengths.
   * @returns {string}
   */
  getLengths() {
    return this.getField('lengths');
  }
  
  /**
   * Get cvv.
   * @returns {boolean}
   */
  getCvv() {
    return this.getField('cvv', false);
  }
}

module.exports.PaymentCardType = PaymentCardType;