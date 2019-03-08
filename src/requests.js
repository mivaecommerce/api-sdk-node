/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * $Id: requests.js 73889 2019-03-06 21:19:55Z gidriss $
 */

const util                  = require('./util');
const models                = require('./models');
const responses             = require('./responses');
const { Request }           = require('./abstract');
const { ListQueryRequest }  = require('./listquery');

/** @module Request */

/** 
 * Handles API Request AvailabilityGroupBusinessAccount_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/availabilitygroupbusinessaccount_update_assigned
 */
class AvailabilityGroupBusinessAccountUpdateAssigned extends Request {
  /**
   * AvailabilityGroupBusinessAccountUpdateAssigned Constructor.
   * @param {?Client} client
   * @param {?AvailabilityGroup} availabilityGroup
   */
  constructor(client, availabilityGroup = null) {
    super(client);
    this.function = 'AvailabilityGroupBusinessAccount_Update_Assigned';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.availabilityGroupId = null;
    this.editAvailabilityGroup = null;
    this.availabilityGroupName = null;
    this.businessAccountId = null;
    this.businessAccountTitle = null;
    this.assigned = null;

    if (util.isInstanceOf(availabilityGroup, models.AvailabilityGroup)) {
      if (availabilityGroup.getId()) {
        this.setAvailabilityGroupId(availabilityGroup.getId());
      } else if (availabilityGroup.getName()) {
        this.setEditAvailabilityGroup(availabilityGroup.getName());
      }
    }
  }

  /**
   * Get AvailabilityGroup_ID.
   * @returns {number}
   */
  getAvailabilityGroupId() {
    return this.availabilityGroupId;
  }

  /**
   * Get Edit_AvailabilityGroup.
   * @returns {string}
   */
  getEditAvailabilityGroup() {
    return this.editAvailabilityGroup;
  }

  /**
   * Get AvailabilityGroup_Name.
   * @returns {string}
   */
  getAvailabilityGroupName() {
    return this.availabilityGroupName;
  }

  /**
   * Get BusinessAccount_ID.
   * @returns {number}
   */
  getBusinessAccountId() {
    return this.businessAccountId;
  }

  /**
   * Get BusinessAccount_Title.
   * @returns {string}
   */
  getBusinessAccountTitle() {
    return this.businessAccountTitle;
  }

  /**
   * Get Assigned.
   * @returns {boolean}
   */
  getAssigned() {
    return this.assigned;
  }

  /**
   * Set AvailabilityGroup_ID.
   * @param {number} availabilityGroupId
   * @returns {AvailabilityGroupBusinessAccountUpdateAssigned}
   */
  setAvailabilityGroupId(availabilityGroupId) {
    this.availabilityGroupId = availabilityGroupId;
    return this;
  }

  /**
   * Set Edit_AvailabilityGroup.
   * @param {string} editAvailabilityGroup
   * @returns {AvailabilityGroupBusinessAccountUpdateAssigned}
   */
  setEditAvailabilityGroup(editAvailabilityGroup) {
    this.editAvailabilityGroup = editAvailabilityGroup;
    return this;
  }

  /**
   * Set AvailabilityGroup_Name.
   * @param {string} availabilityGroupName
   * @returns {AvailabilityGroupBusinessAccountUpdateAssigned}
   */
  setAvailabilityGroupName(availabilityGroupName) {
    this.availabilityGroupName = availabilityGroupName;
    return this;
  }

  /**
   * Set BusinessAccount_ID.
   * @param {number} businessAccountId
   * @returns {AvailabilityGroupBusinessAccountUpdateAssigned}
   */
  setBusinessAccountId(businessAccountId) {
    this.businessAccountId = businessAccountId;
    return this;
  }

  /**
   * Set BusinessAccount_Title.
   * @param {string} businessAccountTitle
   * @returns {AvailabilityGroupBusinessAccountUpdateAssigned}
   */
  setBusinessAccountTitle(businessAccountTitle) {
    this.businessAccountTitle = businessAccountTitle;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {AvailabilityGroupBusinessAccountUpdateAssigned}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.availabilityGroupId)) {
      data['AvailabilityGroup_ID'] = this.availabilityGroupId;
    } else if (!util.isNullOrUndefined(this.editAvailabilityGroup)) {
      data['Edit_AvailabilityGroup'] = this.editAvailabilityGroup;
    } else if (!util.isNullOrUndefined(this.availabilityGroupName)) {
      data['AvailabilityGroup_Name'] = this.availabilityGroupName;
    }

    if (!util.isNullOrUndefined(this.businessAccountId)) {
      data['BusinessAccount_ID'] = this.businessAccountId;
    } else if (!util.isNullOrUndefined(this.businessAccountTitle)) {
      data['BusinessAccount_Title'] = this.businessAccountTitle;
    }

    if (!util.isNullOrUndefined(this.assigned)) {
      data['Assigned'] = this.assigned;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.AvailabilityGroupBusinessAccountUpdateAssigned(this, data);
  }
}

/** 
 * Handles API Request AvailabilityGroupCustomer_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/availabilitygroupcustomer_update_assigned
 */
class AvailabilityGroupCustomerUpdateAssigned extends Request {
  /**
   * AvailabilityGroupCustomerUpdateAssigned Constructor.
   * @param {?Client} client
   * @param {?AvailabilityGroup} availabilityGroup
   */
  constructor(client, availabilityGroup = null) {
    super(client);
    this.function = 'AvailabilityGroupCustomer_Update_Assigned';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.availabilityGroupId = null;
    this.editAvailabilityGroup = null;
    this.availabilityGroupName = null;
    this.customerId = null;
    this.editCustomer = null;
    this.customerLogin = null;
    this.assigned = null;

    if (util.isInstanceOf(availabilityGroup, models.AvailabilityGroup)) {
      if (availabilityGroup.getId()) {
        this.setAvailabilityGroupId(availabilityGroup.getId());
      } else if (availabilityGroup.getName()) {
        this.setEditAvailabilityGroup(availabilityGroup.getName());
      }
    }
  }

  /**
   * Get AvailabilityGroup_ID.
   * @returns {number}
   */
  getAvailabilityGroupId() {
    return this.availabilityGroupId;
  }

  /**
   * Get Edit_AvailabilityGroup.
   * @returns {string}
   */
  getEditAvailabilityGroup() {
    return this.editAvailabilityGroup;
  }

  /**
   * Get AvailabilityGroup_Name.
   * @returns {string}
   */
  getAvailabilityGroupName() {
    return this.availabilityGroupName;
  }

  /**
   * Get Customer_ID.
   * @returns {number}
   */
  getCustomerId() {
    return this.customerId;
  }

  /**
   * Get Edit_Customer.
   * @returns {string}
   */
  getEditCustomer() {
    return this.editCustomer;
  }

  /**
   * Get Customer_Login.
   * @returns {string}
   */
  getCustomerLogin() {
    return this.customerLogin;
  }

  /**
   * Get Assigned.
   * @returns {boolean}
   */
  getAssigned() {
    return this.assigned;
  }

  /**
   * Set AvailabilityGroup_ID.
   * @param {number} availabilityGroupId
   * @returns {AvailabilityGroupCustomerUpdateAssigned}
   */
  setAvailabilityGroupId(availabilityGroupId) {
    this.availabilityGroupId = availabilityGroupId;
    return this;
  }

  /**
   * Set Edit_AvailabilityGroup.
   * @param {string} editAvailabilityGroup
   * @returns {AvailabilityGroupCustomerUpdateAssigned}
   */
  setEditAvailabilityGroup(editAvailabilityGroup) {
    this.editAvailabilityGroup = editAvailabilityGroup;
    return this;
  }

  /**
   * Set AvailabilityGroup_Name.
   * @param {string} availabilityGroupName
   * @returns {AvailabilityGroupCustomerUpdateAssigned}
   */
  setAvailabilityGroupName(availabilityGroupName) {
    this.availabilityGroupName = availabilityGroupName;
    return this;
  }

  /**
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {AvailabilityGroupCustomerUpdateAssigned}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
    return this;
  }

  /**
   * Set Edit_Customer.
   * @param {string} editCustomer
   * @returns {AvailabilityGroupCustomerUpdateAssigned}
   */
  setEditCustomer(editCustomer) {
    this.editCustomer = editCustomer;
    return this;
  }

  /**
   * Set Customer_Login.
   * @param {string} customerLogin
   * @returns {AvailabilityGroupCustomerUpdateAssigned}
   */
  setCustomerLogin(customerLogin) {
    this.customerLogin = customerLogin;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {AvailabilityGroupCustomerUpdateAssigned}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.availabilityGroupId)) {
      data['AvailabilityGroup_ID'] = this.availabilityGroupId;
    } else if (!util.isNullOrUndefined(this.editAvailabilityGroup)) {
      data['Edit_AvailabilityGroup'] = this.editAvailabilityGroup;
    } else if (!util.isNullOrUndefined(this.availabilityGroupName)) {
      data['AvailabilityGroup_Name'] = this.availabilityGroupName;
    }

    if (!util.isNullOrUndefined(this.customerId)) {
      data['Customer_ID'] = this.customerId;
    } else if (!util.isNullOrUndefined(this.editCustomer)) {
      data['Edit_Customer'] = this.editCustomer;
    } else if (!util.isNullOrUndefined(this.customerLogin)) {
      data['Customer_Login'] = this.customerLogin;
    }

    if (!util.isNullOrUndefined(this.assigned)) {
      data['Assigned'] = this.assigned;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.AvailabilityGroupCustomerUpdateAssigned(this, data);
  }
}

/** 
 * Handles API Request AvailabilityGroupList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/availabilitygrouplist_load_query
 */
class AvailabilityGroupListLoadQuery extends ListQueryRequest {
  /**
   * AvailabilityGroupListLoadQuery Constructor.
   * @param {?Client} client
   */
  constructor(client) {
    super(client);
    this.function = 'AvailabilityGroupList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'name'
    ];

    this.availableSortFields = [
      'id',
      'name'
    ];
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.AvailabilityGroupListLoadQuery(this, data);
  }
}

/** 
 * Handles API Request AvailabilityGroupPaymentMethod_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/availabilitygrouppaymentmethod_update_assigned
 */
class AvailabilityGroupPaymentMethodUpdateAssigned extends Request {
  /**
   * AvailabilityGroupPaymentMethodUpdateAssigned Constructor.
   * @param {?Client} client
   * @param {?AvailabilityGroup} availabilityGroup
   */
  constructor(client, availabilityGroup = null) {
    super(client);
    this.function = 'AvailabilityGroupPaymentMethod_Update_Assigned';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.availabilityGroupId = null;
    this.editAvailabilityGroup = null;
    this.availabilityGroupName = null;
    this.moduleCode = null;
    this.methodCode = null;
    this.paymentCardTypeId = null;
    this.assigned = null;

    if (util.isInstanceOf(availabilityGroup, models.AvailabilityGroup)) {
      if (availabilityGroup.getId()) {
        this.setAvailabilityGroupId(availabilityGroup.getId());
      } else if (availabilityGroup.getName()) {
        this.setEditAvailabilityGroup(availabilityGroup.getName());
      }
    }
  }

  /**
   * Get AvailabilityGroup_ID.
   * @returns {number}
   */
  getAvailabilityGroupId() {
    return this.availabilityGroupId;
  }

  /**
   * Get Edit_AvailabilityGroup.
   * @returns {string}
   */
  getEditAvailabilityGroup() {
    return this.editAvailabilityGroup;
  }

  /**
   * Get AvailabilityGroup_Name.
   * @returns {string}
   */
  getAvailabilityGroupName() {
    return this.availabilityGroupName;
  }

  /**
   * Get Module_Code.
   * @returns {string}
   */
  getModuleCode() {
    return this.moduleCode;
  }

  /**
   * Get Method_Code.
   * @returns {string}
   */
  getMethodCode() {
    return this.methodCode;
  }

  /**
   * Get PaymentCardType_ID.
   * @returns {number}
   */
  getPaymentCardTypeId() {
    return this.paymentCardTypeId;
  }

  /**
   * Get Assigned.
   * @returns {boolean}
   */
  getAssigned() {
    return this.assigned;
  }

  /**
   * Set AvailabilityGroup_ID.
   * @param {number} availabilityGroupId
   * @returns {AvailabilityGroupPaymentMethodUpdateAssigned}
   */
  setAvailabilityGroupId(availabilityGroupId) {
    this.availabilityGroupId = availabilityGroupId;
    return this;
  }

  /**
   * Set Edit_AvailabilityGroup.
   * @param {string} editAvailabilityGroup
   * @returns {AvailabilityGroupPaymentMethodUpdateAssigned}
   */
  setEditAvailabilityGroup(editAvailabilityGroup) {
    this.editAvailabilityGroup = editAvailabilityGroup;
    return this;
  }

  /**
   * Set AvailabilityGroup_Name.
   * @param {string} availabilityGroupName
   * @returns {AvailabilityGroupPaymentMethodUpdateAssigned}
   */
  setAvailabilityGroupName(availabilityGroupName) {
    this.availabilityGroupName = availabilityGroupName;
    return this;
  }

  /**
   * Set Module_Code.
   * @param {string} moduleCode
   * @returns {AvailabilityGroupPaymentMethodUpdateAssigned}
   */
  setModuleCode(moduleCode) {
    this.moduleCode = moduleCode;
    return this;
  }

  /**
   * Set Method_Code.
   * @param {string} methodCode
   * @returns {AvailabilityGroupPaymentMethodUpdateAssigned}
   */
  setMethodCode(methodCode) {
    this.methodCode = methodCode;
    return this;
  }

  /**
   * Set PaymentCardType_ID.
   * @param {number} paymentCardTypeId
   * @returns {AvailabilityGroupPaymentMethodUpdateAssigned}
   */
  setPaymentCardTypeId(paymentCardTypeId) {
    this.paymentCardTypeId = paymentCardTypeId;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {AvailabilityGroupPaymentMethodUpdateAssigned}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.availabilityGroupId)) {
      data['AvailabilityGroup_ID'] = this.availabilityGroupId;
    } else if (!util.isNullOrUndefined(this.editAvailabilityGroup)) {
      data['Edit_AvailabilityGroup'] = this.editAvailabilityGroup;
    } else if (!util.isNullOrUndefined(this.availabilityGroupName)) {
      data['AvailabilityGroup_Name'] = this.availabilityGroupName;
    }

    data['Module_Code'] = this.moduleCode;

    data['Method_Code'] = this.methodCode;

    if (!util.isNullOrUndefined(this.paymentCardTypeId)) {
      data['PaymentCardType_ID'] = this.paymentCardTypeId;
    }

    data['Assigned'] = this.assigned;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.AvailabilityGroupPaymentMethodUpdateAssigned(this, data);
  }
}

/** 
 * Handles API Request AvailabilityGroupProduct_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/availabilitygroupproduct_update_assigned
 */
class AvailabilityGroupProductUpdateAssigned extends Request {
  /**
   * AvailabilityGroupProductUpdateAssigned Constructor.
   * @param {?Client} client
   * @param {?AvailabilityGroup} availabilityGroup
   */
  constructor(client, availabilityGroup = null) {
    super(client);
    this.function = 'AvailabilityGroupProduct_Update_Assigned';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.availabilityGroupId = null;
    this.editAvailabilityGroup = null;
    this.availabilityGroupName = null;
    this.productId = null;
    this.productCode = null;
    this.productSku = null;
    this.editProduct = null;
    this.assigned = null;

    if (util.isInstanceOf(availabilityGroup, models.AvailabilityGroup)) {
      if (availabilityGroup.getId()) {
        this.setAvailabilityGroupId(availabilityGroup.getId());
      } else if (availabilityGroup.getName()) {
        this.setEditAvailabilityGroup(availabilityGroup.getName());
      }
    }
  }

  /**
   * Get AvailabilityGroup_ID.
   * @returns {number}
   */
  getAvailabilityGroupId() {
    return this.availabilityGroupId;
  }

  /**
   * Get Edit_AvailabilityGroup.
   * @returns {string}
   */
  getEditAvailabilityGroup() {
    return this.editAvailabilityGroup;
  }

  /**
   * Get AvailabilityGroup_Name.
   * @returns {string}
   */
  getAvailabilityGroupName() {
    return this.availabilityGroupName;
  }

  /**
   * Get Product_ID.
   * @returns {number}
   */
  getProductId() {
    return this.productId;
  }

  /**
   * Get Product_Code.
   * @returns {string}
   */
  getProductCode() {
    return this.productCode;
  }

  /**
   * Get Product_SKU.
   * @returns {string}
   */
  getProductSku() {
    return this.productSku;
  }

  /**
   * Get Edit_Product.
   * @returns {string}
   */
  getEditProduct() {
    return this.editProduct;
  }

  /**
   * Get Assigned.
   * @returns {boolean}
   */
  getAssigned() {
    return this.assigned;
  }

  /**
   * Set AvailabilityGroup_ID.
   * @param {number} availabilityGroupId
   * @returns {AvailabilityGroupProductUpdateAssigned}
   */
  setAvailabilityGroupId(availabilityGroupId) {
    this.availabilityGroupId = availabilityGroupId;
    return this;
  }

  /**
   * Set Edit_AvailabilityGroup.
   * @param {string} editAvailabilityGroup
   * @returns {AvailabilityGroupProductUpdateAssigned}
   */
  setEditAvailabilityGroup(editAvailabilityGroup) {
    this.editAvailabilityGroup = editAvailabilityGroup;
    return this;
  }

  /**
   * Set AvailabilityGroup_Name.
   * @param {string} availabilityGroupName
   * @returns {AvailabilityGroupProductUpdateAssigned}
   */
  setAvailabilityGroupName(availabilityGroupName) {
    this.availabilityGroupName = availabilityGroupName;
    return this;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {AvailabilityGroupProductUpdateAssigned}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {AvailabilityGroupProductUpdateAssigned}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Product_SKU.
   * @param {string} productSku
   * @returns {AvailabilityGroupProductUpdateAssigned}
   */
  setProductSku(productSku) {
    this.productSku = productSku;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {AvailabilityGroupProductUpdateAssigned}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {AvailabilityGroupProductUpdateAssigned}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.availabilityGroupId)) {
      data['AvailabilityGroup_ID'] = this.availabilityGroupId;
    } else if (!util.isNullOrUndefined(this.editAvailabilityGroup)) {
      data['Edit_AvailabilityGroup'] = this.editAvailabilityGroup;
    } else if (!util.isNullOrUndefined(this.availabilityGroupName)) {
      data['AvailabilityGroup_Name'] = this.availabilityGroupName;
    }

    if (!util.isNullOrUndefined(this.productId)) {
      data['Product_ID'] = this.productId;
    } else if (!util.isNullOrUndefined(this.editProduct)) {
      data['Edit_Product'] = this.editProduct;
    } else if (!util.isNullOrUndefined(this.productCode)) {
      data['Product_Code'] = this.productCode;
    } else if (!util.isNullOrUndefined(this.productSku)) {
      data['Product_SKU'] = this.productSku;
    }

    data['Assigned'] = this.assigned;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.AvailabilityGroupProductUpdateAssigned(this, data);
  }
}

/** 
 * Handles API Request AvailabilityGroupShippingMethod_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/availabilitygroupshippingmethod_update_assigned
 */
class AvailabilityGroupShippingMethodUpdateAssigned extends Request {
  /**
   * AvailabilityGroupShippingMethodUpdateAssigned Constructor.
   * @param {?Client} client
   * @param {?AvailabilityGroup} availabilityGroup
   */
  constructor(client, availabilityGroup = null) {
    super(client);
    this.function = 'AvailabilityGroupShippingMethod_Update_Assigned';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.availabilityGroupId = null;
    this.editAvailabilityGroup = null;
    this.availabilityGroupName = null;
    this.moduleCode = null;
    this.methodCode = null;
    this.assigned = null;

    if (util.isInstanceOf(availabilityGroup, models.AvailabilityGroup)) {
      if (availabilityGroup.getId()) {
        this.setAvailabilityGroupId(availabilityGroup.getId());
      } else if (availabilityGroup.getName()) {
        this.setEditAvailabilityGroup(availabilityGroup.getName());
      }
    }
  }

  /**
   * Get AvailabilityGroup_ID.
   * @returns {number}
   */
  getAvailabilityGroupId() {
    return this.availabilityGroupId;
  }

  /**
   * Get Edit_AvailabilityGroup.
   * @returns {string}
   */
  getEditAvailabilityGroup() {
    return this.editAvailabilityGroup;
  }

  /**
   * Get AvailabilityGroup_Name.
   * @returns {string}
   */
  getAvailabilityGroupName() {
    return this.availabilityGroupName;
  }

  /**
   * Get Module_Code.
   * @returns {string}
   */
  getModuleCode() {
    return this.moduleCode;
  }

  /**
   * Get Method_Code.
   * @returns {string}
   */
  getMethodCode() {
    return this.methodCode;
  }

  /**
   * Get Assigned.
   * @returns {boolean}
   */
  getAssigned() {
    return this.assigned;
  }

  /**
   * Set AvailabilityGroup_ID.
   * @param {number} availabilityGroupId
   * @returns {AvailabilityGroupShippingMethodUpdateAssigned}
   */
  setAvailabilityGroupId(availabilityGroupId) {
    this.availabilityGroupId = availabilityGroupId;
    return this;
  }

  /**
   * Set Edit_AvailabilityGroup.
   * @param {string} editAvailabilityGroup
   * @returns {AvailabilityGroupShippingMethodUpdateAssigned}
   */
  setEditAvailabilityGroup(editAvailabilityGroup) {
    this.editAvailabilityGroup = editAvailabilityGroup;
    return this;
  }

  /**
   * Set AvailabilityGroup_Name.
   * @param {string} availabilityGroupName
   * @returns {AvailabilityGroupShippingMethodUpdateAssigned}
   */
  setAvailabilityGroupName(availabilityGroupName) {
    this.availabilityGroupName = availabilityGroupName;
    return this;
  }

  /**
   * Set Module_Code.
   * @param {string} moduleCode
   * @returns {AvailabilityGroupShippingMethodUpdateAssigned}
   */
  setModuleCode(moduleCode) {
    this.moduleCode = moduleCode;
    return this;
  }

  /**
   * Set Method_Code.
   * @param {string} methodCode
   * @returns {AvailabilityGroupShippingMethodUpdateAssigned}
   */
  setMethodCode(methodCode) {
    this.methodCode = methodCode;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {AvailabilityGroupShippingMethodUpdateAssigned}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.availabilityGroupId)) {
      data['AvailabilityGroup_ID'] = this.availabilityGroupId;
    } else if (!util.isNullOrUndefined(this.editAvailabilityGroup)) {
      data['Edit_AvailabilityGroup'] = this.editAvailabilityGroup;
    } else if (!util.isNullOrUndefined(this.availabilityGroupName)) {
      data['AvailabilityGroup_Name'] = this.availabilityGroupName;
    }

    data['Module_Code'] = this.moduleCode;

    data['Method_Code'] = this.methodCode;

    data['Assigned'] = this.assigned;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.AvailabilityGroupShippingMethodUpdateAssigned(this, data);
  }
}

/** 
 * Handles API Request CategoryList_Load_Parent. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/categorylist_load_parent
 */
class CategoryListLoadParent extends Request {
  /**
   * CategoryListLoadParent Constructor.
   * @param {?Client} client
   * @param {?Category} category
   */
  constructor(client, category = null) {
    super(client);
    this.function = 'CategoryList_Load_Parent';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.parentId = null;

    if (util.isInstanceOf(category, models.Category)) {
      this.setParentId(category.getId());
    }
  }

  /**
   * Get Parent_ID.
   * @returns {number}
   */
  getParentId() {
    return this.parentId;
  }

  /**
   * Set Parent_ID.
   * @param {number} parentId
   * @returns {CategoryListLoadParent}
   */
  setParentId(parentId) {
    this.parentId = parentId;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['Parent_ID'] = this.getParentId();

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.CategoryListLoadParent(this, data);
  }
}

/** CATEGORY_SHOW constants. */
/** @ignore */
const CATEGORY_SHOW_ALL = 'All';
/** @ignore */
const CATEGORY_SHOW_ACTIVE = 'Active';

/** 
 * Handles API Request CategoryList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/categorylist_load_query
 */
class CategoryListLoadQuery extends ListQueryRequest {
  /**
   * CategoryListLoadQuery Constructor.
   * @param {?Client} client
   */
  constructor(client) {
    super(client);
    this.function = 'CategoryList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'code',
      'name',
      'page_title',
      'parent_category',
      'page_code',
      'dt_created',
      'dt_updated',
      'depth'
    ];

    this.availableSortFields = [
      'id',
      'code',
      'name',
      'page_title',
      'active',
      'page_code',
      'parent_category',
      'disp_order',
      'dt_created',
      'dt_updated',
      'depth'
    ];

    this.availableCustomFilters = {
      Category_Show : [
          CATEGORY_SHOW_ALL,
          CATEGORY_SHOW_ACTIVE
      ],
    };
  }

  /**
   * Constant CATEGORY_SHOW_ALL
   * @returns {string}
   * @const
   * @static
   */
  static get CATEGORY_SHOW_ALL() {
    return CATEGORY_SHOW_ALL;
  }

  /**
   * Constant CATEGORY_SHOW_ACTIVE
   * @returns {string}
   * @const
   * @static
   */
  static get CATEGORY_SHOW_ACTIVE() {
    return CATEGORY_SHOW_ACTIVE;
  }
  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.CategoryListLoadQuery(this, data);
  }
}

/** 
 * Handles API Request CategoryProduct_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/categoryproduct_update_assigned
 */
class CategoryProductUpdateAssigned extends Request {
  /**
   * CategoryProductUpdateAssigned Constructor.
   * @param {?Client} client
   * @param {?Category} category
   */
  constructor(client, category = null) {
    super(client);
    this.function = 'CategoryProduct_Update_Assigned';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.categoryId = null;
    this.editCategory = null;
    this.categoryCode = null;
    this.productId = null;
    this.editProduct = null;
    this.productCode = null;
    this.productSku = null;
    this.assigned = null;

    if (util.isInstanceOf(category, models.Category)) {
      if (category.getId()) {
        this.setCategoryId(category.getId());
      } else if (category.getCode()) {
        this.setEditCategory(category.getCode());
      }
    }
  }

  /**
   * Get Category_ID.
   * @returns {number}
   */
  getCategoryId() {
    return this.categoryId;
  }

  /**
   * Get Edit_Category.
   * @returns {string}
   */
  getEditCategory() {
    return this.editCategory;
  }

  /**
   * Get Category_Code.
   * @returns {string}
   */
  getCategoryCode() {
    return this.categoryCode;
  }

  /**
   * Get Product_ID.
   * @returns {number}
   */
  getProductId() {
    return this.productId;
  }

  /**
   * Get Edit_Product.
   * @returns {string}
   */
  getEditProduct() {
    return this.editProduct;
  }

  /**
   * Get Product_Code.
   * @returns {string}
   */
  getProductCode() {
    return this.productCode;
  }

  /**
   * Get Product_SKU.
   * @returns {string}
   */
  getProductSku() {
    return this.productSku;
  }

  /**
   * Get Assigned.
   * @returns {boolean}
   */
  getAssigned() {
    return this.assigned;
  }

  /**
   * Set Category_ID.
   * @param {number} categoryId
   * @returns {CategoryProductUpdateAssigned}
   */
  setCategoryId(categoryId) {
    this.categoryId = categoryId;
    return this;
  }

  /**
   * Set Edit_Category.
   * @param {string} editCategory
   * @returns {CategoryProductUpdateAssigned}
   */
  setEditCategory(editCategory) {
    this.editCategory = editCategory;
    return this;
  }

  /**
   * Set Category_Code.
   * @param {string} categoryCode
   * @returns {CategoryProductUpdateAssigned}
   */
  setCategoryCode(categoryCode) {
    this.categoryCode = categoryCode;
    return this;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {CategoryProductUpdateAssigned}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {CategoryProductUpdateAssigned}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {CategoryProductUpdateAssigned}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Product_SKU.
   * @param {string} productSku
   * @returns {CategoryProductUpdateAssigned}
   */
  setProductSku(productSku) {
    this.productSku = productSku;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {CategoryProductUpdateAssigned}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.categoryId)) {
      data['Category_ID'] = this.categoryId;
    } else if (!util.isNullOrUndefined(this.editCategory)) {
      data['Edit_Category'] = this.editCategory;
    } else if (!util.isNullOrUndefined(this.categoryCode)) {
      data['Category_Code'] = this.categoryCode;
    }

    if (!util.isNullOrUndefined(this.productId)) {
      data['Product_ID'] = this.productId;
    } else if (!util.isNullOrUndefined(this.editProduct)) {
      data['Edit_Product'] = this.editProduct;
    } else if (!util.isNullOrUndefined(this.productCode)) {
      data['Product_Code'] = this.productCode;
    } else if (!util.isNullOrUndefined(this.productSku)) {
      data['Product_SKU'] = this.productSku;
    }

    data['Assigned'] = this.assigned;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.CategoryProductUpdateAssigned(this, data);
  }
}

/** 
 * Handles API Request Category_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/category_insert
 */
class CategoryInsert extends Request {
  /**
   * CategoryInsert Constructor.
   * @param {?Client} client
   * @param {?Category} category
   */
  constructor(client, category = null) {
    super(client);
    this.function = 'Category_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.categoryCode = null;
    this.categoryName = null;
    this.categoryActive = null;
    this.categoryPageTitle = null;
    this.categoryParentCategory = null;
    this.categoryAlternateDisplayPage = null;
    this.customFieldValues = new models.CustomFieldValues();

    if (util.isInstanceOf(category, models.Category)) {
      this.setCategoryCode(category.getCode());
      this.setCategoryName(category.getName());
      this.setCategoryActive(category.getActive());
      this.setCategoryPageTitle(category.getPageTitle());
      this.setCategoryAlternateDisplayPage(category.getPageCode());

      if (category.getCustomFieldValues()) {
        this.setCustomFieldValues(category.getCustomFieldValues());
      }
    }
  }

  /**
   * Get Category_Code.
   * @returns {string}
   */
  getCategoryCode() {
    return this.categoryCode;
  }

  /**
   * Get Category_Name.
   * @returns {string}
   */
  getCategoryName() {
    return this.categoryName;
  }

  /**
   * Get Category_Active.
   * @returns {boolean}
   */
  getCategoryActive() {
    return this.categoryActive;
  }

  /**
   * Get Category_Page_Title.
   * @returns {string}
   */
  getCategoryPageTitle() {
    return this.categoryPageTitle;
  }

  /**
   * Get Category_Parent_Category.
   * @returns {string}
   */
  getCategoryParentCategory() {
    return this.categoryParentCategory;
  }

  /**
   * Get Category_Alternate_Display_Page.
   * @returns {string}
   */
  getCategoryAlternateDisplayPage() {
    return this.categoryAlternateDisplayPage;
  }

  /**
   * Get CustomField_Values.
   * @returns {?CustomFieldValues}
   */
  getCustomFieldValues() {
    return this.customFieldValues;
  }

  /**
   * Set Category_Code.
   * @param {string} categoryCode
   * @returns {CategoryInsert}
   */
  setCategoryCode(categoryCode) {
    this.categoryCode = categoryCode;
    return this;
  }

  /**
   * Set Category_Name.
   * @param {string} categoryName
   * @returns {CategoryInsert}
   */
  setCategoryName(categoryName) {
    this.categoryName = categoryName;
    return this;
  }

  /**
   * Set Category_Active.
   * @param {boolean} categoryActive
   * @returns {CategoryInsert}
   */
  setCategoryActive(categoryActive) {
    this.categoryActive = categoryActive;
    return this;
  }

  /**
   * Set Category_Page_Title.
   * @param {string} categoryPageTitle
   * @returns {CategoryInsert}
   */
  setCategoryPageTitle(categoryPageTitle) {
    this.categoryPageTitle = categoryPageTitle;
    return this;
  }

  /**
   * Set Category_Parent_Category.
   * @param {string} categoryParentCategory
   * @returns {CategoryInsert}
   */
  setCategoryParentCategory(categoryParentCategory) {
    this.categoryParentCategory = categoryParentCategory;
    return this;
  }

  /**
   * Set Category_Alternate_Display_Page.
   * @param {string} categoryAlternateDisplayPage
   * @returns {CategoryInsert}
   */
  setCategoryAlternateDisplayPage(categoryAlternateDisplayPage) {
    this.categoryAlternateDisplayPage = categoryAlternateDisplayPage;
    return this;
  }

  /**
   * Set CustomField_Values.
   * @param {?CustomFieldValues} customFieldValues
   * @throws {Error}
   * @returns {CategoryInsert}
   */
  setCustomFieldValues(customFieldValues) {
    if (!util.isInstanceOf(customFieldValues, models.CustomFieldValues) && util.isObject(customFieldValues)) {
      customFieldValues = new models.CustomFieldValues(customFieldValues);
    } else if (!util.isInstanceOf(customFieldValues, models.CustomFieldValues)) {
      throw new Error(util.format('Expected instance of CustomFieldValues or an Object but got %s',
        typeof customFieldValues));
    }

    this.customFieldValues = customFieldValues;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['Category_Code'] = this.categoryCode;

    data['Category_Name'] = this.categoryName;

    if (!util.isNullOrUndefined(this.categoryActive)) {
      data['Category_Active'] = this.categoryActive;
    }

    if (!util.isNullOrUndefined(this.categoryPageTitle)) {
      data['Category_Page_Title'] = this.categoryPageTitle;
    }

    if (!util.isNullOrUndefined(this.categoryParentCategory)) {
      data['Category_Parent_Category'] = this.categoryParentCategory;
    }

    if (!util.isNullOrUndefined(this.categoryAlternateDisplayPage)) {
      data['Category_Alternate_Display_Page'] = this.categoryAlternateDisplayPage;
    }

    if (this.customFieldValues && util.isObject(this.customFieldValues)) {
      data['CustomField_Values'] = this.customFieldValues.toObject();
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.CategoryInsert(this, data);
  }
}

/** 
 * Handles API Request Category_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/category_delete
 */
class CategoryDelete extends Request {
  /**
   * CategoryDelete Constructor.
   * @param {?Client} client
   * @param {?Category} category
   */
  constructor(client, category = null) {
    super(client);
    this.function = 'Category_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.categoryId = null;
    this.editCategory = null;
    this.categoryCode = null;

    if (util.isInstanceOf(category, models.Category)) {
      if (category.getId()) {
        this.setCategoryId(category.getId());
      } else if (category.getCode()) {
        this.setEditCategory(category.getCode());
      }
    }
  }

  /**
   * Get Category_ID.
   * @returns {number}
   */
  getCategoryId() {
    return this.categoryId;
  }

  /**
   * Get Edit_Category.
   * @returns {string}
   */
  getEditCategory() {
    return this.editCategory;
  }

  /**
   * Get Category_Code.
   * @returns {string}
   */
  getCategoryCode() {
    return this.categoryCode;
  }

  /**
   * Set Category_ID.
   * @param {number} categoryId
   * @returns {CategoryDelete}
   */
  setCategoryId(categoryId) {
    this.categoryId = categoryId;
    return this;
  }

  /**
   * Set Edit_Category.
   * @param {string} editCategory
   * @returns {CategoryDelete}
   */
  setEditCategory(editCategory) {
    this.editCategory = editCategory;
    return this;
  }

  /**
   * Set Category_Code.
   * @param {string} categoryCode
   * @returns {CategoryDelete}
   */
  setCategoryCode(categoryCode) {
    this.categoryCode = categoryCode;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.categoryId)) {
      data['Category_ID'] = this.categoryId;
    } else if (!util.isNullOrUndefined(this.editCategory)) {
      data['Edit_Category'] = this.editCategory;
    } else if (!util.isNullOrUndefined(this.categoryCode)) {
      data['Category_Code'] = this.categoryCode;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.CategoryDelete(this, data);
  }
}

/** 
 * Handles API Request Category_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/category_update
 */
class CategoryUpdate extends Request {
  /**
   * CategoryUpdate Constructor.
   * @param {?Client} client
   * @param {?Category} category
   */
  constructor(client, category = null) {
    super(client);
    this.function = 'Category_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.categoryId = null;
    this.categoryCode = null;
    this.editCategory = null;
    this.categoryName = null;
    this.categoryPageTitle = null;
    this.categoryActive = null;
    this.categoryParentCategory = null;
    this.categoryAlternateDisplayPage = null;
    this.customFieldValues = new models.CustomFieldValues();

    if (util.isInstanceOf(category, models.Category)) {
      if (category.getId()) {
        this.setCategoryId(category.getId());
      } else if (category.getCode()) {
        this.setEditCategory(category.getCode());
      }

      this.setCategoryCode(category.getCode());
      this.setCategoryName(category.getName());
      this.setCategoryPageTitle(category.getPageTitle());
      this.setCategoryActive(category.getActive());
      this.setCategoryParentCategory(category.getParentCategory());
      this.setCategoryAlternateDisplayPage(category.getPageCode());

      if (category.getCustomFieldValues()) {
        this.setCustomFieldValues(category.getCustomFieldValues());
      }
    }
  }

  /**
   * Get Category_ID.
   * @returns {number}
   */
  getCategoryId() {
    return this.categoryId;
  }

  /**
   * Get Category_Code.
   * @returns {string}
   */
  getCategoryCode() {
    return this.categoryCode;
  }

  /**
   * Get Edit_Category.
   * @returns {string}
   */
  getEditCategory() {
    return this.editCategory;
  }

  /**
   * Get Category_Name.
   * @returns {string}
   */
  getCategoryName() {
    return this.categoryName;
  }

  /**
   * Get Category_Page_Title.
   * @returns {string}
   */
  getCategoryPageTitle() {
    return this.categoryPageTitle;
  }

  /**
   * Get Category_Active.
   * @returns {boolean}
   */
  getCategoryActive() {
    return this.categoryActive;
  }

  /**
   * Get Category_Parent_Category.
   * @returns {string}
   */
  getCategoryParentCategory() {
    return this.categoryParentCategory;
  }

  /**
   * Get Category_Alternate_Display_Page.
   * @returns {string}
   */
  getCategoryAlternateDisplayPage() {
    return this.categoryAlternateDisplayPage;
  }

  /**
   * Get CustomField_Values.
   * @returns {?CustomFieldValues}
   */
  getCustomFieldValues() {
    return this.customFieldValues;
  }

  /**
   * Set Category_ID.
   * @param {number} categoryId
   * @returns {CategoryUpdate}
   */
  setCategoryId(categoryId) {
    this.categoryId = categoryId;
    return this;
  }

  /**
   * Set Category_Code.
   * @param {string} categoryCode
   * @returns {CategoryUpdate}
   */
  setCategoryCode(categoryCode) {
    this.categoryCode = categoryCode;
    return this;
  }

  /**
   * Set Edit_Category.
   * @param {string} editCategory
   * @returns {CategoryUpdate}
   */
  setEditCategory(editCategory) {
    this.editCategory = editCategory;
    return this;
  }

  /**
   * Set Category_Name.
   * @param {string} categoryName
   * @returns {CategoryUpdate}
   */
  setCategoryName(categoryName) {
    this.categoryName = categoryName;
    return this;
  }

  /**
   * Set Category_Page_Title.
   * @param {string} categoryPageTitle
   * @returns {CategoryUpdate}
   */
  setCategoryPageTitle(categoryPageTitle) {
    this.categoryPageTitle = categoryPageTitle;
    return this;
  }

  /**
   * Set Category_Active.
   * @param {boolean} categoryActive
   * @returns {CategoryUpdate}
   */
  setCategoryActive(categoryActive) {
    this.categoryActive = categoryActive;
    return this;
  }

  /**
   * Set Category_Parent_Category.
   * @param {string} categoryParentCategory
   * @returns {CategoryUpdate}
   */
  setCategoryParentCategory(categoryParentCategory) {
    this.categoryParentCategory = categoryParentCategory;
    return this;
  }

  /**
   * Set Category_Alternate_Display_Page.
   * @param {string} categoryAlternateDisplayPage
   * @returns {CategoryUpdate}
   */
  setCategoryAlternateDisplayPage(categoryAlternateDisplayPage) {
    this.categoryAlternateDisplayPage = categoryAlternateDisplayPage;
    return this;
  }

  /**
   * Set CustomField_Values.
   * @param {?CustomFieldValues} customFieldValues
   * @throws {Error}
   * @returns {CategoryUpdate}
   */
  setCustomFieldValues(customFieldValues) {
    if (!util.isInstanceOf(customFieldValues, models.CustomFieldValues) && util.isObject(customFieldValues)) {
      customFieldValues = new models.CustomFieldValues(customFieldValues);
    } else if (!util.isInstanceOf(customFieldValues, models.CustomFieldValues)) {
      throw new Error(util.format('Expected instance of CustomFieldValues or an Object but got %s',
        typeof customFieldValues));
    }

    this.customFieldValues = customFieldValues;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.categoryId)) {
      data['Category_ID'] = this.categoryId;
    } else if (!util.isNullOrUndefined(this.editCategory)) {
      data['Edit_Category'] = this.editCategory;
    }

    if (!util.isNullOrUndefined(this.categoryCode)) {
      data['Category_Code'] = this.categoryCode;
    }

    if (!util.isNullOrUndefined(this.categoryName)) {
      data['Category_Name'] = this.categoryName;
    }

    if (!util.isNullOrUndefined(this.categoryPageTitle)) {
      data['Category_Page_Title'] = this.categoryPageTitle;
    }

    if (!util.isNullOrUndefined(this.categoryActive)) {
      data['Category_Active'] = this.categoryActive;
    }

    if (!util.isNullOrUndefined(this.categoryParentCategory)) {
      data['Category_Parent_Category'] = this.categoryParentCategory;
    }

    if (!util.isNullOrUndefined(this.categoryAlternateDisplayPage)) {
      data['Category_Alternate_Display_Page'] = this.categoryAlternateDisplayPage;
    }

    if (this.customFieldValues && util.isObject(this.customFieldValues)) {
      data['CustomField_Values'] = this.customFieldValues.toObject();
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.CategoryUpdate(this, data);
  }
}

/** 
 * Handles API Request CouponList_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/couponlist_delete
 */
class CouponListDelete extends Request {
  /**
   * CouponListDelete Constructor.
   * @param {?Client} client
   */
  constructor(client) {
    super(client);
    this.function = 'CouponList_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.couponIds = [];
  }

  /**
   * Get Coupon_IDs.
   * @returns {Array}
   */
  getCouponIds() {
    return this.couponIds;
  }

  /**
   * Add Coupon_IDs.
   * @param {number} couponId
   * @returns {CouponListDelete}
   */
  addCouponId(couponId) {
    this.couponIds.push(couponId);
    return this;
  }

  /**
   * Add Coupon model.
   * @param {Coupon} coupon
   * @throws {Error}
   * @returns {CouponListDelete}
   */
  addCoupon(coupon) {
    if (!util.isInstanceOf(coupon, models.Coupon)) {
      throw new Error(util.format('Expected instance of Coupon but got %s',
        typeof coupon));
    }

    if (coupon.getId()) {
      this.couponIds.push(coupon.getId());
    }

    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['Coupon_IDs'] = this.couponIds;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.CouponListDelete(this, data);
  }
}

/** 
 * Handles API Request CouponList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/couponlist_load_query
 */
class CouponListLoadQuery extends ListQueryRequest {
  /**
   * CouponListLoadQuery Constructor.
   * @param {?Client} client
   */
  constructor(client) {
    super(client);
    this.function = 'CouponList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'code',
      'descrip',
      'custscope',
      'dt_start',
      'dt_end',
      'max_use',
      'max_per',
      'active',
      'use_count'
    ];

    this.availableSortFields = [
      'id',
      'code',
      'descrip',
      'custscope',
      'dt_start',
      'dt_end',
      'max_use',
      'max_per',
      'active',
      'use_count'
    ];
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.CouponListLoadQuery(this, data);
  }
}

/** 
 * Handles API Request CouponPriceGroup_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/couponpricegroup_update_assigned
 */
class CouponPriceGroupUpdateAssigned extends Request {
  /**
   * CouponPriceGroupUpdateAssigned Constructor.
   * @param {?Client} client
   * @param {?Coupon} coupon
   */
  constructor(client, coupon = null) {
    super(client);
    this.function = 'CouponPriceGroup_Update_Assigned';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.couponId = null;
    this.editCoupon = null;
    this.couponCode = null;
    this.priceGroupId = null;
    this.priceGroupName = null;
    this.assigned = null;

    if (util.isInstanceOf(coupon, models.Coupon)) {
      if (coupon.getId()) {
        this.setCouponId(coupon.getId());
      } else if (coupon.getCode()) {
        this.setEditCoupon(coupon.getCode());
      }
    }
  }

  /**
   * Get Coupon_ID.
   * @returns {number}
   */
  getCouponId() {
    return this.couponId;
  }

  /**
   * Get Edit_Coupon.
   * @returns {string}
   */
  getEditCoupon() {
    return this.editCoupon;
  }

  /**
   * Get Coupon_Code.
   * @returns {string}
   */
  getCouponCode() {
    return this.couponCode;
  }

  /**
   * Get PriceGroup_ID.
   * @returns {number}
   */
  getPriceGroupId() {
    return this.priceGroupId;
  }

  /**
   * Get PriceGroup_Name.
   * @returns {string}
   */
  getPriceGroupName() {
    return this.priceGroupName;
  }

  /**
   * Get Assigned.
   * @returns {boolean}
   */
  getAssigned() {
    return this.assigned;
  }

  /**
   * Set Coupon_ID.
   * @param {number} couponId
   * @returns {CouponPriceGroupUpdateAssigned}
   */
  setCouponId(couponId) {
    this.couponId = couponId;
    return this;
  }

  /**
   * Set Edit_Coupon.
   * @param {string} editCoupon
   * @returns {CouponPriceGroupUpdateAssigned}
   */
  setEditCoupon(editCoupon) {
    this.editCoupon = editCoupon;
    return this;
  }

  /**
   * Set Coupon_Code.
   * @param {string} couponCode
   * @returns {CouponPriceGroupUpdateAssigned}
   */
  setCouponCode(couponCode) {
    this.couponCode = couponCode;
    return this;
  }

  /**
   * Set PriceGroup_ID.
   * @param {number} priceGroupId
   * @returns {CouponPriceGroupUpdateAssigned}
   */
  setPriceGroupId(priceGroupId) {
    this.priceGroupId = priceGroupId;
    return this;
  }

  /**
   * Set PriceGroup_Name.
   * @param {string} priceGroupName
   * @returns {CouponPriceGroupUpdateAssigned}
   */
  setPriceGroupName(priceGroupName) {
    this.priceGroupName = priceGroupName;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {CouponPriceGroupUpdateAssigned}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.couponId)) {
      data['Coupon_ID'] = this.couponId;
    } else if (!util.isNullOrUndefined(this.editCoupon)) {
      data['Edit_Coupon'] = this.editCoupon;
    } else if (!util.isNullOrUndefined(this.couponCode)) {
      data['Coupon_Code'] = this.couponCode;
    }

    if (!util.isNullOrUndefined(this.priceGroupId)) {
      data['PriceGroup_ID'] = this.priceGroupId;
    } else if (!util.isNullOrUndefined(this.priceGroupName)) {
      data['PriceGroup_Name'] = this.priceGroupName;
    }

    data['Assigned'] = this.assigned;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.CouponPriceGroupUpdateAssigned(this, data);
  }
}

/** 
 * Handles API Request Coupon_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/coupon_insert
 */
class CouponInsert extends Request {
  /**
   * CouponInsert Constructor.
   * @param {?Client} client
   * @param {?Coupon} coupon
   */
  constructor(client, coupon = null) {
    super(client);
    this.function = 'Coupon_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.code = null;
    this.description = null;
    this.customerScope = null;
    this.dateTimeStart = null;
    this.dateTimeEnd = null;
    this.maxUse = null;
    this.maxPer = null;
    this.active = null;
    this.priceGroupId = null;

    if (util.isInstanceOf(coupon, models.Coupon)) {
      this.setCode(coupon.getCode());
      this.setDescription(coupon.getDescription());
      this.setCustomerScope(coupon.getCustomerScope());
      this.setDateTimeStart(coupon.getDateTimeStart());
      this.setDateTimeEnd(coupon.getDateTimeEnd());
      this.setMaxUse(coupon.getMaxUse());
      this.setMaxPer(coupon.getMaxPer());
      this.setActive(coupon.getActive());
    }
  }

  /**
   * Get Code.
   * @returns {string}
   */
  getCode() {
    return this.code;
  }

  /**
   * Get Description.
   * @returns {string}
   */
  getDescription() {
    return this.description;
  }

  /**
   * Get CustomerScope.
   * @returns {string}
   */
  getCustomerScope() {
    return this.customerScope;
  }

  /**
   * Get DateTime_Start.
   * @returns {number}
   */
  getDateTimeStart() {
    return this.dateTimeStart;
  }

  /**
   * Get DateTime_End.
   * @returns {number}
   */
  getDateTimeEnd() {
    return this.dateTimeEnd;
  }

  /**
   * Get Max_Use.
   * @returns {number}
   */
  getMaxUse() {
    return this.maxUse;
  }

  /**
   * Get Max_Per.
   * @returns {number}
   */
  getMaxPer() {
    return this.maxPer;
  }

  /**
   * Get Active.
   * @returns {boolean}
   */
  getActive() {
    return this.active;
  }

  /**
   * Get PriceGroup_ID.
   * @returns {number}
   */
  getPriceGroupId() {
    return this.priceGroupId;
  }

  /**
   * Set Code.
   * @param {string} code
   * @returns {CouponInsert}
   */
  setCode(code) {
    this.code = code;
    return this;
  }

  /**
   * Set Description.
   * @param {string} description
   * @returns {CouponInsert}
   */
  setDescription(description) {
    this.description = description;
    return this;
  }

  /**
   * Set CustomerScope.
   * @param {string} customerScope
   * @returns {CouponInsert}
   */
  setCustomerScope(customerScope) {
    this.customerScope = customerScope;
    return this;
  }

  /**
   * Set DateTime_Start.
   * @param {number|Date} dateTimeStart
   * @returns {CouponInsert}
   */
  setDateTimeStart(dateTimeStart) {
    if (util.isDate(dateTimeStart)) {
      this.dateTimeStart = Math.floor(dateTimeStart.getTime()/1000);      
    } else {
      this.dateTimeStart = dateTimeStart;
    }

    return this;
  }

  /**
   * Set DateTime_End.
   * @param {number|Date} dateTimeEnd
   * @returns {CouponInsert}
   */
  setDateTimeEnd(dateTimeEnd) {
    if (util.isDate(dateTimeEnd)) {
      this.dateTimeEnd = Math.floor(dateTimeEnd.getTime()/1000);      
    } else {
      this.dateTimeEnd = dateTimeEnd;
    }

    return this;
  }

  /**
   * Set Max_Use.
   * @param {number} maxUse
   * @returns {CouponInsert}
   */
  setMaxUse(maxUse) {
    this.maxUse = maxUse;
    return this;
  }

  /**
   * Set Max_Per.
   * @param {number} maxPer
   * @returns {CouponInsert}
   */
  setMaxPer(maxPer) {
    this.maxPer = maxPer;
    return this;
  }

  /**
   * Set Active.
   * @param {boolean} active
   * @returns {CouponInsert}
   */
  setActive(active) {
    this.active = active;
    return this;
  }

  /**
   * Set PriceGroup_ID.
   * @param {number} priceGroupId
   * @returns {CouponInsert}
   */
  setPriceGroupId(priceGroupId) {
    this.priceGroupId = priceGroupId;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['Code'] = this.code;

    if (!util.isNullOrUndefined(this.description)) {
      data['Description'] = this.description;
    }

    if (!util.isNullOrUndefined(this.customerScope)) {
      data['CustomerScope'] = this.customerScope;
    }

    if (!util.isNullOrUndefined(this.dateTimeStart)) {
      data['DateTime_Start'] = this.dateTimeStart;
    }

    if (!util.isNullOrUndefined(this.dateTimeEnd)) {
      data['DateTime_End'] = this.dateTimeEnd;
    }

    if (!util.isNullOrUndefined(this.maxUse)) {
      data['Max_Use'] = this.maxUse;
    }

    if (!util.isNullOrUndefined(this.maxPer)) {
      data['Max_Per'] = this.maxPer;
    }

    if (!util.isNullOrUndefined(this.active)) {
      data['Active'] = this.active;
    }

    if (!util.isNullOrUndefined(this.priceGroupId)) {
      data['PriceGroup_ID'] = this.priceGroupId;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.CouponInsert(this, data);
  }
}

/** 
 * Handles API Request Coupon_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/coupon_update
 */
class CouponUpdate extends Request {
  /**
   * CouponUpdate Constructor.
   * @param {?Client} client
   * @param {?Coupon} coupon
   */
  constructor(client, coupon = null) {
    super(client);
    this.function = 'Coupon_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.couponId = null;
    this.couponCode = null;
    this.editCoupon = null;
    this.code = null;
    this.description = null;
    this.customerScope = null;
    this.dateTimeStart = null;
    this.dateTimeEnd = null;
    this.maxUse = null;
    this.maxPer = null;
    this.active = null;

    if (util.isInstanceOf(coupon, models.Coupon)) {
      if (coupon.getId()) {
        this.setCouponId(coupon.getId());
      } else if (coupon.getCode()) {
        this.setEditCoupon(coupon.getCode());
      }

      this.setCouponCode(coupon.getCode());
      this.setCode(coupon.getCode());
      this.setDescription(coupon.getDescription());
      this.setCustomerScope(coupon.getCustomerScope());
      this.setDateTimeStart(coupon.getDateTimeStart());
      this.setDateTimeEnd(coupon.getDateTimeEnd());
      this.setMaxUse(coupon.getMaxUse());
      this.setMaxPer(coupon.getMaxPer());
      this.setActive(coupon.getActive());
    }
  }

  /**
   * Get Coupon_ID.
   * @returns {number}
   */
  getCouponId() {
    return this.couponId;
  }

  /**
   * Get Coupon_Code.
   * @returns {string}
   */
  getCouponCode() {
    return this.couponCode;
  }

  /**
   * Get Edit_Coupon.
   * @returns {string}
   */
  getEditCoupon() {
    return this.editCoupon;
  }

  /**
   * Get Code.
   * @returns {string}
   */
  getCode() {
    return this.code;
  }

  /**
   * Get Description.
   * @returns {string}
   */
  getDescription() {
    return this.description;
  }

  /**
   * Get CustomerScope.
   * @returns {string}
   */
  getCustomerScope() {
    return this.customerScope;
  }

  /**
   * Get DateTime_Start.
   * @returns {number}
   */
  getDateTimeStart() {
    return this.dateTimeStart;
  }

  /**
   * Get DateTime_End.
   * @returns {number}
   */
  getDateTimeEnd() {
    return this.dateTimeEnd;
  }

  /**
   * Get Max_Use.
   * @returns {number}
   */
  getMaxUse() {
    return this.maxUse;
  }

  /**
   * Get Max_Per.
   * @returns {number}
   */
  getMaxPer() {
    return this.maxPer;
  }

  /**
   * Get Active.
   * @returns {boolean}
   */
  getActive() {
    return this.active;
  }

  /**
   * Set Coupon_ID.
   * @param {number} couponId
   * @returns {CouponUpdate}
   */
  setCouponId(couponId) {
    this.couponId = couponId;
    return this;
  }

  /**
   * Set Coupon_Code.
   * @param {string} couponCode
   * @returns {CouponUpdate}
   */
  setCouponCode(couponCode) {
    this.couponCode = couponCode;
    return this;
  }

  /**
   * Set Edit_Coupon.
   * @param {string} editCoupon
   * @returns {CouponUpdate}
   */
  setEditCoupon(editCoupon) {
    this.editCoupon = editCoupon;
    return this;
  }

  /**
   * Set Code.
   * @param {string} code
   * @returns {CouponUpdate}
   */
  setCode(code) {
    this.code = code;
    return this;
  }

  /**
   * Set Description.
   * @param {string} description
   * @returns {CouponUpdate}
   */
  setDescription(description) {
    this.description = description;
    return this;
  }

  /**
   * Set CustomerScope.
   * @param {string} customerScope
   * @returns {CouponUpdate}
   */
  setCustomerScope(customerScope) {
    this.customerScope = customerScope;
    return this;
  }

  /**
   * Set DateTime_Start.
   * @param {number|Date} dateTimeStart
   * @returns {CouponUpdate}
   */
  setDateTimeStart(dateTimeStart) {
    if (util.isDate(dateTimeStart)) {
      this.dateTimeStart = Math.floor(dateTimeStart.getTime()/1000);      
    } else {
      this.dateTimeStart = dateTimeStart;
    }

    return this;
  }

  /**
   * Set DateTime_End.
   * @param {number|Date} dateTimeEnd
   * @returns {CouponUpdate}
   */
  setDateTimeEnd(dateTimeEnd) {
    if (util.isDate(dateTimeEnd)) {
      this.dateTimeEnd = Math.floor(dateTimeEnd.getTime()/1000);      
    } else {
      this.dateTimeEnd = dateTimeEnd;
    }

    return this;
  }

  /**
   * Set Max_Use.
   * @param {number} maxUse
   * @returns {CouponUpdate}
   */
  setMaxUse(maxUse) {
    this.maxUse = maxUse;
    return this;
  }

  /**
   * Set Max_Per.
   * @param {number} maxPer
   * @returns {CouponUpdate}
   */
  setMaxPer(maxPer) {
    this.maxPer = maxPer;
    return this;
  }

  /**
   * Set Active.
   * @param {boolean} active
   * @returns {CouponUpdate}
   */
  setActive(active) {
    this.active = active;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.couponId)) {
      data['Coupon_ID'] = this.couponId;
    } else if (!util.isNullOrUndefined(this.editCoupon)) {
      data['Edit_Coupon'] = this.editCoupon;
    }

    if (!util.isNullOrUndefined(this.couponCode)) {
      data['Coupon_Code'] = this.couponCode;
    }

    if (!util.isNullOrUndefined(this.code)) {
      data['Code'] = this.code;
    }

    if (!util.isNullOrUndefined(this.description)) {
      data['Description'] = this.description;
    }

    if (!util.isNullOrUndefined(this.customerScope)) {
      data['CustomerScope'] = this.customerScope;
    }

    if (!util.isNullOrUndefined(this.dateTimeStart)) {
      data['DateTime_Start'] = this.dateTimeStart;
    }

    if (!util.isNullOrUndefined(this.dateTimeEnd)) {
      data['DateTime_End'] = this.dateTimeEnd;
    }

    if (!util.isNullOrUndefined(this.maxUse)) {
      data['Max_Use'] = this.maxUse;
    }

    if (!util.isNullOrUndefined(this.maxPer)) {
      data['Max_Per'] = this.maxPer;
    }

    if (!util.isNullOrUndefined(this.active)) {
      data['Active'] = this.active;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.CouponUpdate(this, data);
  }
}

/** 
 * Handles API Request CustomerList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/customerlist_load_query
 */
class CustomerListLoadQuery extends ListQueryRequest {
  /**
   * CustomerListLoadQuery Constructor.
   * @param {?Client} client
   */
  constructor(client) {
    super(client);
    this.function = 'CustomerList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'login',
      'pw_email',
      'ship_fname',
      'ship_lname',
      'ship_email',
      'ship_comp',
      'ship_phone',
      'ship_fax',
      'ship_addr1',
      'ship_addr2',
      'ship_city',
      'ship_state',
      'ship_zip',
      'ship_cntry',
      'ship_res',
      'bill_fname',
      'bill_lname',
      'bill_email',
      'bill_comp',
      'bill_phone',
      'bill_fax',
      'bill_addr1',
      'bill_addr2',
      'bill_city',
      'bill_state',
      'bill_zip',
      'bill_cntry',
      'business_title',
      'note_count',
      'dt_created',
      'dt_login',
      'credit'
    ];

    this.availableSortFields = [
      'id',
      'login',
      'pw_email',
      'ship_fname',
      'ship_lname',
      'ship_email',
      'ship_comp',
      'ship_phone',
      'ship_fax',
      'ship_addr1',
      'ship_addr2',
      'ship_city',
      'ship_state',
      'ship_zip',
      'ship_cntry',
      'ship_res',
      'bill_fname',
      'bill_lname',
      'bill_email',
      'bill_comp',
      'bill_phone',
      'bill_fax',
      'bill_addr1',
      'bill_addr2',
      'bill_city',
      'bill_state',
      'bill_zip',
      'bill_cntry',
      'business_title',
      'note_count',
      'dt_created',
      'dt_login',
      'credit'
    ];
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.CustomerListLoadQuery(this, data);
  }
}

/** 
 * Handles API Request Customer_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/customer_delete
 */
class CustomerDelete extends Request {
  /**
   * CustomerDelete Constructor.
   * @param {?Client} client
   * @param {?Customer} customer
   */
  constructor(client, customer = null) {
    super(client);
    this.function = 'Customer_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.customerId = null;
    this.customerLogin = null;
    this.editCustomer = null;

    if (util.isInstanceOf(customer, models.Customer)) {
      if (customer.getId()) {
        this.setCustomerId(customer.getId());
      } else if (customer.getLogin()) {
        this.setEditCustomer(customer.getLogin());
      }
    }
  }

  /**
   * Get Customer_ID.
   * @returns {number}
   */
  getCustomerId() {
    return this.customerId;
  }

  /**
   * Get Customer_Login.
   * @returns {string}
   */
  getCustomerLogin() {
    return this.customerLogin;
  }

  /**
   * Get Edit_Customer.
   * @returns {string}
   */
  getEditCustomer() {
    return this.editCustomer;
  }

  /**
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {CustomerDelete}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
    return this;
  }

  /**
   * Set Customer_Login.
   * @param {string} customerLogin
   * @returns {CustomerDelete}
   */
  setCustomerLogin(customerLogin) {
    this.customerLogin = customerLogin;
    return this;
  }

  /**
   * Set Edit_Customer.
   * @param {string} editCustomer
   * @returns {CustomerDelete}
   */
  setEditCustomer(editCustomer) {
    this.editCustomer = editCustomer;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.customerId)) {
      data['Customer_ID'] = this.customerId;
    } else if (!util.isNullOrUndefined(this.customerLogin)) {
      data['Customer_Login'] = this.customerLogin;
    } else if (!util.isNullOrUndefined(this.editCustomer)) {
      data['Edit_Customer'] = this.editCustomer;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.CustomerDelete(this, data);
  }
}

/** 
 * Handles API Request Customer_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/customer_insert
 */
class CustomerInsert extends Request {
  /**
   * CustomerInsert Constructor.
   * @param {?Client} client
   * @param {?Customer} customer
   */
  constructor(client, customer = null) {
    super(client);
    this.function = 'Customer_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.customerLogin = null;
    this.customerPasswordEmail = null;
    this.customerPassword = null;
    this.customerShipResidential = null;
    this.customerShipFirstName = null;
    this.customerShipLastName = null;
    this.customerShipEmail = null;
    this.customerShipCompany = null;
    this.customerShipPhone = null;
    this.customerShipFax = null;
    this.customerShipAddress1 = null;
    this.customerShipAddress2 = null;
    this.customerShipCity = null;
    this.customerShipState = null;
    this.customerShipZip = null;
    this.customerShipCountry = null;
    this.customerBillFirstName = null;
    this.customerBillLastName = null;
    this.customerBillEmail = null;
    this.customerBillCompany = null;
    this.customerBillPhone = null;
    this.customerBillFax = null;
    this.customerBillAddress1 = null;
    this.customerBillAddress2 = null;
    this.customerBillCity = null;
    this.customerBillState = null;
    this.customerBillZip = null;
    this.customerBillCountry = null;
    this.customerTaxExempt = null;
    this.customerBusinessAccount = null;
    this.customFieldValues = new models.CustomFieldValues();

    if (util.isInstanceOf(customer, models.Customer)) {
      this.setCustomerLogin(customer.getLogin());
      this.setCustomerPasswordEmail(customer.getPasswordEmail());
      this.setCustomerShipResidential(customer.getShippingResidential());
      this.setCustomerShipFirstName(customer.getShipFirstName());
      this.setCustomerShipLastName(customer.getShipLastName());
      this.setCustomerShipEmail(customer.getShipEmail());
      this.setCustomerShipCompany(customer.getShipCompany());
      this.setCustomerShipPhone(customer.getShipPhone());
      this.setCustomerShipFax(customer.getShipFax());
      this.setCustomerShipAddress1(customer.getShipAddress1());
      this.setCustomerShipAddress2(customer.getShipAddress2());
      this.setCustomerShipCity(customer.getShipCity());
      this.setCustomerShipState(customer.getShipState());
      this.setCustomerShipZip(customer.getShipZip());
      this.setCustomerShipCountry(customer.getShipCountry());
      this.setCustomerBillFirstName(customer.getBillFirstName());
      this.setCustomerBillLastName(customer.getBillLastName());
      this.setCustomerBillEmail(customer.getBillEmail());
      this.setCustomerBillCompany(customer.getBillCompany());
      this.setCustomerBillPhone(customer.getBillPhone());
      this.setCustomerBillFax(customer.getBillFax());
      this.setCustomerBillAddress1(customer.getBillAddress1());
      this.setCustomerBillAddress2(customer.getBillAddress2());
      this.setCustomerBillCity(customer.getBillCity());
      this.setCustomerBillState(customer.getBillState());
      this.setCustomerBillZip(customer.getBillZip());
      this.setCustomerBillCountry(customer.getBillCountry());
      this.setCustomerBusinessAccount(customer.getBusinessTitle());

      if (customer.getCustomFieldValues()) {
        this.setCustomFieldValues(customer.getCustomFieldValues());
      }
    }
  }

  /**
   * Get Customer_Login.
   * @returns {string}
   */
  getCustomerLogin() {
    return this.customerLogin;
  }

  /**
   * Get Customer_PasswordEmail.
   * @returns {string}
   */
  getCustomerPasswordEmail() {
    return this.customerPasswordEmail;
  }

  /**
   * Get Customer_Password.
   * @returns {string}
   */
  getCustomerPassword() {
    return this.customerPassword;
  }

  /**
   * Get Customer_ShipResidential.
   * @returns {boolean}
   */
  getCustomerShipResidential() {
    return this.customerShipResidential;
  }

  /**
   * Get Customer_ShipFirstName.
   * @returns {string}
   */
  getCustomerShipFirstName() {
    return this.customerShipFirstName;
  }

  /**
   * Get Customer_ShipLastName.
   * @returns {string}
   */
  getCustomerShipLastName() {
    return this.customerShipLastName;
  }

  /**
   * Get Customer_ShipEmail.
   * @returns {string}
   */
  getCustomerShipEmail() {
    return this.customerShipEmail;
  }

  /**
   * Get Customer_ShipCompany.
   * @returns {string}
   */
  getCustomerShipCompany() {
    return this.customerShipCompany;
  }

  /**
   * Get Customer_ShipPhone.
   * @returns {string}
   */
  getCustomerShipPhone() {
    return this.customerShipPhone;
  }

  /**
   * Get Customer_ShipFax.
   * @returns {string}
   */
  getCustomerShipFax() {
    return this.customerShipFax;
  }

  /**
   * Get Customer_ShipAddress1.
   * @returns {string}
   */
  getCustomerShipAddress1() {
    return this.customerShipAddress1;
  }

  /**
   * Get Customer_ShipAddress2.
   * @returns {string}
   */
  getCustomerShipAddress2() {
    return this.customerShipAddress2;
  }

  /**
   * Get Customer_ShipCity.
   * @returns {string}
   */
  getCustomerShipCity() {
    return this.customerShipCity;
  }

  /**
   * Get Customer_ShipState.
   * @returns {string}
   */
  getCustomerShipState() {
    return this.customerShipState;
  }

  /**
   * Get Customer_ShipZip.
   * @returns {string}
   */
  getCustomerShipZip() {
    return this.customerShipZip;
  }

  /**
   * Get Customer_ShipCountry.
   * @returns {string}
   */
  getCustomerShipCountry() {
    return this.customerShipCountry;
  }

  /**
   * Get Customer_BillFirstName.
   * @returns {string}
   */
  getCustomerBillFirstName() {
    return this.customerBillFirstName;
  }

  /**
   * Get Customer_BillLastName.
   * @returns {string}
   */
  getCustomerBillLastName() {
    return this.customerBillLastName;
  }

  /**
   * Get Customer_BillEmail.
   * @returns {string}
   */
  getCustomerBillEmail() {
    return this.customerBillEmail;
  }

  /**
   * Get Customer_BillCompany.
   * @returns {string}
   */
  getCustomerBillCompany() {
    return this.customerBillCompany;
  }

  /**
   * Get Customer_BillPhone.
   * @returns {string}
   */
  getCustomerBillPhone() {
    return this.customerBillPhone;
  }

  /**
   * Get Customer_BillFax.
   * @returns {string}
   */
  getCustomerBillFax() {
    return this.customerBillFax;
  }

  /**
   * Get Customer_BillAddress1.
   * @returns {string}
   */
  getCustomerBillAddress1() {
    return this.customerBillAddress1;
  }

  /**
   * Get Customer_BillAddress2.
   * @returns {string}
   */
  getCustomerBillAddress2() {
    return this.customerBillAddress2;
  }

  /**
   * Get Customer_BillCity.
   * @returns {string}
   */
  getCustomerBillCity() {
    return this.customerBillCity;
  }

  /**
   * Get Customer_BillState.
   * @returns {string}
   */
  getCustomerBillState() {
    return this.customerBillState;
  }

  /**
   * Get Customer_BillZip.
   * @returns {string}
   */
  getCustomerBillZip() {
    return this.customerBillZip;
  }

  /**
   * Get Customer_BillCountry.
   * @returns {string}
   */
  getCustomerBillCountry() {
    return this.customerBillCountry;
  }

  /**
   * Get Customer_Tax_Exempt.
   * @returns {boolean}
   */
  getCustomerTaxExempt() {
    return this.customerTaxExempt;
  }

  /**
   * Get Customer_BusinessAccount.
   * @returns {string}
   */
  getCustomerBusinessAccount() {
    return this.customerBusinessAccount;
  }

  /**
   * Get CustomField_Values.
   * @returns {?CustomFieldValues}
   */
  getCustomFieldValues() {
    return this.customFieldValues;
  }

  /**
   * Set Customer_Login.
   * @param {string} customerLogin
   * @returns {CustomerInsert}
   */
  setCustomerLogin(customerLogin) {
    this.customerLogin = customerLogin;
    return this;
  }

  /**
   * Set Customer_PasswordEmail.
   * @param {string} customerPasswordEmail
   * @returns {CustomerInsert}
   */
  setCustomerPasswordEmail(customerPasswordEmail) {
    this.customerPasswordEmail = customerPasswordEmail;
    return this;
  }

  /**
   * Set Customer_Password.
   * @param {string} customerPassword
   * @returns {CustomerInsert}
   */
  setCustomerPassword(customerPassword) {
    this.customerPassword = customerPassword;
    return this;
  }

  /**
   * Set Customer_ShipResidential.
   * @param {boolean} customerShipResidential
   * @returns {CustomerInsert}
   */
  setCustomerShipResidential(customerShipResidential) {
    this.customerShipResidential = customerShipResidential;
    return this;
  }

  /**
   * Set Customer_ShipFirstName.
   * @param {string} customerShipFirstName
   * @returns {CustomerInsert}
   */
  setCustomerShipFirstName(customerShipFirstName) {
    this.customerShipFirstName = customerShipFirstName;
    return this;
  }

  /**
   * Set Customer_ShipLastName.
   * @param {string} customerShipLastName
   * @returns {CustomerInsert}
   */
  setCustomerShipLastName(customerShipLastName) {
    this.customerShipLastName = customerShipLastName;
    return this;
  }

  /**
   * Set Customer_ShipEmail.
   * @param {string} customerShipEmail
   * @returns {CustomerInsert}
   */
  setCustomerShipEmail(customerShipEmail) {
    this.customerShipEmail = customerShipEmail;
    return this;
  }

  /**
   * Set Customer_ShipCompany.
   * @param {string} customerShipCompany
   * @returns {CustomerInsert}
   */
  setCustomerShipCompany(customerShipCompany) {
    this.customerShipCompany = customerShipCompany;
    return this;
  }

  /**
   * Set Customer_ShipPhone.
   * @param {string} customerShipPhone
   * @returns {CustomerInsert}
   */
  setCustomerShipPhone(customerShipPhone) {
    this.customerShipPhone = customerShipPhone;
    return this;
  }

  /**
   * Set Customer_ShipFax.
   * @param {string} customerShipFax
   * @returns {CustomerInsert}
   */
  setCustomerShipFax(customerShipFax) {
    this.customerShipFax = customerShipFax;
    return this;
  }

  /**
   * Set Customer_ShipAddress1.
   * @param {string} customerShipAddress1
   * @returns {CustomerInsert}
   */
  setCustomerShipAddress1(customerShipAddress1) {
    this.customerShipAddress1 = customerShipAddress1;
    return this;
  }

  /**
   * Set Customer_ShipAddress2.
   * @param {string} customerShipAddress2
   * @returns {CustomerInsert}
   */
  setCustomerShipAddress2(customerShipAddress2) {
    this.customerShipAddress2 = customerShipAddress2;
    return this;
  }

  /**
   * Set Customer_ShipCity.
   * @param {string} customerShipCity
   * @returns {CustomerInsert}
   */
  setCustomerShipCity(customerShipCity) {
    this.customerShipCity = customerShipCity;
    return this;
  }

  /**
   * Set Customer_ShipState.
   * @param {string} customerShipState
   * @returns {CustomerInsert}
   */
  setCustomerShipState(customerShipState) {
    this.customerShipState = customerShipState;
    return this;
  }

  /**
   * Set Customer_ShipZip.
   * @param {string} customerShipZip
   * @returns {CustomerInsert}
   */
  setCustomerShipZip(customerShipZip) {
    this.customerShipZip = customerShipZip;
    return this;
  }

  /**
   * Set Customer_ShipCountry.
   * @param {string} customerShipCountry
   * @returns {CustomerInsert}
   */
  setCustomerShipCountry(customerShipCountry) {
    this.customerShipCountry = customerShipCountry;
    return this;
  }

  /**
   * Set Customer_BillFirstName.
   * @param {string} customerBillFirstName
   * @returns {CustomerInsert}
   */
  setCustomerBillFirstName(customerBillFirstName) {
    this.customerBillFirstName = customerBillFirstName;
    return this;
  }

  /**
   * Set Customer_BillLastName.
   * @param {string} customerBillLastName
   * @returns {CustomerInsert}
   */
  setCustomerBillLastName(customerBillLastName) {
    this.customerBillLastName = customerBillLastName;
    return this;
  }

  /**
   * Set Customer_BillEmail.
   * @param {string} customerBillEmail
   * @returns {CustomerInsert}
   */
  setCustomerBillEmail(customerBillEmail) {
    this.customerBillEmail = customerBillEmail;
    return this;
  }

  /**
   * Set Customer_BillCompany.
   * @param {string} customerBillCompany
   * @returns {CustomerInsert}
   */
  setCustomerBillCompany(customerBillCompany) {
    this.customerBillCompany = customerBillCompany;
    return this;
  }

  /**
   * Set Customer_BillPhone.
   * @param {string} customerBillPhone
   * @returns {CustomerInsert}
   */
  setCustomerBillPhone(customerBillPhone) {
    this.customerBillPhone = customerBillPhone;
    return this;
  }

  /**
   * Set Customer_BillFax.
   * @param {string} customerBillFax
   * @returns {CustomerInsert}
   */
  setCustomerBillFax(customerBillFax) {
    this.customerBillFax = customerBillFax;
    return this;
  }

  /**
   * Set Customer_BillAddress1.
   * @param {string} customerBillAddress1
   * @returns {CustomerInsert}
   */
  setCustomerBillAddress1(customerBillAddress1) {
    this.customerBillAddress1 = customerBillAddress1;
    return this;
  }

  /**
   * Set Customer_BillAddress2.
   * @param {string} customerBillAddress2
   * @returns {CustomerInsert}
   */
  setCustomerBillAddress2(customerBillAddress2) {
    this.customerBillAddress2 = customerBillAddress2;
    return this;
  }

  /**
   * Set Customer_BillCity.
   * @param {string} customerBillCity
   * @returns {CustomerInsert}
   */
  setCustomerBillCity(customerBillCity) {
    this.customerBillCity = customerBillCity;
    return this;
  }

  /**
   * Set Customer_BillState.
   * @param {string} customerBillState
   * @returns {CustomerInsert}
   */
  setCustomerBillState(customerBillState) {
    this.customerBillState = customerBillState;
    return this;
  }

  /**
   * Set Customer_BillZip.
   * @param {string} customerBillZip
   * @returns {CustomerInsert}
   */
  setCustomerBillZip(customerBillZip) {
    this.customerBillZip = customerBillZip;
    return this;
  }

  /**
   * Set Customer_BillCountry.
   * @param {string} customerBillCountry
   * @returns {CustomerInsert}
   */
  setCustomerBillCountry(customerBillCountry) {
    this.customerBillCountry = customerBillCountry;
    return this;
  }

  /**
   * Set Customer_Tax_Exempt.
   * @param {boolean} customerTaxExempt
   * @returns {CustomerInsert}
   */
  setCustomerTaxExempt(customerTaxExempt) {
    this.customerTaxExempt = customerTaxExempt;
    return this;
  }

  /**
   * Set Customer_BusinessAccount.
   * @param {string} customerBusinessAccount
   * @returns {CustomerInsert}
   */
  setCustomerBusinessAccount(customerBusinessAccount) {
    this.customerBusinessAccount = customerBusinessAccount;
    return this;
  }

  /**
   * Set CustomField_Values.
   * @param {?CustomFieldValues} customFieldValues
   * @throws {Error}
   * @returns {CustomerInsert}
   */
  setCustomFieldValues(customFieldValues) {
    if (!util.isInstanceOf(customFieldValues, models.CustomFieldValues) && util.isObject(customFieldValues)) {
      customFieldValues = new models.CustomFieldValues(customFieldValues);
    } else if (!util.isInstanceOf(customFieldValues, models.CustomFieldValues)) {
      throw new Error(util.format('Expected instance of CustomFieldValues or an Object but got %s',
        typeof customFieldValues));
    }

    this.customFieldValues = customFieldValues;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['Customer_Login'] = this.customerLogin;

    data['Customer_PasswordEmail'] = this.customerPasswordEmail;

    data['Customer_Password'] = this.customerPassword;

    if (!util.isNullOrUndefined(this.customerShipResidential)) {
      data['Customer_ShipResidential'] = this.customerShipResidential;
    }

    if (!util.isNullOrUndefined(this.customerShipFirstName)) {
      data['Customer_ShipFirstName'] = this.customerShipFirstName;
    }

    if (!util.isNullOrUndefined(this.customerShipLastName)) {
      data['Customer_ShipLastName'] = this.customerShipLastName;
    }

    if (!util.isNullOrUndefined(this.customerShipEmail)) {
      data['Customer_ShipEmail'] = this.customerShipEmail;
    }

    if (!util.isNullOrUndefined(this.customerShipCompany)) {
      data['Customer_ShipCompany'] = this.customerShipCompany;
    }

    if (!util.isNullOrUndefined(this.customerShipPhone)) {
      data['Customer_ShipPhone'] = this.customerShipPhone;
    }

    if (!util.isNullOrUndefined(this.customerShipFax)) {
      data['Customer_ShipFax'] = this.customerShipFax;
    }

    if (!util.isNullOrUndefined(this.customerShipAddress1)) {
      data['Customer_ShipAddress1'] = this.customerShipAddress1;
    }

    if (!util.isNullOrUndefined(this.customerShipAddress2)) {
      data['Customer_ShipAddress2'] = this.customerShipAddress2;
    }

    if (!util.isNullOrUndefined(this.customerShipCity)) {
      data['Customer_ShipCity'] = this.customerShipCity;
    }

    if (!util.isNullOrUndefined(this.customerShipState)) {
      data['Customer_ShipState'] = this.customerShipState;
    }

    if (!util.isNullOrUndefined(this.customerShipZip)) {
      data['Customer_ShipZip'] = this.customerShipZip;
    }

    if (!util.isNullOrUndefined(this.customerShipCountry)) {
      data['Customer_ShipCountry'] = this.customerShipCountry;
    }

    if (!util.isNullOrUndefined(this.customerBillFirstName)) {
      data['Customer_BillFirstName'] = this.customerBillFirstName;
    }

    if (!util.isNullOrUndefined(this.customerBillLastName)) {
      data['Customer_BillLastName'] = this.customerBillLastName;
    }

    if (!util.isNullOrUndefined(this.customerBillEmail)) {
      data['Customer_BillEmail'] = this.customerBillEmail;
    }

    if (!util.isNullOrUndefined(this.customerBillCompany)) {
      data['Customer_BillCompany'] = this.customerBillCompany;
    }

    if (!util.isNullOrUndefined(this.customerBillPhone)) {
      data['Customer_BillPhone'] = this.customerBillPhone;
    }

    if (!util.isNullOrUndefined(this.customerBillFax)) {
      data['Customer_BillFax'] = this.customerBillFax;
    }

    if (!util.isNullOrUndefined(this.customerBillAddress1)) {
      data['Customer_BillAddress1'] = this.customerBillAddress1;
    }

    if (!util.isNullOrUndefined(this.customerBillAddress2)) {
      data['Customer_BillAddress2'] = this.customerBillAddress2;
    }

    if (!util.isNullOrUndefined(this.customerBillCity)) {
      data['Customer_BillCity'] = this.customerBillCity;
    }

    if (!util.isNullOrUndefined(this.customerBillState)) {
      data['Customer_BillState'] = this.customerBillState;
    }

    if (!util.isNullOrUndefined(this.customerBillZip)) {
      data['Customer_BillZip'] = this.customerBillZip;
    }

    if (!util.isNullOrUndefined(this.customerBillCountry)) {
      data['Customer_BillCountry'] = this.customerBillCountry;
    }

    if (!util.isNullOrUndefined(this.customerTaxExempt)) {
      data['Customer_Tax_Exempt'] = this.customerTaxExempt;
    }

    if (!util.isNullOrUndefined(this.customerBusinessAccount)) {
      data['Customer_BusinessAccount'] = this.customerBusinessAccount;
    }

    if (this.customFieldValues && util.isObject(this.customFieldValues)) {
      data['CustomField_Values'] = this.customFieldValues.toObject();
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.CustomerInsert(this, data);
  }
}

/** 
 * Handles API Request Customer_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/customer_update
 */
class CustomerUpdate extends Request {
  /**
   * CustomerUpdate Constructor.
   * @param {?Client} client
   * @param {?Customer} customer
   */
  constructor(client, customer = null) {
    super(client);
    this.function = 'Customer_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.customerId = null;
    this.editCustomer = null;
    this.customerLogin = null;
    this.customerPasswordEmail = null;
    this.customerPassword = null;
    this.customerShipResidential = null;
    this.customerShipFirstName = null;
    this.customerShipLastName = null;
    this.customerShipEmail = null;
    this.customerShipCompany = null;
    this.customerShipPhone = null;
    this.customerShipFax = null;
    this.customerShipAddress1 = null;
    this.customerShipAddress2 = null;
    this.customerShipCity = null;
    this.customerShipState = null;
    this.customerShipZip = null;
    this.customerShipCountry = null;
    this.customerBillFirstName = null;
    this.customerBillLastName = null;
    this.customerBillEmail = null;
    this.customerBillCompany = null;
    this.customerBillPhone = null;
    this.customerBillFax = null;
    this.customerBillAddress1 = null;
    this.customerBillAddress2 = null;
    this.customerBillCity = null;
    this.customerBillState = null;
    this.customerBillZip = null;
    this.customerBillCountry = null;
    this.customerTaxExempt = null;
    this.customerBusinessAccount = null;
    this.customFieldValues = new models.CustomFieldValues();

    if (util.isInstanceOf(customer, models.Customer)) {
      if (customer.getId()) {
        this.setCustomerId(customer.getId());
      } else if (customer.getLogin()) {
        this.setEditCustomer(customer.getLogin());
      }

      this.setCustomerLogin(customer.getLogin());
      this.setCustomerPasswordEmail(customer.getPasswordEmail());
      this.setCustomerShipResidential(customer.getShippingResidential());
      this.setCustomerShipFirstName(customer.getShipFirstName());
      this.setCustomerShipLastName(customer.getShipLastName());
      this.setCustomerShipEmail(customer.getShipEmail());
      this.setCustomerShipCompany(customer.getShipCompany());
      this.setCustomerShipPhone(customer.getShipPhone());
      this.setCustomerShipFax(customer.getShipFax());
      this.setCustomerShipAddress1(customer.getShipAddress1());
      this.setCustomerShipAddress2(customer.getShipAddress2());
      this.setCustomerShipCity(customer.getShipCity());
      this.setCustomerShipState(customer.getShipState());
      this.setCustomerShipZip(customer.getShipZip());
      this.setCustomerShipCountry(customer.getShipCountry());
      this.setCustomerBillFirstName(customer.getBillFirstName());
      this.setCustomerBillLastName(customer.getBillLastName());
      this.setCustomerBillEmail(customer.getBillEmail());
      this.setCustomerBillCompany(customer.getBillCompany());
      this.setCustomerBillPhone(customer.getBillPhone());
      this.setCustomerBillFax(customer.getBillFax());
      this.setCustomerBillAddress1(customer.getBillAddress1());
      this.setCustomerBillAddress2(customer.getBillAddress2());
      this.setCustomerBillCity(customer.getBillCity());
      this.setCustomerBillState(customer.getBillState());
      this.setCustomerBillZip(customer.getBillZip());
      this.setCustomerBillCountry(customer.getBillCountry());
      this.setCustomerBusinessAccount(customer.getBusinessTitle());

      if (customer.getCustomFieldValues()) {
        this.setCustomFieldValues(customer.getCustomFieldValues());
      }
    }
  }

  /**
   * Get Customer_ID.
   * @returns {number}
   */
  getCustomerId() {
    return this.customerId;
  }

  /**
   * Get Edit_Customer.
   * @returns {string}
   */
  getEditCustomer() {
    return this.editCustomer;
  }

  /**
   * Get Customer_Login.
   * @returns {string}
   */
  getCustomerLogin() {
    return this.customerLogin;
  }

  /**
   * Get Customer_PasswordEmail.
   * @returns {string}
   */
  getCustomerPasswordEmail() {
    return this.customerPasswordEmail;
  }

  /**
   * Get Customer_Password.
   * @returns {string}
   */
  getCustomerPassword() {
    return this.customerPassword;
  }

  /**
   * Get Customer_ShipResidential.
   * @returns {boolean}
   */
  getCustomerShipResidential() {
    return this.customerShipResidential;
  }

  /**
   * Get Customer_ShipFirstName.
   * @returns {string}
   */
  getCustomerShipFirstName() {
    return this.customerShipFirstName;
  }

  /**
   * Get Customer_ShipLastName.
   * @returns {string}
   */
  getCustomerShipLastName() {
    return this.customerShipLastName;
  }

  /**
   * Get Customer_ShipEmail.
   * @returns {string}
   */
  getCustomerShipEmail() {
    return this.customerShipEmail;
  }

  /**
   * Get Customer_ShipCompany.
   * @returns {string}
   */
  getCustomerShipCompany() {
    return this.customerShipCompany;
  }

  /**
   * Get Customer_ShipPhone.
   * @returns {string}
   */
  getCustomerShipPhone() {
    return this.customerShipPhone;
  }

  /**
   * Get Customer_ShipFax.
   * @returns {string}
   */
  getCustomerShipFax() {
    return this.customerShipFax;
  }

  /**
   * Get Customer_ShipAddress1.
   * @returns {string}
   */
  getCustomerShipAddress1() {
    return this.customerShipAddress1;
  }

  /**
   * Get Customer_ShipAddress2.
   * @returns {string}
   */
  getCustomerShipAddress2() {
    return this.customerShipAddress2;
  }

  /**
   * Get Customer_ShipCity.
   * @returns {string}
   */
  getCustomerShipCity() {
    return this.customerShipCity;
  }

  /**
   * Get Customer_ShipState.
   * @returns {string}
   */
  getCustomerShipState() {
    return this.customerShipState;
  }

  /**
   * Get Customer_ShipZip.
   * @returns {string}
   */
  getCustomerShipZip() {
    return this.customerShipZip;
  }

  /**
   * Get Customer_ShipCountry.
   * @returns {string}
   */
  getCustomerShipCountry() {
    return this.customerShipCountry;
  }

  /**
   * Get Customer_BillFirstName.
   * @returns {string}
   */
  getCustomerBillFirstName() {
    return this.customerBillFirstName;
  }

  /**
   * Get Customer_BillLastName.
   * @returns {string}
   */
  getCustomerBillLastName() {
    return this.customerBillLastName;
  }

  /**
   * Get Customer_BillEmail.
   * @returns {string}
   */
  getCustomerBillEmail() {
    return this.customerBillEmail;
  }

  /**
   * Get Customer_BillCompany.
   * @returns {string}
   */
  getCustomerBillCompany() {
    return this.customerBillCompany;
  }

  /**
   * Get Customer_BillPhone.
   * @returns {string}
   */
  getCustomerBillPhone() {
    return this.customerBillPhone;
  }

  /**
   * Get Customer_BillFax.
   * @returns {string}
   */
  getCustomerBillFax() {
    return this.customerBillFax;
  }

  /**
   * Get Customer_BillAddress1.
   * @returns {string}
   */
  getCustomerBillAddress1() {
    return this.customerBillAddress1;
  }

  /**
   * Get Customer_BillAddress2.
   * @returns {string}
   */
  getCustomerBillAddress2() {
    return this.customerBillAddress2;
  }

  /**
   * Get Customer_BillCity.
   * @returns {string}
   */
  getCustomerBillCity() {
    return this.customerBillCity;
  }

  /**
   * Get Customer_BillState.
   * @returns {string}
   */
  getCustomerBillState() {
    return this.customerBillState;
  }

  /**
   * Get Customer_BillZip.
   * @returns {string}
   */
  getCustomerBillZip() {
    return this.customerBillZip;
  }

  /**
   * Get Customer_BillCountry.
   * @returns {string}
   */
  getCustomerBillCountry() {
    return this.customerBillCountry;
  }

  /**
   * Get Customer_Tax_Exempt.
   * @returns {string}
   */
  getCustomerTaxExempt() {
    return this.customerTaxExempt;
  }

  /**
   * Get Customer_BusinessAccount.
   * @returns {string}
   */
  getCustomerBusinessAccount() {
    return this.customerBusinessAccount;
  }

  /**
   * Get CustomField_Values.
   * @returns {?CustomFieldValues}
   */
  getCustomFieldValues() {
    return this.customFieldValues;
  }

  /**
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {CustomerUpdate}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
    return this;
  }

  /**
   * Set Edit_Customer.
   * @param {string} editCustomer
   * @returns {CustomerUpdate}
   */
  setEditCustomer(editCustomer) {
    this.editCustomer = editCustomer;
    return this;
  }

  /**
   * Set Customer_Login.
   * @param {string} customerLogin
   * @returns {CustomerUpdate}
   */
  setCustomerLogin(customerLogin) {
    this.customerLogin = customerLogin;
    return this;
  }

  /**
   * Set Customer_PasswordEmail.
   * @param {string} customerPasswordEmail
   * @returns {CustomerUpdate}
   */
  setCustomerPasswordEmail(customerPasswordEmail) {
    this.customerPasswordEmail = customerPasswordEmail;
    return this;
  }

  /**
   * Set Customer_Password.
   * @param {string} customerPassword
   * @returns {CustomerUpdate}
   */
  setCustomerPassword(customerPassword) {
    this.customerPassword = customerPassword;
    return this;
  }

  /**
   * Set Customer_ShipResidential.
   * @param {boolean} customerShipResidential
   * @returns {CustomerUpdate}
   */
  setCustomerShipResidential(customerShipResidential) {
    this.customerShipResidential = customerShipResidential;
    return this;
  }

  /**
   * Set Customer_ShipFirstName.
   * @param {string} customerShipFirstName
   * @returns {CustomerUpdate}
   */
  setCustomerShipFirstName(customerShipFirstName) {
    this.customerShipFirstName = customerShipFirstName;
    return this;
  }

  /**
   * Set Customer_ShipLastName.
   * @param {string} customerShipLastName
   * @returns {CustomerUpdate}
   */
  setCustomerShipLastName(customerShipLastName) {
    this.customerShipLastName = customerShipLastName;
    return this;
  }

  /**
   * Set Customer_ShipEmail.
   * @param {string} customerShipEmail
   * @returns {CustomerUpdate}
   */
  setCustomerShipEmail(customerShipEmail) {
    this.customerShipEmail = customerShipEmail;
    return this;
  }

  /**
   * Set Customer_ShipCompany.
   * @param {string} customerShipCompany
   * @returns {CustomerUpdate}
   */
  setCustomerShipCompany(customerShipCompany) {
    this.customerShipCompany = customerShipCompany;
    return this;
  }

  /**
   * Set Customer_ShipPhone.
   * @param {string} customerShipPhone
   * @returns {CustomerUpdate}
   */
  setCustomerShipPhone(customerShipPhone) {
    this.customerShipPhone = customerShipPhone;
    return this;
  }

  /**
   * Set Customer_ShipFax.
   * @param {string} customerShipFax
   * @returns {CustomerUpdate}
   */
  setCustomerShipFax(customerShipFax) {
    this.customerShipFax = customerShipFax;
    return this;
  }

  /**
   * Set Customer_ShipAddress1.
   * @param {string} customerShipAddress1
   * @returns {CustomerUpdate}
   */
  setCustomerShipAddress1(customerShipAddress1) {
    this.customerShipAddress1 = customerShipAddress1;
    return this;
  }

  /**
   * Set Customer_ShipAddress2.
   * @param {string} customerShipAddress2
   * @returns {CustomerUpdate}
   */
  setCustomerShipAddress2(customerShipAddress2) {
    this.customerShipAddress2 = customerShipAddress2;
    return this;
  }

  /**
   * Set Customer_ShipCity.
   * @param {string} customerShipCity
   * @returns {CustomerUpdate}
   */
  setCustomerShipCity(customerShipCity) {
    this.customerShipCity = customerShipCity;
    return this;
  }

  /**
   * Set Customer_ShipState.
   * @param {string} customerShipState
   * @returns {CustomerUpdate}
   */
  setCustomerShipState(customerShipState) {
    this.customerShipState = customerShipState;
    return this;
  }

  /**
   * Set Customer_ShipZip.
   * @param {string} customerShipZip
   * @returns {CustomerUpdate}
   */
  setCustomerShipZip(customerShipZip) {
    this.customerShipZip = customerShipZip;
    return this;
  }

  /**
   * Set Customer_ShipCountry.
   * @param {string} customerShipCountry
   * @returns {CustomerUpdate}
   */
  setCustomerShipCountry(customerShipCountry) {
    this.customerShipCountry = customerShipCountry;
    return this;
  }

  /**
   * Set Customer_BillFirstName.
   * @param {string} customerBillFirstName
   * @returns {CustomerUpdate}
   */
  setCustomerBillFirstName(customerBillFirstName) {
    this.customerBillFirstName = customerBillFirstName;
    return this;
  }

  /**
   * Set Customer_BillLastName.
   * @param {string} customerBillLastName
   * @returns {CustomerUpdate}
   */
  setCustomerBillLastName(customerBillLastName) {
    this.customerBillLastName = customerBillLastName;
    return this;
  }

  /**
   * Set Customer_BillEmail.
   * @param {string} customerBillEmail
   * @returns {CustomerUpdate}
   */
  setCustomerBillEmail(customerBillEmail) {
    this.customerBillEmail = customerBillEmail;
    return this;
  }

  /**
   * Set Customer_BillCompany.
   * @param {string} customerBillCompany
   * @returns {CustomerUpdate}
   */
  setCustomerBillCompany(customerBillCompany) {
    this.customerBillCompany = customerBillCompany;
    return this;
  }

  /**
   * Set Customer_BillPhone.
   * @param {string} customerBillPhone
   * @returns {CustomerUpdate}
   */
  setCustomerBillPhone(customerBillPhone) {
    this.customerBillPhone = customerBillPhone;
    return this;
  }

  /**
   * Set Customer_BillFax.
   * @param {string} customerBillFax
   * @returns {CustomerUpdate}
   */
  setCustomerBillFax(customerBillFax) {
    this.customerBillFax = customerBillFax;
    return this;
  }

  /**
   * Set Customer_BillAddress1.
   * @param {string} customerBillAddress1
   * @returns {CustomerUpdate}
   */
  setCustomerBillAddress1(customerBillAddress1) {
    this.customerBillAddress1 = customerBillAddress1;
    return this;
  }

  /**
   * Set Customer_BillAddress2.
   * @param {string} customerBillAddress2
   * @returns {CustomerUpdate}
   */
  setCustomerBillAddress2(customerBillAddress2) {
    this.customerBillAddress2 = customerBillAddress2;
    return this;
  }

  /**
   * Set Customer_BillCity.
   * @param {string} customerBillCity
   * @returns {CustomerUpdate}
   */
  setCustomerBillCity(customerBillCity) {
    this.customerBillCity = customerBillCity;
    return this;
  }

  /**
   * Set Customer_BillState.
   * @param {string} customerBillState
   * @returns {CustomerUpdate}
   */
  setCustomerBillState(customerBillState) {
    this.customerBillState = customerBillState;
    return this;
  }

  /**
   * Set Customer_BillZip.
   * @param {string} customerBillZip
   * @returns {CustomerUpdate}
   */
  setCustomerBillZip(customerBillZip) {
    this.customerBillZip = customerBillZip;
    return this;
  }

  /**
   * Set Customer_BillCountry.
   * @param {string} customerBillCountry
   * @returns {CustomerUpdate}
   */
  setCustomerBillCountry(customerBillCountry) {
    this.customerBillCountry = customerBillCountry;
    return this;
  }

  /**
   * Set Customer_Tax_Exempt.
   * @param {string} customerTaxExempt
   * @returns {CustomerUpdate}
   */
  setCustomerTaxExempt(customerTaxExempt) {
    this.customerTaxExempt = customerTaxExempt;
    return this;
  }

  /**
   * Set Customer_BusinessAccount.
   * @param {string} customerBusinessAccount
   * @returns {CustomerUpdate}
   */
  setCustomerBusinessAccount(customerBusinessAccount) {
    this.customerBusinessAccount = customerBusinessAccount;
    return this;
  }

  /**
   * Set CustomField_Values.
   * @param {?CustomFieldValues} customFieldValues
   * @throws {Error}
   * @returns {CustomerUpdate}
   */
  setCustomFieldValues(customFieldValues) {
    if (!util.isInstanceOf(customFieldValues, models.CustomFieldValues) && util.isObject(customFieldValues)) {
      customFieldValues = new models.CustomFieldValues(customFieldValues);
    } else if (!util.isInstanceOf(customFieldValues, models.CustomFieldValues)) {
      throw new Error(util.format('Expected instance of CustomFieldValues or an Object but got %s',
        typeof customFieldValues));
    }

    this.customFieldValues = customFieldValues;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.customerId)) {
      data['Customer_ID'] = this.customerId;
    } else if (!util.isNullOrUndefined(this.editCustomer)) {
      data['Edit_Customer'] = this.editCustomer;
    }

    if (!util.isNullOrUndefined(this.customerLogin)) {
      data['Customer_Login'] = this.customerLogin;
    }

    if (!util.isNullOrUndefined(this.customerPasswordEmail)) {
      data['Customer_PasswordEmail'] = this.customerPasswordEmail;
    }

    if (!util.isNullOrUndefined(this.customerPassword)) {
      data['Customer_Password'] = this.customerPassword;
    }

    if (!util.isNullOrUndefined(this.customerShipResidential)) {
      data['Customer_ShipResidential'] = this.customerShipResidential;
    }

    if (!util.isNullOrUndefined(this.customerShipFirstName)) {
      data['Customer_ShipFirstName'] = this.customerShipFirstName;
    }

    if (!util.isNullOrUndefined(this.customerShipLastName)) {
      data['Customer_ShipLastName'] = this.customerShipLastName;
    }

    if (!util.isNullOrUndefined(this.customerShipEmail)) {
      data['Customer_ShipEmail'] = this.customerShipEmail;
    }

    if (!util.isNullOrUndefined(this.customerShipCompany)) {
      data['Customer_ShipCompany'] = this.customerShipCompany;
    }

    if (!util.isNullOrUndefined(this.customerShipPhone)) {
      data['Customer_ShipPhone'] = this.customerShipPhone;
    }

    if (!util.isNullOrUndefined(this.customerShipFax)) {
      data['Customer_ShipFax'] = this.customerShipFax;
    }

    if (!util.isNullOrUndefined(this.customerShipAddress1)) {
      data['Customer_ShipAddress1'] = this.customerShipAddress1;
    }

    if (!util.isNullOrUndefined(this.customerShipAddress2)) {
      data['Customer_ShipAddress2'] = this.customerShipAddress2;
    }

    if (!util.isNullOrUndefined(this.customerShipCity)) {
      data['Customer_ShipCity'] = this.customerShipCity;
    }

    if (!util.isNullOrUndefined(this.customerShipState)) {
      data['Customer_ShipState'] = this.customerShipState;
    }

    if (!util.isNullOrUndefined(this.customerShipZip)) {
      data['Customer_ShipZip'] = this.customerShipZip;
    }

    if (!util.isNullOrUndefined(this.customerShipCountry)) {
      data['Customer_ShipCountry'] = this.customerShipCountry;
    }

    if (!util.isNullOrUndefined(this.customerBillFirstName)) {
      data['Customer_BillFirstName'] = this.customerBillFirstName;
    }

    if (!util.isNullOrUndefined(this.customerBillLastName)) {
      data['Customer_BillLastName'] = this.customerBillLastName;
    }

    if (!util.isNullOrUndefined(this.customerBillEmail)) {
      data['Customer_BillEmail'] = this.customerBillEmail;
    }

    if (!util.isNullOrUndefined(this.customerBillCompany)) {
      data['Customer_BillCompany'] = this.customerBillCompany;
    }

    if (!util.isNullOrUndefined(this.customerBillPhone)) {
      data['Customer_BillPhone'] = this.customerBillPhone;
    }

    if (!util.isNullOrUndefined(this.customerBillFax)) {
      data['Customer_BillFax'] = this.customerBillFax;
    }

    if (!util.isNullOrUndefined(this.customerBillAddress1)) {
      data['Customer_BillAddress1'] = this.customerBillAddress1;
    }

    if (!util.isNullOrUndefined(this.customerBillAddress2)) {
      data['Customer_BillAddress2'] = this.customerBillAddress2;
    }

    if (!util.isNullOrUndefined(this.customerBillCity)) {
      data['Customer_BillCity'] = this.customerBillCity;
    }

    if (!util.isNullOrUndefined(this.customerBillState)) {
      data['Customer_BillState'] = this.customerBillState;
    }

    if (!util.isNullOrUndefined(this.customerBillZip)) {
      data['Customer_BillZip'] = this.customerBillZip;
    }

    if (!util.isNullOrUndefined(this.customerBillCountry)) {
      data['Customer_BillCountry'] = this.customerBillCountry;
    }

    if (!util.isNullOrUndefined(this.customerTaxExempt)) {
      data['Customer_Tax_Exempt'] = this.customerTaxExempt;
    }

    if (!util.isNullOrUndefined(this.customerBusinessAccount)) {
      data['Customer_BusinessAccount'] = this.customerBusinessAccount;
    }

    if (this.customFieldValues && util.isObject(this.customFieldValues)) {
      data['CustomField_Values'] = this.customFieldValues.toObject();
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.CustomerUpdate(this, data);
  }
}

/** 
 * Handles API Request CustomerPaymentCard_Register. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/customerpaymentcard_register
 */
class CustomerPaymentCardRegister extends Request {
  /**
   * CustomerPaymentCardRegister Constructor.
   * @param {?Client} client
   * @param {?Customer} customer
   */
  constructor(client, customer = null) {
    super(client);
    this.function = 'CustomerPaymentCard_Register';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.customerId = null;
    this.editCustomer = null;
    this.customerLogin = null;
    this.firstName = null;
    this.lastName = null;
    this.cardType = null;
    this.cardNumber = null;
    this.expirationMonth = null;
    this.expirationYear = null;
    this.address1 = null;
    this.address2 = null;
    this.city = null;
    this.state = null;
    this.zip = null;
    this.country = null;

    if (util.isInstanceOf(customer, models.Customer)) {
      if (customer.getId()) {
        this.setCustomerId(customer.getId());
      } else if (customer.getLogin()) {
        this.setEditCustomer(customer.getLogin());
      }
    }
  }

  /**
   * Get Customer_ID.
   * @returns {number}
   */
  getCustomerId() {
    return this.customerId;
  }

  /**
   * Get Edit_Customer.
   * @returns {string}
   */
  getEditCustomer() {
    return this.editCustomer;
  }

  /**
   * Get Customer_Login.
   * @returns {string}
   */
  getCustomerLogin() {
    return this.customerLogin;
  }

  /**
   * Get FirstName.
   * @returns {string}
   */
  getFirstName() {
    return this.firstName;
  }

  /**
   * Get LastName.
   * @returns {string}
   */
  getLastName() {
    return this.lastName;
  }

  /**
   * Get CardType.
   * @returns {string}
   */
  getCardType() {
    return this.cardType;
  }

  /**
   * Get CardNumber.
   * @returns {string}
   */
  getCardNumber() {
    return this.cardNumber;
  }

  /**
   * Get ExpirationMonth.
   * @returns {number}
   */
  getExpirationMonth() {
    return this.expirationMonth;
  }

  /**
   * Get ExpirationYear.
   * @returns {number}
   */
  getExpirationYear() {
    return this.expirationYear;
  }

  /**
   * Get Address1.
   * @returns {string}
   */
  getAddress1() {
    return this.address1;
  }

  /**
   * Get Address2.
   * @returns {string}
   */
  getAddress2() {
    return this.address2;
  }

  /**
   * Get City.
   * @returns {string}
   */
  getCity() {
    return this.city;
  }

  /**
   * Get State.
   * @returns {string}
   */
  getState() {
    return this.state;
  }

  /**
   * Get Zip.
   * @returns {string}
   */
  getZip() {
    return this.zip;
  }

  /**
   * Get Country.
   * @returns {string}
   */
  getCountry() {
    return this.country;
  }

  /**
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {CustomerPaymentCardRegister}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
    return this;
  }

  /**
   * Set Edit_Customer.
   * @param {string} editCustomer
   * @returns {CustomerPaymentCardRegister}
   */
  setEditCustomer(editCustomer) {
    this.editCustomer = editCustomer;
    return this;
  }

  /**
   * Set Customer_Login.
   * @param {string} customerLogin
   * @returns {CustomerPaymentCardRegister}
   */
  setCustomerLogin(customerLogin) {
    this.customerLogin = customerLogin;
    return this;
  }

  /**
   * Set FirstName.
   * @param {string} firstName
   * @returns {CustomerPaymentCardRegister}
   */
  setFirstName(firstName) {
    this.firstName = firstName;
    return this;
  }

  /**
   * Set LastName.
   * @param {string} lastName
   * @returns {CustomerPaymentCardRegister}
   */
  setLastName(lastName) {
    this.lastName = lastName;
    return this;
  }

  /**
   * Set CardType.
   * @param {string} cardType
   * @returns {CustomerPaymentCardRegister}
   */
  setCardType(cardType) {
    this.cardType = cardType;
    return this;
  }

  /**
   * Set CardNumber.
   * @param {string} cardNumber
   * @returns {CustomerPaymentCardRegister}
   */
  setCardNumber(cardNumber) {
    this.cardNumber = cardNumber;
    return this;
  }

  /**
   * Set ExpirationMonth.
   * @param {number} expirationMonth
   * @returns {CustomerPaymentCardRegister}
   */
  setExpirationMonth(expirationMonth) {
    this.expirationMonth = expirationMonth;
    return this;
  }

  /**
   * Set ExpirationYear.
   * @param {number} expirationYear
   * @returns {CustomerPaymentCardRegister}
   */
  setExpirationYear(expirationYear) {
    this.expirationYear = expirationYear;
    return this;
  }

  /**
   * Set Address1.
   * @param {string} address1
   * @returns {CustomerPaymentCardRegister}
   */
  setAddress1(address1) {
    this.address1 = address1;
    return this;
  }

  /**
   * Set Address2.
   * @param {string} address2
   * @returns {CustomerPaymentCardRegister}
   */
  setAddress2(address2) {
    this.address2 = address2;
    return this;
  }

  /**
   * Set City.
   * @param {string} city
   * @returns {CustomerPaymentCardRegister}
   */
  setCity(city) {
    this.city = city;
    return this;
  }

  /**
   * Set State.
   * @param {string} state
   * @returns {CustomerPaymentCardRegister}
   */
  setState(state) {
    this.state = state;
    return this;
  }

  /**
   * Set Zip.
   * @param {string} zip
   * @returns {CustomerPaymentCardRegister}
   */
  setZip(zip) {
    this.zip = zip;
    return this;
  }

  /**
   * Set Country.
   * @param {string} country
   * @returns {CustomerPaymentCardRegister}
   */
  setCountry(country) {
    this.country = country;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.customerId)) {
      data['Customer_ID'] = this.customerId;
    } else if (!util.isNullOrUndefined(this.editCustomer)) {
      data['Edit_Customer'] = this.editCustomer;
    } else if (!util.isNullOrUndefined(this.customerLogin)) {
      data['Customer_Login'] = this.customerLogin;
    }

    if (!util.isNullOrUndefined(this.firstName)) {
      data['FirstName'] = this.firstName;
    }

    if (!util.isNullOrUndefined(this.lastName)) {
      data['LastName'] = this.lastName;
    }

    if (!util.isNullOrUndefined(this.cardType)) {
      data['CardType'] = this.cardType;
    }

    if (!util.isNullOrUndefined(this.cardNumber)) {
      data['CardNumber'] = this.cardNumber;
    }

    if (!util.isNullOrUndefined(this.expirationMonth)) {
      data['ExpirationMonth'] = this.expirationMonth;
    }

    if (!util.isNullOrUndefined(this.expirationYear)) {
      data['ExpirationYear'] = this.expirationYear;
    }

    if (!util.isNullOrUndefined(this.address1)) {
      data['Address1'] = this.address1;
    }

    if (!util.isNullOrUndefined(this.address2)) {
      data['Address2'] = this.address2;
    }

    if (!util.isNullOrUndefined(this.city)) {
      data['City'] = this.city;
    }

    if (!util.isNullOrUndefined(this.state)) {
      data['State'] = this.state;
    }

    if (!util.isNullOrUndefined(this.zip)) {
      data['Zip'] = this.zip;
    }

    if (!util.isNullOrUndefined(this.country)) {
      data['Country'] = this.country;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.CustomerPaymentCardRegister(this, data);
  }
}

/** 
 * Handles API Request Module. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/module
 */
class Module extends Request {
  /**
   * Module Constructor.
   * @param {?Client} client
   */
  constructor(client) {
    super(client);
    this.function = 'Module';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.moduleCode = null;
    this.moduleFunction = null;
    this.moduleFields = {};
  }

  /**
   * Get Module_Code.
   * @returns {string}
   */
  getModuleCode() {
    return this.moduleCode;
  }

  /**
   * Get Module_Function.
   * @returns {string}
   */
  getModuleFunction() {
    return this.moduleFunction;
  }

  /**
   * Get Module_Fields.
   * @returns {Object}
   */
  getModuleFields() {
    return this.moduleFields;
  }

  /**
   * Set Module_Code.
   * @param {string} moduleCode
   * @returns {Module}
   */
  setModuleCode(moduleCode) {
    this.moduleCode = moduleCode;
    return this;
  }

  /**
   * Set Module_Function.
   * @param {string} moduleFunction
   * @returns {Module}
   */
  setModuleFunction(moduleFunction) {
    this.moduleFunction = moduleFunction;
    return this;
  }

  /**
   * Set Module_Fields.
   * @param {Object} moduleFields
   * @returns {Module}
   */
  setModuleFields(moduleFields) {
    this.moduleFields = moduleFields;
    return this;
  }

  /**
   * Add custom data to the request.
   *
   * @param {string}
   * @param {*}
   * @returns {Module}
   */
  setModuleField(field, value)
  {
      this.moduleFields[field] = value;
      return this;
  }
    
  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = Object.assign(super.toObject(), this.getModuleFields());

    data['Module_Code'] = this.moduleCode;

    data['Module_Function'] = this.moduleFunction;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.Module(this, data);
  }
}

/** 
 * Handles API Request NoteList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/notelist_load_query
 */
class NoteListLoadQuery extends ListQueryRequest {
  /**
   * NoteListLoadQuery Constructor.
   * @param {?Client} client
   */
  constructor(client) {
    super(client);
    this.function = 'NoteList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'notetext',
      'dtstamp',
      'cust_id',
      'account_id',
      'order_id',
      'admin_user',
      'cust_login',
      'business_title'
    ];

    this.availableSortFields = [
      'id',
      'notetext',
      'dtstamp',
      'cust_id',
      'account_id',
      'order_id',
      'admin_user',
      'cust_login',
      'business_title'
    ];
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.NoteListLoadQuery(this, data);
  }
}

/** 
 * Handles API Request Note_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/note_delete
 */
class NoteDelete extends Request {
  /**
   * NoteDelete Constructor.
   * @param {?Client} client
   * @param {?Note} note
   */
  constructor(client, note = null) {
    super(client);
    this.function = 'Note_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.noteId = null;

    if (util.isInstanceOf(note, models.Note)) {
      this.setNoteId(note.getId());
    }
  }

  /**
   * Get Note_ID.
   * @returns {number}
   */
  getNoteId() {
    return this.noteId;
  }

  /**
   * Set Note_ID.
   * @param {number} noteId
   * @returns {NoteDelete}
   */
  setNoteId(noteId) {
    this.noteId = noteId;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['Note_ID'] = this.noteId;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.NoteDelete(this, data);
  }
}

/** 
 * Handles API Request Note_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/note_insert
 */
class NoteInsert extends Request {
  /**
   * NoteInsert Constructor.
   * @param {?Client} client
   */
  constructor(client) {
    super(client);
    this.function = 'Note_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.noteText = null;
    this.customerId = null;
    this.accountId = null;
    this.orderId = null;
  }

  /**
   * Get NoteText.
   * @returns {string}
   */
  getNoteText() {
    return this.noteText;
  }

  /**
   * Get Customer_ID.
   * @returns {number}
   */
  getCustomerId() {
    return this.customerId;
  }

  /**
   * Get Account_ID.
   * @returns {number}
   */
  getAccountId() {
    return this.accountId;
  }

  /**
   * Get Order_ID.
   * @returns {number}
   */
  getOrderId() {
    return this.orderId;
  }

  /**
   * Set NoteText.
   * @param {string} noteText
   * @returns {NoteInsert}
   */
  setNoteText(noteText) {
    this.noteText = noteText;
    return this;
  }

  /**
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {NoteInsert}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
    return this;
  }

  /**
   * Set Account_ID.
   * @param {number} accountId
   * @returns {NoteInsert}
   */
  setAccountId(accountId) {
    this.accountId = accountId;
    return this;
  }

  /**
   * Set Order_ID.
   * @param {number} orderId
   * @returns {NoteInsert}
   */
  setOrderId(orderId) {
    this.orderId = orderId;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['NoteText'] = this.noteText;

    if (!util.isNullOrUndefined(this.customerId)) {
      data['Customer_ID'] = this.customerId;
    }

    if (!util.isNullOrUndefined(this.accountId)) {
      data['Account_ID'] = this.accountId;
    }

    if (!util.isNullOrUndefined(this.orderId)) {
      data['Order_ID'] = this.orderId;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.NoteInsert(this, data);
  }
}

/** 
 * Handles API Request Note_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/note_update
 */
class NoteUpdate extends Request {
  /**
   * NoteUpdate Constructor.
   * @param {?Client} client
   * @param {?Note} note
   */
  constructor(client, note = null) {
    super(client);
    this.function = 'Note_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.noteId = null;
    this.noteText = null;

    if (util.isInstanceOf(note, models.Note)) {
      this.setNoteId(note.getId());
      this.setNoteText(note.getNoteText());
    }
  }

  /**
   * Get Note_ID.
   * @returns {number}
   */
  getNoteId() {
    return this.noteId;
  }

  /**
   * Get NoteText.
   * @returns {string}
   */
  getNoteText() {
    return this.noteText;
  }

  /**
   * Set Note_ID.
   * @param {number} noteId
   * @returns {NoteUpdate}
   */
  setNoteId(noteId) {
    this.noteId = noteId;
    return this;
  }

  /**
   * Set NoteText.
   * @param {string} noteText
   * @returns {NoteUpdate}
   */
  setNoteText(noteText) {
    this.noteText = noteText;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['Note_ID'] = this.getNoteId();

    data['NoteText'] = this.noteText;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.NoteUpdate(this, data);
  }
}

/** 
 * Handles API Request OrderCustomFieldList_Load. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/ordercustomfieldlist_load
 */
class OrderCustomFieldListLoad extends Request {
  /**
   * OrderCustomFieldListLoad Constructor.
   * @param {?Client} client
   */
  constructor(client) {
    super(client);
    this.function = 'OrderCustomFieldList_Load';
    this.scope = Request.REQUEST_SCOPE_STORE;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.OrderCustomFieldListLoad(this, data);
  }
}

/** 
 * Handles API Request OrderCustomFields_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/ordercustomfields_update
 */
class OrderCustomFieldsUpdate extends Request {
  /**
   * OrderCustomFieldsUpdate Constructor.
   * @param {?Client} client
   * @param {?Order} order
   */
  constructor(client, order = null) {
    super(client);
    this.function = 'OrderCustomFields_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.orderId = null;
    this.customFieldValues = new models.CustomFieldValues();

    if (util.isInstanceOf(order, models.Order)) {
      if (order.getId()) {
        this.setOrderId(order.getId());
      }
    }
  }

  /**
   * Get Order_ID.
   * @returns {number}
   */
  getOrderId() {
    return this.orderId;
  }

  /**
   * Get CustomField_Values.
   * @returns {?CustomFieldValues}
   */
  getCustomFieldValues() {
    return this.customFieldValues;
  }

  /**
   * Set Order_ID.
   * @param {number} orderId
   * @returns {OrderCustomFieldsUpdate}
   */
  setOrderId(orderId) {
    this.orderId = orderId;
    return this;
  }

  /**
   * Set CustomField_Values.
   * @param {?CustomFieldValues} customFieldValues
   * @throws {Error}
   * @returns {OrderCustomFieldsUpdate}
   */
  setCustomFieldValues(customFieldValues) {
    if (!util.isInstanceOf(customFieldValues, models.CustomFieldValues) && util.isObject(customFieldValues)) {
      customFieldValues = new models.CustomFieldValues(customFieldValues);
    } else if (!util.isInstanceOf(customFieldValues, models.CustomFieldValues)) {
      throw new Error(util.format('Expected instance of CustomFieldValues or an Object but got %s',
        typeof customFieldValues));
    }

    this.customFieldValues = customFieldValues;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.orderId)) {
      data['Order_ID'] = this.orderId;
    }

    if (this.customFieldValues) {
      data['CustomField_Values'] = this.customFieldValues.toObject();
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.OrderCustomFieldsUpdate(this, data);
  }
}

/** 
 * Handles API Request OrderItemList_BackOrder. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/orderitemlist_backorder
 */
class OrderItemListBackOrder extends Request {
  /**
   * OrderItemListBackOrder Constructor.
   * @param {?Client} client
   * @param {?Order} order
   */
  constructor(client, order = null) {
    super(client);
    this.function = 'OrderItemList_BackOrder';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.orderId = null;
    this.lineIds = [];
    this.dateInStock = null;

    if (util.isInstanceOf(order, models.Order)) {
      if (order.getId()) {
        this.setOrderId(order.getId());
      }
    }
  }

  /**
   * Get Order_ID.
   * @returns {number}
   */
  getOrderId() {
    return this.orderId;
  }

  /**
   * Get Line_IDs.
   * @returns {Array}
   */
  getLineIds() {
    return this.lineIds;
  }

  /**
   * Get Date_InStock.
   * @returns {number}
   */
  getDateInStock() {
    return this.dateInStock;
  }

  /**
   * Set Order_ID.
   * @param {number} orderId
   * @returns {OrderItemListBackOrder}
   */
  setOrderId(orderId) {
    this.orderId = orderId;
    return this;
  }

  /**
   * Set Date_InStock.
   * @param {number|Date} dateInStock
   * @returns {OrderItemListBackOrder}
   */
  setDateInStock(dateInStock) {
    if (util.isDate(dateInStock)) {
      this.dateInStock = Math.floor(dateInStock.getTime()/1000);      
    } else {
      this.dateInStock = dateInStock;
    }

    return this;
  }

  /**
   * Add Line_IDs.
   * @param {number} lineId
   * @returns {OrderItemListBackOrder}
   */
  addLineId(lineId) {
    this.lineIds.push(lineId);
    return this;
  }

  /**
   * Add OrderItem model.
   * @param {OrderItem} orderItem
   * @throws {Error}
   * @returns {OrderItemListBackOrder}
   */
  addOrderItem(orderItem) {
    if (!util.isInstanceOf(orderItem, models.OrderItem)) {
      throw new Error(util.format('Expected instance of OrderItem but got %s',
        typeof orderItem));
    }

    if (orderItem.getLineId()) {
      this.lineIds.push(orderItem.getLineId());
    }

    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.orderId)) {
      data['Order_ID'] = this.orderId;
    }

    data['Line_IDs'] = this.lineIds;

    if (!util.isNullOrUndefined(this.dateInStock)) {
      data['Date_InStock'] = this.dateInStock;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.OrderItemListBackOrder(this, data);
  }
}

/** 
 * Handles API Request OrderItemList_Cancel. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/orderitemlist_cancel
 */
class OrderItemListCancel extends Request {
  /**
   * OrderItemListCancel Constructor.
   * @param {?Client} client
   * @param {?Order} order
   */
  constructor(client, order = null) {
    super(client);
    this.function = 'OrderItemList_Cancel';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.orderId = null;
    this.lineIds = [];
    this.reason = null;

    if (util.isInstanceOf(order, models.Order)) {
      this.setOrderId(order.getId());
    }
  }

  /**
   * Get Order_ID.
   * @returns {number}
   */
  getOrderId() {
    return this.orderId;
  }

  /**
   * Get Line_IDs.
   * @returns {Array}
   */
  getLineIds() {
    return this.lineIds;
  }

  /**
   * Get Reason.
   * @returns {string}
   */
  getReason() {
    return this.reason;
  }

  /**
   * Set Order_ID.
   * @param {number} orderId
   * @returns {OrderItemListCancel}
   */
  setOrderId(orderId) {
    this.orderId = orderId;
    return this;
  }

  /**
   * Set Reason.
   * @param {string} reason
   * @returns {OrderItemListCancel}
   */
  setReason(reason) {
    this.reason = reason;
    return this;
  }

  /**
   * Add Line_IDs.
   * @param {number} lineId
   * @returns {OrderItemListCancel}
   */
  addLineId(lineId) {
    this.lineIds.push(lineId);
    return this;
  }

  /**
   * Add OrderItem model.
   * @param {OrderItem} orderItem
   * @throws {Error}
   * @returns {OrderItemListCancel}
   */
  addOrderItem(orderItem) {
    if (!util.isInstanceOf(orderItem, models.OrderItem)) {
      throw new Error(util.format('Expected instance of OrderItem but got %s',
        typeof orderItem));
    }

    if (orderItem.getLineId()) {
      this.lineIds.push(orderItem.getLineId());
    }

    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['Order_ID'] = this.getOrderId();

    data['Line_IDs'] = this.lineIds;

    if (!util.isNullOrUndefined(this.reason)) {
      data['Reason'] = this.reason;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.OrderItemListCancel(this, data);
  }
}

/** 
 * Handles API Request OrderItemList_CreateShipment. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/orderitemlist_createshipment
 */
class OrderItemListCreateShipment extends Request {
  /**
   * OrderItemListCreateShipment Constructor.
   * @param {?Client} client
   * @param {?Order} order
   */
  constructor(client, order = null) {
    super(client);
    this.function = 'OrderItemList_CreateShipment';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.orderId = null;
    this.lineIds = [];

    if (util.isInstanceOf(order, models.Order)) {
      this.setOrderId(order.getId());
    }
  }

  /**
   * Get Order_ID.
   * @returns {number}
   */
  getOrderId() {
    return this.orderId;
  }

  /**
   * Get Line_IDs.
   * @returns {Array}
   */
  getLineIds() {
    return this.lineIds;
  }

  /**
   * Set Order_ID.
   * @param {number} orderId
   * @returns {OrderItemListCreateShipment}
   */
  setOrderId(orderId) {
    this.orderId = orderId;
    return this;
  }

  /**
   * Add Line_IDs.
   * @param {number} lineId
   * @returns {OrderItemListCreateShipment}
   */
  addLineId(lineId) {
    this.lineIds.push(lineId);
    return this;
  }

  /**
   * Add OrderItem model.
   * @param {OrderItem} orderItem
   * @throws {Error}
   * @returns {OrderItemListCreateShipment}
   */
  addOrderItem(orderItem) {
    if (!util.isInstanceOf(orderItem, models.OrderItem)) {
      throw new Error(util.format('Expected instance of OrderItem but got %s',
        typeof orderItem));
    }

    if (orderItem.getLineId()) {
      this.lineIds.push(orderItem.getLineId());
    }

    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['Order_ID'] = this.getOrderId();

    data['Line_IDs'] = this.lineIds;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.OrderItemListCreateShipment(this, data);
  }
}

/** 
 * Handles API Request OrderItemList_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/orderitemlist_delete
 */
class OrderItemListDelete extends Request {
  /**
   * OrderItemListDelete Constructor.
   * @param {?Client} client
   * @param {?Order} order
   */
  constructor(client, order = null) {
    super(client);
    this.function = 'OrderItemList_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.orderId = null;
    this.lineIds = [];

    if (util.isInstanceOf(order, models.Order)) {
      this.setOrderId(order.getId());
    }
  }

  /**
   * Get Order_ID.
   * @returns {number}
   */
  getOrderId() {
    return this.orderId;
  }

  /**
   * Get Line_IDs.
   * @returns {Array}
   */
  getLineIds() {
    return this.lineIds;
  }

  /**
   * Set Order_ID.
   * @param {number} orderId
   * @returns {OrderItemListDelete}
   */
  setOrderId(orderId) {
    this.orderId = orderId;
    return this;
  }

  /**
   * Add Line_IDs.
   * @param {number} lineId
   * @returns {OrderItemListDelete}
   */
  addLineId(lineId) {
    this.lineIds.push(lineId);
    return this;
  }

  /**
   * Add OrderItem model.
   * @param {OrderItem} orderItem
   * @throws {Error}
   * @returns {OrderItemListDelete}
   */
  addOrderItem(orderItem) {
    if (!util.isInstanceOf(orderItem, models.OrderItem)) {
      throw new Error(util.format('Expected instance of OrderItem but got %s',
        typeof orderItem));
    }

    if (orderItem.getLineId()) {
      this.lineIds.push(orderItem.getLineId());
    }

    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['Order_ID'] = this.orderId;

    data['Line_IDs'] = this.lineIds;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.OrderItemListDelete(this, data);
  }
}

/** 
 * Handles API Request OrderItem_Add. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/orderitem_add
 */
class OrderItemAdd extends Request {
  /**
   * OrderItemAdd Constructor.
   * @param {?Client} client
   * @param {?Order} order
   */
  constructor(client, order = null) {
    super(client);
    this.function = 'OrderItem_Add';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.orderId = null;
    this.code = null;
    this.name = null;
    this.sku = null;
    this.quantity = null;
    this.price = null;
    this.weight = null;
    this.taxable = null;
    this.options = [];

    if (util.isInstanceOf(order, models.Order)) {
      this.setOrderId(order.getId());
    }
  }

  /**
   * Get Order_ID.
   * @returns {number}
   */
  getOrderId() {
    return this.orderId;
  }

  /**
   * Get Code.
   * @returns {string}
   */
  getCode() {
    return this.code;
  }

  /**
   * Get Name.
   * @returns {string}
   */
  getName() {
    return this.name;
  }

  /**
   * Get Sku.
   * @returns {string}
   */
  getSku() {
    return this.sku;
  }

  /**
   * Get Quantity.
   * @returns {number}
   */
  getQuantity() {
    return this.quantity;
  }

  /**
   * Get Price.
   * @returns {number}
   */
  getPrice() {
    return this.price;
  }

  /**
   * Get Weight.
   * @returns {number}
   */
  getWeight() {
    return this.weight;
  }

  /**
   * Get Taxable.
   * @returns {boolean}
   */
  getTaxable() {
    return this.taxable;
  }

  /**
   * Get Options.
   * @returns {OrderItemOption[]}
   */
  getOptions() {
    return this.options;
  }

  /**
   * Set Order_ID.
   * @param {number} orderId
   * @returns {OrderItemAdd}
   */
  setOrderId(orderId) {
    this.orderId = orderId;
    return this;
  }

  /**
   * Set Code.
   * @param {string} code
   * @returns {OrderItemAdd}
   */
  setCode(code) {
    this.code = code;
    return this;
  }

  /**
   * Set Name.
   * @param {string} name
   * @returns {OrderItemAdd}
   */
  setName(name) {
    this.name = name;
    return this;
  }

  /**
   * Set Sku.
   * @param {string} sku
   * @returns {OrderItemAdd}
   */
  setSku(sku) {
    this.sku = sku;
    return this;
  }

  /**
   * Set Quantity.
   * @param {number} quantity
   * @returns {OrderItemAdd}
   */
  setQuantity(quantity) {
    this.quantity = quantity;
    return this;
  }

  /**
   * Set Price.
   * @param {number} price
   * @returns {OrderItemAdd}
   */
  setPrice(price) {
    this.price = price;
    return this;
  }

  /**
   * Set Weight.
   * @param {number} weight
   * @returns {OrderItemAdd}
   */
  setWeight(weight) {
    this.weight = weight;
    return this;
  }

  /**
   * Set Taxable.
   * @param {boolean} taxable
   * @returns {OrderItemAdd}
   */
  setTaxable(taxable) {
    this.taxable = taxable;
    return this;
  }

  /**
   * Set Options.
   * @param {OrderItemOption[]} options
   * @throws {Error}
   * @returns {OrderItemAdd}
   */
  setOptions(options) {
    var i;
    var l;

    if (!util.isArray(options)) {
      throw new Error(util.format('Expected an array but got %s', typeof options));
    }

    for (i = 0, l = options.length; i < l; i++) {
      if (!util.isInstanceOf(options[i], models.OrderItemOption) && util.isObject(options[i])) {
        options[i] = new models.OrderItemOption(options[i]);
      } else if (!util.isInstanceOf(options[i], models.OrderItemOption)) {
        throw new Error(util.format('Expected instance of OrderItemOption or an Object but got %s',
          typeof options[i]));
      }
    }

    this.options = options;
    return this;
  }

  /**
   * Add Options.
   * @param {OrderItemOption} option
   * @throws {Error}
   * @returns {OrderItemAdd}
   */
  addOption(option) {
    if (util.isInstanceOf(option, models.OrderItemOption)) {
      this.options.push(option);
    } else if (util.isObject(option)) {
      this.options.push(new models.OrderItemOption(option));
    } else {
      throw new Error(util.format('Expected instance of OrderItemOption or Object but got %s',
        typeof option));
    }

    return this;
  }

  /**
   * Add many OrderItemOption.
   * @param {OrderItemOption[]} options
   * @throws {Error}
   * @returns {OrderItemAdd}
   */
  addOptions(options) {
    var i;
    var l;

    if (!util.isArray(options)) {
      throw new Error(util.format('Expecting an array of OrderItemOption but got %s',
        typeof options));
    }

    for (i = 0, l = options.length; i < l; i++) {
      if (util.isInstanceOf(options[i], models.OrderItemOption)) {
        this.options.push(options[i]);
      } else if (util.isObject(options[i])) {
        this.options.push(new models.OrderItemOption(options[i]));
      } else {
        throw new Error(util.format('Expected array of OrderItemOption or an array of Object but got %s',
          typeof options[i]));
      }
    }

    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var i;
    var l;
    var data = super.toObject();

    data['Order_ID'] = this.getOrderId();

    data['Code'] = this.code;

    data['Name'] = this.name;

    if (!util.isNullOrUndefined(this.sku)) {
      data['Sku'] = this.sku;
    }

    data['Quantity'] = this.quantity;

    if (!util.isNullOrUndefined(this.price)) {
      data['Price'] = this.price;
    }

    if (!util.isNullOrUndefined(this.weight)) {
      data['Weight'] = this.weight;
    }

    if (!util.isNullOrUndefined(this.taxable)) {
      data['Taxable'] = this.taxable;
    }

    if (util.isArray(this.options)) {
      data['Options'] = [];

      for (i = 0, l = this.options.length; i < l; i++) {
        if (util.isObject(this.options[i])) {
            data['Options'].push(this.options[i].toObject());
        }
      }
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.OrderItemAdd(this, data);
  }
}

/** 
 * Handles API Request OrderItem_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/orderitem_update
 */
class OrderItemUpdate extends Request {
  /**
   * OrderItemUpdate Constructor.
   * @param {?Client} client
   * @param {?OrderItem} orderItem
   */
  constructor(client, orderItem = null) {
    super(client);
    var i;
    var l;
    var options;
    var attribute;
    this.function = 'OrderItem_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.orderId = null;
    this.lineId = null;
    this.code = null;
    this.name = null;
    this.sku = null;
    this.quantity = null;
    this.price = null;
    this.weight = null;
    this.taxable = null;
    this.options = [];

    if (util.isInstanceOf(orderItem, models.OrderItem)) {
      this.setOrderId(orderItem.getOrderId());
      this.setLineId(orderItem.getLineId());
      this.setCode(orderItem.getCode());
      this.setName(orderItem.getName());
      this.setSku(orderItem.getSku());
      this.setQuantity(orderItem.getQuantity());
      this.setPrice(orderItem.getPrice());
      this.setWeight(orderItem.getWeight());
      this.setTaxable(orderItem.getTaxable());

      if (orderItem.getOptions() && orderItem.getOptions().length) {
        this.options = orderItem.getOptions();
      }
    }
  }

  /**
   * Get Order_ID.
   * @returns {number}
   */
  getOrderId() {
    return this.orderId;
  }

  /**
   * Get Line_ID.
   * @returns {number}
   */
  getLineId() {
    return this.lineId;
  }

  /**
   * Get Code.
   * @returns {string}
   */
  getCode() {
    return this.code;
  }

  /**
   * Get Name.
   * @returns {string}
   */
  getName() {
    return this.name;
  }

  /**
   * Get Sku.
   * @returns {string}
   */
  getSku() {
    return this.sku;
  }

  /**
   * Get Quantity.
   * @returns {number}
   */
  getQuantity() {
    return this.quantity;
  }

  /**
   * Get Price.
   * @returns {number}
   */
  getPrice() {
    return this.price;
  }

  /**
   * Get Weight.
   * @returns {number}
   */
  getWeight() {
    return this.weight;
  }

  /**
   * Get Taxable.
   * @returns {boolean}
   */
  getTaxable() {
    return this.taxable;
  }

  /**
   * Get Options.
   * @returns {OrderItemOption[]}
   */
  getOptions() {
    return this.options;
  }

  /**
   * Set Order_ID.
   * @param {number} orderId
   * @returns {OrderItemUpdate}
   */
  setOrderId(orderId) {
    this.orderId = orderId;
    return this;
  }

  /**
   * Set Line_ID.
   * @param {number} lineId
   * @returns {OrderItemUpdate}
   */
  setLineId(lineId) {
    this.lineId = lineId;
    return this;
  }

  /**
   * Set Code.
   * @param {string} code
   * @returns {OrderItemUpdate}
   */
  setCode(code) {
    this.code = code;
    return this;
  }

  /**
   * Set Name.
   * @param {string} name
   * @returns {OrderItemUpdate}
   */
  setName(name) {
    this.name = name;
    return this;
  }

  /**
   * Set Sku.
   * @param {string} sku
   * @returns {OrderItemUpdate}
   */
  setSku(sku) {
    this.sku = sku;
    return this;
  }

  /**
   * Set Quantity.
   * @param {number} quantity
   * @returns {OrderItemUpdate}
   */
  setQuantity(quantity) {
    this.quantity = quantity;
    return this;
  }

  /**
   * Set Price.
   * @param {number} price
   * @returns {OrderItemUpdate}
   */
  setPrice(price) {
    this.price = price;
    return this;
  }

  /**
   * Set Weight.
   * @param {number} weight
   * @returns {OrderItemUpdate}
   */
  setWeight(weight) {
    this.weight = weight;
    return this;
  }

  /**
   * Set Taxable.
   * @param {boolean} taxable
   * @returns {OrderItemUpdate}
   */
  setTaxable(taxable) {
    this.taxable = taxable;
    return this;
  }

  /**
   * Set Options.
   * @param {OrderItemOption[]} options
   * @throws {Error}
   * @returns {OrderItemUpdate}
   */
  setOptions(options) {
    var i;
    var l;

    if (!util.isArray(options)) {
      throw new Error(util.format('Expected an array but got %s', typeof options));
    }

    for (i = 0, l = options.length; i < l; i++) {
      if (!util.isInstanceOf(options[i], models.OrderItemOption) && util.isObject(options[i])) {
        options[i] = new models.OrderItemOption(options[i]);
      } else if (!util.isInstanceOf(options[i], models.OrderItemOption)) {
        throw new Error(util.format('Expected instance of OrderItemOption or an Object but got %s',
          typeof options[i]));
      }
    }

    this.options = options;
    return this;
  }

  /**
   * Add Options.
   * @param {OrderItemOption} option
   * @throws {Error}
   * @returns {OrderItemUpdate}
   */
  addOption(option) {
    if (util.isInstanceOf(option, models.OrderItemOption)) {
      this.options.push(option);
    } else if (util.isObject(option)) {
      this.options.push(new models.OrderItemOption(option));
    } else {
      throw new Error(util.format('Expected instance of OrderItemOption or Object but got %s',
        typeof option));
    }

    return this;
  }

  /**
   * Add many OrderItemOption.
   * @param {OrderItemOption[]} options
   * @throws {Error}
   * @returns {OrderItemUpdate}
   */
  addOptions(options) {
    var i;
    var l;

    if (!util.isArray(options)) {
      throw new Error(util.format('Expecting an array of OrderItemOption but got %s',
        typeof options));
    }

    for (i = 0, l = options.length; i < l; i++) {
      if (util.isInstanceOf(options[i], models.OrderItemOption)) {
        this.options.push(options[i]);
      } else if (util.isObject(options[i])) {
        this.options.push(new models.OrderItemOption(options[i]));
      } else {
        throw new Error(util.format('Expected array of OrderItemOption or an array of Object but got %s',
          typeof options[i]));
      }
    }

    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var i;
    var l;
    var data = super.toObject();

    data['Order_ID'] = this.getOrderId();

    data['Line_ID'] = this.getLineId();

    if (!util.isNullOrUndefined(this.code)) {
      data['Code'] = this.code;
    }

    if (!util.isNullOrUndefined(this.name)) {
      data['Name'] = this.name;
    }

    if (!util.isNullOrUndefined(this.sku)) {
      data['Sku'] = this.sku;
    }

    if (!util.isNullOrUndefined(this.quantity)) {
      data['Quantity'] = this.quantity;
    }

    if (!util.isNullOrUndefined(this.price)) {
      data['Price'] = this.price;
    }

    if (!util.isNullOrUndefined(this.weight)) {
      data['Weight'] = this.weight;
    }

    if (!util.isNullOrUndefined(this.taxable)) {
      data['Taxable'] = this.taxable;
    }

    if (util.isArray(this.options)) {
      data['Options'] = [];

      for (i = 0, l = this.options.length; i < l; i++) {
        if (util.isObject(this.options[i])) {
            data['Options'].push(this.options[i].toObject());
        }
      }
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.OrderItemUpdate(this, data);
  }
}

/** PAY_STATUS_FILTER constants. */
/** @ignore */
const PAY_STATUS_FILTER_AUTH_ONLY = 'auth_0_capt';
/** @ignore */
const PAY_STATUS_FILTER_PARTIAL_CAPTURE = 'partial_capt';
/** @ignore */
const PAY_STATUS_FILTER_CAPTURED_NOT_SHIPPED = 'capt_not_ship';
/** @ignore */
const PAY_STATUS_FILTER_SHIPPED_NOT_CAPTURED = 'ship_not_capt';

/** 
 * Handles API Request OrderList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/orderlist_load_query
 */
class OrderListLoadQuery extends ListQueryRequest {
  /**
   * OrderListLoadQuery Constructor.
   * @param {?Client} client
   */
  constructor(client) {
    super(client);
    this.function = 'OrderList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'batch_id',
      'status',
      'pay_status',
      'orderdate',
      'dt_instock',
      'ship_res',
      'ship_fname',
      'ship_lname',
      'ship_email',
      'ship_comp',
      'ship_phone',
      'ship_fax',
      'ship_addr1',
      'ship_addr2',
      'ship_city',
      'ship_state',
      'ship_zip',
      'ship_cntry',
      'bill_fname',
      'bill_lname',
      'bill_email',
      'bill_comp',
      'bill_phone',
      'bill_fax',
      'bill_addr1',
      'bill_addr2',
      'bill_city',
      'bill_state',
      'bill_zip',
      'bill_cntry',
      'ship_id',
      'ship_data',
      'source',
      'source_id',
      'total',
      'total_ship',
      'total_tax',
      'total_auth',
      'total_capt',
      'total_rfnd',
      'net_capt',
      'pend_count',
      'bord_count',
      'cust_login',
      'cust_pw_email',
      'business_title',
      'note_count'
    ];

    this.availableSortFields = [
      'id',
      'batch_id',
      'status',
      'pay_status',
      'orderdate',
      'dt_instock',
      'ship_res',
      'ship_fname',
      'ship_lname',
      'ship_email',
      'ship_comp',
      'ship_phone',
      'ship_fax',
      'ship_addr1',
      'ship_addr2',
      'ship_city',
      'ship_state',
      'ship_zip',
      'ship_cntry',
      'bill_fname',
      'bill_lname',
      'bill_email',
      'bill_comp',
      'bill_phone',
      'bill_fax',
      'bill_addr1',
      'bill_addr2',
      'bill_city',
      'bill_state',
      'bill_zip',
      'bill_cntry',
      'ship_data',
      'source',
      'source_id',
      'total',
      'total_ship',
      'total_tax',
      'total_auth',
      'total_capt',
      'total_rfnd',
      'net_capt',
      'pend_count',
      'bord_count',
      'cust_login',
      'cust_pw_email',
      'business_title',
      'note_count',
      'payment_module'
    ];

    this.availableOnDemandColumns = [
      'ship_method',
      'cust_login',
      'cust_pw_email',
      'business_title',
      'payment_module',
      'customer',
      'items',
      'charges',
      'coupons',
      'discounts',
      'payments',
      'notes'
    ];

    this.availableCustomFilters = {
      Customer_ID : 'int',
      BusinessAccount_ID : 'int',
      pay_id : 'int',
      payment : [
          PAY_STATUS_FILTER_AUTH_ONLY,
          PAY_STATUS_FILTER_PARTIAL_CAPTURE,
          PAY_STATUS_FILTER_CAPTURED_NOT_SHIPPED,
          PAY_STATUS_FILTER_SHIPPED_NOT_CAPTURED
      ],
      product_code : 'string'
    };

    this.passphrase = null;
  }

  /**
   * Constant PAY_STATUS_FILTER_AUTH_ONLY
   * @returns {string}
   * @const
   * @static
   */
  static get PAY_STATUS_FILTER_AUTH_ONLY() {
    return PAY_STATUS_FILTER_AUTH_ONLY;
  }

  /**
   * Constant PAY_STATUS_FILTER_PARTIAL_CAPTURE
   * @returns {string}
   * @const
   * @static
   */
  static get PAY_STATUS_FILTER_PARTIAL_CAPTURE() {
    return PAY_STATUS_FILTER_PARTIAL_CAPTURE;
  }

  /**
   * Constant PAY_STATUS_FILTER_CAPTURED_NOT_SHIPPED
   * @returns {string}
   * @const
   * @static
   */
  static get PAY_STATUS_FILTER_CAPTURED_NOT_SHIPPED() {
    return PAY_STATUS_FILTER_CAPTURED_NOT_SHIPPED;
  }

  /**
   * Constant PAY_STATUS_FILTER_SHIPPED_NOT_CAPTURED
   * @returns {string}
   * @const
   * @static
   */
  static get PAY_STATUS_FILTER_SHIPPED_NOT_CAPTURED() {
    return PAY_STATUS_FILTER_SHIPPED_NOT_CAPTURED;
  }
  /**
   * Get Passphrase.
   * @returns {string}
   */
  getPassphrase() {
    return this.passphrase;
  }

  /**
   * Set Passphrase.
   * @param {string} passphrase
   * @returns {OrderListLoadQuery}
   */
  setPassphrase(passphrase) {
    this.passphrase = passphrase;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.passphrase)) {
      data['Passphrase'] = this.passphrase;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.OrderListLoadQuery(this, data);
  }
}

/** 
 * Handles API Request OrderPayment_Capture. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/orderpayment_capture
 */
class OrderPaymentCapture extends Request {
  /**
   * OrderPaymentCapture Constructor.
   * @param {?Client} client
   * @param {?OrderPayment} orderPayment
   */
  constructor(client, orderPayment = null) {
    super(client);
    this.function = 'OrderPayment_Capture';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.orderPaymentId = null;
    this.amount = null;

    if (util.isInstanceOf(orderPayment, models.OrderPayment)) {
      this.setOrderPaymentId(orderPayment.getId());
    }
  }

  /**
   * Get OrderPayment_ID.
   * @returns {number}
   */
  getOrderPaymentId() {
    return this.orderPaymentId;
  }

  /**
   * Get Amount.
   * @returns {number}
   */
  getAmount() {
    return this.amount;
  }

  /**
   * Set OrderPayment_ID.
   * @param {number} orderPaymentId
   * @returns {OrderPaymentCapture}
   */
  setOrderPaymentId(orderPaymentId) {
    this.orderPaymentId = orderPaymentId;
    return this;
  }

  /**
   * Set Amount.
   * @param {number} amount
   * @returns {OrderPaymentCapture}
   */
  setAmount(amount) {
    this.amount = amount;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['OrderPayment_ID'] = this.orderPaymentId;

    if (!util.isNullOrUndefined(this.amount)) {
      data['Amount'] = this.amount;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.OrderPaymentCapture(this, data);
  }
}

/** 
 * Handles API Request OrderPayment_Refund. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/orderpayment_refund
 */
class OrderPaymentRefund extends Request {
  /**
   * OrderPaymentRefund Constructor.
   * @param {?Client} client
   * @param {?OrderPayment} orderPayment
   */
  constructor(client, orderPayment = null) {
    super(client);
    this.function = 'OrderPayment_Refund';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.orderPaymentId = null;
    this.amount = null;

    if (util.isInstanceOf(orderPayment, models.OrderPayment)) {
      this.setOrderPaymentId(orderPayment.getId());
    }
  }

  /**
   * Get OrderPayment_ID.
   * @returns {number}
   */
  getOrderPaymentId() {
    return this.orderPaymentId;
  }

  /**
   * Get Amount.
   * @returns {number}
   */
  getAmount() {
    return this.amount;
  }

  /**
   * Set OrderPayment_ID.
   * @param {number} orderPaymentId
   * @returns {OrderPaymentRefund}
   */
  setOrderPaymentId(orderPaymentId) {
    this.orderPaymentId = orderPaymentId;
    return this;
  }

  /**
   * Set Amount.
   * @param {number} amount
   * @returns {OrderPaymentRefund}
   */
  setAmount(amount) {
    this.amount = amount;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['OrderPayment_ID'] = this.orderPaymentId;

    if (!util.isNullOrUndefined(this.amount)) {
      data['Amount'] = this.amount;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.OrderPaymentRefund(this, data);
  }
}

/** 
 * Handles API Request OrderPayment_VOID. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/orderpayment_void
 */
class OrderPaymentVoid extends Request {
  /**
   * OrderPaymentVoid Constructor.
   * @param {?Client} client
   * @param {?OrderPayment} orderPayment
   */
  constructor(client, orderPayment = null) {
    super(client);
    this.function = 'OrderPayment_VOID';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.orderPaymentId = null;
    this.amount = null;

    if (util.isInstanceOf(orderPayment, models.OrderPayment)) {
      this.setOrderPaymentId(orderPayment.getId());
    }
  }

  /**
   * Get OrderPayment_ID.
   * @returns {number}
   */
  getOrderPaymentId() {
    return this.orderPaymentId;
  }

  /**
   * Get Amount.
   * @returns {number}
   */
  getAmount() {
    return this.amount;
  }

  /**
   * Set OrderPayment_ID.
   * @param {number} orderPaymentId
   * @returns {OrderPaymentVoid}
   */
  setOrderPaymentId(orderPaymentId) {
    this.orderPaymentId = orderPaymentId;
    return this;
  }

  /**
   * Set Amount.
   * @param {number} amount
   * @returns {OrderPaymentVoid}
   */
  setAmount(amount) {
    this.amount = amount;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['OrderPayment_ID'] = this.orderPaymentId;

    if (!util.isNullOrUndefined(this.amount)) {
      data['Amount'] = this.amount;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.OrderPaymentVoid(this, data);
  }
}

/** 
 * Handles API Request OrderShipmentList_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/ordershipmentlist_update
 */
class OrderShipmentListUpdate extends Request {
  /**
   * OrderShipmentListUpdate Constructor.
   * @param {?Client} client
   */
  constructor(client) {
    super(client);
    this.function = 'OrderShipmentList_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.shipmentUpdates = [];
  }

  /**
   * Get Shipment_Updates.
   * @returns {OrderShipmentUpdate[]}
   */
  getShipmentUpdates() {
    return this.shipmentUpdates;
  }

  /**
   * Set Shipment_Updates.
   * @param {OrderShipmentUpdate[]} shipmentUpdates
   * @throws {Error}
   * @returns {OrderShipmentListUpdate}
   */
  setShipmentUpdates(shipmentUpdates) {
    var i;
    var l;

    if (!util.isArray(shipmentUpdates)) {
      throw new Error(util.format('Expected an array but got %s', typeof shipmentUpdates));
    }

    for (i = 0, l = shipmentUpdates.length; i < l; i++) {
      if (!util.isInstanceOf(shipmentUpdates[i], models.OrderShipmentUpdate) && util.isObject(shipmentUpdates[i])) {
        shipmentUpdates[i] = new models.OrderShipmentUpdate(shipmentUpdates[i]);
      } else if (!util.isInstanceOf(shipmentUpdates[i], models.OrderShipmentUpdate)) {
        throw new Error(util.format('Expected instance of OrderShipmentUpdate or an Object but got %s',
          typeof shipmentUpdates[i]));
      }
    }

    this.shipmentUpdates = shipmentUpdates;
    return this;
  }

  /**
   * Add Shipment_Updates.
   * @param {OrderShipmentUpdate} shipmentUpdate
   * @throws {Error}
   * @returns {OrderShipmentListUpdate}
   */
  addShipmentUpdate(shipmentUpdate) {
    if (util.isInstanceOf(shipmentUpdate, models.OrderShipmentUpdate)) {
      this.shipmentUpdates.push(shipmentUpdate);
    } else if (util.isObject(shipmentUpdate)) {
      this.shipmentUpdates.push(new models.OrderShipmentUpdate(shipmentUpdate));
    } else {
      throw new Error(util.format('Expected instance of OrderShipmentUpdate or Object but got %s',
        typeof shipmentUpdate));
    }

    return this;
  }

  /**
   * Add many OrderShipmentUpdate.
   * @param {OrderShipmentUpdate[]} shipmentUpdates
   * @throws {Error}
   * @returns {OrderShipmentListUpdate}
   */
  addShipmentUpdates(shipmentUpdates) {
    var i;
    var l;

    if (!util.isArray(shipmentUpdates)) {
      throw new Error(util.format('Expecting an array of OrderShipmentUpdate but got %s',
        typeof shipmentUpdates));
    }

    for (i = 0, l = shipmentUpdates.length; i < l; i++) {
      if (util.isInstanceOf(shipmentUpdates[i], models.OrderShipmentUpdate)) {
        this.shipmentUpdates.push(shipmentUpdates[i]);
      } else if (util.isObject(shipmentUpdates[i])) {
        this.shipmentUpdates.push(new models.OrderShipmentUpdate(shipmentUpdates[i]));
      } else {
        throw new Error(util.format('Expected array of OrderShipmentUpdate or an array of Object but got %s',
          typeof shipmentUpdates[i]));
      }
    }

    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var i;
    var l;
    var data = super.toObject();

    if (util.isArray(this.shipmentUpdates)) {
      data['Shipment_Updates'] = [];

      for (i = 0, l = this.shipmentUpdates.length; i < l; i++) {
        data['Shipment_Updates'].push(this.shipmentUpdates[i].toObject());
      }
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.OrderShipmentListUpdate(this, data);
  }
}

/** 
 * Handles API Request Order_Create. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/order_create
 */
class OrderCreate extends Request {
  /**
   * OrderCreate Constructor.
   * @param {?Client} client
   * @param {?Customer} customer
   */
  constructor(client, customer = null) {
    super(client);
    this.function = 'Order_Create';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.customerLogin = null;
    this.customerId = null;
    this.shipFirstName = null;
    this.shipLastName = null;
    this.shipEmail = null;
    this.shipPhone = null;
    this.shipFax = null;
    this.shipCompany = null;
    this.shipAddress1 = null;
    this.shipAddress2 = null;
    this.shipCity = null;
    this.shipState = null;
    this.shipZip = null;
    this.shipCountry = null;
    this.shipResidential = null;
    this.billFirstName = null;
    this.billLastName = null;
    this.billEmail = null;
    this.billPhone = null;
    this.billFax = null;
    this.billCompany = null;
    this.billAddress1 = null;
    this.billAddress2 = null;
    this.billCity = null;
    this.billState = null;
    this.billZip = null;
    this.billCountry = null;
    this.items = [];
    this.products = [];
    this.charges = [];
    this.customFieldValues = new models.CustomFieldValues();
    this.shippingModuleCode = null;
    this.shippingModuleData = null;
    this.calculateCharges = null;
    this.triggerFulfillmentModules = null;

    if (util.isInstanceOf(customer, models.Customer)) {
      if (customer.getId()) {
        this.setCustomerId(customer.getId());
      } else if (customer.getLogin()) {
        this.setCustomerLogin(customer.getLogin());
      }
    }
  }

  /**
   * Get Customer_Login.
   * @returns {string}
   */
  getCustomerLogin() {
    return this.customerLogin;
  }

  /**
   * Get Customer_ID.
   * @returns {number}
   */
  getCustomerId() {
    return this.customerId;
  }

  /**
   * Get ShipFirstName.
   * @returns {string}
   */
  getShipFirstName() {
    return this.shipFirstName;
  }

  /**
   * Get ShipLastName.
   * @returns {string}
   */
  getShipLastName() {
    return this.shipLastName;
  }

  /**
   * Get ShipEmail.
   * @returns {string}
   */
  getShipEmail() {
    return this.shipEmail;
  }

  /**
   * Get ShipPhone.
   * @returns {string}
   */
  getShipPhone() {
    return this.shipPhone;
  }

  /**
   * Get ShipFax.
   * @returns {string}
   */
  getShipFax() {
    return this.shipFax;
  }

  /**
   * Get ShipCompany.
   * @returns {string}
   */
  getShipCompany() {
    return this.shipCompany;
  }

  /**
   * Get ShipAddress1.
   * @returns {string}
   */
  getShipAddress1() {
    return this.shipAddress1;
  }

  /**
   * Get ShipAddress2.
   * @returns {string}
   */
  getShipAddress2() {
    return this.shipAddress2;
  }

  /**
   * Get ShipCity.
   * @returns {string}
   */
  getShipCity() {
    return this.shipCity;
  }

  /**
   * Get ShipState.
   * @returns {string}
   */
  getShipState() {
    return this.shipState;
  }

  /**
   * Get ShipZip.
   * @returns {string}
   */
  getShipZip() {
    return this.shipZip;
  }

  /**
   * Get ShipCountry.
   * @returns {string}
   */
  getShipCountry() {
    return this.shipCountry;
  }

  /**
   * Get ShipResidential.
   * @returns {boolean}
   */
  getShipResidential() {
    return this.shipResidential;
  }

  /**
   * Get BillFirstName.
   * @returns {string}
   */
  getBillFirstName() {
    return this.billFirstName;
  }

  /**
   * Get BillLastName.
   * @returns {string}
   */
  getBillLastName() {
    return this.billLastName;
  }

  /**
   * Get BillEmail.
   * @returns {string}
   */
  getBillEmail() {
    return this.billEmail;
  }

  /**
   * Get BillPhone.
   * @returns {string}
   */
  getBillPhone() {
    return this.billPhone;
  }

  /**
   * Get BillFax.
   * @returns {string}
   */
  getBillFax() {
    return this.billFax;
  }

  /**
   * Get BillCompany.
   * @returns {string}
   */
  getBillCompany() {
    return this.billCompany;
  }

  /**
   * Get BillAddress1.
   * @returns {string}
   */
  getBillAddress1() {
    return this.billAddress1;
  }

  /**
   * Get BillAddress2.
   * @returns {string}
   */
  getBillAddress2() {
    return this.billAddress2;
  }

  /**
   * Get BillCity.
   * @returns {string}
   */
  getBillCity() {
    return this.billCity;
  }

  /**
   * Get BillState.
   * @returns {string}
   */
  getBillState() {
    return this.billState;
  }

  /**
   * Get BillZip.
   * @returns {string}
   */
  getBillZip() {
    return this.billZip;
  }

  /**
   * Get BillCountry.
   * @returns {string}
   */
  getBillCountry() {
    return this.billCountry;
  }

  /**
   * Get Items.
   * @returns {OrderItem[]}
   */
  getItems() {
    return this.items;
  }

  /**
   * Get Products.
   * @returns {OrderProduct[]}
   */
  getProducts() {
    return this.products;
  }

  /**
   * Get Charges.
   * @returns {OrderCharge[]}
   */
  getCharges() {
    return this.charges;
  }

  /**
   * Get CustomField_Values.
   * @returns {?CustomFieldValues}
   */
  getCustomFieldValues() {
    return this.customFieldValues;
  }

  /**
   * Get Shipping_Module_Code.
   * @returns {string}
   */
  getShippingModuleCode() {
    return this.shippingModuleCode;
  }

  /**
   * Get Shipping_Module_Data.
   * @returns {string}
   */
  getShippingModuleData() {
    return this.shippingModuleData;
  }

  /**
   * Get CalculateCharges.
   * @returns {boolean}
   */
  getCalculateCharges() {
    return this.calculateCharges;
  }

  /**
   * Get TriggerFulfillmentModules.
   * @returns {boolean}
   */
  getTriggerFulfillmentModules() {
    return this.triggerFulfillmentModules;
  }

  /**
   * Set Customer_Login.
   * @param {string} customerLogin
   * @returns {OrderCreate}
   */
  setCustomerLogin(customerLogin) {
    this.customerLogin = customerLogin;
    return this;
  }

  /**
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {OrderCreate}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
    return this;
  }

  /**
   * Set ShipFirstName.
   * @param {string} shipFirstName
   * @returns {OrderCreate}
   */
  setShipFirstName(shipFirstName) {
    this.shipFirstName = shipFirstName;
    return this;
  }

  /**
   * Set ShipLastName.
   * @param {string} shipLastName
   * @returns {OrderCreate}
   */
  setShipLastName(shipLastName) {
    this.shipLastName = shipLastName;
    return this;
  }

  /**
   * Set ShipEmail.
   * @param {string} shipEmail
   * @returns {OrderCreate}
   */
  setShipEmail(shipEmail) {
    this.shipEmail = shipEmail;
    return this;
  }

  /**
   * Set ShipPhone.
   * @param {string} shipPhone
   * @returns {OrderCreate}
   */
  setShipPhone(shipPhone) {
    this.shipPhone = shipPhone;
    return this;
  }

  /**
   * Set ShipFax.
   * @param {string} shipFax
   * @returns {OrderCreate}
   */
  setShipFax(shipFax) {
    this.shipFax = shipFax;
    return this;
  }

  /**
   * Set ShipCompany.
   * @param {string} shipCompany
   * @returns {OrderCreate}
   */
  setShipCompany(shipCompany) {
    this.shipCompany = shipCompany;
    return this;
  }

  /**
   * Set ShipAddress1.
   * @param {string} shipAddress1
   * @returns {OrderCreate}
   */
  setShipAddress1(shipAddress1) {
    this.shipAddress1 = shipAddress1;
    return this;
  }

  /**
   * Set ShipAddress2.
   * @param {string} shipAddress2
   * @returns {OrderCreate}
   */
  setShipAddress2(shipAddress2) {
    this.shipAddress2 = shipAddress2;
    return this;
  }

  /**
   * Set ShipCity.
   * @param {string} shipCity
   * @returns {OrderCreate}
   */
  setShipCity(shipCity) {
    this.shipCity = shipCity;
    return this;
  }

  /**
   * Set ShipState.
   * @param {string} shipState
   * @returns {OrderCreate}
   */
  setShipState(shipState) {
    this.shipState = shipState;
    return this;
  }

  /**
   * Set ShipZip.
   * @param {string} shipZip
   * @returns {OrderCreate}
   */
  setShipZip(shipZip) {
    this.shipZip = shipZip;
    return this;
  }

  /**
   * Set ShipCountry.
   * @param {string} shipCountry
   * @returns {OrderCreate}
   */
  setShipCountry(shipCountry) {
    this.shipCountry = shipCountry;
    return this;
  }

  /**
   * Set ShipResidential.
   * @param {boolean} shipResidential
   * @returns {OrderCreate}
   */
  setShipResidential(shipResidential) {
    this.shipResidential = shipResidential;
    return this;
  }

  /**
   * Set BillFirstName.
   * @param {string} billFirstName
   * @returns {OrderCreate}
   */
  setBillFirstName(billFirstName) {
    this.billFirstName = billFirstName;
    return this;
  }

  /**
   * Set BillLastName.
   * @param {string} billLastName
   * @returns {OrderCreate}
   */
  setBillLastName(billLastName) {
    this.billLastName = billLastName;
    return this;
  }

  /**
   * Set BillEmail.
   * @param {string} billEmail
   * @returns {OrderCreate}
   */
  setBillEmail(billEmail) {
    this.billEmail = billEmail;
    return this;
  }

  /**
   * Set BillPhone.
   * @param {string} billPhone
   * @returns {OrderCreate}
   */
  setBillPhone(billPhone) {
    this.billPhone = billPhone;
    return this;
  }

  /**
   * Set BillFax.
   * @param {string} billFax
   * @returns {OrderCreate}
   */
  setBillFax(billFax) {
    this.billFax = billFax;
    return this;
  }

  /**
   * Set BillCompany.
   * @param {string} billCompany
   * @returns {OrderCreate}
   */
  setBillCompany(billCompany) {
    this.billCompany = billCompany;
    return this;
  }

  /**
   * Set BillAddress1.
   * @param {string} billAddress1
   * @returns {OrderCreate}
   */
  setBillAddress1(billAddress1) {
    this.billAddress1 = billAddress1;
    return this;
  }

  /**
   * Set BillAddress2.
   * @param {string} billAddress2
   * @returns {OrderCreate}
   */
  setBillAddress2(billAddress2) {
    this.billAddress2 = billAddress2;
    return this;
  }

  /**
   * Set BillCity.
   * @param {string} billCity
   * @returns {OrderCreate}
   */
  setBillCity(billCity) {
    this.billCity = billCity;
    return this;
  }

  /**
   * Set BillState.
   * @param {string} billState
   * @returns {OrderCreate}
   */
  setBillState(billState) {
    this.billState = billState;
    return this;
  }

  /**
   * Set BillZip.
   * @param {string} billZip
   * @returns {OrderCreate}
   */
  setBillZip(billZip) {
    this.billZip = billZip;
    return this;
  }

  /**
   * Set BillCountry.
   * @param {string} billCountry
   * @returns {OrderCreate}
   */
  setBillCountry(billCountry) {
    this.billCountry = billCountry;
    return this;
  }

  /**
   * Set Items.
   * @param {OrderItem[]} items
   * @throws {Error}
   * @returns {OrderCreate}
   */
  setItems(items) {
    var i;
    var l;

    if (!util.isArray(items)) {
      throw new Error(util.format('Expected an array but got %s', typeof items));
    }

    for (i = 0, l = items.length; i < l; i++) {
      if (!util.isInstanceOf(items[i], models.OrderItem) && util.isObject(items[i])) {
        items[i] = new models.OrderItem(items[i]);
      } else if (!util.isInstanceOf(items[i], models.OrderItem)) {
        throw new Error(util.format('Expected instance of OrderItem or an Object but got %s',
          typeof items[i]));
      }
    }

    this.items = items;
    return this;
  }

  /**
   * Set Products.
   * @param {OrderProduct[]} products
   * @throws {Error}
   * @returns {OrderCreate}
   */
  setProducts(products) {
    var i;
    var l;

    if (!util.isArray(products)) {
      throw new Error(util.format('Expected an array but got %s', typeof products));
    }

    for (i = 0, l = products.length; i < l; i++) {
      if (!util.isInstanceOf(products[i], models.OrderProduct) && util.isObject(products[i])) {
        products[i] = new models.OrderProduct(products[i]);
      } else if (!util.isInstanceOf(products[i], models.OrderProduct)) {
        throw new Error(util.format('Expected instance of OrderProduct or an Object but got %s',
          typeof products[i]));
      }
    }

    this.products = products;
    return this;
  }

  /**
   * Set Charges.
   * @param {OrderCharge[]} charges
   * @throws {Error}
   * @returns {OrderCreate}
   */
  setCharges(charges) {
    var i;
    var l;

    if (!util.isArray(charges)) {
      throw new Error(util.format('Expected an array but got %s', typeof charges));
    }

    for (i = 0, l = charges.length; i < l; i++) {
      if (!util.isInstanceOf(charges[i], models.OrderCharge) && util.isObject(charges[i])) {
        charges[i] = new models.OrderCharge(charges[i]);
      } else if (!util.isInstanceOf(charges[i], models.OrderCharge)) {
        throw new Error(util.format('Expected instance of OrderCharge or an Object but got %s',
          typeof charges[i]));
      }
    }

    this.charges = charges;
    return this;
  }

  /**
   * Set CustomField_Values.
   * @param {?CustomFieldValues} customFieldValues
   * @throws {Error}
   * @returns {OrderCreate}
   */
  setCustomFieldValues(customFieldValues) {
    if (!util.isInstanceOf(customFieldValues, models.CustomFieldValues) && util.isObject(customFieldValues)) {
      customFieldValues = new models.CustomFieldValues(customFieldValues);
    } else if (!util.isInstanceOf(customFieldValues, models.CustomFieldValues)) {
      throw new Error(util.format('Expected instance of CustomFieldValues or an Object but got %s',
        typeof customFieldValues));
    }

    this.customFieldValues = customFieldValues;
    return this;
  }

  /**
   * Set Shipping_Module_Code.
   * @param {string} shippingModuleCode
   * @returns {OrderCreate}
   */
  setShippingModuleCode(shippingModuleCode) {
    this.shippingModuleCode = shippingModuleCode;
    return this;
  }

  /**
   * Set Shipping_Module_Data.
   * @param {string} shippingModuleData
   * @returns {OrderCreate}
   */
  setShippingModuleData(shippingModuleData) {
    this.shippingModuleData = shippingModuleData;
    return this;
  }

  /**
   * Set CalculateCharges.
   * @param {boolean} calculateCharges
   * @returns {OrderCreate}
   */
  setCalculateCharges(calculateCharges) {
    this.calculateCharges = calculateCharges;
    return this;
  }

  /**
   * Set TriggerFulfillmentModules.
   * @param {boolean} triggerFulfillmentModules
   * @returns {OrderCreate}
   */
  setTriggerFulfillmentModules(triggerFulfillmentModules) {
    this.triggerFulfillmentModules = triggerFulfillmentModules;
    return this;
  }

  /**
   * Add Items.
   * @param {OrderItem} item
   * @throws {Error}
   * @returns {OrderCreate}
   */
  addItem(item) {
    if (util.isInstanceOf(item, models.OrderItem)) {
      this.items.push(item);
    } else if (util.isObject(item)) {
      this.items.push(new models.OrderItem(item));
    } else {
      throw new Error(util.format('Expected instance of OrderItem or Object but got %s',
        typeof item));
    }

    return this;
  }

  /**
   * Add many OrderItem.
   * @param {OrderItem[]} items
   * @throws {Error}
   * @returns {OrderCreate}
   */
  addItems(items) {
    var i;
    var l;

    if (!util.isArray(items)) {
      throw new Error(util.format('Expecting an array of OrderItem but got %s',
        typeof items));
    }

    for (i = 0, l = items.length; i < l; i++) {
      if (util.isInstanceOf(items[i], models.OrderItem)) {
        this.items.push(items[i]);
      } else if (util.isObject(items[i])) {
        this.items.push(new models.OrderItem(items[i]));
      } else {
        throw new Error(util.format('Expected array of OrderItem or an array of Object but got %s',
          typeof items[i]));
      }
    }

    return this;
  }

  /**
   * Add Products.
   * @param {OrderProduct} product
   * @throws {Error}
   * @returns {OrderCreate}
   */
  addProduct(product) {
    if (util.isInstanceOf(product, models.OrderProduct)) {
      this.products.push(product);
    } else if (util.isObject(product)) {
      this.products.push(new models.OrderProduct(product));
    } else {
      throw new Error(util.format('Expected instance of OrderProduct or Object but got %s',
        typeof product));
    }

    return this;
  }

  /**
   * Add many OrderProduct.
   * @param {OrderProduct[]} products
   * @throws {Error}
   * @returns {OrderCreate}
   */
  addProducts(products) {
    var i;
    var l;

    if (!util.isArray(products)) {
      throw new Error(util.format('Expecting an array of OrderProduct but got %s',
        typeof products));
    }

    for (i = 0, l = products.length; i < l; i++) {
      if (util.isInstanceOf(products[i], models.OrderProduct)) {
        this.products.push(products[i]);
      } else if (util.isObject(products[i])) {
        this.products.push(new models.OrderProduct(products[i]));
      } else {
        throw new Error(util.format('Expected array of OrderProduct or an array of Object but got %s',
          typeof products[i]));
      }
    }

    return this;
  }

  /**
   * Add Charges.
   * @param {OrderCharge} charge
   * @throws {Error}
   * @returns {OrderCreate}
   */
  addCharge(charge) {
    if (util.isInstanceOf(charge, models.OrderCharge)) {
      this.charges.push(charge);
    } else if (util.isObject(charge)) {
      this.charges.push(new models.OrderCharge(charge));
    } else {
      throw new Error(util.format('Expected instance of OrderCharge or Object but got %s',
        typeof charge));
    }

    return this;
  }

  /**
   * Add many OrderCharge.
   * @param {OrderCharge[]} charges
   * @throws {Error}
   * @returns {OrderCreate}
   */
  addCharges(charges) {
    var i;
    var l;

    if (!util.isArray(charges)) {
      throw new Error(util.format('Expecting an array of OrderCharge but got %s',
        typeof charges));
    }

    for (i = 0, l = charges.length; i < l; i++) {
      if (util.isInstanceOf(charges[i], models.OrderCharge)) {
        this.charges.push(charges[i]);
      } else if (util.isObject(charges[i])) {
        this.charges.push(new models.OrderCharge(charges[i]));
      } else {
        throw new Error(util.format('Expected array of OrderCharge or an array of Object but got %s',
          typeof charges[i]));
      }
    }

    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var i;
    var l;
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.customerId)) {
      data['Customer_ID'] = this.customerId;
    } else if (!util.isNullOrUndefined(this.customerLogin)) {
      data['Customer_Login'] = this.customerLogin;
    }

    if (!util.isNullOrUndefined(this.shipFirstName)) {
      data['ShipFirstName'] = this.shipFirstName;
    }

    if (!util.isNullOrUndefined(this.shipLastName)) {
      data['ShipLastName'] = this.shipLastName;
    }

    if (!util.isNullOrUndefined(this.shipEmail)) {
      data['ShipEmail'] = this.shipEmail;
    }

    if (!util.isNullOrUndefined(this.shipPhone)) {
      data['ShipPhone'] = this.shipPhone;
    }

    if (!util.isNullOrUndefined(this.shipFax)) {
      data['ShipFax'] = this.shipFax;
    }

    if (!util.isNullOrUndefined(this.shipCompany)) {
      data['ShipCompany'] = this.shipCompany;
    }

    if (!util.isNullOrUndefined(this.shipAddress1)) {
      data['ShipAddress1'] = this.shipAddress1;
    }

    if (!util.isNullOrUndefined(this.shipAddress2)) {
      data['ShipAddress2'] = this.shipAddress2;
    }

    if (!util.isNullOrUndefined(this.shipCity)) {
      data['ShipCity'] = this.shipCity;
    }

    if (!util.isNullOrUndefined(this.shipState)) {
      data['ShipState'] = this.shipState;
    }

    if (!util.isNullOrUndefined(this.shipZip)) {
      data['ShipZip'] = this.shipZip;
    }

    if (!util.isNullOrUndefined(this.shipCountry)) {
      data['ShipCountry'] = this.shipCountry;
    }

    if (!util.isNullOrUndefined(this.shipResidential)) {
      data['ShipResidential'] = this.shipResidential;
    }

    if (!util.isNullOrUndefined(this.billFirstName)) {
      data['BillFirstName'] = this.billFirstName;
    }

    if (!util.isNullOrUndefined(this.billLastName)) {
      data['BillLastName'] = this.billLastName;
    }

    if (!util.isNullOrUndefined(this.billEmail)) {
      data['BillEmail'] = this.billEmail;
    }

    if (!util.isNullOrUndefined(this.billPhone)) {
      data['BillPhone'] = this.billPhone;
    }

    if (!util.isNullOrUndefined(this.billFax)) {
      data['BillFax'] = this.billFax;
    }

    if (!util.isNullOrUndefined(this.billCompany)) {
      data['BillCompany'] = this.billCompany;
    }

    if (!util.isNullOrUndefined(this.billAddress1)) {
      data['BillAddress1'] = this.billAddress1;
    }

    if (!util.isNullOrUndefined(this.billAddress2)) {
      data['BillAddress2'] = this.billAddress2;
    }

    if (!util.isNullOrUndefined(this.billCity)) {
      data['BillCity'] = this.billCity;
    }

    if (!util.isNullOrUndefined(this.billState)) {
      data['BillState'] = this.billState;
    }

    if (!util.isNullOrUndefined(this.billZip)) {
      data['BillZip'] = this.billZip;
    }

    if (!util.isNullOrUndefined(this.billCountry)) {
      data['BillCountry'] = this.billCountry;
    }

    if (util.isArray(this.items)) {
      data['Items'] = [];

      for (i = 0, l = this.items.length; i < l; i++) {
        if (util.isObject(this.items[i])) {
            data['Items'].push(this.items[i].toObject());
        }
      }
    }

    if (util.isArray(this.products)) {
      data['Products'] = [];

      for (i = 0, l = this.products.length; i < l; i++) {
        if (util.isObject(this.products[i])) {
            data['Products'].push(this.products[i].toObject());
        }
      }
    }

    if (util.isArray(this.charges)) {
      data['Charges'] = [];

      for (i = 0, l = this.charges.length; i < l; i++) {
        if (util.isObject(this.charges[i])) {
            data['Charges'].push(this.charges[i].toObject());
        }
      }
    }

    if (this.customFieldValues && util.isObject(this.customFieldValues)) {
      data['CustomField_Values'] = this.customFieldValues.toObject();
    }

    if (!util.isNullOrUndefined(this.shippingModuleCode)) {
      data['Shipping_Module_Code'] = this.shippingModuleCode;
    }

    if (!util.isNullOrUndefined(this.shippingModuleData)) {
      data['Shipping_Module_Data'] = this.shippingModuleData;
    }

    if (!util.isNullOrUndefined(this.calculateCharges)) {
      data['CalculateCharges'] = this.calculateCharges;
    }

    if (!util.isNullOrUndefined(this.triggerFulfillmentModules)) {
      data['TriggerFulfillmentModules'] = this.triggerFulfillmentModules;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.OrderCreate(this, data);
  }
}

/** 
 * Handles API Request Order_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/order_delete
 */
class OrderDelete extends Request {
  /**
   * OrderDelete Constructor.
   * @param {?Client} client
   * @param {?Order} order
   */
  constructor(client, order = null) {
    super(client);
    this.function = 'Order_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.orderId = null;

    if (util.isInstanceOf(order, models.Order)) {
      this.setOrderId(order.getId());
    }
  }

  /**
   * Get Order_ID.
   * @returns {number}
   */
  getOrderId() {
    return this.orderId;
  }

  /**
   * Set Order_ID.
   * @param {number} orderId
   * @returns {OrderDelete}
   */
  setOrderId(orderId) {
    this.orderId = orderId;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['Order_ID'] = this.orderId;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.OrderDelete(this, data);
  }
}

/** 
 * Handles API Request Order_Update_Customer_Information. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/order_update_customer_information
 */
class OrderUpdateCustomerInformation extends Request {
  /**
   * OrderUpdateCustomerInformation Constructor.
   * @param {?Client} client
   * @param {?Order} order
   */
  constructor(client, order = null) {
    super(client);
    this.function = 'Order_Update_Customer_Information';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.orderId = null;
    this.customerId = null;
    this.shipResidential = null;
    this.shipFirstName = null;
    this.shipLastName = null;
    this.shipEmail = null;
    this.shipPhone = null;
    this.shipFax = null;
    this.shipCompany = null;
    this.shipAddress1 = null;
    this.shipAddress2 = null;
    this.shipCity = null;
    this.shipState = null;
    this.shipZip = null;
    this.shipCountry = null;
    this.billFirstName = null;
    this.billLastName = null;
    this.billEmail = null;
    this.billPhone = null;
    this.billFax = null;
    this.billCompany = null;
    this.billAddress1 = null;
    this.billAddress2 = null;
    this.billCity = null;
    this.billState = null;
    this.billZip = null;
    this.billCountry = null;

    if (util.isInstanceOf(order, models.Order)) {
      this.setOrderId(order.getId());
    }
  }

  /**
   * Get Order_ID.
   * @returns {number}
   */
  getOrderId() {
    return this.orderId;
  }

  /**
   * Get Customer_ID.
   * @returns {number}
   */
  getCustomerId() {
    return this.customerId;
  }

  /**
   * Get Ship_Residential.
   * @returns {boolean}
   */
  getShipResidential() {
    return this.shipResidential;
  }

  /**
   * Get Ship_FirstName.
   * @returns {string}
   */
  getShipFirstName() {
    return this.shipFirstName;
  }

  /**
   * Get Ship_LastName.
   * @returns {string}
   */
  getShipLastName() {
    return this.shipLastName;
  }

  /**
   * Get Ship_Email.
   * @returns {string}
   */
  getShipEmail() {
    return this.shipEmail;
  }

  /**
   * Get Ship_Phone.
   * @returns {string}
   */
  getShipPhone() {
    return this.shipPhone;
  }

  /**
   * Get Ship_Fax.
   * @returns {string}
   */
  getShipFax() {
    return this.shipFax;
  }

  /**
   * Get Ship_Company.
   * @returns {string}
   */
  getShipCompany() {
    return this.shipCompany;
  }

  /**
   * Get Ship_Address1.
   * @returns {string}
   */
  getShipAddress1() {
    return this.shipAddress1;
  }

  /**
   * Get Ship_Address2.
   * @returns {string}
   */
  getShipAddress2() {
    return this.shipAddress2;
  }

  /**
   * Get Ship_City.
   * @returns {string}
   */
  getShipCity() {
    return this.shipCity;
  }

  /**
   * Get Ship_State.
   * @returns {string}
   */
  getShipState() {
    return this.shipState;
  }

  /**
   * Get Ship_Zip.
   * @returns {string}
   */
  getShipZip() {
    return this.shipZip;
  }

  /**
   * Get Ship_Country.
   * @returns {string}
   */
  getShipCountry() {
    return this.shipCountry;
  }

  /**
   * Get Bill_FirstName.
   * @returns {string}
   */
  getBillFirstName() {
    return this.billFirstName;
  }

  /**
   * Get Bill_LastName.
   * @returns {string}
   */
  getBillLastName() {
    return this.billLastName;
  }

  /**
   * Get Bill_Email.
   * @returns {string}
   */
  getBillEmail() {
    return this.billEmail;
  }

  /**
   * Get Bill_Phone.
   * @returns {string}
   */
  getBillPhone() {
    return this.billPhone;
  }

  /**
   * Get Bill_Fax.
   * @returns {string}
   */
  getBillFax() {
    return this.billFax;
  }

  /**
   * Get Bill_Company.
   * @returns {string}
   */
  getBillCompany() {
    return this.billCompany;
  }

  /**
   * Get Bill_Address1.
   * @returns {string}
   */
  getBillAddress1() {
    return this.billAddress1;
  }

  /**
   * Get Bill_Address2.
   * @returns {string}
   */
  getBillAddress2() {
    return this.billAddress2;
  }

  /**
   * Get Bill_City.
   * @returns {string}
   */
  getBillCity() {
    return this.billCity;
  }

  /**
   * Get Bill_State.
   * @returns {string}
   */
  getBillState() {
    return this.billState;
  }

  /**
   * Get Bill_Zip.
   * @returns {string}
   */
  getBillZip() {
    return this.billZip;
  }

  /**
   * Get Bill_Country.
   * @returns {string}
   */
  getBillCountry() {
    return this.billCountry;
  }

  /**
   * Set Order_ID.
   * @param {number} orderId
   * @returns {OrderUpdateCustomerInformation}
   */
  setOrderId(orderId) {
    this.orderId = orderId;
    return this;
  }

  /**
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {OrderUpdateCustomerInformation}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
    return this;
  }

  /**
   * Set Ship_Residential.
   * @param {boolean} shipResidential
   * @returns {OrderUpdateCustomerInformation}
   */
  setShipResidential(shipResidential) {
    this.shipResidential = shipResidential;
    return this;
  }

  /**
   * Set Ship_FirstName.
   * @param {string} shipFirstName
   * @returns {OrderUpdateCustomerInformation}
   */
  setShipFirstName(shipFirstName) {
    this.shipFirstName = shipFirstName;
    return this;
  }

  /**
   * Set Ship_LastName.
   * @param {string} shipLastName
   * @returns {OrderUpdateCustomerInformation}
   */
  setShipLastName(shipLastName) {
    this.shipLastName = shipLastName;
    return this;
  }

  /**
   * Set Ship_Email.
   * @param {string} shipEmail
   * @returns {OrderUpdateCustomerInformation}
   */
  setShipEmail(shipEmail) {
    this.shipEmail = shipEmail;
    return this;
  }

  /**
   * Set Ship_Phone.
   * @param {string} shipPhone
   * @returns {OrderUpdateCustomerInformation}
   */
  setShipPhone(shipPhone) {
    this.shipPhone = shipPhone;
    return this;
  }

  /**
   * Set Ship_Fax.
   * @param {string} shipFax
   * @returns {OrderUpdateCustomerInformation}
   */
  setShipFax(shipFax) {
    this.shipFax = shipFax;
    return this;
  }

  /**
   * Set Ship_Company.
   * @param {string} shipCompany
   * @returns {OrderUpdateCustomerInformation}
   */
  setShipCompany(shipCompany) {
    this.shipCompany = shipCompany;
    return this;
  }

  /**
   * Set Ship_Address1.
   * @param {string} shipAddress1
   * @returns {OrderUpdateCustomerInformation}
   */
  setShipAddress1(shipAddress1) {
    this.shipAddress1 = shipAddress1;
    return this;
  }

  /**
   * Set Ship_Address2.
   * @param {string} shipAddress2
   * @returns {OrderUpdateCustomerInformation}
   */
  setShipAddress2(shipAddress2) {
    this.shipAddress2 = shipAddress2;
    return this;
  }

  /**
   * Set Ship_City.
   * @param {string} shipCity
   * @returns {OrderUpdateCustomerInformation}
   */
  setShipCity(shipCity) {
    this.shipCity = shipCity;
    return this;
  }

  /**
   * Set Ship_State.
   * @param {string} shipState
   * @returns {OrderUpdateCustomerInformation}
   */
  setShipState(shipState) {
    this.shipState = shipState;
    return this;
  }

  /**
   * Set Ship_Zip.
   * @param {string} shipZip
   * @returns {OrderUpdateCustomerInformation}
   */
  setShipZip(shipZip) {
    this.shipZip = shipZip;
    return this;
  }

  /**
   * Set Ship_Country.
   * @param {string} shipCountry
   * @returns {OrderUpdateCustomerInformation}
   */
  setShipCountry(shipCountry) {
    this.shipCountry = shipCountry;
    return this;
  }

  /**
   * Set Bill_FirstName.
   * @param {string} billFirstName
   * @returns {OrderUpdateCustomerInformation}
   */
  setBillFirstName(billFirstName) {
    this.billFirstName = billFirstName;
    return this;
  }

  /**
   * Set Bill_LastName.
   * @param {string} billLastName
   * @returns {OrderUpdateCustomerInformation}
   */
  setBillLastName(billLastName) {
    this.billLastName = billLastName;
    return this;
  }

  /**
   * Set Bill_Email.
   * @param {string} billEmail
   * @returns {OrderUpdateCustomerInformation}
   */
  setBillEmail(billEmail) {
    this.billEmail = billEmail;
    return this;
  }

  /**
   * Set Bill_Phone.
   * @param {string} billPhone
   * @returns {OrderUpdateCustomerInformation}
   */
  setBillPhone(billPhone) {
    this.billPhone = billPhone;
    return this;
  }

  /**
   * Set Bill_Fax.
   * @param {string} billFax
   * @returns {OrderUpdateCustomerInformation}
   */
  setBillFax(billFax) {
    this.billFax = billFax;
    return this;
  }

  /**
   * Set Bill_Company.
   * @param {string} billCompany
   * @returns {OrderUpdateCustomerInformation}
   */
  setBillCompany(billCompany) {
    this.billCompany = billCompany;
    return this;
  }

  /**
   * Set Bill_Address1.
   * @param {string} billAddress1
   * @returns {OrderUpdateCustomerInformation}
   */
  setBillAddress1(billAddress1) {
    this.billAddress1 = billAddress1;
    return this;
  }

  /**
   * Set Bill_Address2.
   * @param {string} billAddress2
   * @returns {OrderUpdateCustomerInformation}
   */
  setBillAddress2(billAddress2) {
    this.billAddress2 = billAddress2;
    return this;
  }

  /**
   * Set Bill_City.
   * @param {string} billCity
   * @returns {OrderUpdateCustomerInformation}
   */
  setBillCity(billCity) {
    this.billCity = billCity;
    return this;
  }

  /**
   * Set Bill_State.
   * @param {string} billState
   * @returns {OrderUpdateCustomerInformation}
   */
  setBillState(billState) {
    this.billState = billState;
    return this;
  }

  /**
   * Set Bill_Zip.
   * @param {string} billZip
   * @returns {OrderUpdateCustomerInformation}
   */
  setBillZip(billZip) {
    this.billZip = billZip;
    return this;
  }

  /**
   * Set Bill_Country.
   * @param {string} billCountry
   * @returns {OrderUpdateCustomerInformation}
   */
  setBillCountry(billCountry) {
    this.billCountry = billCountry;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['Order_ID'] = this.orderId;

    if (!util.isNullOrUndefined(this.customerId)) {
      data['Customer_ID'] = this.customerId;
    }

    if (!util.isNullOrUndefined(this.shipResidential)) {
      data['Ship_Residential'] = this.shipResidential;
    }

    if (!util.isNullOrUndefined(this.shipFirstName)) {
      data['Ship_FirstName'] = this.shipFirstName;
    }

    if (!util.isNullOrUndefined(this.shipLastName)) {
      data['Ship_LastName'] = this.shipLastName;
    }

    if (!util.isNullOrUndefined(this.shipEmail)) {
      data['Ship_Email'] = this.shipEmail;
    }

    if (!util.isNullOrUndefined(this.shipPhone)) {
      data['Ship_Phone'] = this.shipPhone;
    }

    if (!util.isNullOrUndefined(this.shipFax)) {
      data['Ship_Fax'] = this.shipFax;
    }

    if (!util.isNullOrUndefined(this.shipCompany)) {
      data['Ship_Company'] = this.shipCompany;
    }

    if (!util.isNullOrUndefined(this.shipAddress1)) {
      data['Ship_Address1'] = this.shipAddress1;
    }

    if (!util.isNullOrUndefined(this.shipAddress2)) {
      data['Ship_Address2'] = this.shipAddress2;
    }

    if (!util.isNullOrUndefined(this.shipCity)) {
      data['Ship_City'] = this.shipCity;
    }

    if (!util.isNullOrUndefined(this.shipState)) {
      data['Ship_State'] = this.shipState;
    }

    if (!util.isNullOrUndefined(this.shipZip)) {
      data['Ship_Zip'] = this.shipZip;
    }

    if (!util.isNullOrUndefined(this.shipCountry)) {
      data['Ship_Country'] = this.shipCountry;
    }

    if (!util.isNullOrUndefined(this.billFirstName)) {
      data['Bill_FirstName'] = this.billFirstName;
    }

    if (!util.isNullOrUndefined(this.billLastName)) {
      data['Bill_LastName'] = this.billLastName;
    }

    if (!util.isNullOrUndefined(this.billEmail)) {
      data['Bill_Email'] = this.billEmail;
    }

    if (!util.isNullOrUndefined(this.billPhone)) {
      data['Bill_Phone'] = this.billPhone;
    }

    if (!util.isNullOrUndefined(this.billFax)) {
      data['Bill_Fax'] = this.billFax;
    }

    if (!util.isNullOrUndefined(this.billCompany)) {
      data['Bill_Company'] = this.billCompany;
    }

    if (!util.isNullOrUndefined(this.billAddress1)) {
      data['Bill_Address1'] = this.billAddress1;
    }

    if (!util.isNullOrUndefined(this.billAddress2)) {
      data['Bill_Address2'] = this.billAddress2;
    }

    if (!util.isNullOrUndefined(this.billCity)) {
      data['Bill_City'] = this.billCity;
    }

    if (!util.isNullOrUndefined(this.billState)) {
      data['Bill_State'] = this.billState;
    }

    if (!util.isNullOrUndefined(this.billZip)) {
      data['Bill_Zip'] = this.billZip;
    }

    if (!util.isNullOrUndefined(this.billCountry)) {
      data['Bill_Country'] = this.billCountry;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.OrderUpdateCustomerInformation(this, data);
  }
}

/** 
 * Handles API Request PriceGroupCustomer_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/pricegroupcustomer_update_assigned
 */
class PriceGroupCustomerUpdateAssigned extends Request {
  /**
   * PriceGroupCustomerUpdateAssigned Constructor.
   * @param {?Client} client
   * @param {?PriceGroup} priceGroup
   */
  constructor(client, priceGroup = null) {
    super(client);
    this.function = 'PriceGroupCustomer_Update_Assigned';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.priceGroupId = null;
    this.priceGroupName = null;
    this.editCustomer = null;
    this.customerId = null;
    this.customerLogin = null;
    this.assigned = null;

    if (util.isInstanceOf(priceGroup, models.PriceGroup)) {
      if (priceGroup.getId()) {
        this.setPriceGroupId(priceGroup.getId());
      } else if (priceGroup.getName()) {
        this.setPriceGroupName(priceGroup.getName());
      }
    }
  }

  /**
   * Get PriceGroup_ID.
   * @returns {number}
   */
  getPriceGroupId() {
    return this.priceGroupId;
  }

  /**
   * Get PriceGroup_Name.
   * @returns {string}
   */
  getPriceGroupName() {
    return this.priceGroupName;
  }

  /**
   * Get Edit_Customer.
   * @returns {string}
   */
  getEditCustomer() {
    return this.editCustomer;
  }

  /**
   * Get Customer_ID.
   * @returns {number}
   */
  getCustomerId() {
    return this.customerId;
  }

  /**
   * Get Customer_Login.
   * @returns {string}
   */
  getCustomerLogin() {
    return this.customerLogin;
  }

  /**
   * Get Assigned.
   * @returns {boolean}
   */
  getAssigned() {
    return this.assigned;
  }

  /**
   * Set PriceGroup_ID.
   * @param {number} priceGroupId
   * @returns {PriceGroupCustomerUpdateAssigned}
   */
  setPriceGroupId(priceGroupId) {
    this.priceGroupId = priceGroupId;
    return this;
  }

  /**
   * Set PriceGroup_Name.
   * @param {string} priceGroupName
   * @returns {PriceGroupCustomerUpdateAssigned}
   */
  setPriceGroupName(priceGroupName) {
    this.priceGroupName = priceGroupName;
    return this;
  }

  /**
   * Set Edit_Customer.
   * @param {string} editCustomer
   * @returns {PriceGroupCustomerUpdateAssigned}
   */
  setEditCustomer(editCustomer) {
    this.editCustomer = editCustomer;
    return this;
  }

  /**
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {PriceGroupCustomerUpdateAssigned}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
    return this;
  }

  /**
   * Set Customer_Login.
   * @param {string} customerLogin
   * @returns {PriceGroupCustomerUpdateAssigned}
   */
  setCustomerLogin(customerLogin) {
    this.customerLogin = customerLogin;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {PriceGroupCustomerUpdateAssigned}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.priceGroupId)) {
      data['PriceGroup_ID'] = this.priceGroupId;
    } else if (!util.isNullOrUndefined(this.priceGroupName)) {
      data['PriceGroup_Name'] = this.priceGroupName;
    }

    if (!util.isNullOrUndefined(this.customerId)) {
      data['Customer_ID'] = this.customerId;
    } else if (!util.isNullOrUndefined(this.editCustomer)) {
      data['Edit_Customer'] = this.editCustomer;
    } else if (!util.isNullOrUndefined(this.customerLogin)) {
      data['Customer_Login'] = this.customerLogin;
    }

    if (!util.isNullOrUndefined(this.assigned)) {
      data['Assigned'] = this.assigned;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.PriceGroupCustomerUpdateAssigned(this, data);
  }
}

/** 
 * Handles API Request PriceGroupList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/pricegrouplist_load_query
 */
class PriceGroupListLoadQuery extends ListQueryRequest {
  /**
   * PriceGroupListLoadQuery Constructor.
   * @param {?Client} client
   */
  constructor(client) {
    super(client);
    this.function = 'PriceGroupList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'name',
      'type',
      'module_id',
      'custscope',
      'rate',
      'discount',
      'markup',
      'dt_start',
      'dt_end',
      'priority',
      'exclusion',
      'descrip',
      'display',
      'qmn_subtot',
      'qmx_subtot',
      'qmn_quan',
      'qmx_quan',
      'qmn_weight',
      'qmx_weight',
      'bmn_subtot',
      'bmx_subtot',
      'bmn_quan',
      'bmx_quan',
      'bmn_weight',
      'bmx_weight'
    ];

    this.availableSortFields = [
      'id',
      'name',
      'type',
      'module_id',
      'custscope',
      'rate',
      'discount',
      'markup',
      'dt_start',
      'dt_end',
      'priority',
      'exclusion',
      'descrip',
      'display',
      'qmn_subtot',
      'qmx_subtot',
      'qmn_quan',
      'qmx_quan',
      'qmn_weight',
      'qmx_weight',
      'bmn_subtot',
      'bmx_subtot',
      'bmn_quan',
      'bmx_quan',
      'bmn_weight',
      'bmx_weight'
    ];
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.PriceGroupListLoadQuery(this, data);
  }
}

/** 
 * Handles API Request PriceGroupProduct_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/pricegroupproduct_update_assigned
 */
class PriceGroupProductUpdateAssigned extends Request {
  /**
   * PriceGroupProductUpdateAssigned Constructor.
   * @param {?Client} client
   * @param {?PriceGroup} priceGroup
   */
  constructor(client, priceGroup = null) {
    super(client);
    this.function = 'PriceGroupProduct_Update_Assigned';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.priceGroupId = null;
    this.priceGroupName = null;
    this.editProduct = null;
    this.productId = null;
    this.productCode = null;
    this.productSku = null;
    this.assigned = null;

    if (util.isInstanceOf(priceGroup, models.PriceGroup)) {
      if (priceGroup.getId()) {
        this.setPriceGroupId(priceGroup.getId());
      } else if (priceGroup.getName()) {
        this.setPriceGroupName(priceGroup.getName());
      }

      this.setPriceGroupName(priceGroup.getName());
    }
  }

  /**
   * Get PriceGroup_ID.
   * @returns {number}
   */
  getPriceGroupId() {
    return this.priceGroupId;
  }

  /**
   * Get PriceGroup_Name.
   * @returns {string}
   */
  getPriceGroupName() {
    return this.priceGroupName;
  }

  /**
   * Get Edit_Product.
   * @returns {string}
   */
  getEditProduct() {
    return this.editProduct;
  }

  /**
   * Get Product_ID.
   * @returns {number}
   */
  getProductId() {
    return this.productId;
  }

  /**
   * Get Product_Code.
   * @returns {string}
   */
  getProductCode() {
    return this.productCode;
  }

  /**
   * Get Product_SKU.
   * @returns {string}
   */
  getProductSku() {
    return this.productSku;
  }

  /**
   * Get Assigned.
   * @returns {boolean}
   */
  getAssigned() {
    return this.assigned;
  }

  /**
   * Set PriceGroup_ID.
   * @param {number} priceGroupId
   * @returns {PriceGroupProductUpdateAssigned}
   */
  setPriceGroupId(priceGroupId) {
    this.priceGroupId = priceGroupId;
    return this;
  }

  /**
   * Set PriceGroup_Name.
   * @param {string} priceGroupName
   * @returns {PriceGroupProductUpdateAssigned}
   */
  setPriceGroupName(priceGroupName) {
    this.priceGroupName = priceGroupName;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {PriceGroupProductUpdateAssigned}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {PriceGroupProductUpdateAssigned}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {PriceGroupProductUpdateAssigned}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Product_SKU.
   * @param {string} productSku
   * @returns {PriceGroupProductUpdateAssigned}
   */
  setProductSku(productSku) {
    this.productSku = productSku;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {PriceGroupProductUpdateAssigned}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.priceGroupId)) {
      data['PriceGroup_ID'] = this.priceGroupId;
    } else if (!util.isNullOrUndefined(this.priceGroupName)) {
      data['PriceGroup_Name'] = this.priceGroupName;
    }

    if (!util.isNullOrUndefined(this.productId)) {
      data['Product_ID'] = this.productId;
    } else if (!util.isNullOrUndefined(this.editProduct)) {
      data['Edit_Product'] = this.editProduct;
    } else if (!util.isNullOrUndefined(this.productId)) {
      data['Product_ID'] = this.productId;
    } else if (!util.isNullOrUndefined(this.productCode)) {
      data['Product_Code'] = this.productCode;
    } else if (!util.isNullOrUndefined(this.productSku)) {
      data['Product_SKU'] = this.productSku;
    }

    if (!util.isNullOrUndefined(this.priceGroupName)) {
      data['PriceGroup_Name'] = this.priceGroupName;
    }

    if (!util.isNullOrUndefined(this.assigned)) {
      data['Assigned'] = this.assigned;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.PriceGroupProductUpdateAssigned(this, data);
  }
}

/** 
 * Handles API Request ProductImage_Add. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/productimage_add
 */
class ProductImageAdd extends Request {
  /**
   * ProductImageAdd Constructor.
   * @param {?Client} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client);
    this.function = 'ProductImage_Add';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productCode = null;
    this.productId = null;
    this.editProduct = null;
    this.productSku = null;
    this.filepath = null;
    this.imageTypeId = null;

    if (util.isInstanceOf(product, models.Product)) {
      if (product.getId()) {
        this.setProductId(product.getId());
      } else if (product.getCode()) {
        this.setEditProduct(product.getCode());
      } else if (product.getSku()) {
        this.setProductSku(product.getSku());
      }
    }
  }

  /**
   * Get Product_Code.
   * @returns {string}
   */
  getProductCode() {
    return this.productCode;
  }

  /**
   * Get Product_ID.
   * @returns {number}
   */
  getProductId() {
    return this.productId;
  }

  /**
   * Get Edit_Product.
   * @returns {string}
   */
  getEditProduct() {
    return this.editProduct;
  }

  /**
   * Get Product_SKU.
   * @returns {string}
   */
  getProductSku() {
    return this.productSku;
  }

  /**
   * Get Filepath.
   * @returns {string}
   */
  getFilepath() {
    return this.filepath;
  }

  /**
   * Get ImageType_ID.
   * @returns {number}
   */
  getImageTypeId() {
    return this.imageTypeId;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {ProductImageAdd}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {ProductImageAdd}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {ProductImageAdd}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Product_SKU.
   * @param {string} productSku
   * @returns {ProductImageAdd}
   */
  setProductSku(productSku) {
    this.productSku = productSku;
    return this;
  }

  /**
   * Set Filepath.
   * @param {string} filepath
   * @returns {ProductImageAdd}
   */
  setFilepath(filepath) {
    this.filepath = filepath;
    return this;
  }

  /**
   * Set ImageType_ID.
   * @param {number} imageTypeId
   * @returns {ProductImageAdd}
   */
  setImageTypeId(imageTypeId) {
    this.imageTypeId = imageTypeId;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.productId)) {
      data['Product_ID'] = this.productId;
    } else if (!util.isNullOrUndefined(this.editProduct)) {
      data['Edit_Product'] = this.editProduct;
    } else if (!util.isNullOrUndefined(this.productCode)) {
      data['Product_Code'] = this.productCode;
    } else if (!util.isNullOrUndefined(this.productSku)) {
      data['Product_SKU'] = this.productSku;
    }

    data['Filepath'] = this.filepath;

    data['ImageType_ID'] = this.imageTypeId;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.ProductImageAdd(this, data);
  }
}

/** 
 * Handles API Request ProductImage_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/productimage_delete
 */
class ProductImageDelete extends Request {
  /**
   * ProductImageDelete Constructor.
   * @param {?Client} client
   * @param {?ProductImageData} productImageData
   */
  constructor(client, productImageData = null) {
    super(client);
    this.function = 'ProductImage_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productImageId = null;

    if (util.isInstanceOf(productImageData, models.ProductImageData)) {
      this.setProductImageId(productImageData.getId());
    }
  }

  /**
   * Get ProductImage_ID.
   * @returns {number}
   */
  getProductImageId() {
    return this.productImageId;
  }

  /**
   * Set ProductImage_ID.
   * @param {number} productImageId
   * @returns {ProductImageDelete}
   */
  setProductImageId(productImageId) {
    this.productImageId = productImageId;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['ProductImage_ID'] = this.productImageId;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.ProductImageDelete(this, data);
  }
}

/** 
 * Handles API Request ProductList_Adjust_Inventory. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/productlist_adjust_inventory
 */
class ProductListAdjustInventory extends Request {
  /**
   * ProductListAdjustInventory Constructor.
   * @param {?Client} client
   */
  constructor(client) {
    super(client);
    this.function = 'ProductList_Adjust_Inventory';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.inventoryAdjustments = [];
  }

  /**
   * Get Inventory_Adjustments.
   * @returns {ProductInventoryAdjustment[]}
   */
  getInventoryAdjustments() {
    return this.inventoryAdjustments;
  }

  /**
   * Set Inventory_Adjustments.
   * @param {ProductInventoryAdjustment[]} inventoryAdjustments
   * @throws {Error}
   * @returns {ProductListAdjustInventory}
   */
  setInventoryAdjustments(inventoryAdjustments) {
    var i;
    var l;

    if (!util.isArray(inventoryAdjustments)) {
      throw new Error(util.format('Expected an array but got %s', typeof inventoryAdjustments));
    }

    for (i = 0, l = inventoryAdjustments.length; i < l; i++) {
      if (!util.isInstanceOf(inventoryAdjustments[i], models.ProductInventoryAdjustment) && util.isObject(inventoryAdjustments[i])) {
        inventoryAdjustments[i] = new models.ProductInventoryAdjustment(inventoryAdjustments[i]);
      } else if (!util.isInstanceOf(inventoryAdjustments[i], models.ProductInventoryAdjustment)) {
        throw new Error(util.format('Expected instance of ProductInventoryAdjustment or an Object but got %s',
          typeof inventoryAdjustments[i]));
      }
    }

    this.inventoryAdjustments = inventoryAdjustments;
    return this;
  }

  /**
   * Add Inventory_Adjustments.
   * @param {ProductInventoryAdjustment} inventoryAdjustment
   * @throws {Error}
   * @returns {ProductListAdjustInventory}
   */
  addInventoryAdjustment(inventoryAdjustment) {
    if (util.isInstanceOf(inventoryAdjustment, models.ProductInventoryAdjustment)) {
      this.inventoryAdjustments.push(inventoryAdjustment);
    } else if (util.isObject(inventoryAdjustment)) {
      this.inventoryAdjustments.push(new models.ProductInventoryAdjustment(inventoryAdjustment));
    } else {
      throw new Error(util.format('Expected instance of ProductInventoryAdjustment or Object but got %s',
        typeof inventoryAdjustment));
    }

    return this;
  }

  /**
   * Add many ProductInventoryAdjustment.
   * @param {ProductInventoryAdjustment[]} inventoryAdjustments
   * @throws {Error}
   * @returns {ProductListAdjustInventory}
   */
  addInventoryAdjustments(inventoryAdjustments) {
    var i;
    var l;

    if (!util.isArray(inventoryAdjustments)) {
      throw new Error(util.format('Expecting an array of ProductInventoryAdjustment but got %s',
        typeof inventoryAdjustments));
    }

    for (i = 0, l = inventoryAdjustments.length; i < l; i++) {
      if (util.isInstanceOf(inventoryAdjustments[i], models.ProductInventoryAdjustment)) {
        this.inventoryAdjustments.push(inventoryAdjustments[i]);
      } else if (util.isObject(inventoryAdjustments[i])) {
        this.inventoryAdjustments.push(new models.ProductInventoryAdjustment(inventoryAdjustments[i]));
      } else {
        throw new Error(util.format('Expected array of ProductInventoryAdjustment or an array of Object but got %s',
          typeof inventoryAdjustments[i]));
      }
    }

    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var i;
    var l;
    var data = super.toObject();

    if (util.isArray(this.inventoryAdjustments)) {
      data['Inventory_Adjustments'] = [];

      for (i = 0, l = this.inventoryAdjustments.length; i < l; i++) {
        data['Inventory_Adjustments'].push(this.inventoryAdjustments[i].toObject());
      }
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.ProductListAdjustInventory(this, data);
  }
}

/** PRODUCT_SHOW constants. */
/** @ignore */
const PRODUCT_SHOW_ALL = 'All';
/** @ignore */
const PRODUCT_SHOW_UNCATEGORIZED = 'Uncategorized';
/** @ignore */
const PRODUCT_SHOW_ACTIVE = 'Active';

/** 
 * Handles API Request ProductList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/productlist_load_query
 */
class ProductListLoadQuery extends ListQueryRequest {
  /**
   * ProductListLoadQuery Constructor.
   * @param {?Client} client
   */
  constructor(client) {
    super(client);
    this.function = 'ProductList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'code',
      'sku',
      'cancat_code',
      'page_code',
      'name',
      'thumbnail',
      'image',
      'price',
      'cost',
      'descrip',
      'weight',
      'taxable',
      'active',
      'page_title',
      'dt_created',
      'dt_updated',
      'category',
      'product_inventory'
    ];

    this.availableSortFields = [
      'id',
      'code',
      'sku',
      'cancat_code',
      'page_code',
      'name',
      'thumbnail',
      'image',
      'price',
      'cost',
      'descrip',
      'weight',
      'taxable',
      'active',
      'page_title',
      'dt_created',
      'dt_updated'
    ];

    this.availableOnDemandColumns = [
      'descrip',
      'catcount',
      'productinventorysettings',
      'attributes',
      'productimagedata',
      'categories',
      'productshippingrules',
      'relatedproducts',
      'uris'
    ];

    this.availableCustomFilters = {
      Product_Show : [
          PRODUCT_SHOW_ALL,
          PRODUCT_SHOW_UNCATEGORIZED,
          PRODUCT_SHOW_ACTIVE
      ],
    };
  }

  /**
   * Constant PRODUCT_SHOW_ALL
   * @returns {string}
   * @const
   * @static
   */
  static get PRODUCT_SHOW_ALL() {
    return PRODUCT_SHOW_ALL;
  }

  /**
   * Constant PRODUCT_SHOW_UNCATEGORIZED
   * @returns {string}
   * @const
   * @static
   */
  static get PRODUCT_SHOW_UNCATEGORIZED() {
    return PRODUCT_SHOW_UNCATEGORIZED;
  }

  /**
   * Constant PRODUCT_SHOW_ACTIVE
   * @returns {string}
   * @const
   * @static
   */
  static get PRODUCT_SHOW_ACTIVE() {
    return PRODUCT_SHOW_ACTIVE;
  }
  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.ProductListLoadQuery(this, data);
  }
}

/** 
 * Handles API Request ProductVariantList_Load_Product. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/productvariantlist_load_product
 */
class ProductVariantListLoadProduct extends Request {
  /**
   * ProductVariantListLoadProduct Constructor.
   * @param {?Client} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client);
    this.function = 'ProductVariantList_Load_Product';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productId = null;
    this.productCode = null;
    this.editProduct = null;
    this.productSku = null;
    this.includeDefaultVariant = null;
    this.limits = [];
    this.exclusions = [];

    if (util.isInstanceOf(product, models.Product)) {
      if (product.getId()) {
        this.setProductId(product.getId());
      } else if (product.getCode()) {
        this.setEditProduct(product.getCode());
      } else if (product.getSku()) {
        this.setProductSku(product.getSku());
      }
    }
  }

  /**
   * Get Product_ID.
   * @returns {number}
   */
  getProductId() {
    return this.productId;
  }

  /**
   * Get Product_Code.
   * @returns {string}
   */
  getProductCode() {
    return this.productCode;
  }

  /**
   * Get Edit_Product.
   * @returns {string}
   */
  getEditProduct() {
    return this.editProduct;
  }

  /**
   * Get Product_SKU.
   * @returns {string}
   */
  getProductSku() {
    return this.productSku;
  }

  /**
   * Get Include_Default_Variant.
   * @returns {boolean}
   */
  getIncludeDefaultVariant() {
    return this.includeDefaultVariant;
  }

  /**
   * Get Limits.
   * @returns {ProductVariantLimit[]}
   */
  getLimits() {
    return this.limits;
  }

  /**
   * Get Exclusions.
   * @returns {ProductVariantExclusion[]}
   */
  getExclusions() {
    return this.exclusions;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {ProductVariantListLoadProduct}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {ProductVariantListLoadProduct}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {ProductVariantListLoadProduct}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Product_SKU.
   * @param {string} productSku
   * @returns {ProductVariantListLoadProduct}
   */
  setProductSku(productSku) {
    this.productSku = productSku;
    return this;
  }

  /**
   * Set Include_Default_Variant.
   * @param {boolean} includeDefaultVariant
   * @returns {ProductVariantListLoadProduct}
   */
  setIncludeDefaultVariant(includeDefaultVariant) {
    this.includeDefaultVariant = includeDefaultVariant;
    return this;
  }

  /**
   * Set Limits.
   * @param {ProductVariantLimit[]} limits
   * @throws {Error}
   * @returns {ProductVariantListLoadProduct}
   */
  setLimits(limits) {
    var i;
    var l;

    if (!util.isArray(limits)) {
      throw new Error(util.format('Expected an array but got %s', typeof limits));
    }

    for (i = 0, l = limits.length; i < l; i++) {
      if (!util.isInstanceOf(limits[i], models.ProductVariantLimit) && util.isObject(limits[i])) {
        limits[i] = new models.ProductVariantLimit(limits[i]);
      } else if (!util.isInstanceOf(limits[i], models.ProductVariantLimit)) {
        throw new Error(util.format('Expected instance of ProductVariantLimit or an Object but got %s',
          typeof limits[i]));
      }
    }

    this.limits = limits;
    return this;
  }

  /**
   * Set Exclusions.
   * @param {ProductVariantExclusion[]} exclusions
   * @throws {Error}
   * @returns {ProductVariantListLoadProduct}
   */
  setExclusions(exclusions) {
    var i;
    var l;

    if (!util.isArray(exclusions)) {
      throw new Error(util.format('Expected an array but got %s', typeof exclusions));
    }

    for (i = 0, l = exclusions.length; i < l; i++) {
      if (!util.isInstanceOf(exclusions[i], models.ProductVariantExclusion) && util.isObject(exclusions[i])) {
        exclusions[i] = new models.ProductVariantExclusion(exclusions[i]);
      } else if (!util.isInstanceOf(exclusions[i], models.ProductVariantExclusion)) {
        throw new Error(util.format('Expected instance of ProductVariantExclusion or an Object but got %s',
          typeof exclusions[i]));
      }
    }

    this.exclusions = exclusions;
    return this;
  }

  /**
   * Add Limits.
   * @param {ProductVariantLimit} limit
   * @throws {Error}
   * @returns {ProductVariantListLoadProduct}
   */
  addLimit(limit) {
    if (util.isInstanceOf(limit, models.ProductVariantLimit)) {
      this.limits.push(limit);
    } else if (util.isObject(limit)) {
      this.limits.push(new models.ProductVariantLimit(limit));
    } else {
      throw new Error(util.format('Expected instance of ProductVariantLimit or Object but got %s',
        typeof limit));
    }

    return this;
  }

  /**
   * Add many ProductVariantLimit.
   * @param {ProductVariantLimit[]} limits
   * @throws {Error}
   * @returns {ProductVariantListLoadProduct}
   */
  addLimits(limits) {
    var i;
    var l;

    if (!util.isArray(limits)) {
      throw new Error(util.format('Expecting an array of ProductVariantLimit but got %s',
        typeof limits));
    }

    for (i = 0, l = limits.length; i < l; i++) {
      if (util.isInstanceOf(limits[i], models.ProductVariantLimit)) {
        this.limits.push(limits[i]);
      } else if (util.isObject(limits[i])) {
        this.limits.push(new models.ProductVariantLimit(limits[i]));
      } else {
        throw new Error(util.format('Expected array of ProductVariantLimit or an array of Object but got %s',
          typeof limits[i]));
      }
    }

    return this;
  }

  /**
   * Add Exclusions.
   * @param {ProductVariantExclusion} exclusion
   * @throws {Error}
   * @returns {ProductVariantListLoadProduct}
   */
  addExclusion(exclusion) {
    if (util.isInstanceOf(exclusion, models.ProductVariantExclusion)) {
      this.exclusions.push(exclusion);
    } else if (util.isObject(exclusion)) {
      this.exclusions.push(new models.ProductVariantExclusion(exclusion));
    } else {
      throw new Error(util.format('Expected instance of ProductVariantExclusion or Object but got %s',
        typeof exclusion));
    }

    return this;
  }

  /**
   * Add many ProductVariantExclusion.
   * @param {ProductVariantExclusion[]} exclusions
   * @throws {Error}
   * @returns {ProductVariantListLoadProduct}
   */
  addExclusions(exclusions) {
    var i;
    var l;

    if (!util.isArray(exclusions)) {
      throw new Error(util.format('Expecting an array of ProductVariantExclusion but got %s',
        typeof exclusions));
    }

    for (i = 0, l = exclusions.length; i < l; i++) {
      if (util.isInstanceOf(exclusions[i], models.ProductVariantExclusion)) {
        this.exclusions.push(exclusions[i]);
      } else if (util.isObject(exclusions[i])) {
        this.exclusions.push(new models.ProductVariantExclusion(exclusions[i]));
      } else {
        throw new Error(util.format('Expected array of ProductVariantExclusion or an array of Object but got %s',
          typeof exclusions[i]));
      }
    }

    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var i;
    var l;
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.productId)) {
      data['Product_ID'] = this.productId;
    } else if (!util.isNullOrUndefined(this.productCode)) {
      data['Product_Code'] = this.productCode;
    } else if (!util.isNullOrUndefined(this.editProduct)) {
      data['Edit_Product'] = this.editProduct;
    } else if (!util.isNullOrUndefined(this.productSku)) {
      data['Product_SKU'] = this.productSku;
    }

    if (!util.isNullOrUndefined(this.includeDefaultVariant)) {
      data['Include_Default_Variant'] = this.includeDefaultVariant;
    }

    if (util.isArray(this.limits)) {
      data['Limits'] = [];

      for (i = 0, l = this.limits.length; i < l; i++) {
        if (util.isObject(this.limits[i])) {
            data['Limits'].push(this.limits[i].toObject());
        }
      }
    }

    if (util.isArray(this.exclusions)) {
      data['Exclusions'] = [];

      for (i = 0, l = this.exclusions.length; i < l; i++) {
        if (util.isObject(this.exclusions[i])) {
            data['Exclusions'].push(this.exclusions[i].toObject());
        }
      }
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.ProductVariantListLoadProduct(this, data);
  }
}

/** 
 * Handles API Request Product_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/product_insert
 */
class ProductInsert extends Request {
  /**
   * ProductInsert Constructor.
   * @param {?Client} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client);
    this.function = 'Product_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productCode = null;
    this.productSku = null;
    this.productName = null;
    this.productDescription = null;
    this.productCanonicalCategoryCode = null;
    this.productAlternateDisplayPage = null;
    this.productPageTitle = null;
    this.productThumbnail = null;
    this.productImage = null;
    this.productPrice = null;
    this.productCost = null;
    this.productWeight = null;
    this.productInventory = null;
    this.productTaxable = null;
    this.productActive = null;
    this.customFieldValues = new models.CustomFieldValues();

    if (util.isInstanceOf(product, models.Product)) {
      this.setProductCode(product.getCode());
      this.setProductSku(product.getSku());
      this.setProductName(product.getName());
      this.setProductDescription(product.getDescription());
      this.setProductCanonicalCategoryCode(product.getCanonicalCategoryCode());
      this.setProductAlternateDisplayPage(product.getPageCode());
      this.setProductPageTitle(product.getPageTitle());
      this.setProductThumbnail(product.getThumbnail());
      this.setProductImage(product.getImage());
      this.setProductPrice(product.getPrice());
      this.setProductCost(product.getCost());
      this.setProductWeight(product.getWeight());
      this.setProductInventory(product.getProductInventory());
      this.setProductTaxable(product.getTaxable());
      this.setProductActive(product.getActive());

      if (product.getCustomFieldValues()) {
        this.setCustomFieldValues(product.getCustomFieldValues());
      }
    }
  }

  /**
   * Get Product_Code.
   * @returns {string}
   */
  getProductCode() {
    return this.productCode;
  }

  /**
   * Get Product_SKU.
   * @returns {string}
   */
  getProductSku() {
    return this.productSku;
  }

  /**
   * Get Product_Name.
   * @returns {string}
   */
  getProductName() {
    return this.productName;
  }

  /**
   * Get Product_Description.
   * @returns {string}
   */
  getProductDescription() {
    return this.productDescription;
  }

  /**
   * Get Product_Canonical_Category_Code.
   * @returns {string}
   */
  getProductCanonicalCategoryCode() {
    return this.productCanonicalCategoryCode;
  }

  /**
   * Get Product_Alternate_Display_Page.
   * @returns {string}
   */
  getProductAlternateDisplayPage() {
    return this.productAlternateDisplayPage;
  }

  /**
   * Get Product_Page_Title.
   * @returns {string}
   */
  getProductPageTitle() {
    return this.productPageTitle;
  }

  /**
   * Get Product_Thumbnail.
   * @returns {string}
   */
  getProductThumbnail() {
    return this.productThumbnail;
  }

  /**
   * Get Product_Image.
   * @returns {string}
   */
  getProductImage() {
    return this.productImage;
  }

  /**
   * Get Product_Price.
   * @returns {number}
   */
  getProductPrice() {
    return this.productPrice;
  }

  /**
   * Get Product_Cost.
   * @returns {number}
   */
  getProductCost() {
    return this.productCost;
  }

  /**
   * Get Product_Weight.
   * @returns {number}
   */
  getProductWeight() {
    return this.productWeight;
  }

  /**
   * Get Product_Inventory.
   * @returns {number}
   */
  getProductInventory() {
    return this.productInventory;
  }

  /**
   * Get Product_Taxable.
   * @returns {boolean}
   */
  getProductTaxable() {
    return this.productTaxable;
  }

  /**
   * Get Product_Active.
   * @returns {boolean}
   */
  getProductActive() {
    return this.productActive;
  }

  /**
   * Get CustomField_Values.
   * @returns {?CustomFieldValues}
   */
  getCustomFieldValues() {
    return this.customFieldValues;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {ProductInsert}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Product_SKU.
   * @param {string} productSku
   * @returns {ProductInsert}
   */
  setProductSku(productSku) {
    this.productSku = productSku;
    return this;
  }

  /**
   * Set Product_Name.
   * @param {string} productName
   * @returns {ProductInsert}
   */
  setProductName(productName) {
    this.productName = productName;
    return this;
  }

  /**
   * Set Product_Description.
   * @param {string} productDescription
   * @returns {ProductInsert}
   */
  setProductDescription(productDescription) {
    this.productDescription = productDescription;
    return this;
  }

  /**
   * Set Product_Canonical_Category_Code.
   * @param {string} productCanonicalCategoryCode
   * @returns {ProductInsert}
   */
  setProductCanonicalCategoryCode(productCanonicalCategoryCode) {
    this.productCanonicalCategoryCode = productCanonicalCategoryCode;
    return this;
  }

  /**
   * Set Product_Alternate_Display_Page.
   * @param {string} productAlternateDisplayPage
   * @returns {ProductInsert}
   */
  setProductAlternateDisplayPage(productAlternateDisplayPage) {
    this.productAlternateDisplayPage = productAlternateDisplayPage;
    return this;
  }

  /**
   * Set Product_Page_Title.
   * @param {string} productPageTitle
   * @returns {ProductInsert}
   */
  setProductPageTitle(productPageTitle) {
    this.productPageTitle = productPageTitle;
    return this;
  }

  /**
   * Set Product_Thumbnail.
   * @param {string} productThumbnail
   * @returns {ProductInsert}
   */
  setProductThumbnail(productThumbnail) {
    this.productThumbnail = productThumbnail;
    return this;
  }

  /**
   * Set Product_Image.
   * @param {string} productImage
   * @returns {ProductInsert}
   */
  setProductImage(productImage) {
    this.productImage = productImage;
    return this;
  }

  /**
   * Set Product_Price.
   * @param {number} productPrice
   * @returns {ProductInsert}
   */
  setProductPrice(productPrice) {
    this.productPrice = productPrice;
    return this;
  }

  /**
   * Set Product_Cost.
   * @param {number} productCost
   * @returns {ProductInsert}
   */
  setProductCost(productCost) {
    this.productCost = productCost;
    return this;
  }

  /**
   * Set Product_Weight.
   * @param {number} productWeight
   * @returns {ProductInsert}
   */
  setProductWeight(productWeight) {
    this.productWeight = productWeight;
    return this;
  }

  /**
   * Set Product_Inventory.
   * @param {number} productInventory
   * @returns {ProductInsert}
   */
  setProductInventory(productInventory) {
    this.productInventory = productInventory;
    return this;
  }

  /**
   * Set Product_Taxable.
   * @param {boolean} productTaxable
   * @returns {ProductInsert}
   */
  setProductTaxable(productTaxable) {
    this.productTaxable = productTaxable;
    return this;
  }

  /**
   * Set Product_Active.
   * @param {boolean} productActive
   * @returns {ProductInsert}
   */
  setProductActive(productActive) {
    this.productActive = productActive;
    return this;
  }

  /**
   * Set CustomField_Values.
   * @param {?CustomFieldValues} customFieldValues
   * @throws {Error}
   * @returns {ProductInsert}
   */
  setCustomFieldValues(customFieldValues) {
    if (!util.isInstanceOf(customFieldValues, models.CustomFieldValues) && util.isObject(customFieldValues)) {
      customFieldValues = new models.CustomFieldValues(customFieldValues);
    } else if (!util.isInstanceOf(customFieldValues, models.CustomFieldValues)) {
      throw new Error(util.format('Expected instance of CustomFieldValues or an Object but got %s',
        typeof customFieldValues));
    }

    this.customFieldValues = customFieldValues;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['Product_Code'] = this.productCode;

    data['Product_SKU'] = this.productSku;

    data['Product_Name'] = this.productName;

    if (!util.isNullOrUndefined(this.productDescription)) {
      data['Product_Description'] = this.productDescription;
    }

    if (!util.isNullOrUndefined(this.productCanonicalCategoryCode)) {
      data['Product_Canonical_Category_Code'] = this.productCanonicalCategoryCode;
    }

    if (!util.isNullOrUndefined(this.productAlternateDisplayPage)) {
      data['Product_Alternate_Display_Page'] = this.productAlternateDisplayPage;
    }

    if (!util.isNullOrUndefined(this.productPageTitle)) {
      data['Product_Page_Title'] = this.productPageTitle;
    }

    if (!util.isNullOrUndefined(this.productThumbnail)) {
      data['Product_Thumbnail'] = this.productThumbnail;
    }

    if (!util.isNullOrUndefined(this.productImage)) {
      data['Product_Image'] = this.productImage;
    }

    if (!util.isNullOrUndefined(this.productPrice)) {
      data['Product_Price'] = this.productPrice;
    }

    if (!util.isNullOrUndefined(this.productCost)) {
      data['Product_Cost'] = this.productCost;
    }

    if (!util.isNullOrUndefined(this.productWeight)) {
      data['Product_Weight'] = this.productWeight;
    }

    if (!util.isNullOrUndefined(this.productInventory)) {
      data['Product_Inventory'] = this.productInventory;
    }

    if (!util.isNullOrUndefined(this.productTaxable)) {
      data['Product_Taxable'] = this.productTaxable;
    }

    if (!util.isNullOrUndefined(this.productActive)) {
      data['Product_Active'] = this.productActive;
    }

    if (this.customFieldValues && util.isObject(this.customFieldValues)) {
      data['CustomField_Values'] = this.customFieldValues.toObject();
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.ProductInsert(this, data);
  }
}

/** 
 * Handles API Request Product_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/product_delete
 */
class ProductDelete extends Request {
  /**
   * ProductDelete Constructor.
   * @param {?Client} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client);
    this.function = 'Product_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productCode = null;
    this.productId = null;
    this.editProduct = null;
    this.productSku = null;

    if (util.isInstanceOf(product, models.Product)) {
      if (product.getId()) {
        this.setProductId(product.getId());
      } else if (product.getCode()) {
        this.setEditProduct(product.getCode());
      } else if (product.getSku()) {
        this.setProductSku(product.getSku());
      }
    }
  }

  /**
   * Get Product_Code.
   * @returns {string}
   */
  getProductCode() {
    return this.productCode;
  }

  /**
   * Get Product_ID.
   * @returns {number}
   */
  getProductId() {
    return this.productId;
  }

  /**
   * Get Edit_Product.
   * @returns {string}
   */
  getEditProduct() {
    return this.editProduct;
  }

  /**
   * Get Product_SKU.
   * @returns {string}
   */
  getProductSku() {
    return this.productSku;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {ProductDelete}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {ProductDelete}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {ProductDelete}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Product_SKU.
   * @param {string} productSku
   * @returns {ProductDelete}
   */
  setProductSku(productSku) {
    this.productSku = productSku;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.productId)) {
      data['Product_ID'] = this.productId;
    } else if (!util.isNullOrUndefined(this.editProduct)) {
      data['Edit_Product'] = this.editProduct;
    } else if (!util.isNullOrUndefined(this.productCode)) {
      data['Product_Code'] = this.productCode;
    } else if (!util.isNullOrUndefined(this.productSku)) {
      data['Product_SKU'] = this.productSku;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.ProductDelete(this, data);
  }
}

/** 
 * Handles API Request Product_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/product_update
 */
class ProductUpdate extends Request {
  /**
   * ProductUpdate Constructor.
   * @param {?Client} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client);
    this.function = 'Product_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productId = null;
    this.productCode = null;
    this.editProduct = null;
    this.productSku = null;
    this.productName = null;
    this.productDescription = null;
    this.productCanonicalCategoryCode = null;
    this.productAlternateDisplayPage = null;
    this.productPageTitle = null;
    this.productThumbnail = null;
    this.productImage = null;
    this.productPrice = null;
    this.productCost = null;
    this.productWeight = null;
    this.productInventory = null;
    this.productTaxable = null;
    this.productActive = null;
    this.customFieldValues = new models.CustomFieldValues();

    if (util.isInstanceOf(product, models.Product)) {
      if (product.getId()) {
        this.setProductId(product.getId());
      } else if (product.getCode()) {
        this.setEditProduct(product.getCode());
      }

      this.setProductCode(product.getCode());
      this.setProductSku(product.getSku());
      this.setProductName(product.getName());
      this.setProductDescription(product.getDescription());
      this.setProductCanonicalCategoryCode(product.getCanonicalCategoryCode());
      this.setProductAlternateDisplayPage(product.getPageCode());
      this.setProductPageTitle(product.getPageTitle());
      this.setProductThumbnail(product.getThumbnail());
      this.setProductImage(product.getImage());
      this.setProductPrice(product.getPrice());
      this.setProductCost(product.getCost());
      this.setProductWeight(product.getWeight());
      this.setProductInventory(product.getProductInventory());
      this.setProductTaxable(product.getTaxable());
      this.setProductActive(product.getActive());

      if (product.getCustomFieldValues()) {
        this.setCustomFieldValues(product.getCustomFieldValues());
      }
    }
  }

  /**
   * Get Product_ID.
   * @returns {number}
   */
  getProductId() {
    return this.productId;
  }

  /**
   * Get Product_Code.
   * @returns {string}
   */
  getProductCode() {
    return this.productCode;
  }

  /**
   * Get Edit_Product.
   * @returns {string}
   */
  getEditProduct() {
    return this.editProduct;
  }

  /**
   * Get Product_SKU.
   * @returns {string}
   */
  getProductSku() {
    return this.productSku;
  }

  /**
   * Get Product_Name.
   * @returns {string}
   */
  getProductName() {
    return this.productName;
  }

  /**
   * Get Product_Description.
   * @returns {string}
   */
  getProductDescription() {
    return this.productDescription;
  }

  /**
   * Get Product_Canonical_Category_Code.
   * @returns {string}
   */
  getProductCanonicalCategoryCode() {
    return this.productCanonicalCategoryCode;
  }

  /**
   * Get Product_Alternate_Display_Page.
   * @returns {string}
   */
  getProductAlternateDisplayPage() {
    return this.productAlternateDisplayPage;
  }

  /**
   * Get Product_Page_Title.
   * @returns {string}
   */
  getProductPageTitle() {
    return this.productPageTitle;
  }

  /**
   * Get Product_Thumbnail.
   * @returns {string}
   */
  getProductThumbnail() {
    return this.productThumbnail;
  }

  /**
   * Get Product_Image.
   * @returns {string}
   */
  getProductImage() {
    return this.productImage;
  }

  /**
   * Get Product_Price.
   * @returns {number}
   */
  getProductPrice() {
    return this.productPrice;
  }

  /**
   * Get Product_Cost.
   * @returns {number}
   */
  getProductCost() {
    return this.productCost;
  }

  /**
   * Get Product_Weight.
   * @returns {number}
   */
  getProductWeight() {
    return this.productWeight;
  }

  /**
   * Get Product_Inventory.
   * @returns {number}
   */
  getProductInventory() {
    return this.productInventory;
  }

  /**
   * Get Product_Taxable.
   * @returns {boolean}
   */
  getProductTaxable() {
    return this.productTaxable;
  }

  /**
   * Get Product_Active.
   * @returns {boolean}
   */
  getProductActive() {
    return this.productActive;
  }

  /**
   * Get CustomField_Values.
   * @returns {?CustomFieldValues}
   */
  getCustomFieldValues() {
    return this.customFieldValues;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {ProductUpdate}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {ProductUpdate}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {ProductUpdate}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Product_SKU.
   * @param {string} productSku
   * @returns {ProductUpdate}
   */
  setProductSku(productSku) {
    this.productSku = productSku;
    return this;
  }

  /**
   * Set Product_Name.
   * @param {string} productName
   * @returns {ProductUpdate}
   */
  setProductName(productName) {
    this.productName = productName;
    return this;
  }

  /**
   * Set Product_Description.
   * @param {string} productDescription
   * @returns {ProductUpdate}
   */
  setProductDescription(productDescription) {
    this.productDescription = productDescription;
    return this;
  }

  /**
   * Set Product_Canonical_Category_Code.
   * @param {string} productCanonicalCategoryCode
   * @returns {ProductUpdate}
   */
  setProductCanonicalCategoryCode(productCanonicalCategoryCode) {
    this.productCanonicalCategoryCode = productCanonicalCategoryCode;
    return this;
  }

  /**
   * Set Product_Alternate_Display_Page.
   * @param {string} productAlternateDisplayPage
   * @returns {ProductUpdate}
   */
  setProductAlternateDisplayPage(productAlternateDisplayPage) {
    this.productAlternateDisplayPage = productAlternateDisplayPage;
    return this;
  }

  /**
   * Set Product_Page_Title.
   * @param {string} productPageTitle
   * @returns {ProductUpdate}
   */
  setProductPageTitle(productPageTitle) {
    this.productPageTitle = productPageTitle;
    return this;
  }

  /**
   * Set Product_Thumbnail.
   * @param {string} productThumbnail
   * @returns {ProductUpdate}
   */
  setProductThumbnail(productThumbnail) {
    this.productThumbnail = productThumbnail;
    return this;
  }

  /**
   * Set Product_Image.
   * @param {string} productImage
   * @returns {ProductUpdate}
   */
  setProductImage(productImage) {
    this.productImage = productImage;
    return this;
  }

  /**
   * Set Product_Price.
   * @param {number} productPrice
   * @returns {ProductUpdate}
   */
  setProductPrice(productPrice) {
    this.productPrice = productPrice;
    return this;
  }

  /**
   * Set Product_Cost.
   * @param {number} productCost
   * @returns {ProductUpdate}
   */
  setProductCost(productCost) {
    this.productCost = productCost;
    return this;
  }

  /**
   * Set Product_Weight.
   * @param {number} productWeight
   * @returns {ProductUpdate}
   */
  setProductWeight(productWeight) {
    this.productWeight = productWeight;
    return this;
  }

  /**
   * Set Product_Inventory.
   * @param {number} productInventory
   * @returns {ProductUpdate}
   */
  setProductInventory(productInventory) {
    this.productInventory = productInventory;
    return this;
  }

  /**
   * Set Product_Taxable.
   * @param {boolean} productTaxable
   * @returns {ProductUpdate}
   */
  setProductTaxable(productTaxable) {
    this.productTaxable = productTaxable;
    return this;
  }

  /**
   * Set Product_Active.
   * @param {boolean} productActive
   * @returns {ProductUpdate}
   */
  setProductActive(productActive) {
    this.productActive = productActive;
    return this;
  }

  /**
   * Set CustomField_Values.
   * @param {?CustomFieldValues} customFieldValues
   * @throws {Error}
   * @returns {ProductUpdate}
   */
  setCustomFieldValues(customFieldValues) {
    if (!util.isInstanceOf(customFieldValues, models.CustomFieldValues) && util.isObject(customFieldValues)) {
      customFieldValues = new models.CustomFieldValues(customFieldValues);
    } else if (!util.isInstanceOf(customFieldValues, models.CustomFieldValues)) {
      throw new Error(util.format('Expected instance of CustomFieldValues or an Object but got %s',
        typeof customFieldValues));
    }

    this.customFieldValues = customFieldValues;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.productId)) {
      data['Product_ID'] = this.productId;
    } else if (!util.isNullOrUndefined(this.editProduct)) {
      data['Edit_Product'] = this.editProduct;
    }

    if (!util.isNullOrUndefined(this.productCode)) {
      data['Product_Code'] = this.productCode;
    }

    if (!util.isNullOrUndefined(this.productSku)) {
      data['Product_SKU'] = this.productSku;
    }

    if (!util.isNullOrUndefined(this.productName)) {
      data['Product_Name'] = this.productName;
    }

    if (!util.isNullOrUndefined(this.productDescription)) {
      data['Product_Description'] = this.productDescription;
    }

    if (!util.isNullOrUndefined(this.productCanonicalCategoryCode)) {
      data['Product_Canonical_Category_Code'] = this.productCanonicalCategoryCode;
    }

    if (!util.isNullOrUndefined(this.productAlternateDisplayPage)) {
      data['Product_Alternate_Display_Page'] = this.productAlternateDisplayPage;
    }

    if (!util.isNullOrUndefined(this.productPageTitle)) {
      data['Product_Page_Title'] = this.productPageTitle;
    }

    if (!util.isNullOrUndefined(this.productThumbnail)) {
      data['Product_Thumbnail'] = this.productThumbnail;
    }

    if (!util.isNullOrUndefined(this.productImage)) {
      data['Product_Image'] = this.productImage;
    }

    if (!util.isNullOrUndefined(this.productPrice)) {
      data['Product_Price'] = this.productPrice;
    }

    if (!util.isNullOrUndefined(this.productCost)) {
      data['Product_Cost'] = this.productCost;
    }

    if (!util.isNullOrUndefined(this.productWeight)) {
      data['Product_Weight'] = this.productWeight;
    }

    if (!util.isNullOrUndefined(this.productInventory)) {
      data['Product_Inventory'] = this.productInventory;
    }

    if (!util.isNullOrUndefined(this.productTaxable)) {
      data['Product_Taxable'] = this.productTaxable;
    }

    if (!util.isNullOrUndefined(this.productActive)) {
      data['Product_Active'] = this.productActive;
    }

    if (this.customFieldValues && util.isObject(this.customFieldValues)) {
      data['CustomField_Values'] = this.customFieldValues.toObject();
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.ProductUpdate(this, data);
  }
}

/** 
 * Handles API Request Provision_Domain. Scope: Domain. 
 * @see https://docs.miva.com/json-api/functions/provision_domain
 */
class ProvisionDomain extends Request {
  /**
   * ProvisionDomain Constructor.
   * @param {?Client} client
   */
  constructor(client) {
    super(client);
    this.function = 'Provision_Domain';
    this.scope = Request.REQUEST_SCOPE_DOMAIN;
    this.xml = null;
  }

  /**
   * Get xml.
   * @returns {string}
   */
  getXml() {
    return this.xml;
  }

  /**
   * Set xml.
   * @param {string} xml
   * @returns {ProvisionDomain}
   */
  setXml(xml) {
    this.xml = xml;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['XML'] = this.xml;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.ProvisionDomain(this, data);
  }
}

/** 
 * Handles API Request Provision_Store. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/provision_store
 */
class ProvisionStore extends Request {
  /**
   * ProvisionStore Constructor.
   * @param {?Client} client
   */
  constructor(client) {
    super(client);
    this.function = 'Provision_Store';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.xml = null;
  }

  /**
   * Get xml.
   * @returns {string}
   */
  getXml() {
    return this.xml;
  }

  /**
   * Set xml.
   * @param {string} xml
   * @returns {ProvisionStore}
   */
  setXml(xml) {
    this.xml = xml;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['XML'] = this.xml;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.ProvisionStore(this, data);
  }
}

/** 
 * Handles API Request CustomerAddressList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/customeraddresslist_load_query
 */
class CustomerAddressListLoadQuery extends ListQueryRequest {
  /**
   * CustomerAddressListLoadQuery Constructor.
   * @param {?Client} client
   * @param {?Customer} customer
   */
  constructor(client, customer = null) {
    super(client);
    this.function = 'CustomerAddressList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'cust_id',
      'id',
      'descrip',
      'fname',
      'lname',
      'email',
      'comp',
      'phone',
      'fax',
      'addr1',
      'addr2',
      'city',
      'state',
      'zip',
      'cntry',
      'resdntl'
    ];

    this.availableSortFields = [
      'cust_id',
      'id',
      'descrip',
      'fname',
      'lname',
      'email',
      'comp',
      'phone',
      'fax',
      'addr1',
      'addr2',
      'city',
      'state',
      'zip',
      'cntry',
      'resdntl'
    ];

    this.customerId = null;
    this.editCustomer = null;
    this.customerLogin = null;

    if (util.isInstanceOf(customer, models.Customer)) {
      if (customer.getId()) {
        this.setCustomerId(customer.getId());
      } else if (customer.getLogin()) {
        this.setEditCustomer(customer.getLogin());
      }
    }
  }

  /**
   * Get Customer_ID.
   * @returns {number}
   */
  getCustomerId() {
    return this.customerId;
  }

  /**
   * Get Edit_Customer.
   * @returns {string}
   */
  getEditCustomer() {
    return this.editCustomer;
  }

  /**
   * Get Customer_Login.
   * @returns {string}
   */
  getCustomerLogin() {
    return this.customerLogin;
  }

  /**
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {CustomerAddressListLoadQuery}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
    return this;
  }

  /**
   * Set Edit_Customer.
   * @param {string} editCustomer
   * @returns {CustomerAddressListLoadQuery}
   */
  setEditCustomer(editCustomer) {
    this.editCustomer = editCustomer;
    return this;
  }

  /**
   * Set Customer_Login.
   * @param {string} customerLogin
   * @returns {CustomerAddressListLoadQuery}
   */
  setCustomerLogin(customerLogin) {
    this.customerLogin = customerLogin;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.customerId)) {
      data['Customer_ID'] = this.customerId;
    } else if (!util.isNullOrUndefined(this.editCustomer)) {
      data['Edit_Customer'] = this.editCustomer;
    } else if (!util.isNullOrUndefined(this.customerLogin)) {
      data['Customer_Login'] = this.customerLogin;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.CustomerAddressListLoadQuery(this, data);
  }
}

/** 
 * Handles API Request PrintQueueList_Load_Query. Scope: Domain. 
 * @see https://docs.miva.com/json-api/functions/printqueuelist_load_query
 */
class PrintQueueListLoadQuery extends ListQueryRequest {
  /**
   * PrintQueueListLoadQuery Constructor.
   * @param {?Client} client
   */
  constructor(client) {
    super(client);
    this.function = 'PrintQueueList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_DOMAIN;

    this.availableSearchFields = [
      'descrip'
    ];

    this.availableSortFields = [
      'descrip'
    ];
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.PrintQueueListLoadQuery(this, data);
  }
}

/** 
 * Handles API Request PrintQueueJobList_Load_Query. Scope: Domain. 
 * @see https://docs.miva.com/json-api/functions/printqueuejoblist_load_query
 */
class PrintQueueJobListLoadQuery extends ListQueryRequest {
  /**
   * PrintQueueJobListLoadQuery Constructor.
   * @param {?Client} client
   * @param {?PrintQueue} printQueue
   */
  constructor(client, printQueue = null) {
    super(client);
    this.function = 'PrintQueueJobList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_DOMAIN;

    this.availableSearchFields = [
      'id',
      'queue_id',
      'store_id',
      'user_id',
      'descrip',
      'job_fmt',
      'job_data',
      'dt_created'
    ];

    this.availableSortFields = [
      'id',
      'queue_id',
      'store_id',
      'user_id',
      'descrip',
      'job_fmt',
      'job_data',
      'dt_created'
    ];

    this.availableOnDemandColumns = [
      'job_data'
    ];
    this.printQueueId = null;
    this.editPrintQueue = null;
    this.printQueueDescription = null;

    if (util.isInstanceOf(printQueue, models.PrintQueue)) {
      if (printQueue.getId()) {
        this.setPrintQueueId(printQueue.getId());
      } else if (printQueue.getDescription()) {
        this.setEditPrintQueue(printQueue.getDescription());
      }
    }
  }

  /**
   * Get PrintQueue_ID.
   * @returns {number}
   */
  getPrintQueueId() {
    return this.printQueueId;
  }

  /**
   * Get Edit_PrintQueue.
   * @returns {string}
   */
  getEditPrintQueue() {
    return this.editPrintQueue;
  }

  /**
   * Get PrintQueue_Description.
   * @returns {string}
   */
  getPrintQueueDescription() {
    return this.printQueueDescription;
  }

  /**
   * Set PrintQueue_ID.
   * @param {number} printQueueId
   * @returns {PrintQueueJobListLoadQuery}
   */
  setPrintQueueId(printQueueId) {
    this.printQueueId = printQueueId;
    return this;
  }

  /**
   * Set Edit_PrintQueue.
   * @param {string} editPrintQueue
   * @returns {PrintQueueJobListLoadQuery}
   */
  setEditPrintQueue(editPrintQueue) {
    this.editPrintQueue = editPrintQueue;
    return this;
  }

  /**
   * Set PrintQueue_Description.
   * @param {string} printQueueDescription
   * @returns {PrintQueueJobListLoadQuery}
   */
  setPrintQueueDescription(printQueueDescription) {
    this.printQueueDescription = printQueueDescription;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.printQueueId)) {
      data['PrintQueue_ID'] = this.printQueueId;
    } else if (!util.isNullOrUndefined(this.editPrintQueue)) {
      data['Edit_PrintQueue'] = this.editPrintQueue;
    } else if (!util.isNullOrUndefined(this.printQueueDescription)) {
      data['PrintQueue_Description'] = this.printQueueDescription;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.PrintQueueJobListLoadQuery(this, data);
  }
}

/** 
 * Handles API Request PrintQueueJob_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/printqueuejob_delete
 */
class PrintQueueJobDelete extends Request {
  /**
   * PrintQueueJobDelete Constructor.
   * @param {?Client} client
   * @param {?PrintQueueJob} printQueueJob
   */
  constructor(client, printQueueJob = null) {
    super(client);
    this.function = 'PrintQueueJob_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.printQueueJobId = null;

    if (util.isInstanceOf(printQueueJob, models.PrintQueueJob)) {
      if (printQueueJob.getId()) {
        this.setPrintQueueJobId(printQueueJob.getId());
      }
    }
  }

  /**
   * Get PrintQueueJob_ID.
   * @returns {number}
   */
  getPrintQueueJobId() {
    return this.printQueueJobId;
  }

  /**
   * Set PrintQueueJob_ID.
   * @param {number} printQueueJobId
   * @returns {PrintQueueJobDelete}
   */
  setPrintQueueJobId(printQueueJobId) {
    this.printQueueJobId = printQueueJobId;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.printQueueJobId)) {
      data['PrintQueueJob_ID'] = this.printQueueJobId;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.PrintQueueJobDelete(this, data);
  }
}

/** 
 * Handles API Request PrintQueueJob_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/printqueuejob_insert
 */
class PrintQueueJobInsert extends Request {
  /**
   * PrintQueueJobInsert Constructor.
   * @param {?Client} client
   * @param {?PrintQueue} printQueue
   */
  constructor(client, printQueue = null) {
    super(client);
    this.function = 'PrintQueueJob_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.printQueueId = null;
    this.editPrintQueue = null;
    this.printQueueDescription = null;
    this.printQueueJobDescription = null;
    this.printQueueJobFormat = null;
    this.printQueueJobData = null;

    if (util.isInstanceOf(printQueue, models.PrintQueue)) {
      if (printQueue.getId()) {
        this.setPrintQueueId(printQueue.getId());
      } else if (printQueue.getDescription()) {
        this.setEditPrintQueue(printQueue.getDescription());
      }
    }
  }

  /**
   * Get PrintQueue_ID.
   * @returns {number}
   */
  getPrintQueueId() {
    return this.printQueueId;
  }

  /**
   * Get Edit_PrintQueue.
   * @returns {string}
   */
  getEditPrintQueue() {
    return this.editPrintQueue;
  }

  /**
   * Get PrintQueue_Description.
   * @returns {string}
   */
  getPrintQueueDescription() {
    return this.printQueueDescription;
  }

  /**
   * Get PrintQueueJob_Description.
   * @returns {string}
   */
  getPrintQueueJobDescription() {
    return this.printQueueJobDescription;
  }

  /**
   * Get PrintQueueJob_Format.
   * @returns {string}
   */
  getPrintQueueJobFormat() {
    return this.printQueueJobFormat;
  }

  /**
   * Get PrintQueueJob_Data.
   * @returns {string}
   */
  getPrintQueueJobData() {
    return this.printQueueJobData;
  }

  /**
   * Set PrintQueue_ID.
   * @param {number} printQueueId
   * @returns {PrintQueueJobInsert}
   */
  setPrintQueueId(printQueueId) {
    this.printQueueId = printQueueId;
    return this;
  }

  /**
   * Set Edit_PrintQueue.
   * @param {string} editPrintQueue
   * @returns {PrintQueueJobInsert}
   */
  setEditPrintQueue(editPrintQueue) {
    this.editPrintQueue = editPrintQueue;
    return this;
  }

  /**
   * Set PrintQueue_Description.
   * @param {string} printQueueDescription
   * @returns {PrintQueueJobInsert}
   */
  setPrintQueueDescription(printQueueDescription) {
    this.printQueueDescription = printQueueDescription;
    return this;
  }

  /**
   * Set PrintQueueJob_Description.
   * @param {string} printQueueJobDescription
   * @returns {PrintQueueJobInsert}
   */
  setPrintQueueJobDescription(printQueueJobDescription) {
    this.printQueueJobDescription = printQueueJobDescription;
    return this;
  }

  /**
   * Set PrintQueueJob_Format.
   * @param {string} printQueueJobFormat
   * @returns {PrintQueueJobInsert}
   */
  setPrintQueueJobFormat(printQueueJobFormat) {
    this.printQueueJobFormat = printQueueJobFormat;
    return this;
  }

  /**
   * Set PrintQueueJob_Data.
   * @param {string} printQueueJobData
   * @returns {PrintQueueJobInsert}
   */
  setPrintQueueJobData(printQueueJobData) {
    this.printQueueJobData = printQueueJobData;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.printQueueId)) {
      data['PrintQueue_ID'] = this.printQueueId;
    } else if (!util.isNullOrUndefined(this.editPrintQueue)) {
      data['Edit_PrintQueue'] = this.editPrintQueue;
    } else if (!util.isNullOrUndefined(this.printQueueDescription)) {
      data['PrintQueue_Description'] = this.printQueueDescription;
    }

    if (!util.isNullOrUndefined(this.printQueueJobDescription)) {
      data['PrintQueueJob_Description'] = this.printQueueJobDescription;
    }

    if (!util.isNullOrUndefined(this.printQueueJobFormat)) {
      data['PrintQueueJob_Format'] = this.printQueueJobFormat;
    }

    if (!util.isNullOrUndefined(this.printQueueJobData)) {
      data['PrintQueueJob_Data'] = this.printQueueJobData;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.PrintQueueJobInsert(this, data);
  }
}

/** 
 * Handles API Request PrintQueueJob_Status. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/printqueuejob_status
 */
class PrintQueueJobStatus extends Request {
  /**
   * PrintQueueJobStatus Constructor.
   * @param {?Client} client
   * @param {?PrintQueueJob} printQueueJob
   */
  constructor(client, printQueueJob = null) {
    super(client);
    this.function = 'PrintQueueJob_Status';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.printQueueJobId = null;

    if (util.isInstanceOf(printQueueJob, models.PrintQueueJob)) {
      if (printQueueJob.getId()) {
        this.setPrintQueueJobId(printQueueJob.getId());
      }
    }
  }

  /**
   * Get PrintQueueJob_ID.
   * @returns {number}
   */
  getPrintQueueJobId() {
    return this.printQueueJobId;
  }

  /**
   * Set PrintQueueJob_ID.
   * @param {number} printQueueJobId
   * @returns {PrintQueueJobStatus}
   */
  setPrintQueueJobId(printQueueJobId) {
    this.printQueueJobId = printQueueJobId;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.printQueueJobId)) {
      data['PrintQueueJob_ID'] = this.printQueueJobId;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.PrintQueueJobStatus(this, data);
  }
}

/** 
 * Handles API Request PaymentMethodList_Load. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/paymentmethodlist_load
 */
class PaymentMethodListLoad extends Request {
  /**
   * PaymentMethodListLoad Constructor.
   * @param {?Client} client
   * @param {?Order} order
   */
  constructor(client, order = null) {
    super(client);
    this.function = 'PaymentMethodList_Load';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.orderId = null;

    if (util.isInstanceOf(order, models.Order)) {
      this.setOrderId(order.getId());
    }
  }

  /**
   * Get Order_ID.
   * @returns {number}
   */
  getOrderId() {
    return this.orderId;
  }

  /**
   * Set Order_ID.
   * @param {number} orderId
   * @returns {PaymentMethodListLoad}
   */
  setOrderId(orderId) {
    this.orderId = orderId;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.orderId)) {
      data['Order_ID'] = this.orderId;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.PaymentMethodListLoad(this, data);
  }
}

/** 
 * Handles API Request Order_Create_FromOrder. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/order_create_fromorder
 */
class OrderCreateFromOrder extends Request {
  /**
   * OrderCreateFromOrder Constructor.
   * @param {?Client} client
   * @param {?Order} order
   */
  constructor(client, order = null) {
    super(client);
    this.function = 'Order_Create_FromOrder';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.orderId = null;

    if (util.isInstanceOf(order, models.Order)) {
      if (order.getId()) {
        this.setOrderId(order.getId());
      }
    }
  }

  /**
   * Get Order_ID.
   * @returns {number}
   */
  getOrderId() {
    return this.orderId;
  }

  /**
   * Set Order_ID.
   * @param {number} orderId
   * @returns {OrderCreateFromOrder}
   */
  setOrderId(orderId) {
    this.orderId = orderId;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.orderId)) {
      data['Order_ID'] = this.orderId;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.OrderCreateFromOrder(this, data);
  }
}

/** 
 * Handles API Request Order_Authorize. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/order_authorize
 */
class OrderAuthorize extends Request {
  /**
   * OrderAuthorize Constructor.
   * @param {?Client} client
   * @param {?Order} order
   */
  constructor(client, order = null) {
    super(client);
    this.function = 'Order_Authorize';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.orderId = null;
    this.moduleId = null;
    this.moduleData = null;
    this.amount = null;
    this.moduleFields = {};

    if (util.isInstanceOf(order, models.Order)) {
      if (order.getId()) {
        this.setOrderId(order.getId());
      }
    }
  }

  /**
   * Get Order_ID.
   * @returns {number}
   */
  getOrderId() {
    return this.orderId;
  }

  /**
   * Get Module_ID.
   * @returns {number}
   */
  getModuleId() {
    return this.moduleId;
  }

  /**
   * Get Module_Data.
   * @returns {string}
   */
  getModuleData() {
    return this.moduleData;
  }

  /**
   * Get Amount.
   * @returns {number}
   */
  getAmount() {
    return this.amount;
  }

  /**
   * Get Module_Fields.
   * @returns {Object}
   */
  getModuleFields() {
    return this.moduleFields;
  }

  /**
   * Set Order_ID.
   * @param {number} orderId
   * @returns {OrderAuthorize}
   */
  setOrderId(orderId) {
    this.orderId = orderId;
    return this;
  }

  /**
   * Set Module_ID.
   * @param {number} moduleId
   * @returns {OrderAuthorize}
   */
  setModuleId(moduleId) {
    this.moduleId = moduleId;
    return this;
  }

  /**
   * Set Module_Data.
   * @param {string} moduleData
   * @returns {OrderAuthorize}
   */
  setModuleData(moduleData) {
    this.moduleData = moduleData;
    return this;
  }

  /**
   * Set Amount.
   * @param {number} amount
   * @returns {OrderAuthorize}
   */
  setAmount(amount) {
    this.amount = amount;
    return this;
  }

  /**
   * Set Module_Fields.
   * @param {Object} moduleFields
   * @returns {OrderAuthorize}
   */
  setModuleFields(moduleFields) {
    this.moduleFields = moduleFields;
    return this;
  }

  /**
   * Add custom data to the request.
   *
   * @param {string}
   * @param {*}
   * @returns {OrderAuthorize}
   */
  setModuleField(field, value)
  {
      this.moduleFields[field] = value;
      return this;
  }
    
  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = Object.assign(super.toObject(), this.getModuleFields());

    if (!util.isNullOrUndefined(this.orderId)) {
      data['Order_ID'] = this.orderId;
    }

    if (!util.isNullOrUndefined(this.moduleId)) {
      data['Module_ID'] = this.moduleId;
    }

    if (!util.isNullOrUndefined(this.moduleData)) {
      data['Module_Data'] = this.moduleData;
    }

    data['Amount'] = this.amount;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.OrderAuthorize(this, data);
  }
}

/** 
 * Handles API Request CustomerPaymentCardList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/customerpaymentcardlist_load_query
 */
class CustomerPaymentCardListLoadQuery extends ListQueryRequest {
  /**
   * CustomerPaymentCardListLoadQuery Constructor.
   * @param {?Client} client
   * @param {?Customer} customer
   */
  constructor(client, customer = null) {
    super(client);
    this.function = 'CustomerPaymentCardList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'fname',
      'lname',
      'exp_month',
      'exp_year',
      'lastfour',
      'lastused',
      'type',
      'addr1',
      'addr2',
      'city',
      'state',
      'zip',
      'cntry',
      'refcount',
      'mod_code',
      'meth_code',
      'id'
    ];

    this.availableSortFields = [
      'fname',
      'lname',
      'expires',
      'lastfour',
      'lastused',
      'type',
      'addr1',
      'addr2',
      'city',
      'state',
      'zip',
      'cntry',
      'refcount',
      'mod_code',
      'meth_code',
      'id'
    ];

    this.customerId = null;
    this.editCustomer = null;
    this.customerLogin = null;

    if (util.isInstanceOf(customer, models.Customer)) {
      if (customer.getId()) {
        this.setCustomerId(customer.getId());
      } else if (customer.getLogin()) {
        this.setCustomerLogin(customer.getLogin());
      }
    }
  }

  /**
   * Get Customer_ID.
   * @returns {number}
   */
  getCustomerId() {
    return this.customerId;
  }

  /**
   * Get Edit_Customer.
   * @returns {string}
   */
  getEditCustomer() {
    return this.editCustomer;
  }

  /**
   * Get Customer_Login.
   * @returns {string}
   */
  getCustomerLogin() {
    return this.customerLogin;
  }

  /**
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {CustomerPaymentCardListLoadQuery}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
    return this;
  }

  /**
   * Set Edit_Customer.
   * @param {string} editCustomer
   * @returns {CustomerPaymentCardListLoadQuery}
   */
  setEditCustomer(editCustomer) {
    this.editCustomer = editCustomer;
    return this;
  }

  /**
   * Set Customer_Login.
   * @param {string} customerLogin
   * @returns {CustomerPaymentCardListLoadQuery}
   */
  setCustomerLogin(customerLogin) {
    this.customerLogin = customerLogin;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.customerId)) {
      data['Customer_ID'] = this.customerId;
    } else if (!util.isNullOrUndefined(this.editCustomer)) {
      data['Edit_Customer'] = this.editCustomer;
    } else if (!util.isNullOrUndefined(this.customerLogin)) {
      data['Customer_Login'] = this.customerLogin;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.CustomerPaymentCardListLoadQuery(this, data);
  }
}

/** 
 * Handles API Request CategoryProductList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/categoryproductlist_load_query
 */
class CategoryProductListLoadQuery extends ProductListLoadQuery {
  /**
   * CategoryProductListLoadQuery Constructor.
   * @param {?Client} client
   * @param {?Category} category
   */
  constructor(client, category = null) {
    super(client);
    this.function = 'CategoryProductList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.categoryId = null;
    this.categoryCode = null;
    this.editCategory = null;
    this.assigned = null;
    this.unassigned = null;

    if (util.isInstanceOf(category, models.Category)) {
      if (category.getId()) {
        this.setCategoryId(category.getId());
      } else if (category.getCode()) {
        this.setEditCategory(category.getCode());
      }
    }
  }

  /**
   * Get Category_ID.
   * @returns {number}
   */
  getCategoryId() {
    return this.categoryId;
  }

  /**
   * Get Category_Code.
   * @returns {string}
   */
  getCategoryCode() {
    return this.categoryCode;
  }

  /**
   * Get Edit_Category.
   * @returns {string}
   */
  getEditCategory() {
    return this.editCategory;
  }

  /**
   * Get Assigned.
   * @returns {boolean}
   */
  getAssigned() {
    return this.assigned;
  }

  /**
   * Get Unassigned.
   * @returns {boolean}
   */
  getUnassigned() {
    return this.unassigned;
  }

  /**
   * Set Category_ID.
   * @param {number} categoryId
   * @returns {CategoryProductListLoadQuery}
   */
  setCategoryId(categoryId) {
    this.categoryId = categoryId;
    return this;
  }

  /**
   * Set Category_Code.
   * @param {string} categoryCode
   * @returns {CategoryProductListLoadQuery}
   */
  setCategoryCode(categoryCode) {
    this.categoryCode = categoryCode;
    return this;
  }

  /**
   * Set Edit_Category.
   * @param {string} editCategory
   * @returns {CategoryProductListLoadQuery}
   */
  setEditCategory(editCategory) {
    this.editCategory = editCategory;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {CategoryProductListLoadQuery}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Set Unassigned.
   * @param {boolean} unassigned
   * @returns {CategoryProductListLoadQuery}
   */
  setUnassigned(unassigned) {
    this.unassigned = unassigned;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.categoryId)) {
      data['Category_ID'] = this.categoryId;
    } else if (!util.isNullOrUndefined(this.editCategory)) {
      data['Edit_Category'] = this.editCategory;
    } else if (!util.isNullOrUndefined(this.categoryCode)) {
      data['Category_Code'] = this.categoryCode;
    }

    if (!util.isNullOrUndefined(this.assigned)) {
      data['Assigned'] = this.assigned;
    }

    if (!util.isNullOrUndefined(this.unassigned)) {
      data['Unassigned'] = this.unassigned;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.CategoryProductListLoadQuery(this, data);
  }
}

/** 
 * Handles API Request CouponPriceGroupList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/couponpricegrouplist_load_query
 */
class CouponPriceGroupListLoadQuery extends PriceGroupListLoadQuery {
  /**
   * CouponPriceGroupListLoadQuery Constructor.
   * @param {?Client} client
   * @param {?Coupon} coupon
   */
  constructor(client, coupon = null) {
    super(client);
    this.function = 'CouponPriceGroupList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.couponId = null;
    this.editCoupon = null;
    this.couponCode = null;
    this.assigned = null;
    this.unassigned = null;

    if (util.isInstanceOf(coupon, models.Coupon)) {
      if (coupon.getId()) {
        this.setCouponId(coupon.getId());
      } else if (coupon.getCode()) {
        this.setEditCoupon(coupon.getCode());
      }
    }
  }

  /**
   * Get Coupon_ID.
   * @returns {number}
   */
  getCouponId() {
    return this.couponId;
  }

  /**
   * Get Edit_Coupon.
   * @returns {string}
   */
  getEditCoupon() {
    return this.editCoupon;
  }

  /**
   * Get Coupon_Code.
   * @returns {string}
   */
  getCouponCode() {
    return this.couponCode;
  }

  /**
   * Get Assigned.
   * @returns {boolean}
   */
  getAssigned() {
    return this.assigned;
  }

  /**
   * Get Unassigned.
   * @returns {boolean}
   */
  getUnassigned() {
    return this.unassigned;
  }

  /**
   * Set Coupon_ID.
   * @param {number} couponId
   * @returns {CouponPriceGroupListLoadQuery}
   */
  setCouponId(couponId) {
    this.couponId = couponId;
    return this;
  }

  /**
   * Set Edit_Coupon.
   * @param {string} editCoupon
   * @returns {CouponPriceGroupListLoadQuery}
   */
  setEditCoupon(editCoupon) {
    this.editCoupon = editCoupon;
    return this;
  }

  /**
   * Set Coupon_Code.
   * @param {string} couponCode
   * @returns {CouponPriceGroupListLoadQuery}
   */
  setCouponCode(couponCode) {
    this.couponCode = couponCode;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {CouponPriceGroupListLoadQuery}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Set Unassigned.
   * @param {boolean} unassigned
   * @returns {CouponPriceGroupListLoadQuery}
   */
  setUnassigned(unassigned) {
    this.unassigned = unassigned;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.couponId)) {
      data['Coupon_ID'] = this.couponId;
    } else if (!util.isNullOrUndefined(this.editCoupon)) {
      data['Edit_Coupon'] = this.editCoupon;
    } else if (!util.isNullOrUndefined(this.couponCode)) {
      data['Coupon_Code'] = this.couponCode;
    }

    if (!util.isNullOrUndefined(this.assigned)) {
      data['Assigned'] = this.assigned;
    }

    if (!util.isNullOrUndefined(this.unassigned)) {
      data['Unassigned'] = this.unassigned;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.CouponPriceGroupListLoadQuery(this, data);
  }
}

/** 
 * Handles API Request PriceGroupProductList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/pricegroupproductlist_load_query
 */
class PriceGroupProductListLoadQuery extends ProductListLoadQuery {
  /**
   * PriceGroupProductListLoadQuery Constructor.
   * @param {?Client} client
   * @param {?PriceGroup} priceGroup
   */
  constructor(client, priceGroup = null) {
    super(client);
    this.function = 'PriceGroupProductList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.priceGroupId = null;
    this.priceGroupName = null;
    this.assigned = null;
    this.unassigned = null;

    if (util.isInstanceOf(priceGroup, models.PriceGroup)) {
      if (priceGroup.getId()) {
        this.setPriceGroupId(priceGroup.getId());
      } else if (priceGroup.getName()) {
        this.setPriceGroupName(priceGroup.getName());
      }
    }
  }

  /**
   * Get PriceGroup_ID.
   * @returns {number}
   */
  getPriceGroupId() {
    return this.priceGroupId;
  }

  /**
   * Get PriceGroup_Name.
   * @returns {string}
   */
  getPriceGroupName() {
    return this.priceGroupName;
  }

  /**
   * Get Assigned.
   * @returns {boolean}
   */
  getAssigned() {
    return this.assigned;
  }

  /**
   * Get Unassigned.
   * @returns {boolean}
   */
  getUnassigned() {
    return this.unassigned;
  }

  /**
   * Set PriceGroup_ID.
   * @param {number} priceGroupId
   * @returns {PriceGroupProductListLoadQuery}
   */
  setPriceGroupId(priceGroupId) {
    this.priceGroupId = priceGroupId;
    return this;
  }

  /**
   * Set PriceGroup_Name.
   * @param {string} priceGroupName
   * @returns {PriceGroupProductListLoadQuery}
   */
  setPriceGroupName(priceGroupName) {
    this.priceGroupName = priceGroupName;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {PriceGroupProductListLoadQuery}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Set Unassigned.
   * @param {boolean} unassigned
   * @returns {PriceGroupProductListLoadQuery}
   */
  setUnassigned(unassigned) {
    this.unassigned = unassigned;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.priceGroupId)) {
      data['PriceGroup_ID'] = this.priceGroupId;
    } else if (!util.isNullOrUndefined(this.priceGroupName)) {
      data['PriceGroup_Name'] = this.priceGroupName;
    }

    if (!util.isNullOrUndefined(this.assigned)) {
      data['Assigned'] = this.assigned;
    }

    if (!util.isNullOrUndefined(this.unassigned)) {
      data['Unassigned'] = this.unassigned;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.PriceGroupProductListLoadQuery(this, data);
  }
}

/** 
 * Handles API Request CustomerPriceGroupList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/customerpricegrouplist_load_query
 */
class CustomerPriceGroupListLoadQuery extends PriceGroupListLoadQuery {
  /**
   * CustomerPriceGroupListLoadQuery Constructor.
   * @param {?Client} client
   * @param {?Customer} customer
   */
  constructor(client, customer = null) {
    super(client);
    this.function = 'CustomerPriceGroupList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.customerId = null;
    this.editCustomer = null;
    this.customerLogin = null;
    this.assigned = null;
    this.unassigned = null;

    if (util.isInstanceOf(customer, models.Customer)) {
      if (customer.getId()) {
        this.setCustomerId(customer.getId());
      } else if (customer.getLogin()) {
        this.setEditCustomer(customer.getLogin());
      }
    }
  }

  /**
   * Get Customer_ID.
   * @returns {number}
   */
  getCustomerId() {
    return this.customerId;
  }

  /**
   * Get Edit_Customer.
   * @returns {string}
   */
  getEditCustomer() {
    return this.editCustomer;
  }

  /**
   * Get Customer_Login.
   * @returns {string}
   */
  getCustomerLogin() {
    return this.customerLogin;
  }

  /**
   * Get Assigned.
   * @returns {boolean}
   */
  getAssigned() {
    return this.assigned;
  }

  /**
   * Get Unassigned.
   * @returns {boolean}
   */
  getUnassigned() {
    return this.unassigned;
  }

  /**
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {CustomerPriceGroupListLoadQuery}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
    return this;
  }

  /**
   * Set Edit_Customer.
   * @param {string} editCustomer
   * @returns {CustomerPriceGroupListLoadQuery}
   */
  setEditCustomer(editCustomer) {
    this.editCustomer = editCustomer;
    return this;
  }

  /**
   * Set Customer_Login.
   * @param {string} customerLogin
   * @returns {CustomerPriceGroupListLoadQuery}
   */
  setCustomerLogin(customerLogin) {
    this.customerLogin = customerLogin;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {CustomerPriceGroupListLoadQuery}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Set Unassigned.
   * @param {boolean} unassigned
   * @returns {CustomerPriceGroupListLoadQuery}
   */
  setUnassigned(unassigned) {
    this.unassigned = unassigned;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.customerId)) {
      data['Customer_ID'] = this.customerId;
    } else if (!util.isNullOrUndefined(this.editCustomer)) {
      data['Edit_Customer'] = this.editCustomer;
    } else if (!util.isNullOrUndefined(this.customerLogin)) {
      data['Customer_Login'] = this.customerLogin;
    }

    if (!util.isNullOrUndefined(this.assigned)) {
      data['Assigned'] = this.assigned;
    }

    if (!util.isNullOrUndefined(this.unassigned)) {
      data['Unassigned'] = this.unassigned;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.CustomerPriceGroupListLoadQuery(this, data);
  }
}

/** 
 * This class is a utility to create custom requests.
 */
class RequestBuilder extends Request
{
  /**
   * RequestBuilder Constructor.
   * @param {?Client} client
   * @param {string} apiFunction
   * @param {?Object} data
   */
  constructor(client, apiFunction, data = {}) {
    super(client);
    this.setScope(Request.REQUEST_SCOPE_STORE);
    this.setFunction(apiFunction);

    if (util.isObject(data)) {
      this.data = data;
    }
  }

  /**
   * Set the api function name to call.
   * @param {string} apiFunction
   * @returns {RequestBuilder}
   */
  setFunction(apiFunction) {
    this.function = apiFunction;
    return this;
  }

  /**
   * Set the request scope. Use store or domain.
   * @param {string} apiFunction
   * @throws Error
   * @returns {RequestBuilder}
   */
  setScope(scope) {
    if (!util.isString(scope)) {
      throw new Error(util.format('Expected a string but got %s', typeof scope));
    }

    scope = scope.toLowerCase();

    if (scope != Request.REQUEST_SCOPE_DOMAIN && scope != Request.REQUEST_SCOPE_STORE) {
      throw new Error('Invalid Request Scope Value');
    }

    this.scope = scope;
    return this;
  }

  /**
   * Set a field value.
   * @param {string} field
   * @param {*} value
   * @returns {RequestBuilder}
   */
  set(field, value) {
    if (!util.isString(field)) {
      throw new Error(util.format('Expected string but got %s', typeof field));
    }

    var nameLower = field.toLowerCase();

    if (nameLower == 'function') {
      return this.setFunction(value);
    } else if (nameLower == 'store_code') {
      return this.setStoreCode(value);
    }

    this.data[field] = value;

    return this;
  }

  /**
   * Get a defined field value or defaultValue if it does not exist.
   * @param {string} field
   * @param {*} defaultValue
   * @returns {*}
   */
  get(field, defaultValue = null) {
    if (!util.isString(field)) {
      throw new Error(util.format('Expected string but got %s', typeof field));
    }

    var nameLower = field.toLowerCase();

    if (nameLower == 'function') {
      return this.getFunction();
    } else if (nameLower == 'store_code') {
      return this.getStoreCode();
    }

    return field in this.data ?
      this.data[field] : defaultValue;
  }

  /**
   * Check if a field is defined in the request data.
   * @param {string} field
   * @returns {bool}
   */
  has(field) {
    if (!util.isString(field)) {
      throw new Error(util.format('Expected string but got %s', typeof field));
    }

    var nameLower = field.toLowerCase();

    if (nameLower == 'function' || nameLower == 'store_code') {
      return true;
    }

    return field in this.data;
  }

  /**
   * Remove a field from the request data.
   * @param {string} field
   * @returns {RequestBuilder}
   */
  remove(field) {
    if (!util.isString(field)) {
      throw new Error(util.format('Expected string but got %s', typeof field));
    }

    var nameLower = field.toLowerCase();

    if (nameLower == 'function' || nameLower == 'store_code') {
      return this;
    }

    if (field in this.data) {
      delete this.data[field];
    }

    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {    
    return Object.assign(super.toObject(), this.data);
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(data) {
    return new responses.RequestBuilder(this, data);
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
