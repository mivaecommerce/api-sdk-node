/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const models = require('./../models');
const { Model } = require('./../abstract');

/** ORDER_SHIPMENT_STATUS constants. */
/** @ignore */
const ORDER_SHIPMENT_STATUS_PENDING = 0;
/** @ignore */
const ORDER_SHIPMENT_STATUS_PICKING = 100;
/** @ignore */
const ORDER_SHIPMENT_STATUS_SHIPPED = 200;

/** 
 * OrderShipment data model.
 * @class
 */
class OrderShipment extends Model {
  /**
   * OrderShipment Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    var i;
    var l;

    super(data);

    if (!util.isUndefined(this.order)) {
      if (!util.isInstanceOf(this.order, models.Order) && util.isObject(this.order)) {
        this.order = new models.Order(this.order);
      } else if (!util.isInstanceOf(this.order, models.Order)) {
        throw new Error(util.format('Expected Order or an Object but got %s',
          typeof this.order));
      }
    } else {
      this.order = {};
    }

    if (!util.isUndefined(this.items) && util.isArray(this.items)) {
      for (i = 0, l = this.items.length; i < l; i++) {
        if (!util.isInstanceOf(this.items[i], models.OrderItem) && util.isObject(data['items'][i])) {
          this.items[i] = new models.OrderItem(this.items[i]);
        } else if (!util.isInstanceOf(this.items[i], models.OrderItem)) {
          throw new Error(util.format('Expected array of OrderItem or an array of Objects but got %s',
            typeof this.items[i]));
        }
      }
    } else {
      this.items = [];
    }
  }

  /**
   * Constant ORDER_SHIPMENT_STATUS_PENDING
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_SHIPMENT_STATUS_PENDING() {
    return ORDER_SHIPMENT_STATUS_PENDING;
  }

  /**
   * Constant ORDER_SHIPMENT_STATUS_PICKING
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_SHIPMENT_STATUS_PICKING() {
    return ORDER_SHIPMENT_STATUS_PICKING;
  }

  /**
   * Constant ORDER_SHIPMENT_STATUS_SHIPPED
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_SHIPMENT_STATUS_SHIPPED() {
    return ORDER_SHIPMENT_STATUS_SHIPPED;
  }

  /**
   * Get id.
   * @returns {number}
   */
  getId() {
    return this.getField('id', 0);
  }
  
  /**
   * Get code.
   * @returns {string}
   */
  getCode() {
    return this.getField('code');
  }
  
  /**
   * Get batch_id.
   * @returns {number}
   */
  getBatchId() {
    return this.getField('batch_id', 0);
  }
  
  /**
   * Get order_id.
   * @returns {number}
   */
  getOrderId() {
    return this.getField('order_id', 0);
  }
  
  /**
   * Get status.
   * @returns {number}
   */
  getStatus() {
    return this.getField('status', 0);
  }
  
  /**
   * Get labelcount.
   * @returns {number}
   */
  getLabelCount() {
    return this.getField('labelcount', 0);
  }
  
  /**
   * Get ship_date.
   * @returns {number}
   */
  getShipDate() {
    return this.getField('ship_date', 0);
  }
  
  /**
   * Get tracknum.
   * @returns {string}
   */
  getTrackingNumber() {
    return this.getField('tracknum');
  }
  
  /**
   * Get tracktype.
   * @returns {string}
   */
  getTrackingType() {
    return this.getField('tracktype');
  }
  
  /**
   * Get tracklink.
   * @returns {string}
   */
  getTrackingLink() {
    return this.getField('tracklink');
  }
  
  /**
   * Get weight.
   * @returns {number}
   */
  getWeight() {
    return this.getField('weight', 0.00);
  }
  
  /**
   * Get cost.
   * @returns {number}
   */
  getCost() {
    return this.getField('cost', 0.00);
  }
  
  /**
   * Get formatted_cost.
   * @returns {string}
   */
  getFormattedCost() {
    return this.getField('formatted_cost');
  }
  
  /**
   * Get order.
   * @returns {Order|*}
   */
  getOrder() {
    return this.getField('order', null);
  }
  
  /**
   * Get items.
   * @returns {OrderItem[]}
   */
  getItems() {
    return this.getField('items', []);
  }
  
  /**
   * @override
   */
  toObject() {
    var i;
    var l;
    var ret = Object.assign(this);

    if (util.isInstanceOf(ret['order'], models.Order)) {
      ret['order'] = ret['order'].toObject();
    }

    if (util.isArray(ret['items'])) {
      for (i = 0, l = ret['items'].length; i < l; i++) {
        if (util.isInstanceOf(ret['items'][i], models.OrderItem)) {
          ret['items'][i] = ret['items'][i].toObject();
        }
      }
    }

    return ret;
  }
}

module.exports.OrderShipment = OrderShipment;