/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
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
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.AvailabilityGroupBusinessAccountUpdateAssigned(this, httpResponse, data);
  }
}

/** 
 * Handles API Request AvailabilityGroupCustomer_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/availabilitygroupcustomer_update_assigned
 */
class AvailabilityGroupCustomerUpdateAssigned extends Request {
  /**
   * AvailabilityGroupCustomerUpdateAssigned Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.AvailabilityGroupCustomerUpdateAssigned(this, httpResponse, data);
  }
}

/** 
 * Handles API Request AvailabilityGroupList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/availabilitygrouplist_load_query
 */
class AvailabilityGroupListLoadQuery extends ListQueryRequest {
  /**
   * AvailabilityGroupListLoadQuery Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.AvailabilityGroupListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request AvailabilityGroupPaymentMethod_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/availabilitygrouppaymentmethod_update_assigned
 */
class AvailabilityGroupPaymentMethodUpdateAssigned extends Request {
  /**
   * AvailabilityGroupPaymentMethodUpdateAssigned Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.AvailabilityGroupPaymentMethodUpdateAssigned(this, httpResponse, data);
  }
}

/** 
 * Handles API Request AvailabilityGroupProduct_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/availabilitygroupproduct_update_assigned
 */
class AvailabilityGroupProductUpdateAssigned extends Request {
  /**
   * AvailabilityGroupProductUpdateAssigned Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.AvailabilityGroupProductUpdateAssigned(this, httpResponse, data);
  }
}

/** 
 * Handles API Request AvailabilityGroupShippingMethod_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/availabilitygroupshippingmethod_update_assigned
 */
class AvailabilityGroupShippingMethodUpdateAssigned extends Request {
  /**
   * AvailabilityGroupShippingMethodUpdateAssigned Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.AvailabilityGroupShippingMethodUpdateAssigned(this, httpResponse, data);
  }
}

/** 
 * Handles API Request CategoryList_Load_Parent. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/categorylist_load_parent
 */
class CategoryListLoadParent extends Request {
  /**
   * CategoryListLoadParent Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.CategoryListLoadParent(this, httpResponse, data);
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
   * @param {?BaseClient} client
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

    this.availableOnDemandColumns = [
      'uris'
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
  createResponse(httpResponse, data) {
    return new responses.CategoryListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request CategoryProduct_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/categoryproduct_update_assigned
 */
class CategoryProductUpdateAssigned extends Request {
  /**
   * CategoryProductUpdateAssigned Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.CategoryProductUpdateAssigned(this, httpResponse, data);
  }
}

/** 
 * Handles API Request Category_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/category_insert
 */
class CategoryInsert extends Request {
  /**
   * CategoryInsert Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.CategoryInsert(this, httpResponse, data);
  }
}

/** 
 * Handles API Request Category_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/category_delete
 */
class CategoryDelete extends Request {
  /**
   * CategoryDelete Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.CategoryDelete(this, httpResponse, data);
  }
}

/** 
 * Handles API Request Category_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/category_update
 */
class CategoryUpdate extends Request {
  /**
   * CategoryUpdate Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.CategoryUpdate(this, httpResponse, data);
  }
}

/** 
 * Handles API Request CouponList_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/couponlist_delete
 */
class CouponListDelete extends Request {
  /**
   * CouponListDelete Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.CouponListDelete(this, httpResponse, data);
  }
}

/** 
 * Handles API Request CouponList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/couponlist_load_query
 */
class CouponListLoadQuery extends ListQueryRequest {
  /**
   * CouponListLoadQuery Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.CouponListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request CouponPriceGroup_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/couponpricegroup_update_assigned
 */
class CouponPriceGroupUpdateAssigned extends Request {
  /**
   * CouponPriceGroupUpdateAssigned Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.CouponPriceGroupUpdateAssigned(this, httpResponse, data);
  }
}

/** 
 * Handles API Request Coupon_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/coupon_insert
 */
class CouponInsert extends Request {
  /**
   * CouponInsert Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.CouponInsert(this, httpResponse, data);
  }
}

/** 
 * Handles API Request Coupon_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/coupon_update
 */
class CouponUpdate extends Request {
  /**
   * CouponUpdate Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.CouponUpdate(this, httpResponse, data);
  }
}

/** 
 * Handles API Request CustomerList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/customerlist_load_query
 */
class CustomerListLoadQuery extends ListQueryRequest {
  /**
   * CustomerListLoadQuery Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.CustomerListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request Customer_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/customer_delete
 */
class CustomerDelete extends Request {
  /**
   * CustomerDelete Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.CustomerDelete(this, httpResponse, data);
  }
}

/** 
 * Handles API Request Customer_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/customer_insert
 */
class CustomerInsert extends Request {
  /**
   * CustomerInsert Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.CustomerInsert(this, httpResponse, data);
  }
}

/** 
 * Handles API Request Customer_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/customer_update
 */
class CustomerUpdate extends Request {
  /**
   * CustomerUpdate Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.CustomerUpdate(this, httpResponse, data);
  }
}

/** 
 * Handles API Request CustomerPaymentCard_Register. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/customerpaymentcard_register
 */
class CustomerPaymentCardRegister extends Request {
  /**
   * CustomerPaymentCardRegister Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.CustomerPaymentCardRegister(this, httpResponse, data);
  }
}

/** 
 * Handles API Request Module. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/module
 */
class Module extends Request {
  /**
   * Module Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.Module(this, httpResponse, data);
  }
}

/** 
 * Handles API Request NoteList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/notelist_load_query
 */
class NoteListLoadQuery extends ListQueryRequest {
  /**
   * NoteListLoadQuery Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.NoteListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request Note_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/note_delete
 */
class NoteDelete extends Request {
  /**
   * NoteDelete Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.NoteDelete(this, httpResponse, data);
  }
}

/** 
 * Handles API Request Note_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/note_insert
 */
class NoteInsert extends Request {
  /**
   * NoteInsert Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.NoteInsert(this, httpResponse, data);
  }
}

/** 
 * Handles API Request Note_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/note_update
 */
class NoteUpdate extends Request {
  /**
   * NoteUpdate Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.NoteUpdate(this, httpResponse, data);
  }
}

/** 
 * Handles API Request OrderCustomFieldList_Load. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/ordercustomfieldlist_load
 */
class OrderCustomFieldListLoad extends Request {
  /**
   * OrderCustomFieldListLoad Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.OrderCustomFieldListLoad(this, httpResponse, data);
  }
}

/** 
 * Handles API Request OrderCustomFields_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/ordercustomfields_update
 */
class OrderCustomFieldsUpdate extends Request {
  /**
   * OrderCustomFieldsUpdate Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.OrderCustomFieldsUpdate(this, httpResponse, data);
  }
}

/** 
 * Handles API Request OrderItemList_BackOrder. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/orderitemlist_backorder
 */
class OrderItemListBackOrder extends Request {
  /**
   * OrderItemListBackOrder Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.OrderItemListBackOrder(this, httpResponse, data);
  }
}

/** 
 * Handles API Request OrderItemList_Cancel. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/orderitemlist_cancel
 */
class OrderItemListCancel extends Request {
  /**
   * OrderItemListCancel Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.OrderItemListCancel(this, httpResponse, data);
  }
}

/** 
 * Handles API Request OrderItemList_CreateShipment. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/orderitemlist_createshipment
 */
class OrderItemListCreateShipment extends Request {
  /**
   * OrderItemListCreateShipment Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.OrderItemListCreateShipment(this, httpResponse, data);
  }
}

/** 
 * Handles API Request OrderItemList_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/orderitemlist_delete
 */
class OrderItemListDelete extends Request {
  /**
   * OrderItemListDelete Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.OrderItemListDelete(this, httpResponse, data);
  }
}

/** 
 * Handles API Request OrderItem_Add. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/orderitem_add
 */
class OrderItemAdd extends Request {
  /**
   * OrderItemAdd Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.OrderItemAdd(this, httpResponse, data);
  }
}

/** 
 * Handles API Request OrderItem_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/orderitem_update
 */
class OrderItemUpdate extends Request {
  /**
   * OrderItemUpdate Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.OrderItemUpdate(this, httpResponse, data);
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
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.OrderListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request OrderPayment_Capture. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/orderpayment_capture
 */
class OrderPaymentCapture extends Request {
  /**
   * OrderPaymentCapture Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.OrderPaymentCapture(this, httpResponse, data);
  }
}

/** 
 * Handles API Request OrderPayment_Refund. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/orderpayment_refund
 */
class OrderPaymentRefund extends Request {
  /**
   * OrderPaymentRefund Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.OrderPaymentRefund(this, httpResponse, data);
  }
}

/** 
 * Handles API Request OrderPayment_VOID. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/orderpayment_void
 */
class OrderPaymentVoid extends Request {
  /**
   * OrderPaymentVoid Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.OrderPaymentVoid(this, httpResponse, data);
  }
}

/** 
 * Handles API Request OrderShipmentList_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/ordershipmentlist_update
 */
class OrderShipmentListUpdate extends Request {
  /**
   * OrderShipmentListUpdate Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.OrderShipmentListUpdate(this, httpResponse, data);
  }
}

/** 
 * Handles API Request Order_Create. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/order_create
 */
class OrderCreate extends Request {
  /**
   * OrderCreate Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.OrderCreate(this, httpResponse, data);
  }
}

/** 
 * Handles API Request Order_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/order_delete
 */
class OrderDelete extends Request {
  /**
   * OrderDelete Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.OrderDelete(this, httpResponse, data);
  }
}

/** 
 * Handles API Request Order_Update_Customer_Information. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/order_update_customer_information
 */
class OrderUpdateCustomerInformation extends Request {
  /**
   * OrderUpdateCustomerInformation Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.OrderUpdateCustomerInformation(this, httpResponse, data);
  }
}

/** 
 * Handles API Request PriceGroupCustomer_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/pricegroupcustomer_update_assigned
 */
class PriceGroupCustomerUpdateAssigned extends Request {
  /**
   * PriceGroupCustomerUpdateAssigned Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.PriceGroupCustomerUpdateAssigned(this, httpResponse, data);
  }
}

/** 
 * Handles API Request PriceGroupList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/pricegrouplist_load_query
 */
class PriceGroupListLoadQuery extends ListQueryRequest {
  /**
   * PriceGroupListLoadQuery Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.PriceGroupListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request PriceGroupProduct_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/pricegroupproduct_update_assigned
 */
class PriceGroupProductUpdateAssigned extends Request {
  /**
   * PriceGroupProductUpdateAssigned Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.PriceGroupProductUpdateAssigned(this, httpResponse, data);
  }
}

/** 
 * Handles API Request ProductImage_Add. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/productimage_add
 */
class ProductImageAdd extends Request {
  /**
   * ProductImageAdd Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.ProductImageAdd(this, httpResponse, data);
  }
}

/** 
 * Handles API Request ProductImage_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/productimage_delete
 */
class ProductImageDelete extends Request {
  /**
   * ProductImageDelete Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.ProductImageDelete(this, httpResponse, data);
  }
}

/** 
 * Handles API Request ProductList_Adjust_Inventory. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/productlist_adjust_inventory
 */
class ProductListAdjustInventory extends Request {
  /**
   * ProductListAdjustInventory Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.ProductListAdjustInventory(this, httpResponse, data);
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
   * @param {?BaseClient} client
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
      'cancat_code',
      'page_code',
      'product_inventory',
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
  createResponse(httpResponse, data) {
    return new responses.ProductListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request ProductVariantList_Load_Product. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/productvariantlist_load_product
 */
class ProductVariantListLoadProduct extends Request {
  /**
   * ProductVariantListLoadProduct Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.ProductVariantListLoadProduct(this, httpResponse, data);
  }
}

/** 
 * Handles API Request Product_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/product_insert
 */
class ProductInsert extends Request {
  /**
   * ProductInsert Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.ProductInsert(this, httpResponse, data);
  }
}

/** 
 * Handles API Request Product_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/product_delete
 */
class ProductDelete extends Request {
  /**
   * ProductDelete Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.ProductDelete(this, httpResponse, data);
  }
}

/** 
 * Handles API Request Product_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/product_update
 */
class ProductUpdate extends Request {
  /**
   * ProductUpdate Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.ProductUpdate(this, httpResponse, data);
  }
}

/** 
 * Handles API Request Provision_Domain. Scope: Domain. 
 * @see https://docs.miva.com/json-api/functions/provision_domain
 */
class ProvisionDomain extends Request {
  /**
   * ProvisionDomain Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.ProvisionDomain(this, httpResponse, data);
  }
}

/** 
 * Handles API Request Provision_Store. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/provision_store
 */
class ProvisionStore extends Request {
  /**
   * ProvisionStore Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.ProvisionStore(this, httpResponse, data);
  }
}

/** 
 * Handles API Request CustomerAddressList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/customeraddresslist_load_query
 */
class CustomerAddressListLoadQuery extends ListQueryRequest {
  /**
   * CustomerAddressListLoadQuery Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.CustomerAddressListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request PrintQueueList_Load_Query. Scope: Domain. 
 * @see https://docs.miva.com/json-api/functions/printqueuelist_load_query
 */
class PrintQueueListLoadQuery extends ListQueryRequest {
  /**
   * PrintQueueListLoadQuery Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.PrintQueueListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request PrintQueueJobList_Load_Query. Scope: Domain. 
 * @see https://docs.miva.com/json-api/functions/printqueuejoblist_load_query
 */
class PrintQueueJobListLoadQuery extends ListQueryRequest {
  /**
   * PrintQueueJobListLoadQuery Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.PrintQueueJobListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request PrintQueueJob_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/printqueuejob_delete
 */
class PrintQueueJobDelete extends Request {
  /**
   * PrintQueueJobDelete Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.PrintQueueJobDelete(this, httpResponse, data);
  }
}

/** 
 * Handles API Request PrintQueueJob_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/printqueuejob_insert
 */
class PrintQueueJobInsert extends Request {
  /**
   * PrintQueueJobInsert Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.PrintQueueJobInsert(this, httpResponse, data);
  }
}

/** 
 * Handles API Request PrintQueueJob_Status. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/printqueuejob_status
 */
class PrintQueueJobStatus extends Request {
  /**
   * PrintQueueJobStatus Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.PrintQueueJobStatus(this, httpResponse, data);
  }
}

/** 
 * Handles API Request PaymentMethodList_Load. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/paymentmethodlist_load
 */
class PaymentMethodListLoad extends Request {
  /**
   * PaymentMethodListLoad Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.PaymentMethodListLoad(this, httpResponse, data);
  }
}

/** 
 * Handles API Request Order_Create_FromOrder. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/order_create_fromorder
 */
class OrderCreateFromOrder extends Request {
  /**
   * OrderCreateFromOrder Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.OrderCreateFromOrder(this, httpResponse, data);
  }
}

/** 
 * Handles API Request Order_Authorize. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/order_authorize
 */
class OrderAuthorize extends Request {
  /**
   * OrderAuthorize Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.OrderAuthorize(this, httpResponse, data);
  }
}

/** 
 * Handles API Request CustomerPaymentCardList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/customerpaymentcardlist_load_query
 */
class CustomerPaymentCardListLoadQuery extends ListQueryRequest {
  /**
   * CustomerPaymentCardListLoadQuery Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.CustomerPaymentCardListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request Branch_Copy. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/branch_copy
 */
class BranchCopy extends Request {
  /**
   * BranchCopy Constructor.
   * @param {?BaseClient} client
   * @param {?Branch} branch
   */
  constructor(client, branch = null) {
    super(client);
    this.function = 'Branch_Copy';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.sourceBranchId = null;
    this.destinationBranchId = null;
    this.notes = null;

    if (util.isInstanceOf(branch, models.Branch)) {
      if (branch.getId()) {
        this.setSourceBranchId(branch.getId());
      }
    }
  }

  /**
   * Get Source_Branch_ID.
   * @returns {number}
   */
  getSourceBranchId() {
    return this.sourceBranchId;
  }

  /**
   * Get Destination_Branch_ID.
   * @returns {number}
   */
  getDestinationBranchId() {
    return this.destinationBranchId;
  }

  /**
   * Get Notes.
   * @returns {string}
   */
  getNotes() {
    return this.notes;
  }

  /**
   * Set Source_Branch_ID.
   * @param {number} sourceBranchId
   * @returns {BranchCopy}
   */
  setSourceBranchId(sourceBranchId) {
    this.sourceBranchId = sourceBranchId;
    return this;
  }

  /**
   * Set Destination_Branch_ID.
   * @param {number} destinationBranchId
   * @returns {BranchCopy}
   */
  setDestinationBranchId(destinationBranchId) {
    this.destinationBranchId = destinationBranchId;
    return this;
  }

  /**
   * Set Notes.
   * @param {string} notes
   * @returns {BranchCopy}
   */
  setNotes(notes) {
    this.notes = notes;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.sourceBranchId)) {
      data['Source_Branch_ID'] = this.sourceBranchId;
    }

    if (!util.isNullOrUndefined(this.destinationBranchId)) {
      data['Destination_Branch_ID'] = this.destinationBranchId;
    }

    if (!util.isNullOrUndefined(this.notes)) {
      data['Notes'] = this.notes;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.BranchCopy(this, httpResponse, data);
  }
}

/** 
 * Handles API Request Branch_Create. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/branch_create
 */
class BranchCreate extends Request {
  /**
   * BranchCreate Constructor.
   * @param {?BaseClient} client
   * @param {?Branch} branch
   */
  constructor(client, branch = null) {
    super(client);
    this.function = 'Branch_Create';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.parentBranchId = null;
    this.name = null;
    this.color = null;
    this.changesetId = null;
    this.tags = null;

    if (util.isInstanceOf(branch, models.Branch)) {
      if (branch.getId()) {
        this.setParentBranchId(branch.getId());
      }
    }
  }

  /**
   * Get Parent_Branch_ID.
   * @returns {number}
   */
  getParentBranchId() {
    return this.parentBranchId;
  }

  /**
   * Get Name.
   * @returns {string}
   */
  getName() {
    return this.name;
  }

  /**
   * Get Color.
   * @returns {string}
   */
  getColor() {
    return this.color;
  }

  /**
   * Get Changeset_ID.
   * @returns {number}
   */
  getChangesetId() {
    return this.changesetId;
  }

  /**
   * Get Tags.
   * @returns {string}
   */
  getTags() {
    return this.tags;
  }

  /**
   * Set Parent_Branch_ID.
   * @param {number} parentBranchId
   * @returns {BranchCreate}
   */
  setParentBranchId(parentBranchId) {
    this.parentBranchId = parentBranchId;
    return this;
  }

  /**
   * Set Name.
   * @param {string} name
   * @returns {BranchCreate}
   */
  setName(name) {
    this.name = name;
    return this;
  }

  /**
   * Set Color.
   * @param {string} color
   * @returns {BranchCreate}
   */
  setColor(color) {
    this.color = color;
    return this;
  }

  /**
   * Set Changeset_ID.
   * @param {number} changesetId
   * @returns {BranchCreate}
   */
  setChangesetId(changesetId) {
    this.changesetId = changesetId;
    return this;
  }

  /**
   * Set Tags.
   * @param {string} tags
   * @returns {BranchCreate}
   */
  setTags(tags) {
    this.tags = tags;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.parentBranchId)) {
      data['Parent_Branch_ID'] = this.parentBranchId;
    }

    if (!util.isNullOrUndefined(this.name)) {
      data['Name'] = this.name;
    }

    if (!util.isNullOrUndefined(this.color)) {
      data['Color'] = this.color;
    }

    if (!util.isNullOrUndefined(this.changesetId)) {
      data['Changeset_ID'] = this.changesetId;
    }

    if (!util.isNullOrUndefined(this.tags)) {
      data['Tags'] = this.tags;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.BranchCreate(this, httpResponse, data);
  }
}

/** 
 * Handles API Request Branch_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/branch_delete
 */
class BranchDelete extends Request {
  /**
   * BranchDelete Constructor.
   * @param {?BaseClient} client
   * @param {?Branch} branch
   */
  constructor(client, branch = null) {
    super(client);
    this.function = 'Branch_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.branchId = null;
    this.branchName = null;

    if (util.isInstanceOf(branch, models.Branch)) {
      if (branch.getId()) {
        this.setBranchId(branch.getId());
      }

      this.setBranchName(branch.getName());
    }
  }

  /**
   * Get Branch_ID.
   * @returns {number}
   */
  getBranchId() {
    return this.branchId;
  }

  /**
   * Get Branch_Name.
   * @returns {string}
   */
  getBranchName() {
    return this.branchName;
  }

  /**
   * Set Branch_ID.
   * @param {number} branchId
   * @returns {BranchDelete}
   */
  setBranchId(branchId) {
    this.branchId = branchId;
    return this;
  }

  /**
   * Set Branch_Name.
   * @param {string} branchName
   * @returns {BranchDelete}
   */
  setBranchName(branchName) {
    this.branchName = branchName;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.branchId)) {
      data['Branch_ID'] = this.branchId;
    } else if (!util.isNullOrUndefined(this.branchName)) {
      data['Branch_Name'] = this.branchName;
    }

    if (!util.isNullOrUndefined(this.branchName)) {
      data['Branch_Name'] = this.branchName;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.BranchDelete(this, httpResponse, data);
  }
}

/** 
 * Handles API Request Changeset_Create. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/changeset_create
 */
class ChangesetCreate extends Request {
  /**
   * ChangesetCreate Constructor.
   * @param {?BaseClient} client
   * @param {?Branch} branch
   */
  constructor(client, branch = null) {
    super(client);
    this.function = 'Changeset_Create';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.branchId = null;
    this.branchName = null;
    this.editBranch = null;
    this.notes = null;
    this.tags = null;
    this.templateChanges = [];
    this.resourceGroupChanges = [];
    this.CSSResourceChanges = [];
    this.javaScriptResourceChanges = [];
    this.propertyChanges = [];

    if (util.isInstanceOf(branch, models.Branch)) {
      if (branch.getId()) {
        this.setBranchId(branch.getId());
      }

      this.setBranchName(branch.getName());
    }
  }

  /**
   * Get Branch_ID.
   * @returns {number}
   */
  getBranchId() {
    return this.branchId;
  }

  /**
   * Get Branch_Name.
   * @returns {string}
   */
  getBranchName() {
    return this.branchName;
  }

  /**
   * Get Edit_Branch.
   * @returns {string}
   */
  getEditBranch() {
    return this.editBranch;
  }

  /**
   * Get Notes.
   * @returns {string}
   */
  getNotes() {
    return this.notes;
  }

  /**
   * Get Tags.
   * @returns {string}
   */
  getTags() {
    return this.tags;
  }

  /**
   * Get Template_Changes.
   * @returns {TemplateChange[]}
   */
  getTemplateChanges() {
    return this.templateChanges;
  }

  /**
   * Get ResourceGroup_Changes.
   * @returns {ResourceGroupChange[]}
   */
  getResourceGroupChanges() {
    return this.resourceGroupChanges;
  }

  /**
   * Get CSSResource_Changes.
   * @returns {CSSResourceChange[]}
   */
  getCSSResourceChanges() {
    return this.CSSResourceChanges;
  }

  /**
   * Get JavaScriptResource_Changes.
   * @returns {JavaScriptResourceChange[]}
   */
  getJavaScriptResourceChanges() {
    return this.javaScriptResourceChanges;
  }

  /**
   * Get Property_Changes.
   * @returns {PropertyChange[]}
   */
  getPropertyChanges() {
    return this.propertyChanges;
  }

  /**
   * Set Branch_ID.
   * @param {number} branchId
   * @returns {ChangesetCreate}
   */
  setBranchId(branchId) {
    this.branchId = branchId;
    return this;
  }

  /**
   * Set Branch_Name.
   * @param {string} branchName
   * @returns {ChangesetCreate}
   */
  setBranchName(branchName) {
    this.branchName = branchName;
    return this;
  }

  /**
   * Set Edit_Branch.
   * @param {string} editBranch
   * @returns {ChangesetCreate}
   */
  setEditBranch(editBranch) {
    this.editBranch = editBranch;
    return this;
  }

  /**
   * Set Notes.
   * @param {string} notes
   * @returns {ChangesetCreate}
   */
  setNotes(notes) {
    this.notes = notes;
    return this;
  }

  /**
   * Set Tags.
   * @param {string} tags
   * @returns {ChangesetCreate}
   */
  setTags(tags) {
    this.tags = tags;
    return this;
  }

  /**
   * Set Template_Changes.
   * @param {TemplateChange[]} templateChanges
   * @throws {Error}
   * @returns {ChangesetCreate}
   */
  setTemplateChanges(templateChanges) {
    var i;
    var l;

    if (!util.isArray(templateChanges)) {
      throw new Error(util.format('Expected an array but got %s', typeof templateChanges));
    }

    for (i = 0, l = templateChanges.length; i < l; i++) {
      if (!util.isInstanceOf(templateChanges[i], models.TemplateChange) && util.isObject(templateChanges[i])) {
        templateChanges[i] = new models.TemplateChange(templateChanges[i]);
      } else if (!util.isInstanceOf(templateChanges[i], models.TemplateChange)) {
        throw new Error(util.format('Expected instance of TemplateChange or an Object but got %s',
          typeof templateChanges[i]));
      }
    }

    this.templateChanges = templateChanges;
    return this;
  }

  /**
   * Set ResourceGroup_Changes.
   * @param {ResourceGroupChange[]} resourceGroupChanges
   * @throws {Error}
   * @returns {ChangesetCreate}
   */
  setResourceGroupChanges(resourceGroupChanges) {
    var i;
    var l;

    if (!util.isArray(resourceGroupChanges)) {
      throw new Error(util.format('Expected an array but got %s', typeof resourceGroupChanges));
    }

    for (i = 0, l = resourceGroupChanges.length; i < l; i++) {
      if (!util.isInstanceOf(resourceGroupChanges[i], models.ResourceGroupChange) && util.isObject(resourceGroupChanges[i])) {
        resourceGroupChanges[i] = new models.ResourceGroupChange(resourceGroupChanges[i]);
      } else if (!util.isInstanceOf(resourceGroupChanges[i], models.ResourceGroupChange)) {
        throw new Error(util.format('Expected instance of ResourceGroupChange or an Object but got %s',
          typeof resourceGroupChanges[i]));
      }
    }

    this.resourceGroupChanges = resourceGroupChanges;
    return this;
  }

  /**
   * Set CSSResource_Changes.
   * @param {CSSResourceChange[]} CSSResourceChanges
   * @throws {Error}
   * @returns {ChangesetCreate}
   */
  setCSSResourceChanges(CSSResourceChanges) {
    var i;
    var l;

    if (!util.isArray(CSSResourceChanges)) {
      throw new Error(util.format('Expected an array but got %s', typeof CSSResourceChanges));
    }

    for (i = 0, l = CSSResourceChanges.length; i < l; i++) {
      if (!util.isInstanceOf(CSSResourceChanges[i], models.CSSResourceChange) && util.isObject(CSSResourceChanges[i])) {
        CSSResourceChanges[i] = new models.CSSResourceChange(CSSResourceChanges[i]);
      } else if (!util.isInstanceOf(CSSResourceChanges[i], models.CSSResourceChange)) {
        throw new Error(util.format('Expected instance of CSSResourceChange or an Object but got %s',
          typeof CSSResourceChanges[i]));
      }
    }

    this.CSSResourceChanges = CSSResourceChanges;
    return this;
  }

  /**
   * Set JavaScriptResource_Changes.
   * @param {JavaScriptResourceChange[]} javaScriptResourceChanges
   * @throws {Error}
   * @returns {ChangesetCreate}
   */
  setJavaScriptResourceChanges(javaScriptResourceChanges) {
    var i;
    var l;

    if (!util.isArray(javaScriptResourceChanges)) {
      throw new Error(util.format('Expected an array but got %s', typeof javaScriptResourceChanges));
    }

    for (i = 0, l = javaScriptResourceChanges.length; i < l; i++) {
      if (!util.isInstanceOf(javaScriptResourceChanges[i], models.JavaScriptResourceChange) && util.isObject(javaScriptResourceChanges[i])) {
        javaScriptResourceChanges[i] = new models.JavaScriptResourceChange(javaScriptResourceChanges[i]);
      } else if (!util.isInstanceOf(javaScriptResourceChanges[i], models.JavaScriptResourceChange)) {
        throw new Error(util.format('Expected instance of JavaScriptResourceChange or an Object but got %s',
          typeof javaScriptResourceChanges[i]));
      }
    }

    this.javaScriptResourceChanges = javaScriptResourceChanges;
    return this;
  }

  /**
   * Set Property_Changes.
   * @param {PropertyChange[]} propertyChanges
   * @throws {Error}
   * @returns {ChangesetCreate}
   */
  setPropertyChanges(propertyChanges) {
    var i;
    var l;

    if (!util.isArray(propertyChanges)) {
      throw new Error(util.format('Expected an array but got %s', typeof propertyChanges));
    }

    for (i = 0, l = propertyChanges.length; i < l; i++) {
      if (!util.isInstanceOf(propertyChanges[i], models.PropertyChange) && util.isObject(propertyChanges[i])) {
        propertyChanges[i] = new models.PropertyChange(propertyChanges[i]);
      } else if (!util.isInstanceOf(propertyChanges[i], models.PropertyChange)) {
        throw new Error(util.format('Expected instance of PropertyChange or an Object but got %s',
          typeof propertyChanges[i]));
      }
    }

    this.propertyChanges = propertyChanges;
    return this;
  }

  /**
   * Add Template_Changes.
   * @param {TemplateChange} templateChange
   * @throws {Error}
   * @returns {ChangesetCreate}
   */
  addTemplateChange(templateChange) {
    if (util.isInstanceOf(templateChange, models.TemplateChange)) {
      this.templateChanges.push(templateChange);
    } else if (util.isObject(templateChange)) {
      this.templateChanges.push(new models.TemplateChange(templateChange));
    } else {
      throw new Error(util.format('Expected instance of TemplateChange or Object but got %s',
        typeof templateChange));
    }

    return this;
  }

  /**
   * Add many TemplateChange.
   * @param {TemplateChange[]} templateChanges
   * @throws {Error}
   * @returns {ChangesetCreate}
   */
  addTemplateChanges(templateChanges) {
    var i;
    var l;

    if (!util.isArray(templateChanges)) {
      throw new Error(util.format('Expecting an array of TemplateChange but got %s',
        typeof templateChanges));
    }

    for (i = 0, l = templateChanges.length; i < l; i++) {
      if (util.isInstanceOf(templateChanges[i], models.TemplateChange)) {
        this.templateChanges.push(templateChanges[i]);
      } else if (util.isObject(templateChanges[i])) {
        this.templateChanges.push(new models.TemplateChange(templateChanges[i]));
      } else {
        throw new Error(util.format('Expected array of TemplateChange or an array of Object but got %s',
          typeof templateChanges[i]));
      }
    }

    return this;
  }

  /**
   * Add ResourceGroup_Changes.
   * @param {ResourceGroupChange} resourceGroupChange
   * @throws {Error}
   * @returns {ChangesetCreate}
   */
  addResourceGroupChange(resourceGroupChange) {
    if (util.isInstanceOf(resourceGroupChange, models.ResourceGroupChange)) {
      this.resourceGroupChanges.push(resourceGroupChange);
    } else if (util.isObject(resourceGroupChange)) {
      this.resourceGroupChanges.push(new models.ResourceGroupChange(resourceGroupChange));
    } else {
      throw new Error(util.format('Expected instance of ResourceGroupChange or Object but got %s',
        typeof resourceGroupChange));
    }

    return this;
  }

  /**
   * Add many ResourceGroupChange.
   * @param {ResourceGroupChange[]} resourceGroupChanges
   * @throws {Error}
   * @returns {ChangesetCreate}
   */
  addResourceGroupChanges(resourceGroupChanges) {
    var i;
    var l;

    if (!util.isArray(resourceGroupChanges)) {
      throw new Error(util.format('Expecting an array of ResourceGroupChange but got %s',
        typeof resourceGroupChanges));
    }

    for (i = 0, l = resourceGroupChanges.length; i < l; i++) {
      if (util.isInstanceOf(resourceGroupChanges[i], models.ResourceGroupChange)) {
        this.resourceGroupChanges.push(resourceGroupChanges[i]);
      } else if (util.isObject(resourceGroupChanges[i])) {
        this.resourceGroupChanges.push(new models.ResourceGroupChange(resourceGroupChanges[i]));
      } else {
        throw new Error(util.format('Expected array of ResourceGroupChange or an array of Object but got %s',
          typeof resourceGroupChanges[i]));
      }
    }

    return this;
  }

  /**
   * Add CSSResource_Changes.
   * @param {CSSResourceChange} CSSResourceChange
   * @throws {Error}
   * @returns {ChangesetCreate}
   */
  addCSSResourceChange(CSSResourceChange) {
    if (util.isInstanceOf(CSSResourceChange, models.CSSResourceChange)) {
      this.CSSResourceChanges.push(CSSResourceChange);
    } else if (util.isObject(CSSResourceChange)) {
      this.CSSResourceChanges.push(new models.CSSResourceChange(CSSResourceChange));
    } else {
      throw new Error(util.format('Expected instance of CSSResourceChange or Object but got %s',
        typeof CSSResourceChange));
    }

    return this;
  }

  /**
   * Add many CSSResourceChange.
   * @param {CSSResourceChange[]} CSSResourceChanges
   * @throws {Error}
   * @returns {ChangesetCreate}
   */
  addCSSResourceChanges(CSSResourceChanges) {
    var i;
    var l;

    if (!util.isArray(CSSResourceChanges)) {
      throw new Error(util.format('Expecting an array of CSSResourceChange but got %s',
        typeof CSSResourceChanges));
    }

    for (i = 0, l = CSSResourceChanges.length; i < l; i++) {
      if (util.isInstanceOf(CSSResourceChanges[i], models.CSSResourceChange)) {
        this.CSSResourceChanges.push(CSSResourceChanges[i]);
      } else if (util.isObject(CSSResourceChanges[i])) {
        this.CSSResourceChanges.push(new models.CSSResourceChange(CSSResourceChanges[i]));
      } else {
        throw new Error(util.format('Expected array of CSSResourceChange or an array of Object but got %s',
          typeof CSSResourceChanges[i]));
      }
    }

    return this;
  }

  /**
   * Add JavaScriptResource_Changes.
   * @param {JavaScriptResourceChange} javaScriptResourceChange
   * @throws {Error}
   * @returns {ChangesetCreate}
   */
  addJavaScriptResourceChange(javaScriptResourceChange) {
    if (util.isInstanceOf(javaScriptResourceChange, models.JavaScriptResourceChange)) {
      this.javaScriptResourceChanges.push(javaScriptResourceChange);
    } else if (util.isObject(javaScriptResourceChange)) {
      this.javaScriptResourceChanges.push(new models.JavaScriptResourceChange(javaScriptResourceChange));
    } else {
      throw new Error(util.format('Expected instance of JavaScriptResourceChange or Object but got %s',
        typeof javaScriptResourceChange));
    }

    return this;
  }

  /**
   * Add many JavaScriptResourceChange.
   * @param {JavaScriptResourceChange[]} javaScriptResourceChanges
   * @throws {Error}
   * @returns {ChangesetCreate}
   */
  addJavaScriptResourceChanges(javaScriptResourceChanges) {
    var i;
    var l;

    if (!util.isArray(javaScriptResourceChanges)) {
      throw new Error(util.format('Expecting an array of JavaScriptResourceChange but got %s',
        typeof javaScriptResourceChanges));
    }

    for (i = 0, l = javaScriptResourceChanges.length; i < l; i++) {
      if (util.isInstanceOf(javaScriptResourceChanges[i], models.JavaScriptResourceChange)) {
        this.javaScriptResourceChanges.push(javaScriptResourceChanges[i]);
      } else if (util.isObject(javaScriptResourceChanges[i])) {
        this.javaScriptResourceChanges.push(new models.JavaScriptResourceChange(javaScriptResourceChanges[i]));
      } else {
        throw new Error(util.format('Expected array of JavaScriptResourceChange or an array of Object but got %s',
          typeof javaScriptResourceChanges[i]));
      }
    }

    return this;
  }

  /**
   * Add Property_Changes.
   * @param {PropertyChange} propertyChange
   * @throws {Error}
   * @returns {ChangesetCreate}
   */
  addPropertyChange(propertyChange) {
    if (util.isInstanceOf(propertyChange, models.PropertyChange)) {
      this.propertyChanges.push(propertyChange);
    } else if (util.isObject(propertyChange)) {
      this.propertyChanges.push(new models.PropertyChange(propertyChange));
    } else {
      throw new Error(util.format('Expected instance of PropertyChange or Object but got %s',
        typeof propertyChange));
    }

    return this;
  }

  /**
   * Add many PropertyChange.
   * @param {PropertyChange[]} propertyChanges
   * @throws {Error}
   * @returns {ChangesetCreate}
   */
  addPropertyChanges(propertyChanges) {
    var i;
    var l;

    if (!util.isArray(propertyChanges)) {
      throw new Error(util.format('Expecting an array of PropertyChange but got %s',
        typeof propertyChanges));
    }

    for (i = 0, l = propertyChanges.length; i < l; i++) {
      if (util.isInstanceOf(propertyChanges[i], models.PropertyChange)) {
        this.propertyChanges.push(propertyChanges[i]);
      } else if (util.isObject(propertyChanges[i])) {
        this.propertyChanges.push(new models.PropertyChange(propertyChanges[i]));
      } else {
        throw new Error(util.format('Expected array of PropertyChange or an array of Object but got %s',
          typeof propertyChanges[i]));
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

    if (!util.isNullOrUndefined(this.branchId)) {
      data['Branch_ID'] = this.branchId;
    } else if (!util.isNullOrUndefined(this.branchName)) {
      data['Branch_Name'] = this.branchName;
    } else if (!util.isNullOrUndefined(this.editBranch)) {
      data['Edit_Branch'] = this.editBranch;
    }

    if (!util.isNullOrUndefined(this.branchName)) {
      data['Branch_Name'] = this.branchName;
    }

    if (!util.isNullOrUndefined(this.notes)) {
      data['Notes'] = this.notes;
    }

    if (!util.isNullOrUndefined(this.tags)) {
      data['Tags'] = this.tags;
    }

    if (util.isArray(this.templateChanges)) {
      data['Template_Changes'] = [];

      for (i = 0, l = this.templateChanges.length; i < l; i++) {
        if (util.isObject(this.templateChanges[i])) {
            data['Template_Changes'].push(this.templateChanges[i].toObject());
        }
      }
    }

    if (util.isArray(this.resourceGroupChanges)) {
      data['ResourceGroup_Changes'] = [];

      for (i = 0, l = this.resourceGroupChanges.length; i < l; i++) {
        if (util.isObject(this.resourceGroupChanges[i])) {
            data['ResourceGroup_Changes'].push(this.resourceGroupChanges[i].toObject());
        }
      }
    }

    if (util.isArray(this.CSSResourceChanges)) {
      data['CSSResource_Changes'] = [];

      for (i = 0, l = this.CSSResourceChanges.length; i < l; i++) {
        if (util.isObject(this.CSSResourceChanges[i])) {
            data['CSSResource_Changes'].push(this.CSSResourceChanges[i].toObject());
        }
      }
    }

    if (util.isArray(this.javaScriptResourceChanges)) {
      data['JavaScriptResource_Changes'] = [];

      for (i = 0, l = this.javaScriptResourceChanges.length; i < l; i++) {
        if (util.isObject(this.javaScriptResourceChanges[i])) {
            data['JavaScriptResource_Changes'].push(this.javaScriptResourceChanges[i].toObject());
        }
      }
    }

    if (util.isArray(this.propertyChanges)) {
      data['Property_Changes'] = [];

      for (i = 0, l = this.propertyChanges.length; i < l; i++) {
        if (util.isObject(this.propertyChanges[i])) {
            data['Property_Changes'].push(this.propertyChanges[i].toObject());
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
  createResponse(httpResponse, data) {
    return new responses.ChangesetCreate(this, httpResponse, data);
  }
}

/** 
 * Handles API Request ChangesetList_Merge. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/changesetlist_merge
 */
class ChangesetListMerge extends Request {
  /**
   * ChangesetListMerge Constructor.
   * @param {?BaseClient} client
   * @param {?Branch} branch
   */
  constructor(client, branch = null) {
    super(client);
    this.function = 'ChangesetList_Merge';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.sourceChangesetIds = [];
    this.destinationBranchId = null;
    this.notes = null;

    if (util.isInstanceOf(branch, models.Branch)) {
      if (branch.getId()) {
        this.setDestinationBranchId(branch.getId());
      }
    }
  }

  /**
   * Get Source_Changeset_IDs.
   * @returns {Array}
   */
  getSourceChangesetIds() {
    return this.sourceChangesetIds;
  }

  /**
   * Get Destination_Branch_ID.
   * @returns {number}
   */
  getDestinationBranchId() {
    return this.destinationBranchId;
  }

  /**
   * Get Notes.
   * @returns {string}
   */
  getNotes() {
    return this.notes;
  }

  /**
   * Set Destination_Branch_ID.
   * @param {number} destinationBranchId
   * @returns {ChangesetListMerge}
   */
  setDestinationBranchId(destinationBranchId) {
    this.destinationBranchId = destinationBranchId;
    return this;
  }

  /**
   * Set Notes.
   * @param {string} notes
   * @returns {ChangesetListMerge}
   */
  setNotes(notes) {
    this.notes = notes;
    return this;
  }

  /**
   * Add Source_Changeset_IDs.
   * @param {number} sourceChangesetId
   * @returns {ChangesetListMerge}
   */
  addSourceChangesetID(sourceChangesetId) {
    this.sourceChangesetIds.push(sourceChangesetId);
    return this;
  }

  /**
   * Add Changeset model.
   * @param {Changeset} changeset
   * @throws {Error}
   * @returns {ChangesetListMerge}
   */
  addChangeset(changeset) {
    if (!util.isInstanceOf(changeset, models.Changeset)) {
      throw new Error(util.format('Expected instance of Changeset but got %s',
        typeof changeset));
    }

    if (changeset.getId()) {
      this.sourceChangesetIds.push(changeset.getId());
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

    if (!util.isNullOrUndefined(this.destinationBranchId)) {
      data['Destination_Branch_ID'] = this.destinationBranchId;
    }

    data['Source_Changeset_IDs'] = this.sourceChangesetIds;

    if (!util.isNullOrUndefined(this.notes)) {
      data['Notes'] = this.notes;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ChangesetListMerge(this, httpResponse, data);
  }
}

/** 
 * Handles API Request ChangesetChangeList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/changesetchangelist_load_query
 */
class ChangesetChangeListLoadQuery extends ListQueryRequest {
  /**
   * ChangesetChangeListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?Changeset} changeset
   */
  constructor(client, changeset = null) {
    super(client);
    this.function = 'ChangesetChangeList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'item_type',
      'item_id',
      'item_version_id',
      'item_identifier'
    ];

    this.availableSortFields = [
      'item_type',
      'item_id',
      'item_version_id',
      'item_identifier'
    ];

    this.changesetId = null;

    if (util.isInstanceOf(changeset, models.Changeset)) {
      this.setChangesetId(changeset.getId());
    }
  }

  /**
   * Get Changeset_ID.
   * @returns {number}
   */
  getChangesetId() {
    return this.changesetId;
  }

  /**
   * Set Changeset_ID.
   * @param {number} changesetId
   * @returns {ChangesetChangeListLoadQuery}
   */
  setChangesetId(changesetId) {
    this.changesetId = changesetId;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['Changeset_ID'] = this.getChangesetId();

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ChangesetChangeListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request BranchList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/branchlist_load_query
 */
class BranchListLoadQuery extends ListQueryRequest {
  /**
   * BranchListLoadQuery Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'BranchList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'immutable',
      'branchkey',
      'name',
      'framework'
    ];

    this.availableSortFields = [
      'id',
      'immutable',
      'branchkey',
      'name',
      'framework'
    ];
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.BranchListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request BranchTemplateVersionList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/branchtemplateversionlist_load_query
 */
class BranchTemplateVersionListLoadQuery extends ListQueryRequest {
  /**
   * BranchTemplateVersionListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?Branch} branch
   */
  constructor(client, branch = null) {
    super(client);
    this.function = 'BranchTemplateVersionList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'templ_id',
      'parent_id',
      'item_id',
      'prop_id',
      'sync',
      'filename',
      'dtstamp',
      'user_id',
      'user_name'
    ];

    this.availableSortFields = [
      'id',
      'templ_id',
      'parent_id',
      'item_id',
      'prop_id',
      'sync',
      'filename',
      'dtstamp',
      'user_id',
      'user_name'
    ];

    this.availableOnDemandColumns = [
      'notes',
      'source',
      'settings'
    ];
    this.branchId = null;
    this.branchName = null;
    this.editBranch = null;
    this.changesetId = null;

    if (util.isInstanceOf(branch, models.Branch)) {
      if (branch.getId()) {
        this.setBranchId(branch.getId());
      }

      this.setBranchName(branch.getName());
    }
  }

  /**
   * Get Branch_ID.
   * @returns {number}
   */
  getBranchId() {
    return this.branchId;
  }

  /**
   * Get Branch_Name.
   * @returns {string}
   */
  getBranchName() {
    return this.branchName;
  }

  /**
   * Get Edit_Branch.
   * @returns {string}
   */
  getEditBranch() {
    return this.editBranch;
  }

  /**
   * Get Changeset_ID.
   * @returns {number}
   */
  getChangesetId() {
    return this.changesetId;
  }

  /**
   * Set Branch_ID.
   * @param {number} branchId
   * @returns {BranchTemplateVersionListLoadQuery}
   */
  setBranchId(branchId) {
    this.branchId = branchId;
    return this;
  }

  /**
   * Set Branch_Name.
   * @param {string} branchName
   * @returns {BranchTemplateVersionListLoadQuery}
   */
  setBranchName(branchName) {
    this.branchName = branchName;
    return this;
  }

  /**
   * Set Edit_Branch.
   * @param {string} editBranch
   * @returns {BranchTemplateVersionListLoadQuery}
   */
  setEditBranch(editBranch) {
    this.editBranch = editBranch;
    return this;
  }

  /**
   * Set Changeset_ID.
   * @param {number} changesetId
   * @returns {BranchTemplateVersionListLoadQuery}
   */
  setChangesetId(changesetId) {
    this.changesetId = changesetId;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.branchId)) {
      data['Branch_ID'] = this.branchId;
    } else if (!util.isNullOrUndefined(this.branchName)) {
      data['Branch_Name'] = this.branchName;
    } else if (!util.isNullOrUndefined(this.editBranch)) {
      data['Edit_Branch'] = this.editBranch;
    }

    if (!util.isNullOrUndefined(this.branchName)) {
      data['Branch_Name'] = this.branchName;
    }

    if (!util.isNullOrUndefined(this.changesetId)) {
      data['Changeset_ID'] = this.changesetId;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.BranchTemplateVersionListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request BranchCSSResourceVersionList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/branchcssresourceversionlist_load_query
 */
class BranchCSSResourceVersionListLoadQuery extends ListQueryRequest {
  /**
   * BranchCSSResourceVersionListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?Branch} branch
   */
  constructor(client, branch = null) {
    super(client);
    this.function = 'BranchCSSResourceVersionList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'res_id',
      'code',
      'type',
      'is_global',
      'active',
      'file',
      'templ_id',
      'user_id',
      'user_name',
      'source_user_id',
      'source_user_name'
    ];

    this.availableSortFields = [
      'id',
      'res_id',
      'code',
      'type',
      'is_global',
      'active',
      'file',
      'templ_id',
      'user_id',
      'user_name',
      'source_user_id',
      'source_user_name'
    ];

    this.availableOnDemandColumns = [
      'source',
      'linkedpages',
      'linkedresources',
      'source_notes'
    ];
    this.branchId = null;
    this.branchName = null;
    this.editBranch = null;
    this.changesetId = null;

    if (util.isInstanceOf(branch, models.Branch)) {
      if (branch.getId()) {
        this.setBranchId(branch.getId());
      }

      this.setBranchName(branch.getName());
    }
  }

  /**
   * Get Branch_ID.
   * @returns {number}
   */
  getBranchId() {
    return this.branchId;
  }

  /**
   * Get Branch_Name.
   * @returns {string}
   */
  getBranchName() {
    return this.branchName;
  }

  /**
   * Get Edit_Branch.
   * @returns {string}
   */
  getEditBranch() {
    return this.editBranch;
  }

  /**
   * Get Changeset_ID.
   * @returns {number}
   */
  getChangesetId() {
    return this.changesetId;
  }

  /**
   * Set Branch_ID.
   * @param {number} branchId
   * @returns {BranchCSSResourceVersionListLoadQuery}
   */
  setBranchId(branchId) {
    this.branchId = branchId;
    return this;
  }

  /**
   * Set Branch_Name.
   * @param {string} branchName
   * @returns {BranchCSSResourceVersionListLoadQuery}
   */
  setBranchName(branchName) {
    this.branchName = branchName;
    return this;
  }

  /**
   * Set Edit_Branch.
   * @param {string} editBranch
   * @returns {BranchCSSResourceVersionListLoadQuery}
   */
  setEditBranch(editBranch) {
    this.editBranch = editBranch;
    return this;
  }

  /**
   * Set Changeset_ID.
   * @param {number} changesetId
   * @returns {BranchCSSResourceVersionListLoadQuery}
   */
  setChangesetId(changesetId) {
    this.changesetId = changesetId;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.branchId)) {
      data['Branch_ID'] = this.branchId;
    } else if (!util.isNullOrUndefined(this.branchName)) {
      data['Branch_Name'] = this.branchName;
    } else if (!util.isNullOrUndefined(this.editBranch)) {
      data['Edit_Branch'] = this.editBranch;
    }

    if (!util.isNullOrUndefined(this.branchName)) {
      data['Branch_Name'] = this.branchName;
    }

    if (!util.isNullOrUndefined(this.changesetId)) {
      data['Changeset_ID'] = this.changesetId;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.BranchCSSResourceVersionListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request BranchJavaScriptResourceVersionList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/branchjavascriptresourceversionlist_load_query
 */
class BranchJavaScriptResourceVersionListLoadQuery extends ListQueryRequest {
  /**
   * BranchJavaScriptResourceVersionListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?Branch} branch
   */
  constructor(client, branch = null) {
    super(client);
    this.function = 'BranchJavaScriptResourceVersionList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'res_id',
      'code',
      'type',
      'is_global',
      'active',
      'file',
      'templ_id',
      'user_id',
      'user_name',
      'source_user_id',
      'source_user_name'
    ];

    this.availableSortFields = [
      'id',
      'res_id',
      'code',
      'type',
      'is_global',
      'active',
      'file',
      'templ_id',
      'user_id',
      'user_name',
      'source_user_id',
      'source_user_name'
    ];

    this.availableOnDemandColumns = [
      'source',
      'linkedpages',
      'linkedresources',
      'source_notes'
    ];
    this.branchId = null;
    this.branchName = null;
    this.editBranch = null;
    this.changesetId = null;

    if (util.isInstanceOf(branch, models.Branch)) {
      if (branch.getId()) {
        this.setBranchId(branch.getId());
      }

      this.setBranchName(branch.getName());
    }
  }

  /**
   * Get Branch_ID.
   * @returns {number}
   */
  getBranchId() {
    return this.branchId;
  }

  /**
   * Get Branch_Name.
   * @returns {string}
   */
  getBranchName() {
    return this.branchName;
  }

  /**
   * Get Edit_Branch.
   * @returns {string}
   */
  getEditBranch() {
    return this.editBranch;
  }

  /**
   * Get Changeset_ID.
   * @returns {number}
   */
  getChangesetId() {
    return this.changesetId;
  }

  /**
   * Set Branch_ID.
   * @param {number} branchId
   * @returns {BranchJavaScriptResourceVersionListLoadQuery}
   */
  setBranchId(branchId) {
    this.branchId = branchId;
    return this;
  }

  /**
   * Set Branch_Name.
   * @param {string} branchName
   * @returns {BranchJavaScriptResourceVersionListLoadQuery}
   */
  setBranchName(branchName) {
    this.branchName = branchName;
    return this;
  }

  /**
   * Set Edit_Branch.
   * @param {string} editBranch
   * @returns {BranchJavaScriptResourceVersionListLoadQuery}
   */
  setEditBranch(editBranch) {
    this.editBranch = editBranch;
    return this;
  }

  /**
   * Set Changeset_ID.
   * @param {number} changesetId
   * @returns {BranchJavaScriptResourceVersionListLoadQuery}
   */
  setChangesetId(changesetId) {
    this.changesetId = changesetId;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.branchId)) {
      data['Branch_ID'] = this.branchId;
    } else if (!util.isNullOrUndefined(this.branchName)) {
      data['Branch_Name'] = this.branchName;
    } else if (!util.isNullOrUndefined(this.editBranch)) {
      data['Edit_Branch'] = this.editBranch;
    }

    if (!util.isNullOrUndefined(this.branchName)) {
      data['Branch_Name'] = this.branchName;
    }

    if (!util.isNullOrUndefined(this.changesetId)) {
      data['Changeset_ID'] = this.changesetId;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.BranchJavaScriptResourceVersionListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request ChangesetList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/changesetlist_load_query
 */
class ChangesetListLoadQuery extends ListQueryRequest {
  /**
   * ChangesetListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?Branch} branch
   */
  constructor(client, branch = null) {
    super(client);
    this.function = 'ChangesetList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'branch_id',
      'user_id',
      'user_name',
      'dtstamp',
      'notes',
      'user_name'
    ];

    this.availableSortFields = [
      'id',
      'branch_id',
      'user_id',
      'user_name',
      'dtstamp',
      'notes',
      'user_name'
    ];

    this.branchId = null;
    this.branchName = null;
    this.editBranch = null;

    if (util.isInstanceOf(branch, models.Branch)) {
      if (branch.getId()) {
        this.setBranchId(branch.getId());
      }
    }
  }

  /**
   * Get Branch_ID.
   * @returns {number}
   */
  getBranchId() {
    return this.branchId;
  }

  /**
   * Get Branch_Name.
   * @returns {string}
   */
  getBranchName() {
    return this.branchName;
  }

  /**
   * Get Edit_Branch.
   * @returns {string}
   */
  getEditBranch() {
    return this.editBranch;
  }

  /**
   * Set Branch_ID.
   * @param {number} branchId
   * @returns {ChangesetListLoadQuery}
   */
  setBranchId(branchId) {
    this.branchId = branchId;
    return this;
  }

  /**
   * Set Branch_Name.
   * @param {string} branchName
   * @returns {ChangesetListLoadQuery}
   */
  setBranchName(branchName) {
    this.branchName = branchName;
    return this;
  }

  /**
   * Set Edit_Branch.
   * @param {string} editBranch
   * @returns {ChangesetListLoadQuery}
   */
  setEditBranch(editBranch) {
    this.editBranch = editBranch;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.branchId)) {
      data['Branch_ID'] = this.branchId;
    } else if (!util.isNullOrUndefined(this.branchName)) {
      data['Branch_Name'] = this.branchName;
    } else if (!util.isNullOrUndefined(this.editBranch)) {
      data['Edit_Branch'] = this.editBranch;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ChangesetListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request ChangesetTemplateVersionList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/changesettemplateversionlist_load_query
 */
class ChangesetTemplateVersionListLoadQuery extends ListQueryRequest {
  /**
   * ChangesetTemplateVersionListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?Changeset} changeset
   */
  constructor(client, changeset = null) {
    super(client);
    this.function = 'ChangesetTemplateVersionList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'templ_id',
      'parent_id',
      'item_id',
      'prop_id',
      'sync',
      'filename',
      'dtstamp',
      'user_id',
      'user_name'
    ];

    this.availableSortFields = [
      'id',
      'templ_id',
      'parent_id',
      'item_id',
      'prop_id',
      'sync',
      'filename',
      'dtstamp',
      'user_id',
      'user_name'
    ];

    this.availableOnDemandColumns = [
      'notes',
      'source',
      'settings'
    ];
    this.changesetId = null;

    if (util.isInstanceOf(changeset, models.Changeset)) {
      if (changeset.getId()) {
        this.setChangesetId(changeset.getId());
      }
    }
  }

  /**
   * Get Changeset_ID.
   * @returns {number}
   */
  getChangesetId() {
    return this.changesetId;
  }

  /**
   * Set Changeset_ID.
   * @param {number} changesetId
   * @returns {ChangesetTemplateVersionListLoadQuery}
   */
  setChangesetId(changesetId) {
    this.changesetId = changesetId;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.changesetId)) {
      data['Changeset_ID'] = this.changesetId;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ChangesetTemplateVersionListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request ChangesetCSSResourceVersionList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/changesetcssresourceversionlist_load_query
 */
class ChangesetCSSResourceVersionListLoadQuery extends ListQueryRequest {
  /**
   * ChangesetCSSResourceVersionListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?Changeset} changeset
   */
  constructor(client, changeset = null) {
    super(client);
    this.function = 'ChangesetCSSResourceVersionList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'res_id',
      'code',
      'type',
      'is_global',
      'active',
      'file',
      'templ_id',
      'user_id',
      'user_name',
      'source_user_id',
      'source_user_name'
    ];

    this.availableSortFields = [
      'id',
      'res_id',
      'code',
      'type',
      'is_global',
      'active',
      'file',
      'templ_id',
      'user_id',
      'user_name',
      'source_user_id',
      'source_user_name'
    ];

    this.availableOnDemandColumns = [
      'source',
      'source_notes'
    ];
    this.changesetId = null;

    if (util.isInstanceOf(changeset, models.Changeset)) {
      this.setChangesetId(changeset.getId());
    }
  }

  /**
   * Get Changeset_ID.
   * @returns {number}
   */
  getChangesetId() {
    return this.changesetId;
  }

  /**
   * Set Changeset_ID.
   * @param {number} changesetId
   * @returns {ChangesetCSSResourceVersionListLoadQuery}
   */
  setChangesetId(changesetId) {
    this.changesetId = changesetId;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['Changeset_ID'] = this.getChangesetId();

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ChangesetCSSResourceVersionListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request ChangesetJavaScriptResourceVersionList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/changesetjavascriptresourceversionlist_load_query
 */
class ChangesetJavaScriptResourceVersionListLoadQuery extends ListQueryRequest {
  /**
   * ChangesetJavaScriptResourceVersionListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?Changeset} changeset
   */
  constructor(client, changeset = null) {
    super(client);
    this.function = 'ChangesetJavaScriptResourceVersionList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'res_id',
      'code',
      'type',
      'is_global',
      'active',
      'file',
      'templ_id',
      'user_id',
      'user_name',
      'source_user_id',
      'source_user_name'
    ];

    this.availableSortFields = [
      'id',
      'res_id',
      'code',
      'type',
      'is_global',
      'active',
      'file',
      'templ_id',
      'user_id',
      'user_name',
      'source_user_id',
      'source_user_name'
    ];

    this.availableOnDemandColumns = [
      'source',
      'source_notes'
    ];
    this.changesetId = null;

    if (util.isInstanceOf(changeset, models.Changeset)) {
      this.setChangesetId(changeset.getId());
    }
  }

  /**
   * Get Changeset_ID.
   * @returns {number}
   */
  getChangesetId() {
    return this.changesetId;
  }

  /**
   * Set Changeset_ID.
   * @param {number} changesetId
   * @returns {ChangesetJavaScriptResourceVersionListLoadQuery}
   */
  setChangesetId(changesetId) {
    this.changesetId = changesetId;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['Changeset_ID'] = this.getChangesetId();

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ChangesetJavaScriptResourceVersionListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request CustomerCreditHistoryList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/customercredithistorylist_load_query
 */
class CustomerCreditHistoryListLoadQuery extends ListQueryRequest {
  /**
   * CustomerCreditHistoryListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?Customer} customer
   */
  constructor(client, customer = null) {
    super(client);
    this.function = 'CustomerCreditHistoryList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'user_name',
      'order_id',
      'txref',
      'descrip',
      'amount',
      'dtstamp',
      'id'
    ];

    this.availableSortFields = [
      'user_name',
      'order_id',
      'txref',
      'descrip',
      'amount',
      'dtstamp',
      'id'
    ];

    this.availableOnDemandColumns = [
      'source'
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
   * @returns {CustomerCreditHistoryListLoadQuery}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
    return this;
  }

  /**
   * Set Edit_Customer.
   * @param {string} editCustomer
   * @returns {CustomerCreditHistoryListLoadQuery}
   */
  setEditCustomer(editCustomer) {
    this.editCustomer = editCustomer;
    return this;
  }

  /**
   * Set Customer_Login.
   * @param {string} customerLogin
   * @returns {CustomerCreditHistoryListLoadQuery}
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
  createResponse(httpResponse, data) {
    return new responses.CustomerCreditHistoryListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request CustomerCreditHistory_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/customercredithistory_insert
 */
class CustomerCreditHistoryInsert extends Request {
  /**
   * CustomerCreditHistoryInsert Constructor.
   * @param {?BaseClient} client
   * @param {?Customer} customer
   */
  constructor(client, customer = null) {
    super(client);
    this.function = 'CustomerCreditHistory_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.customerId = null;
    this.editCustomer = null;
    this.customerLogin = null;
    this.amount = null;
    this.description = null;
    this.transactionReference = null;

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
   * Get Amount.
   * @returns {number}
   */
  getAmount() {
    return this.amount;
  }

  /**
   * Get Description.
   * @returns {string}
   */
  getDescription() {
    return this.description;
  }

  /**
   * Get TransactionReference.
   * @returns {string}
   */
  getTransactionReference() {
    return this.transactionReference;
  }

  /**
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {CustomerCreditHistoryInsert}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
    return this;
  }

  /**
   * Set Edit_Customer.
   * @param {string} editCustomer
   * @returns {CustomerCreditHistoryInsert}
   */
  setEditCustomer(editCustomer) {
    this.editCustomer = editCustomer;
    return this;
  }

  /**
   * Set Customer_Login.
   * @param {string} customerLogin
   * @returns {CustomerCreditHistoryInsert}
   */
  setCustomerLogin(customerLogin) {
    this.customerLogin = customerLogin;
    return this;
  }

  /**
   * Set Amount.
   * @param {number} amount
   * @returns {CustomerCreditHistoryInsert}
   */
  setAmount(amount) {
    this.amount = amount;
    return this;
  }

  /**
   * Set Description.
   * @param {string} description
   * @returns {CustomerCreditHistoryInsert}
   */
  setDescription(description) {
    this.description = description;
    return this;
  }

  /**
   * Set TransactionReference.
   * @param {string} transactionReference
   * @returns {CustomerCreditHistoryInsert}
   */
  setTransactionReference(transactionReference) {
    this.transactionReference = transactionReference;
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

    data['Amount'] = this.amount;

    data['Description'] = this.description;

    if (!util.isNullOrUndefined(this.transactionReference)) {
      data['TransactionReference'] = this.transactionReference;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CustomerCreditHistoryInsert(this, httpResponse, data);
  }
}

/** 
 * Handles API Request CustomerCreditHistory_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/customercredithistory_delete
 */
class CustomerCreditHistoryDelete extends Request {
  /**
   * CustomerCreditHistoryDelete Constructor.
   * @param {?BaseClient} client
   * @param {?CustomerCreditHistory} customerCreditHistory
   */
  constructor(client, customerCreditHistory = null) {
    super(client);
    this.function = 'CustomerCreditHistory_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.customerCreditHistoryId = null;

    if (util.isInstanceOf(customerCreditHistory, models.CustomerCreditHistory)) {
      this.setCustomerCreditHistoryId(customerCreditHistory.getId());
    }
  }

  /**
   * Get CustomerCreditHistory_ID.
   * @returns {number}
   */
  getCustomerCreditHistoryId() {
    return this.customerCreditHistoryId;
  }

  /**
   * Set CustomerCreditHistory_ID.
   * @param {number} customerCreditHistoryId
   * @returns {CustomerCreditHistoryDelete}
   */
  setCustomerCreditHistoryId(customerCreditHistoryId) {
    this.customerCreditHistoryId = customerCreditHistoryId;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['CustomerCreditHistory_ID'] = this.customerCreditHistoryId;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CustomerCreditHistoryDelete(this, httpResponse, data);
  }
}

/** 
 * Handles API Request OrderCoupon_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/ordercoupon_update_assigned
 */
class OrderCouponUpdateAssigned extends Request {
  /**
   * OrderCouponUpdateAssigned Constructor.
   * @param {?BaseClient} client
   * @param {?Order} order
   */
  constructor(client, order = null) {
    super(client);
    this.function = 'OrderCoupon_Update_Assigned';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.orderId = null;
    this.couponId = null;
    this.editCoupon = null;
    this.couponCode = null;
    this.assigned = null;

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
   * Set Order_ID.
   * @param {number} orderId
   * @returns {OrderCouponUpdateAssigned}
   */
  setOrderId(orderId) {
    this.orderId = orderId;
    return this;
  }

  /**
   * Set Coupon_ID.
   * @param {number} couponId
   * @returns {OrderCouponUpdateAssigned}
   */
  setCouponId(couponId) {
    this.couponId = couponId;
    return this;
  }

  /**
   * Set Edit_Coupon.
   * @param {string} editCoupon
   * @returns {OrderCouponUpdateAssigned}
   */
  setEditCoupon(editCoupon) {
    this.editCoupon = editCoupon;
    return this;
  }

  /**
   * Set Coupon_Code.
   * @param {string} couponCode
   * @returns {OrderCouponUpdateAssigned}
   */
  setCouponCode(couponCode) {
    this.couponCode = couponCode;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {OrderCouponUpdateAssigned}
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

    if (!util.isNullOrUndefined(this.orderId)) {
      data['Order_ID'] = this.orderId;
    }

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

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.OrderCouponUpdateAssigned(this, httpResponse, data);
  }
}

/** 
 * Handles API Request OrderPriceGroup_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/orderpricegroup_update_assigned
 */
class OrderPriceGroupUpdateAssigned extends Request {
  /**
   * OrderPriceGroupUpdateAssigned Constructor.
   * @param {?BaseClient} client
   * @param {?Order} order
   */
  constructor(client, order = null) {
    super(client);
    this.function = 'OrderPriceGroup_Update_Assigned';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.orderId = null;
    this.priceGroupId = null;
    this.priceGroupName = null;
    this.assigned = null;

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
   * Set Order_ID.
   * @param {number} orderId
   * @returns {OrderPriceGroupUpdateAssigned}
   */
  setOrderId(orderId) {
    this.orderId = orderId;
    return this;
  }

  /**
   * Set PriceGroup_ID.
   * @param {number} priceGroupId
   * @returns {OrderPriceGroupUpdateAssigned}
   */
  setPriceGroupId(priceGroupId) {
    this.priceGroupId = priceGroupId;
    return this;
  }

  /**
   * Set PriceGroup_Name.
   * @param {string} priceGroupName
   * @returns {OrderPriceGroupUpdateAssigned}
   */
  setPriceGroupName(priceGroupName) {
    this.priceGroupName = priceGroupName;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {OrderPriceGroupUpdateAssigned}
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

    if (!util.isNullOrUndefined(this.orderId)) {
      data['Order_ID'] = this.orderId;
    }

    if (!util.isNullOrUndefined(this.priceGroupId)) {
      data['PriceGroup_ID'] = this.priceGroupId;
    } else if (!util.isNullOrUndefined(this.priceGroupName)) {
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
  createResponse(httpResponse, data) {
    return new responses.OrderPriceGroupUpdateAssigned(this, httpResponse, data);
  }
}

/** 
 * Handles API Request OrderItemList_CreateReturn. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/orderitemlist_createreturn
 */
class OrderItemListCreateReturn extends Request {
  /**
   * OrderItemListCreateReturn Constructor.
   * @param {?BaseClient} client
   * @param {?Order} order
   */
  constructor(client, order = null) {
    super(client);
    this.function = 'OrderItemList_CreateReturn';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.orderId = null;
    this.lineIds = [];

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
   * Set Order_ID.
   * @param {number} orderId
   * @returns {OrderItemListCreateReturn}
   */
  setOrderId(orderId) {
    this.orderId = orderId;
    return this;
  }

  /**
   * Add Line_IDs.
   * @param {number} lineId
   * @returns {OrderItemListCreateReturn}
   */
  addLineId(lineId) {
    this.lineIds.push(lineId);
    return this;
  }

  /**
   * Add OrderItem model.
   * @param {OrderItem} orderItem
   * @throws {Error}
   * @returns {OrderItemListCreateReturn}
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

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.OrderItemListCreateReturn(this, httpResponse, data);
  }
}

/** 
 * Handles API Request OrderReturnList_Received. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/orderreturnlist_received
 */
class OrderReturnListReceived extends Request {
  /**
   * OrderReturnListReceived Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'OrderReturnList_Received';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.returns = [];
  }

  /**
   * Get Returns.
   * @returns {ReceivedReturn[]}
   */
  getReturns() {
    return this.returns;
  }

  /**
   * Set Returns.
   * @param {ReceivedReturn[]} returns
   * @throws {Error}
   * @returns {OrderReturnListReceived}
   */
  setReturns(returns) {
    var i;
    var l;

    if (!util.isArray(returns)) {
      throw new Error(util.format('Expected an array but got %s', typeof returns));
    }

    for (i = 0, l = returns.length; i < l; i++) {
      if (!util.isInstanceOf(returns[i], models.ReceivedReturn) && util.isObject(returns[i])) {
        returns[i] = new models.ReceivedReturn(returns[i]);
      } else if (!util.isInstanceOf(returns[i], models.ReceivedReturn)) {
        throw new Error(util.format('Expected instance of ReceivedReturn or an Object but got %s',
          typeof returns[i]));
      }
    }

    this.returns = returns;
    return this;
  }

  /**
   * Add Returns.
   * @param {ReceivedReturn} receivedReturn
   * @throws {Error}
   * @returns {OrderReturnListReceived}
   */
  addReceivedReturn(receivedReturn) {
    if (util.isInstanceOf(receivedReturn, models.ReceivedReturn)) {
      this.returns.push(receivedReturn);
    } else if (util.isObject(receivedReturn)) {
      this.returns.push(new models.ReceivedReturn(receivedReturn));
    } else {
      throw new Error(util.format('Expected instance of ReceivedReturn or Object but got %s',
        typeof receivedReturn));
    }

    return this;
  }

  /**
   * Add many ReceivedReturn.
   * @param {ReceivedReturn[]} returns
   * @throws {Error}
   * @returns {OrderReturnListReceived}
   */
  addReturns(returns) {
    var i;
    var l;

    if (!util.isArray(returns)) {
      throw new Error(util.format('Expecting an array of ReceivedReturn but got %s',
        typeof returns));
    }

    for (i = 0, l = returns.length; i < l; i++) {
      if (util.isInstanceOf(returns[i], models.ReceivedReturn)) {
        this.returns.push(returns[i]);
      } else if (util.isObject(returns[i])) {
        this.returns.push(new models.ReceivedReturn(returns[i]));
      } else {
        throw new Error(util.format('Expected array of ReceivedReturn or an array of Object but got %s',
          typeof returns[i]));
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

    if (util.isArray(this.returns)) {
      data['Returns'] = [];

      for (i = 0, l = this.returns.length; i < l; i++) {
        data['Returns'].push(this.returns[i].toObject());
      }
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.OrderReturnListReceived(this, httpResponse, data);
  }
}

/** 
 * Handles API Request BranchPropertyVersionList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/branchpropertyversionlist_load_query
 */
class BranchPropertyVersionListLoadQuery extends ListQueryRequest {
  /**
   * BranchPropertyVersionListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?Branch} branch
   */
  constructor(client, branch = null) {
    super(client);
    this.function = 'BranchPropertyVersionList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'prop_id',
      'type',
      'code',
      'product_id',
      'cat_id',
      'sync',
      'templ_id',
      'version_id',
      'version_user_id',
      'version_user_name',
      'source_user_id',
      'source_user_name'
    ];

    this.availableSortFields = [
      'prop_id',
      'type',
      'code',
      'product_id',
      'cat_id',
      'sync',
      'templ_id',
      'version_id',
      'version_user_id',
      'version_user_name',
      'source_user_id',
      'source_user_name'
    ];

    this.availableOnDemandColumns = [
      'settings',
      'product',
      'category',
      'source',
      'source_notes'
    ];
    this.branchId = null;
    this.branchName = null;
    this.editBranch = null;
    this.changesetId = null;

    if (util.isInstanceOf(branch, models.Branch)) {
      if (branch.getId()) {
        this.setBranchId(branch.getId());
      }

      this.setBranchName(branch.getName());
    }
  }

  /**
   * Get Branch_ID.
   * @returns {number}
   */
  getBranchId() {
    return this.branchId;
  }

  /**
   * Get Branch_Name.
   * @returns {string}
   */
  getBranchName() {
    return this.branchName;
  }

  /**
   * Get Edit_Branch.
   * @returns {string}
   */
  getEditBranch() {
    return this.editBranch;
  }

  /**
   * Get Changeset_ID.
   * @returns {number}
   */
  getChangesetId() {
    return this.changesetId;
  }

  /**
   * Set Branch_ID.
   * @param {number} branchId
   * @returns {BranchPropertyVersionListLoadQuery}
   */
  setBranchId(branchId) {
    this.branchId = branchId;
    return this;
  }

  /**
   * Set Branch_Name.
   * @param {string} branchName
   * @returns {BranchPropertyVersionListLoadQuery}
   */
  setBranchName(branchName) {
    this.branchName = branchName;
    return this;
  }

  /**
   * Set Edit_Branch.
   * @param {string} editBranch
   * @returns {BranchPropertyVersionListLoadQuery}
   */
  setEditBranch(editBranch) {
    this.editBranch = editBranch;
    return this;
  }

  /**
   * Set Changeset_ID.
   * @param {number} changesetId
   * @returns {BranchPropertyVersionListLoadQuery}
   */
  setChangesetId(changesetId) {
    this.changesetId = changesetId;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.branchId)) {
      data['Branch_ID'] = this.branchId;
    } else if (!util.isNullOrUndefined(this.branchName)) {
      data['Branch_Name'] = this.branchName;
    } else if (!util.isNullOrUndefined(this.editBranch)) {
      data['Edit_Branch'] = this.editBranch;
    }

    if (!util.isNullOrUndefined(this.branchName)) {
      data['Branch_Name'] = this.branchName;
    }

    if (!util.isNullOrUndefined(this.changesetId)) {
      data['Changeset_ID'] = this.changesetId;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.BranchPropertyVersionListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request ChangesetPropertyVersionList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/changesetpropertyversionlist_load_query
 */
class ChangesetPropertyVersionListLoadQuery extends ListQueryRequest {
  /**
   * ChangesetPropertyVersionListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?Changeset} changeset
   */
  constructor(client, changeset = null) {
    super(client);
    this.function = 'ChangesetPropertyVersionList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'prop_id',
      'type',
      'code',
      'product_id',
      'cat_id',
      'sync',
      'version_id',
      'version_user_id',
      'version_user_name',
      'source_user_id',
      'source_user_name'
    ];

    this.availableSortFields = [
      'id',
      'prop_id',
      'type',
      'code',
      'product_id',
      'cat_id',
      'sync',
      'version_id',
      'version_user_id',
      'version_user_name',
      'source_user_id',
      'source_user_name'
    ];

    this.availableOnDemandColumns = [
      'settings',
      'product',
      'category',
      'source',
      'source_notes'
    ];
    this.changesetId = null;

    if (util.isInstanceOf(changeset, models.Changeset)) {
      this.setChangesetId(changeset.getId());
    }
  }

  /**
   * Get Changeset_ID.
   * @returns {number}
   */
  getChangesetId() {
    return this.changesetId;
  }

  /**
   * Set Changeset_ID.
   * @param {number} changesetId
   * @returns {ChangesetPropertyVersionListLoadQuery}
   */
  setChangesetId(changesetId) {
    this.changesetId = changesetId;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['Changeset_ID'] = this.getChangesetId();

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ChangesetPropertyVersionListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request ResourceGroupList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/resourcegrouplist_load_query
 */
class ResourceGroupListLoadQuery extends ListQueryRequest {
  /**
   * ResourceGroupListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?Branch} branch
   */
  constructor(client, branch = null) {
    super(client);
    this.function = 'ResourceGroupList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'code'
    ];

    this.availableSortFields = [
      'id',
      'code'
    ];

    this.availableOnDemandColumns = [
      'linkedcssresources',
      'linkedjavascriptresources'
    ];
    this.branchId = null;
    this.branchName = null;
    this.editBranch = null;
    this.changesetId = null;

    if (util.isInstanceOf(branch, models.Branch)) {
      if (branch.getId()) {
        this.setBranchId(branch.getId());
      }

      this.setBranchName(branch.getName());
    }
  }

  /**
   * Get Branch_ID.
   * @returns {number}
   */
  getBranchId() {
    return this.branchId;
  }

  /**
   * Get Branch_Name.
   * @returns {string}
   */
  getBranchName() {
    return this.branchName;
  }

  /**
   * Get Edit_Branch.
   * @returns {string}
   */
  getEditBranch() {
    return this.editBranch;
  }

  /**
   * Get Changeset_ID.
   * @returns {number}
   */
  getChangesetId() {
    return this.changesetId;
  }

  /**
   * Set Branch_ID.
   * @param {number} branchId
   * @returns {ResourceGroupListLoadQuery}
   */
  setBranchId(branchId) {
    this.branchId = branchId;
    return this;
  }

  /**
   * Set Branch_Name.
   * @param {string} branchName
   * @returns {ResourceGroupListLoadQuery}
   */
  setBranchName(branchName) {
    this.branchName = branchName;
    return this;
  }

  /**
   * Set Edit_Branch.
   * @param {string} editBranch
   * @returns {ResourceGroupListLoadQuery}
   */
  setEditBranch(editBranch) {
    this.editBranch = editBranch;
    return this;
  }

  /**
   * Set Changeset_ID.
   * @param {number} changesetId
   * @returns {ResourceGroupListLoadQuery}
   */
  setChangesetId(changesetId) {
    this.changesetId = changesetId;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.branchId)) {
      data['Branch_ID'] = this.branchId;
    } else if (!util.isNullOrUndefined(this.branchName)) {
      data['Branch_Name'] = this.branchName;
    } else if (!util.isNullOrUndefined(this.editBranch)) {
      data['Edit_Branch'] = this.editBranch;
    }

    if (!util.isNullOrUndefined(this.branchName)) {
      data['Branch_Name'] = this.branchName;
    }

    if (!util.isNullOrUndefined(this.changesetId)) {
      data['Changeset_ID'] = this.changesetId;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ResourceGroupListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request BranchList_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/branchlist_delete
 */
class BranchListDelete extends Request {
  /**
   * BranchListDelete Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'BranchList_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.branchIds = [];
  }

  /**
   * Get Branch_IDs.
   * @returns {Array}
   */
  getBranchIds() {
    return this.branchIds;
  }

  /**
   * Add Branch_IDs.
   * @param {number} branchId
   * @returns {BranchListDelete}
   */
  addBranchId(branchId) {
    this.branchIds.push(branchId);
    return this;
  }

  /**
   * Add Branch model.
   * @param {Branch} branch
   * @throws {Error}
   * @returns {BranchListDelete}
   */
  addBranch(branch) {
    if (!util.isInstanceOf(branch, models.Branch)) {
      throw new Error(util.format('Expected instance of Branch but got %s',
        typeof branch));
    }

    if (branch.getId()) {
      this.branchIds.push(branch.getId());
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

    data['Branch_IDs'] = this.branchIds;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.BranchListDelete(this, httpResponse, data);
  }
}

/** 
 * Handles API Request MivaMerchantVersion. Scope: Domain. 
 * @see https://docs.miva.com/json-api/functions/mivamerchantversion
 */
class MivaMerchantVersion extends Request {
  /**
   * MivaMerchantVersion Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'MivaMerchantVersion';
    this.scope = Request.REQUEST_SCOPE_DOMAIN;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.MivaMerchantVersion(this, httpResponse, data);
  }
}

/** 
 * Handles API Request Attribute_Load_Code. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/attribute_load_code
 */
class AttributeLoadCode extends Request {
  /**
   * AttributeLoadCode Constructor.
   * @param {?BaseClient} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client);
    this.function = 'Attribute_Load_Code';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productId = null;
    this.productCode = null;
    this.editProduct = null;
    this.customerId = null;
    this.attributeCode = null;

    if (util.isInstanceOf(product, models.Product)) {
      if (product.getId()) {
        this.setProductId(product.getId());
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
   * Get Customer_ID.
   * @returns {number}
   */
  getCustomerId() {
    return this.customerId;
  }

  /**
   * Get Attribute_Code.
   * @returns {string}
   */
  getAttributeCode() {
    return this.attributeCode;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {AttributeLoadCode}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {AttributeLoadCode}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {AttributeLoadCode}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {AttributeLoadCode}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
    return this;
  }

  /**
   * Set Attribute_Code.
   * @param {string} attributeCode
   * @returns {AttributeLoadCode}
   */
  setAttributeCode(attributeCode) {
    this.attributeCode = attributeCode;
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
    } else if (!util.isNullOrUndefined(this.productCode)) {
      data['Product_Code'] = this.productCode;
    } else if (!util.isNullOrUndefined(this.editProduct)) {
      data['Edit_Product'] = this.editProduct;
    }

    if (!util.isNullOrUndefined(this.customerId)) {
      data['Customer_ID'] = this.customerId;
    }

    data['Attribute_Code'] = this.attributeCode;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.AttributeLoadCode(this, httpResponse, data);
  }
}

/** 
 * Handles API Request Attribute_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/attribute_insert
 */
class AttributeInsert extends Request {
  /**
   * AttributeInsert Constructor.
   * @param {?BaseClient} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client);
    this.function = 'Attribute_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productId = null;
    this.productCode = null;
    this.editProduct = null;
    this.code = null;
    this.prompt = null;
    this.type = null;
    this.image = null;
    this.price = null;
    this.cost = null;
    this.weight = null;
    this.copy = null;
    this.required = null;
    this.inventory = null;

    if (util.isInstanceOf(product, models.Product)) {
      if (product.getId()) {
        this.setProductId(product.getId());
      } else if (product.getCode()) {
        this.setEditProduct(product.getCode());
      }

      this.setProductCode(product.getCode());
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
   * Get Code.
   * @returns {string}
   */
  getCode() {
    return this.code;
  }

  /**
   * Get Prompt.
   * @returns {string}
   */
  getPrompt() {
    return this.prompt;
  }

  /**
   * Get Type.
   * @returns {string}
   */
  getType() {
    return this.type;
  }

  /**
   * Get Image.
   * @returns {string}
   */
  getImage() {
    return this.image;
  }

  /**
   * Get Price.
   * @returns {number}
   */
  getPrice() {
    return this.price;
  }

  /**
   * Get Cost.
   * @returns {number}
   */
  getCost() {
    return this.cost;
  }

  /**
   * Get Weight.
   * @returns {number}
   */
  getWeight() {
    return this.weight;
  }

  /**
   * Get Copy.
   * @returns {boolean}
   */
  getCopy() {
    return this.copy;
  }

  /**
   * Get Required.
   * @returns {boolean}
   */
  getRequired() {
    return this.required;
  }

  /**
   * Get Inventory.
   * @returns {boolean}
   */
  getInventory() {
    return this.inventory;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {AttributeInsert}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {AttributeInsert}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {AttributeInsert}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Code.
   * @param {string} code
   * @returns {AttributeInsert}
   */
  setCode(code) {
    this.code = code;
    return this;
  }

  /**
   * Set Prompt.
   * @param {string} prompt
   * @returns {AttributeInsert}
   */
  setPrompt(prompt) {
    this.prompt = prompt;
    return this;
  }

  /**
   * Set Type.
   * @param {string} type
   * @returns {AttributeInsert}
   */
  setType(type) {
    this.type = type;
    return this;
  }

  /**
   * Set Image.
   * @param {string} image
   * @returns {AttributeInsert}
   */
  setImage(image) {
    this.image = image;
    return this;
  }

  /**
   * Set Price.
   * @param {number} price
   * @returns {AttributeInsert}
   */
  setPrice(price) {
    this.price = price;
    return this;
  }

  /**
   * Set Cost.
   * @param {number} cost
   * @returns {AttributeInsert}
   */
  setCost(cost) {
    this.cost = cost;
    return this;
  }

  /**
   * Set Weight.
   * @param {number} weight
   * @returns {AttributeInsert}
   */
  setWeight(weight) {
    this.weight = weight;
    return this;
  }

  /**
   * Set Copy.
   * @param {boolean} copy
   * @returns {AttributeInsert}
   */
  setCopy(copy) {
    this.copy = copy;
    return this;
  }

  /**
   * Set Required.
   * @param {boolean} required
   * @returns {AttributeInsert}
   */
  setRequired(required) {
    this.required = required;
    return this;
  }

  /**
   * Set Inventory.
   * @param {boolean} inventory
   * @returns {AttributeInsert}
   */
  setInventory(inventory) {
    this.inventory = inventory;
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

    data['Code'] = this.code;

    if (!util.isNullOrUndefined(this.prompt)) {
      data['Prompt'] = this.prompt;
    }

    data['Type'] = this.type;

    if (!util.isNullOrUndefined(this.image)) {
      data['Image'] = this.image;
    }

    if (!util.isNullOrUndefined(this.price)) {
      data['Price'] = this.price;
    }

    if (!util.isNullOrUndefined(this.cost)) {
      data['Cost'] = this.cost;
    }

    if (!util.isNullOrUndefined(this.weight)) {
      data['Weight'] = this.weight;
    }

    if (!util.isNullOrUndefined(this.copy)) {
      data['Copy'] = this.copy;
    }

    if (!util.isNullOrUndefined(this.required)) {
      data['Required'] = this.required;
    }

    if (!util.isNullOrUndefined(this.inventory)) {
      data['Inventory'] = this.inventory;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.AttributeInsert(this, httpResponse, data);
  }
}

/** 
 * Handles API Request Attribute_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/attribute_update
 */
class AttributeUpdate extends Request {
  /**
   * AttributeUpdate Constructor.
   * @param {?BaseClient} client
   * @param {?ProductAttribute} productAttribute
   */
  constructor(client, productAttribute = null) {
    super(client);
    this.function = 'Attribute_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productId = null;
    this.productCode = null;
    this.editProduct = null;
    this.attributeId = null;
    this.editAttribute = null;
    this.attributeCode = null;
    this.code = null;
    this.prompt = null;
    this.type = null;
    this.image = null;
    this.price = null;
    this.cost = null;
    this.weight = null;
    this.copy = null;
    this.required = null;
    this.inventory = null;

    if (util.isInstanceOf(productAttribute, models.ProductAttribute)) {
      if (productAttribute.getProductId()) {
        this.setProductId(productAttribute.getProductId());
      }

      if (productAttribute.getId()) {
        this.setAttributeId(productAttribute.getId());
      } else if (productAttribute.getCode()) {
        this.setEditAttribute(productAttribute.getCode());
      } else if (productAttribute.getCode()) {
        this.setAttributeCode(productAttribute.getCode());
      }

      this.setEditAttribute(productAttribute.getCode());
      this.setCode(productAttribute.getCode());
      this.setPrompt(productAttribute.getPrompt());
      this.setType(productAttribute.getType());
      this.setImage(productAttribute.getImage());
      this.setPrice(productAttribute.getPrice());
      this.setCost(productAttribute.getCost());
      this.setWeight(productAttribute.getWeight());
      this.setRequired(productAttribute.getRequired());
      this.setInventory(productAttribute.getInventory());
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
   * Get Attribute_ID.
   * @returns {number}
   */
  getAttributeId() {
    return this.attributeId;
  }

  /**
   * Get Edit_Attribute.
   * @returns {string}
   */
  getEditAttribute() {
    return this.editAttribute;
  }

  /**
   * Get Attribute_Code.
   * @returns {string}
   */
  getAttributeCode() {
    return this.attributeCode;
  }

  /**
   * Get Code.
   * @returns {string}
   */
  getCode() {
    return this.code;
  }

  /**
   * Get Prompt.
   * @returns {string}
   */
  getPrompt() {
    return this.prompt;
  }

  /**
   * Get Type.
   * @returns {string}
   */
  getType() {
    return this.type;
  }

  /**
   * Get Image.
   * @returns {string}
   */
  getImage() {
    return this.image;
  }

  /**
   * Get Price.
   * @returns {number}
   */
  getPrice() {
    return this.price;
  }

  /**
   * Get Cost.
   * @returns {number}
   */
  getCost() {
    return this.cost;
  }

  /**
   * Get Weight.
   * @returns {number}
   */
  getWeight() {
    return this.weight;
  }

  /**
   * Get Copy.
   * @returns {boolean}
   */
  getCopy() {
    return this.copy;
  }

  /**
   * Get Required.
   * @returns {boolean}
   */
  getRequired() {
    return this.required;
  }

  /**
   * Get Inventory.
   * @returns {boolean}
   */
  getInventory() {
    return this.inventory;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {AttributeUpdate}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {AttributeUpdate}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {AttributeUpdate}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Attribute_ID.
   * @param {number} attributeId
   * @returns {AttributeUpdate}
   */
  setAttributeId(attributeId) {
    this.attributeId = attributeId;
    return this;
  }

  /**
   * Set Edit_Attribute.
   * @param {string} editAttribute
   * @returns {AttributeUpdate}
   */
  setEditAttribute(editAttribute) {
    this.editAttribute = editAttribute;
    return this;
  }

  /**
   * Set Attribute_Code.
   * @param {string} attributeCode
   * @returns {AttributeUpdate}
   */
  setAttributeCode(attributeCode) {
    this.attributeCode = attributeCode;
    return this;
  }

  /**
   * Set Code.
   * @param {string} code
   * @returns {AttributeUpdate}
   */
  setCode(code) {
    this.code = code;
    return this;
  }

  /**
   * Set Prompt.
   * @param {string} prompt
   * @returns {AttributeUpdate}
   */
  setPrompt(prompt) {
    this.prompt = prompt;
    return this;
  }

  /**
   * Set Type.
   * @param {string} type
   * @returns {AttributeUpdate}
   */
  setType(type) {
    this.type = type;
    return this;
  }

  /**
   * Set Image.
   * @param {string} image
   * @returns {AttributeUpdate}
   */
  setImage(image) {
    this.image = image;
    return this;
  }

  /**
   * Set Price.
   * @param {number} price
   * @returns {AttributeUpdate}
   */
  setPrice(price) {
    this.price = price;
    return this;
  }

  /**
   * Set Cost.
   * @param {number} cost
   * @returns {AttributeUpdate}
   */
  setCost(cost) {
    this.cost = cost;
    return this;
  }

  /**
   * Set Weight.
   * @param {number} weight
   * @returns {AttributeUpdate}
   */
  setWeight(weight) {
    this.weight = weight;
    return this;
  }

  /**
   * Set Copy.
   * @param {boolean} copy
   * @returns {AttributeUpdate}
   */
  setCopy(copy) {
    this.copy = copy;
    return this;
  }

  /**
   * Set Required.
   * @param {boolean} required
   * @returns {AttributeUpdate}
   */
  setRequired(required) {
    this.required = required;
    return this;
  }

  /**
   * Set Inventory.
   * @param {boolean} inventory
   * @returns {AttributeUpdate}
   */
  setInventory(inventory) {
    this.inventory = inventory;
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
    } else if (!util.isNullOrUndefined(this.productCode)) {
      data['Product_Code'] = this.productCode;
    } else if (!util.isNullOrUndefined(this.editProduct)) {
      data['Edit_Product'] = this.editProduct;
    }

    if (!util.isNullOrUndefined(this.attributeId)) {
      data['Attribute_ID'] = this.attributeId;
    } else if (!util.isNullOrUndefined(this.editAttribute)) {
      data['Edit_Attribute'] = this.editAttribute;
    } else if (!util.isNullOrUndefined(this.attributeCode)) {
      data['Attribute_Code'] = this.attributeCode;
    }

    if (!util.isNullOrUndefined(this.editAttribute)) {
      data['Edit_Attribute'] = this.editAttribute;
    }

    if (!util.isNullOrUndefined(this.code)) {
      data['Code'] = this.code;
    }

    if (!util.isNullOrUndefined(this.prompt)) {
      data['Prompt'] = this.prompt;
    }

    if (!util.isNullOrUndefined(this.type)) {
      data['Type'] = this.type;
    }

    if (!util.isNullOrUndefined(this.image)) {
      data['Image'] = this.image;
    }

    if (!util.isNullOrUndefined(this.price)) {
      data['Price'] = this.price;
    }

    if (!util.isNullOrUndefined(this.cost)) {
      data['Cost'] = this.cost;
    }

    if (!util.isNullOrUndefined(this.weight)) {
      data['Weight'] = this.weight;
    }

    if (!util.isNullOrUndefined(this.copy)) {
      data['Copy'] = this.copy;
    }

    if (!util.isNullOrUndefined(this.required)) {
      data['Required'] = this.required;
    }

    if (!util.isNullOrUndefined(this.inventory)) {
      data['Inventory'] = this.inventory;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.AttributeUpdate(this, httpResponse, data);
  }
}

/** 
 * Handles API Request Attribute_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/attribute_delete
 */
class AttributeDelete extends Request {
  /**
   * AttributeDelete Constructor.
   * @param {?BaseClient} client
   * @param {?ProductAttribute} productAttribute
   */
  constructor(client, productAttribute = null) {
    super(client);
    this.function = 'Attribute_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productId = null;
    this.productCode = null;
    this.editProduct = null;
    this.attributeId = null;
    this.editAttribute = null;
    this.attributeCode = null;

    if (util.isInstanceOf(productAttribute, models.ProductAttribute)) {
      if (productAttribute.getProductId()) {
        this.setProductId(productAttribute.getProductId());
      }

      if (productAttribute.getId()) {
        this.setAttributeId(productAttribute.getId());
      } else if (productAttribute.getCode()) {
        this.setEditAttribute(productAttribute.getCode());
      }

      this.setEditAttribute(productAttribute.getCode());
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
   * Get Attribute_ID.
   * @returns {number}
   */
  getAttributeId() {
    return this.attributeId;
  }

  /**
   * Get Edit_Attribute.
   * @returns {string}
   */
  getEditAttribute() {
    return this.editAttribute;
  }

  /**
   * Get Attribute_Code.
   * @returns {string}
   */
  getAttributeCode() {
    return this.attributeCode;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {AttributeDelete}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {AttributeDelete}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {AttributeDelete}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Attribute_ID.
   * @param {number} attributeId
   * @returns {AttributeDelete}
   */
  setAttributeId(attributeId) {
    this.attributeId = attributeId;
    return this;
  }

  /**
   * Set Edit_Attribute.
   * @param {string} editAttribute
   * @returns {AttributeDelete}
   */
  setEditAttribute(editAttribute) {
    this.editAttribute = editAttribute;
    return this;
  }

  /**
   * Set Attribute_Code.
   * @param {string} attributeCode
   * @returns {AttributeDelete}
   */
  setAttributeCode(attributeCode) {
    this.attributeCode = attributeCode;
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
    } else if (!util.isNullOrUndefined(this.productCode)) {
      data['Product_Code'] = this.productCode;
    } else if (!util.isNullOrUndefined(this.editProduct)) {
      data['Edit_Product'] = this.editProduct;
    }

    if (!util.isNullOrUndefined(this.attributeId)) {
      data['Attribute_ID'] = this.attributeId;
    } else if (!util.isNullOrUndefined(this.editAttribute)) {
      data['Edit_Attribute'] = this.editAttribute;
    } else if (!util.isNullOrUndefined(this.attributeCode)) {
      data['Attribute_Code'] = this.attributeCode;
    }

    if (!util.isNullOrUndefined(this.editAttribute)) {
      data['Edit_Attribute'] = this.editAttribute;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.AttributeDelete(this, httpResponse, data);
  }
}

/** 
 * Handles API Request OptionList_Load_Attribute. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/optionlist_load_attribute
 */
class OptionListLoadAttribute extends Request {
  /**
   * OptionListLoadAttribute Constructor.
   * @param {?BaseClient} client
   * @param {?ProductAttribute} productAttribute
   */
  constructor(client, productAttribute = null) {
    super(client);
    this.function = 'OptionList_Load_Attribute';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productId = null;
    this.productCode = null;
    this.editProduct = null;
    this.attributeId = null;
    this.editAttribute = null;
    this.attributeCode = null;
    this.customerId = null;

    if (util.isInstanceOf(productAttribute, models.ProductAttribute)) {
      if (productAttribute.getProductId()) {
        this.setProductId(productAttribute.getProductId());
      }

      if (productAttribute.getId()) {
        this.setAttributeId(productAttribute.getId());
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
   * Get Attribute_ID.
   * @returns {number}
   */
  getAttributeId() {
    return this.attributeId;
  }

  /**
   * Get Edit_Attribute.
   * @returns {string}
   */
  getEditAttribute() {
    return this.editAttribute;
  }

  /**
   * Get Attribute_Code.
   * @returns {string}
   */
  getAttributeCode() {
    return this.attributeCode;
  }

  /**
   * Get Customer_ID.
   * @returns {number}
   */
  getCustomerId() {
    return this.customerId;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {OptionListLoadAttribute}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {OptionListLoadAttribute}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {OptionListLoadAttribute}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Attribute_ID.
   * @param {number} attributeId
   * @returns {OptionListLoadAttribute}
   */
  setAttributeId(attributeId) {
    this.attributeId = attributeId;
    return this;
  }

  /**
   * Set Edit_Attribute.
   * @param {string} editAttribute
   * @returns {OptionListLoadAttribute}
   */
  setEditAttribute(editAttribute) {
    this.editAttribute = editAttribute;
    return this;
  }

  /**
   * Set Attribute_Code.
   * @param {string} attributeCode
   * @returns {OptionListLoadAttribute}
   */
  setAttributeCode(attributeCode) {
    this.attributeCode = attributeCode;
    return this;
  }

  /**
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {OptionListLoadAttribute}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
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
    }

    if (!util.isNullOrUndefined(this.attributeId)) {
      data['Attribute_ID'] = this.attributeId;
    } else if (!util.isNullOrUndefined(this.editAttribute)) {
      data['Edit_Attribute'] = this.editAttribute;
    } else if (!util.isNullOrUndefined(this.attributeCode)) {
      data['Attribute_Code'] = this.attributeCode;
    }

    if (!util.isNullOrUndefined(this.customerId)) {
      data['Customer_ID'] = this.customerId;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.OptionListLoadAttribute(this, httpResponse, data);
  }
}

/** 
 * Handles API Request Option_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/option_delete
 */
class OptionDelete extends Request {
  /**
   * OptionDelete Constructor.
   * @param {?BaseClient} client
   * @param {?ProductOption} productOption
   */
  constructor(client, productOption = null) {
    super(client);
    this.function = 'Option_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.optionId = null;
    this.optionCode = null;
    this.attributeId = null;

    if (util.isInstanceOf(productOption, models.ProductOption)) {
      if (productOption.getId()) {
        this.setOptionId(productOption.getId());
      } else if (productOption.getCode()) {
        this.setOptionCode(productOption.getCode());
      }

      if (productOption.getAttributeId()) {
        this.setAttributeId(productOption.getAttributeId());
      }

      this.setOptionId(productOption.getId());
    }
  }

  /**
   * Get Option_ID.
   * @returns {number}
   */
  getOptionId() {
    return this.optionId;
  }

  /**
   * Get Option_Code.
   * @returns {string}
   */
  getOptionCode() {
    return this.optionCode;
  }

  /**
   * Get Attribute_ID.
   * @returns {number}
   */
  getAttributeId() {
    return this.attributeId;
  }

  /**
   * Set Option_ID.
   * @param {number} optionId
   * @returns {OptionDelete}
   */
  setOptionId(optionId) {
    this.optionId = optionId;
    return this;
  }

  /**
   * Set Option_Code.
   * @param {string} optionCode
   * @returns {OptionDelete}
   */
  setOptionCode(optionCode) {
    this.optionCode = optionCode;
    return this;
  }

  /**
   * Set Attribute_ID.
   * @param {number} attributeId
   * @returns {OptionDelete}
   */
  setAttributeId(attributeId) {
    this.attributeId = attributeId;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.optionId)) {
      data['Option_ID'] = this.optionId;
    } else if (!util.isNullOrUndefined(this.optionCode)) {
      data['Option_Code'] = this.optionCode;
    }

    if (!util.isNullOrUndefined(this.attributeId)) {
      data['Attribute_ID'] = this.attributeId;
    }

    if (!util.isNullOrUndefined(this.optionId)) {
      data['Option_ID'] = this.optionId;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.OptionDelete(this, httpResponse, data);
  }
}

/** 
 * Handles API Request Option_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/option_insert
 */
class OptionInsert extends Request {
  /**
   * OptionInsert Constructor.
   * @param {?BaseClient} client
   * @param {?ProductAttribute} productAttribute
   */
  constructor(client, productAttribute = null) {
    super(client);
    this.function = 'Option_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productId = null;
    this.productCode = null;
    this.editProduct = null;
    this.attributeId = null;
    this.editAttribute = null;
    this.attributeCode = null;
    this.code = null;
    this.prompt = null;
    this.image = null;
    this.price = null;
    this.cost = null;
    this.weight = null;
    this.defaultOption = null;

    if (util.isInstanceOf(productAttribute, models.ProductAttribute)) {
      if (productAttribute.getProductId()) {
        this.setProductId(productAttribute.getProductId());
      }

      if (productAttribute.getId()) {
        this.setAttributeId(productAttribute.getId());
      } else if (productAttribute.getCode()) {
        this.setEditAttribute(productAttribute.getCode());
      } else if (productAttribute.getCode()) {
        this.setAttributeCode(productAttribute.getCode());
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
   * Get Attribute_ID.
   * @returns {number}
   */
  getAttributeId() {
    return this.attributeId;
  }

  /**
   * Get Edit_Attribute.
   * @returns {string}
   */
  getEditAttribute() {
    return this.editAttribute;
  }

  /**
   * Get Attribute_Code.
   * @returns {string}
   */
  getAttributeCode() {
    return this.attributeCode;
  }

  /**
   * Get Code.
   * @returns {string}
   */
  getCode() {
    return this.code;
  }

  /**
   * Get Prompt.
   * @returns {string}
   */
  getPrompt() {
    return this.prompt;
  }

  /**
   * Get Image.
   * @returns {string}
   */
  getImage() {
    return this.image;
  }

  /**
   * Get Price.
   * @returns {number}
   */
  getPrice() {
    return this.price;
  }

  /**
   * Get Cost.
   * @returns {number}
   */
  getCost() {
    return this.cost;
  }

  /**
   * Get Weight.
   * @returns {number}
   */
  getWeight() {
    return this.weight;
  }

  /**
   * Get default_option.
   * @returns {boolean}
   */
  getDefaultOption() {
    return this.defaultOption;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {OptionInsert}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {OptionInsert}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {OptionInsert}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Attribute_ID.
   * @param {number} attributeId
   * @returns {OptionInsert}
   */
  setAttributeId(attributeId) {
    this.attributeId = attributeId;
    return this;
  }

  /**
   * Set Edit_Attribute.
   * @param {string} editAttribute
   * @returns {OptionInsert}
   */
  setEditAttribute(editAttribute) {
    this.editAttribute = editAttribute;
    return this;
  }

  /**
   * Set Attribute_Code.
   * @param {string} attributeCode
   * @returns {OptionInsert}
   */
  setAttributeCode(attributeCode) {
    this.attributeCode = attributeCode;
    return this;
  }

  /**
   * Set Code.
   * @param {string} code
   * @returns {OptionInsert}
   */
  setCode(code) {
    this.code = code;
    return this;
  }

  /**
   * Set Prompt.
   * @param {string} prompt
   * @returns {OptionInsert}
   */
  setPrompt(prompt) {
    this.prompt = prompt;
    return this;
  }

  /**
   * Set Image.
   * @param {string} image
   * @returns {OptionInsert}
   */
  setImage(image) {
    this.image = image;
    return this;
  }

  /**
   * Set Price.
   * @param {number} price
   * @returns {OptionInsert}
   */
  setPrice(price) {
    this.price = price;
    return this;
  }

  /**
   * Set Cost.
   * @param {number} cost
   * @returns {OptionInsert}
   */
  setCost(cost) {
    this.cost = cost;
    return this;
  }

  /**
   * Set Weight.
   * @param {number} weight
   * @returns {OptionInsert}
   */
  setWeight(weight) {
    this.weight = weight;
    return this;
  }

  /**
   * Set default_option.
   * @param {boolean} defaultOption
   * @returns {OptionInsert}
   */
  setDefaultOption(defaultOption) {
    this.defaultOption = defaultOption;
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
    }

    if (!util.isNullOrUndefined(this.attributeId)) {
      data['Attribute_ID'] = this.attributeId;
    } else if (!util.isNullOrUndefined(this.editAttribute)) {
      data['Edit_Attribute'] = this.editAttribute;
    } else if (!util.isNullOrUndefined(this.attributeCode)) {
      data['Attribute_Code'] = this.attributeCode;
    }

    data['Code'] = this.code;

    data['Prompt'] = this.prompt;

    if (!util.isNullOrUndefined(this.image)) {
      data['Image'] = this.image;
    }

    if (!util.isNullOrUndefined(this.price)) {
      data['Price'] = this.price;
    }

    if (!util.isNullOrUndefined(this.cost)) {
      data['Cost'] = this.cost;
    }

    if (!util.isNullOrUndefined(this.weight)) {
      data['Weight'] = this.weight;
    }

    if (!util.isNullOrUndefined(this.defaultOption)) {
      data['Default'] = this.defaultOption;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.OptionInsert(this, httpResponse, data);
  }
}

/** 
 * Handles API Request Option_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/option_update
 */
class OptionUpdate extends Request {
  /**
   * OptionUpdate Constructor.
   * @param {?BaseClient} client
   * @param {?ProductOption} productOption
   */
  constructor(client, productOption = null) {
    super(client);
    this.function = 'Option_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productId = null;
    this.productCode = null;
    this.editProduct = null;
    this.optionId = null;
    this.optionCode = null;
    this.attributeId = null;
    this.editAttribute = null;
    this.attributeCode = null;
    this.code = null;
    this.prompt = null;
    this.image = null;
    this.price = null;
    this.cost = null;
    this.weight = null;
    this.defaultOption = null;

    if (util.isInstanceOf(productOption, models.ProductOption)) {
      if (productOption.getProductId()) {
        this.setProductId(productOption.getProductId());
      }

      if (productOption.getAttributeId()) {
        this.setAttributeId(productOption.getAttributeId());
      }

      if (productOption.getId()) {
        this.setOptionId(productOption.getId());
      } else if (productOption.getCode()) {
        this.setOptionCode(productOption.getCode());
      }

      this.setCode(productOption.getCode());
      this.setPrompt(productOption.getPrompt());
      this.setImage(productOption.getImage());
      this.setPrice(productOption.getPrice());
      this.setCost(productOption.getCost());
      this.setWeight(productOption.getWeight());
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
   * Get Option_ID.
   * @returns {number}
   */
  getOptionId() {
    return this.optionId;
  }

  /**
   * Get Option_Code.
   * @returns {string}
   */
  getOptionCode() {
    return this.optionCode;
  }

  /**
   * Get Attribute_ID.
   * @returns {number}
   */
  getAttributeId() {
    return this.attributeId;
  }

  /**
   * Get Edit_Attribute.
   * @returns {string}
   */
  getEditAttribute() {
    return this.editAttribute;
  }

  /**
   * Get Attribute_Code.
   * @returns {string}
   */
  getAttributeCode() {
    return this.attributeCode;
  }

  /**
   * Get Code.
   * @returns {string}
   */
  getCode() {
    return this.code;
  }

  /**
   * Get Prompt.
   * @returns {string}
   */
  getPrompt() {
    return this.prompt;
  }

  /**
   * Get Image.
   * @returns {string}
   */
  getImage() {
    return this.image;
  }

  /**
   * Get Price.
   * @returns {number}
   */
  getPrice() {
    return this.price;
  }

  /**
   * Get Cost.
   * @returns {number}
   */
  getCost() {
    return this.cost;
  }

  /**
   * Get Weight.
   * @returns {number}
   */
  getWeight() {
    return this.weight;
  }

  /**
   * Get default_option.
   * @returns {boolean}
   */
  getDefaultOption() {
    return this.defaultOption;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {OptionUpdate}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {OptionUpdate}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {OptionUpdate}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Option_ID.
   * @param {number} optionId
   * @returns {OptionUpdate}
   */
  setOptionId(optionId) {
    this.optionId = optionId;
    return this;
  }

  /**
   * Set Option_Code.
   * @param {string} optionCode
   * @returns {OptionUpdate}
   */
  setOptionCode(optionCode) {
    this.optionCode = optionCode;
    return this;
  }

  /**
   * Set Attribute_ID.
   * @param {number} attributeId
   * @returns {OptionUpdate}
   */
  setAttributeId(attributeId) {
    this.attributeId = attributeId;
    return this;
  }

  /**
   * Set Edit_Attribute.
   * @param {string} editAttribute
   * @returns {OptionUpdate}
   */
  setEditAttribute(editAttribute) {
    this.editAttribute = editAttribute;
    return this;
  }

  /**
   * Set Attribute_Code.
   * @param {string} attributeCode
   * @returns {OptionUpdate}
   */
  setAttributeCode(attributeCode) {
    this.attributeCode = attributeCode;
    return this;
  }

  /**
   * Set Code.
   * @param {string} code
   * @returns {OptionUpdate}
   */
  setCode(code) {
    this.code = code;
    return this;
  }

  /**
   * Set Prompt.
   * @param {string} prompt
   * @returns {OptionUpdate}
   */
  setPrompt(prompt) {
    this.prompt = prompt;
    return this;
  }

  /**
   * Set Image.
   * @param {string} image
   * @returns {OptionUpdate}
   */
  setImage(image) {
    this.image = image;
    return this;
  }

  /**
   * Set Price.
   * @param {number} price
   * @returns {OptionUpdate}
   */
  setPrice(price) {
    this.price = price;
    return this;
  }

  /**
   * Set Cost.
   * @param {number} cost
   * @returns {OptionUpdate}
   */
  setCost(cost) {
    this.cost = cost;
    return this;
  }

  /**
   * Set Weight.
   * @param {number} weight
   * @returns {OptionUpdate}
   */
  setWeight(weight) {
    this.weight = weight;
    return this;
  }

  /**
   * Set default_option.
   * @param {boolean} defaultOption
   * @returns {OptionUpdate}
   */
  setDefaultOption(defaultOption) {
    this.defaultOption = defaultOption;
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
    }

    if (!util.isNullOrUndefined(this.attributeId)) {
      data['Attribute_ID'] = this.attributeId;
    } else if (!util.isNullOrUndefined(this.editAttribute)) {
      data['Edit_Attribute'] = this.editAttribute;
    } else if (!util.isNullOrUndefined(this.attributeCode)) {
      data['Attribute_Code'] = this.attributeCode;
    }

    if (!util.isNullOrUndefined(this.optionId)) {
      data['Option_ID'] = this.optionId;
    } else if (!util.isNullOrUndefined(this.optionCode)) {
      data['Option_Code'] = this.optionCode;
    }

    if (!util.isNullOrUndefined(this.code)) {
      data['Code'] = this.code;
    }

    if (!util.isNullOrUndefined(this.prompt)) {
      data['Prompt'] = this.prompt;
    }

    if (!util.isNullOrUndefined(this.image)) {
      data['Image'] = this.image;
    }

    if (!util.isNullOrUndefined(this.price)) {
      data['Price'] = this.price;
    }

    if (!util.isNullOrUndefined(this.cost)) {
      data['Cost'] = this.cost;
    }

    if (!util.isNullOrUndefined(this.weight)) {
      data['Weight'] = this.weight;
    }

    if (!util.isNullOrUndefined(this.defaultOption)) {
      data['Default'] = this.defaultOption;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.OptionUpdate(this, httpResponse, data);
  }
}

/** 
 * Handles API Request Option_Load_Code. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/option_load_code
 */
class OptionLoadCode extends Request {
  /**
   * OptionLoadCode Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'Option_Load_Code';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productId = null;
    this.productCode = null;
    this.editProduct = null;
    this.attributeId = null;
    this.attributeCode = null;
    this.editAttribute = null;
    this.optionCode = null;
    this.customerId = null;
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
   * Get Attribute_ID.
   * @returns {number}
   */
  getAttributeId() {
    return this.attributeId;
  }

  /**
   * Get Attribute_Code.
   * @returns {string}
   */
  getAttributeCode() {
    return this.attributeCode;
  }

  /**
   * Get Edit_Attribute.
   * @returns {string}
   */
  getEditAttribute() {
    return this.editAttribute;
  }

  /**
   * Get Option_Code.
   * @returns {string}
   */
  getOptionCode() {
    return this.optionCode;
  }

  /**
   * Get Customer_ID.
   * @returns {number}
   */
  getCustomerId() {
    return this.customerId;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {OptionLoadCode}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {OptionLoadCode}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {OptionLoadCode}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Attribute_ID.
   * @param {number} attributeId
   * @returns {OptionLoadCode}
   */
  setAttributeId(attributeId) {
    this.attributeId = attributeId;
    return this;
  }

  /**
   * Set Attribute_Code.
   * @param {string} attributeCode
   * @returns {OptionLoadCode}
   */
  setAttributeCode(attributeCode) {
    this.attributeCode = attributeCode;
    return this;
  }

  /**
   * Set Edit_Attribute.
   * @param {string} editAttribute
   * @returns {OptionLoadCode}
   */
  setEditAttribute(editAttribute) {
    this.editAttribute = editAttribute;
    return this;
  }

  /**
   * Set Option_Code.
   * @param {string} optionCode
   * @returns {OptionLoadCode}
   */
  setOptionCode(optionCode) {
    this.optionCode = optionCode;
    return this;
  }

  /**
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {OptionLoadCode}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
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
    } else if (!util.isNullOrUndefined(this.productCode)) {
      data['Product_Code'] = this.productCode;
    } else if (!util.isNullOrUndefined(this.editProduct)) {
      data['Edit_Product'] = this.editProduct;
    }

    if (!util.isNullOrUndefined(this.attributeId)) {
      data['Attribute_ID'] = this.attributeId;
    } else if (!util.isNullOrUndefined(this.attributeCode)) {
      data['Attribute_Code'] = this.attributeCode;
    } else if (!util.isNullOrUndefined(this.editAttribute)) {
      data['Edit_Attribute'] = this.editAttribute;
    }

    if (!util.isNullOrUndefined(this.optionCode)) {
      data['Option_Code'] = this.optionCode;
    }

    if (!util.isNullOrUndefined(this.customerId)) {
      data['Customer_ID'] = this.customerId;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.OptionLoadCode(this, httpResponse, data);
  }
}

/** 
 * Handles API Request Option_Set_Default. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/option_set_default
 */
class OptionSetDefault extends Request {
  /**
   * OptionSetDefault Constructor.
   * @param {?BaseClient} client
   * @param {?ProductOption} productOption
   */
  constructor(client, productOption = null) {
    super(client);
    this.function = 'Option_Set_Default';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.optionId = null;
    this.optionCode = null;
    this.attributeId = null;
    this.optionDefault = null;

    if (util.isInstanceOf(productOption, models.ProductOption)) {
      if (productOption.getId()) {
        this.setOptionId(productOption.getId());
      } else if (productOption.getCode()) {
        this.setOptionCode(productOption.getCode());
      }

      if (productOption.getAttributeId()) {
        this.setAttributeId(productOption.getAttributeId());
      }

      this.setOptionCode(productOption.getCode());
    }
  }

  /**
   * Get Option_ID.
   * @returns {number}
   */
  getOptionId() {
    return this.optionId;
  }

  /**
   * Get Option_Code.
   * @returns {string}
   */
  getOptionCode() {
    return this.optionCode;
  }

  /**
   * Get Attribute_ID.
   * @returns {number}
   */
  getAttributeId() {
    return this.attributeId;
  }

  /**
   * Get Option_Default.
   * @returns {boolean}
   */
  getOptionDefault() {
    return this.optionDefault;
  }

  /**
   * Set Option_ID.
   * @param {number} optionId
   * @returns {OptionSetDefault}
   */
  setOptionId(optionId) {
    this.optionId = optionId;
    return this;
  }

  /**
   * Set Option_Code.
   * @param {string} optionCode
   * @returns {OptionSetDefault}
   */
  setOptionCode(optionCode) {
    this.optionCode = optionCode;
    return this;
  }

  /**
   * Set Attribute_ID.
   * @param {number} attributeId
   * @returns {OptionSetDefault}
   */
  setAttributeId(attributeId) {
    this.attributeId = attributeId;
    return this;
  }

  /**
   * Set Option_Default.
   * @param {boolean} optionDefault
   * @returns {OptionSetDefault}
   */
  setOptionDefault(optionDefault) {
    this.optionDefault = optionDefault;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.optionId)) {
      data['Option_ID'] = this.optionId;
    } else if (!util.isNullOrUndefined(this.optionCode)) {
      data['Option_Code'] = this.optionCode;
    }

    if (!util.isNullOrUndefined(this.attributeId)) {
      data['Attribute_ID'] = this.attributeId;
    }

    if (!util.isNullOrUndefined(this.optionCode)) {
      data['Option_Code'] = this.optionCode;
    }

    if (!util.isNullOrUndefined(this.optionDefault)) {
      data['Option_Default'] = this.optionDefault;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.OptionSetDefault(this, httpResponse, data);
  }
}

/** 
 * Handles API Request AttributeAndOptionList_Load_Product. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/attributeandoptionlist_load_product
 */
class AttributeAndOptionListLoadProduct extends Request {
  /**
   * AttributeAndOptionListLoadProduct Constructor.
   * @param {?BaseClient} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client);
    this.function = 'AttributeAndOptionList_Load_Product';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productId = null;
    this.productCode = null;
    this.editProduct = null;
    this.customerId = null;

    if (util.isInstanceOf(product, models.Product)) {
      if (product.getId()) {
        this.setProductId(product.getId());
      }

      this.setProductCode(product.getCode());
      this.setEditProduct(product.getCode());
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
   * Get Customer_ID.
   * @returns {number}
   */
  getCustomerId() {
    return this.customerId;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {AttributeAndOptionListLoadProduct}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {AttributeAndOptionListLoadProduct}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {AttributeAndOptionListLoadProduct}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {AttributeAndOptionListLoadProduct}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
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
    } else if (!util.isNullOrUndefined(this.productCode)) {
      data['Product_Code'] = this.productCode;
    } else if (!util.isNullOrUndefined(this.editProduct)) {
      data['Edit_Product'] = this.editProduct;
    }

    if (!util.isNullOrUndefined(this.productCode)) {
      data['Product_Code'] = this.productCode;
    }

    if (!util.isNullOrUndefined(this.editProduct)) {
      data['Edit_Product'] = this.editProduct;
    }

    if (!util.isNullOrUndefined(this.customerId)) {
      data['Customer_ID'] = this.customerId;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.AttributeAndOptionListLoadProduct(this, httpResponse, data);
  }
}

/** 
 * Handles API Request OrderShipmentList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/ordershipmentlist_load_query
 */
class OrderShipmentListLoadQuery extends ListQueryRequest {
  /**
   * OrderShipmentListLoadQuery Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'OrderShipmentList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'order_id',
      'code',
      'tracknum',
      'tracktype',
      'weight',
      'cost',
      'status',
      'ship_date',
      'batch_id',
      'order_batch_id',
      'order_pay_id',
      'order_status',
      'order_pay_status',
      'order_stk_status',
      'order_orderdate',
      'order_dt_instock',
      'order_cust_id',
      'order_ship_res',
      'order_ship_fname',
      'order_ship_lname',
      'order_ship_email',
      'order_ship_comp',
      'order_ship_phone',
      'order_ship_fax',
      'order_ship_addr1',
      'order_ship_addr2',
      'order_ship_city',
      'order_ship_state',
      'order_ship_zip',
      'order_ship_cntry',
      'order_bill_fname',
      'order_bill_lname',
      'order_bill_email',
      'order_bill_comp',
      'order_bill_phone',
      'order_bill_fax',
      'order_bill_addr1',
      'order_bill_addr2',
      'order_bill_city',
      'order_bill_state',
      'order_bill_zip',
      'order_bill_cntry',
      'order_ship_id',
      'order_ship_data',
      'order_source',
      'order_source_id',
      'order_total',
      'order_total_ship',
      'order_total_tax',
      'order_total_auth',
      'order_total_capt',
      'order_total_rfnd',
      'order_net_capt',
      'order_pend_count',
      'order_bord_count',
      'order_note_count'
    ];

    this.availableSortFields = [
      'id',
      'order_id',
      'code',
      'tracknum',
      'tracktype',
      'weight',
      'cost',
      'status',
      'ship_date',
      'batch_id',
      'order_batch_id',
      'order_pay_id',
      'order_status',
      'order_pay_status',
      'order_stk_status',
      'order_dt_instock',
      'order_orderdate',
      'order_cust_id',
      'order_ship_res',
      'order_ship_fname',
      'order_ship_lname',
      'order_ship_email',
      'order_ship_comp',
      'order_ship_phone',
      'order_ship_fax',
      'order_ship_addr1',
      'order_ship_addr2',
      'order_ship_city',
      'order_ship_state',
      'order_ship_zip',
      'order_ship_cntry',
      'order_bill_fname',
      'order_bill_lname',
      'order_bill_email',
      'order_bill_comp',
      'order_bill_phone',
      'order_bill_fax',
      'order_bill_addr1',
      'order_bill_addr2',
      'order_bill_city',
      'order_bill_state',
      'order_bill_zip',
      'order_bill_cntry',
      'order_ship_id',
      'order_ship_data',
      'order_source',
      'order_source_id',
      'order_total',
      'order_total_ship',
      'order_total_tax',
      'order_total_auth',
      'order_total_capt',
      'order_total_rfnd',
      'order_net_capt',
      'order_pend_count',
      'order_bord_count',
      'order_note_count'
    ];

    this.availableOnDemandColumns = [
      'items',
      'include_order'
    ];
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.OrderShipmentListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request OrderItem_Split. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/orderitem_split
 */
class OrderItemSplit extends Request {
  /**
   * OrderItemSplit Constructor.
   * @param {?BaseClient} client
   * @param {?OrderItem} orderItem
   */
  constructor(client, orderItem = null) {
    super(client);
    this.function = 'OrderItem_Split';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.orderId = null;
    this.lineId = null;
    this.quantity = null;

    if (util.isInstanceOf(orderItem, models.OrderItem)) {
      if (orderItem.getOrderId()) {
        this.setOrderId(orderItem.getOrderId());
      }

      if (orderItem.getLineId()) {
        this.setLineId(orderItem.getLineId());
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
   * Get Quantity.
   * @returns {number}
   */
  getQuantity() {
    return this.quantity;
  }

  /**
   * Set Order_ID.
   * @param {number} orderId
   * @returns {OrderItemSplit}
   */
  setOrderId(orderId) {
    this.orderId = orderId;
    return this;
  }

  /**
   * Set Line_ID.
   * @param {number} lineId
   * @returns {OrderItemSplit}
   */
  setLineId(lineId) {
    this.lineId = lineId;
    return this;
  }

  /**
   * Set Quantity.
   * @param {number} quantity
   * @returns {OrderItemSplit}
   */
  setQuantity(quantity) {
    this.quantity = quantity;
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

    if (!util.isNullOrUndefined(this.lineId)) {
      data['Line_ID'] = this.lineId;
    }

    data['Quantity'] = this.quantity;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.OrderItemSplit(this, httpResponse, data);
  }
}

/** 
 * Handles API Request OrderItemList_RemoveFromShipment. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/orderitemlist_removefromshipment
 */
class OrderItemListRemoveFromShipment extends Request {
  /**
   * OrderItemListRemoveFromShipment Constructor.
   * @param {?BaseClient} client
   * @param {?Order} order
   */
  constructor(client, order = null) {
    super(client);
    this.function = 'OrderItemList_RemoveFromShipment';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.orderId = null;
    this.lineIds = [];

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
   * Set Order_ID.
   * @param {number} orderId
   * @returns {OrderItemListRemoveFromShipment}
   */
  setOrderId(orderId) {
    this.orderId = orderId;
    return this;
  }

  /**
   * Add Line_IDs.
   * @param {number} lineId
   * @returns {OrderItemListRemoveFromShipment}
   */
  addLineId(lineId) {
    this.lineIds.push(lineId);
    return this;
  }

  /**
   * Add OrderItem model.
   * @param {OrderItem} orderItem
   * @throws {Error}
   * @returns {OrderItemListRemoveFromShipment}
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

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.OrderItemListRemoveFromShipment(this, httpResponse, data);
  }
}

/** 
 * Handles API Request CustomerAddress_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/customeraddress_insert
 */
class CustomerAddressInsert extends Request {
  /**
   * CustomerAddressInsert Constructor.
   * @param {?BaseClient} client
   * @param {?Customer} customer
   */
  constructor(client, customer = null) {
    super(client);
    this.function = 'CustomerAddress_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.customerId = null;
    this.customerLogin = null;
    this.description = null;
    this.firstName = null;
    this.lastName = null;
    this.email = null;
    this.phone = null;
    this.fax = null;
    this.company = null;
    this.address1 = null;
    this.address2 = null;
    this.city = null;
    this.state = null;
    this.zip = null;
    this.country = null;
    this.residential = null;

    if (util.isInstanceOf(customer, models.Customer)) {
      if (customer.getId()) {
        this.setCustomerId(customer.getId());
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
   * Get Description.
   * @returns {string}
   */
  getDescription() {
    return this.description;
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
   * Get Email.
   * @returns {string}
   */
  getEmail() {
    return this.email;
  }

  /**
   * Get Phone.
   * @returns {string}
   */
  getPhone() {
    return this.phone;
  }

  /**
   * Get Fax.
   * @returns {string}
   */
  getFax() {
    return this.fax;
  }

  /**
   * Get Company.
   * @returns {string}
   */
  getCompany() {
    return this.company;
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
   * Get Residential.
   * @returns {boolean}
   */
  getResidential() {
    return this.residential;
  }

  /**
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {CustomerAddressInsert}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
    return this;
  }

  /**
   * Set Customer_Login.
   * @param {string} customerLogin
   * @returns {CustomerAddressInsert}
   */
  setCustomerLogin(customerLogin) {
    this.customerLogin = customerLogin;
    return this;
  }

  /**
   * Set Description.
   * @param {string} description
   * @returns {CustomerAddressInsert}
   */
  setDescription(description) {
    this.description = description;
    return this;
  }

  /**
   * Set FirstName.
   * @param {string} firstName
   * @returns {CustomerAddressInsert}
   */
  setFirstName(firstName) {
    this.firstName = firstName;
    return this;
  }

  /**
   * Set LastName.
   * @param {string} lastName
   * @returns {CustomerAddressInsert}
   */
  setLastName(lastName) {
    this.lastName = lastName;
    return this;
  }

  /**
   * Set Email.
   * @param {string} email
   * @returns {CustomerAddressInsert}
   */
  setEmail(email) {
    this.email = email;
    return this;
  }

  /**
   * Set Phone.
   * @param {string} phone
   * @returns {CustomerAddressInsert}
   */
  setPhone(phone) {
    this.phone = phone;
    return this;
  }

  /**
   * Set Fax.
   * @param {string} fax
   * @returns {CustomerAddressInsert}
   */
  setFax(fax) {
    this.fax = fax;
    return this;
  }

  /**
   * Set Company.
   * @param {string} company
   * @returns {CustomerAddressInsert}
   */
  setCompany(company) {
    this.company = company;
    return this;
  }

  /**
   * Set Address1.
   * @param {string} address1
   * @returns {CustomerAddressInsert}
   */
  setAddress1(address1) {
    this.address1 = address1;
    return this;
  }

  /**
   * Set Address2.
   * @param {string} address2
   * @returns {CustomerAddressInsert}
   */
  setAddress2(address2) {
    this.address2 = address2;
    return this;
  }

  /**
   * Set City.
   * @param {string} city
   * @returns {CustomerAddressInsert}
   */
  setCity(city) {
    this.city = city;
    return this;
  }

  /**
   * Set State.
   * @param {string} state
   * @returns {CustomerAddressInsert}
   */
  setState(state) {
    this.state = state;
    return this;
  }

  /**
   * Set Zip.
   * @param {string} zip
   * @returns {CustomerAddressInsert}
   */
  setZip(zip) {
    this.zip = zip;
    return this;
  }

  /**
   * Set Country.
   * @param {string} country
   * @returns {CustomerAddressInsert}
   */
  setCountry(country) {
    this.country = country;
    return this;
  }

  /**
   * Set Residential.
   * @param {boolean} residential
   * @returns {CustomerAddressInsert}
   */
  setResidential(residential) {
    this.residential = residential;
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
    }

    if (!util.isNullOrUndefined(this.description)) {
      data['Description'] = this.description;
    }

    if (!util.isNullOrUndefined(this.firstName)) {
      data['FirstName'] = this.firstName;
    }

    if (!util.isNullOrUndefined(this.lastName)) {
      data['LastName'] = this.lastName;
    }

    if (!util.isNullOrUndefined(this.email)) {
      data['Email'] = this.email;
    }

    if (!util.isNullOrUndefined(this.phone)) {
      data['Phone'] = this.phone;
    }

    if (!util.isNullOrUndefined(this.fax)) {
      data['Fax'] = this.fax;
    }

    if (!util.isNullOrUndefined(this.company)) {
      data['Company'] = this.company;
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

    if (!util.isNullOrUndefined(this.residential)) {
      data['Residential'] = this.residential;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CustomerAddressInsert(this, httpResponse, data);
  }
}

/** 
 * Handles API Request CustomerAddress_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/customeraddress_update
 */
class CustomerAddressUpdate extends Request {
  /**
   * CustomerAddressUpdate Constructor.
   * @param {?BaseClient} client
   * @param {?CustomerAddress} customerAddress
   */
  constructor(client, customerAddress = null) {
    super(client);
    this.function = 'CustomerAddress_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.addressId = null;
    this.customerAddressId = null;
    this.customerId = null;
    this.customerLogin = null;
    this.description = null;
    this.firstName = null;
    this.lastName = null;
    this.email = null;
    this.phone = null;
    this.fax = null;
    this.company = null;
    this.address1 = null;
    this.address2 = null;
    this.city = null;
    this.state = null;
    this.zip = null;
    this.country = null;
    this.residential = null;

    if (util.isInstanceOf(customerAddress, models.CustomerAddress)) {
      if (customerAddress.getCustomerId()) {
        this.setCustomerId(customerAddress.getCustomerId());
      }

      if (customerAddress.getId()) {
        this.setAddressId(customerAddress.getId());
      }

      this.setDescription(customerAddress.getDescription());
      this.setFirstName(customerAddress.getFirstName());
      this.setLastName(customerAddress.getLastName());
      this.setEmail(customerAddress.getEmail());
      this.setFax(customerAddress.getPhone());
      this.setCompany(customerAddress.getCompany());
      this.setAddress1(customerAddress.getAddress1());
      this.setAddress2(customerAddress.getAddress2());
      this.setCity(customerAddress.getCity());
      this.setState(customerAddress.getState());
      this.setZip(customerAddress.getZip());
      this.setCountry(customerAddress.getCountry());
      this.setResidential(customerAddress.getResidential());
    }
  }

  /**
   * Get Address_ID.
   * @returns {number}
   */
  getAddressId() {
    return this.addressId;
  }

  /**
   * Get CustomerAddress_ID.
   * @returns {number}
   */
  getCustomerAddressId() {
    return this.customerAddressId;
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
   * Get Description.
   * @returns {string}
   */
  getDescription() {
    return this.description;
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
   * Get Email.
   * @returns {string}
   */
  getEmail() {
    return this.email;
  }

  /**
   * Get Phone.
   * @returns {string}
   */
  getPhone() {
    return this.phone;
  }

  /**
   * Get Fax.
   * @returns {string}
   */
  getFax() {
    return this.fax;
  }

  /**
   * Get Company.
   * @returns {string}
   */
  getCompany() {
    return this.company;
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
   * Get Residential.
   * @returns {boolean}
   */
  getResidential() {
    return this.residential;
  }

  /**
   * Set Address_ID.
   * @param {number} addressId
   * @returns {CustomerAddressUpdate}
   */
  setAddressId(addressId) {
    this.addressId = addressId;
    return this;
  }

  /**
   * Set CustomerAddress_ID.
   * @param {number} customerAddressId
   * @returns {CustomerAddressUpdate}
   */
  setCustomerAddressId(customerAddressId) {
    this.customerAddressId = customerAddressId;
    return this;
  }

  /**
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {CustomerAddressUpdate}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
    return this;
  }

  /**
   * Set Customer_Login.
   * @param {string} customerLogin
   * @returns {CustomerAddressUpdate}
   */
  setCustomerLogin(customerLogin) {
    this.customerLogin = customerLogin;
    return this;
  }

  /**
   * Set Description.
   * @param {string} description
   * @returns {CustomerAddressUpdate}
   */
  setDescription(description) {
    this.description = description;
    return this;
  }

  /**
   * Set FirstName.
   * @param {string} firstName
   * @returns {CustomerAddressUpdate}
   */
  setFirstName(firstName) {
    this.firstName = firstName;
    return this;
  }

  /**
   * Set LastName.
   * @param {string} lastName
   * @returns {CustomerAddressUpdate}
   */
  setLastName(lastName) {
    this.lastName = lastName;
    return this;
  }

  /**
   * Set Email.
   * @param {string} email
   * @returns {CustomerAddressUpdate}
   */
  setEmail(email) {
    this.email = email;
    return this;
  }

  /**
   * Set Phone.
   * @param {string} phone
   * @returns {CustomerAddressUpdate}
   */
  setPhone(phone) {
    this.phone = phone;
    return this;
  }

  /**
   * Set Fax.
   * @param {string} fax
   * @returns {CustomerAddressUpdate}
   */
  setFax(fax) {
    this.fax = fax;
    return this;
  }

  /**
   * Set Company.
   * @param {string} company
   * @returns {CustomerAddressUpdate}
   */
  setCompany(company) {
    this.company = company;
    return this;
  }

  /**
   * Set Address1.
   * @param {string} address1
   * @returns {CustomerAddressUpdate}
   */
  setAddress1(address1) {
    this.address1 = address1;
    return this;
  }

  /**
   * Set Address2.
   * @param {string} address2
   * @returns {CustomerAddressUpdate}
   */
  setAddress2(address2) {
    this.address2 = address2;
    return this;
  }

  /**
   * Set City.
   * @param {string} city
   * @returns {CustomerAddressUpdate}
   */
  setCity(city) {
    this.city = city;
    return this;
  }

  /**
   * Set State.
   * @param {string} state
   * @returns {CustomerAddressUpdate}
   */
  setState(state) {
    this.state = state;
    return this;
  }

  /**
   * Set Zip.
   * @param {string} zip
   * @returns {CustomerAddressUpdate}
   */
  setZip(zip) {
    this.zip = zip;
    return this;
  }

  /**
   * Set Country.
   * @param {string} country
   * @returns {CustomerAddressUpdate}
   */
  setCountry(country) {
    this.country = country;
    return this;
  }

  /**
   * Set Residential.
   * @param {boolean} residential
   * @returns {CustomerAddressUpdate}
   */
  setResidential(residential) {
    this.residential = residential;
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
    }

    if (!util.isNullOrUndefined(this.addressId)) {
      data['Address_ID'] = this.addressId;
    } else if (!util.isNullOrUndefined(this.customerAddressId)) {
      data['CustomerAddress_ID'] = this.customerAddressId;
    }

    if (!util.isNullOrUndefined(this.description)) {
      data['Description'] = this.description;
    }

    if (!util.isNullOrUndefined(this.firstName)) {
      data['FirstName'] = this.firstName;
    }

    if (!util.isNullOrUndefined(this.lastName)) {
      data['LastName'] = this.lastName;
    }

    if (!util.isNullOrUndefined(this.email)) {
      data['Email'] = this.email;
    }

    if (!util.isNullOrUndefined(this.phone)) {
      data['Phone'] = this.phone;
    }

    if (!util.isNullOrUndefined(this.fax)) {
      data['Fax'] = this.fax;
    }

    if (!util.isNullOrUndefined(this.company)) {
      data['Company'] = this.company;
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

    if (!util.isNullOrUndefined(this.residential)) {
      data['Residential'] = this.residential;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CustomerAddressUpdate(this, httpResponse, data);
  }
}

/** 
 * Handles API Request CustomerAddress_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/customeraddress_delete
 */
class CustomerAddressDelete extends Request {
  /**
   * CustomerAddressDelete Constructor.
   * @param {?BaseClient} client
   * @param {?CustomerAddress} customerAddress
   */
  constructor(client, customerAddress = null) {
    super(client);
    this.function = 'CustomerAddress_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.addressId = null;
    this.customerAddressId = null;
    this.customerId = null;
    this.customerLogin = null;
    this.editCustomer = null;

    if (util.isInstanceOf(customerAddress, models.CustomerAddress)) {
      if (customerAddress.getCustomerId()) {
        this.setCustomerId(customerAddress.getCustomerId());
      }

      if (customerAddress.getId()) {
        this.setAddressId(customerAddress.getId());
      }
    }
  }

  /**
   * Get Address_ID.
   * @returns {number}
   */
  getAddressId() {
    return this.addressId;
  }

  /**
   * Get CustomerAddress_ID.
   * @returns {number}
   */
  getCustomerAddressId() {
    return this.customerAddressId;
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
   * Set Address_ID.
   * @param {number} addressId
   * @returns {CustomerAddressDelete}
   */
  setAddressId(addressId) {
    this.addressId = addressId;
    return this;
  }

  /**
   * Set CustomerAddress_ID.
   * @param {number} customerAddressId
   * @returns {CustomerAddressDelete}
   */
  setCustomerAddressId(customerAddressId) {
    this.customerAddressId = customerAddressId;
    return this;
  }

  /**
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {CustomerAddressDelete}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
    return this;
  }

  /**
   * Set Customer_Login.
   * @param {string} customerLogin
   * @returns {CustomerAddressDelete}
   */
  setCustomerLogin(customerLogin) {
    this.customerLogin = customerLogin;
    return this;
  }

  /**
   * Set Edit_Customer.
   * @param {string} editCustomer
   * @returns {CustomerAddressDelete}
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

    if (!util.isNullOrUndefined(this.addressId)) {
      data['Address_ID'] = this.addressId;
    } else if (!util.isNullOrUndefined(this.customerAddressId)) {
      data['CustomerAddress_ID'] = this.customerAddressId;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CustomerAddressDelete(this, httpResponse, data);
  }
}

/** 
 * Handles API Request CustomerAddressList_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/customeraddresslist_delete
 */
class CustomerAddressListDelete extends Request {
  /**
   * CustomerAddressListDelete Constructor.
   * @param {?BaseClient} client
   * @param {?Customer} customer
   */
  constructor(client, customer = null) {
    super(client);
    this.function = 'CustomerAddressList_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.customerId = null;
    this.customerLogin = null;
    this.editCustomer = null;
    this.customerAddressIds = [];

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
   * Get CustomerAddress_IDs.
   * @returns {Array}
   */
  getCustomerAddressIds() {
    return this.customerAddressIds;
  }

  /**
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {CustomerAddressListDelete}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
    return this;
  }

  /**
   * Set Customer_Login.
   * @param {string} customerLogin
   * @returns {CustomerAddressListDelete}
   */
  setCustomerLogin(customerLogin) {
    this.customerLogin = customerLogin;
    return this;
  }

  /**
   * Set Edit_Customer.
   * @param {string} editCustomer
   * @returns {CustomerAddressListDelete}
   */
  setEditCustomer(editCustomer) {
    this.editCustomer = editCustomer;
    return this;
  }

  /**
   * Add CustomerAddress_IDs.
   * @param {number} customerAddressId
   * @returns {CustomerAddressListDelete}
   */
  addCustomerAddress_ID(customerAddressId) {
    this.customerAddressIds.push(customerAddressId);
    return this;
  }

  /**
   * Add CustomerAddress model.
   * @param {CustomerAddress} customerAddress
   * @throws {Error}
   * @returns {CustomerAddressListDelete}
   */
  addCustomerAddress(customerAddress) {
    if (!util.isInstanceOf(customerAddress, models.CustomerAddress)) {
      throw new Error(util.format('Expected instance of CustomerAddress but got %s',
        typeof customerAddress));
    }

    if (customerAddress.getId()) {
      this.customerAddressIds.push(customerAddress.getId());
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

    if (!util.isNullOrUndefined(this.customerId)) {
      data['Customer_ID'] = this.customerId;
    } else if (!util.isNullOrUndefined(this.customerLogin)) {
      data['Customer_Login'] = this.customerLogin;
    } else if (!util.isNullOrUndefined(this.editCustomer)) {
      data['Edit_Customer'] = this.editCustomer;
    }

    data['CustomerAddress_IDs'] = this.customerAddressIds;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CustomerAddressListDelete(this, httpResponse, data);
  }
}

/** 
 * Handles API Request CustomerAddress_Update_Residential. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/customeraddress_update_residential
 */
class CustomerAddressUpdateResidential extends Request {
  /**
   * CustomerAddressUpdateResidential Constructor.
   * @param {?BaseClient} client
   * @param {?CustomerAddress} customerAddress
   */
  constructor(client, customerAddress = null) {
    super(client);
    this.function = 'CustomerAddress_Update_Residential';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.addressId = null;
    this.customerAddressId = null;
    this.residential = null;

    if (util.isInstanceOf(customerAddress, models.CustomerAddress)) {
      if (customerAddress.getId()) {
        this.setAddressId(customerAddress.getId());
      }
    }
  }

  /**
   * Get Address_ID.
   * @returns {number}
   */
  getAddressId() {
    return this.addressId;
  }

  /**
   * Get CustomerAddress_ID.
   * @returns {number}
   */
  getCustomerAddressId() {
    return this.customerAddressId;
  }

  /**
   * Get Residential.
   * @returns {boolean}
   */
  getResidential() {
    return this.residential;
  }

  /**
   * Set Address_ID.
   * @param {number} addressId
   * @returns {CustomerAddressUpdateResidential}
   */
  setAddressId(addressId) {
    this.addressId = addressId;
    return this;
  }

  /**
   * Set CustomerAddress_ID.
   * @param {number} customerAddressId
   * @returns {CustomerAddressUpdateResidential}
   */
  setCustomerAddressId(customerAddressId) {
    this.customerAddressId = customerAddressId;
    return this;
  }

  /**
   * Set Residential.
   * @param {boolean} residential
   * @returns {CustomerAddressUpdateResidential}
   */
  setResidential(residential) {
    this.residential = residential;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.addressId)) {
      data['Address_ID'] = this.addressId;
    } else if (!util.isNullOrUndefined(this.customerAddressId)) {
      data['CustomerAddress_ID'] = this.customerAddressId;
    }

    if (!util.isNullOrUndefined(this.residential)) {
      data['Residential'] = this.residential;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CustomerAddressUpdateResidential(this, httpResponse, data);
  }
}

/** 
 * Handles API Request URIList_Load_Query. Scope: Domain. 
 * @see https://docs.miva.com/json-api/functions/urilist_load_query
 */
class URIListLoadQuery extends ListQueryRequest {
  /**
   * URIListLoadQuery Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'URIList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_DOMAIN;

    this.availableSearchFields = [
      'id',
      'uri',
      'screen',
      'status',
      'canonical',
      'store_name',
      'page_code',
      'page_name',
      'category_code',
      'category_name',
      'product_code',
      'product_sku',
      'product_name',
      'feed_code',
      'feed_name'
    ];

    this.availableSortFields = [
      'id',
      'uri',
      'screen',
      'status',
      'canonical',
      'store_name',
      'page_code',
      'page_name',
      'category_code',
      'category_name',
      'product_code',
      'product_sku',
      'product_name',
      'feed_code',
      'feed_name'
    ];
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.URIListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request URI_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/uri_insert
 */
class URIInsert extends Request {
  /**
   * URIInsert Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'URI_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.uri = null;
    this.destinationType = null;
    this.destination = null;
    this.status = null;
    this.canonical = null;
  }

  /**
   * Get URI.
   * @returns {string}
   */
  getUri() {
    return this.uri;
  }

  /**
   * Get Destination_Type.
   * @returns {string}
   */
  getDestinationType() {
    return this.destinationType;
  }

  /**
   * Get Destination.
   * @returns {string}
   */
  getDestination() {
    return this.destination;
  }

  /**
   * Get Status.
   * @returns {number}
   */
  getStatus() {
    return this.status;
  }

  /**
   * Get Canonical.
   * @returns {boolean}
   */
  getCanonical() {
    return this.canonical;
  }

  /**
   * Set URI.
   * @param {string} uri
   * @returns {URIInsert}
   */
  setUri(uri) {
    this.uri = uri;
    return this;
  }

  /**
   * Set Destination_Type.
   * @param {string} destinationType
   * @returns {URIInsert}
   */
  setDestinationType(destinationType) {
    this.destinationType = destinationType;
    return this;
  }

  /**
   * Set Destination.
   * @param {string} destination
   * @returns {URIInsert}
   */
  setDestination(destination) {
    this.destination = destination;
    return this;
  }

  /**
   * Set Status.
   * @param {number} status
   * @returns {URIInsert}
   */
  setStatus(status) {
    this.status = status;
    return this;
  }

  /**
   * Set Canonical.
   * @param {boolean} canonical
   * @returns {URIInsert}
   */
  setCanonical(canonical) {
    this.canonical = canonical;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.uri)) {
      data['URI'] = this.uri;
    }

    if (!util.isNullOrUndefined(this.destinationType)) {
      data['Destination_Type'] = this.destinationType;
    }

    if (!util.isNullOrUndefined(this.destination)) {
      data['Destination'] = this.destination;
    }

    if (!util.isNullOrUndefined(this.status)) {
      data['Status'] = this.status;
    }

    if (!util.isNullOrUndefined(this.canonical)) {
      data['Canonical'] = this.canonical;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.URIInsert(this, httpResponse, data);
  }
}

/** 
 * Handles API Request ProductURI_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/producturi_insert
 */
class ProductURIInsert extends Request {
  /**
   * ProductURIInsert Constructor.
   * @param {?BaseClient} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client);
    this.function = 'ProductURI_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.uri = null;
    this.status = null;
    this.canonical = null;
    this.productId = null;
    this.productCode = null;
    this.editProduct = null;

    if (util.isInstanceOf(product, models.Product)) {
      if (product.getId()) {
        this.setProductId(product.getId());
      } else if (product.getCode()) {
        this.setProductCode(product.getCode());
      }
    }
  }

  /**
   * Get URI.
   * @returns {string}
   */
  getUri() {
    return this.uri;
  }

  /**
   * Get Status.
   * @returns {number}
   */
  getStatus() {
    return this.status;
  }

  /**
   * Get Canonical.
   * @returns {boolean}
   */
  getCanonical() {
    return this.canonical;
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
   * Set URI.
   * @param {string} uri
   * @returns {ProductURIInsert}
   */
  setUri(uri) {
    this.uri = uri;
    return this;
  }

  /**
   * Set Status.
   * @param {number} status
   * @returns {ProductURIInsert}
   */
  setStatus(status) {
    this.status = status;
    return this;
  }

  /**
   * Set Canonical.
   * @param {boolean} canonical
   * @returns {ProductURIInsert}
   */
  setCanonical(canonical) {
    this.canonical = canonical;
    return this;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {ProductURIInsert}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {ProductURIInsert}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {ProductURIInsert}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
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
    } else if (!util.isNullOrUndefined(this.productCode)) {
      data['Product_Code'] = this.productCode;
    } else if (!util.isNullOrUndefined(this.editProduct)) {
      data['Edit_Product'] = this.editProduct;
    }

    if (!util.isNullOrUndefined(this.uri)) {
      data['URI'] = this.uri;
    }

    if (!util.isNullOrUndefined(this.status)) {
      data['Status'] = this.status;
    }

    if (!util.isNullOrUndefined(this.canonical)) {
      data['Canonical'] = this.canonical;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ProductURIInsert(this, httpResponse, data);
  }
}

/** 
 * Handles API Request CategoryURI_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/categoryuri_insert
 */
class CategoryURIInsert extends Request {
  /**
   * CategoryURIInsert Constructor.
   * @param {?BaseClient} client
   * @param {?Category} category
   */
  constructor(client, category = null) {
    super(client);
    this.function = 'CategoryURI_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.uri = null;
    this.status = null;
    this.canonical = null;
    this.categoryId = null;
    this.categoryCode = null;
    this.editCategory = null;

    if (util.isInstanceOf(category, models.Category)) {
      if (category.getId()) {
        this.setCategoryId(category.getId());
      } else if (category.getCode()) {
        this.setCategoryCode(category.getCode());
      }
    }
  }

  /**
   * Get URI.
   * @returns {string}
   */
  getUri() {
    return this.uri;
  }

  /**
   * Get Status.
   * @returns {number}
   */
  getStatus() {
    return this.status;
  }

  /**
   * Get Canonical.
   * @returns {boolean}
   */
  getCanonical() {
    return this.canonical;
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
   * Set URI.
   * @param {string} uri
   * @returns {CategoryURIInsert}
   */
  setUri(uri) {
    this.uri = uri;
    return this;
  }

  /**
   * Set Status.
   * @param {number} status
   * @returns {CategoryURIInsert}
   */
  setStatus(status) {
    this.status = status;
    return this;
  }

  /**
   * Set Canonical.
   * @param {boolean} canonical
   * @returns {CategoryURIInsert}
   */
  setCanonical(canonical) {
    this.canonical = canonical;
    return this;
  }

  /**
   * Set Category_ID.
   * @param {number} categoryId
   * @returns {CategoryURIInsert}
   */
  setCategoryId(categoryId) {
    this.categoryId = categoryId;
    return this;
  }

  /**
   * Set Category_Code.
   * @param {string} categoryCode
   * @returns {CategoryURIInsert}
   */
  setCategoryCode(categoryCode) {
    this.categoryCode = categoryCode;
    return this;
  }

  /**
   * Set Edit_Category.
   * @param {string} editCategory
   * @returns {CategoryURIInsert}
   */
  setEditCategory(editCategory) {
    this.editCategory = editCategory;
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
    } else if (!util.isNullOrUndefined(this.categoryCode)) {
      data['Category_Code'] = this.categoryCode;
    } else if (!util.isNullOrUndefined(this.editCategory)) {
      data['Edit_Category'] = this.editCategory;
    }

    if (!util.isNullOrUndefined(this.uri)) {
      data['URI'] = this.uri;
    }

    if (!util.isNullOrUndefined(this.status)) {
      data['Status'] = this.status;
    }

    if (!util.isNullOrUndefined(this.canonical)) {
      data['Canonical'] = this.canonical;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CategoryURIInsert(this, httpResponse, data);
  }
}

/** 
 * Handles API Request PageURI_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/pageuri_insert
 */
class PageURIInsert extends Request {
  /**
   * PageURIInsert Constructor.
   * @param {?BaseClient} client
   * @param {?Page} page
   */
  constructor(client, page = null) {
    super(client);
    this.function = 'PageURI_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.uri = null;
    this.status = null;
    this.canonical = null;
    this.pageId = null;
    this.pageCode = null;
    this.editPage = null;

    if (util.isInstanceOf(page, models.Page)) {
      if (page.getId()) {
        this.setPageId(page.getId());
      } else if (page.getCode()) {
        this.setPageCode(page.getCode());
      }
    }
  }

  /**
   * Get URI.
   * @returns {string}
   */
  getUri() {
    return this.uri;
  }

  /**
   * Get Status.
   * @returns {number}
   */
  getStatus() {
    return this.status;
  }

  /**
   * Get Canonical.
   * @returns {boolean}
   */
  getCanonical() {
    return this.canonical;
  }

  /**
   * Get Page_ID.
   * @returns {number}
   */
  getPageId() {
    return this.pageId;
  }

  /**
   * Get Page_Code.
   * @returns {string}
   */
  getPageCode() {
    return this.pageCode;
  }

  /**
   * Get Edit_Page.
   * @returns {string}
   */
  getEditPage() {
    return this.editPage;
  }

  /**
   * Set URI.
   * @param {string} uri
   * @returns {PageURIInsert}
   */
  setUri(uri) {
    this.uri = uri;
    return this;
  }

  /**
   * Set Status.
   * @param {number} status
   * @returns {PageURIInsert}
   */
  setStatus(status) {
    this.status = status;
    return this;
  }

  /**
   * Set Canonical.
   * @param {boolean} canonical
   * @returns {PageURIInsert}
   */
  setCanonical(canonical) {
    this.canonical = canonical;
    return this;
  }

  /**
   * Set Page_ID.
   * @param {number} pageId
   * @returns {PageURIInsert}
   */
  setPageId(pageId) {
    this.pageId = pageId;
    return this;
  }

  /**
   * Set Page_Code.
   * @param {string} pageCode
   * @returns {PageURIInsert}
   */
  setPageCode(pageCode) {
    this.pageCode = pageCode;
    return this;
  }

  /**
   * Set Edit_Page.
   * @param {string} editPage
   * @returns {PageURIInsert}
   */
  setEditPage(editPage) {
    this.editPage = editPage;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.pageId)) {
      data['Page_ID'] = this.pageId;
    } else if (!util.isNullOrUndefined(this.pageCode)) {
      data['Page_Code'] = this.pageCode;
    } else if (!util.isNullOrUndefined(this.editPage)) {
      data['Edit_Page'] = this.editPage;
    }

    if (!util.isNullOrUndefined(this.uri)) {
      data['URI'] = this.uri;
    }

    if (!util.isNullOrUndefined(this.status)) {
      data['Status'] = this.status;
    }

    if (!util.isNullOrUndefined(this.canonical)) {
      data['Canonical'] = this.canonical;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.PageURIInsert(this, httpResponse, data);
  }
}

/** 
 * Handles API Request FeedURI_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/feeduri_insert
 */
class FeedURIInsert extends Request {
  /**
   * FeedURIInsert Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'FeedURI_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.feedId = null;
    this.feedCode = null;
    this.uri = null;
    this.status = null;
    this.canonical = null;
  }

  /**
   * Get Feed_ID.
   * @returns {number}
   */
  getFeedId() {
    return this.feedId;
  }

  /**
   * Get Feed_Code.
   * @returns {string}
   */
  getFeedCode() {
    return this.feedCode;
  }

  /**
   * Get URI.
   * @returns {string}
   */
  getUri() {
    return this.uri;
  }

  /**
   * Get Status.
   * @returns {number}
   */
  getStatus() {
    return this.status;
  }

  /**
   * Get Canonical.
   * @returns {boolean}
   */
  getCanonical() {
    return this.canonical;
  }

  /**
   * Set Feed_ID.
   * @param {number} feedId
   * @returns {FeedURIInsert}
   */
  setFeedId(feedId) {
    this.feedId = feedId;
    return this;
  }

  /**
   * Set Feed_Code.
   * @param {string} feedCode
   * @returns {FeedURIInsert}
   */
  setFeedCode(feedCode) {
    this.feedCode = feedCode;
    return this;
  }

  /**
   * Set URI.
   * @param {string} uri
   * @returns {FeedURIInsert}
   */
  setUri(uri) {
    this.uri = uri;
    return this;
  }

  /**
   * Set Status.
   * @param {number} status
   * @returns {FeedURIInsert}
   */
  setStatus(status) {
    this.status = status;
    return this;
  }

  /**
   * Set Canonical.
   * @param {boolean} canonical
   * @returns {FeedURIInsert}
   */
  setCanonical(canonical) {
    this.canonical = canonical;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.feedId)) {
      data['Feed_ID'] = this.feedId;
    } else if (!util.isNullOrUndefined(this.feedCode)) {
      data['Feed_Code'] = this.feedCode;
    }

    if (!util.isNullOrUndefined(this.uri)) {
      data['URI'] = this.uri;
    }

    if (!util.isNullOrUndefined(this.status)) {
      data['Status'] = this.status;
    }

    if (!util.isNullOrUndefined(this.canonical)) {
      data['Canonical'] = this.canonical;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.FeedURIInsert(this, httpResponse, data);
  }
}

/** 
 * Handles API Request URI_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/uri_update
 */
class URIUpdate extends Request {
  /**
   * URIUpdate Constructor.
   * @param {?BaseClient} client
   * @param {?Uri} uri
   */
  constructor(client, uri = null) {
    super(client);
    this.function = 'URI_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.uriId = null;
    this.uri = null;
    this.destinationType = null;
    this.destination = null;
    this.status = null;
    this.canonical = null;

    if (util.isInstanceOf(uri, models.Uri)) {
      if (uri.getId()) {
        this.setUriId(uri.getId());
      }
    }
  }

  /**
   * Get URI_ID.
   * @returns {number}
   */
  getUriId() {
    return this.uriId;
  }

  /**
   * Get URI.
   * @returns {string}
   */
  getUri() {
    return this.uri;
  }

  /**
   * Get Destination_Type.
   * @returns {string}
   */
  getDestinationType() {
    return this.destinationType;
  }

  /**
   * Get Destination.
   * @returns {string}
   */
  getDestination() {
    return this.destination;
  }

  /**
   * Get Status.
   * @returns {number}
   */
  getStatus() {
    return this.status;
  }

  /**
   * Get Canonical.
   * @returns {boolean}
   */
  getCanonical() {
    return this.canonical;
  }

  /**
   * Set URI_ID.
   * @param {number} uriId
   * @returns {URIUpdate}
   */
  setUriId(uriId) {
    this.uriId = uriId;
    return this;
  }

  /**
   * Set URI.
   * @param {string} uri
   * @returns {URIUpdate}
   */
  setUri(uri) {
    this.uri = uri;
    return this;
  }

  /**
   * Set Destination_Type.
   * @param {string} destinationType
   * @returns {URIUpdate}
   */
  setDestinationType(destinationType) {
    this.destinationType = destinationType;
    return this;
  }

  /**
   * Set Destination.
   * @param {string} destination
   * @returns {URIUpdate}
   */
  setDestination(destination) {
    this.destination = destination;
    return this;
  }

  /**
   * Set Status.
   * @param {number} status
   * @returns {URIUpdate}
   */
  setStatus(status) {
    this.status = status;
    return this;
  }

  /**
   * Set Canonical.
   * @param {boolean} canonical
   * @returns {URIUpdate}
   */
  setCanonical(canonical) {
    this.canonical = canonical;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.uriId)) {
      data['URI_ID'] = this.uriId;
    }

    if (!util.isNullOrUndefined(this.uri)) {
      data['URI'] = this.uri;
    }

    if (!util.isNullOrUndefined(this.destinationType)) {
      data['Destination_Type'] = this.destinationType;
    }

    if (!util.isNullOrUndefined(this.destination)) {
      data['Destination'] = this.destination;
    }

    if (!util.isNullOrUndefined(this.status)) {
      data['Status'] = this.status;
    }

    if (!util.isNullOrUndefined(this.canonical)) {
      data['Canonical'] = this.canonical;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.URIUpdate(this, httpResponse, data);
  }
}

/** 
 * Handles API Request ProductURI_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/producturi_update
 */
class ProductURIUpdate extends Request {
  /**
   * ProductURIUpdate Constructor.
   * @param {?BaseClient} client
   * @param {?Uri} uri
   */
  constructor(client, uri = null) {
    super(client);
    this.function = 'ProductURI_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.uriId = null;
    this.uri = null;
    this.status = null;
    this.canonical = null;

    if (util.isInstanceOf(uri, models.Uri)) {
      if (uri.getId()) {
        this.setUriId(uri.getId());
      }
    }
  }

  /**
   * Get URI_ID.
   * @returns {number}
   */
  getUriId() {
    return this.uriId;
  }

  /**
   * Get URI.
   * @returns {string}
   */
  getUri() {
    return this.uri;
  }

  /**
   * Get Status.
   * @returns {number}
   */
  getStatus() {
    return this.status;
  }

  /**
   * Get Canonical.
   * @returns {boolean}
   */
  getCanonical() {
    return this.canonical;
  }

  /**
   * Set URI_ID.
   * @param {number} uriId
   * @returns {ProductURIUpdate}
   */
  setUriId(uriId) {
    this.uriId = uriId;
    return this;
  }

  /**
   * Set URI.
   * @param {string} uri
   * @returns {ProductURIUpdate}
   */
  setUri(uri) {
    this.uri = uri;
    return this;
  }

  /**
   * Set Status.
   * @param {number} status
   * @returns {ProductURIUpdate}
   */
  setStatus(status) {
    this.status = status;
    return this;
  }

  /**
   * Set Canonical.
   * @param {boolean} canonical
   * @returns {ProductURIUpdate}
   */
  setCanonical(canonical) {
    this.canonical = canonical;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.uriId)) {
      data['URI_ID'] = this.uriId;
    }

    if (!util.isNullOrUndefined(this.uri)) {
      data['URI'] = this.uri;
    }

    if (!util.isNullOrUndefined(this.status)) {
      data['Status'] = this.status;
    }

    if (!util.isNullOrUndefined(this.canonical)) {
      data['Canonical'] = this.canonical;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ProductURIUpdate(this, httpResponse, data);
  }
}

/** 
 * Handles API Request CategoryURI_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/categoryuri_update
 */
class CategoryURIUpdate extends Request {
  /**
   * CategoryURIUpdate Constructor.
   * @param {?BaseClient} client
   * @param {?Uri} uri
   */
  constructor(client, uri = null) {
    super(client);
    this.function = 'CategoryURI_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.uriId = null;
    this.uri = null;
    this.status = null;
    this.canonical = null;

    if (util.isInstanceOf(uri, models.Uri)) {
      if (uri.getId()) {
        this.setUriId(uri.getId());
      }
    }
  }

  /**
   * Get URI_ID.
   * @returns {number}
   */
  getUriId() {
    return this.uriId;
  }

  /**
   * Get URI.
   * @returns {string}
   */
  getUri() {
    return this.uri;
  }

  /**
   * Get Status.
   * @returns {number}
   */
  getStatus() {
    return this.status;
  }

  /**
   * Get Canonical.
   * @returns {boolean}
   */
  getCanonical() {
    return this.canonical;
  }

  /**
   * Set URI_ID.
   * @param {number} uriId
   * @returns {CategoryURIUpdate}
   */
  setUriId(uriId) {
    this.uriId = uriId;
    return this;
  }

  /**
   * Set URI.
   * @param {string} uri
   * @returns {CategoryURIUpdate}
   */
  setUri(uri) {
    this.uri = uri;
    return this;
  }

  /**
   * Set Status.
   * @param {number} status
   * @returns {CategoryURIUpdate}
   */
  setStatus(status) {
    this.status = status;
    return this;
  }

  /**
   * Set Canonical.
   * @param {boolean} canonical
   * @returns {CategoryURIUpdate}
   */
  setCanonical(canonical) {
    this.canonical = canonical;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.uriId)) {
      data['URI_ID'] = this.uriId;
    }

    if (!util.isNullOrUndefined(this.uri)) {
      data['URI'] = this.uri;
    }

    if (!util.isNullOrUndefined(this.status)) {
      data['Status'] = this.status;
    }

    if (!util.isNullOrUndefined(this.canonical)) {
      data['Canonical'] = this.canonical;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CategoryURIUpdate(this, httpResponse, data);
  }
}

/** 
 * Handles API Request PageURI_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/pageuri_update
 */
class PageURIUpdate extends Request {
  /**
   * PageURIUpdate Constructor.
   * @param {?BaseClient} client
   * @param {?Uri} uri
   */
  constructor(client, uri = null) {
    super(client);
    this.function = 'PageURI_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.uriId = null;
    this.uri = null;
    this.status = null;
    this.canonical = null;

    if (util.isInstanceOf(uri, models.Uri)) {
      if (uri.getId()) {
        this.setUriId(uri.getId());
      }
    }
  }

  /**
   * Get URI_ID.
   * @returns {number}
   */
  getUriId() {
    return this.uriId;
  }

  /**
   * Get URI.
   * @returns {string}
   */
  getUri() {
    return this.uri;
  }

  /**
   * Get Status.
   * @returns {number}
   */
  getStatus() {
    return this.status;
  }

  /**
   * Get Canonical.
   * @returns {boolean}
   */
  getCanonical() {
    return this.canonical;
  }

  /**
   * Set URI_ID.
   * @param {number} uriId
   * @returns {PageURIUpdate}
   */
  setUriId(uriId) {
    this.uriId = uriId;
    return this;
  }

  /**
   * Set URI.
   * @param {string} uri
   * @returns {PageURIUpdate}
   */
  setUri(uri) {
    this.uri = uri;
    return this;
  }

  /**
   * Set Status.
   * @param {number} status
   * @returns {PageURIUpdate}
   */
  setStatus(status) {
    this.status = status;
    return this;
  }

  /**
   * Set Canonical.
   * @param {boolean} canonical
   * @returns {PageURIUpdate}
   */
  setCanonical(canonical) {
    this.canonical = canonical;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.uriId)) {
      data['URI_ID'] = this.uriId;
    }

    if (!util.isNullOrUndefined(this.uri)) {
      data['URI'] = this.uri;
    }

    if (!util.isNullOrUndefined(this.status)) {
      data['Status'] = this.status;
    }

    if (!util.isNullOrUndefined(this.canonical)) {
      data['Canonical'] = this.canonical;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.PageURIUpdate(this, httpResponse, data);
  }
}

/** 
 * Handles API Request FeedURI_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/feeduri_update
 */
class FeedURIUpdate extends Request {
  /**
   * FeedURIUpdate Constructor.
   * @param {?BaseClient} client
   * @param {?Uri} uri
   */
  constructor(client, uri = null) {
    super(client);
    this.function = 'FeedURI_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.uriId = null;
    this.uri = null;
    this.status = null;
    this.canonical = null;

    if (util.isInstanceOf(uri, models.Uri)) {
      if (uri.getId()) {
        this.setUriId(uri.getId());
      }
    }
  }

  /**
   * Get URI_ID.
   * @returns {number}
   */
  getUriId() {
    return this.uriId;
  }

  /**
   * Get URI.
   * @returns {string}
   */
  getUri() {
    return this.uri;
  }

  /**
   * Get Status.
   * @returns {number}
   */
  getStatus() {
    return this.status;
  }

  /**
   * Get Canonical.
   * @returns {boolean}
   */
  getCanonical() {
    return this.canonical;
  }

  /**
   * Set URI_ID.
   * @param {number} uriId
   * @returns {FeedURIUpdate}
   */
  setUriId(uriId) {
    this.uriId = uriId;
    return this;
  }

  /**
   * Set URI.
   * @param {string} uri
   * @returns {FeedURIUpdate}
   */
  setUri(uri) {
    this.uri = uri;
    return this;
  }

  /**
   * Set Status.
   * @param {number} status
   * @returns {FeedURIUpdate}
   */
  setStatus(status) {
    this.status = status;
    return this;
  }

  /**
   * Set Canonical.
   * @param {boolean} canonical
   * @returns {FeedURIUpdate}
   */
  setCanonical(canonical) {
    this.canonical = canonical;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.uriId)) {
      data['URI_ID'] = this.uriId;
    }

    if (!util.isNullOrUndefined(this.uri)) {
      data['URI'] = this.uri;
    }

    if (!util.isNullOrUndefined(this.status)) {
      data['Status'] = this.status;
    }

    if (!util.isNullOrUndefined(this.canonical)) {
      data['Canonical'] = this.canonical;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.FeedURIUpdate(this, httpResponse, data);
  }
}

/** 
 * Handles API Request URI_Delete. Scope: Domain. 
 * @see https://docs.miva.com/json-api/functions/uri_delete
 */
class URIDelete extends Request {
  /**
   * URIDelete Constructor.
   * @param {?BaseClient} client
   * @param {?Uri} uri
   */
  constructor(client, uri = null) {
    super(client);
    this.function = 'URI_Delete';
    this.scope = Request.REQUEST_SCOPE_DOMAIN;
    this.uriId = null;

    if (util.isInstanceOf(uri, models.Uri)) {
      if (uri.getId()) {
        this.setUriId(uri.getId());
      }
    }
  }

  /**
   * Get URI_ID.
   * @returns {number}
   */
  getUriId() {
    return this.uriId;
  }

  /**
   * Set URI_ID.
   * @param {number} uriId
   * @returns {URIDelete}
   */
  setUriId(uriId) {
    this.uriId = uriId;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.uriId)) {
      data['URI_ID'] = this.uriId;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.URIDelete(this, httpResponse, data);
  }
}

/** 
 * Handles API Request ProductURIList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/producturilist_load_query
 */
class ProductURIListLoadQuery extends ListQueryRequest {
  /**
   * ProductURIListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client);
    this.function = 'ProductURIList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'canonical',
      'status',
      'uri'
    ];

    this.availableSortFields = [
      'uri'
    ];

    this.productId = null;
    this.editProduct = null;
    this.productCode = null;

    if (util.isInstanceOf(product, models.Product)) {
      if (product.getId()) {
        this.setProductId(product.getId());
      } else if (product.getCode()) {
        this.setEditProduct(product.getCode());
      } else if (product.getCode()) {
        this.setProductCode(product.getCode());
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
   * Set Product_ID.
   * @param {number} productId
   * @returns {ProductURIListLoadQuery}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {ProductURIListLoadQuery}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {ProductURIListLoadQuery}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
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
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ProductURIListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request CategoryURIList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/categoryurilist_load_query
 */
class CategoryURIListLoadQuery extends ListQueryRequest {
  /**
   * CategoryURIListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?Category} category
   */
  constructor(client, category = null) {
    super(client);
    this.function = 'CategoryURIList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'canonical',
      'status',
      'uri'
    ];

    this.availableSortFields = [
      'uri'
    ];

    this.categoryId = null;
    this.editCategory = null;
    this.categoryCode = null;

    if (util.isInstanceOf(category, models.Category)) {
      if (category.getId()) {
        this.setCategoryId(category.getId());
      } else if (category.getCode()) {
        this.setEditCategory(category.getCode());
      } else if (category.getCode()) {
        this.setCategoryCode(category.getCode());
      }

      this.setCategoryCode(category.getCode());
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
   * @returns {CategoryURIListLoadQuery}
   */
  setCategoryId(categoryId) {
    this.categoryId = categoryId;
    return this;
  }

  /**
   * Set Edit_Category.
   * @param {string} editCategory
   * @returns {CategoryURIListLoadQuery}
   */
  setEditCategory(editCategory) {
    this.editCategory = editCategory;
    return this;
  }

  /**
   * Set Category_Code.
   * @param {string} categoryCode
   * @returns {CategoryURIListLoadQuery}
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

    data['Category_Code'] = this.categoryCode;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CategoryURIListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request PageURIList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/pageurilist_load_query
 */
class PageURIListLoadQuery extends ListQueryRequest {
  /**
   * PageURIListLoadQuery Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'PageURIList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'canonical',
      'status',
      'uri'
    ];

    this.availableSortFields = [
      'uri'
    ];

    this.pageId = null;
    this.editPage = null;
    this.pageCode = null;
  }

  /**
   * Get Page_ID.
   * @returns {number}
   */
  getPageId() {
    return this.pageId;
  }

  /**
   * Get Edit_Page.
   * @returns {string}
   */
  getEditPage() {
    return this.editPage;
  }

  /**
   * Get Page_Code.
   * @returns {string}
   */
  getPageCode() {
    return this.pageCode;
  }

  /**
   * Set Page_ID.
   * @param {number} pageId
   * @returns {PageURIListLoadQuery}
   */
  setPageId(pageId) {
    this.pageId = pageId;
    return this;
  }

  /**
   * Set Edit_Page.
   * @param {string} editPage
   * @returns {PageURIListLoadQuery}
   */
  setEditPage(editPage) {
    this.editPage = editPage;
    return this;
  }

  /**
   * Set Page_Code.
   * @param {string} pageCode
   * @returns {PageURIListLoadQuery}
   */
  setPageCode(pageCode) {
    this.pageCode = pageCode;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.pageId)) {
      data['Page_ID'] = this.pageId;
    } else if (!util.isNullOrUndefined(this.editPage)) {
      data['Edit_Page'] = this.editPage;
    } else if (!util.isNullOrUndefined(this.pageCode)) {
      data['Page_Code'] = this.pageCode;
    }

    data['Page_Code'] = this.pageCode;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.PageURIListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request FeedURIList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/feedurilist_load_query
 */
class FeedURIListLoadQuery extends ListQueryRequest {
  /**
   * FeedURIListLoadQuery Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'FeedURIList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'canonical',
      'status',
      'uri'
    ];

    this.availableSortFields = [
      'uri'
    ];

    this.feedId = null;
    this.feedCode = null;
  }

  /**
   * Get Feed_ID.
   * @returns {number}
   */
  getFeedId() {
    return this.feedId;
  }

  /**
   * Get Feed_Code.
   * @returns {string}
   */
  getFeedCode() {
    return this.feedCode;
  }

  /**
   * Set Feed_ID.
   * @param {number} feedId
   * @returns {FeedURIListLoadQuery}
   */
  setFeedId(feedId) {
    this.feedId = feedId;
    return this;
  }

  /**
   * Set Feed_Code.
   * @param {string} feedCode
   * @returns {FeedURIListLoadQuery}
   */
  setFeedCode(feedCode) {
    this.feedCode = feedCode;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.feedId)) {
      data['Feed_ID'] = this.feedId;
    } else if (!util.isNullOrUndefined(this.feedCode)) {
      data['Feed_Code'] = this.feedCode;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.FeedURIListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request ProductURIList_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/producturilist_delete
 */
class ProductURIListDelete extends Request {
  /**
   * ProductURIListDelete Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'ProductURIList_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.uriIds = [];
  }

  /**
   * Get URI_IDs.
   * @returns {Array}
   */
  getUriIds() {
    return this.uriIds;
  }

  /**
   * Add URI_IDs.
   * @param {number} uriId
   * @returns {ProductURIListDelete}
   */
  addUriID(uriId) {
    this.uriIds.push(uriId);
    return this;
  }

  /**
   * Add Uri model.
   * @param {Uri} uri
   * @throws {Error}
   * @returns {ProductURIListDelete}
   */
  addUri(uri) {
    if (!util.isInstanceOf(uri, models.Uri)) {
      throw new Error(util.format('Expected instance of Uri but got %s',
        typeof uri));
    }

    if (uri.getId()) {
      this.uriIds.push(uri.getId());
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

    data['URI_IDs'] = this.uriIds;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ProductURIListDelete(this, httpResponse, data);
  }
}

/** 
 * Handles API Request PageURIList_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/pageurilist_delete
 */
class PageURIListDelete extends Request {
  /**
   * PageURIListDelete Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'PageURIList_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.uriIds = [];
  }

  /**
   * Get URI_IDs.
   * @returns {Array}
   */
  getUriIds() {
    return this.uriIds;
  }

  /**
   * Add URI_IDs.
   * @param {number} uriId
   * @returns {PageURIListDelete}
   */
  addUriID(uriId) {
    this.uriIds.push(uriId);
    return this;
  }

  /**
   * Add Uri model.
   * @param {Uri} uri
   * @throws {Error}
   * @returns {PageURIListDelete}
   */
  addUri(uri) {
    if (!util.isInstanceOf(uri, models.Uri)) {
      throw new Error(util.format('Expected instance of Uri but got %s',
        typeof uri));
    }

    if (uri.getId()) {
      this.uriIds.push(uri.getId());
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

    data['URI_IDs'] = this.uriIds;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.PageURIListDelete(this, httpResponse, data);
  }
}

/** 
 * Handles API Request CategoryURIList_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/categoryurilist_delete
 */
class CategoryURIListDelete extends Request {
  /**
   * CategoryURIListDelete Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'CategoryURIList_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.uriIds = [];
  }

  /**
   * Get URI_IDs.
   * @returns {Array}
   */
  getUriIds() {
    return this.uriIds;
  }

  /**
   * Add URI_IDs.
   * @param {number} uriId
   * @returns {CategoryURIListDelete}
   */
  addUriID(uriId) {
    this.uriIds.push(uriId);
    return this;
  }

  /**
   * Add Uri model.
   * @param {Uri} uri
   * @throws {Error}
   * @returns {CategoryURIListDelete}
   */
  addUri(uri) {
    if (!util.isInstanceOf(uri, models.Uri)) {
      throw new Error(util.format('Expected instance of Uri but got %s',
        typeof uri));
    }

    if (uri.getId()) {
      this.uriIds.push(uri.getId());
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

    data['URI_IDs'] = this.uriIds;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CategoryURIListDelete(this, httpResponse, data);
  }
}

/** 
 * Handles API Request FeedURIList_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/feedurilist_delete
 */
class FeedURIListDelete extends Request {
  /**
   * FeedURIListDelete Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'FeedURIList_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.uriIds = [];
  }

  /**
   * Get URI_IDs.
   * @returns {Array}
   */
  getUriIds() {
    return this.uriIds;
  }

  /**
   * Add URI_IDs.
   * @param {number} uriId
   * @returns {FeedURIListDelete}
   */
  addUriID(uriId) {
    this.uriIds.push(uriId);
    return this;
  }

  /**
   * Add Uri model.
   * @param {Uri} uri
   * @throws {Error}
   * @returns {FeedURIListDelete}
   */
  addUri(uri) {
    if (!util.isInstanceOf(uri, models.Uri)) {
      throw new Error(util.format('Expected instance of Uri but got %s',
        typeof uri));
    }

    if (uri.getId()) {
      this.uriIds.push(uri.getId());
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

    data['URI_IDs'] = this.uriIds;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.FeedURIListDelete(this, httpResponse, data);
  }
}

/** 
 * Handles API Request URIList_Delete. Scope: Domain. 
 * @see https://docs.miva.com/json-api/functions/urilist_delete
 */
class URIListDelete extends Request {
  /**
   * URIListDelete Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'URIList_Delete';
    this.scope = Request.REQUEST_SCOPE_DOMAIN;
    this.uriIds = [];
  }

  /**
   * Get URI_IDs.
   * @returns {Array}
   */
  getUriIds() {
    return this.uriIds;
  }

  /**
   * Add URI_IDs.
   * @param {number} uriId
   * @returns {URIListDelete}
   */
  addUriID(uriId) {
    this.uriIds.push(uriId);
    return this;
  }

  /**
   * Add Uri model.
   * @param {Uri} uri
   * @throws {Error}
   * @returns {URIListDelete}
   */
  addUri(uri) {
    if (!util.isInstanceOf(uri, models.Uri)) {
      throw new Error(util.format('Expected instance of Uri but got %s',
        typeof uri));
    }

    if (uri.getId()) {
      this.uriIds.push(uri.getId());
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

    data['URI_IDs'] = this.uriIds;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.URIListDelete(this, httpResponse, data);
  }
}

/** 
 * Handles API Request PageURI_Redirect. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/pageuri_redirect
 */
class PageURIRedirect extends ListQueryRequest {
  /**
   * PageURIRedirect Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'PageURI_Redirect';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.destinationStoreCode = null;
    this.destinationType = null;
    this.destination = null;
    this.status = null;
    this.uriIds = [];
  }

  /**
   * Get Destination_Store_Code.
   * @returns {string}
   */
  getDestinationStoreCode() {
    return this.destinationStoreCode;
  }

  /**
   * Get Destination_Type.
   * @returns {string}
   */
  getDestinationType() {
    return this.destinationType;
  }

  /**
   * Get Destination.
   * @returns {string}
   */
  getDestination() {
    return this.destination;
  }

  /**
   * Get Status.
   * @returns {number}
   */
  getStatus() {
    return this.status;
  }

  /**
   * Get URI_IDs.
   * @returns {Array}
   */
  getUriIds() {
    return this.uriIds;
  }

  /**
   * Set Destination_Store_Code.
   * @param {string} destinationStoreCode
   * @returns {PageURIRedirect}
   */
  setDestinationStoreCode(destinationStoreCode) {
    this.destinationStoreCode = destinationStoreCode;
    return this;
  }

  /**
   * Set Destination_Type.
   * @param {string} destinationType
   * @returns {PageURIRedirect}
   */
  setDestinationType(destinationType) {
    this.destinationType = destinationType;
    return this;
  }

  /**
   * Set Destination.
   * @param {string} destination
   * @returns {PageURIRedirect}
   */
  setDestination(destination) {
    this.destination = destination;
    return this;
  }

  /**
   * Set Status.
   * @param {number} status
   * @returns {PageURIRedirect}
   */
  setStatus(status) {
    this.status = status;
    return this;
  }

  /**
   * Add URI_IDs.
   * @param {number} uriId
   * @returns {PageURIRedirect}
   */
  addUriID(uriId) {
    this.uriIds.push(uriId);
    return this;
  }

  /**
   * Add Uri model.
   * @param {Uri} uri
   * @throws {Error}
   * @returns {PageURIRedirect}
   */
  addUri(uri) {
    if (!util.isInstanceOf(uri, models.Uri)) {
      throw new Error(util.format('Expected instance of Uri but got %s',
        typeof uri));
    }

    if (uri.getId()) {
      this.uriIds.push(uri.getId());
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

    if (!util.isNullOrUndefined(this.destinationStoreCode)) {
      data['Destination_Store_Code'] = this.destinationStoreCode;
    }

    if (!util.isNullOrUndefined(this.destinationType)) {
      data['Destination_Type'] = this.destinationType;
    }

    if (!util.isNullOrUndefined(this.destination)) {
      data['Destination'] = this.destination;
    }

    if (!util.isNullOrUndefined(this.status)) {
      data['Status'] = this.status;
    }

    data['URI_IDs'] = this.uriIds;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.PageURIRedirect(this, httpResponse, data);
  }
}

/** 
 * Handles API Request ProductURI_Redirect. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/producturi_redirect
 */
class ProductURIRedirect extends ListQueryRequest {
  /**
   * ProductURIRedirect Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'ProductURI_Redirect';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.destinationStoreCode = null;
    this.destinationType = null;
    this.destination = null;
    this.status = null;
    this.uriIds = [];
  }

  /**
   * Get Destination_Store_Code.
   * @returns {string}
   */
  getDestinationStoreCode() {
    return this.destinationStoreCode;
  }

  /**
   * Get Destination_Type.
   * @returns {string}
   */
  getDestinationType() {
    return this.destinationType;
  }

  /**
   * Get Destination.
   * @returns {string}
   */
  getDestination() {
    return this.destination;
  }

  /**
   * Get Status.
   * @returns {number}
   */
  getStatus() {
    return this.status;
  }

  /**
   * Get URI_IDs.
   * @returns {Array}
   */
  getUriIds() {
    return this.uriIds;
  }

  /**
   * Set Destination_Store_Code.
   * @param {string} destinationStoreCode
   * @returns {ProductURIRedirect}
   */
  setDestinationStoreCode(destinationStoreCode) {
    this.destinationStoreCode = destinationStoreCode;
    return this;
  }

  /**
   * Set Destination_Type.
   * @param {string} destinationType
   * @returns {ProductURIRedirect}
   */
  setDestinationType(destinationType) {
    this.destinationType = destinationType;
    return this;
  }

  /**
   * Set Destination.
   * @param {string} destination
   * @returns {ProductURIRedirect}
   */
  setDestination(destination) {
    this.destination = destination;
    return this;
  }

  /**
   * Set Status.
   * @param {number} status
   * @returns {ProductURIRedirect}
   */
  setStatus(status) {
    this.status = status;
    return this;
  }

  /**
   * Add URI_IDs.
   * @param {number} uriId
   * @returns {ProductURIRedirect}
   */
  addUriID(uriId) {
    this.uriIds.push(uriId);
    return this;
  }

  /**
   * Add Uri model.
   * @param {Uri} uri
   * @throws {Error}
   * @returns {ProductURIRedirect}
   */
  addUri(uri) {
    if (!util.isInstanceOf(uri, models.Uri)) {
      throw new Error(util.format('Expected instance of Uri but got %s',
        typeof uri));
    }

    if (uri.getId()) {
      this.uriIds.push(uri.getId());
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

    if (!util.isNullOrUndefined(this.destinationStoreCode)) {
      data['Destination_Store_Code'] = this.destinationStoreCode;
    }

    if (!util.isNullOrUndefined(this.destinationType)) {
      data['Destination_Type'] = this.destinationType;
    }

    if (!util.isNullOrUndefined(this.destination)) {
      data['Destination'] = this.destination;
    }

    if (!util.isNullOrUndefined(this.status)) {
      data['Status'] = this.status;
    }

    data['URI_IDs'] = this.uriIds;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ProductURIRedirect(this, httpResponse, data);
  }
}

/** 
 * Handles API Request CategoryURI_Redirect. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/categoryuri_redirect
 */
class CategoryURIRedirect extends ListQueryRequest {
  /**
   * CategoryURIRedirect Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'CategoryURI_Redirect';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.destinationStoreCode = null;
    this.destinationType = null;
    this.destination = null;
    this.status = null;
    this.uriIds = [];
  }

  /**
   * Get Destination_Store_Code.
   * @returns {string}
   */
  getDestinationStoreCode() {
    return this.destinationStoreCode;
  }

  /**
   * Get Destination_Type.
   * @returns {string}
   */
  getDestinationType() {
    return this.destinationType;
  }

  /**
   * Get Destination.
   * @returns {string}
   */
  getDestination() {
    return this.destination;
  }

  /**
   * Get Status.
   * @returns {number}
   */
  getStatus() {
    return this.status;
  }

  /**
   * Get URI_IDs.
   * @returns {Array}
   */
  getUriIds() {
    return this.uriIds;
  }

  /**
   * Set Destination_Store_Code.
   * @param {string} destinationStoreCode
   * @returns {CategoryURIRedirect}
   */
  setDestinationStoreCode(destinationStoreCode) {
    this.destinationStoreCode = destinationStoreCode;
    return this;
  }

  /**
   * Set Destination_Type.
   * @param {string} destinationType
   * @returns {CategoryURIRedirect}
   */
  setDestinationType(destinationType) {
    this.destinationType = destinationType;
    return this;
  }

  /**
   * Set Destination.
   * @param {string} destination
   * @returns {CategoryURIRedirect}
   */
  setDestination(destination) {
    this.destination = destination;
    return this;
  }

  /**
   * Set Status.
   * @param {number} status
   * @returns {CategoryURIRedirect}
   */
  setStatus(status) {
    this.status = status;
    return this;
  }

  /**
   * Add URI_IDs.
   * @param {number} uriId
   * @returns {CategoryURIRedirect}
   */
  addUriID(uriId) {
    this.uriIds.push(uriId);
    return this;
  }

  /**
   * Add Uri model.
   * @param {Uri} uri
   * @throws {Error}
   * @returns {CategoryURIRedirect}
   */
  addUri(uri) {
    if (!util.isInstanceOf(uri, models.Uri)) {
      throw new Error(util.format('Expected instance of Uri but got %s',
        typeof uri));
    }

    if (uri.getId()) {
      this.uriIds.push(uri.getId());
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

    if (!util.isNullOrUndefined(this.destinationStoreCode)) {
      data['Destination_Store_Code'] = this.destinationStoreCode;
    }

    if (!util.isNullOrUndefined(this.destinationType)) {
      data['Destination_Type'] = this.destinationType;
    }

    if (!util.isNullOrUndefined(this.destination)) {
      data['Destination'] = this.destination;
    }

    if (!util.isNullOrUndefined(this.status)) {
      data['Status'] = this.status;
    }

    data['URI_IDs'] = this.uriIds;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CategoryURIRedirect(this, httpResponse, data);
  }
}

/** 
 * Handles API Request AvailabilityGroup_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/availabilitygroup_delete
 */
class AvailabilityGroupDelete extends Request {
  /**
   * AvailabilityGroupDelete Constructor.
   * @param {?BaseClient} client
   * @param {?AvailabilityGroup} availabilityGroup
   */
  constructor(client, availabilityGroup = null) {
    super(client);
    this.function = 'AvailabilityGroup_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.availabilityGroupId = null;
    this.editAvailabilityGroup = null;
    this.availabilityGroupName = null;

    if (util.isInstanceOf(availabilityGroup, models.AvailabilityGroup)) {
      if (availabilityGroup.getId()) {
        this.setAvailabilityGroupId(availabilityGroup.getId());
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
   * Set AvailabilityGroup_ID.
   * @param {number} availabilityGroupId
   * @returns {AvailabilityGroupDelete}
   */
  setAvailabilityGroupId(availabilityGroupId) {
    this.availabilityGroupId = availabilityGroupId;
    return this;
  }

  /**
   * Set Edit_AvailabilityGroup.
   * @param {string} editAvailabilityGroup
   * @returns {AvailabilityGroupDelete}
   */
  setEditAvailabilityGroup(editAvailabilityGroup) {
    this.editAvailabilityGroup = editAvailabilityGroup;
    return this;
  }

  /**
   * Set AvailabilityGroup_Name.
   * @param {string} availabilityGroupName
   * @returns {AvailabilityGroupDelete}
   */
  setAvailabilityGroupName(availabilityGroupName) {
    this.availabilityGroupName = availabilityGroupName;
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

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.AvailabilityGroupDelete(this, httpResponse, data);
  }
}

/** 
 * Handles API Request AvailabilityGroup_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/availabilitygroup_insert
 */
class AvailabilityGroupInsert extends Request {
  /**
   * AvailabilityGroupInsert Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'AvailabilityGroup_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.availabilityGroupName = null;
    this.availabilityGroupTaxExempt = null;
  }

  /**
   * Get AvailabilityGroup_Name.
   * @returns {string}
   */
  getAvailabilityGroupName() {
    return this.availabilityGroupName;
  }

  /**
   * Get AvailabilityGroup_Tax_Exempt.
   * @returns {boolean}
   */
  getAvailabilityGroupTaxExempt() {
    return this.availabilityGroupTaxExempt;
  }

  /**
   * Set AvailabilityGroup_Name.
   * @param {string} availabilityGroupName
   * @returns {AvailabilityGroupInsert}
   */
  setAvailabilityGroupName(availabilityGroupName) {
    this.availabilityGroupName = availabilityGroupName;
    return this;
  }

  /**
   * Set AvailabilityGroup_Tax_Exempt.
   * @param {boolean} availabilityGroupTaxExempt
   * @returns {AvailabilityGroupInsert}
   */
  setAvailabilityGroupTaxExempt(availabilityGroupTaxExempt) {
    this.availabilityGroupTaxExempt = availabilityGroupTaxExempt;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['AvailabilityGroup_Name'] = this.availabilityGroupName;

    if (!util.isNullOrUndefined(this.availabilityGroupTaxExempt)) {
      data['AvailabilityGroup_Tax_Exempt'] = this.availabilityGroupTaxExempt;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.AvailabilityGroupInsert(this, httpResponse, data);
  }
}

/** 
 * Handles API Request AvailabilityGroup_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/availabilitygroup_update
 */
class AvailabilityGroupUpdate extends Request {
  /**
   * AvailabilityGroupUpdate Constructor.
   * @param {?BaseClient} client
   * @param {?AvailabilityGroup} availabilityGroup
   */
  constructor(client, availabilityGroup = null) {
    super(client);
    this.function = 'AvailabilityGroup_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.availabilityGroupId = null;
    this.editAvailabilityGroup = null;
    this.availabilityGroupName = null;
    this.availabilityGroupTaxExempt = null;

    if (util.isInstanceOf(availabilityGroup, models.AvailabilityGroup)) {
      if (availabilityGroup.getId()) {
        this.setAvailabilityGroupId(availabilityGroup.getId());
      }

      this.setAvailabilityGroupTaxExempt(availabilityGroup.getTaxExempt());
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
   * Get AvailabilityGroup_Tax_Exempt.
   * @returns {boolean}
   */
  getAvailabilityGroupTaxExempt() {
    return this.availabilityGroupTaxExempt;
  }

  /**
   * Set AvailabilityGroup_ID.
   * @param {number} availabilityGroupId
   * @returns {AvailabilityGroupUpdate}
   */
  setAvailabilityGroupId(availabilityGroupId) {
    this.availabilityGroupId = availabilityGroupId;
    return this;
  }

  /**
   * Set Edit_AvailabilityGroup.
   * @param {string} editAvailabilityGroup
   * @returns {AvailabilityGroupUpdate}
   */
  setEditAvailabilityGroup(editAvailabilityGroup) {
    this.editAvailabilityGroup = editAvailabilityGroup;
    return this;
  }

  /**
   * Set AvailabilityGroup_Name.
   * @param {string} availabilityGroupName
   * @returns {AvailabilityGroupUpdate}
   */
  setAvailabilityGroupName(availabilityGroupName) {
    this.availabilityGroupName = availabilityGroupName;
    return this;
  }

  /**
   * Set AvailabilityGroup_Tax_Exempt.
   * @param {boolean} availabilityGroupTaxExempt
   * @returns {AvailabilityGroupUpdate}
   */
  setAvailabilityGroupTaxExempt(availabilityGroupTaxExempt) {
    this.availabilityGroupTaxExempt = availabilityGroupTaxExempt;
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
    }

    data['AvailabilityGroup_Name'] = this.availabilityGroupName;

    if (!util.isNullOrUndefined(this.availabilityGroupTaxExempt)) {
      data['AvailabilityGroup_Tax_Exempt'] = this.availabilityGroupTaxExempt;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.AvailabilityGroupUpdate(this, httpResponse, data);
  }
}

/** 
 * Handles API Request AvailabilityGroupCategory_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/availabilitygroupcategory_update_assigned
 */
class AvailabilityGroupCategoryUpdateAssigned extends Request {
  /**
   * AvailabilityGroupCategoryUpdateAssigned Constructor.
   * @param {?BaseClient} client
   * @param {?Category} category
   */
  constructor(client, category = null) {
    super(client);
    this.function = 'AvailabilityGroupCategory_Update_Assigned';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.categoryId = null;
    this.editCategory = null;
    this.categoryCode = null;
    this.availabilityGroupId = null;
    this.editAvailabilityGroup = null;
    this.availabilityGroupName = null;
    this.assigned = null;

    if (util.isInstanceOf(category, models.Category)) {
      if (category.getId()) {
        this.setCategoryId(category.getId());
      }

      this.setCategoryCode(category.getCode());
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
   * Get Assigned.
   * @returns {boolean}
   */
  getAssigned() {
    return this.assigned;
  }

  /**
   * Set Category_ID.
   * @param {number} categoryId
   * @returns {AvailabilityGroupCategoryUpdateAssigned}
   */
  setCategoryId(categoryId) {
    this.categoryId = categoryId;
    return this;
  }

  /**
   * Set Edit_Category.
   * @param {string} editCategory
   * @returns {AvailabilityGroupCategoryUpdateAssigned}
   */
  setEditCategory(editCategory) {
    this.editCategory = editCategory;
    return this;
  }

  /**
   * Set Category_Code.
   * @param {string} categoryCode
   * @returns {AvailabilityGroupCategoryUpdateAssigned}
   */
  setCategoryCode(categoryCode) {
    this.categoryCode = categoryCode;
    return this;
  }

  /**
   * Set AvailabilityGroup_ID.
   * @param {number} availabilityGroupId
   * @returns {AvailabilityGroupCategoryUpdateAssigned}
   */
  setAvailabilityGroupId(availabilityGroupId) {
    this.availabilityGroupId = availabilityGroupId;
    return this;
  }

  /**
   * Set Edit_AvailabilityGroup.
   * @param {string} editAvailabilityGroup
   * @returns {AvailabilityGroupCategoryUpdateAssigned}
   */
  setEditAvailabilityGroup(editAvailabilityGroup) {
    this.editAvailabilityGroup = editAvailabilityGroup;
    return this;
  }

  /**
   * Set AvailabilityGroup_Name.
   * @param {string} availabilityGroupName
   * @returns {AvailabilityGroupCategoryUpdateAssigned}
   */
  setAvailabilityGroupName(availabilityGroupName) {
    this.availabilityGroupName = availabilityGroupName;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {AvailabilityGroupCategoryUpdateAssigned}
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

    if (!util.isNullOrUndefined(this.categoryId)) {
      data['Category_ID'] = this.categoryId;
    } else if (!util.isNullOrUndefined(this.editCategory)) {
      data['Edit_Category'] = this.editCategory;
    } else if (!util.isNullOrUndefined(this.categoryCode)) {
      data['Category_Code'] = this.categoryCode;
    }

    data['Category_Code'] = this.categoryCode;

    data['AvailabilityGroup_Name'] = this.availabilityGroupName;

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
  createResponse(httpResponse, data) {
    return new responses.AvailabilityGroupCategoryUpdateAssigned(this, httpResponse, data);
  }
}

/** 
 * Handles API Request AvailabilityGroupShippingMethodList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/availabilitygroupshippingmethodlist_load_query
 */
class AvailabilityGroupShippingMethodListLoadQuery extends ListQueryRequest {
  /**
   * AvailabilityGroupShippingMethodListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?AvailabilityGroup} availabilityGroup
   */
  constructor(client, availabilityGroup = null) {
    super(client);
    this.function = 'AvailabilityGroupShippingMethodList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.availableSearchFields = [
      'method_name'
    ];

    this.availabilityGroupId = null;
    this.editAvailabilityGroup = null;
    this.availabilityGroupName = null;
    this.assigned = null;
    this.unassigned = null;

    if (util.isInstanceOf(availabilityGroup, models.AvailabilityGroup)) {
      if (availabilityGroup.getId()) {
        this.setAvailabilityGroupId(availabilityGroup.getId());
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
   * Set AvailabilityGroup_ID.
   * @param {number} availabilityGroupId
   * @returns {AvailabilityGroupShippingMethodListLoadQuery}
   */
  setAvailabilityGroupId(availabilityGroupId) {
    this.availabilityGroupId = availabilityGroupId;
    return this;
  }

  /**
   * Set Edit_AvailabilityGroup.
   * @param {string} editAvailabilityGroup
   * @returns {AvailabilityGroupShippingMethodListLoadQuery}
   */
  setEditAvailabilityGroup(editAvailabilityGroup) {
    this.editAvailabilityGroup = editAvailabilityGroup;
    return this;
  }

  /**
   * Set AvailabilityGroup_Name.
   * @param {string} availabilityGroupName
   * @returns {AvailabilityGroupShippingMethodListLoadQuery}
   */
  setAvailabilityGroupName(availabilityGroupName) {
    this.availabilityGroupName = availabilityGroupName;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {AvailabilityGroupShippingMethodListLoadQuery}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Set Unassigned.
   * @param {boolean} unassigned
   * @returns {AvailabilityGroupShippingMethodListLoadQuery}
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

    if (!util.isNullOrUndefined(this.availabilityGroupId)) {
      data['AvailabilityGroup_ID'] = this.availabilityGroupId;
    } else if (!util.isNullOrUndefined(this.editAvailabilityGroup)) {
      data['Edit_AvailabilityGroup'] = this.editAvailabilityGroup;
    } else if (!util.isNullOrUndefined(this.availabilityGroupName)) {
      data['AvailabilityGroup_Name'] = this.availabilityGroupName;
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
  createResponse(httpResponse, data) {
    return new responses.AvailabilityGroupShippingMethodListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request PriceGroupBusinessAccount_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/pricegroupbusinessaccount_update_assigned
 */
class PriceGroupBusinessAccountUpdateAssigned extends Request {
  /**
   * PriceGroupBusinessAccountUpdateAssigned Constructor.
   * @param {?BaseClient} client
   * @param {?PriceGroup} priceGroup
   */
  constructor(client, priceGroup = null) {
    super(client);
    this.function = 'PriceGroupBusinessAccount_Update_Assigned';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.businessAccountId = null;
    this.editBusinessAccount = null;
    this.businessAccountTitle = null;
    this.priceGroupId = null;
    this.editPriceGroup = null;
    this.priceGroupName = null;
    this.assigned = null;

    if (util.isInstanceOf(priceGroup, models.PriceGroup)) {
      if (priceGroup.getId()) {
        this.setPriceGroupId(priceGroup.getId());
      }
    }
  }

  /**
   * Get BusinessAccount_ID.
   * @returns {number}
   */
  getBusinessAccountId() {
    return this.businessAccountId;
  }

  /**
   * Get Edit_BusinessAccount.
   * @returns {string}
   */
  getEditBusinessAccount() {
    return this.editBusinessAccount;
  }

  /**
   * Get BusinessAccount_Title.
   * @returns {string}
   */
  getBusinessAccountTitle() {
    return this.businessAccountTitle;
  }

  /**
   * Get PriceGroup_ID.
   * @returns {number}
   */
  getPriceGroupId() {
    return this.priceGroupId;
  }

  /**
   * Get Edit_PriceGroup.
   * @returns {string}
   */
  getEditPriceGroup() {
    return this.editPriceGroup;
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
   * Set BusinessAccount_ID.
   * @param {number} businessAccountId
   * @returns {PriceGroupBusinessAccountUpdateAssigned}
   */
  setBusinessAccountId(businessAccountId) {
    this.businessAccountId = businessAccountId;
    return this;
  }

  /**
   * Set Edit_BusinessAccount.
   * @param {string} editBusinessAccount
   * @returns {PriceGroupBusinessAccountUpdateAssigned}
   */
  setEditBusinessAccount(editBusinessAccount) {
    this.editBusinessAccount = editBusinessAccount;
    return this;
  }

  /**
   * Set BusinessAccount_Title.
   * @param {string} businessAccountTitle
   * @returns {PriceGroupBusinessAccountUpdateAssigned}
   */
  setBusinessAccountTitle(businessAccountTitle) {
    this.businessAccountTitle = businessAccountTitle;
    return this;
  }

  /**
   * Set PriceGroup_ID.
   * @param {number} priceGroupId
   * @returns {PriceGroupBusinessAccountUpdateAssigned}
   */
  setPriceGroupId(priceGroupId) {
    this.priceGroupId = priceGroupId;
    return this;
  }

  /**
   * Set Edit_PriceGroup.
   * @param {string} editPriceGroup
   * @returns {PriceGroupBusinessAccountUpdateAssigned}
   */
  setEditPriceGroup(editPriceGroup) {
    this.editPriceGroup = editPriceGroup;
    return this;
  }

  /**
   * Set PriceGroup_Name.
   * @param {string} priceGroupName
   * @returns {PriceGroupBusinessAccountUpdateAssigned}
   */
  setPriceGroupName(priceGroupName) {
    this.priceGroupName = priceGroupName;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {PriceGroupBusinessAccountUpdateAssigned}
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
    } else if (!util.isNullOrUndefined(this.editPriceGroup)) {
      data['Edit_PriceGroup'] = this.editPriceGroup;
    } else if (!util.isNullOrUndefined(this.priceGroupName)) {
      data['PriceGroup_Name'] = this.priceGroupName;
    }

    if (!util.isNullOrUndefined(this.businessAccountId)) {
      data['BusinessAccount_ID'] = this.businessAccountId;
    } else if (!util.isNullOrUndefined(this.editBusinessAccount)) {
      data['Edit_BusinessAccount'] = this.editBusinessAccount;
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
  createResponse(httpResponse, data) {
    return new responses.PriceGroupBusinessAccountUpdateAssigned(this, httpResponse, data);
  }
}

/** 
 * Handles API Request PriceGroupCategory_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/pricegroupcategory_update_assigned
 */
class PriceGroupCategoryUpdateAssigned extends Request {
  /**
   * PriceGroupCategoryUpdateAssigned Constructor.
   * @param {?BaseClient} client
   * @param {?PriceGroup} priceGroup
   */
  constructor(client, priceGroup = null) {
    super(client);
    this.function = 'PriceGroupCategory_Update_Assigned';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.categoryId = null;
    this.editCategory = null;
    this.categoryCode = null;
    this.priceGroupId = null;
    this.editPriceGroup = null;
    this.priceGroupName = null;
    this.assigned = null;

    if (util.isInstanceOf(priceGroup, models.PriceGroup)) {
      if (priceGroup.getId()) {
        this.setPriceGroupId(priceGroup.getId());
      } else if (priceGroup.getName()) {
        this.setEditPriceGroup(priceGroup.getName());
      } else if (priceGroup.getName()) {
        this.setPriceGroupName(priceGroup.getName());
      }

      this.setPriceGroupName(priceGroup.getName());
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
   * Get PriceGroup_ID.
   * @returns {number}
   */
  getPriceGroupId() {
    return this.priceGroupId;
  }

  /**
   * Get Edit_PriceGroup.
   * @returns {string}
   */
  getEditPriceGroup() {
    return this.editPriceGroup;
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
   * Set Category_ID.
   * @param {number} categoryId
   * @returns {PriceGroupCategoryUpdateAssigned}
   */
  setCategoryId(categoryId) {
    this.categoryId = categoryId;
    return this;
  }

  /**
   * Set Edit_Category.
   * @param {string} editCategory
   * @returns {PriceGroupCategoryUpdateAssigned}
   */
  setEditCategory(editCategory) {
    this.editCategory = editCategory;
    return this;
  }

  /**
   * Set Category_Code.
   * @param {string} categoryCode
   * @returns {PriceGroupCategoryUpdateAssigned}
   */
  setCategoryCode(categoryCode) {
    this.categoryCode = categoryCode;
    return this;
  }

  /**
   * Set PriceGroup_ID.
   * @param {number} priceGroupId
   * @returns {PriceGroupCategoryUpdateAssigned}
   */
  setPriceGroupId(priceGroupId) {
    this.priceGroupId = priceGroupId;
    return this;
  }

  /**
   * Set Edit_PriceGroup.
   * @param {string} editPriceGroup
   * @returns {PriceGroupCategoryUpdateAssigned}
   */
  setEditPriceGroup(editPriceGroup) {
    this.editPriceGroup = editPriceGroup;
    return this;
  }

  /**
   * Set PriceGroup_Name.
   * @param {string} priceGroupName
   * @returns {PriceGroupCategoryUpdateAssigned}
   */
  setPriceGroupName(priceGroupName) {
    this.priceGroupName = priceGroupName;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {PriceGroupCategoryUpdateAssigned}
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
    } else if (!util.isNullOrUndefined(this.editPriceGroup)) {
      data['Edit_PriceGroup'] = this.editPriceGroup;
    } else if (!util.isNullOrUndefined(this.priceGroupName)) {
      data['PriceGroup_Name'] = this.priceGroupName;
    }

    if (!util.isNullOrUndefined(this.categoryId)) {
      data['Category_ID'] = this.categoryId;
    } else if (!util.isNullOrUndefined(this.editCategory)) {
      data['Edit_Category'] = this.editCategory;
    } else if (!util.isNullOrUndefined(this.categoryCode)) {
      data['Category_Code'] = this.categoryCode;
    }

    data['PriceGroup_Name'] = this.priceGroupName;

    data['Assigned'] = this.assigned;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.PriceGroupCategoryUpdateAssigned(this, httpResponse, data);
  }
}

/** 
 * Handles API Request PriceGroupExcludedCategory_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/pricegroupexcludedcategory_update_assigned
 */
class PriceGroupExcludedCategoryUpdateAssigned extends Request {
  /**
   * PriceGroupExcludedCategoryUpdateAssigned Constructor.
   * @param {?BaseClient} client
   * @param {?PriceGroup} priceGroup
   */
  constructor(client, priceGroup = null) {
    super(client);
    this.function = 'PriceGroupExcludedCategory_Update_Assigned';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.categoryId = null;
    this.editCategory = null;
    this.categoryCode = null;
    this.priceGroupId = null;
    this.editPriceGroup = null;
    this.priceGroupName = null;
    this.assigned = null;

    if (util.isInstanceOf(priceGroup, models.PriceGroup)) {
      if (priceGroup.getId()) {
        this.setCategoryId(priceGroup.getId());
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
   * Get PriceGroup_ID.
   * @returns {number}
   */
  getPriceGroupId() {
    return this.priceGroupId;
  }

  /**
   * Get Edit_PriceGroup.
   * @returns {string}
   */
  getEditPriceGroup() {
    return this.editPriceGroup;
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
   * Set Category_ID.
   * @param {number} categoryId
   * @returns {PriceGroupExcludedCategoryUpdateAssigned}
   */
  setCategoryId(categoryId) {
    this.categoryId = categoryId;
    return this;
  }

  /**
   * Set Edit_Category.
   * @param {string} editCategory
   * @returns {PriceGroupExcludedCategoryUpdateAssigned}
   */
  setEditCategory(editCategory) {
    this.editCategory = editCategory;
    return this;
  }

  /**
   * Set Category_Code.
   * @param {string} categoryCode
   * @returns {PriceGroupExcludedCategoryUpdateAssigned}
   */
  setCategoryCode(categoryCode) {
    this.categoryCode = categoryCode;
    return this;
  }

  /**
   * Set PriceGroup_ID.
   * @param {number} priceGroupId
   * @returns {PriceGroupExcludedCategoryUpdateAssigned}
   */
  setPriceGroupId(priceGroupId) {
    this.priceGroupId = priceGroupId;
    return this;
  }

  /**
   * Set Edit_PriceGroup.
   * @param {string} editPriceGroup
   * @returns {PriceGroupExcludedCategoryUpdateAssigned}
   */
  setEditPriceGroup(editPriceGroup) {
    this.editPriceGroup = editPriceGroup;
    return this;
  }

  /**
   * Set PriceGroup_Name.
   * @param {string} priceGroupName
   * @returns {PriceGroupExcludedCategoryUpdateAssigned}
   */
  setPriceGroupName(priceGroupName) {
    this.priceGroupName = priceGroupName;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {PriceGroupExcludedCategoryUpdateAssigned}
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
    } else if (!util.isNullOrUndefined(this.editPriceGroup)) {
      data['Edit_PriceGroup'] = this.editPriceGroup;
    } else if (!util.isNullOrUndefined(this.priceGroupName)) {
      data['PriceGroup_Name'] = this.priceGroupName;
    }

    if (!util.isNullOrUndefined(this.categoryId)) {
      data['Category_ID'] = this.categoryId;
    } else if (!util.isNullOrUndefined(this.editCategory)) {
      data['Edit_Category'] = this.editCategory;
    } else if (!util.isNullOrUndefined(this.categoryCode)) {
      data['Category_Code'] = this.categoryCode;
    }

    data['PriceGroup_Name'] = this.priceGroupName;

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
  createResponse(httpResponse, data) {
    return new responses.PriceGroupExcludedCategoryUpdateAssigned(this, httpResponse, data);
  }
}

/** 
 * Handles API Request PriceGroupExcludedProduct_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/pricegroupexcludedproduct_update_assigned
 */
class PriceGroupExcludedProductUpdateAssigned extends Request {
  /**
   * PriceGroupExcludedProductUpdateAssigned Constructor.
   * @param {?BaseClient} client
   * @param {?PriceGroup} priceGroup
   */
  constructor(client, priceGroup = null) {
    super(client);
    this.function = 'PriceGroupExcludedProduct_Update_Assigned';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.priceGroupId = null;
    this.editPriceGroup = null;
    this.priceGroupName = null;
    this.productId = null;
    this.editProduct = null;
    this.productCode = null;
    this.assigned = null;
    this.unassigned = null;

    if (util.isInstanceOf(priceGroup, models.PriceGroup)) {
      if (priceGroup.getId()) {
        this.setPriceGroupId(priceGroup.getId());
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
   * Get Edit_PriceGroup.
   * @returns {string}
   */
  getEditPriceGroup() {
    return this.editPriceGroup;
  }

  /**
   * Get PriceGroup_Name.
   * @returns {string}
   */
  getPriceGroupName() {
    return this.priceGroupName;
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
   * @returns {PriceGroupExcludedProductUpdateAssigned}
   */
  setPriceGroupId(priceGroupId) {
    this.priceGroupId = priceGroupId;
    return this;
  }

  /**
   * Set Edit_PriceGroup.
   * @param {string} editPriceGroup
   * @returns {PriceGroupExcludedProductUpdateAssigned}
   */
  setEditPriceGroup(editPriceGroup) {
    this.editPriceGroup = editPriceGroup;
    return this;
  }

  /**
   * Set PriceGroup_Name.
   * @param {string} priceGroupName
   * @returns {PriceGroupExcludedProductUpdateAssigned}
   */
  setPriceGroupName(priceGroupName) {
    this.priceGroupName = priceGroupName;
    return this;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {PriceGroupExcludedProductUpdateAssigned}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {PriceGroupExcludedProductUpdateAssigned}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {PriceGroupExcludedProductUpdateAssigned}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {PriceGroupExcludedProductUpdateAssigned}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Set Unassigned.
   * @param {boolean} unassigned
   * @returns {PriceGroupExcludedProductUpdateAssigned}
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
    } else if (!util.isNullOrUndefined(this.editPriceGroup)) {
      data['Edit_PriceGroup'] = this.editPriceGroup;
    } else if (!util.isNullOrUndefined(this.priceGroupName)) {
      data['PriceGroup_Name'] = this.priceGroupName;
    }

    if (!util.isNullOrUndefined(this.productId)) {
      data['Product_ID'] = this.productId;
    } else if (!util.isNullOrUndefined(this.editProduct)) {
      data['Edit_Product'] = this.editProduct;
    } else if (!util.isNullOrUndefined(this.productCode)) {
      data['Product_Code'] = this.productCode;
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
  createResponse(httpResponse, data) {
    return new responses.PriceGroupExcludedProductUpdateAssigned(this, httpResponse, data);
  }
}

/** 
 * Handles API Request PriceGroupQualifyingProduct_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/pricegroupqualifyingproduct_update_assigned
 */
class PriceGroupQualifyingProductUpdateAssigned extends Request {
  /**
   * PriceGroupQualifyingProductUpdateAssigned Constructor.
   * @param {?BaseClient} client
   * @param {?PriceGroup} priceGroup
   */
  constructor(client, priceGroup = null) {
    super(client);
    this.function = 'PriceGroupQualifyingProduct_Update_Assigned';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productId = null;
    this.editProduct = null;
    this.productCode = null;
    this.priceGroupId = null;
    this.editPriceGroup = null;
    this.priceGroupName = null;
    this.assigned = null;

    if (util.isInstanceOf(priceGroup, models.PriceGroup)) {
      if (priceGroup.getId()) {
        this.setProductId(priceGroup.getId());
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
   * Get PriceGroup_ID.
   * @returns {number}
   */
  getPriceGroupId() {
    return this.priceGroupId;
  }

  /**
   * Get Edit_PriceGroup.
   * @returns {string}
   */
  getEditPriceGroup() {
    return this.editPriceGroup;
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
   * Set Product_ID.
   * @param {number} productId
   * @returns {PriceGroupQualifyingProductUpdateAssigned}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {PriceGroupQualifyingProductUpdateAssigned}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {PriceGroupQualifyingProductUpdateAssigned}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set PriceGroup_ID.
   * @param {number} priceGroupId
   * @returns {PriceGroupQualifyingProductUpdateAssigned}
   */
  setPriceGroupId(priceGroupId) {
    this.priceGroupId = priceGroupId;
    return this;
  }

  /**
   * Set Edit_PriceGroup.
   * @param {string} editPriceGroup
   * @returns {PriceGroupQualifyingProductUpdateAssigned}
   */
  setEditPriceGroup(editPriceGroup) {
    this.editPriceGroup = editPriceGroup;
    return this;
  }

  /**
   * Set PriceGroup_Name.
   * @param {string} priceGroupName
   * @returns {PriceGroupQualifyingProductUpdateAssigned}
   */
  setPriceGroupName(priceGroupName) {
    this.priceGroupName = priceGroupName;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {PriceGroupQualifyingProductUpdateAssigned}
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
    } else if (!util.isNullOrUndefined(this.editPriceGroup)) {
      data['Edit_PriceGroup'] = this.editPriceGroup;
    } else if (!util.isNullOrUndefined(this.priceGroupName)) {
      data['PriceGroup_Name'] = this.priceGroupName;
    }

    if (!util.isNullOrUndefined(this.productId)) {
      data['Product_ID'] = this.productId;
    } else if (!util.isNullOrUndefined(this.editProduct)) {
      data['Edit_Product'] = this.editProduct;
    } else if (!util.isNullOrUndefined(this.productCode)) {
      data['Product_Code'] = this.productCode;
    }

    data['PriceGroup_Name'] = this.priceGroupName;

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
  createResponse(httpResponse, data) {
    return new responses.PriceGroupQualifyingProductUpdateAssigned(this, httpResponse, data);
  }
}

/** 
 * Handles API Request PriceGroup_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/pricegroup_delete
 */
class PriceGroupDelete extends Request {
  /**
   * PriceGroupDelete Constructor.
   * @param {?BaseClient} client
   * @param {?PriceGroup} priceGroup
   */
  constructor(client, priceGroup = null) {
    super(client);
    this.function = 'PriceGroup_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.priceGroupId = null;
    this.editPriceGroup = null;
    this.priceGroupName = null;

    if (util.isInstanceOf(priceGroup, models.PriceGroup)) {
      if (priceGroup.getId()) {
        this.setPriceGroupId(priceGroup.getId());
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
   * Get Edit_PriceGroup.
   * @returns {string}
   */
  getEditPriceGroup() {
    return this.editPriceGroup;
  }

  /**
   * Get PriceGroup_Name.
   * @returns {string}
   */
  getPriceGroupName() {
    return this.priceGroupName;
  }

  /**
   * Set PriceGroup_ID.
   * @param {number} priceGroupId
   * @returns {PriceGroupDelete}
   */
  setPriceGroupId(priceGroupId) {
    this.priceGroupId = priceGroupId;
    return this;
  }

  /**
   * Set Edit_PriceGroup.
   * @param {string} editPriceGroup
   * @returns {PriceGroupDelete}
   */
  setEditPriceGroup(editPriceGroup) {
    this.editPriceGroup = editPriceGroup;
    return this;
  }

  /**
   * Set PriceGroup_Name.
   * @param {string} priceGroupName
   * @returns {PriceGroupDelete}
   */
  setPriceGroupName(priceGroupName) {
    this.priceGroupName = priceGroupName;
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
    } else if (!util.isNullOrUndefined(this.editPriceGroup)) {
      data['Edit_PriceGroup'] = this.editPriceGroup;
    } else if (!util.isNullOrUndefined(this.priceGroupName)) {
      data['PriceGroup_Name'] = this.priceGroupName;
    }

    data['PriceGroup_Name'] = this.priceGroupName;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.PriceGroupDelete(this, httpResponse, data);
  }
}

/** 
 * Handles API Request PriceGroup_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/pricegroup_insert
 */
class PriceGroupInsert extends Request {
  /**
   * PriceGroupInsert Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'PriceGroup_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.name = null;
    this.customerScope = null;
    this.rate = null;
    this.discount = null;
    this.markup = null;
    this.moduleId = null;
    this.exclusion = null;
    this.description = null;
    this.display = null;
    this.dateTimeStart = null;
    this.dateTimeEnd = null;
    this.qualifyingMinSubtotal = null;
    this.qualifyingMaxSubtotal = null;
    this.qualifyingMinQuantity = null;
    this.qualifyingMaxQuantity = null;
    this.qualifyingMinWeight = null;
    this.qualifyingMaxWeight = null;
    this.basketMinSubtotal = null;
    this.basketMaxSubtotal = null;
    this.basketMinQuantity = null;
    this.basketMaxQuantity = null;
    this.basketMinWeight = null;
    this.basketMaxWeight = null;
    this.priority = null;
    this.moduleFields = {};
  }

  /**
   * Get Name.
   * @returns {string}
   */
  getName() {
    return this.name;
  }

  /**
   * Get CustomerScope.
   * @returns {string}
   */
  getCustomerScope() {
    return this.customerScope;
  }

  /**
   * Get Rate.
   * @returns {string}
   */
  getRate() {
    return this.rate;
  }

  /**
   * Get Discount.
   * @returns {number}
   */
  getDiscount() {
    return this.discount;
  }

  /**
   * Get Markup.
   * @returns {number}
   */
  getMarkup() {
    return this.markup;
  }

  /**
   * Get Module_ID.
   * @returns {number}
   */
  getModuleId() {
    return this.moduleId;
  }

  /**
   * Get Exclusion.
   * @returns {boolean}
   */
  getExclusion() {
    return this.exclusion;
  }

  /**
   * Get Description.
   * @returns {string}
   */
  getDescription() {
    return this.description;
  }

  /**
   * Get Display.
   * @returns {boolean}
   */
  getDisplay() {
    return this.display;
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
   * Get Qualifying_Min_Subtotal.
   * @returns {number}
   */
  getQualifyingMinSubtotal() {
    return this.qualifyingMinSubtotal;
  }

  /**
   * Get Qualifying_Max_Subtotal.
   * @returns {number}
   */
  getQualifyingMaxSubtotal() {
    return this.qualifyingMaxSubtotal;
  }

  /**
   * Get Qualifying_Min_Quantity.
   * @returns {number}
   */
  getQualifyingMinQuantity() {
    return this.qualifyingMinQuantity;
  }

  /**
   * Get Qualifying_Max_Quantity.
   * @returns {number}
   */
  getQualifyingMaxQuantity() {
    return this.qualifyingMaxQuantity;
  }

  /**
   * Get Qualifying_Min_Weight.
   * @returns {number}
   */
  getQualifyingMinWeight() {
    return this.qualifyingMinWeight;
  }

  /**
   * Get Qualifying_Max_Weight.
   * @returns {number}
   */
  getQualifyingMaxWeight() {
    return this.qualifyingMaxWeight;
  }

  /**
   * Get Basket_Min_Subtotal.
   * @returns {number}
   */
  getBasketMinSubtotal() {
    return this.basketMinSubtotal;
  }

  /**
   * Get Basket_Max_Subtotal.
   * @returns {number}
   */
  getBasketMaxSubtotal() {
    return this.basketMaxSubtotal;
  }

  /**
   * Get Basket_Min_Quantity.
   * @returns {number}
   */
  getBasketMinQuantity() {
    return this.basketMinQuantity;
  }

  /**
   * Get Basket_Max_Quantity.
   * @returns {number}
   */
  getBasketMaxQuantity() {
    return this.basketMaxQuantity;
  }

  /**
   * Get Basket_Min_Weight.
   * @returns {number}
   */
  getBasketMinWeight() {
    return this.basketMinWeight;
  }

  /**
   * Get Basket_Max_Weight.
   * @returns {number}
   */
  getBasketMaxWeight() {
    return this.basketMaxWeight;
  }

  /**
   * Get Priority.
   * @returns {number}
   */
  getPriority() {
    return this.priority;
  }

  /**
   * Get Module_Fields.
   * @returns {Object}
   */
  getModuleFields() {
    return this.moduleFields;
  }

  /**
   * Set Name.
   * @param {string} name
   * @returns {PriceGroupInsert}
   */
  setName(name) {
    this.name = name;
    return this;
  }

  /**
   * Set CustomerScope.
   * @param {string} customerScope
   * @returns {PriceGroupInsert}
   */
  setCustomerScope(customerScope) {
    this.customerScope = customerScope;
    return this;
  }

  /**
   * Set Rate.
   * @param {string} rate
   * @returns {PriceGroupInsert}
   */
  setRate(rate) {
    this.rate = rate;
    return this;
  }

  /**
   * Set Discount.
   * @param {number} discount
   * @returns {PriceGroupInsert}
   */
  setDiscount(discount) {
    this.discount = discount;
    return this;
  }

  /**
   * Set Markup.
   * @param {number} markup
   * @returns {PriceGroupInsert}
   */
  setMarkup(markup) {
    this.markup = markup;
    return this;
  }

  /**
   * Set Module_ID.
   * @param {number} moduleId
   * @returns {PriceGroupInsert}
   */
  setModuleId(moduleId) {
    this.moduleId = moduleId;
    return this;
  }

  /**
   * Set Exclusion.
   * @param {boolean} exclusion
   * @returns {PriceGroupInsert}
   */
  setExclusion(exclusion) {
    this.exclusion = exclusion;
    return this;
  }

  /**
   * Set Description.
   * @param {string} description
   * @returns {PriceGroupInsert}
   */
  setDescription(description) {
    this.description = description;
    return this;
  }

  /**
   * Set Display.
   * @param {boolean} display
   * @returns {PriceGroupInsert}
   */
  setDisplay(display) {
    this.display = display;
    return this;
  }

  /**
   * Set DateTime_Start.
   * @param {number|Date} dateTimeStart
   * @returns {PriceGroupInsert}
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
   * @returns {PriceGroupInsert}
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
   * Set Qualifying_Min_Subtotal.
   * @param {number} qualifyingMinSubtotal
   * @returns {PriceGroupInsert}
   */
  setQualifyingMinSubtotal(qualifyingMinSubtotal) {
    this.qualifyingMinSubtotal = qualifyingMinSubtotal;
    return this;
  }

  /**
   * Set Qualifying_Max_Subtotal.
   * @param {number} qualifyingMaxSubtotal
   * @returns {PriceGroupInsert}
   */
  setQualifyingMaxSubtotal(qualifyingMaxSubtotal) {
    this.qualifyingMaxSubtotal = qualifyingMaxSubtotal;
    return this;
  }

  /**
   * Set Qualifying_Min_Quantity.
   * @param {number} qualifyingMinQuantity
   * @returns {PriceGroupInsert}
   */
  setQualifyingMinQuantity(qualifyingMinQuantity) {
    this.qualifyingMinQuantity = qualifyingMinQuantity;
    return this;
  }

  /**
   * Set Qualifying_Max_Quantity.
   * @param {number} qualifyingMaxQuantity
   * @returns {PriceGroupInsert}
   */
  setQualifyingMaxQuantity(qualifyingMaxQuantity) {
    this.qualifyingMaxQuantity = qualifyingMaxQuantity;
    return this;
  }

  /**
   * Set Qualifying_Min_Weight.
   * @param {number} qualifyingMinWeight
   * @returns {PriceGroupInsert}
   */
  setQualifyingMinWeight(qualifyingMinWeight) {
    this.qualifyingMinWeight = qualifyingMinWeight;
    return this;
  }

  /**
   * Set Qualifying_Max_Weight.
   * @param {number} qualifyingMaxWeight
   * @returns {PriceGroupInsert}
   */
  setQualifyingMaxWeight(qualifyingMaxWeight) {
    this.qualifyingMaxWeight = qualifyingMaxWeight;
    return this;
  }

  /**
   * Set Basket_Min_Subtotal.
   * @param {number} basketMinSubtotal
   * @returns {PriceGroupInsert}
   */
  setBasketMinSubtotal(basketMinSubtotal) {
    this.basketMinSubtotal = basketMinSubtotal;
    return this;
  }

  /**
   * Set Basket_Max_Subtotal.
   * @param {number} basketMaxSubtotal
   * @returns {PriceGroupInsert}
   */
  setBasketMaxSubtotal(basketMaxSubtotal) {
    this.basketMaxSubtotal = basketMaxSubtotal;
    return this;
  }

  /**
   * Set Basket_Min_Quantity.
   * @param {number} basketMinQuantity
   * @returns {PriceGroupInsert}
   */
  setBasketMinQuantity(basketMinQuantity) {
    this.basketMinQuantity = basketMinQuantity;
    return this;
  }

  /**
   * Set Basket_Max_Quantity.
   * @param {number} basketMaxQuantity
   * @returns {PriceGroupInsert}
   */
  setBasketMaxQuantity(basketMaxQuantity) {
    this.basketMaxQuantity = basketMaxQuantity;
    return this;
  }

  /**
   * Set Basket_Min_Weight.
   * @param {number} basketMinWeight
   * @returns {PriceGroupInsert}
   */
  setBasketMinWeight(basketMinWeight) {
    this.basketMinWeight = basketMinWeight;
    return this;
  }

  /**
   * Set Basket_Max_Weight.
   * @param {number} basketMaxWeight
   * @returns {PriceGroupInsert}
   */
  setBasketMaxWeight(basketMaxWeight) {
    this.basketMaxWeight = basketMaxWeight;
    return this;
  }

  /**
   * Set Priority.
   * @param {number} priority
   * @returns {PriceGroupInsert}
   */
  setPriority(priority) {
    this.priority = priority;
    return this;
  }

  /**
   * Set Module_Fields.
   * @param {Object} moduleFields
   * @returns {PriceGroupInsert}
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
   * @returns {PriceGroupInsert}
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

    if (!util.isNullOrUndefined(this.name)) {
      data['Name'] = this.name;
    }

    if (!util.isNullOrUndefined(this.customerScope)) {
      data['CustomerScope'] = this.customerScope;
    }

    if (!util.isNullOrUndefined(this.rate)) {
      data['Rate'] = this.rate;
    }

    if (!util.isNullOrUndefined(this.discount)) {
      data['Discount'] = this.discount;
    }

    if (!util.isNullOrUndefined(this.markup)) {
      data['Markup'] = this.markup;
    }

    if (!util.isNullOrUndefined(this.moduleId)) {
      data['Module_ID'] = this.moduleId;
    }

    if (!util.isNullOrUndefined(this.exclusion)) {
      data['Exclusion'] = this.exclusion;
    }

    if (!util.isNullOrUndefined(this.description)) {
      data['Description'] = this.description;
    }

    if (!util.isNullOrUndefined(this.display)) {
      data['Display'] = this.display;
    }

    if (!util.isNullOrUndefined(this.dateTimeStart)) {
      data['DateTime_Start'] = this.dateTimeStart;
    }

    if (!util.isNullOrUndefined(this.dateTimeEnd)) {
      data['DateTime_End'] = this.dateTimeEnd;
    }

    if (!util.isNullOrUndefined(this.qualifyingMinSubtotal)) {
      data['Qualifying_Min_Subtotal'] = this.qualifyingMinSubtotal;
    }

    if (!util.isNullOrUndefined(this.qualifyingMaxSubtotal)) {
      data['Qualifying_Max_Subtotal'] = this.qualifyingMaxSubtotal;
    }

    if (!util.isNullOrUndefined(this.qualifyingMinQuantity)) {
      data['Qualifying_Min_Quantity'] = this.qualifyingMinQuantity;
    }

    if (!util.isNullOrUndefined(this.qualifyingMaxQuantity)) {
      data['Qualifying_Max_Quantity'] = this.qualifyingMaxQuantity;
    }

    if (!util.isNullOrUndefined(this.qualifyingMinWeight)) {
      data['Qualifying_Min_Weight'] = this.qualifyingMinWeight;
    }

    if (!util.isNullOrUndefined(this.qualifyingMaxWeight)) {
      data['Qualifying_Max_Weight'] = this.qualifyingMaxWeight;
    }

    if (!util.isNullOrUndefined(this.basketMinSubtotal)) {
      data['Basket_Min_Subtotal'] = this.basketMinSubtotal;
    }

    if (!util.isNullOrUndefined(this.basketMaxSubtotal)) {
      data['Basket_Max_Subtotal'] = this.basketMaxSubtotal;
    }

    if (!util.isNullOrUndefined(this.basketMinQuantity)) {
      data['Basket_Min_Quantity'] = this.basketMinQuantity;
    }

    if (!util.isNullOrUndefined(this.basketMaxQuantity)) {
      data['Basket_Max_Quantity'] = this.basketMaxQuantity;
    }

    if (!util.isNullOrUndefined(this.basketMinWeight)) {
      data['Basket_Min_Weight'] = this.basketMinWeight;
    }

    if (!util.isNullOrUndefined(this.basketMaxWeight)) {
      data['Basket_Max_Weight'] = this.basketMaxWeight;
    }

    if (!util.isNullOrUndefined(this.priority)) {
      data['Priority'] = this.priority;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.PriceGroupInsert(this, httpResponse, data);
  }
}

/** 
 * Handles API Request PriceGroup_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/pricegroup_update
 */
class PriceGroupUpdate extends Request {
  /**
   * PriceGroupUpdate Constructor.
   * @param {?BaseClient} client
   * @param {?PriceGroup} priceGroup
   */
  constructor(client, priceGroup = null) {
    super(client);
    this.function = 'PriceGroup_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.priceGroupId = null;
    this.editPriceGroup = null;
    this.priceGroupName = null;
    this.name = null;
    this.customerScope = null;
    this.rate = null;
    this.discount = null;
    this.markup = null;
    this.moduleId = null;
    this.exclusion = null;
    this.description = null;
    this.display = null;
    this.dateTimeStart = null;
    this.dateTimeEnd = null;
    this.qualifyingMinSubtotal = null;
    this.qualifyingMaxSubtotal = null;
    this.qualifyingMinQuantity = null;
    this.qualifyingMaxQuantity = null;
    this.qualifyingMinWeight = null;
    this.qualifyingMaxWeight = null;
    this.basketMinSubtotal = null;
    this.basketMaxSubtotal = null;
    this.basketMinQuantity = null;
    this.basketMaxQuantity = null;
    this.basketMinWeight = null;
    this.basketMaxWeight = null;
    this.priority = null;
    this.exclusions = [];
    this.moduleFields = {};

    if (util.isInstanceOf(priceGroup, models.PriceGroup)) {
      if (priceGroup.getId()) {
        this.setPriceGroupId(priceGroup.getId());
      }

      this.setPriceGroupName(priceGroup.getName());
      this.setName(priceGroup.getName());
      this.setCustomerScope(priceGroup.getCustomerScope());
      this.setRate(priceGroup.getRate());
      this.setDiscount(priceGroup.getDiscount());
      this.setMarkup(priceGroup.getMarkup());
      this.setExclusion(priceGroup.getExclusion());
      this.setDescription(priceGroup.getDescription());
      this.setDisplay(priceGroup.getDisplay());
      this.setDateTimeStart(priceGroup.getDateTimeStart());
      this.setDateTimeEnd(priceGroup.getDateTimeEnd());
      this.setQualifyingMinSubtotal(priceGroup.getMinimumSubtotal());
      this.setQualifyingMaxSubtotal(priceGroup.getMaximumSubtotal());
      this.setQualifyingMinQuantity(priceGroup.getMinimumQuantity());
      this.setQualifyingMaxQuantity(priceGroup.getMaximumQuantity());
      this.setQualifyingMinWeight(priceGroup.getMinimumWeight());
      this.setQualifyingMaxWeight(priceGroup.getMaximumWeight());
      this.setBasketMinSubtotal(priceGroup.getBasketMinimumSubtotal());
      this.setBasketMaxSubtotal(priceGroup.getBasketMaximumSubtotal());
      this.setBasketMinQuantity(priceGroup.getBasketMinimumQuantity());
      this.setBasketMaxQuantity(priceGroup.getBasketMaximumQuantity());
      this.setBasketMinWeight(priceGroup.getBasketMinimumWeight());
      this.setBasketMaxWeight(priceGroup.getBasketMaximumWeight());
      this.setPriority(priceGroup.getPriority());
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
   * Get Edit_PriceGroup.
   * @returns {string}
   */
  getEditPriceGroup() {
    return this.editPriceGroup;
  }

  /**
   * Get PriceGroup_Name.
   * @returns {string}
   */
  getPriceGroupName() {
    return this.priceGroupName;
  }

  /**
   * Get Name.
   * @returns {string}
   */
  getName() {
    return this.name;
  }

  /**
   * Get CustomerScope.
   * @returns {string}
   */
  getCustomerScope() {
    return this.customerScope;
  }

  /**
   * Get Rate.
   * @returns {string}
   */
  getRate() {
    return this.rate;
  }

  /**
   * Get Discount.
   * @returns {number}
   */
  getDiscount() {
    return this.discount;
  }

  /**
   * Get Markup.
   * @returns {number}
   */
  getMarkup() {
    return this.markup;
  }

  /**
   * Get Module_ID.
   * @returns {number}
   */
  getModuleId() {
    return this.moduleId;
  }

  /**
   * Get Exclusion.
   * @returns {boolean}
   */
  getExclusion() {
    return this.exclusion;
  }

  /**
   * Get Description.
   * @returns {string}
   */
  getDescription() {
    return this.description;
  }

  /**
   * Get Display.
   * @returns {boolean}
   */
  getDisplay() {
    return this.display;
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
   * Get Qualifying_Min_Subtotal.
   * @returns {number}
   */
  getQualifyingMinSubtotal() {
    return this.qualifyingMinSubtotal;
  }

  /**
   * Get Qualifying_Max_Subtotal.
   * @returns {number}
   */
  getQualifyingMaxSubtotal() {
    return this.qualifyingMaxSubtotal;
  }

  /**
   * Get Qualifying_Min_Quantity.
   * @returns {number}
   */
  getQualifyingMinQuantity() {
    return this.qualifyingMinQuantity;
  }

  /**
   * Get Qualifying_Max_Quantity.
   * @returns {number}
   */
  getQualifyingMaxQuantity() {
    return this.qualifyingMaxQuantity;
  }

  /**
   * Get Qualifying_Min_Weight.
   * @returns {number}
   */
  getQualifyingMinWeight() {
    return this.qualifyingMinWeight;
  }

  /**
   * Get Qualifying_Max_Weight.
   * @returns {number}
   */
  getQualifyingMaxWeight() {
    return this.qualifyingMaxWeight;
  }

  /**
   * Get Basket_Min_Subtotal.
   * @returns {number}
   */
  getBasketMinSubtotal() {
    return this.basketMinSubtotal;
  }

  /**
   * Get Basket_Max_Subtotal.
   * @returns {number}
   */
  getBasketMaxSubtotal() {
    return this.basketMaxSubtotal;
  }

  /**
   * Get Basket_Min_Quantity.
   * @returns {number}
   */
  getBasketMinQuantity() {
    return this.basketMinQuantity;
  }

  /**
   * Get Basket_Max_Quantity.
   * @returns {number}
   */
  getBasketMaxQuantity() {
    return this.basketMaxQuantity;
  }

  /**
   * Get Basket_Min_Weight.
   * @returns {number}
   */
  getBasketMinWeight() {
    return this.basketMinWeight;
  }

  /**
   * Get Basket_Max_Weight.
   * @returns {number}
   */
  getBasketMaxWeight() {
    return this.basketMaxWeight;
  }

  /**
   * Get Priority.
   * @returns {number}
   */
  getPriority() {
    return this.priority;
  }

  /**
   * Get Exclusions.
   * @returns {PriceGroupExclusion[]}
   */
  getExclusions() {
    return this.exclusions;
  }

  /**
   * Get Module_Fields.
   * @returns {Object}
   */
  getModuleFields() {
    return this.moduleFields;
  }

  /**
   * Set PriceGroup_ID.
   * @param {number} priceGroupId
   * @returns {PriceGroupUpdate}
   */
  setPriceGroupId(priceGroupId) {
    this.priceGroupId = priceGroupId;
    return this;
  }

  /**
   * Set Edit_PriceGroup.
   * @param {string} editPriceGroup
   * @returns {PriceGroupUpdate}
   */
  setEditPriceGroup(editPriceGroup) {
    this.editPriceGroup = editPriceGroup;
    return this;
  }

  /**
   * Set PriceGroup_Name.
   * @param {string} priceGroupName
   * @returns {PriceGroupUpdate}
   */
  setPriceGroupName(priceGroupName) {
    this.priceGroupName = priceGroupName;
    return this;
  }

  /**
   * Set Name.
   * @param {string} name
   * @returns {PriceGroupUpdate}
   */
  setName(name) {
    this.name = name;
    return this;
  }

  /**
   * Set CustomerScope.
   * @param {string} customerScope
   * @returns {PriceGroupUpdate}
   */
  setCustomerScope(customerScope) {
    this.customerScope = customerScope;
    return this;
  }

  /**
   * Set Rate.
   * @param {string} rate
   * @returns {PriceGroupUpdate}
   */
  setRate(rate) {
    this.rate = rate;
    return this;
  }

  /**
   * Set Discount.
   * @param {number} discount
   * @returns {PriceGroupUpdate}
   */
  setDiscount(discount) {
    this.discount = discount;
    return this;
  }

  /**
   * Set Markup.
   * @param {number} markup
   * @returns {PriceGroupUpdate}
   */
  setMarkup(markup) {
    this.markup = markup;
    return this;
  }

  /**
   * Set Module_ID.
   * @param {number} moduleId
   * @returns {PriceGroupUpdate}
   */
  setModuleId(moduleId) {
    this.moduleId = moduleId;
    return this;
  }

  /**
   * Set Exclusion.
   * @param {boolean} exclusion
   * @returns {PriceGroupUpdate}
   */
  setExclusion(exclusion) {
    this.exclusion = exclusion;
    return this;
  }

  /**
   * Set Description.
   * @param {string} description
   * @returns {PriceGroupUpdate}
   */
  setDescription(description) {
    this.description = description;
    return this;
  }

  /**
   * Set Display.
   * @param {boolean} display
   * @returns {PriceGroupUpdate}
   */
  setDisplay(display) {
    this.display = display;
    return this;
  }

  /**
   * Set DateTime_Start.
   * @param {number|Date} dateTimeStart
   * @returns {PriceGroupUpdate}
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
   * @returns {PriceGroupUpdate}
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
   * Set Qualifying_Min_Subtotal.
   * @param {number} qualifyingMinSubtotal
   * @returns {PriceGroupUpdate}
   */
  setQualifyingMinSubtotal(qualifyingMinSubtotal) {
    this.qualifyingMinSubtotal = qualifyingMinSubtotal;
    return this;
  }

  /**
   * Set Qualifying_Max_Subtotal.
   * @param {number} qualifyingMaxSubtotal
   * @returns {PriceGroupUpdate}
   */
  setQualifyingMaxSubtotal(qualifyingMaxSubtotal) {
    this.qualifyingMaxSubtotal = qualifyingMaxSubtotal;
    return this;
  }

  /**
   * Set Qualifying_Min_Quantity.
   * @param {number} qualifyingMinQuantity
   * @returns {PriceGroupUpdate}
   */
  setQualifyingMinQuantity(qualifyingMinQuantity) {
    this.qualifyingMinQuantity = qualifyingMinQuantity;
    return this;
  }

  /**
   * Set Qualifying_Max_Quantity.
   * @param {number} qualifyingMaxQuantity
   * @returns {PriceGroupUpdate}
   */
  setQualifyingMaxQuantity(qualifyingMaxQuantity) {
    this.qualifyingMaxQuantity = qualifyingMaxQuantity;
    return this;
  }

  /**
   * Set Qualifying_Min_Weight.
   * @param {number} qualifyingMinWeight
   * @returns {PriceGroupUpdate}
   */
  setQualifyingMinWeight(qualifyingMinWeight) {
    this.qualifyingMinWeight = qualifyingMinWeight;
    return this;
  }

  /**
   * Set Qualifying_Max_Weight.
   * @param {number} qualifyingMaxWeight
   * @returns {PriceGroupUpdate}
   */
  setQualifyingMaxWeight(qualifyingMaxWeight) {
    this.qualifyingMaxWeight = qualifyingMaxWeight;
    return this;
  }

  /**
   * Set Basket_Min_Subtotal.
   * @param {number} basketMinSubtotal
   * @returns {PriceGroupUpdate}
   */
  setBasketMinSubtotal(basketMinSubtotal) {
    this.basketMinSubtotal = basketMinSubtotal;
    return this;
  }

  /**
   * Set Basket_Max_Subtotal.
   * @param {number} basketMaxSubtotal
   * @returns {PriceGroupUpdate}
   */
  setBasketMaxSubtotal(basketMaxSubtotal) {
    this.basketMaxSubtotal = basketMaxSubtotal;
    return this;
  }

  /**
   * Set Basket_Min_Quantity.
   * @param {number} basketMinQuantity
   * @returns {PriceGroupUpdate}
   */
  setBasketMinQuantity(basketMinQuantity) {
    this.basketMinQuantity = basketMinQuantity;
    return this;
  }

  /**
   * Set Basket_Max_Quantity.
   * @param {number} basketMaxQuantity
   * @returns {PriceGroupUpdate}
   */
  setBasketMaxQuantity(basketMaxQuantity) {
    this.basketMaxQuantity = basketMaxQuantity;
    return this;
  }

  /**
   * Set Basket_Min_Weight.
   * @param {number} basketMinWeight
   * @returns {PriceGroupUpdate}
   */
  setBasketMinWeight(basketMinWeight) {
    this.basketMinWeight = basketMinWeight;
    return this;
  }

  /**
   * Set Basket_Max_Weight.
   * @param {number} basketMaxWeight
   * @returns {PriceGroupUpdate}
   */
  setBasketMaxWeight(basketMaxWeight) {
    this.basketMaxWeight = basketMaxWeight;
    return this;
  }

  /**
   * Set Priority.
   * @param {number} priority
   * @returns {PriceGroupUpdate}
   */
  setPriority(priority) {
    this.priority = priority;
    return this;
  }

  /**
   * Set Exclusions.
   * @param {PriceGroupExclusion[]} exclusions
   * @throws {Error}
   * @returns {PriceGroupUpdate}
   */
  setExclusions(exclusions) {
    var i;
    var l;

    if (!util.isArray(exclusions)) {
      throw new Error(util.format('Expected an array but got %s', typeof exclusions));
    }

    for (i = 0, l = exclusions.length; i < l; i++) {
      if (!util.isInstanceOf(exclusions[i], models.PriceGroupExclusion) && util.isObject(exclusions[i])) {
        exclusions[i] = new models.PriceGroupExclusion(exclusions[i]);
      } else if (!util.isInstanceOf(exclusions[i], models.PriceGroupExclusion)) {
        throw new Error(util.format('Expected instance of PriceGroupExclusion or an Object but got %s',
          typeof exclusions[i]));
      }
    }

    this.exclusions = exclusions;
    return this;
  }

  /**
   * Set Module_Fields.
   * @param {Object} moduleFields
   * @returns {PriceGroupUpdate}
   */
  setModuleFields(moduleFields) {
    this.moduleFields = moduleFields;
    return this;
  }

  /**
   * Add Exclusions.
   * @param {PriceGroupExclusion} priceGroupExclusion
   * @throws {Error}
   * @returns {PriceGroupUpdate}
   */
  addPriceGroupExclusion(priceGroupExclusion) {
    if (util.isInstanceOf(priceGroupExclusion, models.PriceGroupExclusion)) {
      this.exclusions.push(priceGroupExclusion);
    } else if (util.isObject(priceGroupExclusion)) {
      this.exclusions.push(new models.PriceGroupExclusion(priceGroupExclusion));
    } else {
      throw new Error(util.format('Expected instance of PriceGroupExclusion or Object but got %s',
        typeof priceGroupExclusion));
    }

    return this;
  }

  /**
   * Add many PriceGroupExclusion.
   * @param {PriceGroupExclusion[]} exclusions
   * @throws {Error}
   * @returns {PriceGroupUpdate}
   */
  addExclusions(exclusions) {
    var i;
    var l;

    if (!util.isArray(exclusions)) {
      throw new Error(util.format('Expecting an array of PriceGroupExclusion but got %s',
        typeof exclusions));
    }

    for (i = 0, l = exclusions.length; i < l; i++) {
      if (util.isInstanceOf(exclusions[i], models.PriceGroupExclusion)) {
        this.exclusions.push(exclusions[i]);
      } else if (util.isObject(exclusions[i])) {
        this.exclusions.push(new models.PriceGroupExclusion(exclusions[i]));
      } else {
        throw new Error(util.format('Expected array of PriceGroupExclusion or an array of Object but got %s',
          typeof exclusions[i]));
      }
    }

    return this;
  }

  /**
   * Add custom data to the request.
   *
   * @param {string}
   * @param {*}
   * @returns {PriceGroupUpdate}
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
    var i;
    var l;
    var data = Object.assign(super.toObject(), this.getModuleFields());

    if (!util.isNullOrUndefined(this.priceGroupId)) {
      data['PriceGroup_ID'] = this.priceGroupId;
    } else if (!util.isNullOrUndefined(this.editPriceGroup)) {
      data['Edit_PriceGroup'] = this.editPriceGroup;
    } else if (!util.isNullOrUndefined(this.priceGroupName)) {
      data['PriceGroup_Name'] = this.priceGroupName;
    }

    data['PriceGroup_Name'] = this.priceGroupName;

    if (!util.isNullOrUndefined(this.name)) {
      data['Name'] = this.name;
    }

    if (!util.isNullOrUndefined(this.customerScope)) {
      data['CustomerScope'] = this.customerScope;
    }

    if (!util.isNullOrUndefined(this.rate)) {
      data['Rate'] = this.rate;
    }

    if (!util.isNullOrUndefined(this.discount)) {
      data['Discount'] = this.discount;
    }

    if (!util.isNullOrUndefined(this.markup)) {
      data['Markup'] = this.markup;
    }

    if (!util.isNullOrUndefined(this.moduleId)) {
      data['Module_ID'] = this.moduleId;
    }

    if (!util.isNullOrUndefined(this.exclusion)) {
      data['Exclusion'] = this.exclusion;
    }

    if (!util.isNullOrUndefined(this.description)) {
      data['Description'] = this.description;
    }

    if (!util.isNullOrUndefined(this.display)) {
      data['Display'] = this.display;
    }

    if (!util.isNullOrUndefined(this.dateTimeStart)) {
      data['DateTime_Start'] = this.dateTimeStart;
    }

    if (!util.isNullOrUndefined(this.dateTimeEnd)) {
      data['DateTime_End'] = this.dateTimeEnd;
    }

    if (!util.isNullOrUndefined(this.qualifyingMinSubtotal)) {
      data['Qualifying_Min_Subtotal'] = this.qualifyingMinSubtotal;
    }

    if (!util.isNullOrUndefined(this.qualifyingMaxSubtotal)) {
      data['Qualifying_Max_Subtotal'] = this.qualifyingMaxSubtotal;
    }

    if (!util.isNullOrUndefined(this.qualifyingMinQuantity)) {
      data['Qualifying_Min_Quantity'] = this.qualifyingMinQuantity;
    }

    if (!util.isNullOrUndefined(this.qualifyingMaxQuantity)) {
      data['Qualifying_Max_Quantity'] = this.qualifyingMaxQuantity;
    }

    if (!util.isNullOrUndefined(this.qualifyingMinWeight)) {
      data['Qualifying_Min_Weight'] = this.qualifyingMinWeight;
    }

    if (!util.isNullOrUndefined(this.qualifyingMaxWeight)) {
      data['Qualifying_Max_Weight'] = this.qualifyingMaxWeight;
    }

    if (!util.isNullOrUndefined(this.basketMinSubtotal)) {
      data['Basket_Min_Subtotal'] = this.basketMinSubtotal;
    }

    if (!util.isNullOrUndefined(this.basketMaxSubtotal)) {
      data['Basket_Max_Subtotal'] = this.basketMaxSubtotal;
    }

    if (!util.isNullOrUndefined(this.basketMinQuantity)) {
      data['Basket_Min_Quantity'] = this.basketMinQuantity;
    }

    if (!util.isNullOrUndefined(this.basketMaxQuantity)) {
      data['Basket_Max_Quantity'] = this.basketMaxQuantity;
    }

    if (!util.isNullOrUndefined(this.basketMinWeight)) {
      data['Basket_Min_Weight'] = this.basketMinWeight;
    }

    if (!util.isNullOrUndefined(this.basketMaxWeight)) {
      data['Basket_Max_Weight'] = this.basketMaxWeight;
    }

    if (!util.isNullOrUndefined(this.priority)) {
      data['Priority'] = this.priority;
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
  createResponse(httpResponse, data) {
    return new responses.PriceGroupUpdate(this, httpResponse, data);
  }
}

/** 
 * Handles API Request CouponCustomer_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/couponcustomer_update_assigned
 */
class CouponCustomerUpdateAssigned extends Request {
  /**
   * CouponCustomerUpdateAssigned Constructor.
   * @param {?BaseClient} client
   * @param {?Coupon} coupon
   */
  constructor(client, coupon = null) {
    super(client);
    this.function = 'CouponCustomer_Update_Assigned';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.customerId = null;
    this.editCustomer = null;
    this.customerLogin = null;
    this.couponId = null;
    this.editCoupon = null;
    this.couponCode = null;
    this.assigned = null;

    if (util.isInstanceOf(coupon, models.Coupon)) {
      if (coupon.getId()) {
        this.setCouponId(coupon.getId());
      }

      this.setCouponCode(coupon.getCode());
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
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {CouponCustomerUpdateAssigned}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
    return this;
  }

  /**
   * Set Edit_Customer.
   * @param {string} editCustomer
   * @returns {CouponCustomerUpdateAssigned}
   */
  setEditCustomer(editCustomer) {
    this.editCustomer = editCustomer;
    return this;
  }

  /**
   * Set Customer_Login.
   * @param {string} customerLogin
   * @returns {CouponCustomerUpdateAssigned}
   */
  setCustomerLogin(customerLogin) {
    this.customerLogin = customerLogin;
    return this;
  }

  /**
   * Set Coupon_ID.
   * @param {number} couponId
   * @returns {CouponCustomerUpdateAssigned}
   */
  setCouponId(couponId) {
    this.couponId = couponId;
    return this;
  }

  /**
   * Set Edit_Coupon.
   * @param {string} editCoupon
   * @returns {CouponCustomerUpdateAssigned}
   */
  setEditCoupon(editCoupon) {
    this.editCoupon = editCoupon;
    return this;
  }

  /**
   * Set Coupon_Code.
   * @param {string} couponCode
   * @returns {CouponCustomerUpdateAssigned}
   */
  setCouponCode(couponCode) {
    this.couponCode = couponCode;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {CouponCustomerUpdateAssigned}
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

    if (!util.isNullOrUndefined(this.customerId)) {
      data['Customer_ID'] = this.customerId;
    } else if (!util.isNullOrUndefined(this.editCustomer)) {
      data['Edit_Customer'] = this.editCustomer;
    } else if (!util.isNullOrUndefined(this.customerLogin)) {
      data['Customer_Login'] = this.customerLogin;
    }

    data['Customer_Login'] = this.customerLogin;

    data['Coupon_Code'] = this.couponCode;

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
  createResponse(httpResponse, data) {
    return new responses.CouponCustomerUpdateAssigned(this, httpResponse, data);
  }
}

/** 
 * Handles API Request BusinessAccountList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/businessaccountlist_load_query
 */
class BusinessAccountListLoadQuery extends ListQueryRequest {
  /**
   * BusinessAccountListLoadQuery Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'BusinessAccountList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'title',
      'note_count',
      'tax_exempt',
      'order_cnt',
      'order_avg',
      'order_tot'
    ];

    this.availableSortFields = [
      'title',
      'note_count',
      'tax_exempt',
      'order_cnt',
      'order_avg',
      'order_tot'
    ];
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.BusinessAccountListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request BusinessAccount_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/businessaccount_insert
 */
class BusinessAccountInsert extends Request {
  /**
   * BusinessAccountInsert Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'BusinessAccount_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.businessAccountTitle = null;
    this.businessAccountTaxExempt = null;
  }

  /**
   * Get BusinessAccount_Title.
   * @returns {string}
   */
  getBusinessAccountTitle() {
    return this.businessAccountTitle;
  }

  /**
   * Get BusinessAccount_Tax_Exempt.
   * @returns {boolean}
   */
  getBusinessAccountTaxExempt() {
    return this.businessAccountTaxExempt;
  }

  /**
   * Set BusinessAccount_Title.
   * @param {string} businessAccountTitle
   * @returns {BusinessAccountInsert}
   */
  setBusinessAccountTitle(businessAccountTitle) {
    this.businessAccountTitle = businessAccountTitle;
    return this;
  }

  /**
   * Set BusinessAccount_Tax_Exempt.
   * @param {boolean} businessAccountTaxExempt
   * @returns {BusinessAccountInsert}
   */
  setBusinessAccountTaxExempt(businessAccountTaxExempt) {
    this.businessAccountTaxExempt = businessAccountTaxExempt;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.businessAccountTitle)) {
      data['BusinessAccount_Title'] = this.businessAccountTitle;
    }

    if (!util.isNullOrUndefined(this.businessAccountTaxExempt)) {
      data['BusinessAccount_Tax_Exempt'] = this.businessAccountTaxExempt;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.BusinessAccountInsert(this, httpResponse, data);
  }
}

/** 
 * Handles API Request BusinessAccount_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/businessaccount_update
 */
class BusinessAccountUpdate extends Request {
  /**
   * BusinessAccountUpdate Constructor.
   * @param {?BaseClient} client
   * @param {?BusinessAccount} businessAccount
   */
  constructor(client, businessAccount = null) {
    super(client);
    this.function = 'BusinessAccount_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.businessAccountId = null;
    this.editBusinessAccount = null;
    this.businessAccountTitle = null;
    this.businessAccountTaxExempt = null;

    if (util.isInstanceOf(businessAccount, models.BusinessAccount)) {
      if (businessAccount.getId()) {
        this.setBusinessAccountId(businessAccount.getId());
      }

      this.setBusinessAccountTitle(businessAccount.getTitle());
      this.setBusinessAccountTaxExempt(businessAccount.getTaxExempt());
    }
  }

  /**
   * Get BusinessAccount_ID.
   * @returns {number}
   */
  getBusinessAccountId() {
    return this.businessAccountId;
  }

  /**
   * Get Edit_BusinessAccount.
   * @returns {number}
   */
  getEditBusinessAccount() {
    return this.editBusinessAccount;
  }

  /**
   * Get BusinessAccount_Title.
   * @returns {string}
   */
  getBusinessAccountTitle() {
    return this.businessAccountTitle;
  }

  /**
   * Get BusinessAccount_Tax_Exempt.
   * @returns {boolean}
   */
  getBusinessAccountTaxExempt() {
    return this.businessAccountTaxExempt;
  }

  /**
   * Set BusinessAccount_ID.
   * @param {number} businessAccountId
   * @returns {BusinessAccountUpdate}
   */
  setBusinessAccountId(businessAccountId) {
    this.businessAccountId = businessAccountId;
    return this;
  }

  /**
   * Set Edit_BusinessAccount.
   * @param {number} editBusinessAccount
   * @returns {BusinessAccountUpdate}
   */
  setEditBusinessAccount(editBusinessAccount) {
    this.editBusinessAccount = editBusinessAccount;
    return this;
  }

  /**
   * Set BusinessAccount_Title.
   * @param {string} businessAccountTitle
   * @returns {BusinessAccountUpdate}
   */
  setBusinessAccountTitle(businessAccountTitle) {
    this.businessAccountTitle = businessAccountTitle;
    return this;
  }

  /**
   * Set BusinessAccount_Tax_Exempt.
   * @param {boolean} businessAccountTaxExempt
   * @returns {BusinessAccountUpdate}
   */
  setBusinessAccountTaxExempt(businessAccountTaxExempt) {
    this.businessAccountTaxExempt = businessAccountTaxExempt;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.businessAccountId)) {
      data['BusinessAccount_ID'] = this.businessAccountId;
    } else if (!util.isNullOrUndefined(this.editBusinessAccount)) {
      data['Edit_BusinessAccount'] = this.editBusinessAccount;
    } else if (!util.isNullOrUndefined(this.businessAccountTitle)) {
      data['BusinessAccount_Title'] = this.businessAccountTitle;
    }

    if (!util.isNullOrUndefined(this.businessAccountTitle)) {
      data['BusinessAccount_Title'] = this.businessAccountTitle;
    }

    if (!util.isNullOrUndefined(this.businessAccountTaxExempt)) {
      data['BusinessAccount_Tax_Exempt'] = this.businessAccountTaxExempt;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.BusinessAccountUpdate(this, httpResponse, data);
  }
}

/** 
 * Handles API Request BusinessAccountList_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/businessaccountlist_delete
 */
class BusinessAccountListDelete extends Request {
  /**
   * BusinessAccountListDelete Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'BusinessAccountList_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.businessAccountIds = [];
  }

  /**
   * Get BusinessAccount_IDs.
   * @returns {Array}
   */
  getBusinessAccountIds() {
    return this.businessAccountIds;
  }

  /**
   * Add BusinessAccount_IDs.
   * @param {number} businessAccountId
   * @returns {BusinessAccountListDelete}
   */
  addBusinessAccountId(businessAccountId) {
    this.businessAccountIds.push(businessAccountId);
    return this;
  }

  /**
   * Add BusinessAccount model.
   * @param {BusinessAccount} businessAccount
   * @throws {Error}
   * @returns {BusinessAccountListDelete}
   */
  addBusinessAccount(businessAccount) {
    if (!util.isInstanceOf(businessAccount, models.BusinessAccount)) {
      throw new Error(util.format('Expected instance of BusinessAccount but got %s',
        typeof businessAccount));
    }

    if (businessAccount.getId()) {
      this.businessAccountIds.push(businessAccount.getId());
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

    data['BusinessAccount_IDs'] = this.businessAccountIds;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.BusinessAccountListDelete(this, httpResponse, data);
  }
}

/** 
 * Handles API Request BusinessAccountCustomer_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/businessaccountcustomer_update_assigned
 */
class BusinessAccountCustomerUpdateAssigned extends Request {
  /**
   * BusinessAccountCustomerUpdateAssigned Constructor.
   * @param {?BaseClient} client
   * @param {?BusinessAccount} businessAccount
   */
  constructor(client, businessAccount = null) {
    super(client);
    this.function = 'BusinessAccountCustomer_Update_Assigned';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.customerId = null;
    this.editCustomer = null;
    this.customerLogin = null;
    this.businessAccountId = null;
    this.editBusinessAccount = null;
    this.businessAccountTitle = null;
    this.assigned = null;

    if (util.isInstanceOf(businessAccount, models.BusinessAccount)) {
      if (businessAccount.getId()) {
        this.setBusinessAccountId(businessAccount.getId());
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
   * Get BusinessAccount_ID.
   * @returns {number}
   */
  getBusinessAccountId() {
    return this.businessAccountId;
  }

  /**
   * Get Edit_BusinessAccount.
   * @returns {string}
   */
  getEditBusinessAccount() {
    return this.editBusinessAccount;
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
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {BusinessAccountCustomerUpdateAssigned}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
    return this;
  }

  /**
   * Set Edit_Customer.
   * @param {string} editCustomer
   * @returns {BusinessAccountCustomerUpdateAssigned}
   */
  setEditCustomer(editCustomer) {
    this.editCustomer = editCustomer;
    return this;
  }

  /**
   * Set Customer_Login.
   * @param {string} customerLogin
   * @returns {BusinessAccountCustomerUpdateAssigned}
   */
  setCustomerLogin(customerLogin) {
    this.customerLogin = customerLogin;
    return this;
  }

  /**
   * Set BusinessAccount_ID.
   * @param {number} businessAccountId
   * @returns {BusinessAccountCustomerUpdateAssigned}
   */
  setBusinessAccountId(businessAccountId) {
    this.businessAccountId = businessAccountId;
    return this;
  }

  /**
   * Set Edit_BusinessAccount.
   * @param {string} editBusinessAccount
   * @returns {BusinessAccountCustomerUpdateAssigned}
   */
  setEditBusinessAccount(editBusinessAccount) {
    this.editBusinessAccount = editBusinessAccount;
    return this;
  }

  /**
   * Set BusinessAccount_Title.
   * @param {string} businessAccountTitle
   * @returns {BusinessAccountCustomerUpdateAssigned}
   */
  setBusinessAccountTitle(businessAccountTitle) {
    this.businessAccountTitle = businessAccountTitle;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {BusinessAccountCustomerUpdateAssigned}
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

    if (!util.isNullOrUndefined(this.businessAccountId)) {
      data['BusinessAccount_ID'] = this.businessAccountId;
    } else if (!util.isNullOrUndefined(this.editBusinessAccount)) {
      data['Edit_BusinessAccount'] = this.editBusinessAccount;
    } else if (!util.isNullOrUndefined(this.businessAccountTitle)) {
      data['BusinessAccount_Title'] = this.businessAccountTitle;
    }

    if (!util.isNullOrUndefined(this.customerId)) {
      data['Customer_ID'] = this.customerId;
    } else if (!util.isNullOrUndefined(this.editCustomer)) {
      data['Edit_Customer'] = this.editCustomer;
    } else if (!util.isNullOrUndefined(this.customerLogin)) {
      data['Customer_Login'] = this.customerLogin;
    }

    data['Customer_Login'] = this.customerLogin;

    data['BusinessAccount_Title'] = this.businessAccountTitle;

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
  createResponse(httpResponse, data) {
    return new responses.BusinessAccountCustomerUpdateAssigned(this, httpResponse, data);
  }
}

/** 
 * Handles API Request StoreList_Load_Query. Scope: Domain. 
 * @see https://docs.miva.com/json-api/functions/storelist_load_query
 */
class StoreListLoadQuery extends ListQueryRequest {
  /**
   * StoreListLoadQuery Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'StoreList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_DOMAIN;

    this.availableSearchFields = [
      'id',
      'code',
      'license',
      'name',
      'owner',
      'email',
      'company',
      'address',
      'city',
      'state',
      'zip',
      'phone',
      'fax',
      'country'
    ];

    this.availableSortFields = [
      'id',
      'code',
      'license',
      'name',
      'owner',
      'email',
      'company',
      'address',
      'city',
      'state',
      'zip',
      'phone',
      'fax',
      'country'
    ];
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.StoreListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request Store_Load. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/store_load
 */
class StoreLoad extends Request {
  /**
   * StoreLoad Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'Store_Load';
    this.scope = Request.REQUEST_SCOPE_STORE;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.StoreLoad(this, httpResponse, data);
  }
}

/** 
 * Handles API Request ProductVariantList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/productvariantlist_load_query
 */
class ProductVariantListLoadQuery extends ListQueryRequest {
  /**
   * ProductVariantListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client);
    this.function = 'ProductVariantList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.availableSearchFields = [
      'product_code',
      'product_name',
      'product_sku',
      'option_id',
      'option_code'
    ];

    this.productId = null;
    this.productCode = null;
    this.editProduct = null;

    if (util.isInstanceOf(product, models.Product)) {
      if (product.getId()) {
        this.setProductId(product.getId());
      } else if (product.getCode()) {
        this.setProductCode(product.getCode());
      } else if (product.getCode()) {
        this.setEditProduct(product.getCode());
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
   * Set Product_ID.
   * @param {number} productId
   * @returns {ProductVariantListLoadQuery}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {ProductVariantListLoadQuery}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {ProductVariantListLoadQuery}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
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
    } else if (!util.isNullOrUndefined(this.productCode)) {
      data['Product_Code'] = this.productCode;
    } else if (!util.isNullOrUndefined(this.editProduct)) {
      data['Edit_Product'] = this.editProduct;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ProductVariantListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request ProductVariant_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/productvariant_insert
 */
class ProductVariantInsert extends Request {
  /**
   * ProductVariantInsert Constructor.
   * @param {?BaseClient} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client);
    this.function = 'ProductVariant_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productId = null;
    this.productCode = null;
    this.editProduct = null;
    this.attributes = [];
    this.parts = [];

    if (util.isInstanceOf(product, models.Product)) {
      if (product.getId()) {
        this.setProductId(product.getId());
      } else if (product.getCode()) {
        this.setProductCode(product.getCode());
      } else if (product.getCode()) {
        this.setEditProduct(product.getCode());
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
   * Get Attributes.
   * @returns {VariantAttribute[]}
   */
  getAttributes() {
    return this.attributes;
  }

  /**
   * Get Parts.
   * @returns {VariantPart[]}
   */
  getParts() {
    return this.parts;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {ProductVariantInsert}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {ProductVariantInsert}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {ProductVariantInsert}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Attributes.
   * @param {VariantAttribute[]} attributes
   * @throws {Error}
   * @returns {ProductVariantInsert}
   */
  setAttributes(attributes) {
    var i;
    var l;

    if (!util.isArray(attributes)) {
      throw new Error(util.format('Expected an array but got %s', typeof attributes));
    }

    for (i = 0, l = attributes.length; i < l; i++) {
      if (!util.isInstanceOf(attributes[i], models.VariantAttribute) && util.isObject(attributes[i])) {
        attributes[i] = new models.VariantAttribute(attributes[i]);
      } else if (!util.isInstanceOf(attributes[i], models.VariantAttribute)) {
        throw new Error(util.format('Expected instance of VariantAttribute or an Object but got %s',
          typeof attributes[i]));
      }
    }

    this.attributes = attributes;
    return this;
  }

  /**
   * Set Parts.
   * @param {VariantPart[]} parts
   * @throws {Error}
   * @returns {ProductVariantInsert}
   */
  setParts(parts) {
    var i;
    var l;

    if (!util.isArray(parts)) {
      throw new Error(util.format('Expected an array but got %s', typeof parts));
    }

    for (i = 0, l = parts.length; i < l; i++) {
      if (!util.isInstanceOf(parts[i], models.VariantPart) && util.isObject(parts[i])) {
        parts[i] = new models.VariantPart(parts[i]);
      } else if (!util.isInstanceOf(parts[i], models.VariantPart)) {
        throw new Error(util.format('Expected instance of VariantPart or an Object but got %s',
          typeof parts[i]));
      }
    }

    this.parts = parts;
    return this;
  }

  /**
   * Add Attributes.
   * @param {VariantAttribute} variantAttribute
   * @throws {Error}
   * @returns {ProductVariantInsert}
   */
  addVariantAttribute(variantAttribute) {
    if (util.isInstanceOf(variantAttribute, models.VariantAttribute)) {
      this.attributes.push(variantAttribute);
    } else if (util.isObject(variantAttribute)) {
      this.attributes.push(new models.VariantAttribute(variantAttribute));
    } else {
      throw new Error(util.format('Expected instance of VariantAttribute or Object but got %s',
        typeof variantAttribute));
    }

    return this;
  }

  /**
   * Add many VariantAttribute.
   * @param {VariantAttribute[]} attributes
   * @throws {Error}
   * @returns {ProductVariantInsert}
   */
  addAttributes(attributes) {
    var i;
    var l;

    if (!util.isArray(attributes)) {
      throw new Error(util.format('Expecting an array of VariantAttribute but got %s',
        typeof attributes));
    }

    for (i = 0, l = attributes.length; i < l; i++) {
      if (util.isInstanceOf(attributes[i], models.VariantAttribute)) {
        this.attributes.push(attributes[i]);
      } else if (util.isObject(attributes[i])) {
        this.attributes.push(new models.VariantAttribute(attributes[i]));
      } else {
        throw new Error(util.format('Expected array of VariantAttribute or an array of Object but got %s',
          typeof attributes[i]));
      }
    }

    return this;
  }

  /**
   * Add Parts.
   * @param {VariantPart} variantPart
   * @throws {Error}
   * @returns {ProductVariantInsert}
   */
  addVariantPart(variantPart) {
    if (util.isInstanceOf(variantPart, models.VariantPart)) {
      this.parts.push(variantPart);
    } else if (util.isObject(variantPart)) {
      this.parts.push(new models.VariantPart(variantPart));
    } else {
      throw new Error(util.format('Expected instance of VariantPart or Object but got %s',
        typeof variantPart));
    }

    return this;
  }

  /**
   * Add many VariantPart.
   * @param {VariantPart[]} parts
   * @throws {Error}
   * @returns {ProductVariantInsert}
   */
  addParts(parts) {
    var i;
    var l;

    if (!util.isArray(parts)) {
      throw new Error(util.format('Expecting an array of VariantPart but got %s',
        typeof parts));
    }

    for (i = 0, l = parts.length; i < l; i++) {
      if (util.isInstanceOf(parts[i], models.VariantPart)) {
        this.parts.push(parts[i]);
      } else if (util.isObject(parts[i])) {
        this.parts.push(new models.VariantPart(parts[i]));
      } else {
        throw new Error(util.format('Expected array of VariantPart or an array of Object but got %s',
          typeof parts[i]));
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
    }

    if (util.isArray(this.attributes)) {
      data['Attributes'] = [];

      for (i = 0, l = this.attributes.length; i < l; i++) {
        data['Attributes'].push(this.attributes[i].toObject());
      }
    }

    if (util.isArray(this.parts)) {
      data['Parts'] = [];

      for (i = 0, l = this.parts.length; i < l; i++) {
        data['Parts'].push(this.parts[i].toObject());
      }
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ProductVariantInsert(this, httpResponse, data);
  }
}

/** 
 * Handles API Request ProductVariant_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/productvariant_update
 */
class ProductVariantUpdate extends Request {
  /**
   * ProductVariantUpdate Constructor.
   * @param {?BaseClient} client
   * @param {?ProductVariant} productVariant
   */
  constructor(client, productVariant = null) {
    super(client);
    this.function = 'ProductVariant_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productId = null;
    this.productCode = null;
    this.editProduct = null;
    this.variantId = null;
    this.attributes = [];
    this.parts = [];

    if (util.isInstanceOf(productVariant, models.ProductVariant)) {
      if (productVariant.getProductId()) {
        this.setProductId(productVariant.getProductId());
      }

      if (productVariant.getVariantId()) {
        this.setVariantId(productVariant.getVariantId());
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
   * Get Variant_ID.
   * @returns {number}
   */
  getVariantId() {
    return this.variantId;
  }

  /**
   * Get Attributes.
   * @returns {VariantAttribute[]}
   */
  getAttributes() {
    return this.attributes;
  }

  /**
   * Get Parts.
   * @returns {VariantPart[]}
   */
  getParts() {
    return this.parts;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {ProductVariantUpdate}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {ProductVariantUpdate}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {ProductVariantUpdate}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Variant_ID.
   * @param {number} variantId
   * @returns {ProductVariantUpdate}
   */
  setVariantId(variantId) {
    this.variantId = variantId;
    return this;
  }

  /**
   * Set Attributes.
   * @param {VariantAttribute[]} attributes
   * @throws {Error}
   * @returns {ProductVariantUpdate}
   */
  setAttributes(attributes) {
    var i;
    var l;

    if (!util.isArray(attributes)) {
      throw new Error(util.format('Expected an array but got %s', typeof attributes));
    }

    for (i = 0, l = attributes.length; i < l; i++) {
      if (!util.isInstanceOf(attributes[i], models.VariantAttribute) && util.isObject(attributes[i])) {
        attributes[i] = new models.VariantAttribute(attributes[i]);
      } else if (!util.isInstanceOf(attributes[i], models.VariantAttribute)) {
        throw new Error(util.format('Expected instance of VariantAttribute or an Object but got %s',
          typeof attributes[i]));
      }
    }

    this.attributes = attributes;
    return this;
  }

  /**
   * Set Parts.
   * @param {VariantPart[]} parts
   * @throws {Error}
   * @returns {ProductVariantUpdate}
   */
  setParts(parts) {
    var i;
    var l;

    if (!util.isArray(parts)) {
      throw new Error(util.format('Expected an array but got %s', typeof parts));
    }

    for (i = 0, l = parts.length; i < l; i++) {
      if (!util.isInstanceOf(parts[i], models.VariantPart) && util.isObject(parts[i])) {
        parts[i] = new models.VariantPart(parts[i]);
      } else if (!util.isInstanceOf(parts[i], models.VariantPart)) {
        throw new Error(util.format('Expected instance of VariantPart or an Object but got %s',
          typeof parts[i]));
      }
    }

    this.parts = parts;
    return this;
  }

  /**
   * Add Attributes.
   * @param {VariantAttribute} variantAttribute
   * @throws {Error}
   * @returns {ProductVariantUpdate}
   */
  addVariantAttribute(variantAttribute) {
    if (util.isInstanceOf(variantAttribute, models.VariantAttribute)) {
      this.attributes.push(variantAttribute);
    } else if (util.isObject(variantAttribute)) {
      this.attributes.push(new models.VariantAttribute(variantAttribute));
    } else {
      throw new Error(util.format('Expected instance of VariantAttribute or Object but got %s',
        typeof variantAttribute));
    }

    return this;
  }

  /**
   * Add many VariantAttribute.
   * @param {VariantAttribute[]} attributes
   * @throws {Error}
   * @returns {ProductVariantUpdate}
   */
  addAttributes(attributes) {
    var i;
    var l;

    if (!util.isArray(attributes)) {
      throw new Error(util.format('Expecting an array of VariantAttribute but got %s',
        typeof attributes));
    }

    for (i = 0, l = attributes.length; i < l; i++) {
      if (util.isInstanceOf(attributes[i], models.VariantAttribute)) {
        this.attributes.push(attributes[i]);
      } else if (util.isObject(attributes[i])) {
        this.attributes.push(new models.VariantAttribute(attributes[i]));
      } else {
        throw new Error(util.format('Expected array of VariantAttribute or an array of Object but got %s',
          typeof attributes[i]));
      }
    }

    return this;
  }

  /**
   * Add Parts.
   * @param {VariantPart} variantPart
   * @throws {Error}
   * @returns {ProductVariantUpdate}
   */
  addVariantPart(variantPart) {
    if (util.isInstanceOf(variantPart, models.VariantPart)) {
      this.parts.push(variantPart);
    } else if (util.isObject(variantPart)) {
      this.parts.push(new models.VariantPart(variantPart));
    } else {
      throw new Error(util.format('Expected instance of VariantPart or Object but got %s',
        typeof variantPart));
    }

    return this;
  }

  /**
   * Add many VariantPart.
   * @param {VariantPart[]} parts
   * @throws {Error}
   * @returns {ProductVariantUpdate}
   */
  addParts(parts) {
    var i;
    var l;

    if (!util.isArray(parts)) {
      throw new Error(util.format('Expecting an array of VariantPart but got %s',
        typeof parts));
    }

    for (i = 0, l = parts.length; i < l; i++) {
      if (util.isInstanceOf(parts[i], models.VariantPart)) {
        this.parts.push(parts[i]);
      } else if (util.isObject(parts[i])) {
        this.parts.push(new models.VariantPart(parts[i]));
      } else {
        throw new Error(util.format('Expected array of VariantPart or an array of Object but got %s',
          typeof parts[i]));
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
    }

    if (!util.isNullOrUndefined(this.variantId)) {
      data['Variant_ID'] = this.variantId;
    }

    if (util.isArray(this.attributes)) {
      data['Attributes'] = [];

      for (i = 0, l = this.attributes.length; i < l; i++) {
        if (util.isObject(this.attributes[i])) {
            data['Attributes'].push(this.attributes[i].toObject());
        }
      }
    }

    if (util.isArray(this.parts)) {
      data['Parts'] = [];

      for (i = 0, l = this.parts.length; i < l; i++) {
        data['Parts'].push(this.parts[i].toObject());
      }
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ProductVariantUpdate(this, httpResponse, data);
  }
}

/** 
 * Handles API Request ProductVariant_Generate. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/productvariant_generate
 */
class ProductVariantGenerate extends Request {
  /**
   * ProductVariantGenerate Constructor.
   * @param {?BaseClient} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client);
    this.function = 'ProductVariant_Generate';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productId = null;
    this.productCode = null;
    this.editProduct = null;
    this.pricingMethod = null;

    if (util.isInstanceOf(product, models.Product)) {
      if (product.getId()) {
        this.setProductId(product.getId());
      } else if (product.getCode()) {
        this.setProductCode(product.getCode());
      } else if (product.getCode()) {
        this.setEditProduct(product.getCode());
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
   * Get Pricing_Method.
   * @returns {number}
   */
  getPricingMethod() {
    return this.pricingMethod;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {ProductVariantGenerate}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {ProductVariantGenerate}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {ProductVariantGenerate}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Pricing_Method.
   * @param {number} pricingMethod
   * @returns {ProductVariantGenerate}
   */
  setPricingMethod(pricingMethod) {
    this.pricingMethod = pricingMethod;
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
    } else if (!util.isNullOrUndefined(this.productCode)) {
      data['Product_Code'] = this.productCode;
    } else if (!util.isNullOrUndefined(this.editProduct)) {
      data['Edit_Product'] = this.editProduct;
    }

    data['Pricing_Method'] = this.pricingMethod;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ProductVariantGenerate(this, httpResponse, data);
  }
}

/** 
 * Handles API Request ProductVariant_Generate_Delimiter. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/productvariant_generate_delimiter
 */
class ProductVariantGenerateDelimiter extends Request {
  /**
   * ProductVariantGenerateDelimiter Constructor.
   * @param {?BaseClient} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client);
    this.function = 'ProductVariant_Generate_Delimiter';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productId = null;
    this.productCode = null;
    this.editProduct = null;
    this.pricingMethod = null;
    this.delimiter = null;

    if (util.isInstanceOf(product, models.Product)) {
      if (product.getId()) {
        this.setProductId(product.getId());
      } else if (product.getCode()) {
        this.setProductCode(product.getCode());
      } else if (product.getCode()) {
        this.setEditProduct(product.getCode());
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
   * Get Pricing_Method.
   * @returns {number}
   */
  getPricingMethod() {
    return this.pricingMethod;
  }

  /**
   * Get Delimiter.
   * @returns {string}
   */
  getDelimiter() {
    return this.delimiter;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {ProductVariantGenerateDelimiter}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {ProductVariantGenerateDelimiter}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {ProductVariantGenerateDelimiter}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Pricing_Method.
   * @param {number} pricingMethod
   * @returns {ProductVariantGenerateDelimiter}
   */
  setPricingMethod(pricingMethod) {
    this.pricingMethod = pricingMethod;
    return this;
  }

  /**
   * Set Delimiter.
   * @param {string} delimiter
   * @returns {ProductVariantGenerateDelimiter}
   */
  setDelimiter(delimiter) {
    this.delimiter = delimiter;
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
    } else if (!util.isNullOrUndefined(this.productCode)) {
      data['Product_Code'] = this.productCode;
    } else if (!util.isNullOrUndefined(this.editProduct)) {
      data['Edit_Product'] = this.editProduct;
    }

    data['Pricing_Method'] = this.pricingMethod;

    if (!util.isNullOrUndefined(this.delimiter)) {
      data['Delimiter'] = this.delimiter;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ProductVariantGenerateDelimiter(this, httpResponse, data);
  }
}

/** 
 * Handles API Request ProductKitList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/productkitlist_load_query
 */
class ProductKitListLoadQuery extends ListQueryRequest {
  /**
   * ProductKitListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client);
    this.function = 'ProductKitList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.availableSearchFields = [
      'product_code',
      'product_name',
      'attr_code',
      'attr_prompt',
      'option_code',
      'option_prompt',
      'attr_code',
      'attr_prompt',
      'option_code',
      'option_prompt'
    ];

    this.productId = null;
    this.productCode = null;
    this.editProduct = null;

    if (util.isInstanceOf(product, models.Product)) {
      if (product.getId()) {
        this.setProductId(product.getId());
      } else if (product.getCode()) {
        this.setEditProduct(product.getCode());
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
   * Set Product_ID.
   * @param {number} productId
   * @returns {ProductKitListLoadQuery}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {ProductKitListLoadQuery}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {ProductKitListLoadQuery}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
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
    } else if (!util.isNullOrUndefined(this.productCode)) {
      data['Product_Code'] = this.productCode;
    } else if (!util.isNullOrUndefined(this.editProduct)) {
      data['Edit_Product'] = this.editProduct;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ProductKitListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request ProductKit_Generate_Variants. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/productkit_generate_variants
 */
class ProductKitGenerateVariants extends Request {
  /**
   * ProductKitGenerateVariants Constructor.
   * @param {?BaseClient} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client);
    this.function = 'ProductKit_Generate_Variants';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productId = null;
    this.productCode = null;
    this.editProduct = null;
    this.pricingMethod = null;

    if (util.isInstanceOf(product, models.Product)) {
      if (product.getId()) {
        this.setProductId(product.getId());
      } else if (product.getCode()) {
        this.setEditProduct(product.getCode());
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
   * Get Pricing_Method.
   * @returns {number}
   */
  getPricingMethod() {
    return this.pricingMethod;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {ProductKitGenerateVariants}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {ProductKitGenerateVariants}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {ProductKitGenerateVariants}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Pricing_Method.
   * @param {number} pricingMethod
   * @returns {ProductKitGenerateVariants}
   */
  setPricingMethod(pricingMethod) {
    this.pricingMethod = pricingMethod;
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
    } else if (!util.isNullOrUndefined(this.productCode)) {
      data['Product_Code'] = this.productCode;
    } else if (!util.isNullOrUndefined(this.editProduct)) {
      data['Edit_Product'] = this.editProduct;
    }

    data['Pricing_Method'] = this.pricingMethod;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ProductKitGenerateVariants(this, httpResponse, data);
  }
}

/** 
 * Handles API Request ProductKit_Update_Parts. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/productkit_update_parts
 */
class ProductKitUpdateParts extends Request {
  /**
   * ProductKitUpdateParts Constructor.
   * @param {?BaseClient} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client);
    this.function = 'ProductKit_Update_Parts';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productId = null;
    this.productCode = null;
    this.editProduct = null;
    this.attributeId = null;
    this.attributeTemplateAttributeId = null;
    this.optionId = null;
    this.parts = [];

    if (util.isInstanceOf(product, models.Product)) {
      if (product.getId()) {
        this.setProductId(product.getId());
      } else if (product.getCode()) {
        this.setEditProduct(product.getCode());
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
   * Get Attribute_ID.
   * @returns {number}
   */
  getAttributeId() {
    return this.attributeId;
  }

  /**
   * Get AttributeTemplateAttribute_ID.
   * @returns {number}
   */
  getAttributeTemplateAttributeId() {
    return this.attributeTemplateAttributeId;
  }

  /**
   * Get Option_ID.
   * @returns {number}
   */
  getOptionId() {
    return this.optionId;
  }

  /**
   * Get Parts.
   * @returns {KitPart[]}
   */
  getParts() {
    return this.parts;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {ProductKitUpdateParts}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {ProductKitUpdateParts}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {ProductKitUpdateParts}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Attribute_ID.
   * @param {number} attributeId
   * @returns {ProductKitUpdateParts}
   */
  setAttributeId(attributeId) {
    this.attributeId = attributeId;
    return this;
  }

  /**
   * Set AttributeTemplateAttribute_ID.
   * @param {number} attributeTemplateAttributeId
   * @returns {ProductKitUpdateParts}
   */
  setAttributeTemplateAttributeId(attributeTemplateAttributeId) {
    this.attributeTemplateAttributeId = attributeTemplateAttributeId;
    return this;
  }

  /**
   * Set Option_ID.
   * @param {number} optionId
   * @returns {ProductKitUpdateParts}
   */
  setOptionId(optionId) {
    this.optionId = optionId;
    return this;
  }

  /**
   * Set Parts.
   * @param {KitPart[]} parts
   * @throws {Error}
   * @returns {ProductKitUpdateParts}
   */
  setParts(parts) {
    var i;
    var l;

    if (!util.isArray(parts)) {
      throw new Error(util.format('Expected an array but got %s', typeof parts));
    }

    for (i = 0, l = parts.length; i < l; i++) {
      if (!util.isInstanceOf(parts[i], models.KitPart) && util.isObject(parts[i])) {
        parts[i] = new models.KitPart(parts[i]);
      } else if (!util.isInstanceOf(parts[i], models.KitPart)) {
        throw new Error(util.format('Expected instance of KitPart or an Object but got %s',
          typeof parts[i]));
      }
    }

    this.parts = parts;
    return this;
  }

  /**
   * Add Parts.
   * @param {KitPart} kitPart
   * @throws {Error}
   * @returns {ProductKitUpdateParts}
   */
  addKitPart(kitPart) {
    if (util.isInstanceOf(kitPart, models.KitPart)) {
      this.parts.push(kitPart);
    } else if (util.isObject(kitPart)) {
      this.parts.push(new models.KitPart(kitPart));
    } else {
      throw new Error(util.format('Expected instance of KitPart or Object but got %s',
        typeof kitPart));
    }

    return this;
  }

  /**
   * Add many KitPart.
   * @param {KitPart[]} parts
   * @throws {Error}
   * @returns {ProductKitUpdateParts}
   */
  addParts(parts) {
    var i;
    var l;

    if (!util.isArray(parts)) {
      throw new Error(util.format('Expecting an array of KitPart but got %s',
        typeof parts));
    }

    for (i = 0, l = parts.length; i < l; i++) {
      if (util.isInstanceOf(parts[i], models.KitPart)) {
        this.parts.push(parts[i]);
      } else if (util.isObject(parts[i])) {
        this.parts.push(new models.KitPart(parts[i]));
      } else {
        throw new Error(util.format('Expected array of KitPart or an array of Object but got %s',
          typeof parts[i]));
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
    }

    if (!util.isNullOrUndefined(this.attributeId)) {
      data['Attribute_ID'] = this.attributeId;
    }

    if (!util.isNullOrUndefined(this.attributeTemplateAttributeId)) {
      data['AttributeTemplateAttribute_ID'] = this.attributeTemplateAttributeId;
    }

    if (!util.isNullOrUndefined(this.optionId)) {
      data['Option_ID'] = this.optionId;
    }

    if (util.isArray(this.parts)) {
      data['Parts'] = [];

      for (i = 0, l = this.parts.length; i < l; i++) {
        data['Parts'].push(this.parts[i].toObject());
      }
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ProductKitUpdateParts(this, httpResponse, data);
  }
}

/** 
 * Handles API Request ProductKit_Variant_Count. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/productkit_variant_count
 */
class ProductKitVariantCount extends Request {
  /**
   * ProductKitVariantCount Constructor.
   * @param {?BaseClient} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client);
    this.function = 'ProductKit_Variant_Count';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productId = null;
    this.productCode = null;
    this.editProduct = null;

    if (util.isInstanceOf(product, models.Product)) {
      if (product.getId()) {
        this.setProductId(product.getId());
      } else if (product.getCode()) {
        this.setProductCode(product.getCode());
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
   * Set Product_ID.
   * @param {number} productId
   * @returns {ProductKitVariantCount}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {ProductKitVariantCount}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {ProductKitVariantCount}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
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
    } else if (!util.isNullOrUndefined(this.productCode)) {
      data['Product_Code'] = this.productCode;
    } else if (!util.isNullOrUndefined(this.editProduct)) {
      data['Edit_Product'] = this.editProduct;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ProductKitVariantCount(this, httpResponse, data);
  }
}

/** 
 * Handles API Request RelatedProduct_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/relatedproduct_update_assigned
 */
class RelatedProductUpdateAssigned extends Request {
  /**
   * RelatedProductUpdateAssigned Constructor.
   * @param {?BaseClient} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client);
    this.function = 'RelatedProduct_Update_Assigned';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productId = null;
    this.productCode = null;
    this.editProduct = null;
    this.relatedProductId = null;
    this.relatedProductCode = null;
    this.editRelatedProduct = null;
    this.assigned = null;

    if (util.isInstanceOf(product, models.Product)) {
      if (product.getId()) {
        this.setProductId(product.getId());
      } else if (product.getCode()) {
        this.setEditProduct(product.getCode());
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
   * Get RelatedProduct_ID.
   * @returns {number}
   */
  getRelatedProductId() {
    return this.relatedProductId;
  }

  /**
   * Get RelatedProduct_Code.
   * @returns {string}
   */
  getRelatedProductCode() {
    return this.relatedProductCode;
  }

  /**
   * Get Edit_RelatedProduct.
   * @returns {string}
   */
  getEditRelatedProduct() {
    return this.editRelatedProduct;
  }

  /**
   * Get Assigned.
   * @returns {boolean}
   */
  getAssigned() {
    return this.assigned;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {RelatedProductUpdateAssigned}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {RelatedProductUpdateAssigned}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {RelatedProductUpdateAssigned}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set RelatedProduct_ID.
   * @param {number} relatedProductId
   * @returns {RelatedProductUpdateAssigned}
   */
  setRelatedProductId(relatedProductId) {
    this.relatedProductId = relatedProductId;
    return this;
  }

  /**
   * Set RelatedProduct_Code.
   * @param {string} relatedProductCode
   * @returns {RelatedProductUpdateAssigned}
   */
  setRelatedProductCode(relatedProductCode) {
    this.relatedProductCode = relatedProductCode;
    return this;
  }

  /**
   * Set Edit_RelatedProduct.
   * @param {string} editRelatedProduct
   * @returns {RelatedProductUpdateAssigned}
   */
  setEditRelatedProduct(editRelatedProduct) {
    this.editRelatedProduct = editRelatedProduct;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {RelatedProductUpdateAssigned}
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

    if (!util.isNullOrUndefined(this.productId)) {
      data['Product_ID'] = this.productId;
    } else if (!util.isNullOrUndefined(this.productCode)) {
      data['Product_Code'] = this.productCode;
    } else if (!util.isNullOrUndefined(this.editProduct)) {
      data['Edit_Product'] = this.editProduct;
    }

    if (!util.isNullOrUndefined(this.relatedProductId)) {
      data['RelatedProduct_ID'] = this.relatedProductId;
    } else if (!util.isNullOrUndefined(this.relatedProductCode)) {
      data['RelatedProduct_Code'] = this.relatedProductCode;
    } else if (!util.isNullOrUndefined(this.editRelatedProduct)) {
      data['Edit_RelatedProduct'] = this.editRelatedProduct;
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
  createResponse(httpResponse, data) {
    return new responses.RelatedProductUpdateAssigned(this, httpResponse, data);
  }
}

/** INVENTORY_CHOICE constants. */
/** @ignore */
const INVENTORY_CHOICE_DEFAULT = 'd';
/** @ignore */
const INVENTORY_CHOICE_YES = 'y';
/** @ignore */
const INVENTORY_CHOICE_NO = 'n';

/** 
 * Handles API Request InventoryProductSettings_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/inventoryproductsettings_update
 */
class InventoryProductSettingsUpdate extends Request {
  /**
   * InventoryProductSettingsUpdate Constructor.
   * @param {?BaseClient} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client);
    this.function = 'InventoryProductSettings_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productId = null;
    this.productCode = null;
    this.editProduct = null;
    this.trackLowStockLevel = null;
    this.trackOutOfStockLevel = null;
    this.hideOutOfStockProducts = null;
    this.lowStockLevel = null;
    this.outOfStockLevel = null;
    this.trackProduct = null;
    this.inStockMessageShort = null;
    this.inStockMessageLong = null;
    this.lowStockMessageShort = null;
    this.lowStockMessageLong = null;
    this.outOfStockMessageShort = null;
    this.outOfStockMessageLong = null;
    this.limitedStockMessage = null;
    this.adjustStockBy = null;
    this.currentStock = null;

    if (util.isInstanceOf(product, models.Product)) {
      if (product.getId()) {
        this.setProductId(product.getId());
      } else if (product.getCode()) {
        this.setEditProduct(product.getCode());
      }
    }
  }

  /**
   * Constant INVENTORY_CHOICE_DEFAULT
   * @returns {string}
   * @const
   * @static
   */
  static get INVENTORY_CHOICE_DEFAULT() {
    return INVENTORY_CHOICE_DEFAULT;
  }

  /**
   * Constant INVENTORY_CHOICE_YES
   * @returns {string}
   * @const
   * @static
   */
  static get INVENTORY_CHOICE_YES() {
    return INVENTORY_CHOICE_YES;
  }

  /**
   * Constant INVENTORY_CHOICE_NO
   * @returns {string}
   * @const
   * @static
   */
  static get INVENTORY_CHOICE_NO() {
    return INVENTORY_CHOICE_NO;
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
   * Get TrackLowStockLevel.
   * @returns {string}
   */
  getTrackLowStockLevel() {
    return this.trackLowStockLevel;
  }

  /**
   * Get TrackOutOfStockLevel.
   * @returns {string}
   */
  getTrackOutOfStockLevel() {
    return this.trackOutOfStockLevel;
  }

  /**
   * Get HideOutOfStockProducts.
   * @returns {string}
   */
  getHideOutOfStockProducts() {
    return this.hideOutOfStockProducts;
  }

  /**
   * Get LowStockLevel.
   * @returns {number}
   */
  getLowStockLevel() {
    return this.lowStockLevel;
  }

  /**
   * Get OutOfStockLevel.
   * @returns {number}
   */
  getOutOfStockLevel() {
    return this.outOfStockLevel;
  }

  /**
   * Get TrackProduct.
   * @returns {boolean}
   */
  getTrackProduct() {
    return this.trackProduct;
  }

  /**
   * Get InStockMessageShort.
   * @returns {string}
   */
  getInStockMessageShort() {
    return this.inStockMessageShort;
  }

  /**
   * Get InStockMessageLong.
   * @returns {string}
   */
  getInStockMessageLong() {
    return this.inStockMessageLong;
  }

  /**
   * Get LowStockMessageShort.
   * @returns {string}
   */
  getLowStockMessageShort() {
    return this.lowStockMessageShort;
  }

  /**
   * Get LowStockMessageLong.
   * @returns {string}
   */
  getLowStockMessageLong() {
    return this.lowStockMessageLong;
  }

  /**
   * Get OutOfStockMessageShort.
   * @returns {string}
   */
  getOutOfStockMessageShort() {
    return this.outOfStockMessageShort;
  }

  /**
   * Get OutOfStockMessageLong.
   * @returns {string}
   */
  getOutOfStockMessageLong() {
    return this.outOfStockMessageLong;
  }

  /**
   * Get LimitedStockMessage.
   * @returns {string}
   */
  getLimitedStockMessage() {
    return this.limitedStockMessage;
  }

  /**
   * Get AdjustStockBy.
   * @returns {number}
   */
  getAdjustStockBy() {
    return this.adjustStockBy;
  }

  /**
   * Get CurrentStock.
   * @returns {number}
   */
  getCurrentStock() {
    return this.currentStock;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {InventoryProductSettingsUpdate}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {InventoryProductSettingsUpdate}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {InventoryProductSettingsUpdate}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set TrackLowStockLevel.
   * @param {string} trackLowStockLevel
   * @returns {InventoryProductSettingsUpdate}
   */
  setTrackLowStockLevel(trackLowStockLevel) {
    this.trackLowStockLevel = trackLowStockLevel;
    return this;
  }

  /**
   * Set TrackOutOfStockLevel.
   * @param {string} trackOutOfStockLevel
   * @returns {InventoryProductSettingsUpdate}
   */
  setTrackOutOfStockLevel(trackOutOfStockLevel) {
    this.trackOutOfStockLevel = trackOutOfStockLevel;
    return this;
  }

  /**
   * Set HideOutOfStockProducts.
   * @param {string} hideOutOfStockProducts
   * @returns {InventoryProductSettingsUpdate}
   */
  setHideOutOfStockProducts(hideOutOfStockProducts) {
    this.hideOutOfStockProducts = hideOutOfStockProducts;
    return this;
  }

  /**
   * Set LowStockLevel.
   * @param {number} lowStockLevel
   * @returns {InventoryProductSettingsUpdate}
   */
  setLowStockLevel(lowStockLevel) {
    this.lowStockLevel = lowStockLevel;
    return this;
  }

  /**
   * Set OutOfStockLevel.
   * @param {number} outOfStockLevel
   * @returns {InventoryProductSettingsUpdate}
   */
  setOutOfStockLevel(outOfStockLevel) {
    this.outOfStockLevel = outOfStockLevel;
    return this;
  }

  /**
   * Set TrackProduct.
   * @param {boolean} trackProduct
   * @returns {InventoryProductSettingsUpdate}
   */
  setTrackProduct(trackProduct) {
    this.trackProduct = trackProduct;
    return this;
  }

  /**
   * Set InStockMessageShort.
   * @param {string} inStockMessageShort
   * @returns {InventoryProductSettingsUpdate}
   */
  setInStockMessageShort(inStockMessageShort) {
    this.inStockMessageShort = inStockMessageShort;
    return this;
  }

  /**
   * Set InStockMessageLong.
   * @param {string} inStockMessageLong
   * @returns {InventoryProductSettingsUpdate}
   */
  setInStockMessageLong(inStockMessageLong) {
    this.inStockMessageLong = inStockMessageLong;
    return this;
  }

  /**
   * Set LowStockMessageShort.
   * @param {string} lowStockMessageShort
   * @returns {InventoryProductSettingsUpdate}
   */
  setLowStockMessageShort(lowStockMessageShort) {
    this.lowStockMessageShort = lowStockMessageShort;
    return this;
  }

  /**
   * Set LowStockMessageLong.
   * @param {string} lowStockMessageLong
   * @returns {InventoryProductSettingsUpdate}
   */
  setLowStockMessageLong(lowStockMessageLong) {
    this.lowStockMessageLong = lowStockMessageLong;
    return this;
  }

  /**
   * Set OutOfStockMessageShort.
   * @param {string} outOfStockMessageShort
   * @returns {InventoryProductSettingsUpdate}
   */
  setOutOfStockMessageShort(outOfStockMessageShort) {
    this.outOfStockMessageShort = outOfStockMessageShort;
    return this;
  }

  /**
   * Set OutOfStockMessageLong.
   * @param {string} outOfStockMessageLong
   * @returns {InventoryProductSettingsUpdate}
   */
  setOutOfStockMessageLong(outOfStockMessageLong) {
    this.outOfStockMessageLong = outOfStockMessageLong;
    return this;
  }

  /**
   * Set LimitedStockMessage.
   * @param {string} limitedStockMessage
   * @returns {InventoryProductSettingsUpdate}
   */
  setLimitedStockMessage(limitedStockMessage) {
    this.limitedStockMessage = limitedStockMessage;
    return this;
  }

  /**
   * Set AdjustStockBy.
   * @param {number} adjustStockBy
   * @returns {InventoryProductSettingsUpdate}
   */
  setAdjustStockBy(adjustStockBy) {
    this.adjustStockBy = adjustStockBy;
    return this;
  }

  /**
   * Set CurrentStock.
   * @param {number} currentStock
   * @returns {InventoryProductSettingsUpdate}
   */
  setCurrentStock(currentStock) {
    this.currentStock = currentStock;
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
    } else if (!util.isNullOrUndefined(this.productCode)) {
      data['Product_Code'] = this.productCode;
    } else if (!util.isNullOrUndefined(this.editProduct)) {
      data['Edit_Product'] = this.editProduct;
    }

    if (!util.isNullOrUndefined(this.trackLowStockLevel)) {
      data['TrackLowStockLevel'] = this.trackLowStockLevel;
    }

    if (!util.isNullOrUndefined(this.trackOutOfStockLevel)) {
      data['TrackOutOfStockLevel'] = this.trackOutOfStockLevel;
    }

    if (!util.isNullOrUndefined(this.hideOutOfStockProducts)) {
      data['HideOutOfStockProducts'] = this.hideOutOfStockProducts;
    }

    if (!util.isNullOrUndefined(this.lowStockLevel)) {
      data['LowStockLevel'] = this.lowStockLevel;
    }

    if (!util.isNullOrUndefined(this.outOfStockLevel)) {
      data['OutOfStockLevel'] = this.outOfStockLevel;
    }

    if (!util.isNullOrUndefined(this.trackProduct)) {
      data['TrackProduct'] = this.trackProduct;
    }

    if (!util.isNullOrUndefined(this.inStockMessageShort)) {
      data['InStockMessageShort'] = this.inStockMessageShort;
    }

    if (!util.isNullOrUndefined(this.inStockMessageLong)) {
      data['InStockMessageLong'] = this.inStockMessageLong;
    }

    if (!util.isNullOrUndefined(this.lowStockMessageShort)) {
      data['LowStockMessageShort'] = this.lowStockMessageShort;
    }

    if (!util.isNullOrUndefined(this.lowStockMessageLong)) {
      data['LowStockMessageLong'] = this.lowStockMessageLong;
    }

    if (!util.isNullOrUndefined(this.outOfStockMessageShort)) {
      data['OutOfStockMessageShort'] = this.outOfStockMessageShort;
    }

    if (!util.isNullOrUndefined(this.outOfStockMessageLong)) {
      data['OutOfStockMessageLong'] = this.outOfStockMessageLong;
    }

    if (!util.isNullOrUndefined(this.limitedStockMessage)) {
      data['LimitedStockMessage'] = this.limitedStockMessage;
    }

    if (!util.isNullOrUndefined(this.adjustStockBy)) {
      data['AdjustStockBy'] = this.adjustStockBy;
    }

    if (!util.isNullOrUndefined(this.currentStock)) {
      data['CurrentStock'] = this.currentStock;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.InventoryProductSettingsUpdate(this, httpResponse, data);
  }
}

/** 
 * Handles API Request ProductVariantList_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/productvariantlist_delete
 */
class ProductVariantListDelete extends Request {
  /**
   * ProductVariantListDelete Constructor.
   * @param {?BaseClient} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client);
    this.function = 'ProductVariantList_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productId = null;
    this.productCode = null;
    this.editProduct = null;
    this.productVariantIds = [];

    if (util.isInstanceOf(product, models.Product)) {
      if (product.getId()) {
        this.setProductId(product.getId());
      } else if (product.getCode()) {
        this.setEditProduct(product.getCode());
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
   * Get ProductVariant_IDs.
   * @returns {Array}
   */
  getProductVariantIds() {
    return this.productVariantIds;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {ProductVariantListDelete}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {ProductVariantListDelete}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {ProductVariantListDelete}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Add ProductVariant_IDs.
   * @param {number} variantId
   * @returns {ProductVariantListDelete}
   */
  addVariantId(variantId) {
    this.productVariantIds.push(variantId);
    return this;
  }

  /**
   * Add ProductVariant model.
   * @param {ProductVariant} productVariant
   * @throws {Error}
   * @returns {ProductVariantListDelete}
   */
  addProductVariant(productVariant) {
    if (!util.isInstanceOf(productVariant, models.ProductVariant)) {
      throw new Error(util.format('Expected instance of ProductVariant but got %s',
        typeof productVariant));
    }

    if (productVariant.getVariantId()) {
      this.productVariantIds.push(productVariant.getVariantId());
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

    if (!util.isNullOrUndefined(this.productId)) {
      data['Product_ID'] = this.productId;
    } else if (!util.isNullOrUndefined(this.productCode)) {
      data['Product_Code'] = this.productCode;
    } else if (!util.isNullOrUndefined(this.editProduct)) {
      data['Edit_Product'] = this.editProduct;
    }

    data['ProductVariant_IDs'] = this.productVariantIds;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ProductVariantListDelete(this, httpResponse, data);
  }
}

/** 
 * Handles API Request ImageTypeList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/imagetypelist_load_query
 */
class ImageTypeListLoadQuery extends ListQueryRequest {
  /**
   * ImageTypeListLoadQuery Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'ImageTypeList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.availableSearchFields = [
      'code',
      'descrip'
    ];

  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ImageTypeListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request ProductImage_Update_Type. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/productimage_update_type
 */
class ProductImageUpdateType extends Request {
  /**
   * ProductImageUpdateType Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'ProductImage_Update_Type';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productImageId = null;
    this.imageTypeId = null;
  }

  /**
   * Get ProductImage_ID.
   * @returns {number}
   */
  getProductImageId() {
    return this.productImageId;
  }

  /**
   * Get ImageType_ID.
   * @returns {number}
   */
  getImageTypeId() {
    return this.imageTypeId;
  }

  /**
   * Set ProductImage_ID.
   * @param {number} productImageId
   * @returns {ProductImageUpdateType}
   */
  setProductImageId(productImageId) {
    this.productImageId = productImageId;
    return this;
  }

  /**
   * Set ImageType_ID.
   * @param {number} imageTypeId
   * @returns {ProductImageUpdateType}
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

    data['ProductImage_ID'] = this.productImageId;

    if (!util.isNullOrUndefined(this.imageTypeId)) {
      data['ImageType_ID'] = this.imageTypeId;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ProductImageUpdateType(this, httpResponse, data);
  }
}

/** 
 * Handles API Request AttributeTemplateList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/attributetemplatelist_load_query
 */
class AttributeTemplateListLoadQuery extends ListQueryRequest {
  /**
   * AttributeTemplateListLoadQuery Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'AttributeTemplateList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'code',
      'prompt',
      'refcount'
    ];

    this.availableSortFields = [
      'id',
      'code',
      'prompt',
      'refcount'
    ];
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.AttributeTemplateListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request AttributeTemplateAttributeList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/attributetemplateattributelist_load_query
 */
class AttributeTemplateAttributeListLoadQuery extends ListQueryRequest {
  /**
   * AttributeTemplateAttributeListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?AttributeTemplate} attributeTemplate
   */
  constructor(client, attributeTemplate = null) {
    super(client);
    this.function = 'AttributeTemplateAttributeList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'attr_code',
      'attr_prompt',
      'attr_price',
      'attr_cost',
      'attr_weight',
      'attr_image',
      'opt_code',
      'opt_prompt',
      'opt_price',
      'opt_cost',
      'opt_weight',
      'opt_image',
      'code',
      'prompt',
      'price',
      'cost',
      'weight',
      'image',
      'required',
      'inventory'
    ];

    this.availableSortFields = [
      'id',
      'code',
      'type',
      'prompt',
      'price',
      'cost',
      'weight',
      'image',
      'required',
      'inventory',
      'attr_code',
      'attr_prompt',
      'attr_price',
      'attr_cost',
      'attr_weight',
      'attr_image',
      'opt_code',
      'opt_prompt',
      'opt_price',
      'opt_cost',
      'opt_weight',
      'opt_image'
    ];

    this.attributeTemplateId = null;
    this.attributeTemplateCode = null;
    this.editAttributeTemplate = null;

    if (util.isInstanceOf(attributeTemplate, models.AttributeTemplate)) {
      if (attributeTemplate.getId()) {
        this.setAttributeTemplateId(attributeTemplate.getId());
      } else if (attributeTemplate.getCode()) {
        this.setAttributeTemplateCode(attributeTemplate.getCode());
      } else if (attributeTemplate.getCode()) {
        this.setEditAttributeTemplate(attributeTemplate.getCode());
      }
    }
  }

  /**
   * Get AttributeTemplate_ID.
   * @returns {number}
   */
  getAttributeTemplateId() {
    return this.attributeTemplateId;
  }

  /**
   * Get AttributeTemplate_Code.
   * @returns {string}
   */
  getAttributeTemplateCode() {
    return this.attributeTemplateCode;
  }

  /**
   * Get Edit_AttributeTemplate.
   * @returns {string}
   */
  getEditAttributeTemplate() {
    return this.editAttributeTemplate;
  }

  /**
   * Set AttributeTemplate_ID.
   * @param {number} attributeTemplateId
   * @returns {AttributeTemplateAttributeListLoadQuery}
   */
  setAttributeTemplateId(attributeTemplateId) {
    this.attributeTemplateId = attributeTemplateId;
    return this;
  }

  /**
   * Set AttributeTemplate_Code.
   * @param {string} attributeTemplateCode
   * @returns {AttributeTemplateAttributeListLoadQuery}
   */
  setAttributeTemplateCode(attributeTemplateCode) {
    this.attributeTemplateCode = attributeTemplateCode;
    return this;
  }

  /**
   * Set Edit_AttributeTemplate.
   * @param {string} editAttributeTemplate
   * @returns {AttributeTemplateAttributeListLoadQuery}
   */
  setEditAttributeTemplate(editAttributeTemplate) {
    this.editAttributeTemplate = editAttributeTemplate;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.attributeTemplateId)) {
      data['AttributeTemplate_ID'] = this.attributeTemplateId;
    } else if (!util.isNullOrUndefined(this.attributeTemplateCode)) {
      data['AttributeTemplate_Code'] = this.attributeTemplateCode;
    } else if (!util.isNullOrUndefined(this.editAttributeTemplate)) {
      data['Edit_AttributeTemplate'] = this.editAttributeTemplate;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.AttributeTemplateAttributeListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request AttributeTemplateOptionList_Load_Attribute. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/attributetemplateoptionlist_load_attribute
 */
class AttributeTemplateOptionListLoadAttribute extends ListQueryRequest {
  /**
   * AttributeTemplateOptionListLoadAttribute Constructor.
   * @param {?BaseClient} client
   * @param {?AttributeTemplateAttribute} attributeTemplateAttribute
   */
  constructor(client, attributeTemplateAttribute = null) {
    super(client);
    this.function = 'AttributeTemplateOptionList_Load_Attribute';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.attributeTemplateId = null;
    this.attributeTemplateCode = null;
    this.editAttributeTemplate = null;
    this.attributeTemplateAttributeId = null;
    this.attributeTemplateAttributeCode = null;
    this.editAttributeTemplateAttribute = null;

    if (util.isInstanceOf(attributeTemplateAttribute, models.AttributeTemplateAttribute)) {
      if (attributeTemplateAttribute.getId()) {
        this.setAttributeTemplateAttributeId(attributeTemplateAttribute.getId());
      }
    }
  }

  /**
   * Get AttributeTemplate_ID.
   * @returns {number}
   */
  getAttributeTemplateId() {
    return this.attributeTemplateId;
  }

  /**
   * Get AttributeTemplate_Code.
   * @returns {string}
   */
  getAttributeTemplateCode() {
    return this.attributeTemplateCode;
  }

  /**
   * Get Edit_AttributeTemplate.
   * @returns {string}
   */
  getEditAttributeTemplate() {
    return this.editAttributeTemplate;
  }

  /**
   * Get AttributeTemplateAttribute_ID.
   * @returns {number}
   */
  getAttributeTemplateAttributeId() {
    return this.attributeTemplateAttributeId;
  }

  /**
   * Get AttributeTemplateAttribute_Code.
   * @returns {string}
   */
  getAttributeTemplateAttributeCode() {
    return this.attributeTemplateAttributeCode;
  }

  /**
   * Get Edit_AttributeTemplateAttribute.
   * @returns {string}
   */
  getEditAttributeTemplateAttribute() {
    return this.editAttributeTemplateAttribute;
  }

  /**
   * Set AttributeTemplate_ID.
   * @param {number} attributeTemplateId
   * @returns {AttributeTemplateOptionListLoadAttribute}
   */
  setAttributeTemplateId(attributeTemplateId) {
    this.attributeTemplateId = attributeTemplateId;
    return this;
  }

  /**
   * Set AttributeTemplate_Code.
   * @param {string} attributeTemplateCode
   * @returns {AttributeTemplateOptionListLoadAttribute}
   */
  setAttributeTemplateCode(attributeTemplateCode) {
    this.attributeTemplateCode = attributeTemplateCode;
    return this;
  }

  /**
   * Set Edit_AttributeTemplate.
   * @param {string} editAttributeTemplate
   * @returns {AttributeTemplateOptionListLoadAttribute}
   */
  setEditAttributeTemplate(editAttributeTemplate) {
    this.editAttributeTemplate = editAttributeTemplate;
    return this;
  }

  /**
   * Set AttributeTemplateAttribute_ID.
   * @param {number} attributeTemplateAttributeId
   * @returns {AttributeTemplateOptionListLoadAttribute}
   */
  setAttributeTemplateAttributeId(attributeTemplateAttributeId) {
    this.attributeTemplateAttributeId = attributeTemplateAttributeId;
    return this;
  }

  /**
   * Set AttributeTemplateAttribute_Code.
   * @param {string} attributeTemplateAttributeCode
   * @returns {AttributeTemplateOptionListLoadAttribute}
   */
  setAttributeTemplateAttributeCode(attributeTemplateAttributeCode) {
    this.attributeTemplateAttributeCode = attributeTemplateAttributeCode;
    return this;
  }

  /**
   * Set Edit_AttributeTemplateAttribute.
   * @param {string} editAttributeTemplateAttribute
   * @returns {AttributeTemplateOptionListLoadAttribute}
   */
  setEditAttributeTemplateAttribute(editAttributeTemplateAttribute) {
    this.editAttributeTemplateAttribute = editAttributeTemplateAttribute;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.attributeTemplateId)) {
      data['AttributeTemplate_ID'] = this.attributeTemplateId;
    } else if (!util.isNullOrUndefined(this.attributeTemplateCode)) {
      data['AttributeTemplate_Code'] = this.attributeTemplateCode;
    } else if (!util.isNullOrUndefined(this.editAttributeTemplate)) {
      data['Edit_AttributeTemplate'] = this.editAttributeTemplate;
    }

    if (!util.isNullOrUndefined(this.attributeTemplateAttributeId)) {
      data['AttributeTemplateAttribute_ID'] = this.attributeTemplateAttributeId;
    } else if (!util.isNullOrUndefined(this.attributeTemplateAttributeCode)) {
      data['AttributeTemplateAttribute_Code'] = this.attributeTemplateAttributeCode;
    } else if (!util.isNullOrUndefined(this.editAttributeTemplateAttribute)) {
      data['Edit_AttributeTemplateAttribute'] = this.editAttributeTemplateAttribute;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.AttributeTemplateOptionListLoadAttribute(this, httpResponse, data);
  }
}

/** 
 * Handles API Request AttributeTemplateAttribute_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/attributetemplateattribute_delete
 */
class AttributeTemplateAttributeDelete extends Request {
  /**
   * AttributeTemplateAttributeDelete Constructor.
   * @param {?BaseClient} client
   * @param {?AttributeTemplateAttribute} attributeTemplateAttribute
   */
  constructor(client, attributeTemplateAttribute = null) {
    super(client);
    this.function = 'AttributeTemplateAttribute_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.attributeTemplateId = null;
    this.attributeTemplateCode = null;
    this.editAttributeTemplate = null;
    this.attributeTemplateAttributeId = null;
    this.attributeTemplateAttributeCode = null;
    this.editAttributeTemplateAttribute = null;

    if (util.isInstanceOf(attributeTemplateAttribute, models.AttributeTemplateAttribute)) {
      if (attributeTemplateAttribute.getId()) {
        this.setAttributeTemplateAttributeId(attributeTemplateAttribute.getId());
      }
    }
  }

  /**
   * Get AttributeTemplate_ID.
   * @returns {number}
   */
  getAttributeTemplateId() {
    return this.attributeTemplateId;
  }

  /**
   * Get AttributeTemplate_Code.
   * @returns {string}
   */
  getAttributeTemplateCode() {
    return this.attributeTemplateCode;
  }

  /**
   * Get Edit_AttributeTemplate.
   * @returns {string}
   */
  getEditAttributeTemplate() {
    return this.editAttributeTemplate;
  }

  /**
   * Get AttributeTemplateAttribute_ID.
   * @returns {number}
   */
  getAttributeTemplateAttributeId() {
    return this.attributeTemplateAttributeId;
  }

  /**
   * Get AttributeTemplateAttribute_Code.
   * @returns {string}
   */
  getAttributeTemplateAttributeCode() {
    return this.attributeTemplateAttributeCode;
  }

  /**
   * Get Edit_AttributeTemplateAttribute.
   * @returns {string}
   */
  getEditAttributeTemplateAttribute() {
    return this.editAttributeTemplateAttribute;
  }

  /**
   * Set AttributeTemplate_ID.
   * @param {number} attributeTemplateId
   * @returns {AttributeTemplateAttributeDelete}
   */
  setAttributeTemplateId(attributeTemplateId) {
    this.attributeTemplateId = attributeTemplateId;
    return this;
  }

  /**
   * Set AttributeTemplate_Code.
   * @param {string} attributeTemplateCode
   * @returns {AttributeTemplateAttributeDelete}
   */
  setAttributeTemplateCode(attributeTemplateCode) {
    this.attributeTemplateCode = attributeTemplateCode;
    return this;
  }

  /**
   * Set Edit_AttributeTemplate.
   * @param {string} editAttributeTemplate
   * @returns {AttributeTemplateAttributeDelete}
   */
  setEditAttributeTemplate(editAttributeTemplate) {
    this.editAttributeTemplate = editAttributeTemplate;
    return this;
  }

  /**
   * Set AttributeTemplateAttribute_ID.
   * @param {number} attributeTemplateAttributeId
   * @returns {AttributeTemplateAttributeDelete}
   */
  setAttributeTemplateAttributeId(attributeTemplateAttributeId) {
    this.attributeTemplateAttributeId = attributeTemplateAttributeId;
    return this;
  }

  /**
   * Set AttributeTemplateAttribute_Code.
   * @param {string} attributeTemplateAttributeCode
   * @returns {AttributeTemplateAttributeDelete}
   */
  setAttributeTemplateAttributeCode(attributeTemplateAttributeCode) {
    this.attributeTemplateAttributeCode = attributeTemplateAttributeCode;
    return this;
  }

  /**
   * Set Edit_AttributeTemplateAttribute.
   * @param {string} editAttributeTemplateAttribute
   * @returns {AttributeTemplateAttributeDelete}
   */
  setEditAttributeTemplateAttribute(editAttributeTemplateAttribute) {
    this.editAttributeTemplateAttribute = editAttributeTemplateAttribute;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.attributeTemplateId)) {
      data['AttributeTemplate_ID'] = this.attributeTemplateId;
    } else if (!util.isNullOrUndefined(this.attributeTemplateCode)) {
      data['AttributeTemplate_Code'] = this.attributeTemplateCode;
    } else if (!util.isNullOrUndefined(this.editAttributeTemplate)) {
      data['Edit_AttributeTemplate'] = this.editAttributeTemplate;
    }

    if (!util.isNullOrUndefined(this.attributeTemplateAttributeId)) {
      data['AttributeTemplateAttribute_ID'] = this.attributeTemplateAttributeId;
    } else if (!util.isNullOrUndefined(this.attributeTemplateAttributeCode)) {
      data['AttributeTemplateAttribute_Code'] = this.attributeTemplateAttributeCode;
    } else if (!util.isNullOrUndefined(this.editAttributeTemplateAttribute)) {
      data['Edit_AttributeTemplateAttribute'] = this.editAttributeTemplateAttribute;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.AttributeTemplateAttributeDelete(this, httpResponse, data);
  }
}

/** 
 * Handles API Request AttributeTemplateAttribute_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/attributetemplateattribute_insert
 */
class AttributeTemplateAttributeInsert extends Request {
  /**
   * AttributeTemplateAttributeInsert Constructor.
   * @param {?BaseClient} client
   * @param {?AttributeTemplate} attributeTemplate
   */
  constructor(client, attributeTemplate = null) {
    super(client);
    this.function = 'AttributeTemplateAttribute_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.attributeTemplateId = null;
    this.attributeTemplateCode = null;
    this.editAttributeTemplate = null;
    this.code = null;
    this.prompt = null;
    this.type = null;
    this.image = null;
    this.price = null;
    this.cost = null;
    this.weight = null;
    this.copy = null;
    this.required = null;
    this.inventory = null;

    if (util.isInstanceOf(attributeTemplate, models.AttributeTemplate)) {
      if (attributeTemplate.getId()) {
        this.setAttributeTemplateId(attributeTemplate.getId());
      } else if (attributeTemplate.getCode()) {
        this.setAttributeTemplateCode(attributeTemplate.getCode());
      } else if (attributeTemplate.getCode()) {
        this.setEditAttributeTemplate(attributeTemplate.getCode());
      }
    }
  }

  /**
   * Get AttributeTemplate_ID.
   * @returns {number}
   */
  getAttributeTemplateId() {
    return this.attributeTemplateId;
  }

  /**
   * Get AttributeTemplate_Code.
   * @returns {string}
   */
  getAttributeTemplateCode() {
    return this.attributeTemplateCode;
  }

  /**
   * Get Edit_AttributeTemplate.
   * @returns {string}
   */
  getEditAttributeTemplate() {
    return this.editAttributeTemplate;
  }

  /**
   * Get Code.
   * @returns {string}
   */
  getCode() {
    return this.code;
  }

  /**
   * Get Prompt.
   * @returns {string}
   */
  getPrompt() {
    return this.prompt;
  }

  /**
   * Get Type.
   * @returns {string}
   */
  getType() {
    return this.type;
  }

  /**
   * Get Image.
   * @returns {string}
   */
  getImage() {
    return this.image;
  }

  /**
   * Get Price.
   * @returns {number}
   */
  getPrice() {
    return this.price;
  }

  /**
   * Get Cost.
   * @returns {number}
   */
  getCost() {
    return this.cost;
  }

  /**
   * Get Weight.
   * @returns {number}
   */
  getWeight() {
    return this.weight;
  }

  /**
   * Get Copy.
   * @returns {boolean}
   */
  getCopy() {
    return this.copy;
  }

  /**
   * Get Required.
   * @returns {boolean}
   */
  getRequired() {
    return this.required;
  }

  /**
   * Get Inventory.
   * @returns {boolean}
   */
  getInventory() {
    return this.inventory;
  }

  /**
   * Set AttributeTemplate_ID.
   * @param {number} attributeTemplateId
   * @returns {AttributeTemplateAttributeInsert}
   */
  setAttributeTemplateId(attributeTemplateId) {
    this.attributeTemplateId = attributeTemplateId;
    return this;
  }

  /**
   * Set AttributeTemplate_Code.
   * @param {string} attributeTemplateCode
   * @returns {AttributeTemplateAttributeInsert}
   */
  setAttributeTemplateCode(attributeTemplateCode) {
    this.attributeTemplateCode = attributeTemplateCode;
    return this;
  }

  /**
   * Set Edit_AttributeTemplate.
   * @param {string} editAttributeTemplate
   * @returns {AttributeTemplateAttributeInsert}
   */
  setEditAttributeTemplate(editAttributeTemplate) {
    this.editAttributeTemplate = editAttributeTemplate;
    return this;
  }

  /**
   * Set Code.
   * @param {string} code
   * @returns {AttributeTemplateAttributeInsert}
   */
  setCode(code) {
    this.code = code;
    return this;
  }

  /**
   * Set Prompt.
   * @param {string} prompt
   * @returns {AttributeTemplateAttributeInsert}
   */
  setPrompt(prompt) {
    this.prompt = prompt;
    return this;
  }

  /**
   * Set Type.
   * @param {string} type
   * @returns {AttributeTemplateAttributeInsert}
   */
  setType(type) {
    this.type = type;
    return this;
  }

  /**
   * Set Image.
   * @param {string} image
   * @returns {AttributeTemplateAttributeInsert}
   */
  setImage(image) {
    this.image = image;
    return this;
  }

  /**
   * Set Price.
   * @param {number} price
   * @returns {AttributeTemplateAttributeInsert}
   */
  setPrice(price) {
    this.price = price;
    return this;
  }

  /**
   * Set Cost.
   * @param {number} cost
   * @returns {AttributeTemplateAttributeInsert}
   */
  setCost(cost) {
    this.cost = cost;
    return this;
  }

  /**
   * Set Weight.
   * @param {number} weight
   * @returns {AttributeTemplateAttributeInsert}
   */
  setWeight(weight) {
    this.weight = weight;
    return this;
  }

  /**
   * Set Copy.
   * @param {boolean} copy
   * @returns {AttributeTemplateAttributeInsert}
   */
  setCopy(copy) {
    this.copy = copy;
    return this;
  }

  /**
   * Set Required.
   * @param {boolean} required
   * @returns {AttributeTemplateAttributeInsert}
   */
  setRequired(required) {
    this.required = required;
    return this;
  }

  /**
   * Set Inventory.
   * @param {boolean} inventory
   * @returns {AttributeTemplateAttributeInsert}
   */
  setInventory(inventory) {
    this.inventory = inventory;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.attributeTemplateId)) {
      data['AttributeTemplate_ID'] = this.attributeTemplateId;
    } else if (!util.isNullOrUndefined(this.attributeTemplateCode)) {
      data['AttributeTemplate_Code'] = this.attributeTemplateCode;
    } else if (!util.isNullOrUndefined(this.editAttributeTemplate)) {
      data['Edit_AttributeTemplate'] = this.editAttributeTemplate;
    }

    data['Code'] = this.code;

    if (!util.isNullOrUndefined(this.prompt)) {
      data['Prompt'] = this.prompt;
    }

    data['Type'] = this.type;

    if (!util.isNullOrUndefined(this.image)) {
      data['Image'] = this.image;
    }

    if (!util.isNullOrUndefined(this.price)) {
      data['Price'] = this.price;
    }

    if (!util.isNullOrUndefined(this.cost)) {
      data['Cost'] = this.cost;
    }

    if (!util.isNullOrUndefined(this.weight)) {
      data['Weight'] = this.weight;
    }

    if (!util.isNullOrUndefined(this.copy)) {
      data['Copy'] = this.copy;
    }

    if (!util.isNullOrUndefined(this.required)) {
      data['Required'] = this.required;
    }

    if (!util.isNullOrUndefined(this.inventory)) {
      data['Inventory'] = this.inventory;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.AttributeTemplateAttributeInsert(this, httpResponse, data);
  }
}

/** 
 * Handles API Request AttributeTemplateAttribute_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/attributetemplateattribute_update
 */
class AttributeTemplateAttributeUpdate extends Request {
  /**
   * AttributeTemplateAttributeUpdate Constructor.
   * @param {?BaseClient} client
   * @param {?AttributeTemplateAttribute} attributeTemplateAttribute
   */
  constructor(client, attributeTemplateAttribute = null) {
    super(client);
    this.function = 'AttributeTemplateAttribute_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.attributeTemplateId = null;
    this.attributeTemplateCode = null;
    this.editAttributeTemplate = null;
    this.attributeTemplateAttributeId = null;
    this.attributeTemplateAttributeCode = null;
    this.editAttributeTemplateAttribute = null;
    this.code = null;
    this.prompt = null;
    this.type = null;
    this.image = null;
    this.price = null;
    this.cost = null;
    this.weight = null;
    this.copy = null;
    this.required = null;
    this.inventory = null;

    if (util.isInstanceOf(attributeTemplateAttribute, models.AttributeTemplateAttribute)) {
      if (attributeTemplateAttribute.getId()) {
        this.setAttributeTemplateAttributeId(attributeTemplateAttribute.getId());
      } else if (attributeTemplateAttribute.getCode()) {
        this.setAttributeTemplateAttributeCode(attributeTemplateAttribute.getCode());
      } else if (attributeTemplateAttribute.getCode()) {
        this.setEditAttributeTemplateAttribute(attributeTemplateAttribute.getCode());
      }
    }
  }

  /**
   * Get AttributeTemplate_ID.
   * @returns {number}
   */
  getAttributeTemplateId() {
    return this.attributeTemplateId;
  }

  /**
   * Get AttributeTemplate_Code.
   * @returns {string}
   */
  getAttributeTemplateCode() {
    return this.attributeTemplateCode;
  }

  /**
   * Get Edit_AttributeTemplate.
   * @returns {string}
   */
  getEditAttributeTemplate() {
    return this.editAttributeTemplate;
  }

  /**
   * Get AttributeTemplateAttribute_ID.
   * @returns {number}
   */
  getAttributeTemplateAttributeId() {
    return this.attributeTemplateAttributeId;
  }

  /**
   * Get AttributeTemplateAttribute_Code.
   * @returns {string}
   */
  getAttributeTemplateAttributeCode() {
    return this.attributeTemplateAttributeCode;
  }

  /**
   * Get Edit_AttributeTemplateAttribute.
   * @returns {string}
   */
  getEditAttributeTemplateAttribute() {
    return this.editAttributeTemplateAttribute;
  }

  /**
   * Get Code.
   * @returns {string}
   */
  getCode() {
    return this.code;
  }

  /**
   * Get Prompt.
   * @returns {string}
   */
  getPrompt() {
    return this.prompt;
  }

  /**
   * Get Type.
   * @returns {string}
   */
  getType() {
    return this.type;
  }

  /**
   * Get Image.
   * @returns {string}
   */
  getImage() {
    return this.image;
  }

  /**
   * Get Price.
   * @returns {number}
   */
  getPrice() {
    return this.price;
  }

  /**
   * Get Cost.
   * @returns {number}
   */
  getCost() {
    return this.cost;
  }

  /**
   * Get Weight.
   * @returns {number}
   */
  getWeight() {
    return this.weight;
  }

  /**
   * Get Copy.
   * @returns {boolean}
   */
  getCopy() {
    return this.copy;
  }

  /**
   * Get Required.
   * @returns {boolean}
   */
  getRequired() {
    return this.required;
  }

  /**
   * Get Inventory.
   * @returns {boolean}
   */
  getInventory() {
    return this.inventory;
  }

  /**
   * Set AttributeTemplate_ID.
   * @param {number} attributeTemplateId
   * @returns {AttributeTemplateAttributeUpdate}
   */
  setAttributeTemplateId(attributeTemplateId) {
    this.attributeTemplateId = attributeTemplateId;
    return this;
  }

  /**
   * Set AttributeTemplate_Code.
   * @param {string} attributeTemplateCode
   * @returns {AttributeTemplateAttributeUpdate}
   */
  setAttributeTemplateCode(attributeTemplateCode) {
    this.attributeTemplateCode = attributeTemplateCode;
    return this;
  }

  /**
   * Set Edit_AttributeTemplate.
   * @param {string} editAttributeTemplate
   * @returns {AttributeTemplateAttributeUpdate}
   */
  setEditAttributeTemplate(editAttributeTemplate) {
    this.editAttributeTemplate = editAttributeTemplate;
    return this;
  }

  /**
   * Set AttributeTemplateAttribute_ID.
   * @param {number} attributeTemplateAttributeId
   * @returns {AttributeTemplateAttributeUpdate}
   */
  setAttributeTemplateAttributeId(attributeTemplateAttributeId) {
    this.attributeTemplateAttributeId = attributeTemplateAttributeId;
    return this;
  }

  /**
   * Set AttributeTemplateAttribute_Code.
   * @param {string} attributeTemplateAttributeCode
   * @returns {AttributeTemplateAttributeUpdate}
   */
  setAttributeTemplateAttributeCode(attributeTemplateAttributeCode) {
    this.attributeTemplateAttributeCode = attributeTemplateAttributeCode;
    return this;
  }

  /**
   * Set Edit_AttributeTemplateAttribute.
   * @param {string} editAttributeTemplateAttribute
   * @returns {AttributeTemplateAttributeUpdate}
   */
  setEditAttributeTemplateAttribute(editAttributeTemplateAttribute) {
    this.editAttributeTemplateAttribute = editAttributeTemplateAttribute;
    return this;
  }

  /**
   * Set Code.
   * @param {string} code
   * @returns {AttributeTemplateAttributeUpdate}
   */
  setCode(code) {
    this.code = code;
    return this;
  }

  /**
   * Set Prompt.
   * @param {string} prompt
   * @returns {AttributeTemplateAttributeUpdate}
   */
  setPrompt(prompt) {
    this.prompt = prompt;
    return this;
  }

  /**
   * Set Type.
   * @param {string} type
   * @returns {AttributeTemplateAttributeUpdate}
   */
  setType(type) {
    this.type = type;
    return this;
  }

  /**
   * Set Image.
   * @param {string} image
   * @returns {AttributeTemplateAttributeUpdate}
   */
  setImage(image) {
    this.image = image;
    return this;
  }

  /**
   * Set Price.
   * @param {number} price
   * @returns {AttributeTemplateAttributeUpdate}
   */
  setPrice(price) {
    this.price = price;
    return this;
  }

  /**
   * Set Cost.
   * @param {number} cost
   * @returns {AttributeTemplateAttributeUpdate}
   */
  setCost(cost) {
    this.cost = cost;
    return this;
  }

  /**
   * Set Weight.
   * @param {number} weight
   * @returns {AttributeTemplateAttributeUpdate}
   */
  setWeight(weight) {
    this.weight = weight;
    return this;
  }

  /**
   * Set Copy.
   * @param {boolean} copy
   * @returns {AttributeTemplateAttributeUpdate}
   */
  setCopy(copy) {
    this.copy = copy;
    return this;
  }

  /**
   * Set Required.
   * @param {boolean} required
   * @returns {AttributeTemplateAttributeUpdate}
   */
  setRequired(required) {
    this.required = required;
    return this;
  }

  /**
   * Set Inventory.
   * @param {boolean} inventory
   * @returns {AttributeTemplateAttributeUpdate}
   */
  setInventory(inventory) {
    this.inventory = inventory;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.attributeTemplateId)) {
      data['AttributeTemplate_ID'] = this.attributeTemplateId;
    } else if (!util.isNullOrUndefined(this.attributeTemplateCode)) {
      data['AttributeTemplate_Code'] = this.attributeTemplateCode;
    } else if (!util.isNullOrUndefined(this.editAttributeTemplate)) {
      data['Edit_AttributeTemplate'] = this.editAttributeTemplate;
    }

    if (!util.isNullOrUndefined(this.attributeTemplateAttributeId)) {
      data['AttributeTemplateAttribute_ID'] = this.attributeTemplateAttributeId;
    } else if (!util.isNullOrUndefined(this.attributeTemplateAttributeCode)) {
      data['AttributeTemplateAttribute_Code'] = this.attributeTemplateAttributeCode;
    } else if (!util.isNullOrUndefined(this.editAttributeTemplateAttribute)) {
      data['Edit_AttributeTemplateAttribute'] = this.editAttributeTemplateAttribute;
    }

    data['Code'] = this.code;

    if (!util.isNullOrUndefined(this.prompt)) {
      data['Prompt'] = this.prompt;
    }

    if (!util.isNullOrUndefined(this.type)) {
      data['Type'] = this.type;
    }

    if (!util.isNullOrUndefined(this.image)) {
      data['Image'] = this.image;
    }

    if (!util.isNullOrUndefined(this.price)) {
      data['Price'] = this.price;
    }

    if (!util.isNullOrUndefined(this.cost)) {
      data['Cost'] = this.cost;
    }

    if (!util.isNullOrUndefined(this.weight)) {
      data['Weight'] = this.weight;
    }

    if (!util.isNullOrUndefined(this.copy)) {
      data['Copy'] = this.copy;
    }

    if (!util.isNullOrUndefined(this.required)) {
      data['Required'] = this.required;
    }

    if (!util.isNullOrUndefined(this.inventory)) {
      data['Inventory'] = this.inventory;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.AttributeTemplateAttributeUpdate(this, httpResponse, data);
  }
}

/** 
 * Handles API Request AttributeTemplateOption_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/attributetemplateoption_delete
 */
class AttributeTemplateOptionDelete extends Request {
  /**
   * AttributeTemplateOptionDelete Constructor.
   * @param {?BaseClient} client
   * @param {?AttributeTemplateOption} attributeTemplateOption
   */
  constructor(client, attributeTemplateOption = null) {
    super(client);
    this.function = 'AttributeTemplateOption_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.attributeTemplateId = null;
    this.attributeTemplateCode = null;
    this.editAttributeTemplate = null;
    this.attributeTemplateAttributeId = null;
    this.attributeTemplateAttributeCode = null;
    this.editAttributeTemplateAttribute = null;
    this.attributeTemplateOptionId = null;
    this.attributeTemplateOptionCode = null;
    this.editAttributeTemplateOption = null;

    if (util.isInstanceOf(attributeTemplateOption, models.AttributeTemplateOption)) {
      if (attributeTemplateOption.getId()) {
        this.setAttributeTemplateOptionId(attributeTemplateOption.getId());
      }
    }
  }

  /**
   * Get AttributeTemplate_ID.
   * @returns {number}
   */
  getAttributeTemplateId() {
    return this.attributeTemplateId;
  }

  /**
   * Get AttributeTemplate_Code.
   * @returns {string}
   */
  getAttributeTemplateCode() {
    return this.attributeTemplateCode;
  }

  /**
   * Get Edit_AttributeTemplate.
   * @returns {string}
   */
  getEditAttributeTemplate() {
    return this.editAttributeTemplate;
  }

  /**
   * Get AttributeTemplateAttribute_ID.
   * @returns {number}
   */
  getAttributeTemplateAttributeId() {
    return this.attributeTemplateAttributeId;
  }

  /**
   * Get AttributeTemplateAttribute_Code.
   * @returns {string}
   */
  getAttributeTemplateAttributeCode() {
    return this.attributeTemplateAttributeCode;
  }

  /**
   * Get Edit_AttributeTemplateAttribute.
   * @returns {string}
   */
  getEditAttributeTemplateAttribute() {
    return this.editAttributeTemplateAttribute;
  }

  /**
   * Get AttributeTemplateOption_ID.
   * @returns {number}
   */
  getAttributeTemplateOptionId() {
    return this.attributeTemplateOptionId;
  }

  /**
   * Get AttributeTemplateOption_Code.
   * @returns {string}
   */
  getAttributeTemplateOptionCode() {
    return this.attributeTemplateOptionCode;
  }

  /**
   * Get Edit_AttributeTemplateOption.
   * @returns {string}
   */
  getEditAttributeTemplateOption() {
    return this.editAttributeTemplateOption;
  }

  /**
   * Set AttributeTemplate_ID.
   * @param {number} attributeTemplateId
   * @returns {AttributeTemplateOptionDelete}
   */
  setAttributeTemplateId(attributeTemplateId) {
    this.attributeTemplateId = attributeTemplateId;
    return this;
  }

  /**
   * Set AttributeTemplate_Code.
   * @param {string} attributeTemplateCode
   * @returns {AttributeTemplateOptionDelete}
   */
  setAttributeTemplateCode(attributeTemplateCode) {
    this.attributeTemplateCode = attributeTemplateCode;
    return this;
  }

  /**
   * Set Edit_AttributeTemplate.
   * @param {string} editAttributeTemplate
   * @returns {AttributeTemplateOptionDelete}
   */
  setEditAttributeTemplate(editAttributeTemplate) {
    this.editAttributeTemplate = editAttributeTemplate;
    return this;
  }

  /**
   * Set AttributeTemplateAttribute_ID.
   * @param {number} attributeTemplateAttributeId
   * @returns {AttributeTemplateOptionDelete}
   */
  setAttributeTemplateAttributeId(attributeTemplateAttributeId) {
    this.attributeTemplateAttributeId = attributeTemplateAttributeId;
    return this;
  }

  /**
   * Set AttributeTemplateAttribute_Code.
   * @param {string} attributeTemplateAttributeCode
   * @returns {AttributeTemplateOptionDelete}
   */
  setAttributeTemplateAttributeCode(attributeTemplateAttributeCode) {
    this.attributeTemplateAttributeCode = attributeTemplateAttributeCode;
    return this;
  }

  /**
   * Set Edit_AttributeTemplateAttribute.
   * @param {string} editAttributeTemplateAttribute
   * @returns {AttributeTemplateOptionDelete}
   */
  setEditAttributeTemplateAttribute(editAttributeTemplateAttribute) {
    this.editAttributeTemplateAttribute = editAttributeTemplateAttribute;
    return this;
  }

  /**
   * Set AttributeTemplateOption_ID.
   * @param {number} attributeTemplateOptionId
   * @returns {AttributeTemplateOptionDelete}
   */
  setAttributeTemplateOptionId(attributeTemplateOptionId) {
    this.attributeTemplateOptionId = attributeTemplateOptionId;
    return this;
  }

  /**
   * Set AttributeTemplateOption_Code.
   * @param {string} attributeTemplateOptionCode
   * @returns {AttributeTemplateOptionDelete}
   */
  setAttributeTemplateOptionCode(attributeTemplateOptionCode) {
    this.attributeTemplateOptionCode = attributeTemplateOptionCode;
    return this;
  }

  /**
   * Set Edit_AttributeTemplateOption.
   * @param {string} editAttributeTemplateOption
   * @returns {AttributeTemplateOptionDelete}
   */
  setEditAttributeTemplateOption(editAttributeTemplateOption) {
    this.editAttributeTemplateOption = editAttributeTemplateOption;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.attributeTemplateId)) {
      data['AttributeTemplate_ID'] = this.attributeTemplateId;
    } else if (!util.isNullOrUndefined(this.attributeTemplateCode)) {
      data['AttributeTemplate_Code'] = this.attributeTemplateCode;
    } else if (!util.isNullOrUndefined(this.editAttributeTemplate)) {
      data['Edit_AttributeTemplate'] = this.editAttributeTemplate;
    }

    if (!util.isNullOrUndefined(this.attributeTemplateAttributeId)) {
      data['AttributeTemplateAttribute_ID'] = this.attributeTemplateAttributeId;
    } else if (!util.isNullOrUndefined(this.attributeTemplateAttributeCode)) {
      data['AttributeTemplateAttribute_Code'] = this.attributeTemplateAttributeCode;
    } else if (!util.isNullOrUndefined(this.editAttributeTemplateAttribute)) {
      data['Edit_AttributeTemplateAttribute'] = this.editAttributeTemplateAttribute;
    }

    if (!util.isNullOrUndefined(this.attributeTemplateOptionId)) {
      data['AttributeTemplateOption_ID'] = this.attributeTemplateOptionId;
    } else if (!util.isNullOrUndefined(this.attributeTemplateOptionCode)) {
      data['AttributeTemplateOption_Code'] = this.attributeTemplateOptionCode;
    } else if (!util.isNullOrUndefined(this.editAttributeTemplateOption)) {
      data['Edit_AttributeTemplateOption'] = this.editAttributeTemplateOption;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.AttributeTemplateOptionDelete(this, httpResponse, data);
  }
}

/** 
 * Handles API Request AttributeTemplateOption_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/attributetemplateoption_insert
 */
class AttributeTemplateOptionInsert extends Request {
  /**
   * AttributeTemplateOptionInsert Constructor.
   * @param {?BaseClient} client
   * @param {?AttributeTemplateAttribute} attributeTemplateAttribute
   */
  constructor(client, attributeTemplateAttribute = null) {
    super(client);
    this.function = 'AttributeTemplateOption_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.attributeTemplateId = null;
    this.attributeTemplateCode = null;
    this.editAttributeTemplate = null;
    this.attributeTemplateAttributeId = null;
    this.attributeTemplateAttributeCode = null;
    this.editAttributeTemplateAttribute = null;
    this.code = null;
    this.prompt = null;
    this.image = null;
    this.price = null;
    this.cost = null;
    this.weight = null;
    this.defaultOption = null;

    if (util.isInstanceOf(attributeTemplateAttribute, models.AttributeTemplateAttribute)) {
      if (attributeTemplateAttribute.getId()) {
        this.setAttributeTemplateAttributeId(attributeTemplateAttribute.getId());
      }
    }
  }

  /**
   * Get AttributeTemplate_ID.
   * @returns {number}
   */
  getAttributeTemplateId() {
    return this.attributeTemplateId;
  }

  /**
   * Get AttributeTemplate_Code.
   * @returns {string}
   */
  getAttributeTemplateCode() {
    return this.attributeTemplateCode;
  }

  /**
   * Get Edit_AttributeTemplate.
   * @returns {string}
   */
  getEditAttributeTemplate() {
    return this.editAttributeTemplate;
  }

  /**
   * Get AttributeTemplateAttribute_ID.
   * @returns {number}
   */
  getAttributeTemplateAttributeId() {
    return this.attributeTemplateAttributeId;
  }

  /**
   * Get AttributeTemplateAttribute_Code.
   * @returns {string}
   */
  getAttributeTemplateAttributeCode() {
    return this.attributeTemplateAttributeCode;
  }

  /**
   * Get Edit_AttributeTemplateAttribute.
   * @returns {string}
   */
  getEditAttributeTemplateAttribute() {
    return this.editAttributeTemplateAttribute;
  }

  /**
   * Get Code.
   * @returns {string}
   */
  getCode() {
    return this.code;
  }

  /**
   * Get Prompt.
   * @returns {string}
   */
  getPrompt() {
    return this.prompt;
  }

  /**
   * Get Image.
   * @returns {string}
   */
  getImage() {
    return this.image;
  }

  /**
   * Get Price.
   * @returns {number}
   */
  getPrice() {
    return this.price;
  }

  /**
   * Get Cost.
   * @returns {number}
   */
  getCost() {
    return this.cost;
  }

  /**
   * Get Weight.
   * @returns {number}
   */
  getWeight() {
    return this.weight;
  }

  /**
   * Get default_option.
   * @returns {boolean}
   */
  getDefaultOption() {
    return this.defaultOption;
  }

  /**
   * Set AttributeTemplate_ID.
   * @param {number} attributeTemplateId
   * @returns {AttributeTemplateOptionInsert}
   */
  setAttributeTemplateId(attributeTemplateId) {
    this.attributeTemplateId = attributeTemplateId;
    return this;
  }

  /**
   * Set AttributeTemplate_Code.
   * @param {string} attributeTemplateCode
   * @returns {AttributeTemplateOptionInsert}
   */
  setAttributeTemplateCode(attributeTemplateCode) {
    this.attributeTemplateCode = attributeTemplateCode;
    return this;
  }

  /**
   * Set Edit_AttributeTemplate.
   * @param {string} editAttributeTemplate
   * @returns {AttributeTemplateOptionInsert}
   */
  setEditAttributeTemplate(editAttributeTemplate) {
    this.editAttributeTemplate = editAttributeTemplate;
    return this;
  }

  /**
   * Set AttributeTemplateAttribute_ID.
   * @param {number} attributeTemplateAttributeId
   * @returns {AttributeTemplateOptionInsert}
   */
  setAttributeTemplateAttributeId(attributeTemplateAttributeId) {
    this.attributeTemplateAttributeId = attributeTemplateAttributeId;
    return this;
  }

  /**
   * Set AttributeTemplateAttribute_Code.
   * @param {string} attributeTemplateAttributeCode
   * @returns {AttributeTemplateOptionInsert}
   */
  setAttributeTemplateAttributeCode(attributeTemplateAttributeCode) {
    this.attributeTemplateAttributeCode = attributeTemplateAttributeCode;
    return this;
  }

  /**
   * Set Edit_AttributeTemplateAttribute.
   * @param {string} editAttributeTemplateAttribute
   * @returns {AttributeTemplateOptionInsert}
   */
  setEditAttributeTemplateAttribute(editAttributeTemplateAttribute) {
    this.editAttributeTemplateAttribute = editAttributeTemplateAttribute;
    return this;
  }

  /**
   * Set Code.
   * @param {string} code
   * @returns {AttributeTemplateOptionInsert}
   */
  setCode(code) {
    this.code = code;
    return this;
  }

  /**
   * Set Prompt.
   * @param {string} prompt
   * @returns {AttributeTemplateOptionInsert}
   */
  setPrompt(prompt) {
    this.prompt = prompt;
    return this;
  }

  /**
   * Set Image.
   * @param {string} image
   * @returns {AttributeTemplateOptionInsert}
   */
  setImage(image) {
    this.image = image;
    return this;
  }

  /**
   * Set Price.
   * @param {number} price
   * @returns {AttributeTemplateOptionInsert}
   */
  setPrice(price) {
    this.price = price;
    return this;
  }

  /**
   * Set Cost.
   * @param {number} cost
   * @returns {AttributeTemplateOptionInsert}
   */
  setCost(cost) {
    this.cost = cost;
    return this;
  }

  /**
   * Set Weight.
   * @param {number} weight
   * @returns {AttributeTemplateOptionInsert}
   */
  setWeight(weight) {
    this.weight = weight;
    return this;
  }

  /**
   * Set default_option.
   * @param {boolean} defaultOption
   * @returns {AttributeTemplateOptionInsert}
   */
  setDefaultOption(defaultOption) {
    this.defaultOption = defaultOption;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.attributeTemplateId)) {
      data['AttributeTemplate_ID'] = this.attributeTemplateId;
    } else if (!util.isNullOrUndefined(this.attributeTemplateCode)) {
      data['AttributeTemplate_Code'] = this.attributeTemplateCode;
    } else if (!util.isNullOrUndefined(this.editAttributeTemplate)) {
      data['Edit_AttributeTemplate'] = this.editAttributeTemplate;
    }

    if (!util.isNullOrUndefined(this.attributeTemplateAttributeId)) {
      data['AttributeTemplateAttribute_ID'] = this.attributeTemplateAttributeId;
    } else if (!util.isNullOrUndefined(this.attributeTemplateAttributeCode)) {
      data['AttributeTemplateAttribute_Code'] = this.attributeTemplateAttributeCode;
    } else if (!util.isNullOrUndefined(this.editAttributeTemplateAttribute)) {
      data['Edit_AttributeTemplateAttribute'] = this.editAttributeTemplateAttribute;
    }

    data['Code'] = this.code;

    data['Prompt'] = this.prompt;

    if (!util.isNullOrUndefined(this.image)) {
      data['Image'] = this.image;
    }

    if (!util.isNullOrUndefined(this.price)) {
      data['Price'] = this.price;
    }

    if (!util.isNullOrUndefined(this.cost)) {
      data['Cost'] = this.cost;
    }

    if (!util.isNullOrUndefined(this.weight)) {
      data['Weight'] = this.weight;
    }

    if (!util.isNullOrUndefined(this.defaultOption)) {
      data['Default'] = this.defaultOption;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.AttributeTemplateOptionInsert(this, httpResponse, data);
  }
}

/** 
 * Handles API Request AttributeTemplateOption_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/attributetemplateoption_update
 */
class AttributeTemplateOptionUpdate extends Request {
  /**
   * AttributeTemplateOptionUpdate Constructor.
   * @param {?BaseClient} client
   * @param {?AttributeTemplateOption} attributeTemplateOption
   */
  constructor(client, attributeTemplateOption = null) {
    super(client);
    this.function = 'AttributeTemplateOption_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.attributeTemplateId = null;
    this.attributeTemplateCode = null;
    this.editAttributeTemplate = null;
    this.attributeTemplateAttributeId = null;
    this.attributeTemplateAttributeCode = null;
    this.editAttributeTemplateAttribute = null;
    this.attributeTemplateOptionId = null;
    this.attributeTemplateOptionCode = null;
    this.editAttributeTemplateOption = null;
    this.code = null;
    this.prompt = null;
    this.image = null;
    this.price = null;
    this.cost = null;
    this.weight = null;
    this.defaultOption = null;

    if (util.isInstanceOf(attributeTemplateOption, models.AttributeTemplateOption)) {
      if (attributeTemplateOption.getId()) {
        this.setAttributeTemplateOptionId(attributeTemplateOption.getId());
      }
    }
  }

  /**
   * Get AttributeTemplate_ID.
   * @returns {number}
   */
  getAttributeTemplateId() {
    return this.attributeTemplateId;
  }

  /**
   * Get AttributeTemplate_Code.
   * @returns {string}
   */
  getAttributeTemplateCode() {
    return this.attributeTemplateCode;
  }

  /**
   * Get Edit_AttributeTemplate.
   * @returns {string}
   */
  getEditAttributeTemplate() {
    return this.editAttributeTemplate;
  }

  /**
   * Get AttributeTemplateAttribute_ID.
   * @returns {number}
   */
  getAttributeTemplateAttributeId() {
    return this.attributeTemplateAttributeId;
  }

  /**
   * Get AttributeTemplateAttribute_Code.
   * @returns {string}
   */
  getAttributeTemplateAttributeCode() {
    return this.attributeTemplateAttributeCode;
  }

  /**
   * Get Edit_AttributeTemplateAttribute.
   * @returns {string}
   */
  getEditAttributeTemplateAttribute() {
    return this.editAttributeTemplateAttribute;
  }

  /**
   * Get AttributeTemplateOption_ID.
   * @returns {number}
   */
  getAttributeTemplateOptionId() {
    return this.attributeTemplateOptionId;
  }

  /**
   * Get AttributeTemplateOption_Code.
   * @returns {string}
   */
  getAttributeTemplateOptionCode() {
    return this.attributeTemplateOptionCode;
  }

  /**
   * Get Edit_AttributeTemplateOption.
   * @returns {string}
   */
  getEditAttributeTemplateOption() {
    return this.editAttributeTemplateOption;
  }

  /**
   * Get Code.
   * @returns {string}
   */
  getCode() {
    return this.code;
  }

  /**
   * Get Prompt.
   * @returns {string}
   */
  getPrompt() {
    return this.prompt;
  }

  /**
   * Get Image.
   * @returns {string}
   */
  getImage() {
    return this.image;
  }

  /**
   * Get Price.
   * @returns {number}
   */
  getPrice() {
    return this.price;
  }

  /**
   * Get Cost.
   * @returns {number}
   */
  getCost() {
    return this.cost;
  }

  /**
   * Get Weight.
   * @returns {number}
   */
  getWeight() {
    return this.weight;
  }

  /**
   * Get default_option.
   * @returns {boolean}
   */
  getDefaultOption() {
    return this.defaultOption;
  }

  /**
   * Set AttributeTemplate_ID.
   * @param {number} attributeTemplateId
   * @returns {AttributeTemplateOptionUpdate}
   */
  setAttributeTemplateId(attributeTemplateId) {
    this.attributeTemplateId = attributeTemplateId;
    return this;
  }

  /**
   * Set AttributeTemplate_Code.
   * @param {string} attributeTemplateCode
   * @returns {AttributeTemplateOptionUpdate}
   */
  setAttributeTemplateCode(attributeTemplateCode) {
    this.attributeTemplateCode = attributeTemplateCode;
    return this;
  }

  /**
   * Set Edit_AttributeTemplate.
   * @param {string} editAttributeTemplate
   * @returns {AttributeTemplateOptionUpdate}
   */
  setEditAttributeTemplate(editAttributeTemplate) {
    this.editAttributeTemplate = editAttributeTemplate;
    return this;
  }

  /**
   * Set AttributeTemplateAttribute_ID.
   * @param {number} attributeTemplateAttributeId
   * @returns {AttributeTemplateOptionUpdate}
   */
  setAttributeTemplateAttributeId(attributeTemplateAttributeId) {
    this.attributeTemplateAttributeId = attributeTemplateAttributeId;
    return this;
  }

  /**
   * Set AttributeTemplateAttribute_Code.
   * @param {string} attributeTemplateAttributeCode
   * @returns {AttributeTemplateOptionUpdate}
   */
  setAttributeTemplateAttributeCode(attributeTemplateAttributeCode) {
    this.attributeTemplateAttributeCode = attributeTemplateAttributeCode;
    return this;
  }

  /**
   * Set Edit_AttributeTemplateAttribute.
   * @param {string} editAttributeTemplateAttribute
   * @returns {AttributeTemplateOptionUpdate}
   */
  setEditAttributeTemplateAttribute(editAttributeTemplateAttribute) {
    this.editAttributeTemplateAttribute = editAttributeTemplateAttribute;
    return this;
  }

  /**
   * Set AttributeTemplateOption_ID.
   * @param {number} attributeTemplateOptionId
   * @returns {AttributeTemplateOptionUpdate}
   */
  setAttributeTemplateOptionId(attributeTemplateOptionId) {
    this.attributeTemplateOptionId = attributeTemplateOptionId;
    return this;
  }

  /**
   * Set AttributeTemplateOption_Code.
   * @param {string} attributeTemplateOptionCode
   * @returns {AttributeTemplateOptionUpdate}
   */
  setAttributeTemplateOptionCode(attributeTemplateOptionCode) {
    this.attributeTemplateOptionCode = attributeTemplateOptionCode;
    return this;
  }

  /**
   * Set Edit_AttributeTemplateOption.
   * @param {string} editAttributeTemplateOption
   * @returns {AttributeTemplateOptionUpdate}
   */
  setEditAttributeTemplateOption(editAttributeTemplateOption) {
    this.editAttributeTemplateOption = editAttributeTemplateOption;
    return this;
  }

  /**
   * Set Code.
   * @param {string} code
   * @returns {AttributeTemplateOptionUpdate}
   */
  setCode(code) {
    this.code = code;
    return this;
  }

  /**
   * Set Prompt.
   * @param {string} prompt
   * @returns {AttributeTemplateOptionUpdate}
   */
  setPrompt(prompt) {
    this.prompt = prompt;
    return this;
  }

  /**
   * Set Image.
   * @param {string} image
   * @returns {AttributeTemplateOptionUpdate}
   */
  setImage(image) {
    this.image = image;
    return this;
  }

  /**
   * Set Price.
   * @param {number} price
   * @returns {AttributeTemplateOptionUpdate}
   */
  setPrice(price) {
    this.price = price;
    return this;
  }

  /**
   * Set Cost.
   * @param {number} cost
   * @returns {AttributeTemplateOptionUpdate}
   */
  setCost(cost) {
    this.cost = cost;
    return this;
  }

  /**
   * Set Weight.
   * @param {number} weight
   * @returns {AttributeTemplateOptionUpdate}
   */
  setWeight(weight) {
    this.weight = weight;
    return this;
  }

  /**
   * Set default_option.
   * @param {boolean} defaultOption
   * @returns {AttributeTemplateOptionUpdate}
   */
  setDefaultOption(defaultOption) {
    this.defaultOption = defaultOption;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.attributeTemplateId)) {
      data['AttributeTemplate_ID'] = this.attributeTemplateId;
    } else if (!util.isNullOrUndefined(this.attributeTemplateCode)) {
      data['AttributeTemplate_Code'] = this.attributeTemplateCode;
    } else if (!util.isNullOrUndefined(this.editAttributeTemplate)) {
      data['Edit_AttributeTemplate'] = this.editAttributeTemplate;
    }

    if (!util.isNullOrUndefined(this.attributeTemplateAttributeId)) {
      data['AttributeTemplateAttribute_ID'] = this.attributeTemplateAttributeId;
    } else if (!util.isNullOrUndefined(this.attributeTemplateAttributeCode)) {
      data['AttributeTemplateAttribute_Code'] = this.attributeTemplateAttributeCode;
    } else if (!util.isNullOrUndefined(this.editAttributeTemplateAttribute)) {
      data['Edit_AttributeTemplateAttribute'] = this.editAttributeTemplateAttribute;
    }

    if (!util.isNullOrUndefined(this.attributeTemplateOptionId)) {
      data['AttributeTemplateOption_ID'] = this.attributeTemplateOptionId;
    } else if (!util.isNullOrUndefined(this.attributeTemplateOptionCode)) {
      data['AttributeTemplateOption_Code'] = this.attributeTemplateOptionCode;
    } else if (!util.isNullOrUndefined(this.editAttributeTemplateOption)) {
      data['Edit_AttributeTemplateOption'] = this.editAttributeTemplateOption;
    }

    data['Code'] = this.code;

    data['Prompt'] = this.prompt;

    if (!util.isNullOrUndefined(this.image)) {
      data['Image'] = this.image;
    }

    if (!util.isNullOrUndefined(this.price)) {
      data['Price'] = this.price;
    }

    if (!util.isNullOrUndefined(this.cost)) {
      data['Cost'] = this.cost;
    }

    if (!util.isNullOrUndefined(this.weight)) {
      data['Weight'] = this.weight;
    }

    if (!util.isNullOrUndefined(this.defaultOption)) {
      data['Default'] = this.defaultOption;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.AttributeTemplateOptionUpdate(this, httpResponse, data);
  }
}

/** 
 * Handles API Request AttributeTemplate_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/attributetemplate_insert
 */
class AttributeTemplateInsert extends Request {
  /**
   * AttributeTemplateInsert Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'AttributeTemplate_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.code = null;
    this.prompt = null;
  }

  /**
   * Get Code.
   * @returns {string}
   */
  getCode() {
    return this.code;
  }

  /**
   * Get Prompt.
   * @returns {string}
   */
  getPrompt() {
    return this.prompt;
  }

  /**
   * Set Code.
   * @param {string} code
   * @returns {AttributeTemplateInsert}
   */
  setCode(code) {
    this.code = code;
    return this;
  }

  /**
   * Set Prompt.
   * @param {string} prompt
   * @returns {AttributeTemplateInsert}
   */
  setPrompt(prompt) {
    this.prompt = prompt;
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

    data['Prompt'] = this.prompt;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.AttributeTemplateInsert(this, httpResponse, data);
  }
}

/** 
 * Handles API Request AttributeTemplate_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/attributetemplate_update
 */
class AttributeTemplateUpdate extends Request {
  /**
   * AttributeTemplateUpdate Constructor.
   * @param {?BaseClient} client
   * @param {?AttributeTemplate} attributeTemplate
   */
  constructor(client, attributeTemplate = null) {
    super(client);
    this.function = 'AttributeTemplate_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.attributeTemplateId = null;
    this.attributeTemplateCode = null;
    this.editAttributeTemplate = null;
    this.code = null;
    this.prompt = null;

    if (util.isInstanceOf(attributeTemplate, models.AttributeTemplate)) {
      if (attributeTemplate.getId()) {
        this.setAttributeTemplateId(attributeTemplate.getId());
      } else if (attributeTemplate.getCode()) {
        this.setAttributeTemplateCode(attributeTemplate.getCode());
      } else if (attributeTemplate.getCode()) {
        this.setEditAttributeTemplate(attributeTemplate.getCode());
      }
    }
  }

  /**
   * Get AttributeTemplate_ID.
   * @returns {number}
   */
  getAttributeTemplateId() {
    return this.attributeTemplateId;
  }

  /**
   * Get AttributeTemplate_Code.
   * @returns {string}
   */
  getAttributeTemplateCode() {
    return this.attributeTemplateCode;
  }

  /**
   * Get Edit_AttributeTemplate.
   * @returns {string}
   */
  getEditAttributeTemplate() {
    return this.editAttributeTemplate;
  }

  /**
   * Get Code.
   * @returns {string}
   */
  getCode() {
    return this.code;
  }

  /**
   * Get Prompt.
   * @returns {string}
   */
  getPrompt() {
    return this.prompt;
  }

  /**
   * Set AttributeTemplate_ID.
   * @param {number} attributeTemplateId
   * @returns {AttributeTemplateUpdate}
   */
  setAttributeTemplateId(attributeTemplateId) {
    this.attributeTemplateId = attributeTemplateId;
    return this;
  }

  /**
   * Set AttributeTemplate_Code.
   * @param {string} attributeTemplateCode
   * @returns {AttributeTemplateUpdate}
   */
  setAttributeTemplateCode(attributeTemplateCode) {
    this.attributeTemplateCode = attributeTemplateCode;
    return this;
  }

  /**
   * Set Edit_AttributeTemplate.
   * @param {string} editAttributeTemplate
   * @returns {AttributeTemplateUpdate}
   */
  setEditAttributeTemplate(editAttributeTemplate) {
    this.editAttributeTemplate = editAttributeTemplate;
    return this;
  }

  /**
   * Set Code.
   * @param {string} code
   * @returns {AttributeTemplateUpdate}
   */
  setCode(code) {
    this.code = code;
    return this;
  }

  /**
   * Set Prompt.
   * @param {string} prompt
   * @returns {AttributeTemplateUpdate}
   */
  setPrompt(prompt) {
    this.prompt = prompt;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.attributeTemplateId)) {
      data['AttributeTemplate_ID'] = this.attributeTemplateId;
    } else if (!util.isNullOrUndefined(this.attributeTemplateCode)) {
      data['AttributeTemplate_Code'] = this.attributeTemplateCode;
    } else if (!util.isNullOrUndefined(this.editAttributeTemplate)) {
      data['Edit_AttributeTemplate'] = this.editAttributeTemplate;
    }

    data['Code'] = this.code;

    data['Prompt'] = this.prompt;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.AttributeTemplateUpdate(this, httpResponse, data);
  }
}

/** 
 * Handles API Request AttributeTemplate_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/attributetemplate_delete
 */
class AttributeTemplateDelete extends Request {
  /**
   * AttributeTemplateDelete Constructor.
   * @param {?BaseClient} client
   * @param {?AttributeTemplate} attributeTemplate
   */
  constructor(client, attributeTemplate = null) {
    super(client);
    this.function = 'AttributeTemplate_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.attributeTemplateId = null;
    this.attributeTemplateCode = null;
    this.editAttributeTemplate = null;

    if (util.isInstanceOf(attributeTemplate, models.AttributeTemplate)) {
      if (attributeTemplate.getId()) {
        this.setAttributeTemplateId(attributeTemplate.getId());
      } else if (attributeTemplate.getCode()) {
        this.setAttributeTemplateCode(attributeTemplate.getCode());
      } else if (attributeTemplate.getCode()) {
        this.setEditAttributeTemplate(attributeTemplate.getCode());
      }
    }
  }

  /**
   * Get AttributeTemplate_ID.
   * @returns {number}
   */
  getAttributeTemplateId() {
    return this.attributeTemplateId;
  }

  /**
   * Get AttributeTemplate_Code.
   * @returns {string}
   */
  getAttributeTemplateCode() {
    return this.attributeTemplateCode;
  }

  /**
   * Get Edit_AttributeTemplate.
   * @returns {string}
   */
  getEditAttributeTemplate() {
    return this.editAttributeTemplate;
  }

  /**
   * Set AttributeTemplate_ID.
   * @param {number} attributeTemplateId
   * @returns {AttributeTemplateDelete}
   */
  setAttributeTemplateId(attributeTemplateId) {
    this.attributeTemplateId = attributeTemplateId;
    return this;
  }

  /**
   * Set AttributeTemplate_Code.
   * @param {string} attributeTemplateCode
   * @returns {AttributeTemplateDelete}
   */
  setAttributeTemplateCode(attributeTemplateCode) {
    this.attributeTemplateCode = attributeTemplateCode;
    return this;
  }

  /**
   * Set Edit_AttributeTemplate.
   * @param {string} editAttributeTemplate
   * @returns {AttributeTemplateDelete}
   */
  setEditAttributeTemplate(editAttributeTemplate) {
    this.editAttributeTemplate = editAttributeTemplate;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.attributeTemplateId)) {
      data['AttributeTemplate_ID'] = this.attributeTemplateId;
    } else if (!util.isNullOrUndefined(this.attributeTemplateCode)) {
      data['AttributeTemplate_Code'] = this.attributeTemplateCode;
    } else if (!util.isNullOrUndefined(this.editAttributeTemplate)) {
      data['Edit_AttributeTemplate'] = this.editAttributeTemplate;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.AttributeTemplateDelete(this, httpResponse, data);
  }
}

/** 
 * Handles API Request AttributeTemplateOption_Set_Default. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/attributetemplateoption_set_default
 */
class AttributeTemplateOptionSetDefault extends Request {
  /**
   * AttributeTemplateOptionSetDefault Constructor.
   * @param {?BaseClient} client
   * @param {?AttributeTemplateOption} attributeTemplateOption
   */
  constructor(client, attributeTemplateOption = null) {
    super(client);
    this.function = 'AttributeTemplateOption_Set_Default';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.attributeTemplateOptionId = null;
    this.attributeTemplateOptionCode = null;
    this.editAttributeTemplateOption = null;
    this.attributeTemplateId = null;
    this.attributeTemplateCode = null;
    this.editAttributeTemplate = null;
    this.attributeTemplateAttributeId = null;
    this.attributeTemplateAttributeCode = null;
    this.editAttributeTemplateAttribute = null;
    this.attributeTemplateOptionDefault = null;

    if (util.isInstanceOf(attributeTemplateOption, models.AttributeTemplateOption)) {
      if (attributeTemplateOption.getId()) {
        this.setAttributeTemplateOptionId(attributeTemplateOption.getId());
      }
    }
  }

  /**
   * Get AttributeTemplateOption_ID.
   * @returns {number}
   */
  getAttributeTemplateOptionId() {
    return this.attributeTemplateOptionId;
  }

  /**
   * Get AttributeTemplateOption_Code.
   * @returns {string}
   */
  getAttributeTemplateOptionCode() {
    return this.attributeTemplateOptionCode;
  }

  /**
   * Get Edit_AttributeTemplateOption.
   * @returns {string}
   */
  getEditAttributeTemplateOption() {
    return this.editAttributeTemplateOption;
  }

  /**
   * Get AttributeTemplate_ID.
   * @returns {number}
   */
  getAttributeTemplateId() {
    return this.attributeTemplateId;
  }

  /**
   * Get AttributeTemplate_Code.
   * @returns {string}
   */
  getAttributeTemplateCode() {
    return this.attributeTemplateCode;
  }

  /**
   * Get Edit_AttributeTemplate.
   * @returns {string}
   */
  getEditAttributeTemplate() {
    return this.editAttributeTemplate;
  }

  /**
   * Get AttributeTemplateAttribute_ID.
   * @returns {number}
   */
  getAttributeTemplateAttributeId() {
    return this.attributeTemplateAttributeId;
  }

  /**
   * Get AttributeTemplateAttribute_Code.
   * @returns {string}
   */
  getAttributeTemplateAttributeCode() {
    return this.attributeTemplateAttributeCode;
  }

  /**
   * Get Edit_AttributeTemplateAttribute.
   * @returns {string}
   */
  getEditAttributeTemplateAttribute() {
    return this.editAttributeTemplateAttribute;
  }

  /**
   * Get AttributeTemplateOption_Default.
   * @returns {boolean}
   */
  getAttributeTemplateOptionDefault() {
    return this.attributeTemplateOptionDefault;
  }

  /**
   * Set AttributeTemplateOption_ID.
   * @param {number} attributeTemplateOptionId
   * @returns {AttributeTemplateOptionSetDefault}
   */
  setAttributeTemplateOptionId(attributeTemplateOptionId) {
    this.attributeTemplateOptionId = attributeTemplateOptionId;
    return this;
  }

  /**
   * Set AttributeTemplateOption_Code.
   * @param {string} attributeTemplateOptionCode
   * @returns {AttributeTemplateOptionSetDefault}
   */
  setAttributeTemplateOptionCode(attributeTemplateOptionCode) {
    this.attributeTemplateOptionCode = attributeTemplateOptionCode;
    return this;
  }

  /**
   * Set Edit_AttributeTemplateOption.
   * @param {string} editAttributeTemplateOption
   * @returns {AttributeTemplateOptionSetDefault}
   */
  setEditAttributeTemplateOption(editAttributeTemplateOption) {
    this.editAttributeTemplateOption = editAttributeTemplateOption;
    return this;
  }

  /**
   * Set AttributeTemplate_ID.
   * @param {number} attributeTemplateId
   * @returns {AttributeTemplateOptionSetDefault}
   */
  setAttributeTemplateId(attributeTemplateId) {
    this.attributeTemplateId = attributeTemplateId;
    return this;
  }

  /**
   * Set AttributeTemplate_Code.
   * @param {string} attributeTemplateCode
   * @returns {AttributeTemplateOptionSetDefault}
   */
  setAttributeTemplateCode(attributeTemplateCode) {
    this.attributeTemplateCode = attributeTemplateCode;
    return this;
  }

  /**
   * Set Edit_AttributeTemplate.
   * @param {string} editAttributeTemplate
   * @returns {AttributeTemplateOptionSetDefault}
   */
  setEditAttributeTemplate(editAttributeTemplate) {
    this.editAttributeTemplate = editAttributeTemplate;
    return this;
  }

  /**
   * Set AttributeTemplateAttribute_ID.
   * @param {number} attributeTemplateAttributeId
   * @returns {AttributeTemplateOptionSetDefault}
   */
  setAttributeTemplateAttributeId(attributeTemplateAttributeId) {
    this.attributeTemplateAttributeId = attributeTemplateAttributeId;
    return this;
  }

  /**
   * Set AttributeTemplateAttribute_Code.
   * @param {string} attributeTemplateAttributeCode
   * @returns {AttributeTemplateOptionSetDefault}
   */
  setAttributeTemplateAttributeCode(attributeTemplateAttributeCode) {
    this.attributeTemplateAttributeCode = attributeTemplateAttributeCode;
    return this;
  }

  /**
   * Set Edit_AttributeTemplateAttribute.
   * @param {string} editAttributeTemplateAttribute
   * @returns {AttributeTemplateOptionSetDefault}
   */
  setEditAttributeTemplateAttribute(editAttributeTemplateAttribute) {
    this.editAttributeTemplateAttribute = editAttributeTemplateAttribute;
    return this;
  }

  /**
   * Set AttributeTemplateOption_Default.
   * @param {boolean} attributeTemplateOptionDefault
   * @returns {AttributeTemplateOptionSetDefault}
   */
  setAttributeTemplateOptionDefault(attributeTemplateOptionDefault) {
    this.attributeTemplateOptionDefault = attributeTemplateOptionDefault;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.attributeTemplateId)) {
      data['AttributeTemplate_ID'] = this.attributeTemplateId;
    } else if (!util.isNullOrUndefined(this.attributeTemplateCode)) {
      data['AttributeTemplate_Code'] = this.attributeTemplateCode;
    } else if (!util.isNullOrUndefined(this.editAttributeTemplate)) {
      data['Edit_AttributeTemplate'] = this.editAttributeTemplate;
    }

    if (!util.isNullOrUndefined(this.attributeTemplateAttributeId)) {
      data['AttributeTemplateAttribute_ID'] = this.attributeTemplateAttributeId;
    } else if (!util.isNullOrUndefined(this.attributeTemplateAttributeCode)) {
      data['AttributeTemplateAttribute_Code'] = this.attributeTemplateAttributeCode;
    } else if (!util.isNullOrUndefined(this.editAttributeTemplateAttribute)) {
      data['Edit_AttributeTemplateAttribute'] = this.editAttributeTemplateAttribute;
    }

    if (!util.isNullOrUndefined(this.attributeTemplateOptionId)) {
      data['AttributeTemplateOption_ID'] = this.attributeTemplateOptionId;
    } else if (!util.isNullOrUndefined(this.attributeTemplateOptionCode)) {
      data['AttributeTemplateOption_Code'] = this.attributeTemplateOptionCode;
    } else if (!util.isNullOrUndefined(this.editAttributeTemplateOption)) {
      data['Edit_AttributeTemplateOption'] = this.editAttributeTemplateOption;
    }

    data['AttributeTemplateOption_Default'] = this.attributeTemplateOptionDefault;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.AttributeTemplateOptionSetDefault(this, httpResponse, data);
  }
}

/** 
 * Handles API Request AttributeTemplateProduct_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/attributetemplateproduct_update_assigned
 */
class AttributeTemplateProductUpdateAssigned extends Request {
  /**
   * AttributeTemplateProductUpdateAssigned Constructor.
   * @param {?BaseClient} client
   * @param {?AttributeTemplate} attributeTemplate
   */
  constructor(client, attributeTemplate = null) {
    super(client);
    this.function = 'AttributeTemplateProduct_Update_Assigned';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.attributeTemplateId = null;
    this.attributeTemplateCode = null;
    this.editAttributeTemplate = null;
    this.productId = null;
    this.productCode = null;
    this.editProduct = null;
    this.assigned = null;

    if (util.isInstanceOf(attributeTemplate, models.AttributeTemplate)) {
      if (attributeTemplate.getId()) {
        this.setAttributeTemplateId(attributeTemplate.getId());
      } else if (attributeTemplate.getCode()) {
        this.setAttributeTemplateCode(attributeTemplate.getCode());
      } else if (attributeTemplate.getCode()) {
        this.setEditAttributeTemplate(attributeTemplate.getCode());
      }
    }
  }

  /**
   * Get AttributeTemplate_ID.
   * @returns {number}
   */
  getAttributeTemplateId() {
    return this.attributeTemplateId;
  }

  /**
   * Get AttributeTemplate_Code.
   * @returns {string}
   */
  getAttributeTemplateCode() {
    return this.attributeTemplateCode;
  }

  /**
   * Get Edit_AttributeTemplate.
   * @returns {string}
   */
  getEditAttributeTemplate() {
    return this.editAttributeTemplate;
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
   * Get Assigned.
   * @returns {boolean}
   */
  getAssigned() {
    return this.assigned;
  }

  /**
   * Set AttributeTemplate_ID.
   * @param {number} attributeTemplateId
   * @returns {AttributeTemplateProductUpdateAssigned}
   */
  setAttributeTemplateId(attributeTemplateId) {
    this.attributeTemplateId = attributeTemplateId;
    return this;
  }

  /**
   * Set AttributeTemplate_Code.
   * @param {string} attributeTemplateCode
   * @returns {AttributeTemplateProductUpdateAssigned}
   */
  setAttributeTemplateCode(attributeTemplateCode) {
    this.attributeTemplateCode = attributeTemplateCode;
    return this;
  }

  /**
   * Set Edit_AttributeTemplate.
   * @param {string} editAttributeTemplate
   * @returns {AttributeTemplateProductUpdateAssigned}
   */
  setEditAttributeTemplate(editAttributeTemplate) {
    this.editAttributeTemplate = editAttributeTemplate;
    return this;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {AttributeTemplateProductUpdateAssigned}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {AttributeTemplateProductUpdateAssigned}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {AttributeTemplateProductUpdateAssigned}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {AttributeTemplateProductUpdateAssigned}
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

    if (!util.isNullOrUndefined(this.attributeTemplateId)) {
      data['AttributeTemplate_ID'] = this.attributeTemplateId;
    } else if (!util.isNullOrUndefined(this.attributeTemplateCode)) {
      data['AttributeTemplate_Code'] = this.attributeTemplateCode;
    } else if (!util.isNullOrUndefined(this.editAttributeTemplate)) {
      data['Edit_AttributeTemplate'] = this.editAttributeTemplate;
    }

    if (!util.isNullOrUndefined(this.productId)) {
      data['Product_ID'] = this.productId;
    } else if (!util.isNullOrUndefined(this.productCode)) {
      data['Product_Code'] = this.productCode;
    } else if (!util.isNullOrUndefined(this.editProduct)) {
      data['Edit_Product'] = this.editProduct;
    }

    data['Assigned'] = this.assigned;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.AttributeTemplateProductUpdateAssigned(this, httpResponse, data);
  }
}

/** 
 * Handles API Request Branch_SetPrimary. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/branch_setprimary
 */
class BranchSetPrimary extends Request {
  /**
   * BranchSetPrimary Constructor.
   * @param {?BaseClient} client
   * @param {?Branch} branch
   */
  constructor(client, branch = null) {
    super(client);
    this.function = 'Branch_SetPrimary';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.branchId = null;
    this.editBranch = null;
    this.branchName = null;

    if (util.isInstanceOf(branch, models.Branch)) {
      if (branch.getId()) {
        this.setBranchId(branch.getId());
      } else if (branch.getName()) {
        this.setEditBranch(branch.getName());
      } else if (branch.getName()) {
        this.setBranchName(branch.getName());
      }
    }
  }

  /**
   * Get Branch_ID.
   * @returns {number}
   */
  getBranchId() {
    return this.branchId;
  }

  /**
   * Get Edit_Branch.
   * @returns {string}
   */
  getEditBranch() {
    return this.editBranch;
  }

  /**
   * Get Branch_Name.
   * @returns {string}
   */
  getBranchName() {
    return this.branchName;
  }

  /**
   * Set Branch_ID.
   * @param {number} branchId
   * @returns {BranchSetPrimary}
   */
  setBranchId(branchId) {
    this.branchId = branchId;
    return this;
  }

  /**
   * Set Edit_Branch.
   * @param {string} editBranch
   * @returns {BranchSetPrimary}
   */
  setEditBranch(editBranch) {
    this.editBranch = editBranch;
    return this;
  }

  /**
   * Set Branch_Name.
   * @param {string} branchName
   * @returns {BranchSetPrimary}
   */
  setBranchName(branchName) {
    this.branchName = branchName;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.branchId)) {
      data['Branch_ID'] = this.branchId;
    } else if (!util.isNullOrUndefined(this.editBranch)) {
      data['Edit_Branch'] = this.editBranch;
    } else if (!util.isNullOrUndefined(this.branchName)) {
      data['Branch_Name'] = this.branchName;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.BranchSetPrimary(this, httpResponse, data);
  }
}

/** 
 * Handles API Request Branch_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/branch_update
 */
class BranchUpdate extends Request {
  /**
   * BranchUpdate Constructor.
   * @param {?BaseClient} client
   * @param {?Branch} branch
   */
  constructor(client, branch = null) {
    super(client);
    this.function = 'Branch_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.branchId = null;
    this.editBranch = null;
    this.branchName = null;
    this.branchColor = null;

    if (util.isInstanceOf(branch, models.Branch)) {
      if (branch.getId()) {
        this.setBranchId(branch.getId());
      } else if (branch.getName()) {
        this.setEditBranch(branch.getName());
      }
    }
  }

  /**
   * Get Branch_ID.
   * @returns {number}
   */
  getBranchId() {
    return this.branchId;
  }

  /**
   * Get Edit_Branch.
   * @returns {string}
   */
  getEditBranch() {
    return this.editBranch;
  }

  /**
   * Get Branch_Name.
   * @returns {string}
   */
  getBranchName() {
    return this.branchName;
  }

  /**
   * Get Branch_Color.
   * @returns {string}
   */
  getBranchColor() {
    return this.branchColor;
  }

  /**
   * Set Branch_ID.
   * @param {number} branchId
   * @returns {BranchUpdate}
   */
  setBranchId(branchId) {
    this.branchId = branchId;
    return this;
  }

  /**
   * Set Edit_Branch.
   * @param {string} editBranch
   * @returns {BranchUpdate}
   */
  setEditBranch(editBranch) {
    this.editBranch = editBranch;
    return this;
  }

  /**
   * Set Branch_Name.
   * @param {string} branchName
   * @returns {BranchUpdate}
   */
  setBranchName(branchName) {
    this.branchName = branchName;
    return this;
  }

  /**
   * Set Branch_Color.
   * @param {string} branchColor
   * @returns {BranchUpdate}
   */
  setBranchColor(branchColor) {
    this.branchColor = branchColor;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.branchId)) {
      data['Branch_ID'] = this.branchId;
    } else if (!util.isNullOrUndefined(this.editBranch)) {
      data['Edit_Branch'] = this.editBranch;
    }

    if (!util.isNullOrUndefined(this.branchName)) {
      data['Branch_Name'] = this.branchName;
    }

    if (!util.isNullOrUndefined(this.branchColor)) {
      data['Branch_Color'] = this.branchColor;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.BranchUpdate(this, httpResponse, data);
  }
}

/** 
 * Handles API Request CategoryProductList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/categoryproductlist_load_query
 */
class CategoryProductListLoadQuery extends ProductListLoadQuery {
  /**
   * CategoryProductListLoadQuery Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.CategoryProductListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request CouponPriceGroupList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/couponpricegrouplist_load_query
 */
class CouponPriceGroupListLoadQuery extends PriceGroupListLoadQuery {
  /**
   * CouponPriceGroupListLoadQuery Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.CouponPriceGroupListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request PriceGroupCustomerList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/pricegroupcustomerlist_load_query
 */
class PriceGroupCustomerListLoadQuery extends CustomerListLoadQuery {
  /**
   * PriceGroupCustomerListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?PriceGroup} priceGroup
   */
  constructor(client, priceGroup = null) {
    super(client);
    this.function = 'PriceGroupCustomerList_Load_Query';
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
   * @returns {PriceGroupCustomerListLoadQuery}
   */
  setPriceGroupId(priceGroupId) {
    this.priceGroupId = priceGroupId;
    return this;
  }

  /**
   * Set PriceGroup_Name.
   * @param {string} priceGroupName
   * @returns {PriceGroupCustomerListLoadQuery}
   */
  setPriceGroupName(priceGroupName) {
    this.priceGroupName = priceGroupName;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {PriceGroupCustomerListLoadQuery}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Set Unassigned.
   * @param {boolean} unassigned
   * @returns {PriceGroupCustomerListLoadQuery}
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
  createResponse(httpResponse, data) {
    return new responses.PriceGroupCustomerListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request PriceGroupProductList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/pricegroupproductlist_load_query
 */
class PriceGroupProductListLoadQuery extends ProductListLoadQuery {
  /**
   * PriceGroupProductListLoadQuery Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.PriceGroupProductListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request CustomerPriceGroupList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/customerpricegrouplist_load_query
 */
class CustomerPriceGroupListLoadQuery extends PriceGroupListLoadQuery {
  /**
   * CustomerPriceGroupListLoadQuery Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.CustomerPriceGroupListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request OrderPriceGroupList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/orderpricegrouplist_load_query
 */
class OrderPriceGroupListLoadQuery extends PriceGroupListLoadQuery {
  /**
   * OrderPriceGroupListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?Order} order
   */
  constructor(client, order = null) {
    super(client);
    this.function = 'OrderPriceGroupList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.orderId = null;
    this.assigned = null;
    this.unassigned = null;

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
   * Set Order_ID.
   * @param {number} orderId
   * @returns {OrderPriceGroupListLoadQuery}
   */
  setOrderId(orderId) {
    this.orderId = orderId;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {OrderPriceGroupListLoadQuery}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Set Unassigned.
   * @param {boolean} unassigned
   * @returns {OrderPriceGroupListLoadQuery}
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

    if (!util.isNullOrUndefined(this.orderId)) {
      data['Order_ID'] = this.orderId;
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
  createResponse(httpResponse, data) {
    return new responses.OrderPriceGroupListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request OrderCouponList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/ordercouponlist_load_query
 */
class OrderCouponListLoadQuery extends CouponListLoadQuery {
  /**
   * OrderCouponListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?Order} order
   */
  constructor(client, order = null) {
    super(client);
    this.function = 'OrderCouponList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.orderId = null;
    this.assigned = null;
    this.unassigned = null;

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
   * Set Order_ID.
   * @param {number} orderId
   * @returns {OrderCouponListLoadQuery}
   */
  setOrderId(orderId) {
    this.orderId = orderId;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {OrderCouponListLoadQuery}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Set Unassigned.
   * @param {boolean} unassigned
   * @returns {OrderCouponListLoadQuery}
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

    data['Order_ID'] = this.getOrderId();

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
  createResponse(httpResponse, data) {
    return new responses.OrderCouponListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request ChildCategoryList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/childcategorylist_load_query
 */
class ChildCategoryListLoadQuery extends CategoryListLoadQuery {
  /**
   * ChildCategoryListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?Category} category
   */
  constructor(client, category = null) {
    super(client);
    this.function = 'ChildCategoryList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.parentCategoryId = null;
    this.parentCategoryCode = null;
    this.editParentCategory = null;
    this.assigned = null;
    this.unassigned = null;

    if (util.isInstanceOf(category, models.Category)) {
      if (category.getId()) {
        this.setParentCategoryId(category.getId());
      } else if (category.getCode()) {
        this.setEditParentCategory(category.getCode());
      } else if (category.getCode()) {
        this.setParentCategoryCode(category.getCode());
      }
    }
  }

  /**
   * Get ParentCategory_ID.
   * @returns {number}
   */
  getParentCategoryId() {
    return this.parentCategoryId;
  }

  /**
   * Get ParentCategory_Code.
   * @returns {string}
   */
  getParentCategoryCode() {
    return this.parentCategoryCode;
  }

  /**
   * Get Edit_ParentCategory.
   * @returns {string}
   */
  getEditParentCategory() {
    return this.editParentCategory;
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
   * Set ParentCategory_ID.
   * @param {number} parentCategoryId
   * @returns {ChildCategoryListLoadQuery}
   */
  setParentCategoryId(parentCategoryId) {
    this.parentCategoryId = parentCategoryId;
    return this;
  }

  /**
   * Set ParentCategory_Code.
   * @param {string} parentCategoryCode
   * @returns {ChildCategoryListLoadQuery}
   */
  setParentCategoryCode(parentCategoryCode) {
    this.parentCategoryCode = parentCategoryCode;
    return this;
  }

  /**
   * Set Edit_ParentCategory.
   * @param {string} editParentCategory
   * @returns {ChildCategoryListLoadQuery}
   */
  setEditParentCategory(editParentCategory) {
    this.editParentCategory = editParentCategory;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {ChildCategoryListLoadQuery}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Set Unassigned.
   * @param {boolean} unassigned
   * @returns {ChildCategoryListLoadQuery}
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

    if (!util.isNullOrUndefined(this.parentCategoryId)) {
      data['ParentCategory_ID'] = this.parentCategoryId;
    } else if (!util.isNullOrUndefined(this.parentCategoryCode)) {
      data['ParentCategory_Code'] = this.parentCategoryCode;
    } else if (!util.isNullOrUndefined(this.editParentCategory)) {
      data['Edit_ParentCategory'] = this.editParentCategory;
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
  createResponse(httpResponse, data) {
    return new responses.ChildCategoryListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request AvailabilityGroupCustomerList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/availabilitygroupcustomerlist_load_query
 */
class AvailabilityGroupCustomerListLoadQuery extends CustomerListLoadQuery {
  /**
   * AvailabilityGroupCustomerListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?AvailabilityGroup} availabilityGroup
   */
  constructor(client, availabilityGroup = null) {
    super(client);
    this.function = 'AvailabilityGroupCustomerList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.availabilityGroupId = null;
    this.editAvailabilityGroup = null;
    this.availabilityGroupName = null;
    this.assigned = null;
    this.unassigned = null;

    if (util.isInstanceOf(availabilityGroup, models.AvailabilityGroup)) {
      if (availabilityGroup.getId()) {
        this.setAvailabilityGroupId(availabilityGroup.getId());
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
   * Set AvailabilityGroup_ID.
   * @param {number} availabilityGroupId
   * @returns {AvailabilityGroupCustomerListLoadQuery}
   */
  setAvailabilityGroupId(availabilityGroupId) {
    this.availabilityGroupId = availabilityGroupId;
    return this;
  }

  /**
   * Set Edit_AvailabilityGroup.
   * @param {string} editAvailabilityGroup
   * @returns {AvailabilityGroupCustomerListLoadQuery}
   */
  setEditAvailabilityGroup(editAvailabilityGroup) {
    this.editAvailabilityGroup = editAvailabilityGroup;
    return this;
  }

  /**
   * Set AvailabilityGroup_Name.
   * @param {string} availabilityGroupName
   * @returns {AvailabilityGroupCustomerListLoadQuery}
   */
  setAvailabilityGroupName(availabilityGroupName) {
    this.availabilityGroupName = availabilityGroupName;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {AvailabilityGroupCustomerListLoadQuery}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Set Unassigned.
   * @param {boolean} unassigned
   * @returns {AvailabilityGroupCustomerListLoadQuery}
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

    if (!util.isNullOrUndefined(this.availabilityGroupId)) {
      data['AvailabilityGroup_ID'] = this.availabilityGroupId;
    } else if (!util.isNullOrUndefined(this.editAvailabilityGroup)) {
      data['Edit_AvailabilityGroup'] = this.editAvailabilityGroup;
    } else if (!util.isNullOrUndefined(this.availabilityGroupName)) {
      data['AvailabilityGroup_Name'] = this.availabilityGroupName;
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
  createResponse(httpResponse, data) {
    return new responses.AvailabilityGroupCustomerListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request AvailabilityGroupProductList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/availabilitygroupproductlist_load_query
 */
class AvailabilityGroupProductListLoadQuery extends ProductListLoadQuery {
  /**
   * AvailabilityGroupProductListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?AvailabilityGroup} availabilityGroup
   */
  constructor(client, availabilityGroup = null) {
    super(client);
    this.function = 'AvailabilityGroupProductList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.availabilityGroupId = null;
    this.editAvailabilityGroup = null;
    this.availabilityGroupName = null;
    this.assigned = null;
    this.unassigned = null;

    if (util.isInstanceOf(availabilityGroup, models.AvailabilityGroup)) {
      if (availabilityGroup.getId()) {
        this.setAvailabilityGroupId(availabilityGroup.getId());
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
   * Set AvailabilityGroup_ID.
   * @param {number} availabilityGroupId
   * @returns {AvailabilityGroupProductListLoadQuery}
   */
  setAvailabilityGroupId(availabilityGroupId) {
    this.availabilityGroupId = availabilityGroupId;
    return this;
  }

  /**
   * Set Edit_AvailabilityGroup.
   * @param {string} editAvailabilityGroup
   * @returns {AvailabilityGroupProductListLoadQuery}
   */
  setEditAvailabilityGroup(editAvailabilityGroup) {
    this.editAvailabilityGroup = editAvailabilityGroup;
    return this;
  }

  /**
   * Set AvailabilityGroup_Name.
   * @param {string} availabilityGroupName
   * @returns {AvailabilityGroupProductListLoadQuery}
   */
  setAvailabilityGroupName(availabilityGroupName) {
    this.availabilityGroupName = availabilityGroupName;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {AvailabilityGroupProductListLoadQuery}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Set Unassigned.
   * @param {boolean} unassigned
   * @returns {AvailabilityGroupProductListLoadQuery}
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

    if (!util.isNullOrUndefined(this.availabilityGroupId)) {
      data['AvailabilityGroup_ID'] = this.availabilityGroupId;
    } else if (!util.isNullOrUndefined(this.editAvailabilityGroup)) {
      data['Edit_AvailabilityGroup'] = this.editAvailabilityGroup;
    } else if (!util.isNullOrUndefined(this.availabilityGroupName)) {
      data['AvailabilityGroup_Name'] = this.availabilityGroupName;
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
  createResponse(httpResponse, data) {
    return new responses.AvailabilityGroupProductListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request AvailabilityGroupCategoryList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/availabilitygroupcategorylist_load_query
 */
class AvailabilityGroupCategoryListLoadQuery extends CategoryListLoadQuery {
  /**
   * AvailabilityGroupCategoryListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?AvailabilityGroup} availabilityGroup
   */
  constructor(client, availabilityGroup = null) {
    super(client);
    this.function = 'AvailabilityGroupCategoryList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.availabilityGroupId = null;
    this.editAvailabilityGroup = null;
    this.availabilityGroupName = null;
    this.assigned = null;
    this.unassigned = null;

    if (util.isInstanceOf(availabilityGroup, models.AvailabilityGroup)) {
      if (availabilityGroup.getId()) {
        this.setAvailabilityGroupId(availabilityGroup.getId());
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
   * Set AvailabilityGroup_ID.
   * @param {number} availabilityGroupId
   * @returns {AvailabilityGroupCategoryListLoadQuery}
   */
  setAvailabilityGroupId(availabilityGroupId) {
    this.availabilityGroupId = availabilityGroupId;
    return this;
  }

  /**
   * Set Edit_AvailabilityGroup.
   * @param {string} editAvailabilityGroup
   * @returns {AvailabilityGroupCategoryListLoadQuery}
   */
  setEditAvailabilityGroup(editAvailabilityGroup) {
    this.editAvailabilityGroup = editAvailabilityGroup;
    return this;
  }

  /**
   * Set AvailabilityGroup_Name.
   * @param {string} availabilityGroupName
   * @returns {AvailabilityGroupCategoryListLoadQuery}
   */
  setAvailabilityGroupName(availabilityGroupName) {
    this.availabilityGroupName = availabilityGroupName;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {AvailabilityGroupCategoryListLoadQuery}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Set Unassigned.
   * @param {boolean} unassigned
   * @returns {AvailabilityGroupCategoryListLoadQuery}
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

    if (!util.isNullOrUndefined(this.availabilityGroupId)) {
      data['AvailabilityGroup_ID'] = this.availabilityGroupId;
    } else if (!util.isNullOrUndefined(this.editAvailabilityGroup)) {
      data['Edit_AvailabilityGroup'] = this.editAvailabilityGroup;
    } else if (!util.isNullOrUndefined(this.availabilityGroupName)) {
      data['AvailabilityGroup_Name'] = this.availabilityGroupName;
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
  createResponse(httpResponse, data) {
    return new responses.AvailabilityGroupCategoryListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request AvailabilityGroupBusinessAccountList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/availabilitygroupbusinessaccountlist_load_query
 */
class AvailabilityGroupBusinessAccountListLoadQuery extends BusinessAccountListLoadQuery {
  /**
   * AvailabilityGroupBusinessAccountListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?AvailabilityGroup} availabilityGroup
   */
  constructor(client, availabilityGroup = null) {
    super(client);
    this.function = 'AvailabilityGroupBusinessAccountList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.availabilityGroupId = null;
    this.editAvailabilityGroup = null;
    this.availabilityGroupName = null;
    this.assigned = null;
    this.unassigned = null;

    if (util.isInstanceOf(availabilityGroup, models.AvailabilityGroup)) {
      if (availabilityGroup.getId()) {
        this.setAvailabilityGroupId(availabilityGroup.getId());
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
   * Set AvailabilityGroup_ID.
   * @param {number} availabilityGroupId
   * @returns {AvailabilityGroupBusinessAccountListLoadQuery}
   */
  setAvailabilityGroupId(availabilityGroupId) {
    this.availabilityGroupId = availabilityGroupId;
    return this;
  }

  /**
   * Set Edit_AvailabilityGroup.
   * @param {string} editAvailabilityGroup
   * @returns {AvailabilityGroupBusinessAccountListLoadQuery}
   */
  setEditAvailabilityGroup(editAvailabilityGroup) {
    this.editAvailabilityGroup = editAvailabilityGroup;
    return this;
  }

  /**
   * Set AvailabilityGroup_Name.
   * @param {string} availabilityGroupName
   * @returns {AvailabilityGroupBusinessAccountListLoadQuery}
   */
  setAvailabilityGroupName(availabilityGroupName) {
    this.availabilityGroupName = availabilityGroupName;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {AvailabilityGroupBusinessAccountListLoadQuery}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Set Unassigned.
   * @param {boolean} unassigned
   * @returns {AvailabilityGroupBusinessAccountListLoadQuery}
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

    if (!util.isNullOrUndefined(this.availabilityGroupId)) {
      data['AvailabilityGroup_ID'] = this.availabilityGroupId;
    } else if (!util.isNullOrUndefined(this.editAvailabilityGroup)) {
      data['Edit_AvailabilityGroup'] = this.editAvailabilityGroup;
    } else if (!util.isNullOrUndefined(this.availabilityGroupName)) {
      data['AvailabilityGroup_Name'] = this.availabilityGroupName;
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
  createResponse(httpResponse, data) {
    return new responses.AvailabilityGroupBusinessAccountListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request PriceGroupBusinessAccountList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/pricegroupbusinessaccountlist_load_query
 */
class PriceGroupBusinessAccountListLoadQuery extends BusinessAccountListLoadQuery {
  /**
   * PriceGroupBusinessAccountListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?PriceGroup} priceGroup
   */
  constructor(client, priceGroup = null) {
    super(client);
    this.function = 'PriceGroupBusinessAccountList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.priceGroupId = null;
    this.editPriceGroup = null;
    this.priceGroupName = null;
    this.assigned = null;
    this.unassigned = null;

    if (util.isInstanceOf(priceGroup, models.PriceGroup)) {
      if (priceGroup.getId()) {
        this.setPriceGroupId(priceGroup.getId());
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
   * Get Edit_PriceGroup.
   * @returns {string}
   */
  getEditPriceGroup() {
    return this.editPriceGroup;
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
   * @returns {PriceGroupBusinessAccountListLoadQuery}
   */
  setPriceGroupId(priceGroupId) {
    this.priceGroupId = priceGroupId;
    return this;
  }

  /**
   * Set Edit_PriceGroup.
   * @param {string} editPriceGroup
   * @returns {PriceGroupBusinessAccountListLoadQuery}
   */
  setEditPriceGroup(editPriceGroup) {
    this.editPriceGroup = editPriceGroup;
    return this;
  }

  /**
   * Set PriceGroup_Name.
   * @param {string} priceGroupName
   * @returns {PriceGroupBusinessAccountListLoadQuery}
   */
  setPriceGroupName(priceGroupName) {
    this.priceGroupName = priceGroupName;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {PriceGroupBusinessAccountListLoadQuery}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Set Unassigned.
   * @param {boolean} unassigned
   * @returns {PriceGroupBusinessAccountListLoadQuery}
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
    } else if (!util.isNullOrUndefined(this.editPriceGroup)) {
      data['Edit_PriceGroup'] = this.editPriceGroup;
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
  createResponse(httpResponse, data) {
    return new responses.PriceGroupBusinessAccountListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request PriceGroupCategoryList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/pricegroupcategorylist_load_query
 */
class PriceGroupCategoryListLoadQuery extends CategoryListLoadQuery {
  /**
   * PriceGroupCategoryListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?PriceGroup} priceGroup
   */
  constructor(client, priceGroup = null) {
    super(client);
    this.function = 'PriceGroupCategoryList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.priceGroupId = null;
    this.editPriceGroup = null;
    this.priceGroupName = null;
    this.assigned = null;
    this.unassigned = null;

    if (util.isInstanceOf(priceGroup, models.PriceGroup)) {
      if (priceGroup.getId()) {
        this.setPriceGroupId(priceGroup.getId());
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
   * Get Edit_PriceGroup.
   * @returns {string}
   */
  getEditPriceGroup() {
    return this.editPriceGroup;
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
   * @returns {PriceGroupCategoryListLoadQuery}
   */
  setPriceGroupId(priceGroupId) {
    this.priceGroupId = priceGroupId;
    return this;
  }

  /**
   * Set Edit_PriceGroup.
   * @param {string} editPriceGroup
   * @returns {PriceGroupCategoryListLoadQuery}
   */
  setEditPriceGroup(editPriceGroup) {
    this.editPriceGroup = editPriceGroup;
    return this;
  }

  /**
   * Set PriceGroup_Name.
   * @param {string} priceGroupName
   * @returns {PriceGroupCategoryListLoadQuery}
   */
  setPriceGroupName(priceGroupName) {
    this.priceGroupName = priceGroupName;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {PriceGroupCategoryListLoadQuery}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Set Unassigned.
   * @param {boolean} unassigned
   * @returns {PriceGroupCategoryListLoadQuery}
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
    } else if (!util.isNullOrUndefined(this.editPriceGroup)) {
      data['Edit_PriceGroup'] = this.editPriceGroup;
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
  createResponse(httpResponse, data) {
    return new responses.PriceGroupCategoryListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request PriceGroupExcludedCategoryList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/pricegroupexcludedcategorylist_load_query
 */
class PriceGroupExcludedCategoryListLoadQuery extends CategoryListLoadQuery {
  /**
   * PriceGroupExcludedCategoryListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?PriceGroup} priceGroup
   */
  constructor(client, priceGroup = null) {
    super(client);
    this.function = 'PriceGroupExcludedCategoryList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.priceGroupId = null;
    this.editPriceGroup = null;
    this.priceGroupName = null;
    this.assigned = null;
    this.unassigned = null;

    if (util.isInstanceOf(priceGroup, models.PriceGroup)) {
      if (priceGroup.getId()) {
        this.setPriceGroupId(priceGroup.getId());
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
   * Get Edit_PriceGroup.
   * @returns {string}
   */
  getEditPriceGroup() {
    return this.editPriceGroup;
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
   * @returns {PriceGroupExcludedCategoryListLoadQuery}
   */
  setPriceGroupId(priceGroupId) {
    this.priceGroupId = priceGroupId;
    return this;
  }

  /**
   * Set Edit_PriceGroup.
   * @param {string} editPriceGroup
   * @returns {PriceGroupExcludedCategoryListLoadQuery}
   */
  setEditPriceGroup(editPriceGroup) {
    this.editPriceGroup = editPriceGroup;
    return this;
  }

  /**
   * Set PriceGroup_Name.
   * @param {string} priceGroupName
   * @returns {PriceGroupExcludedCategoryListLoadQuery}
   */
  setPriceGroupName(priceGroupName) {
    this.priceGroupName = priceGroupName;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {PriceGroupExcludedCategoryListLoadQuery}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Set Unassigned.
   * @param {boolean} unassigned
   * @returns {PriceGroupExcludedCategoryListLoadQuery}
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
    } else if (!util.isNullOrUndefined(this.editPriceGroup)) {
      data['Edit_PriceGroup'] = this.editPriceGroup;
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
  createResponse(httpResponse, data) {
    return new responses.PriceGroupExcludedCategoryListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request PriceGroupExcludedProductList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/pricegroupexcludedproductlist_load_query
 */
class PriceGroupExcludedProductListLoadQuery extends ProductListLoadQuery {
  /**
   * PriceGroupExcludedProductListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?PriceGroup} priceGroup
   */
  constructor(client, priceGroup = null) {
    super(client);
    this.function = 'PriceGroupExcludedProductList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.priceGroupId = null;
    this.editPriceGroup = null;
    this.priceGroupName = null;
    this.assigned = null;
    this.unassigned = null;

    if (util.isInstanceOf(priceGroup, models.PriceGroup)) {
      if (priceGroup.getId()) {
        this.setPriceGroupId(priceGroup.getId());
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
   * Get Edit_PriceGroup.
   * @returns {string}
   */
  getEditPriceGroup() {
    return this.editPriceGroup;
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
   * @returns {PriceGroupExcludedProductListLoadQuery}
   */
  setPriceGroupId(priceGroupId) {
    this.priceGroupId = priceGroupId;
    return this;
  }

  /**
   * Set Edit_PriceGroup.
   * @param {string} editPriceGroup
   * @returns {PriceGroupExcludedProductListLoadQuery}
   */
  setEditPriceGroup(editPriceGroup) {
    this.editPriceGroup = editPriceGroup;
    return this;
  }

  /**
   * Set PriceGroup_Name.
   * @param {string} priceGroupName
   * @returns {PriceGroupExcludedProductListLoadQuery}
   */
  setPriceGroupName(priceGroupName) {
    this.priceGroupName = priceGroupName;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {PriceGroupExcludedProductListLoadQuery}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Set Unassigned.
   * @param {boolean} unassigned
   * @returns {PriceGroupExcludedProductListLoadQuery}
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
    } else if (!util.isNullOrUndefined(this.editPriceGroup)) {
      data['Edit_PriceGroup'] = this.editPriceGroup;
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
  createResponse(httpResponse, data) {
    return new responses.PriceGroupExcludedProductListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request PriceGroupQualifyingProductList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/pricegroupqualifyingproductlist_load_query
 */
class PriceGroupQualifyingProductListLoadQuery extends ProductListLoadQuery {
  /**
   * PriceGroupQualifyingProductListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?PriceGroup} priceGroup
   */
  constructor(client, priceGroup = null) {
    super(client);
    this.function = 'PriceGroupQualifyingProductList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.priceGroupId = null;
    this.editPriceGroup = null;
    this.priceGroupName = null;
    this.assigned = null;
    this.unassigned = null;

    if (util.isInstanceOf(priceGroup, models.PriceGroup)) {
      if (priceGroup.getId()) {
        this.setPriceGroupId(priceGroup.getId());
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
   * Get Edit_PriceGroup.
   * @returns {string}
   */
  getEditPriceGroup() {
    return this.editPriceGroup;
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
   * @returns {PriceGroupQualifyingProductListLoadQuery}
   */
  setPriceGroupId(priceGroupId) {
    this.priceGroupId = priceGroupId;
    return this;
  }

  /**
   * Set Edit_PriceGroup.
   * @param {string} editPriceGroup
   * @returns {PriceGroupQualifyingProductListLoadQuery}
   */
  setEditPriceGroup(editPriceGroup) {
    this.editPriceGroup = editPriceGroup;
    return this;
  }

  /**
   * Set PriceGroup_Name.
   * @param {string} priceGroupName
   * @returns {PriceGroupQualifyingProductListLoadQuery}
   */
  setPriceGroupName(priceGroupName) {
    this.priceGroupName = priceGroupName;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {PriceGroupQualifyingProductListLoadQuery}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Set Unassigned.
   * @param {boolean} unassigned
   * @returns {PriceGroupQualifyingProductListLoadQuery}
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
    } else if (!util.isNullOrUndefined(this.editPriceGroup)) {
      data['Edit_PriceGroup'] = this.editPriceGroup;
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
  createResponse(httpResponse, data) {
    return new responses.PriceGroupQualifyingProductListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request CouponCustomerList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/couponcustomerlist_load_query
 */
class CouponCustomerListLoadQuery extends CustomerListLoadQuery {
  /**
   * CouponCustomerListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?Coupon} coupon
   */
  constructor(client, coupon = null) {
    super(client);
    this.function = 'CouponCustomerList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.couponId = null;
    this.editCoupon = null;
    this.couponCode = null;
    this.assigned = null;
    this.unassigned = null;

    if (util.isInstanceOf(coupon, models.Coupon)) {
      if (coupon.getId()) {
        this.setCouponId(coupon.getId());
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
   * @returns {CouponCustomerListLoadQuery}
   */
  setCouponId(couponId) {
    this.couponId = couponId;
    return this;
  }

  /**
   * Set Edit_Coupon.
   * @param {string} editCoupon
   * @returns {CouponCustomerListLoadQuery}
   */
  setEditCoupon(editCoupon) {
    this.editCoupon = editCoupon;
    return this;
  }

  /**
   * Set Coupon_Code.
   * @param {string} couponCode
   * @returns {CouponCustomerListLoadQuery}
   */
  setCouponCode(couponCode) {
    this.couponCode = couponCode;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {CouponCustomerListLoadQuery}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Set Unassigned.
   * @param {boolean} unassigned
   * @returns {CouponCustomerListLoadQuery}
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
  createResponse(httpResponse, data) {
    return new responses.CouponCustomerListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request BusinessAccountCustomerList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/businessaccountcustomerlist_load_query
 */
class BusinessAccountCustomerListLoadQuery extends CustomerListLoadQuery {
  /**
   * BusinessAccountCustomerListLoadQuery Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'BusinessAccountCustomerList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.businessAccountId = null;
    this.editBusinessAccount = null;
    this.businessAccountTitle = null;
    this.assigned = null;
    this.unassigned = null;
  }

  /**
   * Get BusinessAccount_ID.
   * @returns {number}
   */
  getBusinessAccountId() {
    return this.businessAccountId;
  }

  /**
   * Get Edit_BusinessAccount.
   * @returns {number}
   */
  getEditBusinessAccount() {
    return this.editBusinessAccount;
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
   * Get Unassigned.
   * @returns {boolean}
   */
  getUnassigned() {
    return this.unassigned;
  }

  /**
   * Set BusinessAccount_ID.
   * @param {number} businessAccountId
   * @returns {BusinessAccountCustomerListLoadQuery}
   */
  setBusinessAccountId(businessAccountId) {
    this.businessAccountId = businessAccountId;
    return this;
  }

  /**
   * Set Edit_BusinessAccount.
   * @param {number} editBusinessAccount
   * @returns {BusinessAccountCustomerListLoadQuery}
   */
  setEditBusinessAccount(editBusinessAccount) {
    this.editBusinessAccount = editBusinessAccount;
    return this;
  }

  /**
   * Set BusinessAccount_Title.
   * @param {string} businessAccountTitle
   * @returns {BusinessAccountCustomerListLoadQuery}
   */
  setBusinessAccountTitle(businessAccountTitle) {
    this.businessAccountTitle = businessAccountTitle;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {BusinessAccountCustomerListLoadQuery}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Set Unassigned.
   * @param {boolean} unassigned
   * @returns {BusinessAccountCustomerListLoadQuery}
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

    if (!util.isNullOrUndefined(this.businessAccountId)) {
      data['BusinessAccount_ID'] = this.businessAccountId;
    } else if (!util.isNullOrUndefined(this.editBusinessAccount)) {
      data['Edit_BusinessAccount'] = this.editBusinessAccount;
    } else if (!util.isNullOrUndefined(this.businessAccountTitle)) {
      data['BusinessAccount_Title'] = this.businessAccountTitle;
    }

    if (!util.isNullOrUndefined(this.businessAccountId)) {
      data['BusinessAccount_ID'] = this.businessAccountId;
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
  createResponse(httpResponse, data) {
    return new responses.BusinessAccountCustomerListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request RelatedProductList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/relatedproductlist_load_query
 */
class RelatedProductListLoadQuery extends ProductListLoadQuery {
  /**
   * RelatedProductListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client);
    this.function = 'RelatedProductList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productId = null;
    this.productCode = null;
    this.editProduct = null;
    this.assigned = null;
    this.unassigned = null;

    if (util.isInstanceOf(product, models.Product)) {
      if (product.getId()) {
        this.setProductId(product.getId());
      } else if (product.getCode()) {
        this.setEditProduct(product.getCode());
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
   * Set Product_ID.
   * @param {number} productId
   * @returns {RelatedProductListLoadQuery}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {RelatedProductListLoadQuery}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {RelatedProductListLoadQuery}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {RelatedProductListLoadQuery}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Set Unassigned.
   * @param {boolean} unassigned
   * @returns {RelatedProductListLoadQuery}
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

    if (!util.isNullOrUndefined(this.productId)) {
      data['Product_ID'] = this.productId;
    } else if (!util.isNullOrUndefined(this.productCode)) {
      data['Product_Code'] = this.productCode;
    } else if (!util.isNullOrUndefined(this.editProduct)) {
      data['Edit_Product'] = this.editProduct;
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
  createResponse(httpResponse, data) {
    return new responses.RelatedProductListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * Handles API Request AttributeTemplateProductList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/attributetemplateproductlist_load_query
 */
class AttributeTemplateProductListLoadQuery extends ProductListLoadQuery {
  /**
   * AttributeTemplateProductListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?AttributeTemplate} attributeTemplate
   */
  constructor(client, attributeTemplate = null) {
    super(client);
    this.function = 'AttributeTemplateProductList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.attributeTemplateId = null;
    this.attributeTemplateCode = null;
    this.editAttributeTemplate = null;
    this.assigned = null;
    this.unassigned = null;

    if (util.isInstanceOf(attributeTemplate, models.AttributeTemplate)) {
      if (attributeTemplate.getId()) {
        this.setAttributeTemplateId(attributeTemplate.getId());
      } else if (attributeTemplate.getCode()) {
        this.setAttributeTemplateCode(attributeTemplate.getCode());
      } else if (attributeTemplate.getCode()) {
        this.setEditAttributeTemplate(attributeTemplate.getCode());
      }
    }
  }

  /**
   * Get AttributeTemplate_ID.
   * @returns {number}
   */
  getAttributeTemplateId() {
    return this.attributeTemplateId;
  }

  /**
   * Get AttributeTemplate_Code.
   * @returns {string}
   */
  getAttributeTemplateCode() {
    return this.attributeTemplateCode;
  }

  /**
   * Get Edit_AttributeTemplate.
   * @returns {string}
   */
  getEditAttributeTemplate() {
    return this.editAttributeTemplate;
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
   * Set AttributeTemplate_ID.
   * @param {number} attributeTemplateId
   * @returns {AttributeTemplateProductListLoadQuery}
   */
  setAttributeTemplateId(attributeTemplateId) {
    this.attributeTemplateId = attributeTemplateId;
    return this;
  }

  /**
   * Set AttributeTemplate_Code.
   * @param {string} attributeTemplateCode
   * @returns {AttributeTemplateProductListLoadQuery}
   */
  setAttributeTemplateCode(attributeTemplateCode) {
    this.attributeTemplateCode = attributeTemplateCode;
    return this;
  }

  /**
   * Set Edit_AttributeTemplate.
   * @param {string} editAttributeTemplate
   * @returns {AttributeTemplateProductListLoadQuery}
   */
  setEditAttributeTemplate(editAttributeTemplate) {
    this.editAttributeTemplate = editAttributeTemplate;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {AttributeTemplateProductListLoadQuery}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Set Unassigned.
   * @param {boolean} unassigned
   * @returns {AttributeTemplateProductListLoadQuery}
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

    if (!util.isNullOrUndefined(this.attributeTemplateId)) {
      data['AttributeTemplate_ID'] = this.attributeTemplateId;
    } else if (!util.isNullOrUndefined(this.attributeTemplateCode)) {
      data['AttributeTemplate_Code'] = this.attributeTemplateCode;
    } else if (!util.isNullOrUndefined(this.editAttributeTemplate)) {
      data['Edit_AttributeTemplate'] = this.editAttributeTemplate;
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
  createResponse(httpResponse, data) {
    return new responses.AttributeTemplateProductListLoadQuery(this, httpResponse, data);
  }
}

/** 
 * This class is a utility to create custom requests.
 */
class RequestBuilder extends Request
{
  /**
   * RequestBuilder Constructor.
   * @param {?BaseClient} client
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
  createResponse(httpResponse, data) {
    return new responses.RequestBuilder(this, httpResponse, data);
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
