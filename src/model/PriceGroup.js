/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const models = require('./../models');
const { Model } = require('./../abstract');

/** ELIGIBILITY constants. */
/** @ignore */
const ELIGIBILITY_COUPON = 'C';
/** @ignore */
const ELIGIBILITY_ALL = 'A';
/** @ignore */
const ELIGIBILITY_CUSTOMER = 'X';
/** @ignore */
const ELIGIBILITY_LOGGED_IN = 'L';

/** DISCOUNT_TYPE constants. */
/** @ignore */
const DISCOUNT_TYPE_RETAIL = 'R';
/** @ignore */
const DISCOUNT_TYPE_COST = 'C';
/** @ignore */
const DISCOUNT_TYPE_DISCOUNT_RETAIL = 'D';
/** @ignore */
const DISCOUNT_TYPE_MARKUP_COST = 'M';

/** 
 * PriceGroup data model.
 * @class
 */
class PriceGroup extends Model {
  /**
   * PriceGroup Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);

    if (!util.isUndefined(this.module)) {
      if (!util.isInstanceOf(this.module, models.Module) && util.isObject(this.module)) {
        this.module = new models.Module(this.module);
      } else if (!util.isInstanceOf(this.module, models.Module)) {
        throw new Error(util.format('Expected Module or an Object but got %s',
          typeof this.module));
      }
    } else {
      this.module = {};
    }

    if (!util.isUndefined(this.capabilities)) {
      if (!util.isInstanceOf(this.capabilities, models.DiscountModuleCapabilities) && util.isObject(this.capabilities)) {
        this.capabilities = new models.DiscountModuleCapabilities(this.capabilities);
      } else if (!util.isInstanceOf(this.capabilities, models.DiscountModuleCapabilities)) {
        throw new Error(util.format('Expected DiscountModuleCapabilities or an Object but got %s',
          typeof this.capabilities));
      }
    } else {
      this.capabilities = {};
    }
  }

  /**
   * Constant ELIGIBILITY_COUPON
   * @returns {string}
   * @const
   * @static
   */
  static get ELIGIBILITY_COUPON() {
    return ELIGIBILITY_COUPON;
  }

  /**
   * Constant ELIGIBILITY_ALL
   * @returns {string}
   * @const
   * @static
   */
  static get ELIGIBILITY_ALL() {
    return ELIGIBILITY_ALL;
  }

  /**
   * Constant ELIGIBILITY_CUSTOMER
   * @returns {string}
   * @const
   * @static
   */
  static get ELIGIBILITY_CUSTOMER() {
    return ELIGIBILITY_CUSTOMER;
  }

  /**
   * Constant ELIGIBILITY_LOGGED_IN
   * @returns {string}
   * @const
   * @static
   */
  static get ELIGIBILITY_LOGGED_IN() {
    return ELIGIBILITY_LOGGED_IN;
  }
  /**
   * Constant DISCOUNT_TYPE_RETAIL
   * @returns {string}
   * @const
   * @static
   */
  static get DISCOUNT_TYPE_RETAIL() {
    return DISCOUNT_TYPE_RETAIL;
  }

  /**
   * Constant DISCOUNT_TYPE_COST
   * @returns {string}
   * @const
   * @static
   */
  static get DISCOUNT_TYPE_COST() {
    return DISCOUNT_TYPE_COST;
  }

  /**
   * Constant DISCOUNT_TYPE_DISCOUNT_RETAIL
   * @returns {string}
   * @const
   * @static
   */
  static get DISCOUNT_TYPE_DISCOUNT_RETAIL() {
    return DISCOUNT_TYPE_DISCOUNT_RETAIL;
  }

  /**
   * Constant DISCOUNT_TYPE_MARKUP_COST
   * @returns {string}
   * @const
   * @static
   */
  static get DISCOUNT_TYPE_MARKUP_COST() {
    return DISCOUNT_TYPE_MARKUP_COST;
  }

  /**
   * Get id.
   * @returns {number}
   */
  getId() {
    return this.getField('id', 0);
  }
  
  /**
   * Get name.
   * @returns {string}
   */
  getName() {
    return this.getField('name');
  }
  
  /**
   * Get custscope.
   * @returns {string}
   */
  getCustomerScope() {
    return this.getField('custscope');
  }
  
  /**
   * Get rate.
   * @returns {string}
   */
  getRate() {
    return this.getField('rate');
  }
  
  /**
   * Get discount.
   * @returns {number}
   */
  getDiscount() {
    return this.getField('discount', 0.00);
  }
  
  /**
   * Get markup.
   * @returns {number}
   */
  getMarkup() {
    return this.getField('markup', 0.00);
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
   * Get qmn_subtot.
   * @returns {number}
   */
  getMinimumSubtotal() {
    return this.getField('qmn_subtot', 0.00);
  }
  
  /**
   * Get qmx_subtot.
   * @returns {number}
   */
  getMaximumSubtotal() {
    return this.getField('qmx_subtot', 0.00);
  }
  
  /**
   * Get qmn_quan.
   * @returns {number}
   */
  getMinimumQuantity() {
    return this.getField('qmn_quan', 0);
  }
  
  /**
   * Get qmx_quan.
   * @returns {number}
   */
  getMaximumQuantity() {
    return this.getField('qmx_quan', 0);
  }
  
  /**
   * Get qmn_weight.
   * @returns {number}
   */
  getMinimumWeight() {
    return this.getField('qmn_weight', 0.00);
  }
  
  /**
   * Get qmx_weight.
   * @returns {number}
   */
  getMaximumWeight() {
    return this.getField('qmx_weight', 0.00);
  }
  
  /**
   * Get bmn_subtot.
   * @returns {number}
   */
  getBasketMinimumSubtotal() {
    return this.getField('bmn_subtot', 0.00);
  }
  
  /**
   * Get bmx_subtot.
   * @returns {number}
   */
  getBasketMaximumSubtotal() {
    return this.getField('bmx_subtot', 0.00);
  }
  
  /**
   * Get bmn_quan.
   * @returns {number}
   */
  getBasketMinimumQuantity() {
    return this.getField('bmn_quan', 0);
  }
  
  /**
   * Get bmx_quan.
   * @returns {number}
   */
  getBasketMaximumQuantity() {
    return this.getField('bmx_quan', 0);
  }
  
  /**
   * Get bmn_weight.
   * @returns {number}
   */
  getBasketMinimumWeight() {
    return this.getField('bmn_weight', 0.00);
  }
  
  /**
   * Get bmx_weight.
   * @returns {number}
   */
  getBasketMaximumWeight() {
    return this.getField('bmx_weight', 0.00);
  }
  
  /**
   * Get priority.
   * @returns {number}
   */
  getPriority() {
    return this.getField('priority', 0);
  }
  
  /**
   * Get module.
   * @returns {Module|*}
   */
  getModule() {
    return this.getField('module', null);
  }
  
  /**
   * Get capabilities.
   * @returns {DiscountModuleCapabilities|*}
   */
  getCapabilities() {
    return this.getField('capabilities', null);
  }
  
  /**
   * Get exclusion.
   * @returns {boolean}
   */
  getExclusion() {
    return this.getField('exclusion', false);
  }
  
  /**
   * Get descrip.
   * @returns {string}
   */
  getDescription() {
    return this.getField('descrip');
  }
  
  /**
   * Get display.
   * @returns {boolean}
   */
  getDisplay() {
    return this.getField('display', false);
  }
  
  /**
   * @override
   */
  toObject() {
    var ret = Object.assign(this);

    if (util.isInstanceOf(ret['module'], models.Module)) {
      ret['module'] = ret['module'].toObject();
    }

    if (util.isInstanceOf(ret['capabilities'], models.DiscountModuleCapabilities)) {
      ret['capabilities'] = ret['capabilities'].toObject();
    }

    return ret;
  }
}

module.exports.PriceGroup = PriceGroup;