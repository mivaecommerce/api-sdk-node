/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** 
 * OrderCharge data model.
 * @class
 */
class OrderCharge extends Model {
  /**
   * OrderCharge Constructor.
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
   * Get charge_id.
   * @returns {number}
   */
  getChargeId() {
    return this.getField('charge_id', 0);
  }
  
  /**
   * Get module_id.
   * @returns {number}
   */
  getModuleId() {
    return this.getField('module_id', 0);
  }
  
  /**
   * Get type.
   * @returns {string}
   */
  getType() {
    return this.getField('type');
  }
  
  /**
   * Get descrip.
   * @returns {string}
   */
  getDescription() {
    return this.getField('descrip');
  }
  
  /**
   * Get amount.
   * @returns {number}
   */
  getAmount() {
    return this.getField('amount', 0.00);
  }
  
  /**
   * Get formatted_amount.
   * @returns {string}
   */
  getFormattedAmount() {
    return this.getField('formatted_amount');
  }
  
  /**
   * Get disp_amt.
   * @returns {number}
   */
  getDisplayAmount() {
    return this.getField('disp_amt', 0.00);
  }
  
  /**
   * Get formatted_disp_amt.
   * @returns {string}
   */
  getFormattedDisplayAmount() {
    return this.getField('formatted_disp_amt');
  }
  
  /**
   * Get tax_exempt.
   * @returns {boolean}
   */
  getTaxExempt() {
    return this.getField('tax_exempt', false);
  }
  
  /**
   * Get tax.
   * @returns {number}
   */
  getTax() {
    return this.getField('tax', 0.00);
  }
  
  /**
   * Get formatted_tax.
   * @returns {string}
   */
  getFormattedTax() {
    return this.getField('formatted_tax');
  }
  
  /**
   * Set type.
   * @param {string} type
   * @returns {OrderCharge}
   */
  setType(type) {
    return this.setField('type', type);
  }

  /**
   * Set descrip.
   * @param {string} description
   * @returns {OrderCharge}
   */
  setDescription(description) {
    return this.setField('descrip', description);
  }

  /**
   * Set amount.
   * @param {number} amount
   * @returns {OrderCharge}
   */
  setAmount(amount) {
    return this.setField('amount', amount);
  }

  /**
   * Set disp_amt.
   * @param {number} displayAmount
   * @returns {OrderCharge}
   */
  setDisplayAmount(displayAmount) {
    return this.setField('disp_amt', displayAmount);
  }

  /**
   * Set tax_exempt.
   * @param {boolean} taxExempt
   * @returns {OrderCharge}
   */
  setTaxExempt(taxExempt) {
    return this.setField('tax_exempt', taxExempt);
  }
}

module.exports.OrderCharge = OrderCharge;