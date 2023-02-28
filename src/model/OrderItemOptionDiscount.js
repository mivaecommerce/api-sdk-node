/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** 
 * OrderItemOptionDiscount data model.
 * @class
 */
class OrderItemOptionDiscount extends Model {
  /**
   * OrderItemOptionDiscount Constructor.
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
   * Get line_id.
   * @returns {number}
   */
  getLineId() {
    return this.getField('line_id', 0);
  }
  
  /**
   * Get attr_id.
   * @returns {number}
   */
  getAttributeId() {
    return this.getField('attr_id', 0);
  }
  
  /**
   * Get attmpat_id.
   * @returns {number}
   */
  getAttributeTemplateAttributeId() {
    return this.getField('attmpat_id', 0);
  }
  
  /**
   * Get pgrp_id.
   * @returns {number}
   */
  getPriceGroupId() {
    return this.getField('pgrp_id', 0);
  }
  
  /**
   * Get display.
   * @returns {boolean}
   */
  getDisplay() {
    return this.getField('display', false);
  }
  
  /**
   * Get descrip.
   * @returns {string}
   */
  getDescription() {
    return this.getField('descrip');
  }
  
  /**
   * Get discount.
   * @returns {number}
   */
  getDiscount() {
    return this.getField('discount', 0.00);
  }
}

module.exports.OrderItemOptionDiscount = OrderItemOptionDiscount;