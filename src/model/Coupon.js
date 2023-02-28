/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** CUSTOMER_SCOPE constants. */
/** @ignore */
const CUSTOMER_SCOPE_ALL_SHOPPERS = 'A';
/** @ignore */
const CUSTOMER_SCOPE_SPECIFIC_CUSTOMERS = 'X';
/** @ignore */
const CUSTOMER_SCOPE_ALL_LOGGED_IN = 'L';

/** 
 * Coupon data model.
 * @class
 */
class Coupon extends Model {
  /**
   * Coupon Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Constant CUSTOMER_SCOPE_ALL_SHOPPERS
   * @returns {string}
   * @const
   * @static
   */
  static get CUSTOMER_SCOPE_ALL_SHOPPERS() {
    return CUSTOMER_SCOPE_ALL_SHOPPERS;
  }

  /**
   * Constant CUSTOMER_SCOPE_SPECIFIC_CUSTOMERS
   * @returns {string}
   * @const
   * @static
   */
  static get CUSTOMER_SCOPE_SPECIFIC_CUSTOMERS() {
    return CUSTOMER_SCOPE_SPECIFIC_CUSTOMERS;
  }

  /**
   * Constant CUSTOMER_SCOPE_ALL_LOGGED_IN
   * @returns {string}
   * @const
   * @static
   */
  static get CUSTOMER_SCOPE_ALL_LOGGED_IN() {
    return CUSTOMER_SCOPE_ALL_LOGGED_IN;
  }

  /**
   * Get id.
   * @returns {number}
   */
  getId() {
    return this.getField('id', 0);
  }
  
  /**
   * Get code.
   * @returns {string}
   */
  getCode() {
    return this.getField('code');
  }
  
  /**
   * Get descrip.
   * @returns {string}
   */
  getDescription() {
    return this.getField('descrip');
  }
  
  /**
   * Get custscope.
   * @returns {string}
   */
  getCustomerScope() {
    return this.getField('custscope');
  }
  
  /**
   * Get dt_start.
   * @returns {number}
   */
  getDateTimeStart() {
    return this.getTimestampField('dt_start');
  }
  
  /**
   * Get dt_end.
   * @returns {number}
   */
  getDateTimeEnd() {
    return this.getTimestampField('dt_end');
  }
  
  /**
   * Get max_use.
   * @returns {number}
   */
  getMaxUse() {
    return this.getField('max_use', 0);
  }
  
  /**
   * Get max_per.
   * @returns {number}
   */
  getMaxPer() {
    return this.getField('max_per', 0);
  }
  
  /**
   * Get active.
   * @returns {boolean}
   */
  getActive() {
    return this.getField('active', false);
  }
  
  /**
   * Get use_count.
   * @returns {number}
   */
  getUseCount() {
    return this.getField('use_count', 0);
  }
}

module.exports.Coupon = Coupon;