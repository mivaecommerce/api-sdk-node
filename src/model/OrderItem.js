/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const models = require('./../models');
const { Model } = require('./../abstract');
const Decimal = require('decimal.js-light');

/** ORDER_ITEM_STATUS constants. */
/** @ignore */
const ORDER_ITEM_STATUS_PENDING = 0;
/** @ignore */
const ORDER_ITEM_STATUS_PROCESSING = 100;
/** @ignore */
const ORDER_ITEM_STATUS_SHIPPED = 200;
/** @ignore */
const ORDER_ITEM_STATUS_PARTIALLY_SHIPPED = 201;
/** @ignore */
const ORDER_ITEM_STATUS_GIFT_CERT_NOT_REDEEMED = 210;
/** @ignore */
const ORDER_ITEM_STATUS_GIFT_CERT_REDEEMED = 211;
/** @ignore */
const ORDER_ITEM_STATUS_DIGITAL_NOT_DOWNLOADED = 220;
/** @ignore */
const ORDER_ITEM_STATUS_DIGITAL_DOWNLOADED = 221;
/** @ignore */
const ORDER_ITEM_STATUS_CANCELLED = 300;
/** @ignore */
const ORDER_ITEM_STATUS_BACKORDERED = 400;
/** @ignore */
const ORDER_ITEM_STATUS_RMA_ISSUED = 500;
/** @ignore */
const ORDER_ITEM_STATUS_RETURNED = 600;

/** 
 * OrderItem data model.
 * @class
 */
class OrderItem extends Model {
  /**
   * OrderItem Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    var i;
    var l;

    super(data);

    if (!util.isUndefined(this.shipment)) {
      if (!util.isInstanceOf(this.shipment, models.OrderShipment) && util.isObject(this.shipment)) {
        this.shipment = new models.OrderShipment(this.shipment);
      } else if (!util.isInstanceOf(this.shipment, models.OrderShipment)) {
        throw new Error(util.format('Expected OrderShipment or an Object but got %s',
          typeof this.shipment));
      }
    } else {
      this.shipment = {};
    }

    if (!util.isUndefined(this.discounts) && util.isArray(this.discounts)) {
      for (i = 0, l = this.discounts.length; i < l; i++) {
        if (!util.isInstanceOf(this.discounts[i], models.OrderItemDiscount) && util.isObject(data['discounts'][i])) {
          this.discounts[i] = new models.OrderItemDiscount(this.discounts[i]);
        } else if (!util.isInstanceOf(this.discounts[i], models.OrderItemDiscount)) {
          throw new Error(util.format('Expected array of OrderItemDiscount or an array of Objects but got %s',
            typeof this.discounts[i]));
        }
      }
    } else {
      this.discounts = [];
    }

    if (!util.isUndefined(this.options) && util.isArray(this.options)) {
      for (i = 0, l = this.options.length; i < l; i++) {
        if (!util.isInstanceOf(this.options[i], models.OrderItemOption) && util.isObject(data['options'][i])) {
          this.options[i] = new models.OrderItemOption(this.options[i]);
        } else if (!util.isInstanceOf(this.options[i], models.OrderItemOption)) {
          throw new Error(util.format('Expected array of OrderItemOption or an array of Objects but got %s',
            typeof this.options[i]));
        }
      }
    } else {
      this.options = [];
    }

    if (!util.isUndefined(this.subscription)) {
      if (!util.isInstanceOf(this.subscription, models.OrderItemSubscription) && util.isObject(this.subscription)) {
        this.subscription = new models.OrderItemSubscription(this.subscription);
      } else if (!util.isInstanceOf(this.subscription, models.OrderItemSubscription)) {
        throw new Error(util.format('Expected OrderItemSubscription or an Object but got %s',
          typeof this.subscription));
      }
    } else {
      this.subscription = {};
    }

    if (!util.isNullOrUndefined(this.retail))  this.retail = new Decimal(this.retail);
    if (!util.isNullOrUndefined(this.base_price))  this.base_price = new Decimal(this.base_price);
    if (!util.isNullOrUndefined(this.price))  this.price = new Decimal(this.price);
    if (!util.isNullOrUndefined(this.weight))  this.weight = new Decimal(this.weight);
  }

  /**
   * Constant ORDER_ITEM_STATUS_PENDING
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_ITEM_STATUS_PENDING() {
    return ORDER_ITEM_STATUS_PENDING;
  }

  /**
   * Constant ORDER_ITEM_STATUS_PROCESSING
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_ITEM_STATUS_PROCESSING() {
    return ORDER_ITEM_STATUS_PROCESSING;
  }

  /**
   * Constant ORDER_ITEM_STATUS_SHIPPED
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_ITEM_STATUS_SHIPPED() {
    return ORDER_ITEM_STATUS_SHIPPED;
  }

  /**
   * Constant ORDER_ITEM_STATUS_PARTIALLY_SHIPPED
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_ITEM_STATUS_PARTIALLY_SHIPPED() {
    return ORDER_ITEM_STATUS_PARTIALLY_SHIPPED;
  }

  /**
   * Constant ORDER_ITEM_STATUS_GIFT_CERT_NOT_REDEEMED
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_ITEM_STATUS_GIFT_CERT_NOT_REDEEMED() {
    return ORDER_ITEM_STATUS_GIFT_CERT_NOT_REDEEMED;
  }

  /**
   * Constant ORDER_ITEM_STATUS_GIFT_CERT_REDEEMED
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_ITEM_STATUS_GIFT_CERT_REDEEMED() {
    return ORDER_ITEM_STATUS_GIFT_CERT_REDEEMED;
  }

  /**
   * Constant ORDER_ITEM_STATUS_DIGITAL_NOT_DOWNLOADED
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_ITEM_STATUS_DIGITAL_NOT_DOWNLOADED() {
    return ORDER_ITEM_STATUS_DIGITAL_NOT_DOWNLOADED;
  }

  /**
   * Constant ORDER_ITEM_STATUS_DIGITAL_DOWNLOADED
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_ITEM_STATUS_DIGITAL_DOWNLOADED() {
    return ORDER_ITEM_STATUS_DIGITAL_DOWNLOADED;
  }

  /**
   * Constant ORDER_ITEM_STATUS_CANCELLED
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_ITEM_STATUS_CANCELLED() {
    return ORDER_ITEM_STATUS_CANCELLED;
  }

  /**
   * Constant ORDER_ITEM_STATUS_BACKORDERED
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_ITEM_STATUS_BACKORDERED() {
    return ORDER_ITEM_STATUS_BACKORDERED;
  }

  /**
   * Constant ORDER_ITEM_STATUS_RMA_ISSUED
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_ITEM_STATUS_RMA_ISSUED() {
    return ORDER_ITEM_STATUS_RMA_ISSUED;
  }

  /**
   * Constant ORDER_ITEM_STATUS_RETURNED
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_ITEM_STATUS_RETURNED() {
    return ORDER_ITEM_STATUS_RETURNED;
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
   * Get status.
   * @returns {number}
   */
  getStatus() {
    return this.getField('status', 0);
  }
  
  /**
   * Get subscrp_id.
   * @returns {number}
   */
  getSubscriptionId() {
    return this.getField('subscrp_id', 0);
  }
  
  /**
   * Get subterm_id.
   * @returns {number}
   */
  getSubscriptionTermId() {
    return this.getField('subterm_id', 0);
  }
  
  /**
   * Get rma_id.
   * @returns {number}
   */
  getRmaId() {
    return this.getField('rma_id', 0);
  }
  
  /**
   * Get rma_code.
   * @returns {string}
   */
  getRmaCode() {
    return this.getField('rma_code');
  }
  
  /**
   * Get rma_dt_issued.
   * @returns {number}
   */
  getRmaDataTimeIssued() {
    return this.getTimestampField('rma_dt_issued');
  }
  
  /**
   * Get rma_dt_recvd.
   * @returns {number}
   */
  getRmaDateTimeReceived() {
    return this.getTimestampField('rma_dt_recvd');
  }
  
  /**
   * Get dt_instock.
   * @returns {number}
   */
  getDateInStock() {
    return this.getTimestampField('dt_instock');
  }
  
  /**
   * Get code.
   * @returns {string}
   */
  getCode() {
    return this.getField('code');
  }
  
  /**
   * Get name.
   * @returns {string}
   */
  getName() {
    return this.getField('name');
  }
  
  /**
   * Get sku.
   * @returns {string}
   */
  getSku() {
    return this.getField('sku');
  }
  
  /**
   * Get retail.
   * @returns {Decimal}
   */
  getRetail() {
    return this.getField('retail', new Decimal(0.00));
  }
  
  /**
   * Get base_price.
   * @returns {Decimal}
   */
  getBasePrice() {
    return this.getField('base_price', new Decimal(0.00));
  }
  
  /**
   * Get price.
   * @returns {Decimal}
   */
  getPrice() {
    return this.getField('price', new Decimal(0.00));
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
   * Get weight.
   * @returns {Decimal}
   */
  getWeight() {
    return this.getField('weight', new Decimal(0.00));
  }
  
  /**
   * Get formatted_weight.
   * @returns {string}
   */
  getFormattedWeight() {
    return this.getField('formatted_weight');
  }
  
  /**
   * Get taxable.
   * @returns {boolean}
   */
  getTaxable() {
    return this.getField('taxable', false);
  }
  
  /**
   * Get upsold.
   * @returns {boolean}
   */
  getUpsold() {
    return this.getField('upsold', false);
  }
  
  /**
   * Get quantity.
   * @returns {number}
   */
  getQuantity() {
    return this.getField('quantity', 0);
  }
  
  /**
   * Get shipment.
   * @returns {OrderShipment|*}
   */
  getShipment() {
    return this.getField('shipment', null);
  }
  
  /**
   * Get discounts.
   * @returns {OrderItemDiscount[]}
   */
  getDiscounts() {
    return this.getField('discounts', []);
  }
  
  /**
   * Get options.
   * @returns {OrderItemOption[]}
   */
  getOptions() {
    return this.getField('options', []);
  }
  
  /**
   * Get tracktype.
   * @returns {string}
   */
  getTrackingType() {
    return this.getField('tracktype');
  }
  
  /**
   * Get tracknum.
   * @returns {string}
   */
  getTrackingNumber() {
    return this.getField('tracknum');
  }
  
  /**
   * Get shpmnt_id.
   * @returns {number}
   */
  getShipmentId() {
    return this.getField('shpmnt_id', 0);
  }
  
  /**
   * Get subscription.
   * @returns {OrderItemSubscription|*}
   */
  getSubscription() {
    return this.getField('subscription', null);
  }
  
  /**
   * Get product_id.
   * @returns {number}
   */
  getProductId() {
    return this.getField('product_id', 0);
  }
  
  /**
   * Get group_id.
   * @returns {number}
   */
  getGroupId() {
    return this.getField('group_id', 0);
  }
  
  /**
   * Set code.
   * @param {string} code
   * @returns {OrderItem}
   */
  setCode(code) {
    return this.setField('code', code);
  }

  /**
   * Set name.
   * @param {string} name
   * @returns {OrderItem}
   */
  setName(name) {
    return this.setField('name', name);
  }

  /**
   * Set sku.
   * @param {string} sku
   * @returns {OrderItem}
   */
  setSku(sku) {
    return this.setField('sku', sku);
  }

  /**
   * Set price.
   * @param {Decimal} price
   * @returns {OrderItem}
   */
  setPrice(price) {
    if (!util.isInstanceOf(price, Decimal)) {
        return this.setField('price', new Decimal(price));
    }

    return this.setField('price', price);
  }

  /**
   * Set tax.
   * @param {number} tax
   * @returns {OrderItem}
   */
  setTax(tax) {
    return this.setField('tax', tax);
  }

  /**
   * Set weight.
   * @param {Decimal} weight
   * @returns {OrderItem}
   */
  setWeight(weight) {
    if (!util.isInstanceOf(weight, Decimal)) {
        return this.setField('weight', new Decimal(weight));
    }

    return this.setField('weight', weight);
  }

  /**
   * Set taxable.
   * @param {boolean} taxable
   * @returns {OrderItem}
   */
  setTaxable(taxable) {
    return this.setField('taxable', taxable);
  }

  /**
   * Set upsold.
   * @param {boolean} upsold
   * @returns {OrderItem}
   */
  setUpsold(upsold) {
    return this.setField('upsold', upsold);
  }

  /**
   * Set quantity.
   * @param {number} quantity
   * @returns {OrderItem}
   */
  setQuantity(quantity) {
    return this.setField('quantity', quantity);
  }

  /**
   * Set options.
   * @param {OrderItemOption[]} options
   * @throws {Error}
   * @returns {OrderItem}
   */
  setOptions(options) {
    var i;
    var l;

    if (!util.isArray(options)) {
      throw new Error(util.format('Expected an array but got %s', typeof options));
    }

    for (i = 0, l = options.length; i < l; i++) {
      if (util.isInstanceOf(options[i], models.OrderItemOption)) {
          continue;
      } else if (util.isObject(options[i])) {
          options[i] = new models.OrderItemOption(options[i]);
      } else {
        throw new Error(util.format('Expected instance of OrderItemOption, Object, or null but got %s at offset %d',
          typeof options[i], i));
      }
    }

    return this.setField('options', options);
  }

  /**
   * Set tracktype.
   * @param {string} trackingType
   * @returns {OrderItem}
   */
  setTrackingType(trackingType) {
    return this.setField('tracktype', trackingType);
  }

  /**
   * Set tracknum.
   * @param {string} trackingNumber
   * @returns {OrderItem}
   */
  setTrackingNumber(trackingNumber) {
    return this.setField('tracknum', trackingNumber);
  }
  /**
   * Add a OrderItemOption.
   * @param {OrderItemOption} option
   * @returns {OrderItem}
   */
  addOption(option) {
    if (!util.isInstanceOf(option, models.OrderItemOption)) {
      throw new Error(util.format('Expected instance of OrderItemOption but got %s', typeof option));
    }

    if (util.isUndefined(this['options'])) {
      this['options'] = [];
    }

    this['options'].push(option);

    return this;
  }
  
  /**
   * @override
   */
  toObject() {
    var i;
    var l;
    var ret = Object.assign(this);

    if (util.isInstanceOf(ret['shipment'], models.OrderShipment)) {
      ret['shipment'] = ret['shipment'].toObject();
    }

    if (util.isArray(ret['discounts'])) {
      for (i = 0, l = ret['discounts'].length; i < l; i++) {
        if (util.isInstanceOf(ret['discounts'][i], models.OrderItemDiscount)) {
          ret['discounts'][i] = ret['discounts'][i].toObject();
        }
      }
    }

    if (util.isArray(ret['options'])) {
      for (i = 0, l = ret['options'].length; i < l; i++) {
        if (util.isInstanceOf(ret['options'][i], models.OrderItemOption)) {
          ret['options'][i] = ret['options'][i].toObject();
        }
      }
    }

    if (util.isInstanceOf(ret['subscription'], models.OrderItemSubscription)) {
      ret['subscription'] = ret['subscription'].toObject();
    }

    return ret;
  }
}

module.exports.OrderItem = OrderItem;