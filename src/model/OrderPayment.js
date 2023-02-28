/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** ORDER_PAYMENT_TYPE constants. */
/** @ignore */
const ORDER_PAYMENT_TYPE_DECLINED = 0;
/** @ignore */
const ORDER_PAYMENT_TYPE_LEGACY_AUTH = 1;
/** @ignore */
const ORDER_PAYMENT_TYPE_LEGACY_CAPTURE = 2;
/** @ignore */
const ORDER_PAYMENT_TYPE_AUTH = 3;
/** @ignore */
const ORDER_PAYMENT_TYPE_CAPTURE = 4;
/** @ignore */
const ORDER_PAYMENT_TYPE_AUTH_CAPTURE = 5;
/** @ignore */
const ORDER_PAYMENT_TYPE_REFUND = 6;
/** @ignore */
const ORDER_PAYMENT_TYPE_VOID = 7;

/** 
 * OrderPayment data model.
 * @class
 */
class OrderPayment extends Model {
  /**
   * OrderPayment Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Constant ORDER_PAYMENT_TYPE_DECLINED
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_PAYMENT_TYPE_DECLINED() {
    return ORDER_PAYMENT_TYPE_DECLINED;
  }

  /**
   * Constant ORDER_PAYMENT_TYPE_LEGACY_AUTH
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_PAYMENT_TYPE_LEGACY_AUTH() {
    return ORDER_PAYMENT_TYPE_LEGACY_AUTH;
  }

  /**
   * Constant ORDER_PAYMENT_TYPE_LEGACY_CAPTURE
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_PAYMENT_TYPE_LEGACY_CAPTURE() {
    return ORDER_PAYMENT_TYPE_LEGACY_CAPTURE;
  }

  /**
   * Constant ORDER_PAYMENT_TYPE_AUTH
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_PAYMENT_TYPE_AUTH() {
    return ORDER_PAYMENT_TYPE_AUTH;
  }

  /**
   * Constant ORDER_PAYMENT_TYPE_CAPTURE
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_PAYMENT_TYPE_CAPTURE() {
    return ORDER_PAYMENT_TYPE_CAPTURE;
  }

  /**
   * Constant ORDER_PAYMENT_TYPE_AUTH_CAPTURE
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_PAYMENT_TYPE_AUTH_CAPTURE() {
    return ORDER_PAYMENT_TYPE_AUTH_CAPTURE;
  }

  /**
   * Constant ORDER_PAYMENT_TYPE_REFUND
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_PAYMENT_TYPE_REFUND() {
    return ORDER_PAYMENT_TYPE_REFUND;
  }

  /**
   * Constant ORDER_PAYMENT_TYPE_VOID
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_PAYMENT_TYPE_VOID() {
    return ORDER_PAYMENT_TYPE_VOID;
  }

  /**
   * Get id.
   * @returns {number}
   */
  getId() {
    return this.getField('id', 0);
  }
  
  /**
   * Get order_id.
   * @returns {number}
   */
  getOrderId() {
    return this.getField('order_id', 0);
  }
  
  /**
   * Get type.
   * @returns {number}
   */
  getType() {
    return this.getField('type', 0);
  }
  
  /**
   * Get refnum.
   * @returns {string}
   */
  getReferenceNumber() {
    return this.getField('refnum');
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
   * Get available.
   * @returns {number}
   */
  getAvailable() {
    return this.getField('available', 0.00);
  }
  
  /**
   * Get formatted_available.
   * @returns {string}
   */
  getFormattedAvailable() {
    return this.getField('formatted_available');
  }
  
  /**
   * Get dtstamp.
   * @returns {number}
   */
  getDateTimeStamp() {
    return this.getTimestampField('dtstamp');
  }
  
  /**
   * Get expires.
   * @returns {number}
   */
  getExpires() {
    return this.getTimestampField('expires');
  }
  
  /**
   * Get pay_id.
   * @returns {number}
   */
  getPaymentId() {
    return this.getField('pay_id', 0);
  }
  
  /**
   * Get pay_secid.
   * @returns {number}
   */
  getPaymentSecId() {
    return this.getField('pay_secid', 0);
  }
  
  /**
   * Get decrypt_status.
   * @returns {string}
   */
  getDecryptStatus() {
    return this.getField('decrypt_status');
  }
  
  /**
   * Get decrypt_error.
   * @returns {string}
   */
  getDecryptError() {
    return this.getField('decrypt_error');
  }
  
  /**
   * Get description.
   * @returns {string}
   */
  getDescription() {
    return this.getField('description');
  }
  
  /**
   * Get data.
   * @returns {array}
   */
  getPaymentData() {
    return this.getField('data', []);
  }
  
  /**
   * Get ip.
   * @returns {string}
   */
  getIp() {
    return this.getField('ip');
  }
}

module.exports.OrderPayment = OrderPayment;