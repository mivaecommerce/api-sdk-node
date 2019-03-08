/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * $Id$
 */

const util                  = require('./util');
const models                = require('./models');
const { Response }          = require('./abstract');
const { ListQueryResponse } = require('./listquery');

/** @module Response */

/** 
 * API Response for AvailabilityGroupBusinessAccount_Update_Assigned.
 * @see https://docs.miva.com/json-api/functions/availabilitygroupbusinessaccount_update_assigned
 */
class AvailabilityGroupBusinessAccountUpdateAssigned extends Response {
  /**
   * AvailabilityGroupBusinessAccountUpdateAssigned Constructor.
   * @param {Request} request
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);

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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);

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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);

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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);

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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);

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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);

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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);

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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);

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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);

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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (util.isArray(this.data['data'])) {
      for (i = 0, l = this.data['data'].length; i < l; i++) {
        this.data['data'][i] = new models.ProvisionMessage(this.data[i]);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);

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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);

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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
 * API Response for CategoryProductList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/categoryproductlist_load_query
 */
class CategoryProductListLoadQuery extends ListQueryResponse {
  /**
   * CategoryProductListLoadQuery Constructor.
   * @param {Request} request
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
 * API Response for PriceGroupProductList_Load_Query.
 * @see https://docs.miva.com/json-api/functions/pricegroupproductlist_load_query
 */
class PriceGroupProductListLoadQuery extends ListQueryResponse {
  /**
   * PriceGroupProductListLoadQuery Constructor.
   * @param {Request} request
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
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
 * Response for RequestBuilder.
 */
class RequestBuilder extends Response {
  /**
   * RequestBuilder Constructor.
   * @param {Request} request
   * @param {Object} data
   */
  constructor(request, data = {}) {
    super(request, data);
  }
}

module.exports = {
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
  CategoryProductListLoadQuery,
  CouponPriceGroupListLoadQuery,
  PriceGroupProductListLoadQuery,
  CustomerPriceGroupListLoadQuery
};
