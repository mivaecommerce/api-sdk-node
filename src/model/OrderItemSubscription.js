/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const models = require('./../models');
const { BaseSubscription } = require('./BaseSubscription');

/** 
 * OrderItemSubscription data model.
 * @class
 */
class OrderItemSubscription extends BaseSubscription {
  /**
   * OrderItemSubscription Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    var i;
    var l;

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

    if (util.isInstanceOf(ret['productsubscriptionterm'], models.ProductSubscriptionTerm)) {
      ret['productsubscriptionterm'] = ret['productsubscriptionterm'].toObject();
    }

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

module.exports.OrderItemSubscription = OrderItemSubscription;