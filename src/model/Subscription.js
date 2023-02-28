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
 * Subscription data model.
 * @class
 */
class Subscription extends Model {
  /**
   * Subscription Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    var i;
    var l;

    super(data);

    if (!util.isUndefined(this.options) && util.isArray(this.options)) {
      for (i = 0, l = this.options.length; i < l; i++) {
        if (!util.isInstanceOf(this.options[i], models.SubscriptionOption) && util.isObject(data['options'][i])) {
          this.options[i] = new models.SubscriptionOption(this.options[i]);
        } else if (!util.isInstanceOf(this.options[i], models.SubscriptionOption)) {
          throw new Error(util.format('Expected array of SubscriptionOption or an array of Objects but got %s',
            typeof this.options[i]));
        }
      }
    } else {
      this.options = [];
    }
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
   * Get line_id.
   * @returns {number}
   */
  getLineId() {
    return this.getField('line_id', 0);
  }
  
  /**
   * Get cust_id.
   * @returns {number}
   */
  getCustomerId() {
    return this.getField('cust_id', 0);
  }
  
  /**
   * Get custpc_id.
   * @returns {number}
   */
  getCustomerPaymentCardId() {
    return this.getField('custpc_id', 0);
  }
  
  /**
   * Get product_id.
   * @returns {number}
   */
  getProductId() {
    return this.getField('product_id', 0);
  }
  
  /**
   * Get subterm_id.
   * @returns {number}
   */
  getSubscriptionTermId() {
    return this.getField('subterm_id', 0);
  }
  
  /**
   * Get addr_id.
   * @returns {number}
   */
  getAddressId() {
    return this.getField('addr_id', 0);
  }
  
  /**
   * Get ship_id.
   * @returns {number}
   */
  getShipId() {
    return this.getField('ship_id', 0);
  }
  
  /**
   * Get ship_data.
   * @returns {string}
   */
  getShipData() {
    return this.getField('ship_data');
  }
  
  /**
   * Get quantity.
   * @returns {number}
   */
  getQuantity() {
    return this.getField('quantity', 0);
  }
  
  /**
   * Get termrem.
   * @returns {number}
   */
  getTermRemaining() {
    return this.getField('termrem', 0);
  }
  
  /**
   * Get termproc.
   * @returns {number}
   */
  getTermProcessed() {
    return this.getField('termproc', 0);
  }
  
  /**
   * Get firstdate.
   * @returns {number}
   */
  getFirstDate() {
    return this.getTimestampField('firstdate');
  }
  
  /**
   * Get lastdate.
   * @returns {number}
   */
  getLastDate() {
    return this.getTimestampField('lastdate');
  }
  
  /**
   * Get nextdate.
   * @returns {number}
   */
  getNextDate() {
    return this.getTimestampField('nextdate');
  }
  
  /**
   * Get status.
   * @returns {string}
   */
  getStatus() {
    return this.getField('status');
  }
  
  /**
   * Get message.
   * @returns {string}
   */
  getMessage() {
    return this.getField('message');
  }
  
  /**
   * Get cncldate.
   * @returns {number}
   */
  getCancelDate() {
    return this.getTimestampField('cncldate');
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
   * Get shipping.
   * @returns {number}
   */
  getShipping() {
    return this.getField('shipping', 0.00);
  }
  
  /**
   * Get formatted_shipping.
   * @returns {string}
   */
  getFormattedShipping() {
    return this.getField('formatted_shipping');
  }
  
  /**
   * Get subtotal.
   * @returns {number}
   */
  getSubtotal() {
    return this.getField('subtotal', 0.00);
  }
  
  /**
   * Get formatted_subtotal.
   * @returns {string}
   */
  getFormattedSubtotal() {
    return this.getField('formatted_subtotal');
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
  
  /**
   * Get authfails.
   * @returns {number}
   */
  getAuthorizationFailureCount() {
    return this.getField('authfails', 0);
  }
  
  /**
   * Get lastafail.
   * @returns {number}
   */
  getLastAuthorizationFailure() {
    return this.getTimestampField('lastafail');
  }
  
  /**
   * Get options.
   * @returns {SubscriptionOption[]}
   */
  getOptions() {
    return this.getField('options', []);
  }
  
  /**
   * @override
   */
  toObject() {
    var i;
    var l;
    var ret = Object.assign(this);

    if (util.isArray(ret['options'])) {
      for (i = 0, l = ret['options'].length; i < l; i++) {
        if (util.isInstanceOf(ret['options'][i], models.SubscriptionOption)) {
          ret['options'][i] = ret['options'][i].toObject();
        }
      }
    }

    return ret;
  }
}

module.exports.Subscription = Subscription;