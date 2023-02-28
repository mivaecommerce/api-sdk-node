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
 * SplitOrderItem data model.
 * @class
 */
class SplitOrderItem extends Model {
  /**
   * SplitOrderItem Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);

    if (!util.isUndefined(this.original_orderitem)) {
      if (!util.isInstanceOf(this.original_orderitem, models.OrderItem) && util.isObject(this.original_orderitem)) {
        this.original_orderitem = new models.OrderItem(this.original_orderitem);
      } else if (!util.isInstanceOf(this.original_orderitem, models.OrderItem)) {
        throw new Error(util.format('Expected OrderItem or an Object but got %s',
          typeof this.original_orderitem));
      }
    } else {
      this.original_orderitem = {};
    }

    if (!util.isUndefined(this.split_orderitem)) {
      if (!util.isInstanceOf(this.split_orderitem, models.OrderItem) && util.isObject(this.split_orderitem)) {
        this.split_orderitem = new models.OrderItem(this.split_orderitem);
      } else if (!util.isInstanceOf(this.split_orderitem, models.OrderItem)) {
        throw new Error(util.format('Expected OrderItem or an Object but got %s',
          typeof this.split_orderitem));
      }
    } else {
      this.split_orderitem = {};
    }
  }

  /**
   * Get original_orderitem.
   * @returns {OrderItem|*}
   */
  getOriginalOrderItem() {
    return this.getField('original_orderitem', null);
  }
  
  /**
   * Get split_orderitem.
   * @returns {OrderItem|*}
   */
  getSplitOrderItem() {
    return this.getField('split_orderitem', null);
  }
  
  /**
   * @override
   */
  toObject() {
    var ret = Object.assign(this);

    if (util.isInstanceOf(ret['original_orderitem'], models.OrderItem)) {
      ret['original_orderitem'] = ret['original_orderitem'].toObject();
    }

    if (util.isInstanceOf(ret['split_orderitem'], models.OrderItem)) {
      ret['split_orderitem'] = ret['split_orderitem'].toObject();
    }

    return ret;
  }
}

module.exports.SplitOrderItem = SplitOrderItem;