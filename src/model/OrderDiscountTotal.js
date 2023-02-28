/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** 
 * OrderDiscountTotal data model.
 * @class
 */
class OrderDiscountTotal extends Model {
  /**
   * OrderDiscountTotal Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get order_id.
   * @returns {number}
   */
  getOrderId() {
    return this.getField('order_id', 0);
  }
  
  /**
   * Get pgrp_id.
   * @returns {number}
   */
  getPriceGroupId() {
    return this.getField('pgrp_id', 0);
  }
  
  /**
   * Get name.
   * @returns {string}
   */
  getName() {
    return this.getField('name');
  }
  
  /**
   * Get descrip.
   * @returns {string}
   */
  getDescription() {
    return this.getField('descrip');
  }
  
  /**
   * Get total.
   * @returns {number}
   */
  getTotal() {
    return this.getField('total', 0.00);
  }
}

module.exports.OrderDiscountTotal = OrderDiscountTotal;