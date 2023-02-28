/** 
 * OrderItemAdd data model.
 * @class
 */
class OrderItemAdd extends Model {
  /**
   * OrderItemAdd Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);

    if (!util.isUndefined(this.orderitem)) {
      if (!util.isInstanceOf(this.orderitem, OrderItem) && util.isObject(this.orderitem)) {
        this.orderitem = new OrderItem(this.orderitem);
      } else if (!util.isInstanceOf(this.orderitem, OrderItem)) {
        throw new Error(util.format('Expected OrderItem or an Object but got %s',
          typeof this.orderitem));
      }
    } else {
      this.orderitem = {};
    }
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

    if (util.isInstanceOf(ret['orderitem'], OrderItem)) {
      ret['orderitem'] = ret['orderitem'].toObject();
    }

    return ret;
  }
}