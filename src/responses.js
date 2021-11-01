/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util                  = require('./util');
const models                = require('./models');
const { Response }          = require('./abstract');
const { ListQueryResponse } = require('./listquery');
const { MultiCallResponse } = require('./multicall');

/** @module Response */

/** 
 * API Response for AvailabilityGroupBusinessAccount_Update_Assigned.
 * @see https://docs.miva.com/json-api/functions/availabilitygroupbusinessaccount_update_assigned
 */
class AvailabilityGroupBusinessAccountUpdateAssigned extends Response {
  /**
   * AvailabilityGroupBusinessAccountUpdateAssigned Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for AvailabilityGroupCustomer_Update_Assigned.
 * @see https://docs.miva.com/json-api/functions/availabilitygroupcustomer_update_assigned
 */
class AvailabilityGroupCustomerUpdateAssigned extends Response {
  /**
   * AvailabilityGroupCustomerUpdateAssigned Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for AvailabilityGroupList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/availabilitygrouplist_load_query
 */
class AvailabilityGroupListLoadQuery extends ListQueryResponse {
  /**
   * AvailabilityGroupListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.AvailabilityGroup(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get availabilityGroups.
   * @returns {AvailabilityGroup[]}
   */
  getAvailabilityGroups() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for AvailabilityGroupPaymentMethod_Update_Assigned.
 * @see https://docs.miva.com/json-api/functions/availabilitygrouppaymentmethod_update_assigned
 */
class AvailabilityGroupPaymentMethodUpdateAssigned extends Response {
  /**
   * AvailabilityGroupPaymentMethodUpdateAssigned Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for AvailabilityGroupProduct_Update_Assigned.
 * @see https://docs.miva.com/json-api/functions/availabilitygroupproduct_update_assigned
 */
class AvailabilityGroupProductUpdateAssigned extends Response {
  /**
   * AvailabilityGroupProductUpdateAssigned Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for AvailabilityGroupShippingMethod_Update_Assigned.
 * @see https://docs.miva.com/json-api/functions/availabilitygroupshippingmethod_update_assigned
 */
class AvailabilityGroupShippingMethodUpdateAssigned extends Response {
  /**
   * AvailabilityGroupShippingMethodUpdateAssigned Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for CategoryList_Load_Parent.
 * @see https://docs.miva.com/json-api/functions/categorylist_load_parent
 */
class CategoryListLoadParent extends Response {
  /**
   * CategoryListLoadParent Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (util.isArray(this.data['data'])) {
      for (i = 0, l = this.data['data'].length; i < l; i++) {
        this.data['data'][i] = new models.Category(this.data['data'][i]);
      }
    }
  }

  /**
   * Get categories.
   * @returns {Category[]}
   */
  getCategories() {
    return util.isNullOrUndefined(this.data['data']) ?
      [] : this.data['data'];
  }
}

/** 
 * API Response for CategoryList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/categorylist_load_query
 */
class CategoryListLoadQuery extends ListQueryResponse {
  /**
   * CategoryListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.Category(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get categories.
   * @returns {Category[]}
   */
  getCategories() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for CategoryProduct_Update_Assigned.
 * @see https://docs.miva.com/json-api/functions/categoryproduct_update_assigned
 */
class CategoryProductUpdateAssigned extends Response {
  /**
   * CategoryProductUpdateAssigned Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for Category_Insert.
 * @see https://docs.miva.com/json-api/functions/category_insert
 */
class CategoryInsert extends Response {
  /**
   * CategoryInsert Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for Category_Delete.
 * @see https://docs.miva.com/json-api/functions/category_delete
 */
class CategoryDelete extends Response {
  /**
   * CategoryDelete Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for Category_Update.
 * @see https://docs.miva.com/json-api/functions/category_update
 */
class CategoryUpdate extends Response {
  /**
   * CategoryUpdate Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for CouponList_Delete.
 * @see https://docs.miva.com/json-api/functions/couponlist_delete
 */
class CouponListDelete extends Response {
  /**
   * CouponListDelete Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }

  /**
   * Get processed.
   * @returns {number}
   */
  getProcessed() {
    if (!util.isNullOrUndefined(this.data['processed'])) {
      return this.data['processed'];
    }

    return 0;
  }
}

/** 
 * API Response for CouponList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/couponlist_load_query
 */
class CouponListLoadQuery extends ListQueryResponse {
  /**
   * CouponListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.Coupon(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get coupons.
   * @returns {Coupon[]}
   */
  getCoupons() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for CouponPriceGroup_Update_Assigned.
 * @see https://docs.miva.com/json-api/functions/couponpricegroup_update_assigned
 */
class CouponPriceGroupUpdateAssigned extends Response {
  /**
   * CouponPriceGroupUpdateAssigned Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for Coupon_Insert.
 * @see https://docs.miva.com/json-api/functions/coupon_insert
 */
class CouponInsert extends Response {
  /**
   * CouponInsert Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }

  /**
   * Get id.
   * @returns {number}
   */
  getId() {
    if (!util.isNullOrUndefined(this.data['data']) && !util.isNullOrUndefined(this.data['data']['id'])) {
      return this.data['data']['id'];
    }

    return 0;
  }
}

/** 
 * API Response for Coupon_Update.
 * @see https://docs.miva.com/json-api/functions/coupon_update
 */
class CouponUpdate extends Response {
  /**
   * CouponUpdate Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for CustomerList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/customerlist_load_query
 */
class CustomerListLoadQuery extends ListQueryResponse {
  /**
   * CustomerListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.Customer(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get customers.
   * @returns {Customer[]}
   */
  getCustomers() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for Customer_Delete.
 * @see https://docs.miva.com/json-api/functions/customer_delete
 */
class CustomerDelete extends Response {
  /**
   * CustomerDelete Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for Customer_Insert.
 * @see https://docs.miva.com/json-api/functions/customer_insert
 */
class CustomerInsert extends Response {
  /**
   * CustomerInsert Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);

    if (!this.isSuccess()) {
      return;
    }

    this.data['data'] = new models.Customer(this.data['data']);
  }

  /**
   * Get customer.
   * @returns {?Customer}
   */
  getCustomer() {
    return util.isNullOrUndefined(this.data['data']) ?
      {} : this.data['data'];
  }
}

/** 
 * API Response for Customer_Update.
 * @see https://docs.miva.com/json-api/functions/customer_update
 */
class CustomerUpdate extends Response {
  /**
   * CustomerUpdate Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for CustomerPaymentCard_Register.
 * @see https://docs.miva.com/json-api/functions/customerpaymentcard_register
 */
class CustomerPaymentCardRegister extends Response {
  /**
   * CustomerPaymentCardRegister Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);

    if (!this.isSuccess()) {
      return;
    }

    this.data['data'] = new models.CustomerPaymentCard(this.data['data']);
  }

  /**
   * Get customerPaymentCard.
   * @returns {?CustomerPaymentCard}
   */
  getCustomerPaymentCard() {
    return util.isNullOrUndefined(this.data['data']) ?
      {} : this.data['data'];
  }
}

/** 
 * API Response for Module.
 * @see https://docs.miva.com/json-api/functions/module
 */
class Module extends Response {
  /**
   * Module Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for NoteList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/notelist_load_query
 */
class NoteListLoadQuery extends ListQueryResponse {
  /**
   * NoteListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.Note(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get notes.
   * @returns {Note[]}
   */
  getNotes() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for Note_Delete.
 * @see https://docs.miva.com/json-api/functions/note_delete
 */
class NoteDelete extends Response {
  /**
   * NoteDelete Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for Note_Insert.
 * @see https://docs.miva.com/json-api/functions/note_insert
 */
class NoteInsert extends Response {
  /**
   * NoteInsert Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for Note_Update.
 * @see https://docs.miva.com/json-api/functions/note_update
 */
class NoteUpdate extends Response {
  /**
   * NoteUpdate Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for OrderCustomFieldList_Load.
 * @see https://docs.miva.com/json-api/functions/ordercustomfieldlist_load
 */
class OrderCustomFieldListLoad extends Response {
  /**
   * OrderCustomFieldListLoad Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (util.isArray(this.data['data'])) {
      for (i = 0, l = this.data['data'].length; i < l; i++) {
        this.data['data'][i] = new models.OrderCustomField(this.data['data'][i]);
      }
    }
  }

  /**
   * Get orderCustomFields.
   * @returns {OrderCustomField[]}
   */
  getOrderCustomFields() {
    return util.isNullOrUndefined(this.data['data']) ?
      [] : this.data['data'];
  }
}

/** 
 * API Response for OrderCustomFields_Update.
 * @see https://docs.miva.com/json-api/functions/ordercustomfields_update
 */
class OrderCustomFieldsUpdate extends Response {
  /**
   * OrderCustomFieldsUpdate Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for OrderItemList_BackOrder.
 * @see https://docs.miva.com/json-api/functions/orderitemlist_backorder
 */
class OrderItemListBackOrder extends Response {
  /**
   * OrderItemListBackOrder Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for OrderItemList_Cancel.
 * @see https://docs.miva.com/json-api/functions/orderitemlist_cancel
 */
class OrderItemListCancel extends Response {
  /**
   * OrderItemListCancel Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for OrderItemList_CreateShipment.
 * @see https://docs.miva.com/json-api/functions/orderitemlist_createshipment
 */
class OrderItemListCreateShipment extends Response {
  /**
   * OrderItemListCreateShipment Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);

    if (!this.isSuccess()) {
      return;
    }

    this.data['data'] = new models.OrderShipment(this.data['data']);
  }

  /**
   * Get orderShipment.
   * @returns {?OrderShipment}
   */
  getOrderShipment() {
    return util.isNullOrUndefined(this.data['data']) ?
      {} : this.data['data'];
  }
}

/** 
 * API Response for OrderItemList_Delete.
 * @see https://docs.miva.com/json-api/functions/orderitemlist_delete
 */
class OrderItemListDelete extends Response {
  /**
   * OrderItemListDelete Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for OrderItem_Add.
 * @see https://docs.miva.com/json-api/functions/orderitem_add
 */
class OrderItemAdd extends Response {
  /**
   * OrderItemAdd Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);

    if (!this.isSuccess()) {
      return;
    }

    this.data['data'] = new models.OrderTotal(this.data['data']);
  }

  /**
   * Get orderTotal.
   * @returns {?OrderTotal}
   */
  getOrderTotal() {
    return util.isNullOrUndefined(this.data['data']) ?
      {} : this.data['data'];
  }
}

/** 
 * API Response for OrderItem_Update.
 * @see https://docs.miva.com/json-api/functions/orderitem_update
 */
class OrderItemUpdate extends Response {
  /**
   * OrderItemUpdate Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);

    if (!this.isSuccess()) {
      return;
    }

    this.data['data'] = new models.OrderTotal(this.data['data']);
  }

  /**
   * Get orderTotal.
   * @returns {?OrderTotal}
   */
  getOrderTotal() {
    return util.isNullOrUndefined(this.data['data']) ?
      {} : this.data['data'];
  }
}

/** 
 * API Response for OrderList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/orderlist_load_query
 */
class OrderListLoadQuery extends ListQueryResponse {
  /**
   * OrderListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.Order(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get orders.
   * @returns {Order[]}
   */
  getOrders() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for OrderPayment_Capture.
 * @see https://docs.miva.com/json-api/functions/orderpayment_capture
 */
class OrderPaymentCapture extends Response {
  /**
   * OrderPaymentCapture Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);

    if (!this.isSuccess()) {
      return;
    }

    this.data['data'] = new models.OrderPaymentTotal(this.data['data']);
  }

  /**
   * Get orderPaymentTotal.
   * @returns {?OrderPaymentTotal}
   */
  getOrderPaymentTotal() {
    return util.isNullOrUndefined(this.data['data']) ?
      {} : this.data['data'];
  }
}

/** 
 * API Response for OrderPayment_Refund.
 * @see https://docs.miva.com/json-api/functions/orderpayment_refund
 */
class OrderPaymentRefund extends Response {
  /**
   * OrderPaymentRefund Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);

    if (!this.isSuccess()) {
      return;
    }

    this.data['data'] = new models.OrderPaymentTotal(this.data['data']);
  }

  /**
   * Get orderPaymentTotal.
   * @returns {?OrderPaymentTotal}
   */
  getOrderPaymentTotal() {
    return util.isNullOrUndefined(this.data['data']) ?
      {} : this.data['data'];
  }
}

/** 
 * API Response for OrderPayment_VOID.
 * @see https://docs.miva.com/json-api/functions/orderpayment_void
 */
class OrderPaymentVoid extends Response {
  /**
   * OrderPaymentVoid Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);

    if (!this.isSuccess()) {
      return;
    }

    this.data['data'] = new models.OrderPaymentTotal(this.data['data']);
  }

  /**
   * Get orderPaymentTotal.
   * @returns {?OrderPaymentTotal}
   */
  getOrderPaymentTotal() {
    return util.isNullOrUndefined(this.data['data']) ?
      {} : this.data['data'];
  }
}

/** 
 * API Response for OrderShipmentList_Update.
 * @see https://docs.miva.com/json-api/functions/ordershipmentlist_update
 */
class OrderShipmentListUpdate extends Response {
  /**
   * OrderShipmentListUpdate Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for Order_Create.
 * @see https://docs.miva.com/json-api/functions/order_create
 */
class OrderCreate extends Response {
  /**
   * OrderCreate Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);

    if (!this.isSuccess()) {
      return;
    }

    this.data['data'] = new models.Order(this.data['data']);
  }

  /**
   * Get order.
   * @returns {?Order}
   */
  getOrder() {
    return util.isNullOrUndefined(this.data['data']) ?
      {} : this.data['data'];
  }
}

/** 
 * API Response for Order_Delete.
 * @see https://docs.miva.com/json-api/functions/order_delete
 */
class OrderDelete extends Response {
  /**
   * OrderDelete Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for Order_Update_Customer_Information.
 * @see https://docs.miva.com/json-api/functions/order_update_customer_information
 */
class OrderUpdateCustomerInformation extends Response {
  /**
   * OrderUpdateCustomerInformation Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for PriceGroupCustomer_Update_Assigned.
 * @see https://docs.miva.com/json-api/functions/pricegroupcustomer_update_assigned
 */
class PriceGroupCustomerUpdateAssigned extends Response {
  /**
   * PriceGroupCustomerUpdateAssigned Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for PriceGroupList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/pricegrouplist_load_query
 */
class PriceGroupListLoadQuery extends ListQueryResponse {
  /**
   * PriceGroupListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.PriceGroup(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get priceGroups.
   * @returns {PriceGroup[]}
   */
  getPriceGroups() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for PriceGroupProduct_Update_Assigned.
 * @see https://docs.miva.com/json-api/functions/pricegroupproduct_update_assigned
 */
class PriceGroupProductUpdateAssigned extends Response {
  /**
   * PriceGroupProductUpdateAssigned Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for ProductImage_Add.
 * @see https://docs.miva.com/json-api/functions/productimage_add
 */
class ProductImageAdd extends Response {
  /**
   * ProductImageAdd Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for ProductImage_Delete.
 * @see https://docs.miva.com/json-api/functions/productimage_delete
 */
class ProductImageDelete extends Response {
  /**
   * ProductImageDelete Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for ProductList_Adjust_Inventory.
 * @see https://docs.miva.com/json-api/functions/productlist_adjust_inventory
 */
class ProductListAdjustInventory extends Response {
  /**
   * ProductListAdjustInventory Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for ProductList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/productlist_load_query
 */
class ProductListLoadQuery extends ListQueryResponse {
  /**
   * ProductListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.Product(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get products.
   * @returns {Product[]}
   */
  getProducts() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for ProductVariantList_Load_Product.
 * @see https://docs.miva.com/json-api/functions/productvariantlist_load_product
 */
class ProductVariantListLoadProduct extends Response {
  /**
   * ProductVariantListLoadProduct Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (util.isArray(this.data['data'])) {
      for (i = 0, l = this.data['data'].length; i < l; i++) {
        this.data['data'][i] = new models.ProductVariant(this.data['data'][i]);
      }
    }
  }

  /**
   * Get productVariants.
   * @returns {ProductVariant[]}
   */
  getProductVariants() {
    return util.isNullOrUndefined(this.data['data']) ?
      [] : this.data['data'];
  }
}

/** 
 * API Response for Product_Insert.
 * @see https://docs.miva.com/json-api/functions/product_insert
 */
class ProductInsert extends Response {
  /**
   * ProductInsert Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for Product_Delete.
 * @see https://docs.miva.com/json-api/functions/product_delete
 */
class ProductDelete extends Response {
  /**
   * ProductDelete Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for Product_Update.
 * @see https://docs.miva.com/json-api/functions/product_update
 */
class ProductUpdate extends Response {
  /**
   * ProductUpdate Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for Provision_Domain.
 * @see https://docs.miva.com/json-api/functions/provision_domain
 */
class ProvisionDomain extends Response {
  /**
   * ProvisionDomain Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (util.isArray(this.data['data'])) {
      for (i = 0, l = this.data['data'].length; i < l; i++) {
        this.data['data'][i] = new models.ProvisionMessage(this.data['data'][i]);
      }
    }
  }

  /**
   * Get provisionMessages.
   * @returns {ProvisionMessage[]}
   */
  getProvisionMessages() {
    return util.isNullOrUndefined(this.data['data']) ?
      [] : this.data['data'];
  }
}

/** 
 * API Response for Provision_Store.
 * @see https://docs.miva.com/json-api/functions/provision_store
 */
class ProvisionStore extends Response {
  /**
   * ProvisionStore Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (util.isArray(this.data['data'])) {
      for (i = 0, l = this.data['data'].length; i < l; i++) {
        this.data['data'][i] = new models.ProvisionMessage(this.data['data'][i]);
      }
    }
  }

  /**
   * Get provisionMessages.
   * @returns {ProvisionMessage[]}
   */
  getProvisionMessages() {
    return util.isNullOrUndefined(this.data['data']) ?
      [] : this.data['data'];
  }
}

/** 
 * API Response for CustomerAddressList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/customeraddresslist_load_query
 */
class CustomerAddressListLoadQuery extends ListQueryResponse {
  /**
   * CustomerAddressListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.CustomerAddress(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get customerAddresses.
   * @returns {CustomerAddress[]}
   */
  getCustomerAddresses() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for PrintQueueList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/printqueuelist_load_query
 */
class PrintQueueListLoadQuery extends ListQueryResponse {
  /**
   * PrintQueueListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.PrintQueue(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get printQueues.
   * @returns {PrintQueue[]}
   */
  getPrintQueues() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for PrintQueueJobList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/printqueuejoblist_load_query
 */
class PrintQueueJobListLoadQuery extends ListQueryResponse {
  /**
   * PrintQueueJobListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.PrintQueueJob(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get printQueueJobs.
   * @returns {PrintQueueJob[]}
   */
  getPrintQueueJobs() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for PrintQueueJob_Delete.
 * @see https://docs.miva.com/json-api/functions/printqueuejob_delete
 */
class PrintQueueJobDelete extends Response {
  /**
   * PrintQueueJobDelete Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for PrintQueueJob_Insert.
 * @see https://docs.miva.com/json-api/functions/printqueuejob_insert
 */
class PrintQueueJobInsert extends Response {
  /**
   * PrintQueueJobInsert Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }

  /**
   * Get id.
   * @returns {number}
   */
  getId() {
    if (!util.isNullOrUndefined(this.data['data']) && !util.isNullOrUndefined(this.data['data']['id'])) {
      return this.data['data']['id'];
    }

    return 0;
  }
}

/** 
 * API Response for PrintQueueJob_Status.
 * @see https://docs.miva.com/json-api/functions/printqueuejob_status
 */
class PrintQueueJobStatus extends Response {
  /**
   * PrintQueueJobStatus Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }

  /**
   * Get status.
   * @returns {string}
   */
  getStatus() {
    if (!util.isNullOrUndefined(this.data['data']) && !util.isNullOrUndefined(this.data['data']['status'])) {
      return this.data['data']['status'];
    }

    return null;
  }
}

/** 
 * API Response for PaymentMethodList_Load.
 * @see https://docs.miva.com/json-api/functions/paymentmethodlist_load
 */
class PaymentMethodListLoad extends Response {
  /**
   * PaymentMethodListLoad Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (util.isArray(this.data['data'])) {
      for (i = 0, l = this.data['data'].length; i < l; i++) {
        this.data['data'][i] = new models.PaymentMethod(this.data['data'][i]);
      }
    }
  }

  /**
   * Get paymentMethods.
   * @returns {PaymentMethod[]}
   */
  getPaymentMethods() {
    return util.isNullOrUndefined(this.data['data']) ?
      [] : this.data['data'];
  }
}

/** 
 * API Response for Order_Create_FromOrder.
 * @see https://docs.miva.com/json-api/functions/order_create_fromorder
 */
class OrderCreateFromOrder extends Response {
  /**
   * OrderCreateFromOrder Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);

    if (!this.isSuccess()) {
      return;
    }

    this.data['data'] = new models.Order(this.data['data']);
  }

  /**
   * Get order.
   * @returns {?Order}
   */
  getOrder() {
    return util.isNullOrUndefined(this.data['data']) ?
      {} : this.data['data'];
  }
}

/** 
 * API Response for Order_Authorize.
 * @see https://docs.miva.com/json-api/functions/order_authorize
 */
class OrderAuthorize extends Response {
  /**
   * OrderAuthorize Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);

    if (!this.isSuccess()) {
      return;
    }

    this.data['data'] = new models.OrderPaymentAuthorize(this.data['data']);
  }

  /**
   * Get orderPaymentAuthorize.
   * @returns {?OrderPaymentAuthorize}
   */
  getOrderPaymentAuthorize() {
    return util.isNullOrUndefined(this.data['data']) ?
      {} : this.data['data'];
  }
}

/** 
 * API Response for CustomerPaymentCardList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/customerpaymentcardlist_load_query
 */
class CustomerPaymentCardListLoadQuery extends ListQueryResponse {
  /**
   * CustomerPaymentCardListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.CustomerPaymentCard(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get customerPaymentCards.
   * @returns {CustomerPaymentCard[]}
   */
  getCustomerPaymentCards() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for Branch_Copy.
 * @see https://docs.miva.com/json-api/functions/branch_copy
 */
class BranchCopy extends Response {
  /**
   * BranchCopy Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);

    if (!this.isSuccess()) {
      return;
    }

    this.data['data'] = new models.Changeset(this.data['data']);
  }

  /**
   * Get changeset.
   * @returns {?Changeset}
   */
  getChangeset() {
    return util.isNullOrUndefined(this.data['data']) ?
      {} : this.data['data'];
  }
}

/** 
 * API Response for Branch_Create.
 * @see https://docs.miva.com/json-api/functions/branch_create
 */
class BranchCreate extends Response {
  /**
   * BranchCreate Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);

    if (!this.isSuccess()) {
      return;
    }

    this.data['data'] = new models.Branch(this.data['data']);
  }

  /**
   * Get branch.
   * @returns {?Branch}
   */
  getBranch() {
    return util.isNullOrUndefined(this.data['data']) ?
      {} : this.data['data'];
  }
}

/** 
 * API Response for Branch_Delete.
 * @see https://docs.miva.com/json-api/functions/branch_delete
 */
class BranchDelete extends Response {
  /**
   * BranchDelete Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for Changeset_Create.
 * @see https://docs.miva.com/json-api/functions/changeset_create
 */
class ChangesetCreate extends Response {
  /**
   * ChangesetCreate Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);

    if (!this.isSuccess()) {
      return;
    }

    this.data['data'] = new models.Changeset(this.data['data']);
  }

  /**
   * Get changeset.
   * @returns {?Changeset}
   */
  getChangeset() {
    return util.isNullOrUndefined(this.data['data']) ?
      {} : this.data['data'];
  }
}

/** 
 * API Response for ChangesetList_Merge.
 * @see https://docs.miva.com/json-api/functions/changesetlist_merge
 */
class ChangesetListMerge extends Response {
  /**
   * ChangesetListMerge Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);

    if (!this.isSuccess()) {
      return;
    }

    this.data['data'] = new models.Changeset(this.data['data']);
  }

  /**
   * Get changeset.
   * @returns {?Changeset}
   */
  getChangeset() {
    return util.isNullOrUndefined(this.data['data']) ?
      {} : this.data['data'];
  }
}

/** 
 * API Response for ChangesetChangeList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/changesetchangelist_load_query
 */
class ChangesetChangeListLoadQuery extends ListQueryResponse {
  /**
   * ChangesetChangeListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.ChangesetChange(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get changesetChanges.
   * @returns {ChangesetChange[]}
   */
  getChangesetChanges() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for BranchList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/branchlist_load_query
 */
class BranchListLoadQuery extends ListQueryResponse {
  /**
   * BranchListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.Branch(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get branches.
   * @returns {Branch[]}
   */
  getBranches() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for BranchTemplateVersionList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/branchtemplateversionlist_load_query
 */
class BranchTemplateVersionListLoadQuery extends ListQueryResponse {
  /**
   * BranchTemplateVersionListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.BranchTemplateVersion(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get branchTemplateVersions.
   * @returns {BranchTemplateVersion[]}
   */
  getBranchTemplateVersions() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for BranchCSSResourceVersionList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/branchcssresourceversionlist_load_query
 */
class BranchCSSResourceVersionListLoadQuery extends ListQueryResponse {
  /**
   * BranchCSSResourceVersionListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.BranchCSSResourceVersion(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get branchCSSResourceVersions.
   * @returns {BranchCSSResourceVersion[]}
   */
  getBranchCSSResourceVersions() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for BranchJavaScriptResourceVersionList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/branchjavascriptresourceversionlist_load_query
 */
class BranchJavaScriptResourceVersionListLoadQuery extends ListQueryResponse {
  /**
   * BranchJavaScriptResourceVersionListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.BranchJavaScriptResourceVersion(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get branchJavaScriptResourceVersions.
   * @returns {BranchJavaScriptResourceVersion[]}
   */
  getBranchJavaScriptResourceVersions() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for ChangesetList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/changesetlist_load_query
 */
class ChangesetListLoadQuery extends ListQueryResponse {
  /**
   * ChangesetListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.Changeset(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get changesets.
   * @returns {Changeset[]}
   */
  getChangesets() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for ChangesetTemplateVersionList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/changesettemplateversionlist_load_query
 */
class ChangesetTemplateVersionListLoadQuery extends ListQueryResponse {
  /**
   * ChangesetTemplateVersionListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.ChangesetTemplateVersion(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get changesetTemplateVersions.
   * @returns {ChangesetTemplateVersion[]}
   */
  getChangesetTemplateVersions() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for ChangesetCSSResourceVersionList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/changesetcssresourceversionlist_load_query
 */
class ChangesetCSSResourceVersionListLoadQuery extends ListQueryResponse {
  /**
   * ChangesetCSSResourceVersionListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.ChangesetCSSResourceVersion(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get changesetCSSResourceVersions.
   * @returns {ChangesetCSSResourceVersion[]}
   */
  getChangesetCSSResourceVersions() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for ChangesetJavaScriptResourceVersionList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/changesetjavascriptresourceversionlist_load_query
 */
class ChangesetJavaScriptResourceVersionListLoadQuery extends ListQueryResponse {
  /**
   * ChangesetJavaScriptResourceVersionListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.ChangesetJavaScriptResourceVersion(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get changesetJavaScriptResourceVersions.
   * @returns {ChangesetJavaScriptResourceVersion[]}
   */
  getChangesetJavaScriptResourceVersions() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for CustomerCreditHistoryList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/customercredithistorylist_load_query
 */
class CustomerCreditHistoryListLoadQuery extends ListQueryResponse {
  /**
   * CustomerCreditHistoryListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.CustomerCreditHistory(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get customerCreditHistory.
   * @returns {CustomerCreditHistory[]}
   */
  getCustomerCreditHistory() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for CustomerCreditHistory_Insert.
 * @see https://docs.miva.com/json-api/functions/customercredithistory_insert
 */
class CustomerCreditHistoryInsert extends Response {
  /**
   * CustomerCreditHistoryInsert Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for CustomerCreditHistory_Delete.
 * @see https://docs.miva.com/json-api/functions/customercredithistory_delete
 */
class CustomerCreditHistoryDelete extends Response {
  /**
   * CustomerCreditHistoryDelete Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for OrderCoupon_Update_Assigned.
 * @see https://docs.miva.com/json-api/functions/ordercoupon_update_assigned
 */
class OrderCouponUpdateAssigned extends Response {
  /**
   * OrderCouponUpdateAssigned Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for OrderPriceGroup_Update_Assigned.
 * @see https://docs.miva.com/json-api/functions/orderpricegroup_update_assigned
 */
class OrderPriceGroupUpdateAssigned extends Response {
  /**
   * OrderPriceGroupUpdateAssigned Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for OrderItemList_CreateReturn.
 * @see https://docs.miva.com/json-api/functions/orderitemlist_createreturn
 */
class OrderItemListCreateReturn extends Response {
  /**
   * OrderItemListCreateReturn Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);

    if (!this.isSuccess()) {
      return;
    }

    this.data['data'] = new models.OrderReturn(this.data['data']);
  }

  /**
   * Get orderReturn.
   * @returns {?OrderReturn}
   */
  getOrderReturn() {
    return util.isNullOrUndefined(this.data['data']) ?
      {} : this.data['data'];
  }
}

/** 
 * API Response for OrderReturnList_Received.
 * @see https://docs.miva.com/json-api/functions/orderreturnlist_received
 */
class OrderReturnListReceived extends Response {
  /**
   * OrderReturnListReceived Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for BranchPropertyVersionList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/branchpropertyversionlist_load_query
 */
class BranchPropertyVersionListLoadQuery extends ListQueryResponse {
  /**
   * BranchPropertyVersionListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.BranchPropertyVersion(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get branchPropertyVersions.
   * @returns {BranchPropertyVersion[]}
   */
  getBranchPropertyVersions() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for ChangesetPropertyVersionList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/changesetpropertyversionlist_load_query
 */
class ChangesetPropertyVersionListLoadQuery extends ListQueryResponse {
  /**
   * ChangesetPropertyVersionListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.ChangesetPropertyVersion(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get changesetPropertyVersions.
   * @returns {ChangesetPropertyVersion[]}
   */
  getChangesetPropertyVersions() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for ResourceGroupList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/resourcegrouplist_load_query
 */
class ResourceGroupListLoadQuery extends ListQueryResponse {
  /**
   * ResourceGroupListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.ResourceGroup(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get resourceGroups.
   * @returns {ResourceGroup[]}
   */
  getResourceGroups() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for BranchList_Delete.
 * @see https://docs.miva.com/json-api/functions/branchlist_delete
 */
class BranchListDelete extends Response {
  /**
   * BranchListDelete Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }

  /**
   * Get processed.
   * @returns {number}
   */
  getProcessed() {
    if (!util.isNullOrUndefined(this.data['processed'])) {
      return this.data['processed'];
    }

    return 0;
  }
}

/** 
 * API Response for MivaMerchantVersion.
 * @see https://docs.miva.com/json-api/functions/mivamerchantversion
 */
class MivaMerchantVersion extends Response {
  /**
   * MivaMerchantVersion Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);

    if (!this.isSuccess()) {
      return;
    }

    this.data['data'] = new models.MerchantVersion(this.data['data']);
  }

  /**
   * Get merchantVersion.
   * @returns {?MerchantVersion}
   */
  getMerchantVersion() {
    return util.isNullOrUndefined(this.data['data']) ?
      {} : this.data['data'];
  }
}

/** 
 * API Response for Attribute_Load_Code.
 * @see https://docs.miva.com/json-api/functions/attribute_load_code
 */
class AttributeLoadCode extends Response {
  /**
   * AttributeLoadCode Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);

    if (!this.isSuccess()) {
      return;
    }

    this.data['data'] = new models.ProductAttribute(this.data['data']);
  }

  /**
   * Get productAttribute.
   * @returns {?ProductAttribute}
   */
  getProductAttribute() {
    return util.isNullOrUndefined(this.data['data']) ?
      {} : this.data['data'];
  }
}

/** 
 * API Response for Attribute_Insert.
 * @see https://docs.miva.com/json-api/functions/attribute_insert
 */
class AttributeInsert extends Response {
  /**
   * AttributeInsert Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for Attribute_Update.
 * @see https://docs.miva.com/json-api/functions/attribute_update
 */
class AttributeUpdate extends Response {
  /**
   * AttributeUpdate Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for Attribute_Delete.
 * @see https://docs.miva.com/json-api/functions/attribute_delete
 */
class AttributeDelete extends Response {
  /**
   * AttributeDelete Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for OptionList_Load_Attribute.
 * @see https://docs.miva.com/json-api/functions/optionlist_load_attribute
 */
class OptionListLoadAttribute extends Response {
  /**
   * OptionListLoadAttribute Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;
    if (!this.isSuccess()) {
      return;
    }

    if (util.isArray(this.data['data'])) {
      for (i = 0, l = this.data['data'].length; i < l; i++) {
        this.data['data'][i] = new models.ProductOption(this.data['data'][i]);
      }
    }
  }

  /**
   * Get productOptions.
   * @returns {ProductOption[]}
   */
  getProductOptions() {
    return util.isNullOrUndefined(this.data['data']) ?
      [] : this.data['data'];
  }
}

/** 
 * API Response for Option_Delete.
 * @see https://docs.miva.com/json-api/functions/option_delete
 */
class OptionDelete extends Response {
  /**
   * OptionDelete Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for Option_Insert.
 * @see https://docs.miva.com/json-api/functions/option_insert
 */
class OptionInsert extends Response {
  /**
   * OptionInsert Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for Option_Update.
 * @see https://docs.miva.com/json-api/functions/option_update
 */
class OptionUpdate extends Response {
  /**
   * OptionUpdate Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for Option_Load_Code.
 * @see https://docs.miva.com/json-api/functions/option_load_code
 */
class OptionLoadCode extends Response {
  /**
   * OptionLoadCode Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);

    if (!this.isSuccess()) {
      return;
    }

    this.data['data'] = new models.ProductOption(this.data['data']);
  }

  /**
   * Get productOption.
   * @returns {?ProductOption}
   */
  getProductOption() {
    return util.isNullOrUndefined(this.data['data']) ?
      {} : this.data['data'];
  }
}

/** 
 * API Response for Option_Set_Default.
 * @see https://docs.miva.com/json-api/functions/option_set_default
 */
class OptionSetDefault extends Response {
  /**
   * OptionSetDefault Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for AttributeAndOptionList_Load_Product.
 * @see https://docs.miva.com/json-api/functions/attributeandoptionlist_load_product
 */
class AttributeAndOptionListLoadProduct extends Response {
  /**
   * AttributeAndOptionListLoadProduct Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;
    if (!this.isSuccess()) {
      return;
    }

    if (util.isArray(this.data['data'])) {
      for (i = 0, l = this.data['data'].length; i < l; i++) {
        this.data['data'][i] = new models.ProductAttribute(this.data['data'][i]);
      }
    }
  }

  /**
   * Get productAttributes.
   * @returns {ProductAttribute[]}
   */
  getProductAttributes() {
    return util.isNullOrUndefined(this.data['data']) ?
      [] : this.data['data'];
  }
}

/** 
 * API Response for OrderShipmentList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/ordershipmentlist_load_query
 */
class OrderShipmentListLoadQuery extends ListQueryResponse {
  /**
   * OrderShipmentListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.OrderShipment(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get orderShipments.
   * @returns {OrderShipment[]}
   */
  getOrderShipments() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for OrderItem_Split.
 * @see https://docs.miva.com/json-api/functions/orderitem_split
 */
class OrderItemSplit extends Response {
  /**
   * OrderItemSplit Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for OrderItemList_RemoveFromShipment.
 * @see https://docs.miva.com/json-api/functions/orderitemlist_removefromshipment
 */
class OrderItemListRemoveFromShipment extends Response {
  /**
   * OrderItemListRemoveFromShipment Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for CustomerAddress_Insert.
 * @see https://docs.miva.com/json-api/functions/customeraddress_insert
 */
class CustomerAddressInsert extends Response {
  /**
   * CustomerAddressInsert Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for CustomerAddress_Update.
 * @see https://docs.miva.com/json-api/functions/customeraddress_update
 */
class CustomerAddressUpdate extends Response {
  /**
   * CustomerAddressUpdate Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for CustomerAddress_Delete.
 * @see https://docs.miva.com/json-api/functions/customeraddress_delete
 */
class CustomerAddressDelete extends Response {
  /**
   * CustomerAddressDelete Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for CustomerAddressList_Delete.
 * @see https://docs.miva.com/json-api/functions/customeraddresslist_delete
 */
class CustomerAddressListDelete extends Response {
  /**
   * CustomerAddressListDelete Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for CustomerAddress_Update_Residential.
 * @see https://docs.miva.com/json-api/functions/customeraddress_update_residential
 */
class CustomerAddressUpdateResidential extends Response {
  /**
   * CustomerAddressUpdateResidential Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for URIList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/urilist_load_query
 */
class URIListLoadQuery extends ListQueryResponse {
  /**
   * URIListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.Uri(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get uris.
   * @returns {Uri[]}
   */
  getUris() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for URI_Insert.
 * @see https://docs.miva.com/json-api/functions/uri_insert
 */
class URIInsert extends Response {
  /**
   * URIInsert Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for ProductURI_Insert.
 * @see https://docs.miva.com/json-api/functions/producturi_insert
 */
class ProductURIInsert extends Response {
  /**
   * ProductURIInsert Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for CategoryURI_Insert.
 * @see https://docs.miva.com/json-api/functions/categoryuri_insert
 */
class CategoryURIInsert extends Response {
  /**
   * CategoryURIInsert Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for PageURI_Insert.
 * @see https://docs.miva.com/json-api/functions/pageuri_insert
 */
class PageURIInsert extends Response {
  /**
   * PageURIInsert Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for FeedURI_Insert.
 * @see https://docs.miva.com/json-api/functions/feeduri_insert
 */
class FeedURIInsert extends Response {
  /**
   * FeedURIInsert Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for URI_Update.
 * @see https://docs.miva.com/json-api/functions/uri_update
 */
class URIUpdate extends Response {
  /**
   * URIUpdate Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for ProductURI_Update.
 * @see https://docs.miva.com/json-api/functions/producturi_update
 */
class ProductURIUpdate extends Response {
  /**
   * ProductURIUpdate Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for CategoryURI_Update.
 * @see https://docs.miva.com/json-api/functions/categoryuri_update
 */
class CategoryURIUpdate extends Response {
  /**
   * CategoryURIUpdate Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for PageURI_Update.
 * @see https://docs.miva.com/json-api/functions/pageuri_update
 */
class PageURIUpdate extends Response {
  /**
   * PageURIUpdate Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for FeedURI_Update.
 * @see https://docs.miva.com/json-api/functions/feeduri_update
 */
class FeedURIUpdate extends Response {
  /**
   * FeedURIUpdate Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for URI_Delete.
 * @see https://docs.miva.com/json-api/functions/uri_delete
 */
class URIDelete extends Response {
  /**
   * URIDelete Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for ProductURIList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/producturilist_load_query
 */
class ProductURIListLoadQuery extends ListQueryResponse {
  /**
   * ProductURIListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.Uri(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get uris.
   * @returns {Uri[]}
   */
  getUris() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for CategoryURIList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/categoryurilist_load_query
 */
class CategoryURIListLoadQuery extends ListQueryResponse {
  /**
   * CategoryURIListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.Uri(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get uris.
   * @returns {Uri[]}
   */
  getUris() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for PageURIList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/pageurilist_load_query
 */
class PageURIListLoadQuery extends ListQueryResponse {
  /**
   * PageURIListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.Uri(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get uris.
   * @returns {Uri[]}
   */
  getUris() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for FeedURIList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/feedurilist_load_query
 */
class FeedURIListLoadQuery extends ListQueryResponse {
  /**
   * FeedURIListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.Uri(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get uris.
   * @returns {Uri[]}
   */
  getUris() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for ProductURIList_Delete.
 * @see https://docs.miva.com/json-api/functions/producturilist_delete
 */
class ProductURIListDelete extends Response {
  /**
   * ProductURIListDelete Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (util.isArray(this.data['data'])) {
      for (i = 0, l = this.data['data'].length; i < l; i++) {
        this.data['data'][i] = new models.Uri(this.data['data'][i]);
      }
    }
  }

  /**
   * Get uris.
   * @returns {Uri[]}
   */
  getUris() {
    return util.isNullOrUndefined(this.data['data']) ?
      [] : this.data['data'];
  }
}

/** 
 * API Response for PageURIList_Delete.
 * @see https://docs.miva.com/json-api/functions/pageurilist_delete
 */
class PageURIListDelete extends Response {
  /**
   * PageURIListDelete Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (util.isArray(this.data['data'])) {
      for (i = 0, l = this.data['data'].length; i < l; i++) {
        this.data['data'][i] = new models.Uri(this.data['data'][i]);
      }
    }
  }

  /**
   * Get uris.
   * @returns {Uri[]}
   */
  getUris() {
    return util.isNullOrUndefined(this.data['data']) ?
      [] : this.data['data'];
  }
}

/** 
 * API Response for CategoryURIList_Delete.
 * @see https://docs.miva.com/json-api/functions/categoryurilist_delete
 */
class CategoryURIListDelete extends Response {
  /**
   * CategoryURIListDelete Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (util.isArray(this.data['data'])) {
      for (i = 0, l = this.data['data'].length; i < l; i++) {
        this.data['data'][i] = new models.Uri(this.data['data'][i]);
      }
    }
  }

  /**
   * Get uris.
   * @returns {Uri[]}
   */
  getUris() {
    return util.isNullOrUndefined(this.data['data']) ?
      [] : this.data['data'];
  }
}

/** 
 * API Response for FeedURIList_Delete.
 * @see https://docs.miva.com/json-api/functions/feedurilist_delete
 */
class FeedURIListDelete extends Response {
  /**
   * FeedURIListDelete Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (util.isArray(this.data['data'])) {
      for (i = 0, l = this.data['data'].length; i < l; i++) {
        this.data['data'][i] = new models.Uri(this.data['data'][i]);
      }
    }
  }

  /**
   * Get uris.
   * @returns {Uri[]}
   */
  getUris() {
    return util.isNullOrUndefined(this.data['data']) ?
      [] : this.data['data'];
  }
}

/** 
 * API Response for URIList_Delete.
 * @see https://docs.miva.com/json-api/functions/urilist_delete
 */
class URIListDelete extends Response {
  /**
   * URIListDelete Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (util.isArray(this.data['data'])) {
      for (i = 0, l = this.data['data'].length; i < l; i++) {
        this.data['data'][i] = new models.Uri(this.data['data'][i]);
      }
    }
  }

  /**
   * Get uris.
   * @returns {Uri[]}
   */
  getUris() {
    return util.isNullOrUndefined(this.data['data']) ?
      [] : this.data['data'];
  }
}

/** 
 * API Response for PageURI_Redirect.
 * @see https://docs.miva.com/json-api/functions/pageuri_redirect
 */
class PageURIRedirect extends ListQueryResponse {
  /**
   * PageURIRedirect Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.Uri(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get uris.
   * @returns {Uri[]}
   */
  getUris() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for ProductURI_Redirect.
 * @see https://docs.miva.com/json-api/functions/producturi_redirect
 */
class ProductURIRedirect extends ListQueryResponse {
  /**
   * ProductURIRedirect Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.Uri(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get uris.
   * @returns {Uri[]}
   */
  getUris() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for CategoryURI_Redirect.
 * @see https://docs.miva.com/json-api/functions/categoryuri_redirect
 */
class CategoryURIRedirect extends ListQueryResponse {
  /**
   * CategoryURIRedirect Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.Uri(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get uris.
   * @returns {Uri[]}
   */
  getUris() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for AvailabilityGroup_Delete.
 * @see https://docs.miva.com/json-api/functions/availabilitygroup_delete
 */
class AvailabilityGroupDelete extends Response {
  /**
   * AvailabilityGroupDelete Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for AvailabilityGroup_Insert.
 * @see https://docs.miva.com/json-api/functions/availabilitygroup_insert
 */
class AvailabilityGroupInsert extends Response {
  /**
   * AvailabilityGroupInsert Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for AvailabilityGroup_Update.
 * @see https://docs.miva.com/json-api/functions/availabilitygroup_update
 */
class AvailabilityGroupUpdate extends Response {
  /**
   * AvailabilityGroupUpdate Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for AvailabilityGroupCategory_Update_Assigned.
 * @see https://docs.miva.com/json-api/functions/availabilitygroupcategory_update_assigned
 */
class AvailabilityGroupCategoryUpdateAssigned extends Response {
  /**
   * AvailabilityGroupCategoryUpdateAssigned Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for AvailabilityGroupShippingMethodList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/availabilitygroupshippingmethodlist_load_query
 */
class AvailabilityGroupShippingMethodListLoadQuery extends ListQueryResponse {
  /**
   * AvailabilityGroupShippingMethodListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.AvailabilityGroupShippingMethod(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get availabilityGroupShippingMethods.
   * @returns {AvailabilityGroupShippingMethod[]}
   */
  getAvailabilityGroupShippingMethods() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for PriceGroupBusinessAccount_Update_Assigned.
 * @see https://docs.miva.com/json-api/functions/pricegroupbusinessaccount_update_assigned
 */
class PriceGroupBusinessAccountUpdateAssigned extends Response {
  /**
   * PriceGroupBusinessAccountUpdateAssigned Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for PriceGroupCategory_Update_Assigned.
 * @see https://docs.miva.com/json-api/functions/pricegroupcategory_update_assigned
 */
class PriceGroupCategoryUpdateAssigned extends Response {
  /**
   * PriceGroupCategoryUpdateAssigned Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for PriceGroupExcludedCategory_Update_Assigned.
 * @see https://docs.miva.com/json-api/functions/pricegroupexcludedcategory_update_assigned
 */
class PriceGroupExcludedCategoryUpdateAssigned extends Response {
  /**
   * PriceGroupExcludedCategoryUpdateAssigned Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for PriceGroupExcludedProduct_Update_Assigned.
 * @see https://docs.miva.com/json-api/functions/pricegroupexcludedproduct_update_assigned
 */
class PriceGroupExcludedProductUpdateAssigned extends Response {
  /**
   * PriceGroupExcludedProductUpdateAssigned Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (util.isArray(this.data['data'])) {
      for (i = 0, l = this.data['data'].length; i < l; i++) {
        this.data['data'][i] = new models.PriceGroupProduct(this.data['data'][i]);
      }
    }
  }

  /**
   * Get priceGroupProducts.
   * @returns {PriceGroupProduct[]}
   */
  getPriceGroupProducts() {
    return util.isNullOrUndefined(this.data['data']) ?
      [] : this.data['data'];
  }
}

/** 
 * API Response for PriceGroupQualifyingProduct_Update_Assigned.
 * @see https://docs.miva.com/json-api/functions/pricegroupqualifyingproduct_update_assigned
 */
class PriceGroupQualifyingProductUpdateAssigned extends Response {
  /**
   * PriceGroupQualifyingProductUpdateAssigned Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for PriceGroup_Delete.
 * @see https://docs.miva.com/json-api/functions/pricegroup_delete
 */
class PriceGroupDelete extends Response {
  /**
   * PriceGroupDelete Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for PriceGroup_Insert.
 * @see https://docs.miva.com/json-api/functions/pricegroup_insert
 */
class PriceGroupInsert extends Response {
  /**
   * PriceGroupInsert Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }

  /**
   * Get id.
   * @returns {number}
   */
  getId() {
    if (!util.isNullOrUndefined(this.data['id'])) {
      return this.data['id'];
    }

    return 0;
  }
}

/** 
 * API Response for PriceGroup_Update.
 * @see https://docs.miva.com/json-api/functions/pricegroup_update
 */
class PriceGroupUpdate extends Response {
  /**
   * PriceGroupUpdate Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for CouponCustomer_Update_Assigned.
 * @see https://docs.miva.com/json-api/functions/couponcustomer_update_assigned
 */
class CouponCustomerUpdateAssigned extends Response {
  /**
   * CouponCustomerUpdateAssigned Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for BusinessAccountList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/businessaccountlist_load_query
 */
class BusinessAccountListLoadQuery extends ListQueryResponse {
  /**
   * BusinessAccountListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.BusinessAccount(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get businessAccounts.
   * @returns {BusinessAccount[]}
   */
  getBusinessAccounts() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for BusinessAccount_Insert.
 * @see https://docs.miva.com/json-api/functions/businessaccount_insert
 */
class BusinessAccountInsert extends Response {
  /**
   * BusinessAccountInsert Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for BusinessAccount_Update.
 * @see https://docs.miva.com/json-api/functions/businessaccount_update
 */
class BusinessAccountUpdate extends Response {
  /**
   * BusinessAccountUpdate Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for BusinessAccountList_Delete.
 * @see https://docs.miva.com/json-api/functions/businessaccountlist_delete
 */
class BusinessAccountListDelete extends Response {
  /**
   * BusinessAccountListDelete Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }

  /**
   * Get processed.
   * @returns {number}
   */
  getProcessed() {
    if (!util.isNullOrUndefined(this.data['processed'])) {
      return this.data['processed'];
    }

    return 0;
  }
}

/** 
 * API Response for BusinessAccountCustomer_Update_Assigned.
 * @see https://docs.miva.com/json-api/functions/businessaccountcustomer_update_assigned
 */
class BusinessAccountCustomerUpdateAssigned extends Response {
  /**
   * BusinessAccountCustomerUpdateAssigned Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for StoreList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/storelist_load_query
 */
class StoreListLoadQuery extends ListQueryResponse {
  /**
   * StoreListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.Store(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get stores.
   * @returns {Store[]}
   */
  getStores() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for Store_Load.
 * @see https://docs.miva.com/json-api/functions/store_load
 */
class StoreLoad extends Response {
  /**
   * StoreLoad Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);

    if (!this.isSuccess()) {
      return;
    }

    this.data['data'] = new models.Store(this.data['data']);
  }

  /**
   * Get store.
   * @returns {?Store}
   */
  getStore() {
    return util.isNullOrUndefined(this.data['data']) ?
      {} : this.data['data'];
  }
}

/** 
 * API Response for ProductVariantList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/productvariantlist_load_query
 */
class ProductVariantListLoadQuery extends ListQueryResponse {
  /**
   * ProductVariantListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.ProductVariant(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get productVariants.
   * @returns {ProductVariant[]}
   */
  getProductVariants() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for ProductVariant_Insert.
 * @see https://docs.miva.com/json-api/functions/productvariant_insert
 */
class ProductVariantInsert extends Response {
  /**
   * ProductVariantInsert Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }

  /**
   * Get product_id.
   * @returns {number}
   */
  getProductId() {
    if (!util.isNullOrUndefined(this.data['data']) && !util.isNullOrUndefined(this.data['data']['product_id'])) {
      return this.data['data']['product_id'];
    }

    return 0;
  }

  /**
   * Get variant_id.
   * @returns {number}
   */
  getVariantId() {
    if (!util.isNullOrUndefined(this.data['data']) && !util.isNullOrUndefined(this.data['data']['variant_id'])) {
      return this.data['data']['variant_id'];
    }

    return 0;
  }
}

/** 
 * API Response for ProductVariant_Update.
 * @see https://docs.miva.com/json-api/functions/productvariant_update
 */
class ProductVariantUpdate extends Response {
  /**
   * ProductVariantUpdate Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }

  /**
   * Get product_id.
   * @returns {number}
   */
  getProductId() {
    if (!util.isNullOrUndefined(this.data['product_id'])) {
      return this.data['product_id'];
    }

    return 0;
  }

  /**
   * Get variant_id.
   * @returns {number}
   */
  getVariantId() {
    if (!util.isNullOrUndefined(this.data['variant_id'])) {
      return this.data['variant_id'];
    }

    return 0;
  }
}

/** 
 * API Response for ProductVariant_Generate.
 * @see https://docs.miva.com/json-api/functions/productvariant_generate
 */
class ProductVariantGenerate extends Response {
  /**
   * ProductVariantGenerate Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for ProductVariant_Generate_Delimiter.
 * @see https://docs.miva.com/json-api/functions/productvariant_generate_delimiter
 */
class ProductVariantGenerateDelimiter extends Response {
  /**
   * ProductVariantGenerateDelimiter Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for ProductKitList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/productkitlist_load_query
 */
class ProductKitListLoadQuery extends ListQueryResponse {
  /**
   * ProductKitListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.ProductKit(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get productKits.
   * @returns {ProductKit[]}
   */
  getProductKits() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for ProductKit_Generate_Variants.
 * @see https://docs.miva.com/json-api/functions/productkit_generate_variants
 */
class ProductKitGenerateVariants extends Response {
  /**
   * ProductKitGenerateVariants Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for ProductKit_Update_Parts.
 * @see https://docs.miva.com/json-api/functions/productkit_update_parts
 */
class ProductKitUpdateParts extends Response {
  /**
   * ProductKitUpdateParts Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for ProductKit_Variant_Count.
 * @see https://docs.miva.com/json-api/functions/productkit_variant_count
 */
class ProductKitVariantCount extends Response {
  /**
   * ProductKitVariantCount Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }

  /**
   * Get variants.
   * @returns {number}
   */
  getVariants() {
    if (!util.isNullOrUndefined(this.data['data']) && !util.isNullOrUndefined(this.data['data']['variants'])) {
      return this.data['data']['variants'];
    }

    return 0;
  }
}

/** 
 * API Response for RelatedProduct_Update_Assigned.
 * @see https://docs.miva.com/json-api/functions/relatedproduct_update_assigned
 */
class RelatedProductUpdateAssigned extends Response {
  /**
   * RelatedProductUpdateAssigned Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (util.isArray(this.data['data'])) {
      for (i = 0, l = this.data['data'].length; i < l; i++) {
        this.data['data'][i] = new models.RelatedProduct(this.data['data'][i]);
      }
    }
  }

  /**
   * Get relatedProducts.
   * @returns {RelatedProduct[]}
   */
  getRelatedProducts() {
    return util.isNullOrUndefined(this.data['data']) ?
      [] : this.data['data'];
  }
}

/** 
 * API Response for InventoryProductSettings_Update.
 * @see https://docs.miva.com/json-api/functions/inventoryproductsettings_update
 */
class InventoryProductSettingsUpdate extends Response {
  /**
   * InventoryProductSettingsUpdate Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for ProductVariantList_Delete.
 * @see https://docs.miva.com/json-api/functions/productvariantlist_delete
 */
class ProductVariantListDelete extends Response {
  /**
   * ProductVariantListDelete Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }

  /**
   * Get processed.
   * @returns {number}
   */
  getProcessed() {
    if (!util.isNullOrUndefined(this.data['processed'])) {
      return this.data['processed'];
    }

    return 0;
  }
}

/** 
 * API Response for ImageTypeList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/imagetypelist_load_query
 */
class ImageTypeListLoadQuery extends ListQueryResponse {
  /**
   * ImageTypeListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.ImageType(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get imageTypes.
   * @returns {ImageType[]}
   */
  getImageTypes() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for ProductImage_Update_Type.
 * @see https://docs.miva.com/json-api/functions/productimage_update_type
 */
class ProductImageUpdateType extends Response {
  /**
   * ProductImageUpdateType Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for AttributeTemplateList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/attributetemplatelist_load_query
 */
class AttributeTemplateListLoadQuery extends ListQueryResponse {
  /**
   * AttributeTemplateListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.AttributeTemplate(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get attributeTemplates.
   * @returns {AttributeTemplate[]}
   */
  getAttributeTemplates() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for AttributeTemplateAttributeList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/attributetemplateattributelist_load_query
 */
class AttributeTemplateAttributeListLoadQuery extends ListQueryResponse {
  /**
   * AttributeTemplateAttributeListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.AttributeTemplateAttribute(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get attributeTemplateAttributes.
   * @returns {AttributeTemplateAttribute[]}
   */
  getAttributeTemplateAttributes() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for AttributeTemplateOptionList_Load_Attribute.
 * @see https://docs.miva.com/json-api/functions/attributetemplateoptionlist_load_attribute
 */
class AttributeTemplateOptionListLoadAttribute extends ListQueryResponse {
  /**
   * AttributeTemplateOptionListLoadAttribute Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (util.isArray(this.data['data'])) {
      for (i = 0, l = this.data['data'].length; i < l; i++) {
        this.data['data'][i] = new models.AttributeTemplateOption(this.data['data'][i]);
      }
    }
  }

  /**
   * Get attributeTemplateOptions.
   * @returns {AttributeTemplateOption[]}
   */
  getAttributeTemplateOptions() {
    return util.isNullOrUndefined(this.data['data']) ?
      [] : this.data['data'];
  }
}

/** 
 * API Response for AttributeTemplateAttribute_Delete.
 * @see https://docs.miva.com/json-api/functions/attributetemplateattribute_delete
 */
class AttributeTemplateAttributeDelete extends Response {
  /**
   * AttributeTemplateAttributeDelete Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for AttributeTemplateAttribute_Insert.
 * @see https://docs.miva.com/json-api/functions/attributetemplateattribute_insert
 */
class AttributeTemplateAttributeInsert extends Response {
  /**
   * AttributeTemplateAttributeInsert Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for AttributeTemplateAttribute_Update.
 * @see https://docs.miva.com/json-api/functions/attributetemplateattribute_update
 */
class AttributeTemplateAttributeUpdate extends Response {
  /**
   * AttributeTemplateAttributeUpdate Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for AttributeTemplateOption_Delete.
 * @see https://docs.miva.com/json-api/functions/attributetemplateoption_delete
 */
class AttributeTemplateOptionDelete extends Response {
  /**
   * AttributeTemplateOptionDelete Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for AttributeTemplateOption_Insert.
 * @see https://docs.miva.com/json-api/functions/attributetemplateoption_insert
 */
class AttributeTemplateOptionInsert extends Response {
  /**
   * AttributeTemplateOptionInsert Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for AttributeTemplateOption_Update.
 * @see https://docs.miva.com/json-api/functions/attributetemplateoption_update
 */
class AttributeTemplateOptionUpdate extends Response {
  /**
   * AttributeTemplateOptionUpdate Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for AttributeTemplate_Insert.
 * @see https://docs.miva.com/json-api/functions/attributetemplate_insert
 */
class AttributeTemplateInsert extends Response {
  /**
   * AttributeTemplateInsert Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for AttributeTemplate_Update.
 * @see https://docs.miva.com/json-api/functions/attributetemplate_update
 */
class AttributeTemplateUpdate extends Response {
  /**
   * AttributeTemplateUpdate Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for AttributeTemplate_Delete.
 * @see https://docs.miva.com/json-api/functions/attributetemplate_delete
 */
class AttributeTemplateDelete extends Response {
  /**
   * AttributeTemplateDelete Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for AttributeTemplateOption_Set_Default.
 * @see https://docs.miva.com/json-api/functions/attributetemplateoption_set_default
 */
class AttributeTemplateOptionSetDefault extends Response {
  /**
   * AttributeTemplateOptionSetDefault Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for AttributeTemplateProduct_Update_Assigned.
 * @see https://docs.miva.com/json-api/functions/attributetemplateproduct_update_assigned
 */
class AttributeTemplateProductUpdateAssigned extends Response {
  /**
   * AttributeTemplateProductUpdateAssigned Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for Branch_SetPrimary.
 * @see https://docs.miva.com/json-api/functions/branch_setprimary
 */
class BranchSetPrimary extends Response {
  /**
   * BranchSetPrimary Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for Branch_Update.
 * @see https://docs.miva.com/json-api/functions/branch_update
 */
class BranchUpdate extends Response {
  /**
   * BranchUpdate Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for Attribute_CopyTemplate.
 * @see https://docs.miva.com/json-api/functions/attribute_copytemplate
 */
class AttributeCopyTemplate extends Response {
  /**
   * AttributeCopyTemplate Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for Attribute_CopyLinkedTemplate.
 * @see https://docs.miva.com/json-api/functions/attribute_copylinkedtemplate
 */
class AttributeCopyLinkedTemplate extends Response {
  /**
   * AttributeCopyLinkedTemplate Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * API Response for ProductAttributeAndOptionList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/productattributeandoptionlist_load_query
 */
class ProductAttributeAndOptionListLoadQuery extends ListQueryResponse {
  /**
   * ProductAttributeAndOptionListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.ProductAttributeListAttribute(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get attributes.
   * @returns {ProductAttributeListAttribute[]}
   */
  getAttributes() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for CategoryProductList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/categoryproductlist_load_query
 */
class CategoryProductListLoadQuery extends ListQueryResponse {
  /**
   * CategoryProductListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.CategoryProduct(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get categoryProducts.
   * @returns {CategoryProduct[]}
   */
  getCategoryProducts() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for CouponPriceGroupList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/couponpricegrouplist_load_query
 */
class CouponPriceGroupListLoadQuery extends ListQueryResponse {
  /**
   * CouponPriceGroupListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.CouponPriceGroup(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get couponPriceGroups.
   * @returns {CouponPriceGroup[]}
   */
  getCouponPriceGroups() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for PriceGroupCustomerList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/pricegroupcustomerlist_load_query
 */
class PriceGroupCustomerListLoadQuery extends ListQueryResponse {
  /**
   * PriceGroupCustomerListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.PriceGroupCustomer(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get priceGroupCustomers.
   * @returns {PriceGroupCustomer[]}
   */
  getPriceGroupCustomers() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for PriceGroupProductList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/pricegroupproductlist_load_query
 */
class PriceGroupProductListLoadQuery extends ListQueryResponse {
  /**
   * PriceGroupProductListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.PriceGroupProduct(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get priceGroupProducts.
   * @returns {PriceGroupProduct[]}
   */
  getPriceGroupProducts() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for CustomerPriceGroupList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/customerpricegrouplist_load_query
 */
class CustomerPriceGroupListLoadQuery extends ListQueryResponse {
  /**
   * CustomerPriceGroupListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.CustomerPriceGroup(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get customerPriceGroups.
   * @returns {CustomerPriceGroup[]}
   */
  getCustomerPriceGroups() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for OrderPriceGroupList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/orderpricegrouplist_load_query
 */
class OrderPriceGroupListLoadQuery extends ListQueryResponse {
  /**
   * OrderPriceGroupListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.OrderPriceGroup(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get orderPriceGroups.
   * @returns {OrderPriceGroup[]}
   */
  getOrderPriceGroups() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for OrderCouponList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/ordercouponlist_load_query
 */
class OrderCouponListLoadQuery extends ListQueryResponse {
  /**
   * OrderCouponListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.OrderCoupon(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get orderCoupons.
   * @returns {OrderCoupon[]}
   */
  getOrderCoupons() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for ChildCategoryList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/childcategorylist_load_query
 */
class ChildCategoryListLoadQuery extends ListQueryResponse {
  /**
   * ChildCategoryListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.Category(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get categories.
   * @returns {Category[]}
   */
  getCategories() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for AvailabilityGroupCustomerList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/availabilitygroupcustomerlist_load_query
 */
class AvailabilityGroupCustomerListLoadQuery extends ListQueryResponse {
  /**
   * AvailabilityGroupCustomerListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.AvailabilityGroupCustomer(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get availabilityGroupCustomers.
   * @returns {AvailabilityGroupCustomer[]}
   */
  getAvailabilityGroupCustomers() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for AvailabilityGroupProductList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/availabilitygroupproductlist_load_query
 */
class AvailabilityGroupProductListLoadQuery extends ListQueryResponse {
  /**
   * AvailabilityGroupProductListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.AvailabilityGroupProduct(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get availabilityGroupProducts.
   * @returns {AvailabilityGroupProduct[]}
   */
  getAvailabilityGroupProducts() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for AvailabilityGroupCategoryList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/availabilitygroupcategorylist_load_query
 */
class AvailabilityGroupCategoryListLoadQuery extends ListQueryResponse {
  /**
   * AvailabilityGroupCategoryListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.AvailabilityGroupCategory(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get availabilityGroupCategories.
   * @returns {AvailabilityGroupCategory[]}
   */
  getAvailabilityGroupCategories() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for AvailabilityGroupBusinessAccountList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/availabilitygroupbusinessaccountlist_load_query
 */
class AvailabilityGroupBusinessAccountListLoadQuery extends ListQueryResponse {
  /**
   * AvailabilityGroupBusinessAccountListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.AvailabilityGroupBusinessAccount(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get availabilityGroupBusinessAccounts.
   * @returns {AvailabilityGroupBusinessAccount[]}
   */
  getAvailabilityGroupBusinessAccounts() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for PriceGroupBusinessAccountList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/pricegroupbusinessaccountlist_load_query
 */
class PriceGroupBusinessAccountListLoadQuery extends ListQueryResponse {
  /**
   * PriceGroupBusinessAccountListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.PriceGroupBusinessAccount(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get priceGroupBusinessAccounts.
   * @returns {PriceGroupBusinessAccount[]}
   */
  getPriceGroupBusinessAccounts() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for PriceGroupCategoryList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/pricegroupcategorylist_load_query
 */
class PriceGroupCategoryListLoadQuery extends ListQueryResponse {
  /**
   * PriceGroupCategoryListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.PriceGroupCategory(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get priceGroupCategories.
   * @returns {PriceGroupCategory[]}
   */
  getPriceGroupCategories() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for PriceGroupExcludedCategoryList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/pricegroupexcludedcategorylist_load_query
 */
class PriceGroupExcludedCategoryListLoadQuery extends ListQueryResponse {
  /**
   * PriceGroupExcludedCategoryListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.PriceGroupCategory(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get priceGroupCategories.
   * @returns {PriceGroupCategory[]}
   */
  getPriceGroupCategories() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for PriceGroupExcludedProductList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/pricegroupexcludedproductlist_load_query
 */
class PriceGroupExcludedProductListLoadQuery extends ListQueryResponse {
  /**
   * PriceGroupExcludedProductListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.PriceGroupProduct(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get priceGroupProducts.
   * @returns {PriceGroupProduct[]}
   */
  getPriceGroupProducts() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for PriceGroupQualifyingProductList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/pricegroupqualifyingproductlist_load_query
 */
class PriceGroupQualifyingProductListLoadQuery extends ListQueryResponse {
  /**
   * PriceGroupQualifyingProductListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.PriceGroupProduct(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get priceGroupProducts.
   * @returns {PriceGroupProduct[]}
   */
  getPriceGroupProducts() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for CouponCustomerList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/couponcustomerlist_load_query
 */
class CouponCustomerListLoadQuery extends ListQueryResponse {
  /**
   * CouponCustomerListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.CouponCustomer(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get couponCustomers.
   * @returns {CouponCustomer[]}
   */
  getCouponCustomers() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for BusinessAccountCustomerList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/businessaccountcustomerlist_load_query
 */
class BusinessAccountCustomerListLoadQuery extends ListQueryResponse {
  /**
   * BusinessAccountCustomerListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.BusinessAccountCustomer(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get businessAccountCustomers.
   * @returns {BusinessAccountCustomer[]}
   */
  getBusinessAccountCustomers() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for RelatedProductList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/relatedproductlist_load_query
 */
class RelatedProductListLoadQuery extends ListQueryResponse {
  /**
   * RelatedProductListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.RelatedProduct(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get relatedProducts.
   * @returns {RelatedProduct[]}
   */
  getRelatedProducts() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * API Response for AttributeTemplateProductList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/attributetemplateproductlist_load_query
 */
class AttributeTemplateProductListLoadQuery extends ListQueryResponse {
  /**
   * AttributeTemplateProductListLoadQuery Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (!util.isNullOrUndefined(this.data['data']) && util.isArray(this.data['data']['data'])) {
      for (i = 0, l = this.data['data']['data'].length; i < l; i++) {
        this.data['data']['data'][i] = new models.AttributeTemplateProduct(this.data['data']['data'][i]);
      }
    }
  }

  /**
   * Get attributeTemplateProducts.
   * @returns {AttributeTemplateProduct[]}
   */
  getAttributeTemplateProducts() {
    return (util.isNullOrUndefined(this.data['data']) || 
      !util.isArray(this.data['data']['data'])) ?
        [] : this.data['data']['data'];
  }
}

/** 
 * Response for RequestBuilder.
 */
class RequestBuilder extends Response {
  /**
   * RequestBuilder Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

module.exports = {
  Response,
  ListQueryResponse,
  MultiCallResponse,
  RequestBuilder,
  AvailabilityGroupBusinessAccountUpdateAssigned,
  AvailabilityGroupCustomerUpdateAssigned,
  AvailabilityGroupListLoadQuery,
  AvailabilityGroupPaymentMethodUpdateAssigned,
  AvailabilityGroupProductUpdateAssigned,
  AvailabilityGroupShippingMethodUpdateAssigned,
  CategoryListLoadParent,
  CategoryListLoadQuery,
  CategoryProductUpdateAssigned,
  CategoryInsert,
  CategoryDelete,
  CategoryUpdate,
  CouponListDelete,
  CouponListLoadQuery,
  CouponPriceGroupUpdateAssigned,
  CouponInsert,
  CouponUpdate,
  CustomerListLoadQuery,
  CustomerDelete,
  CustomerInsert,
  CustomerUpdate,
  CustomerPaymentCardRegister,
  Module,
  NoteListLoadQuery,
  NoteDelete,
  NoteInsert,
  NoteUpdate,
  OrderCustomFieldListLoad,
  OrderCustomFieldsUpdate,
  OrderItemListBackOrder,
  OrderItemListCancel,
  OrderItemListCreateShipment,
  OrderItemListDelete,
  OrderItemAdd,
  OrderItemUpdate,
  OrderListLoadQuery,
  OrderPaymentCapture,
  OrderPaymentRefund,
  OrderPaymentVoid,
  OrderShipmentListUpdate,
  OrderCreate,
  OrderDelete,
  OrderUpdateCustomerInformation,
  PriceGroupCustomerUpdateAssigned,
  PriceGroupListLoadQuery,
  PriceGroupProductUpdateAssigned,
  ProductImageAdd,
  ProductImageDelete,
  ProductListAdjustInventory,
  ProductListLoadQuery,
  ProductVariantListLoadProduct,
  ProductInsert,
  ProductDelete,
  ProductUpdate,
  ProvisionDomain,
  ProvisionStore,
  CustomerAddressListLoadQuery,
  PrintQueueListLoadQuery,
  PrintQueueJobListLoadQuery,
  PrintQueueJobDelete,
  PrintQueueJobInsert,
  PrintQueueJobStatus,
  PaymentMethodListLoad,
  OrderCreateFromOrder,
  OrderAuthorize,
  CustomerPaymentCardListLoadQuery,
  BranchCopy,
  BranchCreate,
  BranchDelete,
  ChangesetCreate,
  ChangesetListMerge,
  ChangesetChangeListLoadQuery,
  BranchListLoadQuery,
  BranchTemplateVersionListLoadQuery,
  BranchCSSResourceVersionListLoadQuery,
  BranchJavaScriptResourceVersionListLoadQuery,
  ChangesetListLoadQuery,
  ChangesetTemplateVersionListLoadQuery,
  ChangesetCSSResourceVersionListLoadQuery,
  ChangesetJavaScriptResourceVersionListLoadQuery,
  CustomerCreditHistoryListLoadQuery,
  CustomerCreditHistoryInsert,
  CustomerCreditHistoryDelete,
  OrderCouponUpdateAssigned,
  OrderPriceGroupUpdateAssigned,
  OrderItemListCreateReturn,
  OrderReturnListReceived,
  BranchPropertyVersionListLoadQuery,
  ChangesetPropertyVersionListLoadQuery,
  ResourceGroupListLoadQuery,
  BranchListDelete,
  MivaMerchantVersion,
  AttributeLoadCode,
  AttributeInsert,
  AttributeUpdate,
  AttributeDelete,
  OptionListLoadAttribute,
  OptionDelete,
  OptionInsert,
  OptionUpdate,
  OptionLoadCode,
  OptionSetDefault,
  AttributeAndOptionListLoadProduct,
  OrderShipmentListLoadQuery,
  OrderItemSplit,
  OrderItemListRemoveFromShipment,
  CustomerAddressInsert,
  CustomerAddressUpdate,
  CustomerAddressDelete,
  CustomerAddressListDelete,
  CustomerAddressUpdateResidential,
  URIListLoadQuery,
  URIInsert,
  ProductURIInsert,
  CategoryURIInsert,
  PageURIInsert,
  FeedURIInsert,
  URIUpdate,
  ProductURIUpdate,
  CategoryURIUpdate,
  PageURIUpdate,
  FeedURIUpdate,
  URIDelete,
  ProductURIListLoadQuery,
  CategoryURIListLoadQuery,
  PageURIListLoadQuery,
  FeedURIListLoadQuery,
  ProductURIListDelete,
  PageURIListDelete,
  CategoryURIListDelete,
  FeedURIListDelete,
  URIListDelete,
  PageURIRedirect,
  ProductURIRedirect,
  CategoryURIRedirect,
  AvailabilityGroupDelete,
  AvailabilityGroupInsert,
  AvailabilityGroupUpdate,
  AvailabilityGroupCategoryUpdateAssigned,
  AvailabilityGroupShippingMethodListLoadQuery,
  PriceGroupBusinessAccountUpdateAssigned,
  PriceGroupCategoryUpdateAssigned,
  PriceGroupExcludedCategoryUpdateAssigned,
  PriceGroupExcludedProductUpdateAssigned,
  PriceGroupQualifyingProductUpdateAssigned,
  PriceGroupDelete,
  PriceGroupInsert,
  PriceGroupUpdate,
  CouponCustomerUpdateAssigned,
  BusinessAccountListLoadQuery,
  BusinessAccountInsert,
  BusinessAccountUpdate,
  BusinessAccountListDelete,
  BusinessAccountCustomerUpdateAssigned,
  StoreListLoadQuery,
  StoreLoad,
  ProductVariantListLoadQuery,
  ProductVariantInsert,
  ProductVariantUpdate,
  ProductVariantGenerate,
  ProductVariantGenerateDelimiter,
  ProductKitListLoadQuery,
  ProductKitGenerateVariants,
  ProductKitUpdateParts,
  ProductKitVariantCount,
  RelatedProductUpdateAssigned,
  InventoryProductSettingsUpdate,
  ProductVariantListDelete,
  ImageTypeListLoadQuery,
  ProductImageUpdateType,
  AttributeTemplateListLoadQuery,
  AttributeTemplateAttributeListLoadQuery,
  AttributeTemplateOptionListLoadAttribute,
  AttributeTemplateAttributeDelete,
  AttributeTemplateAttributeInsert,
  AttributeTemplateAttributeUpdate,
  AttributeTemplateOptionDelete,
  AttributeTemplateOptionInsert,
  AttributeTemplateOptionUpdate,
  AttributeTemplateInsert,
  AttributeTemplateUpdate,
  AttributeTemplateDelete,
  AttributeTemplateOptionSetDefault,
  AttributeTemplateProductUpdateAssigned,
  BranchSetPrimary,
  BranchUpdate,
  AttributeCopyTemplate,
  AttributeCopyLinkedTemplate,
  ProductAttributeAndOptionListLoadQuery,
  CategoryProductListLoadQuery,
  CouponPriceGroupListLoadQuery,
  PriceGroupCustomerListLoadQuery,
  PriceGroupProductListLoadQuery,
  CustomerPriceGroupListLoadQuery,
  OrderPriceGroupListLoadQuery,
  OrderCouponListLoadQuery,
  ChildCategoryListLoadQuery,
  AvailabilityGroupCustomerListLoadQuery,
  AvailabilityGroupProductListLoadQuery,
  AvailabilityGroupCategoryListLoadQuery,
  AvailabilityGroupBusinessAccountListLoadQuery,
  PriceGroupBusinessAccountListLoadQuery,
  PriceGroupCategoryListLoadQuery,
  PriceGroupExcludedCategoryListLoadQuery,
  PriceGroupExcludedProductListLoadQuery,
  PriceGroupQualifyingProductListLoadQuery,
  CouponCustomerListLoadQuery,
  BusinessAccountCustomerListLoadQuery,
  RelatedProductListLoadQuery,
  AttributeTemplateProductListLoadQuery
};
