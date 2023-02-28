/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const models = require('./../models');
const { OrderTotal } = require('./OrderTotal');

/** 
 * OrderTotalAndItem data model.
 * @class
 */
class OrderTotalAndItem extends OrderTotal {
  /**
   * OrderTotalAndItem Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);

    if (!util.isUndefined(this.orderitem)) {
      if (!util.isInstanceOf(this.orderitem, models.OrderItem) && util.isObject(this.orderitem)) {
        this.orderitem = new models.OrderItem(this.orderitem);
      } else if (!util.isInstanceOf(this.orderitem, models.OrderItem)) {
        throw new Error(util.format('Expected OrderItem or an Object but got %s',
          typeof this.orderitem));
      }
    } else {
      this.orderitem = {};
    }
  }

  /**
   * Get orderitem.
   * @returns {OrderItem|*}
   */
  getOrderItem() {
    return this.getField('orderitem', null);
  }
  
  /**
   * @override
   */
  toObject() {
    var ret = Object.assign(this);

    if (util.isInstanceOf(ret['orderitem'], models.OrderItem)) {
      ret['orderitem'] = ret['orderitem'].toObject();
    }

    return ret;
  }
}

module.exports.OrderTotalAndItem = OrderTotalAndItem;