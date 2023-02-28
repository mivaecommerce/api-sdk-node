/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const models = require('./../models');
const { Order } = require('./Order');

/** 
 * AllOrderPayment data model.
 * @class
 */
class AllOrderPayment extends Order {
  /**
   * AllOrderPayment Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);

    if (!util.isUndefined(this.orderpayment)) {
      if (!util.isInstanceOf(this.orderpayment, models.OrderPayment) && util.isObject(this.orderpayment)) {
        this.orderpayment = new models.OrderPayment(this.orderpayment);
      } else if (!util.isInstanceOf(this.orderpayment, models.OrderPayment)) {
        throw new Error(util.format('Expected OrderPayment or an Object but got %s',
          typeof this.orderpayment));
      }
    } else {
      this.orderpayment = {};
    }
  }

  /**
   * Get orderpayment.
   * @returns {OrderPayment|*}
   */
  getOrderPayment() {
    return this.getField('orderpayment', null);
  }
  
  /**
   * @override
   */
  toObject() {
    var ret = Object.assign(this);

    if (util.isInstanceOf(ret['orderpayment'], models.OrderPayment)) {
      ret['orderpayment'] = ret['orderpayment'].toObject();
    }

    return ret;
  }
}

module.exports.AllOrderPayment = AllOrderPayment;