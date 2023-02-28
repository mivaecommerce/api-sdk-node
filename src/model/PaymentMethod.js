/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const models = require('./../models');
const { Model } = require('./../abstract');

/** 
 * PaymentMethod data model.
 * @class
 */
class PaymentMethod extends Model {
  /**
   * PaymentMethod Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);

    if (!util.isUndefined(this.paymentcard)) {
      if (!util.isInstanceOf(this.paymentcard, models.CustomerPaymentCard) && util.isObject(this.paymentcard)) {
        this.paymentcard = new models.CustomerPaymentCard(this.paymentcard);
      } else if (!util.isInstanceOf(this.paymentcard, models.CustomerPaymentCard)) {
        throw new Error(util.format('Expected CustomerPaymentCard or an Object but got %s',
          typeof this.paymentcard));
      }
    } else {
      this.paymentcard = {};
    }

    if (!util.isUndefined(this.orderpaymentcard)) {
      if (!util.isInstanceOf(this.orderpaymentcard, models.OrderPaymentCard) && util.isObject(this.orderpaymentcard)) {
        this.orderpaymentcard = new models.OrderPaymentCard(this.orderpaymentcard);
      } else if (!util.isInstanceOf(this.orderpaymentcard, models.OrderPaymentCard)) {
        throw new Error(util.format('Expected OrderPaymentCard or an Object but got %s',
          typeof this.orderpaymentcard));
      }
    } else {
      this.orderpaymentcard = {};
    }

    if (!util.isUndefined(this.paymentcardtype)) {
      if (!util.isInstanceOf(this.paymentcardtype, models.PaymentCardType) && util.isObject(this.paymentcardtype)) {
        this.paymentcardtype = new models.PaymentCardType(this.paymentcardtype);
      } else if (!util.isInstanceOf(this.paymentcardtype, models.PaymentCardType)) {
        throw new Error(util.format('Expected PaymentCardType or an Object but got %s',
          typeof this.paymentcardtype));
      }
    } else {
      this.paymentcardtype = {};
    }
  }

  /**
   * Get module_id.
   * @returns {number}
   */
  getModuleId() {
    return this.getField('module_id', 0);
  }
  
  /**
   * Get module_api.
   * @returns {number}
   */
  getModuleApi() {
    return this.getField('module_api', 0.00);
  }
  
  /**
   * Get method_code.
   * @returns {string}
   */
  getMethodCode() {
    return this.getField('method_code');
  }
  
  /**
   * Get method_name.
   * @returns {string}
   */
  getMethodName() {
    return this.getField('method_name');
  }
  
  /**
   * Get mivapay.
   * @returns {boolean}
   */
  getMivapay() {
    return this.getField('mivapay', false);
  }
  
  /**
   * Get paymentcard.
   * @returns {CustomerPaymentCard|*}
   */
  getPaymentCard() {
    return this.getField('paymentcard', null);
  }
  
  /**
   * Get orderpaymentcard.
   * @returns {OrderPaymentCard|*}
   */
  getOrderPaymentCard() {
    return this.getField('orderpaymentcard', null);
  }
  
  /**
   * Get paymentcardtype.
   * @returns {PaymentCardType|*}
   */
  getPaymentCardType() {
    return this.getField('paymentcardtype', null);
  }
  
  /**
   * @override
   */
  toObject() {
    var ret = Object.assign(this);

    if (util.isInstanceOf(ret['paymentcard'], models.CustomerPaymentCard)) {
      ret['paymentcard'] = ret['paymentcard'].toObject();
    }

    if (util.isInstanceOf(ret['orderpaymentcard'], models.OrderPaymentCard)) {
      ret['orderpaymentcard'] = ret['orderpaymentcard'].toObject();
    }

    if (util.isInstanceOf(ret['paymentcardtype'], models.PaymentCardType)) {
      ret['paymentcardtype'] = ret['paymentcardtype'].toObject();
    }

    return ret;
  }
}

module.exports.PaymentMethod = PaymentMethod;