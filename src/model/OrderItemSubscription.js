/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const models = require('./../models');
const { Subscription } = require('./Subscription');

/** 
 * OrderItemSubscription data model.
 * @class
 */
class OrderItemSubscription extends Subscription {
  /**
   * OrderItemSubscription Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);

    if (!util.isUndefined(this.productsubscriptionterm)) {
      if (!util.isInstanceOf(this.productsubscriptionterm, models.ProductSubscriptionTerm) && util.isObject(this.productsubscriptionterm)) {
        this.productsubscriptionterm = new models.ProductSubscriptionTerm(this.productsubscriptionterm);
      } else if (!util.isInstanceOf(this.productsubscriptionterm, models.ProductSubscriptionTerm)) {
        throw new Error(util.format('Expected ProductSubscriptionTerm or an Object but got %s',
          typeof this.productsubscriptionterm));
      }
    } else {
      this.productsubscriptionterm = {};
    }
  }

  /**
   * Get method.
   * @returns {string}
   */
  getMethod() {
    return this.getField('method');
  }
  
  /**
   * Get productsubscriptionterm.
   * @returns {ProductSubscriptionTerm|*}
   */
  getProductSubscriptionTerm() {
    return this.getField('productsubscriptionterm', null);
  }
  
  /**
   * @override
   */
  toObject() {
    var ret = Object.assign(this);

    if (util.isInstanceOf(ret['productsubscriptionterm'], models.ProductSubscriptionTerm)) {
      ret['productsubscriptionterm'] = ret['productsubscriptionterm'].toObject();
    }

    return ret;
  }
}

module.exports.OrderItemSubscription = OrderItemSubscription;