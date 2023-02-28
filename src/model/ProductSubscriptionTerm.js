/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const models = require('./../models');
const { Model } = require('./../abstract');

/** TERM_FREQUENCY constants. */
/** @ignore */
const TERM_FREQUENCY_N_DAYS = 'n';
/** @ignore */
const TERM_FREQUENCY_N_MONTHS = 'n_months';
/** @ignore */
const TERM_FREQUENCY_DAILY = 'daily';
/** @ignore */
const TERM_FREQUENCY_WEEKLY = 'weekly';
/** @ignore */
const TERM_FREQUENCY_BIWEEKLY = 'biweekly';
/** @ignore */
const TERM_FREQUENCY_QUARTERLY = 'quarterly';
/** @ignore */
const TERM_FREQUENCY_SEMIANNUALLY = 'semiannually';
/** @ignore */
const TERM_FREQUENCY_ANNUALLY = 'annually';
/** @ignore */
const TERM_FREQUENCY_FIXED_WEEKLY = 'fixedweekly';
/** @ignore */
const TERM_FREQUENCY_FIXED_MONTHLY = 'fixedmonthly';
/** @ignore */
const TERM_FREQUENCY_DATES = 'dates';
/** @ignore */
const TERM_FREQUENCY_MONTHLY = 'monthly';

/** 
 * ProductSubscriptionTerm data model.
 * @class
 */
class ProductSubscriptionTerm extends Model {
  /**
   * ProductSubscriptionTerm Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    var i;
    var l;

    super(data);

    if (!util.isUndefined(this.dates) && util.isArray(this.dates)) {
      for (i = 0, l = this.dates.length; i < l; i++) {
        if (!util.isInstanceOf(this.dates[i], models.ProductSubscriptionTermDate) && util.isObject(data['dates'][i])) {
          this.dates[i] = new models.ProductSubscriptionTermDate(this.dates[i]);
        } else if (!util.isInstanceOf(this.dates[i], models.ProductSubscriptionTermDate)) {
          throw new Error(util.format('Expected array of ProductSubscriptionTermDate or an array of Objects but got %s',
            typeof this.dates[i]));
        }
      }
    } else {
      this.dates = [];
    }
  }

  /**
   * Constant TERM_FREQUENCY_N_DAYS
   * @returns {string}
   * @const
   * @static
   */
  static get TERM_FREQUENCY_N_DAYS() {
    return TERM_FREQUENCY_N_DAYS;
  }

  /**
   * Constant TERM_FREQUENCY_N_MONTHS
   * @returns {string}
   * @const
   * @static
   */
  static get TERM_FREQUENCY_N_MONTHS() {
    return TERM_FREQUENCY_N_MONTHS;
  }

  /**
   * Constant TERM_FREQUENCY_DAILY
   * @returns {string}
   * @const
   * @static
   */
  static get TERM_FREQUENCY_DAILY() {
    return TERM_FREQUENCY_DAILY;
  }

  /**
   * Constant TERM_FREQUENCY_WEEKLY
   * @returns {string}
   * @const
   * @static
   */
  static get TERM_FREQUENCY_WEEKLY() {
    return TERM_FREQUENCY_WEEKLY;
  }

  /**
   * Constant TERM_FREQUENCY_BIWEEKLY
   * @returns {string}
   * @const
   * @static
   */
  static get TERM_FREQUENCY_BIWEEKLY() {
    return TERM_FREQUENCY_BIWEEKLY;
  }

  /**
   * Constant TERM_FREQUENCY_QUARTERLY
   * @returns {string}
   * @const
   * @static
   */
  static get TERM_FREQUENCY_QUARTERLY() {
    return TERM_FREQUENCY_QUARTERLY;
  }

  /**
   * Constant TERM_FREQUENCY_SEMIANNUALLY
   * @returns {string}
   * @const
   * @static
   */
  static get TERM_FREQUENCY_SEMIANNUALLY() {
    return TERM_FREQUENCY_SEMIANNUALLY;
  }

  /**
   * Constant TERM_FREQUENCY_ANNUALLY
   * @returns {string}
   * @const
   * @static
   */
  static get TERM_FREQUENCY_ANNUALLY() {
    return TERM_FREQUENCY_ANNUALLY;
  }

  /**
   * Constant TERM_FREQUENCY_FIXED_WEEKLY
   * @returns {string}
   * @const
   * @static
   */
  static get TERM_FREQUENCY_FIXED_WEEKLY() {
    return TERM_FREQUENCY_FIXED_WEEKLY;
  }

  /**
   * Constant TERM_FREQUENCY_FIXED_MONTHLY
   * @returns {string}
   * @const
   * @static
   */
  static get TERM_FREQUENCY_FIXED_MONTHLY() {
    return TERM_FREQUENCY_FIXED_MONTHLY;
  }

  /**
   * Constant TERM_FREQUENCY_DATES
   * @returns {string}
   * @const
   * @static
   */
  static get TERM_FREQUENCY_DATES() {
    return TERM_FREQUENCY_DATES;
  }

  /**
   * Constant TERM_FREQUENCY_MONTHLY
   * @returns {string}
   * @const
   * @static
   */
  static get TERM_FREQUENCY_MONTHLY() {
    return TERM_FREQUENCY_MONTHLY;
  }

  /**
   * Get id.
   * @returns {number}
   */
  getId() {
    return this.getField('id', 0);
  }
  
  /**
   * Get product_id.
   * @returns {number}
   */
  getProductId() {
    return this.getField('product_id', 0);
  }
  
  /**
   * Get frequency.
   * @returns {string}
   */
  getFrequency() {
    return this.getField('frequency');
  }
  
  /**
   * Get term.
   * @returns {number}
   */
  getTerm() {
    return this.getField('term', 0);
  }
  
  /**
   * Get descrip.
   * @returns {string}
   */
  getDescription() {
    return this.getField('descrip');
  }
  
  /**
   * Get n.
   * @returns {number}
   */
  getN() {
    return this.getField('n', 0);
  }
  
  /**
   * Get fixed_dow.
   * @returns {number}
   */
  getFixedDayOfWeek() {
    return this.getField('fixed_dow', 0);
  }
  
  /**
   * Get fixed_dom.
   * @returns {number}
   */
  getFixedDayOfMonth() {
    return this.getField('fixed_dom', 0);
  }
  
  /**
   * Get sub_count.
   * @returns {number}
   */
  getSubscriptionCount() {
    return this.getField('sub_count', 0);
  }
  
  /**
   * Get dates.
   * @returns {ProductSubscriptionTermDate[]}
   */
  getDates() {
    return this.getField('dates', []);
  }
  
  /**
   * Get disp_order.
   * @returns {number}
   */
  getDisplayOrder() {
    return this.getField('disp_order', 0);
  }
  
  /**
   * @override
   */
  toObject() {
    var i;
    var l;
    var ret = Object.assign(this);

    if (util.isArray(ret['dates'])) {
      for (i = 0, l = ret['dates'].length; i < l; i++) {
        if (util.isInstanceOf(ret['dates'][i], models.ProductSubscriptionTermDate)) {
          ret['dates'][i] = ret['dates'][i].toObject();
        }
      }
    }

    return ret;
  }
}

module.exports.ProductSubscriptionTerm = ProductSubscriptionTerm;