/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const models = require('./../models');
const { Model } = require('./../abstract');

/** ORDER_STATUS constants. */
/** @ignore */
const ORDER_STATUS_PENDING = 0;
/** @ignore */
const ORDER_STATUS_PROCESSING = 100;
/** @ignore */
const ORDER_STATUS_SHIPPED = 200;
/** @ignore */
const ORDER_STATUS_PARTIALLY_SHIPPED = 201;
/** @ignore */
const ORDER_STATUS_CANCELLED = 300;
/** @ignore */
const ORDER_STATUS_BACKORDERED = 400;
/** @ignore */
const ORDER_STATUS_RMA_ISSUED = 500;
/** @ignore */
const ORDER_STATUS_RETURNED = 600;

/** ORDER_PAYMENT_STATUS constants. */
/** @ignore */
const ORDER_PAYMENT_STATUS_PENDING = 0;
/** @ignore */
const ORDER_PAYMENT_STATUS_AUTHORIZED = 100;
/** @ignore */
const ORDER_PAYMENT_STATUS_CAPTURED = 200;
/** @ignore */
const ORDER_PAYMENT_STATUS_PARTIALLY_CAPTURED = 201;

/** ORDER_STOCK_STATUS constants. */
/** @ignore */
const ORDER_STOCK_STATUS_AVAILABLE = 100;
/** @ignore */
const ORDER_STOCK_STATUS_UNAVAILABLE = 200;
/** @ignore */
const ORDER_STOCK_STATUS_PARTIAL = 201;

/** 
 * Order data model.
 * @class
 */
class Order extends Model {
  /**
   * Order Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    var i;
    var l;

    super(data);

    if (!util.isUndefined(this.customer)) {
      if (!util.isInstanceOf(this.customer, models.Customer) && util.isObject(this.customer)) {
        this.customer = new models.Customer(this.customer);
      } else if (!util.isInstanceOf(this.customer, models.Customer)) {
        throw new Error(util.format('Expected Customer or an Object but got %s',
          typeof this.customer));
      }
    } else {
      this.customer = {};
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

    if (!util.isUndefined(this.charges) && util.isArray(this.charges)) {
      for (i = 0, l = this.charges.length; i < l; i++) {
        if (!util.isInstanceOf(this.charges[i], models.OrderCharge) && util.isObject(data['charges'][i])) {
          this.charges[i] = new models.OrderCharge(this.charges[i]);
        } else if (!util.isInstanceOf(this.charges[i], models.OrderCharge)) {
          throw new Error(util.format('Expected array of OrderCharge or an array of Objects but got %s',
            typeof this.charges[i]));
        }
      }
    } else {
      this.charges = [];
    }

    if (!util.isUndefined(this.coupons) && util.isArray(this.coupons)) {
      for (i = 0, l = this.coupons.length; i < l; i++) {
        if (!util.isInstanceOf(this.coupons[i], models.OrderCoupon) && util.isObject(data['coupons'][i])) {
          this.coupons[i] = new models.OrderCoupon(this.coupons[i]);
        } else if (!util.isInstanceOf(this.coupons[i], models.OrderCoupon)) {
          throw new Error(util.format('Expected array of OrderCoupon or an array of Objects but got %s',
            typeof this.coupons[i]));
        }
      }
    } else {
      this.coupons = [];
    }

    if (!util.isUndefined(this.discounts) && util.isArray(this.discounts)) {
      for (i = 0, l = this.discounts.length; i < l; i++) {
        if (!util.isInstanceOf(this.discounts[i], models.OrderDiscountTotal) && util.isObject(data['discounts'][i])) {
          this.discounts[i] = new models.OrderDiscountTotal(this.discounts[i]);
        } else if (!util.isInstanceOf(this.discounts[i], models.OrderDiscountTotal)) {
          throw new Error(util.format('Expected array of OrderDiscountTotal or an array of Objects but got %s',
            typeof this.discounts[i]));
        }
      }
    } else {
      this.discounts = [];
    }

    if (!util.isUndefined(this.payments) && util.isArray(this.payments)) {
      for (i = 0, l = this.payments.length; i < l; i++) {
        if (!util.isInstanceOf(this.payments[i], models.OrderPayment) && util.isObject(data['payments'][i])) {
          this.payments[i] = new models.OrderPayment(this.payments[i]);
        } else if (!util.isInstanceOf(this.payments[i], models.OrderPayment)) {
          throw new Error(util.format('Expected array of OrderPayment or an array of Objects but got %s',
            typeof this.payments[i]));
        }
      }
    } else {
      this.payments = [];
    }

    if (!util.isUndefined(this.notes) && util.isArray(this.notes)) {
      for (i = 0, l = this.notes.length; i < l; i++) {
        if (!util.isInstanceOf(this.notes[i], models.OrderNote) && util.isObject(data['notes'][i])) {
          this.notes[i] = new models.OrderNote(this.notes[i]);
        } else if (!util.isInstanceOf(this.notes[i], models.OrderNote)) {
          throw new Error(util.format('Expected array of OrderNote or an array of Objects but got %s',
            typeof this.notes[i]));
        }
      }
    } else {
      this.notes = [];
    }

    if (!util.isUndefined(this.parts) && util.isArray(this.parts)) {
      for (i = 0, l = this.parts.length; i < l; i++) {
        if (!util.isInstanceOf(this.parts[i], models.OrderPart) && util.isObject(data['parts'][i])) {
          this.parts[i] = new models.OrderPart(this.parts[i]);
        } else if (!util.isInstanceOf(this.parts[i], models.OrderPart)) {
          throw new Error(util.format('Expected array of OrderPart or an array of Objects but got %s',
            typeof this.parts[i]));
        }
      }
    } else {
      this.parts = [];
    }

    if (!util.isUndefined(this.CustomField_Values)) {
      if (!util.isInstanceOf(this.CustomField_Values, models.CustomFieldValues) && util.isObject(this.CustomField_Values)) {
        this.CustomField_Values = new models.CustomFieldValues(this.CustomField_Values);
      } else if (!util.isInstanceOf(this.CustomField_Values, models.CustomFieldValues)) {
        throw new Error(util.format('Expected CustomFieldValues or an Object but got %s',
          typeof this.CustomField_Values));
      }
    } else {
      this.CustomField_Values = {};
    }

    if (!util.isUndefined(this.shipments) && util.isArray(this.shipments)) {
      for (i = 0, l = this.shipments.length; i < l; i++) {
        if (!util.isInstanceOf(this.shipments[i], models.OrderShipment) && util.isObject(data['shipments'][i])) {
          this.shipments[i] = new models.OrderShipment(this.shipments[i]);
        } else if (!util.isInstanceOf(this.shipments[i], models.OrderShipment)) {
          throw new Error(util.format('Expected array of OrderShipment or an array of Objects but got %s',
            typeof this.shipments[i]));
        }
      }
    } else {
      this.shipments = [];
    }

    if (!util.isUndefined(this.returns) && util.isArray(this.returns)) {
      for (i = 0, l = this.returns.length; i < l; i++) {
        if (!util.isInstanceOf(this.returns[i], models.OrderReturn) && util.isObject(data['returns'][i])) {
          this.returns[i] = new models.OrderReturn(this.returns[i]);
        } else if (!util.isInstanceOf(this.returns[i], models.OrderReturn)) {
          throw new Error(util.format('Expected array of OrderReturn or an array of Objects but got %s',
            typeof this.returns[i]));
        }
      }
    } else {
      this.returns = [];
    }
  }

  /**
   * Constant ORDER_STATUS_PENDING
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_STATUS_PENDING() {
    return ORDER_STATUS_PENDING;
  }

  /**
   * Constant ORDER_STATUS_PROCESSING
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_STATUS_PROCESSING() {
    return ORDER_STATUS_PROCESSING;
  }

  /**
   * Constant ORDER_STATUS_SHIPPED
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_STATUS_SHIPPED() {
    return ORDER_STATUS_SHIPPED;
  }

  /**
   * Constant ORDER_STATUS_PARTIALLY_SHIPPED
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_STATUS_PARTIALLY_SHIPPED() {
    return ORDER_STATUS_PARTIALLY_SHIPPED;
  }

  /**
   * Constant ORDER_STATUS_CANCELLED
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_STATUS_CANCELLED() {
    return ORDER_STATUS_CANCELLED;
  }

  /**
   * Constant ORDER_STATUS_BACKORDERED
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_STATUS_BACKORDERED() {
    return ORDER_STATUS_BACKORDERED;
  }

  /**
   * Constant ORDER_STATUS_RMA_ISSUED
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_STATUS_RMA_ISSUED() {
    return ORDER_STATUS_RMA_ISSUED;
  }

  /**
   * Constant ORDER_STATUS_RETURNED
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_STATUS_RETURNED() {
    return ORDER_STATUS_RETURNED;
  }
  /**
   * Constant ORDER_PAYMENT_STATUS_PENDING
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_PAYMENT_STATUS_PENDING() {
    return ORDER_PAYMENT_STATUS_PENDING;
  }

  /**
   * Constant ORDER_PAYMENT_STATUS_AUTHORIZED
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_PAYMENT_STATUS_AUTHORIZED() {
    return ORDER_PAYMENT_STATUS_AUTHORIZED;
  }

  /**
   * Constant ORDER_PAYMENT_STATUS_CAPTURED
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_PAYMENT_STATUS_CAPTURED() {
    return ORDER_PAYMENT_STATUS_CAPTURED;
  }

  /**
   * Constant ORDER_PAYMENT_STATUS_PARTIALLY_CAPTURED
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_PAYMENT_STATUS_PARTIALLY_CAPTURED() {
    return ORDER_PAYMENT_STATUS_PARTIALLY_CAPTURED;
  }
  /**
   * Constant ORDER_STOCK_STATUS_AVAILABLE
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_STOCK_STATUS_AVAILABLE() {
    return ORDER_STOCK_STATUS_AVAILABLE;
  }

  /**
   * Constant ORDER_STOCK_STATUS_UNAVAILABLE
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_STOCK_STATUS_UNAVAILABLE() {
    return ORDER_STOCK_STATUS_UNAVAILABLE;
  }

  /**
   * Constant ORDER_STOCK_STATUS_PARTIAL
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_STOCK_STATUS_PARTIAL() {
    return ORDER_STOCK_STATUS_PARTIAL;
  }

  /**
   * Get id.
   * @returns {number}
   */
  getId() {
    return this.getField('id', 0);
  }
  
  /**
   * Get pay_id.
   * @returns {number}
   */
  getPaymentId() {
    return this.getField('pay_id', 0);
  }
  
  /**
   * Get batch_id.
   * @returns {number}
   */
  getBatchId() {
    return this.getField('batch_id', 0);
  }
  
  /**
   * Get status.
   * @returns {number}
   */
  getStatus() {
    return this.getField('status', 0);
  }
  
  /**
   * Get pay_status.
   * @returns {number}
   */
  getPaymentStatus() {
    return this.getField('pay_status', 0);
  }
  
  /**
   * Get stk_status.
   * @returns {number}
   */
  getStockStatus() {
    return this.getField('stk_status', 0);
  }
  
  /**
   * Get dt_instock.
   * @returns {number}
   */
  getDateInStock() {
    return this.getTimestampField('dt_instock');
  }
  
  /**
   * Get orderdate.
   * @returns {number}
   */
  getOrderDate() {
    return this.getField('orderdate', 0);
  }
  
  /**
   * Get cust_id.
   * @returns {number}
   */
  getCustomerId() {
    return this.getField('cust_id', 0);
  }
  
  /**
   * Get ship_res.
   * @returns {boolean}
   */
  getShipResidential() {
    return this.getField('ship_res', false);
  }
  
  /**
   * Get ship_fname.
   * @returns {string}
   */
  getShipFirstName() {
    return this.getField('ship_fname');
  }
  
  /**
   * Get ship_lname.
   * @returns {string}
   */
  getShipLastName() {
    return this.getField('ship_lname');
  }
  
  /**
   * Get ship_email.
   * @returns {string}
   */
  getShipEmail() {
    return this.getField('ship_email');
  }
  
  /**
   * Get ship_comp.
   * @returns {string}
   */
  getShipCompany() {
    return this.getField('ship_comp');
  }
  
  /**
   * Get ship_phone.
   * @returns {string}
   */
  getShipPhone() {
    return this.getField('ship_phone');
  }
  
  /**
   * Get ship_fax.
   * @returns {string}
   */
  getShipFax() {
    return this.getField('ship_fax');
  }
  
  /**
   * Get ship_addr1.
   * @returns {string}
   */
  getShipAddress1() {
    return this.getField('ship_addr1');
  }
  
  /**
   * Get ship_addr2.
   * @returns {string}
   */
  getShipAddress2() {
    return this.getField('ship_addr2');
  }
  
  /**
   * Get ship_city.
   * @returns {string}
   */
  getShipCity() {
    return this.getField('ship_city');
  }
  
  /**
   * Get ship_state.
   * @returns {string}
   */
  getShipState() {
    return this.getField('ship_state');
  }
  
  /**
   * Get ship_zip.
   * @returns {string}
   */
  getShipZip() {
    return this.getField('ship_zip');
  }
  
  /**
   * Get ship_cntry.
   * @returns {string}
   */
  getShipCountry() {
    return this.getField('ship_cntry');
  }
  
  /**
   * Get bill_fname.
   * @returns {string}
   */
  getBillFirstName() {
    return this.getField('bill_fname');
  }
  
  /**
   * Get bill_lname.
   * @returns {string}
   */
  getBillLastName() {
    return this.getField('bill_lname');
  }
  
  /**
   * Get bill_email.
   * @returns {string}
   */
  getBillEmail() {
    return this.getField('bill_email');
  }
  
  /**
   * Get bill_comp.
   * @returns {string}
   */
  getBillCompany() {
    return this.getField('bill_comp');
  }
  
  /**
   * Get bill_phone.
   * @returns {string}
   */
  getBillPhone() {
    return this.getField('bill_phone');
  }
  
  /**
   * Get bill_fax.
   * @returns {string}
   */
  getBillFax() {
    return this.getField('bill_fax');
  }
  
  /**
   * Get bill_addr1.
   * @returns {string}
   */
  getBillAddress1() {
    return this.getField('bill_addr1');
  }
  
  /**
   * Get bill_addr2.
   * @returns {string}
   */
  getBillAddress2() {
    return this.getField('bill_addr2');
  }
  
  /**
   * Get bill_city.
   * @returns {string}
   */
  getBillCity() {
    return this.getField('bill_city');
  }
  
  /**
   * Get bill_state.
   * @returns {string}
   */
  getBillState() {
    return this.getField('bill_state');
  }
  
  /**
   * Get bill_zip.
   * @returns {string}
   */
  getBillZip() {
    return this.getField('bill_zip');
  }
  
  /**
   * Get bill_cntry.
   * @returns {string}
   */
  getBillCountry() {
    return this.getField('bill_cntry');
  }
  
  /**
   * Get ship_id.
   * @returns {number}
   */
  getShipmentId() {
    return this.getField('ship_id', 0);
  }
  
  /**
   * Get ship_data.
   * @returns {string}
   */
  getShipData() {
    return this.getField('ship_data');
  }
  
  /**
   * Get ship_method.
   * @returns {string}
   */
  getShipMethod() {
    return this.getField('ship_method');
  }
  
  /**
   * Get cust_login.
   * @returns {string}
   */
  getCustomerLogin() {
    return this.getField('cust_login');
  }
  
  /**
   * Get cust_pw_email.
   * @returns {string}
   */
  getCustomerPasswordEmail() {
    return this.getField('cust_pw_email');
  }
  
  /**
   * Get business_title.
   * @returns {string}
   */
  getBusinessTitle() {
    return this.getField('business_title');
  }
  
  /**
   * Get payment_module.
   * @returns {string}
   */
  getPaymentModule() {
    return this.getField('payment_module');
  }
  
  /**
   * Get source.
   * @returns {string}
   */
  getSource() {
    return this.getField('source');
  }
  
  /**
   * Get source_id.
   * @returns {number}
   */
  getSourceId() {
    return this.getField('source_id', 0);
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
   * Get total_ship.
   * @returns {number}
   */
  getTotalShip() {
    return this.getField('total_ship', 0.00);
  }
  
  /**
   * Get formatted_total_ship.
   * @returns {string}
   */
  getFormattedTotalShip() {
    return this.getField('formatted_total_ship');
  }
  
  /**
   * Get total_tax.
   * @returns {number}
   */
  getTotalTax() {
    return this.getField('total_tax', 0.00);
  }
  
  /**
   * Get formatted_total_tax.
   * @returns {string}
   */
  getFormattedTotalTax() {
    return this.getField('formatted_total_tax');
  }
  
  /**
   * Get total_auth.
   * @returns {number}
   */
  getTotalAuthorized() {
    return this.getField('total_auth', 0.00);
  }
  
  /**
   * Get formatted_total_auth.
   * @returns {string}
   */
  getFormattedTotalAuthorized() {
    return this.getField('formatted_total_auth');
  }
  
  /**
   * Get total_capt.
   * @returns {number}
   */
  getTotalCaptured() {
    return this.getField('total_capt', 0.00);
  }
  
  /**
   * Get formatted_total_capt.
   * @returns {string}
   */
  getFormattedTotalCaptured() {
    return this.getField('formatted_total_capt');
  }
  
  /**
   * Get total_rfnd.
   * @returns {number}
   */
  getTotalRefunded() {
    return this.getField('total_rfnd', 0.00);
  }
  
  /**
   * Get formatted_total_rfnd.
   * @returns {string}
   */
  getFormattedTotalRefunded() {
    return this.getField('formatted_total_rfnd');
  }
  
  /**
   * Get net_capt.
   * @returns {number}
   */
  getNetCaptured() {
    return this.getField('net_capt', 0.00);
  }
  
  /**
   * Get formatted_net_capt.
   * @returns {string}
   */
  getFormattedNetCaptured() {
    return this.getField('formatted_net_capt');
  }
  
  /**
   * Get pend_count.
   * @returns {number}
   */
  getPendingCount() {
    return this.getField('pend_count', 0);
  }
  
  /**
   * Get bord_count.
   * @returns {number}
   */
  getBackorderCount() {
    return this.getField('bord_count', 0);
  }
  
  /**
   * Get note_count.
   * @returns {number}
   */
  getNoteCount() {
    return this.getField('note_count', 0);
  }
  
  /**
   * Get customer.
   * @returns {Customer|*}
   */
  getCustomer() {
    return this.getField('customer', null);
  }
  
  /**
   * Get items.
   * @returns {OrderItem[]}
   */
  getItems() {
    return this.getField('items', []);
  }
  
  /**
   * Get charges.
   * @returns {OrderCharge[]}
   */
  getCharges() {
    return this.getField('charges', []);
  }
  
  /**
   * Get coupons.
   * @returns {OrderCoupon[]}
   */
  getCoupons() {
    return this.getField('coupons', []);
  }
  
  /**
   * Get discounts.
   * @returns {OrderDiscountTotal[]}
   */
  getDiscounts() {
    return this.getField('discounts', []);
  }
  
  /**
   * Get payments.
   * @returns {OrderPayment[]}
   */
  getPayments() {
    return this.getField('payments', []);
  }
  
  /**
   * Get notes.
   * @returns {OrderNote[]}
   */
  getNotes() {
    return this.getField('notes', []);
  }
  
  /**
   * Get parts.
   * @returns {OrderPart[]}
   */
  getParts() {
    return this.getField('parts', []);
  }
  
  /**
   * Get CustomField_Values.
   * @returns {CustomFieldValues|*}
   */
  getCustomFieldValues() {
    return this.getField('CustomField_Values', null);
  }
  
  /**
   * Get dt_updated.
   * @returns {number}
   */
  getDtUpdated() {
    return this.getTimestampField('dt_updated');
  }
  
  /**
   * Get shipments.
   * @returns {OrderShipment[]}
   */
  getShipments() {
    return this.getField('shipments', []);
  }
  
  /**
   * Get returns.
   * @returns {OrderReturn[]}
   */
  getReturns() {
    return this.getField('returns', []);
  }
  
  /**
   * @override
   */
  toObject() {
    var i;
    var l;
    var ret = Object.assign(this);

    if (util.isInstanceOf(ret['customer'], models.Customer)) {
      ret['customer'] = ret['customer'].toObject();
    }

    if (util.isArray(ret['items'])) {
      for (i = 0, l = ret['items'].length; i < l; i++) {
        if (util.isInstanceOf(ret['items'][i], models.OrderItem)) {
          ret['items'][i] = ret['items'][i].toObject();
        }
      }
    }

    if (util.isArray(ret['charges'])) {
      for (i = 0, l = ret['charges'].length; i < l; i++) {
        if (util.isInstanceOf(ret['charges'][i], models.OrderCharge)) {
          ret['charges'][i] = ret['charges'][i].toObject();
        }
      }
    }

    if (util.isArray(ret['coupons'])) {
      for (i = 0, l = ret['coupons'].length; i < l; i++) {
        if (util.isInstanceOf(ret['coupons'][i], models.OrderCoupon)) {
          ret['coupons'][i] = ret['coupons'][i].toObject();
        }
      }
    }

    if (util.isArray(ret['discounts'])) {
      for (i = 0, l = ret['discounts'].length; i < l; i++) {
        if (util.isInstanceOf(ret['discounts'][i], models.OrderDiscountTotal)) {
          ret['discounts'][i] = ret['discounts'][i].toObject();
        }
      }
    }

    if (util.isArray(ret['payments'])) {
      for (i = 0, l = ret['payments'].length; i < l; i++) {
        if (util.isInstanceOf(ret['payments'][i], models.OrderPayment)) {
          ret['payments'][i] = ret['payments'][i].toObject();
        }
      }
    }

    if (util.isArray(ret['notes'])) {
      for (i = 0, l = ret['notes'].length; i < l; i++) {
        if (util.isInstanceOf(ret['notes'][i], models.OrderNote)) {
          ret['notes'][i] = ret['notes'][i].toObject();
        }
      }
    }

    if (util.isArray(ret['parts'])) {
      for (i = 0, l = ret['parts'].length; i < l; i++) {
        if (util.isInstanceOf(ret['parts'][i], models.OrderPart)) {
          ret['parts'][i] = ret['parts'][i].toObject();
        }
      }
    }

    if (util.isInstanceOf(ret['CustomField_Values'], models.CustomFieldValues)) {
      ret['CustomField_Values'] = ret['CustomField_Values'].toObject();
    }

    if (util.isArray(ret['shipments'])) {
      for (i = 0, l = ret['shipments'].length; i < l; i++) {
        if (util.isInstanceOf(ret['shipments'][i], models.OrderShipment)) {
          ret['shipments'][i] = ret['shipments'][i].toObject();
        }
      }
    }

    if (util.isArray(ret['returns'])) {
      for (i = 0, l = ret['returns'].length; i < l; i++) {
        if (util.isInstanceOf(ret['returns'][i], models.OrderReturn)) {
          ret['returns'][i] = ret['returns'][i].toObject();
        }
      }
    }

    return ret;
  }
}

module.exports.Order = Order;