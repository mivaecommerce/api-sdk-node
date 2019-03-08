/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * $Id$
 */

const util      = require('./util');
const { Model } = require('./abstract');

/** @module Model */

/** AvailabilityGroup data model. */
class AvailabilityGroup extends Model {
  /**
   * AvailabilityGroup Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get id.
   * @returns {number}
   */
  getId() {
    return this.getField('id', 0);
  }
  
  /**
   * Get name.
   * @returns {string}
   */
  getName() {
    return this.getField('name');
  }
}

/** Customer data model. */
class Customer extends Model {
  /**
   * Customer Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);

    if (!util.isUndefined(this.CustomField_Values)) {
      if (!util.isInstanceOf(this.CustomField_Values, CustomFieldValues) && util.isObject(this.CustomField_Values)) {
        this.CustomField_Values = new CustomFieldValues(this.CustomField_Values);
      } else if (!util.isInstanceOf(this.CustomField_Values, CustomFieldValues)) {
        throw new Error(util.format('Expected CustomFieldValues or an Object but got %s',
          typeof this.CustomField_Values));
      }
    } else {
      this.CustomField_Values = {};
    }
  }

  /**
   * Get id.
   * @returns {number}
   */
  getId() {
    return this.getField('id', 0);
  }
  
  /**
   * Get account_id.
   * @returns {number}
   */
  getAccountId() {
    return this.getField('account_id', 0);
  }
  
  /**
   * Get login.
   * @returns {string}
   */
  getLogin() {
    return this.getField('login');
  }
  
  /**
   * Get pw_email.
   * @returns {string}
   */
  getPasswordEmail() {
    return this.getField('pw_email');
  }
  
  /**
   * Get ship_id.
   * @returns {number}
   */
  getShipId() {
    return this.getField('ship_id', 0);
  }
  
  /**
   * Get ship_res.
   * @returns {boolean}
   */
  getShippingResidential() {
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
   * Get bill_id.
   * @returns {number}
   */
  getBillId() {
    return this.getField('bill_id', 0);
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
   * Get note_count.
   * @returns {number}
   */
  getNoteCount() {
    return this.getField('note_count', 0);
  }
  
  /**
   * Get dt_created.
   * @returns {number}
   */
  getCreatedOn() {
    return this.getField('dt_created', 0);
  }
  
  /**
   * Get dt_login.
   * @returns {number}
   */
  getLastLogin() {
    return this.getField('dt_login', 0);
  }
  
  /**
   * Get credit.
   * @returns {number}
   */
  getCredit() {
    return this.getField('credit', 0.00);
  }
  
  /**
   * Get formatted_credit.
   * @returns {string}
   */
  getFormattedCredit() {
    return this.getField('formatted_credit');
  }
  
  /**
   * Get business_title.
   * @returns {string}
   */
  getBusinessTitle() {
    return this.getField('business_title');
  }
  
  /**
   * Get CustomField_Values.
   * @returns {CustomFieldValues|*}
   */
  getCustomFieldValues() {
    return this.getField('CustomField_Values', null);
  }
  
  /**
   * Set login.
   * @param {string} login
   * @returns {Customer}
   */
  setLogin(login) {
    return this.setField('login', login);
  }

  /**
   * Set pw_email.
   * @param {string} passwordEmail
   * @returns {Customer}
   */
  setPasswordEmail(passwordEmail) {
    return this.setField('pw_email', passwordEmail);
  }

  /**
   * Set ship_res.
   * @param {boolean} shippingResidential
   * @returns {Customer}
   */
  setShippingResidential(shippingResidential) {
    return this.setField('ship_res', shippingResidential);
  }

  /**
   * Set ship_fname.
   * @param {string} shipFirstName
   * @returns {Customer}
   */
  setShipFirstName(shipFirstName) {
    return this.setField('ship_fname', shipFirstName);
  }

  /**
   * Set ship_lname.
   * @param {string} shipLastName
   * @returns {Customer}
   */
  setShipLastName(shipLastName) {
    return this.setField('ship_lname', shipLastName);
  }

  /**
   * Set ship_email.
   * @param {string} shipEmail
   * @returns {Customer}
   */
  setShipEmail(shipEmail) {
    return this.setField('ship_email', shipEmail);
  }

  /**
   * Set ship_comp.
   * @param {string} shipCompany
   * @returns {Customer}
   */
  setShipCompany(shipCompany) {
    return this.setField('ship_comp', shipCompany);
  }

  /**
   * Set ship_phone.
   * @param {string} shipPhone
   * @returns {Customer}
   */
  setShipPhone(shipPhone) {
    return this.setField('ship_phone', shipPhone);
  }

  /**
   * Set ship_fax.
   * @param {string} shipFax
   * @returns {Customer}
   */
  setShipFax(shipFax) {
    return this.setField('ship_fax', shipFax);
  }

  /**
   * Set ship_addr1.
   * @param {string} shipAddress1
   * @returns {Customer}
   */
  setShipAddress1(shipAddress1) {
    return this.setField('ship_addr1', shipAddress1);
  }

  /**
   * Set ship_addr2.
   * @param {string} shipAddress2
   * @returns {Customer}
   */
  setShipAddress2(shipAddress2) {
    return this.setField('ship_addr2', shipAddress2);
  }

  /**
   * Set ship_city.
   * @param {string} shipCity
   * @returns {Customer}
   */
  setShipCity(shipCity) {
    return this.setField('ship_city', shipCity);
  }

  /**
   * Set ship_state.
   * @param {string} shipState
   * @returns {Customer}
   */
  setShipState(shipState) {
    return this.setField('ship_state', shipState);
  }

  /**
   * Set ship_zip.
   * @param {string} shipZip
   * @returns {Customer}
   */
  setShipZip(shipZip) {
    return this.setField('ship_zip', shipZip);
  }

  /**
   * Set ship_cntry.
   * @param {string} shipCountry
   * @returns {Customer}
   */
  setShipCountry(shipCountry) {
    return this.setField('ship_cntry', shipCountry);
  }

  /**
   * Set bill_fname.
   * @param {string} billFirstName
   * @returns {Customer}
   */
  setBillFirstName(billFirstName) {
    return this.setField('bill_fname', billFirstName);
  }

  /**
   * Set bill_lname.
   * @param {string} billLastName
   * @returns {Customer}
   */
  setBillLastName(billLastName) {
    return this.setField('bill_lname', billLastName);
  }

  /**
   * Set bill_email.
   * @param {string} billEmail
   * @returns {Customer}
   */
  setBillEmail(billEmail) {
    return this.setField('bill_email', billEmail);
  }

  /**
   * Set bill_comp.
   * @param {string} billCompany
   * @returns {Customer}
   */
  setBillCompany(billCompany) {
    return this.setField('bill_comp', billCompany);
  }

  /**
   * Set bill_phone.
   * @param {string} billPhone
   * @returns {Customer}
   */
  setBillPhone(billPhone) {
    return this.setField('bill_phone', billPhone);
  }

  /**
   * Set bill_fax.
   * @param {string} billFax
   * @returns {Customer}
   */
  setBillFax(billFax) {
    return this.setField('bill_fax', billFax);
  }

  /**
   * Set bill_addr1.
   * @param {string} billAddress1
   * @returns {Customer}
   */
  setBillAddress1(billAddress1) {
    return this.setField('bill_addr1', billAddress1);
  }

  /**
   * Set bill_addr2.
   * @param {string} billAddress2
   * @returns {Customer}
   */
  setBillAddress2(billAddress2) {
    return this.setField('bill_addr2', billAddress2);
  }

  /**
   * Set bill_city.
   * @param {string} billCity
   * @returns {Customer}
   */
  setBillCity(billCity) {
    return this.setField('bill_city', billCity);
  }

  /**
   * Set bill_state.
   * @param {string} billState
   * @returns {Customer}
   */
  setBillState(billState) {
    return this.setField('bill_state', billState);
  }

  /**
   * Set bill_zip.
   * @param {string} billZip
   * @returns {Customer}
   */
  setBillZip(billZip) {
    return this.setField('bill_zip', billZip);
  }

  /**
   * Set bill_cntry.
   * @param {string} billCountry
   * @returns {Customer}
   */
  setBillCountry(billCountry) {
    return this.setField('bill_cntry', billCountry);
  }

  /**
   * Set CustomField_Values.
   * @param {CustomFieldValues|Object} customFieldValues
   * @returns {Customer}
   * @throws {Error}
   */
  setCustomFieldValues(customFieldValues) {
    if (util.isInstanceOf(customFieldValues, CustomFieldValues) || util.isNull(customFieldValues)) {
      return this.setField('CustomField_Values', customFieldValues);
    } else if (util.isObject(customFieldValues)) {
      return this.setField('CustomField_Values', new CustomFieldValues(customFieldValues));
    }

    throw new Error(util.format('Expected instance of CustomFieldValues, Object, or null but got %s',
      typeof customFieldValues));
  }
  
  /**
   * @override
   */
  toObject() {
    var ret = Object.assign(this);

    if (util.isInstanceOf(ret['CustomField_Values'], CustomFieldValues)) {
      ret['CustomField_Values'] = ret['CustomField_Values'].toObject();
    }

    return ret;
  }
}

/** CUSTOMER_SCOPE constants. */
/** @ignore */
const CUSTOMER_SCOPE_ALL_SHOPPERS = 'A';
/** @ignore */
const CUSTOMER_SCOPE_SPECIFIC_CUSTOMERS = 'X';
/** @ignore */
const CUSTOMER_SCOPE_ALL_LOGGED_IN = 'L';

/** Coupon data model. */
class Coupon extends Model {
  /**
   * Coupon Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Constant CUSTOMER_SCOPE_ALL_SHOPPERS
   * @returns {string}
   * @const
   * @static
   */
  static get CUSTOMER_SCOPE_ALL_SHOPPERS() {
    return CUSTOMER_SCOPE_ALL_SHOPPERS;
  }

  /**
   * Constant CUSTOMER_SCOPE_SPECIFIC_CUSTOMERS
   * @returns {string}
   * @const
   * @static
   */
  static get CUSTOMER_SCOPE_SPECIFIC_CUSTOMERS() {
    return CUSTOMER_SCOPE_SPECIFIC_CUSTOMERS;
  }

  /**
   * Constant CUSTOMER_SCOPE_ALL_LOGGED_IN
   * @returns {string}
   * @const
   * @static
   */
  static get CUSTOMER_SCOPE_ALL_LOGGED_IN() {
    return CUSTOMER_SCOPE_ALL_LOGGED_IN;
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
   * Get descrip.
   * @returns {string}
   */
  getDescription() {
    return this.getField('descrip');
  }
  
  /**
   * Get custscope.
   * @returns {string}
   */
  getCustomerScope() {
    return this.getField('custscope');
  }
  
  /**
   * Get dt_start.
   * @returns {number}
   */
  getDateTimeStart() {
    return this.getField('dt_start', 0);
  }
  
  /**
   * Get dt_end.
   * @returns {number}
   */
  getDateTimeEnd() {
    return this.getField('dt_end', 0);
  }
  
  /**
   * Get max_use.
   * @returns {number}
   */
  getMaxUse() {
    return this.getField('max_use', 0);
  }
  
  /**
   * Get max_per.
   * @returns {number}
   */
  getMaxPer() {
    return this.getField('max_per', 0);
  }
  
  /**
   * Get active.
   * @returns {boolean}
   */
  getActive() {
    return this.getField('active', false);
  }
  
  /**
   * Get use_count.
   * @returns {number}
   */
  getUseCount() {
    return this.getField('use_count', 0);
  }
  
  /**
   * Set code.
   * @param {string} code
   * @returns {Coupon}
   */
  setCode(code) {
    return this.setField('code', code);
  }

  /**
   * Set descrip.
   * @param {string} description
   * @returns {Coupon}
   */
  setDescription(description) {
    return this.setField('descrip', description);
  }

  /**
   * Set custscope.
   * @param {string} customerScope
   * @returns {Coupon}
   */
  setCustomerScope(customerScope) {
    return this.setField('custscope', customerScope);
  }

  /**
   * Set dt_start.
   * @param {Date|number} dateTimeStart
   * @returns {Coupon}
   */
  setDateTimeStart(dateTimeStart) {
    if (util.isDate(dateTimeStart)) {
      return this.setField('dt_start', Math.floor(dateTimeStart.getTime()/1000));
    }

    return this.setField('dt_start', dateTimeStart);
  }

  /**
   * Set dt_end.
   * @param {Date|number} dateTimeEnd
   * @returns {Coupon}
   */
  setDateTimeEnd(dateTimeEnd) {
    if (util.isDate(dateTimeEnd)) {
      return this.setField('dt_end', Math.floor(dateTimeEnd.getTime()/1000));
    }

    return this.setField('dt_end', dateTimeEnd);
  }

  /**
   * Set max_use.
   * @param {number} maxUse
   * @returns {Coupon}
   */
  setMaxUse(maxUse) {
    return this.setField('max_use', maxUse);
  }

  /**
   * Set max_per.
   * @param {number} maxPer
   * @returns {Coupon}
   */
  setMaxPer(maxPer) {
    return this.setField('max_per', maxPer);
  }

  /**
   * Set active.
   * @param {boolean} active
   * @returns {Coupon}
   */
  setActive(active) {
    return this.setField('active', active);
  }
}

/** Module data model. */
class Module extends Model {
  /**
   * Module Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
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
   * Get name.
   * @returns {string}
   */
  getName() {
    return this.getField('name');
  }
  
  /**
   * Get provider.
   * @returns {string}
   */
  getProvider() {
    return this.getField('provider');
  }
  
  /**
   * Get api_ver.
   * @returns {string}
   */
  getApiVersion() {
    return this.getField('api_ver');
  }
  
  /**
   * Get version.
   * @returns {string}
   */
  getVersion() {
    return this.getField('version');
  }
  
  /**
   * Get module.
   * @returns {string}
   */
  getModule() {
    return this.getField('module');
  }
  
  /**
   * Get refcount.
   * @returns {number}
   */
  getReferenceCount() {
    return this.getField('refcount', 0);
  }
  
  /**
   * Get active.
   * @returns {boolean}
   */
  getActive() {
    return this.getField('active', false);
  }
}

/** Note data model. */
class Note extends Model {
  /**
   * Note Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get id.
   * @returns {number}
   */
  getId() {
    return this.getField('id', 0);
  }
  
  /**
   * Get cust_id.
   * @returns {number}
   */
  getCustomerId() {
    return this.getField('cust_id', 0);
  }
  
  /**
   * Get account_id.
   * @returns {number}
   */
  getAccountId() {
    return this.getField('account_id', 0);
  }
  
  /**
   * Get order_id.
   * @returns {number}
   */
  getOrderId() {
    return this.getField('order_id', 0);
  }
  
  /**
   * Get user_id.
   * @returns {number}
   */
  getUserId() {
    return this.getField('user_id', 0);
  }
  
  /**
   * Get notetext.
   * @returns {string}
   */
  getNoteText() {
    return this.getField('notetext');
  }
  
  /**
   * Get dtstamp.
   * @returns {number}
   */
  getDateTimeStamp() {
    return this.getField('dtstamp', 0);
  }
  
  /**
   * Get cust_login.
   * @returns {string}
   */
  getCustomerLogin() {
    return this.getField('cust_login');
  }
  
  /**
   * Get business_title.
   * @returns {string}
   */
  getBusinessTitle() {
    return this.getField('business_title');
  }
  
  /**
   * Get admin_user.
   * @returns {string}
   */
  getAdminUser() {
    return this.getField('admin_user');
  }
  
  /**
   * Set cust_id.
   * @param {number} customerId
   * @returns {Note}
   */
  setCustomerId(customerId) {
    return this.setField('cust_id', customerId);
  }

  /**
   * Set account_id.
   * @param {number} accountId
   * @returns {Note}
   */
  setAccountId(accountId) {
    return this.setField('account_id', accountId);
  }

  /**
   * Set order_id.
   * @param {number} orderId
   * @returns {Note}
   */
  setOrderId(orderId) {
    return this.setField('order_id', orderId);
  }

  /**
   * Set notetext.
   * @param {string} noteText
   * @returns {Note}
   */
  setNoteText(noteText) {
    return this.setField('notetext', noteText);
  }
}

/** ELIGIBILITY constants. */
/** @ignore */
const ELIGIBILITY_COUPON = 'C';
/** @ignore */
const ELIGIBILITY_ALL = 'A';
/** @ignore */
const ELIGIBILITY_CUSTOMER = 'X';
/** @ignore */
const ELIGIBILITY_LOGGED_IN = 'L';

/** PriceGroup data model. */
class PriceGroup extends Model {
  /**
   * PriceGroup Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);

    if (!util.isUndefined(this.module)) {
      if (!util.isInstanceOf(this.module, Module) && util.isObject(this.module)) {
        this.module = new Module(this.module);
      } else if (!util.isInstanceOf(this.module, Module)) {
        throw new Error(util.format('Expected Module or an Object but got %s',
          typeof this.module));
      }
    } else {
      this.module = {};
    }

    if (!util.isUndefined(this.capabilities)) {
      if (!util.isInstanceOf(this.capabilities, DiscountModuleCapabilities) && util.isObject(this.capabilities)) {
        this.capabilities = new DiscountModuleCapabilities(this.capabilities);
      } else if (!util.isInstanceOf(this.capabilities, DiscountModuleCapabilities)) {
        throw new Error(util.format('Expected DiscountModuleCapabilities or an Object but got %s',
          typeof this.capabilities));
      }
    } else {
      this.capabilities = {};
    }
  }

  /**
   * Constant ELIGIBILITY_COUPON
   * @returns {string}
   * @const
   * @static
   */
  static get ELIGIBILITY_COUPON() {
    return ELIGIBILITY_COUPON;
  }

  /**
   * Constant ELIGIBILITY_ALL
   * @returns {string}
   * @const
   * @static
   */
  static get ELIGIBILITY_ALL() {
    return ELIGIBILITY_ALL;
  }

  /**
   * Constant ELIGIBILITY_CUSTOMER
   * @returns {string}
   * @const
   * @static
   */
  static get ELIGIBILITY_CUSTOMER() {
    return ELIGIBILITY_CUSTOMER;
  }

  /**
   * Constant ELIGIBILITY_LOGGED_IN
   * @returns {string}
   * @const
   * @static
   */
  static get ELIGIBILITY_LOGGED_IN() {
    return ELIGIBILITY_LOGGED_IN;
  }

  /**
   * Get id.
   * @returns {number}
   */
  getId() {
    return this.getField('id', 0);
  }
  
  /**
   * Get name.
   * @returns {string}
   */
  getName() {
    return this.getField('name');
  }
  
  /**
   * Get custscope.
   * @returns {string}
   */
  getCustomerScope() {
    return this.getField('custscope');
  }
  
  /**
   * Get discount.
   * @returns {number}
   */
  getDiscount() {
    return this.getField('discount', 0.00);
  }
  
  /**
   * Get markup.
   * @returns {number}
   */
  getMarkup() {
    return this.getField('markup', 0.00);
  }
  
  /**
   * Get dt_start.
   * @returns {number}
   */
  getDateTimeStart() {
    return this.getField('dt_start', 0);
  }
  
  /**
   * Get dt_end.
   * @returns {number}
   */
  getDateTimeEnd() {
    return this.getField('dt_end', 0);
  }
  
  /**
   * Get qmn_subtot.
   * @returns {number}
   */
  getMinimumSubtotal() {
    return this.getField('qmn_subtot', 0.00);
  }
  
  /**
   * Get qmx_subtot.
   * @returns {number}
   */
  getMaximumSubtotal() {
    return this.getField('qmx_subtot', 0.00);
  }
  
  /**
   * Get qmn_quan.
   * @returns {number}
   */
  getMinimumQuantity() {
    return this.getField('qmn_quan', 0);
  }
  
  /**
   * Get qmx_quan.
   * @returns {number}
   */
  getMaximumQuantity() {
    return this.getField('qmx_quan', 0);
  }
  
  /**
   * Get qmn_weight.
   * @returns {number}
   */
  getMinimumWeight() {
    return this.getField('qmn_weight', 0.00);
  }
  
  /**
   * Get qmx_weight.
   * @returns {number}
   */
  getMaximumWeight() {
    return this.getField('qmx_weight', 0.00);
  }
  
  /**
   * Get bmn_subtot.
   * @returns {number}
   */
  getBasketMinimumSubtotal() {
    return this.getField('bmn_subtot', 0.00);
  }
  
  /**
   * Get bmx_subtot.
   * @returns {number}
   */
  getBasketMaximumSubtotal() {
    return this.getField('bmx_subtot', 0.00);
  }
  
  /**
   * Get bmn_quan.
   * @returns {number}
   */
  getBasketMinimumQuantity() {
    return this.getField('bmn_quan', 0);
  }
  
  /**
   * Get bmx_quan.
   * @returns {number}
   */
  getBasketMaximumQuantity() {
    return this.getField('bmx_quan', 0);
  }
  
  /**
   * Get bmn_weight.
   * @returns {number}
   */
  getBasketMinimumWeight() {
    return this.getField('bmn_weight', 0.00);
  }
  
  /**
   * Get bmx_weight.
   * @returns {number}
   */
  getBasketMaximumWeight() {
    return this.getField('bmx_weight', 0.00);
  }
  
  /**
   * Get priority.
   * @returns {number}
   */
  getPriority() {
    return this.getField('priority', 0);
  }
  
  /**
   * Get module.
   * @returns {Module|*}
   */
  getModule() {
    return this.getField('module', null);
  }
  
  /**
   * Get capabilities.
   * @returns {DiscountModuleCapabilities|*}
   */
  getCapabilities() {
    return this.getField('capabilities', null);
  }
  
  /**
   * Get exclusion.
   * @returns {boolean}
   */
  getExclusion() {
    return this.getField('exclusion', false);
  }
  
  /**
   * Get descrip.
   * @returns {string}
   */
  getDescription() {
    return this.getField('descrip');
  }
  
  /**
   * Get display.
   * @returns {boolean}
   */
  getDisplay() {
    return this.getField('display', false);
  }
  
  /**
   * Set custscope.
   * @param {string} customerScope
   * @returns {PriceGroup}
   */
  setCustomerScope(customerScope) {
    return this.setField('custscope', customerScope);
  }

  /**
   * Set discount.
   * @param {number} discount
   * @returns {PriceGroup}
   */
  setDiscount(discount) {
    return this.setField('discount', discount);
  }

  /**
   * Set dt_start.
   * @param {Date|number} dateTimeStart
   * @returns {PriceGroup}
   */
  setDateTimeStart(dateTimeStart) {
    if (util.isDate(dateTimeStart)) {
      return this.setField('dt_start', Math.floor(dateTimeStart.getTime()/1000));
    }

    return this.setField('dt_start', dateTimeStart);
  }

  /**
   * Set dt_end.
   * @param {Date|number} dateTimeEnd
   * @returns {PriceGroup}
   */
  setDateTimeEnd(dateTimeEnd) {
    if (util.isDate(dateTimeEnd)) {
      return this.setField('dt_end', Math.floor(dateTimeEnd.getTime()/1000));
    }

    return this.setField('dt_end', dateTimeEnd);
  }

  /**
   * Set qmn_subtot.
   * @param {number} minimumSubtotal
   * @returns {PriceGroup}
   */
  setMinimumSubtotal(minimumSubtotal) {
    return this.setField('qmn_subtot', minimumSubtotal);
  }

  /**
   * Set qmx_subtot.
   * @param {number} maximumSubtotal
   * @returns {PriceGroup}
   */
  setMaximumSubtotal(maximumSubtotal) {
    return this.setField('qmx_subtot', maximumSubtotal);
  }

  /**
   * Set qmn_quan.
   * @param {number} minimumQuantity
   * @returns {PriceGroup}
   */
  setMinimumQuantity(minimumQuantity) {
    return this.setField('qmn_quan', minimumQuantity);
  }

  /**
   * Set qmx_quan.
   * @param {number} maximumQuantity
   * @returns {PriceGroup}
   */
  setMaximumQuantity(maximumQuantity) {
    return this.setField('qmx_quan', maximumQuantity);
  }

  /**
   * Set qmn_weight.
   * @param {number} minimumWeight
   * @returns {PriceGroup}
   */
  setMinimumWeight(minimumWeight) {
    return this.setField('qmn_weight', minimumWeight);
  }

  /**
   * Set qmx_weight.
   * @param {number} maximumWeight
   * @returns {PriceGroup}
   */
  setMaximumWeight(maximumWeight) {
    return this.setField('qmx_weight', maximumWeight);
  }

  /**
   * Set bmn_subtot.
   * @param {number} basketMinimumSubtotal
   * @returns {PriceGroup}
   */
  setBasketMinimumSubtotal(basketMinimumSubtotal) {
    return this.setField('bmn_subtot', basketMinimumSubtotal);
  }

  /**
   * Set bmx_subtot.
   * @param {number} basketMaximumSubtotal
   * @returns {PriceGroup}
   */
  setBasketMaximumSubtotal(basketMaximumSubtotal) {
    return this.setField('bmx_subtot', basketMaximumSubtotal);
  }

  /**
   * Set bmn_quan.
   * @param {number} basketMinimumQuantity
   * @returns {PriceGroup}
   */
  setBasketMinimumQuantity(basketMinimumQuantity) {
    return this.setField('bmn_quan', basketMinimumQuantity);
  }

  /**
   * Set bmx_quan.
   * @param {number} basketMaximumQuantity
   * @returns {PriceGroup}
   */
  setBasketMaximumQuantity(basketMaximumQuantity) {
    return this.setField('bmx_quan', basketMaximumQuantity);
  }

  /**
   * Set bmn_weight.
   * @param {number} basketMinimumWeight
   * @returns {PriceGroup}
   */
  setBasketMinimumWeight(basketMinimumWeight) {
    return this.setField('bmn_weight', basketMinimumWeight);
  }

  /**
   * Set bmx_weight.
   * @param {number} basketMaximumWeight
   * @returns {PriceGroup}
   */
  setBasketMaximumWeight(basketMaximumWeight) {
    return this.setField('bmx_weight', basketMaximumWeight);
  }

  /**
   * Set priority.
   * @param {number} priority
   * @returns {PriceGroup}
   */
  setPriority(priority) {
    return this.setField('priority', priority);
  }

  /**
   * Set module.
   * @param {Module|Object} module
   * @returns {PriceGroup}
   * @throws {Error}
   */
  setModule(module) {
    if (util.isInstanceOf(module, Module) || util.isNull(module)) {
      return this.setField('module', module);
    } else if (util.isObject(module)) {
      return this.setField('module', new Module(module));
    }

    throw new Error(util.format('Expected instance of Module, Object, or null but got %s',
      typeof module));
  }

  /**
   * Set exclusion.
   * @param {boolean} exclusion
   * @returns {PriceGroup}
   */
  setExclusion(exclusion) {
    return this.setField('exclusion', exclusion);
  }

  /**
   * Set descrip.
   * @param {string} description
   * @returns {PriceGroup}
   */
  setDescription(description) {
    return this.setField('descrip', description);
  }

  /**
   * Set display.
   * @param {boolean} display
   * @returns {PriceGroup}
   */
  setDisplay(display) {
    return this.setField('display', display);
  }
  
  /**
   * @override
   */
  toObject() {
    var ret = Object.assign(this);

    if (util.isInstanceOf(ret['module'], Module)) {
      ret['module'] = ret['module'].toObject();
    }

    if (util.isInstanceOf(ret['capabilities'], DiscountModuleCapabilities)) {
      ret['capabilities'] = ret['capabilities'].toObject();
    }

    return ret;
  }
}

/** DiscountModuleCapabilities data model. */
class DiscountModuleCapabilities extends Model {
  /**
   * DiscountModuleCapabilities Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get preitems.
   * @returns {boolean}
   */
  getPreitems() {
    return this.getField('preitems', false);
  }
  
  /**
   * Get items.
   * @returns {boolean}
   */
  getItems() {
    return this.getField('items', false);
  }
  
  /**
   * Get eligibility.
   * @returns {string}
   */
  getEligibility() {
    return this.getField('eligibility');
  }
  
  /**
   * Get basket.
   * @returns {boolean}
   */
  getBasket() {
    return this.getField('basket', false);
  }
  
  /**
   * Get shipping.
   * @returns {boolean}
   */
  getShipping() {
    return this.getField('shipping', false);
  }
  
  /**
   * Get qualifying.
   * @returns {boolean}
   */
  getQualifying() {
    return this.getField('qualifying', false);
  }
}

/** Product data model. */
class Product extends Model {
  /**
   * Product Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    var i;
    var l;

    super(data);

    if (!util.isUndefined(this.productinventorysettings)) {
      if (!util.isInstanceOf(this.productinventorysettings, ProductInventorySettings) && util.isObject(this.productinventorysettings)) {
        this.productinventorysettings = new ProductInventorySettings(this.productinventorysettings);
      } else if (!util.isInstanceOf(this.productinventorysettings, ProductInventorySettings)) {
        throw new Error(util.format('Expected ProductInventorySettings or an Object but got %s',
          typeof this.productinventorysettings));
      }
    } else {
      this.productinventorysettings = {};
    }

    if (!util.isUndefined(this.CustomField_Values)) {
      if (!util.isInstanceOf(this.CustomField_Values, CustomFieldValues) && util.isObject(this.CustomField_Values)) {
        this.CustomField_Values = new CustomFieldValues(this.CustomField_Values);
      } else if (!util.isInstanceOf(this.CustomField_Values, CustomFieldValues)) {
        throw new Error(util.format('Expected CustomFieldValues or an Object but got %s',
          typeof this.CustomField_Values));
      }
    } else {
      this.CustomField_Values = {};
    }

    if (!util.isUndefined(this.uris) && util.isArray(this.uris)) {
      for (i = 0, l = this.uris.length; i < l; i++) {
        if (!util.isInstanceOf(this.uris[i], Uri) && util.isObject(data['uris'][i])) {
          this.uris[i] = new Uri(this.uris[i]);
        } else if (!util.isInstanceOf(this.uris[i], Uri)) {
          throw new Error(util.format('Expected array of Uri or an array of Objects but got %s',
            typeof this.uris[i]));
        }
      }
    } else {
      this.uris = [];
    }

    if (!util.isUndefined(this.relatedproducts) && util.isArray(this.relatedproducts)) {
      for (i = 0, l = this.relatedproducts.length; i < l; i++) {
        if (!util.isInstanceOf(this.relatedproducts[i], RelatedProduct) && util.isObject(data['relatedproducts'][i])) {
          this.relatedproducts[i] = new RelatedProduct(this.relatedproducts[i]);
        } else if (!util.isInstanceOf(this.relatedproducts[i], RelatedProduct)) {
          throw new Error(util.format('Expected array of RelatedProduct or an array of Objects but got %s',
            typeof this.relatedproducts[i]));
        }
      }
    } else {
      this.relatedproducts = [];
    }

    if (!util.isUndefined(this.categories) && util.isArray(this.categories)) {
      for (i = 0, l = this.categories.length; i < l; i++) {
        if (!util.isInstanceOf(this.categories[i], Category) && util.isObject(data['categories'][i])) {
          this.categories[i] = new Category(this.categories[i]);
        } else if (!util.isInstanceOf(this.categories[i], Category)) {
          throw new Error(util.format('Expected array of Category or an array of Objects but got %s',
            typeof this.categories[i]));
        }
      }
    } else {
      this.categories = [];
    }

    if (!util.isUndefined(this.productshippingrules)) {
      if (!util.isInstanceOf(this.productshippingrules, ProductShippingRules) && util.isObject(this.productshippingrules)) {
        this.productshippingrules = new ProductShippingRules(this.productshippingrules);
      } else if (!util.isInstanceOf(this.productshippingrules, ProductShippingRules)) {
        throw new Error(util.format('Expected ProductShippingRules or an Object but got %s',
          typeof this.productshippingrules));
      }
    } else {
      this.productshippingrules = {};
    }

    if (!util.isUndefined(this.productimagedata) && util.isArray(this.productimagedata)) {
      for (i = 0, l = this.productimagedata.length; i < l; i++) {
        if (!util.isInstanceOf(this.productimagedata[i], ProductImageData) && util.isObject(data['productimagedata'][i])) {
          this.productimagedata[i] = new ProductImageData(this.productimagedata[i]);
        } else if (!util.isInstanceOf(this.productimagedata[i], ProductImageData)) {
          throw new Error(util.format('Expected array of ProductImageData or an array of Objects but got %s',
            typeof this.productimagedata[i]));
        }
      }
    } else {
      this.productimagedata = [];
    }

    if (!util.isUndefined(this.attributes) && util.isArray(this.attributes)) {
      for (i = 0, l = this.attributes.length; i < l; i++) {
        if (!util.isInstanceOf(this.attributes[i], ProductAttribute) && util.isObject(data['attributes'][i])) {
          this.attributes[i] = new ProductAttribute(this.attributes[i]);
        } else if (!util.isInstanceOf(this.attributes[i], ProductAttribute)) {
          throw new Error(util.format('Expected array of ProductAttribute or an array of Objects but got %s',
            typeof this.attributes[i]));
        }
      }
    } else {
      this.attributes = [];
    }
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
   * Get sku.
   * @returns {string}
   */
  getSku() {
    return this.getField('sku');
  }
  
  /**
   * Get name.
   * @returns {string}
   */
  getName() {
    return this.getField('name');
  }
  
  /**
   * Get thumbnail.
   * @returns {string}
   */
  getThumbnail() {
    return this.getField('thumbnail');
  }
  
  /**
   * Get image.
   * @returns {string}
   */
  getImage() {
    return this.getField('image');
  }
  
  /**
   * Get price.
   * @returns {number}
   */
  getPrice() {
    return this.getField('price', 0.00);
  }
  
  /**
   * Get formatted_price.
   * @returns {string}
   */
  getFormattedPrice() {
    return this.getField('formatted_price');
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
   * Get descrip.
   * @returns {string}
   */
  getDescription() {
    return this.getField('descrip');
  }
  
  /**
   * Get catcount.
   * @returns {number}
   */
  getCategoryCount() {
    return this.getField('catcount', 0);
  }
  
  /**
   * Get weight.
   * @returns {number}
   */
  getWeight() {
    return this.getField('weight', 0.00);
  }
  
  /**
   * Get active.
   * @returns {boolean}
   */
  getActive() {
    return this.getField('active', false);
  }
  
  /**
   * Get page_title.
   * @returns {string}
   */
  getPageTitle() {
    return this.getField('page_title');
  }
  
  /**
   * Get taxable.
   * @returns {boolean}
   */
  getTaxable() {
    return this.getField('taxable', false);
  }
  
  /**
   * Get dt_created.
   * @returns {number}
   */
  getDateTimeCreated() {
    return this.getField('dt_created', 0);
  }
  
  /**
   * Get dt_updated.
   * @returns {number}
   */
  getDateTimeUpdate() {
    return this.getField('dt_updated', 0);
  }
  
  /**
   * Get productinventorysettings.
   * @returns {ProductInventorySettings|*}
   */
  getProductInventorySettings() {
    return this.getField('productinventorysettings', null);
  }
  
  /**
   * Get product_inventory_active.
   * @returns {boolean}
   */
  getProductInventoryActive() {
    return this.getField('product_inventory_active', false);
  }
  
  /**
   * Get product_inventory.
   * @returns {number}
   */
  getProductInventory() {
    return this.getField('product_inventory', 0);
  }
  
  /**
   * Get cancat_code.
   * @returns {string}
   */
  getCanonicalCategoryCode() {
    return this.getField('cancat_code');
  }
  
  /**
   * Get page_code.
   * @returns {string}
   */
  getPageCode() {
    return this.getField('page_code');
  }
  
  /**
   * Get CustomField_Values.
   * @returns {CustomFieldValues|*}
   */
  getCustomFieldValues() {
    return this.getField('CustomField_Values', null);
  }
  
  /**
   * Get uris.
   * @returns {Uri[]}
   */
  getUris() {
    return this.getField('uris', []);
  }
  
  /**
   * Get relatedproducts.
   * @returns {RelatedProduct[]}
   */
  getRelatedProducts() {
    return this.getField('relatedproducts', []);
  }
  
  /**
   * Get categories.
   * @returns {Category[]}
   */
  getCategories() {
    return this.getField('categories', []);
  }
  
  /**
   * Get productshippingrules.
   * @returns {ProductShippingRules|*}
   */
  getProductShuppingRules() {
    return this.getField('productshippingrules', null);
  }
  
  /**
   * Get productimagedata.
   * @returns {ProductImageData[]}
   */
  getProductImageData() {
    return this.getField('productimagedata', []);
  }
  
  /**
   * Get attributes.
   * @returns {ProductAttribute[]}
   */
  getAttributes() {
    return this.getField('attributes', []);
  }
  
  /**
   * Set code.
   * @param {string} code
   * @returns {Product}
   */
  setCode(code) {
    return this.setField('code', code);
  }

  /**
   * Set sku.
   * @param {string} sku
   * @returns {Product}
   */
  setSku(sku) {
    return this.setField('sku', sku);
  }

  /**
   * Set name.
   * @param {string} name
   * @returns {Product}
   */
  setName(name) {
    return this.setField('name', name);
  }

  /**
   * Set thumbnail.
   * @param {string} thumbnail
   * @returns {Product}
   */
  setThumbnail(thumbnail) {
    return this.setField('thumbnail', thumbnail);
  }

  /**
   * Set image.
   * @param {string} image
   * @returns {Product}
   */
  setImage(image) {
    return this.setField('image', image);
  }

  /**
   * Set price.
   * @param {number} price
   * @returns {Product}
   */
  setPrice(price) {
    return this.setField('price', price);
  }

  /**
   * Set cost.
   * @param {number} cost
   * @returns {Product}
   */
  setCost(cost) {
    return this.setField('cost', cost);
  }

  /**
   * Set descrip.
   * @param {string} description
   * @returns {Product}
   */
  setDescription(description) {
    return this.setField('descrip', description);
  }

  /**
   * Set weight.
   * @param {number} weight
   * @returns {Product}
   */
  setWeight(weight) {
    return this.setField('weight', weight);
  }

  /**
   * Set active.
   * @param {boolean} active
   * @returns {Product}
   */
  setActive(active) {
    return this.setField('active', active);
  }

  /**
   * Set page_title.
   * @param {string} pageTitle
   * @returns {Product}
   */
  setPageTitle(pageTitle) {
    return this.setField('page_title', pageTitle);
  }

  /**
   * Set taxable.
   * @param {boolean} taxable
   * @returns {Product}
   */
  setTaxable(taxable) {
    return this.setField('taxable', taxable);
  }

  /**
   * Set product_inventory.
   * @param {number} productInventory
   * @returns {Product}
   */
  setProductInventory(productInventory) {
    return this.setField('product_inventory', productInventory);
  }

  /**
   * Set cancat_code.
   * @param {string} canonicalCategoryCode
   * @returns {Product}
   */
  setCanonicalCategoryCode(canonicalCategoryCode) {
    return this.setField('cancat_code', canonicalCategoryCode);
  }

  /**
   * Set page_code.
   * @param {string} pageCode
   * @returns {Product}
   */
  setPageCode(pageCode) {
    return this.setField('page_code', pageCode);
  }

  /**
   * Set CustomField_Values.
   * @param {CustomFieldValues|Object} customFieldValues
   * @returns {Product}
   * @throws {Error}
   */
  setCustomFieldValues(customFieldValues) {
    if (util.isInstanceOf(customFieldValues, CustomFieldValues) || util.isNull(customFieldValues)) {
      return this.setField('CustomField_Values', customFieldValues);
    } else if (util.isObject(customFieldValues)) {
      return this.setField('CustomField_Values', new CustomFieldValues(customFieldValues));
    }

    throw new Error(util.format('Expected instance of CustomFieldValues, Object, or null but got %s',
      typeof customFieldValues));
  }
  
  /**
   * @override
   */
  toObject() {
    var i;
    var l;
    var ret = Object.assign(this);

    if (util.isInstanceOf(ret['productinventorysettings'], ProductInventorySettings)) {
      ret['productinventorysettings'] = ret['productinventorysettings'].toObject();
    }

    if (util.isInstanceOf(ret['CustomField_Values'], CustomFieldValues)) {
      ret['CustomField_Values'] = ret['CustomField_Values'].toObject();
    }

    if (util.isArray(ret['uris'])) {
      for (i = 0, l = ret['uris'].length; i < l; i++) {
        if (util.isInstanceOf(ret['uris'][i], Uri)) {
          ret['uris'][i] = ret['uris'][i].toObject();
        }
      }
    }

    if (util.isArray(ret['relatedproducts'])) {
      for (i = 0, l = ret['relatedproducts'].length; i < l; i++) {
        if (util.isInstanceOf(ret['relatedproducts'][i], RelatedProduct)) {
          ret['relatedproducts'][i] = ret['relatedproducts'][i].toObject();
        }
      }
    }

    if (util.isArray(ret['categories'])) {
      for (i = 0, l = ret['categories'].length; i < l; i++) {
        if (util.isInstanceOf(ret['categories'][i], Category)) {
          ret['categories'][i] = ret['categories'][i].toObject();
        }
      }
    }

    if (util.isInstanceOf(ret['productshippingrules'], ProductShippingRules)) {
      ret['productshippingrules'] = ret['productshippingrules'].toObject();
    }

    if (util.isArray(ret['productimagedata'])) {
      for (i = 0, l = ret['productimagedata'].length; i < l; i++) {
        if (util.isInstanceOf(ret['productimagedata'][i], ProductImageData)) {
          ret['productimagedata'][i] = ret['productimagedata'][i].toObject();
        }
      }
    }

    if (util.isArray(ret['attributes'])) {
      for (i = 0, l = ret['attributes'].length; i < l; i++) {
        if (util.isInstanceOf(ret['attributes'][i], ProductAttribute)) {
          ret['attributes'][i] = ret['attributes'][i].toObject();
        }
      }
    }

    return ret;
  }
}

/** RelatedProduct data model. */
class RelatedProduct extends Model {
  /**
   * RelatedProduct Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
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
   * Get sku.
   * @returns {string}
   */
  getSku() {
    return this.getField('sku');
  }
  
  /**
   * Get name.
   * @returns {string}
   */
  getName() {
    return this.getField('name');
  }
  
  /**
   * Get thumbnail.
   * @returns {string}
   */
  getThumbnail() {
    return this.getField('thumbnail');
  }
  
  /**
   * Get image.
   * @returns {string}
   */
  getImage() {
    return this.getField('image');
  }
  
  /**
   * Get price.
   * @returns {number}
   */
  getPrice() {
    return this.getField('price', 0.00);
  }
  
  /**
   * Get formatted_price.
   * @returns {string}
   */
  getFormattedPrice() {
    return this.getField('formatted_price');
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
   * Get weight.
   * @returns {number}
   */
  getWeight() {
    return this.getField('weight', 0.00);
  }
  
  /**
   * Get active.
   * @returns {boolean}
   */
  getActive() {
    return this.getField('active', false);
  }
  
  /**
   * Get page_title.
   * @returns {string}
   */
  getPageTitle() {
    return this.getField('page_title');
  }
  
  /**
   * Get taxable.
   * @returns {boolean}
   */
  getTaxable() {
    return this.getField('taxable', false);
  }
  
  /**
   * Get dt_created.
   * @returns {number}
   */
  getDateTimeCreated() {
    return this.getField('dt_created', 0);
  }
  
  /**
   * Get dt_updated.
   * @returns {number}
   */
  getDateTimeUpdated() {
    return this.getField('dt_updated', 0);
  }
  
  /**
   * Set code.
   * @param {string} code
   * @returns {RelatedProduct}
   */
  setCode(code) {
    return this.setField('code', code);
  }

  /**
   * Set sku.
   * @param {string} sku
   * @returns {RelatedProduct}
   */
  setSku(sku) {
    return this.setField('sku', sku);
  }

  /**
   * Set name.
   * @param {string} name
   * @returns {RelatedProduct}
   */
  setName(name) {
    return this.setField('name', name);
  }

  /**
   * Set thumbnail.
   * @param {string} thumbnail
   * @returns {RelatedProduct}
   */
  setThumbnail(thumbnail) {
    return this.setField('thumbnail', thumbnail);
  }

  /**
   * Set image.
   * @param {string} image
   * @returns {RelatedProduct}
   */
  setImage(image) {
    return this.setField('image', image);
  }

  /**
   * Set price.
   * @param {number} price
   * @returns {RelatedProduct}
   */
  setPrice(price) {
    return this.setField('price', price);
  }

  /**
   * Set cost.
   * @param {number} cost
   * @returns {RelatedProduct}
   */
  setCost(cost) {
    return this.setField('cost', cost);
  }

  /**
   * Set weight.
   * @param {number} weight
   * @returns {RelatedProduct}
   */
  setWeight(weight) {
    return this.setField('weight', weight);
  }

  /**
   * Set active.
   * @param {boolean} active
   * @returns {RelatedProduct}
   */
  setActive(active) {
    return this.setField('active', active);
  }

  /**
   * Set page_title.
   * @param {string} pageTitle
   * @returns {RelatedProduct}
   */
  setPageTitle(pageTitle) {
    return this.setField('page_title', pageTitle);
  }

  /**
   * Set taxable.
   * @param {boolean} taxable
   * @returns {RelatedProduct}
   */
  setTaxable(taxable) {
    return this.setField('taxable', taxable);
  }
}

/** ProductImageData data model. */
class ProductImageData extends Model {
  /**
   * ProductImageData Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get id.
   * @returns {number}
   */
  getId() {
    return this.getField('id', 0);
  }
  
  /**
   * Get product_id.
   * @returns {number}
   */
  getProductId() {
    return this.getField('product_id', 0);
  }
  
  /**
   * Get image_id.
   * @returns {number}
   */
  getImageId() {
    return this.getField('image_id', 0);
  }
  
  /**
   * Get type_id.
   * @returns {number}
   */
  getTypeId() {
    return this.getField('type_id', 0);
  }
  
  /**
   * Get code.
   * @returns {string}
   */
  getCode() {
    return this.getField('code');
  }
  
  /**
   * Get type_desc.
   * @returns {string}
   */
  getTypeDescription() {
    return this.getField('type_desc');
  }
  
  /**
   * Get image.
   * @returns {string}
   */
  getImage() {
    return this.getField('image');
  }
  
  /**
   * Get width.
   * @returns {number}
   */
  getWidth() {
    return this.getField('width', 0);
  }
  
  /**
   * Get height.
   * @returns {number}
   */
  getHeight() {
    return this.getField('height', 0);
  }
  
  /**
   * Get disp_order.
   * @returns {number}
   */
  getDisplayOrder() {
    return this.getField('disp_order', 0);
  }
}

/** ProductAttribute data model. */
class ProductAttribute extends Model {
  /**
   * ProductAttribute Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    var i;
    var l;

    super(data);

    if (!util.isUndefined(this.options) && util.isArray(this.options)) {
      for (i = 0, l = this.options.length; i < l; i++) {
        if (!util.isInstanceOf(this.options[i], ProductOption) && util.isObject(data['options'][i])) {
          this.options[i] = new ProductOption(this.options[i]);
        } else if (!util.isInstanceOf(this.options[i], ProductOption)) {
          throw new Error(util.format('Expected array of ProductOption or an array of Objects but got %s',
            typeof this.options[i]));
        }
      }
    } else {
      this.options = [];
    }
  }

  /**
   * Get id.
   * @returns {number}
   */
  getId() {
    return this.getField('id', 0);
  }
  
  /**
   * Get product_id.
   * @returns {number}
   */
  getProductId() {
    return this.getField('product_id', 0);
  }
  
  /**
   * Get default_id.
   * @returns {number}
   */
  getDefaultId() {
    return this.getField('default_id', 0);
  }
  
  /**
   * Get disp_order.
   * @returns {number}
   */
  getDisplayOrder() {
    if (this.hasField('disp_order')) {
      return this.getField('disp_order', 0);
    } else if (this.hasField('disporder')) {
      return this.getField('disporder', 0);
    }
    return 0;
  }
  
  /**
   * Get attemp_id.
   * @returns {number}
   */
  getAttributeTemplateId() {
    return this.getField('attemp_id', 0);
  }
  
  /**
   * Get code.
   * @returns {string}
   */
  getCode() {
    return this.getField('code');
  }
  
  /**
   * Get type.
   * @returns {string}
   */
  getType() {
    return this.getField('type');
  }
  
  /**
   * Get prompt.
   * @returns {string}
   */
  getPrompt() {
    return this.getField('prompt');
  }
  
  /**
   * Get price.
   * @returns {number}
   */
  getPrice() {
    return this.getField('price', 0.00);
  }
  
  /**
   * Get cost.
   * @returns {number}
   */
  getCost() {
    return this.getField('cost', 0.00);
  }
  
  /**
   * Get weight.
   * @returns {number}
   */
  getWeight() {
    return this.getField('weight', 0.00);
  }
  
  /**
   * Get required.
   * @returns {boolean}
   */
  getRequired() {
    return this.getField('required', false);
  }
  
  /**
   * Get inventory.
   * @returns {boolean}
   */
  getInventory() {
    return this.getField('inventory', false);
  }
  
  /**
   * Get image.
   * @returns {string}
   */
  getImage() {
    return this.getField('image');
  }
  
  /**
   * Get options.
   * @returns {ProductOption[]}
   */
  getOptions() {
    return this.getField('options', []);
  }
  
  /**
   * @override
   */
  toObject() {
    var i;
    var l;
    var ret = Object.assign(this);

    if (util.isArray(ret['options'])) {
      for (i = 0, l = ret['options'].length; i < l; i++) {
        if (util.isInstanceOf(ret['options'][i], ProductOption)) {
          ret['options'][i] = ret['options'][i].toObject();
        }
      }
    }

    return ret;
  }
}

/** ProductOption data model. */
class ProductOption extends Model {
  /**
   * ProductOption Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get id.
   * @returns {number}
   */
  getId() {
    return this.getField('id', 0);
  }
  
  /**
   * Get product_id.
   * @returns {number}
   */
  getProductId() {
    return this.getField('product_id', 0);
  }
  
  /**
   * Get attr_id.
   * @returns {number}
   */
  getAttributeId() {
    return this.getField('attr_id', 0);
  }
  
  /**
   * Get attemp_id.
   * @returns {number}
   */
  getAttempId() {
    return this.getField('attemp_id', 0);
  }
  
  /**
   * Get attmpat_id.
   * @returns {number}
   */
  getAttmpatId() {
    return this.getField('attmpat_id', 0);
  }
  
  /**
   * Get disp_order.
   * @returns {number}
   */
  getDisplayOrder() {
    if (this.hasField('disp_order')) {
      return this.getField('disp_order', 0);
    } else if (this.hasField('disporder')) {
      return this.getField('disporder', 0);
    }
    return 0;
  }
  
  /**
   * Get code.
   * @returns {string}
   */
  getCode() {
    return this.getField('code');
  }
  
  /**
   * Get prompt.
   * @returns {string}
   */
  getPrompt() {
    return this.getField('prompt');
  }
  
  /**
   * Get price.
   * @returns {number}
   */
  getPrice() {
    return this.getField('price', 0.00);
  }
  
  /**
   * Get cost.
   * @returns {number}
   */
  getCost() {
    return this.getField('cost', 0.00);
  }
  
  /**
   * Get weight.
   * @returns {number}
   */
  getWeight() {
    return this.getField('weight', 0.00);
  }
  
  /**
   * Get image.
   * @returns {string}
   */
  getImage() {
    return this.getField('image');
  }
}

/** ProductShippingRules data model. */
class ProductShippingRules extends Model {
  /**
   * ProductShippingRules Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    var i;
    var l;

    super(data);

    if (!util.isUndefined(this.methods) && util.isArray(this.methods)) {
      for (i = 0, l = this.methods.length; i < l; i++) {
        if (!util.isInstanceOf(this.methods[i], ProductShippingMethod) && util.isObject(data['methods'][i])) {
          this.methods[i] = new ProductShippingMethod(this.methods[i]);
        } else if (!util.isInstanceOf(this.methods[i], ProductShippingMethod)) {
          throw new Error(util.format('Expected array of ProductShippingMethod or an array of Objects but got %s',
            typeof this.methods[i]));
        }
      }
    } else {
      this.methods = [];
    }
  }

  /**
   * Get product_id.
   * @returns {number}
   */
  getProductId() {
    return this.getField('product_id', 0);
  }
  
  /**
   * Get ownpackage.
   * @returns {boolean}
   */
  getOwnPackage() {
    return this.getField('ownpackage', false);
  }
  
  /**
   * Get width.
   * @returns {number}
   */
  getWidth() {
    return this.getField('width', 0.00);
  }
  
  /**
   * Get length.
   * @returns {number}
   */
  getLength() {
    return this.getField('length', 0.00);
  }
  
  /**
   * Get height.
   * @returns {number}
   */
  getHeight() {
    return this.getField('height', 0.00);
  }
  
  /**
   * Get limitmeths.
   * @returns {boolean}
   */
  getLimitMethods() {
    return this.getField('limitmeths', false);
  }
  
  /**
   * Get methods.
   * @returns {ProductShippingMethod[]}
   */
  getMethods() {
    return this.getField('methods', []);
  }
  
  /**
   * Set methods.
   * @param {ProductShippingMethod[]} methods
   * @throws {Error}
   * @returns {ProductShippingRules}
   */
  setMethods(methods) {
    var i;
    var l;

    if (!util.isArray(methods)) {
      throw new Error(util.format('Expected an array but got %s', typeof methods));
    }

    for (i = 0, l = methods.length; i < l; i++) {
      if (util.isInstanceOf(methods[i], ProductShippingMethod)) {
          continue;
      } else if (util.isObject(methods[i])) {
          methods[i] = new ProductShippingMethod(methods[i]);
      } else {
        throw new Error(util.format('Expected instance of ProductShippingMethod, Object, or null but got %s at offset %d',
          typeof methods[i], i));
      }
    }

    return this.setField('methods', methods);
  }

  /**
   * Add a ProductShippingMethod.
   * @param {ProductShippingMethod} methods
   * @returns {ProductShippingRules}
   */
  addMethods(methods) {
    if (!util.isInstanceOf(methods, ProductShippingMethod)) {
      throw new Error(util.format('Expected instance of ProductShippingMethod but got %s', typeof methods));
    }

    if (util.isUndefined(this['methods'])) {
      this['methods'] = [];
    }

    this['methods'].push(methods);

    return this;
  }
  
  /**
   * @override
   */
  toObject() {
    var i;
    var l;
    var ret = Object.assign(this);

    if (util.isArray(ret['methods'])) {
      for (i = 0, l = ret['methods'].length; i < l; i++) {
        if (util.isInstanceOf(ret['methods'][i], ProductShippingMethod)) {
          ret['methods'][i] = ret['methods'][i].toObject();
        }
      }
    }

    return ret;
  }
}

/** ProductShippingMethod data model. */
class ProductShippingMethod extends Model {
  /**
   * ProductShippingMethod Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get mod_code.
   * @returns {string}
   */
  getModuleCode() {
    return this.getField('mod_code');
  }
  
  /**
   * Get meth_code.
   * @returns {string}
   */
  getMethodCode() {
    return this.getField('meth_code');
  }
}

/** Uri data model. */
class Uri extends Model {
  /**
   * Uri Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get id.
   * @returns {number}
   */
  getId() {
    return this.getField('id', 0);
  }
  
  /**
   * Get uri.
   * @returns {string}
   */
  getUri() {
    return this.getField('uri');
  }
  
  /**
   * Get store_id.
   * @returns {number}
   */
  getStoreId() {
    return this.getField('store_id', 0);
  }
  
  /**
   * Get screen.
   * @returns {string}
   */
  getScreen() {
    return this.getField('screen');
  }
  
  /**
   * Get page_id.
   * @returns {number}
   */
  getPageId() {
    return this.getField('page_id', 0);
  }
  
  /**
   * Get cat_id.
   * @returns {number}
   */
  getCategoryId() {
    return this.getField('cat_id', 0);
  }
  
  /**
   * Get product_id.
   * @returns {number}
   */
  getProductId() {
    return this.getField('product_id', 0);
  }
  
  /**
   * Get feed_id.
   * @returns {number}
   */
  getFeedId() {
    return this.getField('feed_id', 0);
  }
  
  /**
   * Get canonical.
   * @returns {boolean}
   */
  getCanonical() {
    return this.getField('canonical', false);
  }
  
  /**
   * Get status.
   * @returns {number}
   */
  getStatus() {
    return this.getField('status', 0);
  }
}

/** ProductVariant data model. */
class ProductVariant extends Model {
  /**
   * ProductVariant Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    var i;
    var l;

    super(data);

    if (!util.isUndefined(this.parts) && util.isArray(this.parts)) {
      for (i = 0, l = this.parts.length; i < l; i++) {
        if (!util.isInstanceOf(this.parts[i], ProductVariantPart) && util.isObject(data['parts'][i])) {
          this.parts[i] = new ProductVariantPart(this.parts[i]);
        } else if (!util.isInstanceOf(this.parts[i], ProductVariantPart)) {
          throw new Error(util.format('Expected array of ProductVariantPart or an array of Objects but got %s',
            typeof this.parts[i]));
        }
      }
    } else {
      this.parts = [];
    }

    if (!util.isUndefined(this.dimensions) && util.isArray(this.dimensions)) {
      for (i = 0, l = this.dimensions.length; i < l; i++) {
        if (!util.isInstanceOf(this.dimensions[i], ProductVariantDimension) && util.isObject(data['dimensions'][i])) {
          this.dimensions[i] = new ProductVariantDimension(this.dimensions[i]);
        } else if (!util.isInstanceOf(this.dimensions[i], ProductVariantDimension)) {
          throw new Error(util.format('Expected array of ProductVariantDimension or an array of Objects but got %s',
            typeof this.dimensions[i]));
        }
      }
    } else {
      this.dimensions = [];
    }
  }

  /**
   * Get product_id.
   * @returns {number}
   */
  getProductId() {
    return this.getField('product_id', 0);
  }
  
  /**
   * Get variant_id.
   * @returns {number}
   */
  getVariantId() {
    return this.getField('variant_id', 0);
  }
  
  /**
   * Get parts.
   * @returns {ProductVariantPart[]}
   */
  getParts() {
    return this.getField('parts', []);
  }
  
  /**
   * Get dimensions.
   * @returns {ProductVariantDimension[]}
   */
  getDimensions() {
    return this.getField('dimensions', []);
  }
  
  /**
   * @override
   */
  toObject() {
    var i;
    var l;
    var ret = Object.assign(this);

    if (util.isArray(ret['parts'])) {
      for (i = 0, l = ret['parts'].length; i < l; i++) {
        if (util.isInstanceOf(ret['parts'][i], ProductVariantPart)) {
          ret['parts'][i] = ret['parts'][i].toObject();
        }
      }
    }

    if (util.isArray(ret['dimensions'])) {
      for (i = 0, l = ret['dimensions'].length; i < l; i++) {
        if (util.isInstanceOf(ret['dimensions'][i], ProductVariantDimension)) {
          ret['dimensions'][i] = ret['dimensions'][i].toObject();
        }
      }
    }

    return ret;
  }
}

/** Category data model. */
class Category extends Model {
  /**
   * Category Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);

    if (!util.isUndefined(this.CustomField_Values)) {
      if (!util.isInstanceOf(this.CustomField_Values, CustomFieldValues) && util.isObject(this.CustomField_Values)) {
        this.CustomField_Values = new CustomFieldValues(this.CustomField_Values);
      } else if (!util.isInstanceOf(this.CustomField_Values, CustomFieldValues)) {
        throw new Error(util.format('Expected CustomFieldValues or an Object but got %s',
          typeof this.CustomField_Values));
      }
    } else {
      this.CustomField_Values = {};
    }
  }

  /**
   * Get id.
   * @returns {number}
   */
  getId() {
    return this.getField('id', 0);
  }
  
  /**
   * Get parent_id.
   * @returns {number}
   */
  getParentId() {
    return this.getField('parent_id', 0);
  }
  
  /**
   * Get agrpcount.
   * @returns {number}
   */
  getAvailabilityGroupCount() {
    return this.getField('agrpcount', 0);
  }
  
  /**
   * Get depth.
   * @returns {number}
   */
  getDepth() {
    return this.getField('depth', 0);
  }
  
  /**
   * Get disp_order.
   * @returns {number}
   */
  getDisplayOrder() {
    return this.getField('disp_order', 0);
  }
  
  /**
   * Get page_id.
   * @returns {number}
   */
  getPageId() {
    return this.getField('page_id', 0);
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
   * Get page_title.
   * @returns {string}
   */
  getPageTitle() {
    return this.getField('page_title');
  }
  
  /**
   * Get active.
   * @returns {boolean}
   */
  getActive() {
    return this.getField('active', false);
  }
  
  /**
   * Get dt_created.
   * @returns {number}
   */
  getDateTimeCreated() {
    return this.getField('dt_created', 0);
  }
  
  /**
   * Get dt_updated.
   * @returns {number}
   */
  getDateTimeUpdated() {
    return this.getField('dt_updated', 0);
  }
  
  /**
   * Get page_code.
   * @returns {string}
   */
  getPageCode() {
    return this.getField('page_code');
  }
  
  /**
   * Get parent_category.
   * @returns {string}
   */
  getParentCategory() {
    return this.getField('parent_category');
  }
  
  /**
   * Get CustomField_Values.
   * @returns {CustomFieldValues|*}
   */
  getCustomFieldValues() {
    return this.getField('CustomField_Values', null);
  }
  
  /**
   * Set code.
   * @param {string} code
   * @returns {Category}
   */
  setCode(code) {
    return this.setField('code', code);
  }

  /**
   * Set name.
   * @param {string} name
   * @returns {Category}
   */
  setName(name) {
    return this.setField('name', name);
  }

  /**
   * Set page_title.
   * @param {string} pageTitle
   * @returns {Category}
   */
  setPageTitle(pageTitle) {
    return this.setField('page_title', pageTitle);
  }

  /**
   * Set active.
   * @param {boolean} active
   * @returns {Category}
   */
  setActive(active) {
    return this.setField('active', active);
  }

  /**
   * Set page_code.
   * @param {string} pageCode
   * @returns {Category}
   */
  setPageCode(pageCode) {
    return this.setField('page_code', pageCode);
  }

  /**
   * Set parent_category.
   * @param {string} parentCategory
   * @returns {Category}
   */
  setParentCategory(parentCategory) {
    return this.setField('parent_category', parentCategory);
  }

  /**
   * Set CustomField_Values.
   * @param {CustomFieldValues|Object} customFieldValues
   * @returns {Category}
   * @throws {Error}
   */
  setCustomFieldValues(customFieldValues) {
    if (util.isInstanceOf(customFieldValues, CustomFieldValues) || util.isNull(customFieldValues)) {
      return this.setField('CustomField_Values', customFieldValues);
    } else if (util.isObject(customFieldValues)) {
      return this.setField('CustomField_Values', new CustomFieldValues(customFieldValues));
    }

    throw new Error(util.format('Expected instance of CustomFieldValues, Object, or null but got %s',
      typeof customFieldValues));
  }
  
  /**
   * @override
   */
  toObject() {
    var ret = Object.assign(this);

    if (util.isInstanceOf(ret['CustomField_Values'], CustomFieldValues)) {
      ret['CustomField_Values'] = ret['CustomField_Values'].toObject();
    }

    return ret;
  }
}

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

/** Order data model. */
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
      if (!util.isInstanceOf(this.customer, Customer) && util.isObject(this.customer)) {
        this.customer = new Customer(this.customer);
      } else if (!util.isInstanceOf(this.customer, Customer)) {
        throw new Error(util.format('Expected Customer or an Object but got %s',
          typeof this.customer));
      }
    } else {
      this.customer = {};
    }

    if (!util.isUndefined(this.items) && util.isArray(this.items)) {
      for (i = 0, l = this.items.length; i < l; i++) {
        if (!util.isInstanceOf(this.items[i], OrderItem) && util.isObject(data['items'][i])) {
          this.items[i] = new OrderItem(this.items[i]);
        } else if (!util.isInstanceOf(this.items[i], OrderItem)) {
          throw new Error(util.format('Expected array of OrderItem or an array of Objects but got %s',
            typeof this.items[i]));
        }
      }
    } else {
      this.items = [];
    }

    if (!util.isUndefined(this.charges) && util.isArray(this.charges)) {
      for (i = 0, l = this.charges.length; i < l; i++) {
        if (!util.isInstanceOf(this.charges[i], OrderCharge) && util.isObject(data['charges'][i])) {
          this.charges[i] = new OrderCharge(this.charges[i]);
        } else if (!util.isInstanceOf(this.charges[i], OrderCharge)) {
          throw new Error(util.format('Expected array of OrderCharge or an array of Objects but got %s',
            typeof this.charges[i]));
        }
      }
    } else {
      this.charges = [];
    }

    if (!util.isUndefined(this.coupons) && util.isArray(this.coupons)) {
      for (i = 0, l = this.coupons.length; i < l; i++) {
        if (!util.isInstanceOf(this.coupons[i], OrderCoupon) && util.isObject(data['coupons'][i])) {
          this.coupons[i] = new OrderCoupon(this.coupons[i]);
        } else if (!util.isInstanceOf(this.coupons[i], OrderCoupon)) {
          throw new Error(util.format('Expected array of OrderCoupon or an array of Objects but got %s',
            typeof this.coupons[i]));
        }
      }
    } else {
      this.coupons = [];
    }

    if (!util.isUndefined(this.discounts) && util.isArray(this.discounts)) {
      for (i = 0, l = this.discounts.length; i < l; i++) {
        if (!util.isInstanceOf(this.discounts[i], OrderDiscountTotal) && util.isObject(data['discounts'][i])) {
          this.discounts[i] = new OrderDiscountTotal(this.discounts[i]);
        } else if (!util.isInstanceOf(this.discounts[i], OrderDiscountTotal)) {
          throw new Error(util.format('Expected array of OrderDiscountTotal or an array of Objects but got %s',
            typeof this.discounts[i]));
        }
      }
    } else {
      this.discounts = [];
    }

    if (!util.isUndefined(this.payments) && util.isArray(this.payments)) {
      for (i = 0, l = this.payments.length; i < l; i++) {
        if (!util.isInstanceOf(this.payments[i], OrderPayment) && util.isObject(data['payments'][i])) {
          this.payments[i] = new OrderPayment(this.payments[i]);
        } else if (!util.isInstanceOf(this.payments[i], OrderPayment)) {
          throw new Error(util.format('Expected array of OrderPayment or an array of Objects but got %s',
            typeof this.payments[i]));
        }
      }
    } else {
      this.payments = [];
    }

    if (!util.isUndefined(this.notes) && util.isArray(this.notes)) {
      for (i = 0, l = this.notes.length; i < l; i++) {
        if (!util.isInstanceOf(this.notes[i], OrderNote) && util.isObject(data['notes'][i])) {
          this.notes[i] = new OrderNote(this.notes[i]);
        } else if (!util.isInstanceOf(this.notes[i], OrderNote)) {
          throw new Error(util.format('Expected array of OrderNote or an array of Objects but got %s',
            typeof this.notes[i]));
        }
      }
    } else {
      this.notes = [];
    }

    if (!util.isUndefined(this.CustomField_Values)) {
      if (!util.isInstanceOf(this.CustomField_Values, CustomFieldValues) && util.isObject(this.CustomField_Values)) {
        this.CustomField_Values = new CustomFieldValues(this.CustomField_Values);
      } else if (!util.isInstanceOf(this.CustomField_Values, CustomFieldValues)) {
        throw new Error(util.format('Expected CustomFieldValues or an Object but got %s',
          typeof this.CustomField_Values));
      }
    } else {
      this.CustomField_Values = {};
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
    return this.getField('dt_instock', 0);
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
   * Get CustomField_Values.
   * @returns {CustomFieldValues|*}
   */
  getCustomFieldValues() {
    return this.getField('CustomField_Values', null);
  }
  
  /**
   * Set cust_id.
   * @param {number} customerId
   * @returns {Order}
   */
  setCustomerId(customerId) {
    return this.setField('cust_id', customerId);
  }

  /**
   * Set ship_fname.
   * @param {string} shipFirstName
   * @returns {Order}
   */
  setShipFirstName(shipFirstName) {
    return this.setField('ship_fname', shipFirstName);
  }

  /**
   * Set ship_lname.
   * @param {string} shipLastName
   * @returns {Order}
   */
  setShipLastName(shipLastName) {
    return this.setField('ship_lname', shipLastName);
  }

  /**
   * Set ship_email.
   * @param {string} shipEmail
   * @returns {Order}
   */
  setShipEmail(shipEmail) {
    return this.setField('ship_email', shipEmail);
  }

  /**
   * Set ship_comp.
   * @param {string} shipCompany
   * @returns {Order}
   */
  setShipCompany(shipCompany) {
    return this.setField('ship_comp', shipCompany);
  }

  /**
   * Set ship_phone.
   * @param {string} shipPhone
   * @returns {Order}
   */
  setShipPhone(shipPhone) {
    return this.setField('ship_phone', shipPhone);
  }

  /**
   * Set ship_fax.
   * @param {string} shipFax
   * @returns {Order}
   */
  setShipFax(shipFax) {
    return this.setField('ship_fax', shipFax);
  }

  /**
   * Set ship_addr1.
   * @param {string} shipAddress1
   * @returns {Order}
   */
  setShipAddress1(shipAddress1) {
    return this.setField('ship_addr1', shipAddress1);
  }

  /**
   * Set ship_addr2.
   * @param {string} shipAddress2
   * @returns {Order}
   */
  setShipAddress2(shipAddress2) {
    return this.setField('ship_addr2', shipAddress2);
  }

  /**
   * Set ship_city.
   * @param {string} shipCity
   * @returns {Order}
   */
  setShipCity(shipCity) {
    return this.setField('ship_city', shipCity);
  }

  /**
   * Set ship_state.
   * @param {string} shipState
   * @returns {Order}
   */
  setShipState(shipState) {
    return this.setField('ship_state', shipState);
  }

  /**
   * Set ship_zip.
   * @param {string} shipZip
   * @returns {Order}
   */
  setShipZip(shipZip) {
    return this.setField('ship_zip', shipZip);
  }

  /**
   * Set ship_cntry.
   * @param {string} shipCountry
   * @returns {Order}
   */
  setShipCountry(shipCountry) {
    return this.setField('ship_cntry', shipCountry);
  }

  /**
   * Set bill_fname.
   * @param {string} billFirstName
   * @returns {Order}
   */
  setBillFirstName(billFirstName) {
    return this.setField('bill_fname', billFirstName);
  }

  /**
   * Set bill_lname.
   * @param {string} billLastName
   * @returns {Order}
   */
  setBillLastName(billLastName) {
    return this.setField('bill_lname', billLastName);
  }

  /**
   * Set bill_email.
   * @param {string} billEmail
   * @returns {Order}
   */
  setBillEmail(billEmail) {
    return this.setField('bill_email', billEmail);
  }

  /**
   * Set bill_comp.
   * @param {string} billCompany
   * @returns {Order}
   */
  setBillCompany(billCompany) {
    return this.setField('bill_comp', billCompany);
  }

  /**
   * Set bill_phone.
   * @param {string} billPhone
   * @returns {Order}
   */
  setBillPhone(billPhone) {
    return this.setField('bill_phone', billPhone);
  }

  /**
   * Set bill_fax.
   * @param {string} billFax
   * @returns {Order}
   */
  setBillFax(billFax) {
    return this.setField('bill_fax', billFax);
  }

  /**
   * Set bill_addr1.
   * @param {string} billAddress1
   * @returns {Order}
   */
  setBillAddress1(billAddress1) {
    return this.setField('bill_addr1', billAddress1);
  }

  /**
   * Set bill_addr2.
   * @param {string} billAddress2
   * @returns {Order}
   */
  setBillAddress2(billAddress2) {
    return this.setField('bill_addr2', billAddress2);
  }

  /**
   * Set bill_city.
   * @param {string} billCity
   * @returns {Order}
   */
  setBillCity(billCity) {
    return this.setField('bill_city', billCity);
  }

  /**
   * Set bill_state.
   * @param {string} billState
   * @returns {Order}
   */
  setBillState(billState) {
    return this.setField('bill_state', billState);
  }

  /**
   * Set bill_zip.
   * @param {string} billZip
   * @returns {Order}
   */
  setBillZip(billZip) {
    return this.setField('bill_zip', billZip);
  }

  /**
   * Set bill_cntry.
   * @param {string} billCountry
   * @returns {Order}
   */
  setBillCountry(billCountry) {
    return this.setField('bill_cntry', billCountry);
  }
  
  /**
   * @override
   */
  toObject() {
    var i;
    var l;
    var ret = Object.assign(this);

    if (util.isInstanceOf(ret['customer'], Customer)) {
      ret['customer'] = ret['customer'].toObject();
    }

    if (util.isArray(ret['items'])) {
      for (i = 0, l = ret['items'].length; i < l; i++) {
        if (util.isInstanceOf(ret['items'][i], OrderItem)) {
          ret['items'][i] = ret['items'][i].toObject();
        }
      }
    }

    if (util.isArray(ret['charges'])) {
      for (i = 0, l = ret['charges'].length; i < l; i++) {
        if (util.isInstanceOf(ret['charges'][i], OrderCharge)) {
          ret['charges'][i] = ret['charges'][i].toObject();
        }
      }
    }

    if (util.isArray(ret['coupons'])) {
      for (i = 0, l = ret['coupons'].length; i < l; i++) {
        if (util.isInstanceOf(ret['coupons'][i], OrderCoupon)) {
          ret['coupons'][i] = ret['coupons'][i].toObject();
        }
      }
    }

    if (util.isArray(ret['discounts'])) {
      for (i = 0, l = ret['discounts'].length; i < l; i++) {
        if (util.isInstanceOf(ret['discounts'][i], OrderDiscountTotal)) {
          ret['discounts'][i] = ret['discounts'][i].toObject();
        }
      }
    }

    if (util.isArray(ret['payments'])) {
      for (i = 0, l = ret['payments'].length; i < l; i++) {
        if (util.isInstanceOf(ret['payments'][i], OrderPayment)) {
          ret['payments'][i] = ret['payments'][i].toObject();
        }
      }
    }

    if (util.isArray(ret['notes'])) {
      for (i = 0, l = ret['notes'].length; i < l; i++) {
        if (util.isInstanceOf(ret['notes'][i], OrderNote)) {
          ret['notes'][i] = ret['notes'][i].toObject();
        }
      }
    }

    if (util.isInstanceOf(ret['CustomField_Values'], CustomFieldValues)) {
      ret['CustomField_Values'] = ret['CustomField_Values'].toObject();
    }

    return ret;
  }
}

/** ORDER_SHIPMENT_STATUS constants. */
/** @ignore */
const ORDER_SHIPMENT_STATUS_PENDING = 0;
/** @ignore */
const ORDER_SHIPMENT_STATUS_PICKING = 100;
/** @ignore */
const ORDER_SHIPMENT_STATUS_SHIPPED = 200;

/** OrderShipment data model. */
class OrderShipment extends Model {
  /**
   * OrderShipment Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
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
   * Set id.
   * @param {number} id
   * @returns {OrderShipment}
   */
  setId(id) {
    return this.setField('id', id);
  }

  /**
   * Set code.
   * @param {string} code
   * @returns {OrderShipment}
   */
  setCode(code) {
    return this.setField('code', code);
  }

  /**
   * Set batch_id.
   * @param {number} batchId
   * @returns {OrderShipment}
   */
  setBatchId(batchId) {
    return this.setField('batch_id', batchId);
  }

  /**
   * Set order_id.
   * @param {number} orderId
   * @returns {OrderShipment}
   */
  setOrderId(orderId) {
    return this.setField('order_id', orderId);
  }

  /**
   * Set status.
   * @param {number} status
   * @returns {OrderShipment}
   */
  setStatus(status) {
    return this.setField('status', status);
  }

  /**
   * Set labelcount.
   * @param {number} labelCount
   * @returns {OrderShipment}
   */
  setLabelCount(labelCount) {
    return this.setField('labelcount', labelCount);
  }

  /**
   * Set ship_date.
   * @param {number} shipDate
   * @returns {OrderShipment}
   */
  setShipDate(shipDate) {
    return this.setField('ship_date', shipDate);
  }

  /**
   * Set tracknum.
   * @param {string} trackingNumber
   * @returns {OrderShipment}
   */
  setTrackingNumber(trackingNumber) {
    return this.setField('tracknum', trackingNumber);
  }

  /**
   * Set tracktype.
   * @param {string} trackingType
   * @returns {OrderShipment}
   */
  setTrackingType(trackingType) {
    return this.setField('tracktype', trackingType);
  }

  /**
   * Set tracklink.
   * @param {string} trackingLink
   * @returns {OrderShipment}
   */
  setTrackingLink(trackingLink) {
    return this.setField('tracklink', trackingLink);
  }

  /**
   * Set weight.
   * @param {number} weight
   * @returns {OrderShipment}
   */
  setWeight(weight) {
    return this.setField('weight', weight);
  }

  /**
   * Set cost.
   * @param {number} cost
   * @returns {OrderShipment}
   */
  setCost(cost) {
    return this.setField('cost', cost);
  }
}

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

/** OrderItem data model. */
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
      if (!util.isInstanceOf(this.shipment, OrderShipment) && util.isObject(this.shipment)) {
        this.shipment = new OrderShipment(this.shipment);
      } else if (!util.isInstanceOf(this.shipment, OrderShipment)) {
        throw new Error(util.format('Expected OrderShipment or an Object but got %s',
          typeof this.shipment));
      }
    } else {
      this.shipment = {};
    }

    if (!util.isUndefined(this.discounts) && util.isArray(this.discounts)) {
      for (i = 0, l = this.discounts.length; i < l; i++) {
        if (!util.isInstanceOf(this.discounts[i], OrderItemDiscount) && util.isObject(data['discounts'][i])) {
          this.discounts[i] = new OrderItemDiscount(this.discounts[i]);
        } else if (!util.isInstanceOf(this.discounts[i], OrderItemDiscount)) {
          throw new Error(util.format('Expected array of OrderItemDiscount or an array of Objects but got %s',
            typeof this.discounts[i]));
        }
      }
    } else {
      this.discounts = [];
    }

    if (!util.isUndefined(this.options) && util.isArray(this.options)) {
      for (i = 0, l = this.options.length; i < l; i++) {
        if (!util.isInstanceOf(this.options[i], OrderItemOption) && util.isObject(data['options'][i])) {
          this.options[i] = new OrderItemOption(this.options[i]);
        } else if (!util.isInstanceOf(this.options[i], OrderItemOption)) {
          throw new Error(util.format('Expected array of OrderItemOption or an array of Objects but got %s',
            typeof this.options[i]));
        }
      }
    } else {
      this.options = [];
    }

    if (!util.isUndefined(this.subscription)) {
      if (!util.isInstanceOf(this.subscription, OrderItemSubscription) && util.isObject(this.subscription)) {
        this.subscription = new OrderItemSubscription(this.subscription);
      } else if (!util.isInstanceOf(this.subscription, OrderItemSubscription)) {
        throw new Error(util.format('Expected OrderItemSubscription or an Object but got %s',
          typeof this.subscription));
      }
    } else {
      this.subscription = {};
    }
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
    return this.getField('rma_dt_issued', 0);
  }
  
  /**
   * Get rma_dt_recvd.
   * @returns {number}
   */
  getRmaDateTimeReceived() {
    return this.getField('rma_dt_recvd', 0);
  }
  
  /**
   * Get dt_instock.
   * @returns {number}
   */
  getDateInStock() {
    return this.getField('dt_instock', 0);
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
   * @returns {number}
   */
  getRetail() {
    return this.getField('retail', 0.00);
  }
  
  /**
   * Get base_price.
   * @returns {number}
   */
  getBasePrice() {
    return this.getField('base_price', 0.00);
  }
  
  /**
   * Get price.
   * @returns {number}
   */
  getPrice() {
    return this.getField('price', 0.00);
  }
  
  /**
   * Get weight.
   * @returns {number}
   */
  getWeight() {
    return this.getField('weight', 0.00);
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
   * Get subscription.
   * @returns {OrderItemSubscription|*}
   */
  getSubscription() {
    return this.getField('subscription', null);
  }
  
  /**
   * Get total.
   * @returns {number}
   */
  getTotal() {
    return this.getField('total', 0.00);
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
   * Set status.
   * @param {number} status
   * @returns {OrderItem}
   */
  setStatus(status) {
    return this.setField('status', status);
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
   * @param {number} price
   * @returns {OrderItem}
   */
  setPrice(price) {
    return this.setField('price', price);
  }

  /**
   * Set weight.
   * @param {number} weight
   * @returns {OrderItem}
   */
  setWeight(weight) {
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
      if (util.isInstanceOf(options[i], OrderItemOption)) {
          continue;
      } else if (util.isObject(options[i])) {
          options[i] = new OrderItemOption(options[i]);
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
    if (!util.isInstanceOf(option, OrderItemOption)) {
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

    if (util.isInstanceOf(ret['shipment'], OrderShipment)) {
      ret['shipment'] = ret['shipment'].toObject();
    }

    if (util.isArray(ret['discounts'])) {
      for (i = 0, l = ret['discounts'].length; i < l; i++) {
        if (util.isInstanceOf(ret['discounts'][i], OrderItemDiscount)) {
          ret['discounts'][i] = ret['discounts'][i].toObject();
        }
      }
    }

    if (util.isArray(ret['options'])) {
      for (i = 0, l = ret['options'].length; i < l; i++) {
        if (util.isInstanceOf(ret['options'][i], OrderItemOption)) {
          ret['options'][i] = ret['options'][i].toObject();
        }
      }
    }

    if (util.isInstanceOf(ret['subscription'], OrderItemSubscription)) {
      ret['subscription'] = ret['subscription'].toObject();
    }

    return ret;
  }
}

/** OrderItemOption data model. */
class OrderItemOption extends Model {
  /**
   * OrderItemOption Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get attribute.
   * @returns {string}
   */
  getAttribute() {
    return this.getField('attribute');
  }
  
  /**
   * Get value.
   * @returns {string}
   */
  getValue() {
    return this.getField('value');
  }
  
  /**
   * Get weight.
   * @returns {number}
   */
  getWeight() {
    return this.getField('weight', 0.00);
  }
  
  /**
   * Get retail.
   * @returns {number}
   */
  getRetail() {
    return this.getField('retail', 0.00);
  }
  
  /**
   * Get base_price.
   * @returns {number}
   */
  getBasePrice() {
    return this.getField('base_price', 0.00);
  }
  
  /**
   * Get price.
   * @returns {number}
   */
  getPrice() {
    return this.getField('price', 0.00);
  }
  
  /**
   * Set attribute.
   * @param {string} attribute
   * @returns {OrderItemOption}
   */
  setAttribute(attribute) {
    return this.setField('attribute', attribute);
  }

  /**
   * Set value.
   * @param {string} value
   * @returns {OrderItemOption}
   */
  setValue(value) {
    return this.setField('value', value);
  }

  /**
   * Set weight.
   * @param {number} weight
   * @returns {OrderItemOption}
   */
  setWeight(weight) {
    return this.setField('weight', weight);
  }

  /**
   * Set price.
   * @param {number} price
   * @returns {OrderItemOption}
   */
  setPrice(price) {
    return this.setField('price', price);
  }
  
  /**
   * @override
   */
  toObject() {
    var ret = {};
    
    if (this.hasField('attribute')) {
      ret['attr_code'] = this.getField('attribute');
    }

    if (this.hasField('value')) {
      ret['opt_code_or_data'] = this.getField('value');
    }

    if (this.hasField('price')) {
      ret['price'] = this.getField('price');
    }

    if (this.hasField('weight')) {
      ret['weight'] = this.getField('weight');
    }

    return ret;
  }
}

/** OrderCharge data model. */
class OrderCharge extends Model {
  /**
   * OrderCharge Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get order_id.
   * @returns {number}
   */
  getOrderId() {
    return this.getField('order_id', 0);
  }
  
  /**
   * Get charge_id.
   * @returns {number}
   */
  getChargeId() {
    return this.getField('charge_id', 0);
  }
  
  /**
   * Get module_id.
   * @returns {number}
   */
  getModuleId() {
    return this.getField('module_id', 0);
  }
  
  /**
   * Get type.
   * @returns {string}
   */
  getType() {
    return this.getField('type');
  }
  
  /**
   * Get descrip.
   * @returns {string}
   */
  getDescription() {
    return this.getField('descrip');
  }
  
  /**
   * Get amount.
   * @returns {number}
   */
  getAmount() {
    return this.getField('amount', 0.00);
  }
  
  /**
   * Get disp_amt.
   * @returns {number}
   */
  getDisplayAmount() {
    return this.getField('disp_amt', 0.00);
  }
  
  /**
   * Get tax_exempt.
   * @returns {boolean}
   */
  getTaxExempt() {
    return this.getField('tax_exempt', false);
  }
  
  /**
   * Set type.
   * @param {string} type
   * @returns {OrderCharge}
   */
  setType(type) {
    return this.setField('type', type);
  }

  /**
   * Set descrip.
   * @param {string} description
   * @returns {OrderCharge}
   */
  setDescription(description) {
    return this.setField('descrip', description);
  }

  /**
   * Set amount.
   * @param {number} amount
   * @returns {OrderCharge}
   */
  setAmount(amount) {
    return this.setField('amount', amount);
  }

  /**
   * Set disp_amt.
   * @param {number} displayAmount
   * @returns {OrderCharge}
   */
  setDisplayAmount(displayAmount) {
    return this.setField('disp_amt', displayAmount);
  }

  /**
   * Set tax_exempt.
   * @param {boolean} taxExempt
   * @returns {OrderCharge}
   */
  setTaxExempt(taxExempt) {
    return this.setField('tax_exempt', taxExempt);
  }
}

/** OrderCoupon data model. */
class OrderCoupon extends Model {
  /**
   * OrderCoupon Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get order_id.
   * @returns {number}
   */
  getOrderId() {
    return this.getField('order_id', 0);
  }
  
  /**
   * Get coupon_id.
   * @returns {number}
   */
  getCouponId() {
    return this.getField('coupon_id', 0);
  }
  
  /**
   * Get code.
   * @returns {string}
   */
  getCode() {
    return this.getField('code');
  }
  
  /**
   * Get descrip.
   * @returns {string}
   */
  getDescription() {
    return this.getField('descrip');
  }
  
  /**
   * Get total.
   * @returns {number}
   */
  getTotal() {
    return this.getField('total', 0.00);
  }
}

/** OrderItemDiscount data model. */
class OrderItemDiscount extends Model {
  /**
   * OrderItemDiscount Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
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
   * Get pgrp_id.
   * @returns {number}
   */
  getPriceGroupId() {
    return this.getField('pgrp_id', 0);
  }
  
  /**
   * Get display.
   * @returns {boolean}
   */
  getDisplay() {
    return this.getField('display', false);
  }
  
  /**
   * Get descrip.
   * @returns {string}
   */
  getDescription() {
    return this.getField('descrip');
  }
  
  /**
   * Get discount.
   * @returns {number}
   */
  getDiscount() {
    return this.getField('discount', 0.00);
  }
}

/** OrderDiscountTotal data model. */
class OrderDiscountTotal extends Model {
  /**
   * OrderDiscountTotal Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get order_id.
   * @returns {number}
   */
  getOrderId() {
    return this.getField('order_id', 0);
  }
  
  /**
   * Get pgrp_id.
   * @returns {number}
   */
  getPriceGroupId() {
    return this.getField('pgrp_id', 0);
  }
  
  /**
   * Get name.
   * @returns {string}
   */
  getName() {
    return this.getField('name');
  }
  
  /**
   * Get descrip.
   * @returns {string}
   */
  getDescription() {
    return this.getField('descrip');
  }
  
  /**
   * Get total.
   * @returns {number}
   */
  getTotal() {
    return this.getField('total', 0.00);
  }
}

/** ORDER_PAYMENT_TYPE constants. */
/** @ignore */
const ORDER_PAYMENT_TYPE_DECLINED = 0;
/** @ignore */
const ORDER_PAYMENT_TYPE_LEGACY_AUTH = 1;
/** @ignore */
const ORDER_PAYMENT_TYPE_LEGACY_CAPTURE = 2;
/** @ignore */
const ORDER_PAYMENT_TYPE_AUTH = 3;
/** @ignore */
const ORDER_PAYMENT_TYPE_CAPTURE = 4;
/** @ignore */
const ORDER_PAYMENT_TYPE_AUTH_CAPTURE = 5;
/** @ignore */
const ORDER_PAYMENT_TYPE_REFUND = 6;
/** @ignore */
const ORDER_PAYMENT_TYPE_VOID = 7;

/** OrderPayment data model. */
class OrderPayment extends Model {
  /**
   * OrderPayment Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Constant ORDER_PAYMENT_TYPE_DECLINED
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_PAYMENT_TYPE_DECLINED() {
    return ORDER_PAYMENT_TYPE_DECLINED;
  }

  /**
   * Constant ORDER_PAYMENT_TYPE_LEGACY_AUTH
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_PAYMENT_TYPE_LEGACY_AUTH() {
    return ORDER_PAYMENT_TYPE_LEGACY_AUTH;
  }

  /**
   * Constant ORDER_PAYMENT_TYPE_LEGACY_CAPTURE
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_PAYMENT_TYPE_LEGACY_CAPTURE() {
    return ORDER_PAYMENT_TYPE_LEGACY_CAPTURE;
  }

  /**
   * Constant ORDER_PAYMENT_TYPE_AUTH
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_PAYMENT_TYPE_AUTH() {
    return ORDER_PAYMENT_TYPE_AUTH;
  }

  /**
   * Constant ORDER_PAYMENT_TYPE_CAPTURE
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_PAYMENT_TYPE_CAPTURE() {
    return ORDER_PAYMENT_TYPE_CAPTURE;
  }

  /**
   * Constant ORDER_PAYMENT_TYPE_AUTH_CAPTURE
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_PAYMENT_TYPE_AUTH_CAPTURE() {
    return ORDER_PAYMENT_TYPE_AUTH_CAPTURE;
  }

  /**
   * Constant ORDER_PAYMENT_TYPE_REFUND
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_PAYMENT_TYPE_REFUND() {
    return ORDER_PAYMENT_TYPE_REFUND;
  }

  /**
   * Constant ORDER_PAYMENT_TYPE_VOID
   * @returns {number}
   * @const
   * @static
   */
  static get ORDER_PAYMENT_TYPE_VOID() {
    return ORDER_PAYMENT_TYPE_VOID;
  }

  /**
   * Get id.
   * @returns {number}
   */
  getId() {
    return this.getField('id', 0);
  }
  
  /**
   * Get order_id.
   * @returns {number}
   */
  getOrderId() {
    return this.getField('order_id', 0);
  }
  
  /**
   * Get type.
   * @returns {number}
   */
  getType() {
    return this.getField('type', 0);
  }
  
  /**
   * Get refnum.
   * @returns {string}
   */
  getReferenceNumber() {
    return this.getField('refnum');
  }
  
  /**
   * Get amount.
   * @returns {number}
   */
  getAmount() {
    return this.getField('amount', 0.00);
  }
  
  /**
   * Get formatted_amount.
   * @returns {string}
   */
  getFormattedAmount() {
    return this.getField('formatted_amount');
  }
  
  /**
   * Get available.
   * @returns {number}
   */
  getAvailable() {
    return this.getField('available', 0.00);
  }
  
  /**
   * Get formatted_available.
   * @returns {string}
   */
  getFormattedAvailable() {
    return this.getField('formatted_available');
  }
  
  /**
   * Get dtstamp.
   * @returns {number}
   */
  getDateTimeStamp() {
    return this.getField('dtstamp', 0);
  }
  
  /**
   * Get expires.
   * @returns {string}
   */
  getExpires() {
    return this.getField('expires');
  }
  
  /**
   * Get pay_id.
   * @returns {number}
   */
  getPaymentId() {
    return this.getField('pay_id', 0);
  }
  
  /**
   * Get pay_secid.
   * @returns {number}
   */
  getPaymentSecId() {
    return this.getField('pay_secid', 0);
  }
  
  /**
   * Get decrypt_status.
   * @returns {string}
   */
  getDecryptStatus() {
    return this.getField('decrypt_status');
  }
  
  /**
   * Get decrypt_error.
   * @returns {string}
   */
  getDecryptError() {
    return this.getField('decrypt_error');
  }
  
  /**
   * Get description.
   * @returns {string}
   */
  getDescription() {
    return this.getField('description');
  }
  
  /**
   * Get data.
   * @returns {array}
   */
  getPaymentData() {
    return this.getField('data', []);
  }
}

/** Subscription data model. */
class Subscription extends Model {
  /**
   * Subscription Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get id.
   * @returns {number}
   */
  getId() {
    return this.getField('id', 0);
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
   * Get cust_id.
   * @returns {number}
   */
  getCustomerId() {
    return this.getField('cust_id', 0);
  }
  
  /**
   * Get custpc_id.
   * @returns {number}
   */
  getCustomerPaymentCardId() {
    return this.getField('custpc_id', 0);
  }
  
  /**
   * Get product_id.
   * @returns {number}
   */
  getProductId() {
    return this.getField('product_id', 0);
  }
  
  /**
   * Get subterm_id.
   * @returns {number}
   */
  getSubscriptionTermId() {
    return this.getField('subterm_id', 0);
  }
  
  /**
   * Get addr_id.
   * @returns {number}
   */
  getAddressId() {
    return this.getField('addr_id', 0);
  }
  
  /**
   * Get ship_id.
   * @returns {number}
   */
  getShipId() {
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
   * Get quantity.
   * @returns {number}
   */
  getQuantity() {
    return this.getField('quantity', 0);
  }
  
  /**
   * Get termrem.
   * @returns {number}
   */
  getTermRemaining() {
    return this.getField('termrem', 0);
  }
  
  /**
   * Get termproc.
   * @returns {number}
   */
  getTermProcessed() {
    return this.getField('termproc', 0);
  }
  
  /**
   * Get firstdate.
   * @returns {number}
   */
  getFirstDate() {
    return this.getField('firstdate', 0);
  }
  
  /**
   * Get lastdate.
   * @returns {number}
   */
  getLastDate() {
    return this.getField('lastdate', 0);
  }
  
  /**
   * Get nextdate.
   * @returns {number}
   */
  getNextDate() {
    return this.getField('nextdate', 0);
  }
  
  /**
   * Get status.
   * @returns {string}
   */
  getStatus() {
    return this.getField('status');
  }
  
  /**
   * Get message.
   * @returns {string}
   */
  getMessage() {
    return this.getField('message');
  }
  
  /**
   * Get cncldate.
   * @returns {string}
   */
  getCancelDate() {
    return this.getField('cncldate');
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
   * Get shipping.
   * @returns {number}
   */
  getShipping() {
    return this.getField('shipping', 0.00);
  }
  
  /**
   * Get formatted_shipping.
   * @returns {string}
   */
  getFormattedShipping() {
    return this.getField('formatted_shipping');
  }
  
  /**
   * Get subtotal.
   * @returns {number}
   */
  getSubtotal() {
    return this.getField('subtotal', 0.00);
  }
  
  /**
   * Get formatted_subtotal.
   * @returns {string}
   */
  getFormattedSubtotal() {
    return this.getField('formatted_subtotal');
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
   * Set cncldate.
   * @param {string} cancelDate
   * @returns {Subscription}
   */
  setCancelDate(cancelDate) {
    return this.setField('cncldate', cancelDate);
  }
}

/** TERM_FREQUENCY constants. */
/** @ignore */
const TERM_FREQUENCY_N_DAYS = 'n';
/** @ignore */
const TERM_FREQUENCY_N_MONTHS = 'n_months';
/** @ignore */
const TERM_FREQUENCY_DAILY = 'daily';
/** @ignore */
const TERM_FREQUENCY_WEEKLY = 'weekly';
/** @ignore */
const TERM_FREQUENCY_BIWEEKLY = 'biweekly';
/** @ignore */
const TERM_FREQUENCY_QUARTERLY = 'quarterly';
/** @ignore */
const TERM_FREQUENCY_SEMIANNUALLY = 'semiannually';
/** @ignore */
const TERM_FREQUENCY_ANNUALLY = 'annually';
/** @ignore */
const TERM_FREQUENCY_FIXED_WEEKLY = 'fixedweekly';
/** @ignore */
const TERM_FREQUENCY_FIXED_MONTHLY = 'fixedmonthly';
/** @ignore */
const TERM_FREQUENCY_DATES = 'dates';

/** ProductSubscriptionTerm data model. */
class ProductSubscriptionTerm extends Model {
  /**
   * ProductSubscriptionTerm Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Constant TERM_FREQUENCY_N_DAYS
   * @returns {string}
   * @const
   * @static
   */
  static get TERM_FREQUENCY_N_DAYS() {
    return TERM_FREQUENCY_N_DAYS;
  }

  /**
   * Constant TERM_FREQUENCY_N_MONTHS
   * @returns {string}
   * @const
   * @static
   */
  static get TERM_FREQUENCY_N_MONTHS() {
    return TERM_FREQUENCY_N_MONTHS;
  }

  /**
   * Constant TERM_FREQUENCY_DAILY
   * @returns {string}
   * @const
   * @static
   */
  static get TERM_FREQUENCY_DAILY() {
    return TERM_FREQUENCY_DAILY;
  }

  /**
   * Constant TERM_FREQUENCY_WEEKLY
   * @returns {string}
   * @const
   * @static
   */
  static get TERM_FREQUENCY_WEEKLY() {
    return TERM_FREQUENCY_WEEKLY;
  }

  /**
   * Constant TERM_FREQUENCY_BIWEEKLY
   * @returns {string}
   * @const
   * @static
   */
  static get TERM_FREQUENCY_BIWEEKLY() {
    return TERM_FREQUENCY_BIWEEKLY;
  }

  /**
   * Constant TERM_FREQUENCY_QUARTERLY
   * @returns {string}
   * @const
   * @static
   */
  static get TERM_FREQUENCY_QUARTERLY() {
    return TERM_FREQUENCY_QUARTERLY;
  }

  /**
   * Constant TERM_FREQUENCY_SEMIANNUALLY
   * @returns {string}
   * @const
   * @static
   */
  static get TERM_FREQUENCY_SEMIANNUALLY() {
    return TERM_FREQUENCY_SEMIANNUALLY;
  }

  /**
   * Constant TERM_FREQUENCY_ANNUALLY
   * @returns {string}
   * @const
   * @static
   */
  static get TERM_FREQUENCY_ANNUALLY() {
    return TERM_FREQUENCY_ANNUALLY;
  }

  /**
   * Constant TERM_FREQUENCY_FIXED_WEEKLY
   * @returns {string}
   * @const
   * @static
   */
  static get TERM_FREQUENCY_FIXED_WEEKLY() {
    return TERM_FREQUENCY_FIXED_WEEKLY;
  }

  /**
   * Constant TERM_FREQUENCY_FIXED_MONTHLY
   * @returns {string}
   * @const
   * @static
   */
  static get TERM_FREQUENCY_FIXED_MONTHLY() {
    return TERM_FREQUENCY_FIXED_MONTHLY;
  }

  /**
   * Constant TERM_FREQUENCY_DATES
   * @returns {string}
   * @const
   * @static
   */
  static get TERM_FREQUENCY_DATES() {
    return TERM_FREQUENCY_DATES;
  }

  /**
   * Get id.
   * @returns {number}
   */
  getId() {
    return this.getField('id', 0);
  }
  
  /**
   * Get product_id.
   * @returns {number}
   */
  getProductId() {
    return this.getField('product_id', 0);
  }
  
  /**
   * Get frequency.
   * @returns {string}
   */
  getFrequency() {
    return this.getField('frequency');
  }
  
  /**
   * Get term.
   * @returns {number}
   */
  getTerm() {
    return this.getField('term', 0);
  }
  
  /**
   * Get descrip.
   * @returns {string}
   */
  getDescription() {
    return this.getField('descrip');
  }
  
  /**
   * Get n.
   * @returns {number}
   */
  getN() {
    return this.getField('n', 0);
  }
  
  /**
   * Get fixed_dow.
   * @returns {number}
   */
  getFixedDayOfWeek() {
    return this.getField('fixed_dow', 0);
  }
  
  /**
   * Get fixed_dom.
   * @returns {number}
   */
  getFixedDayOfMonth() {
    return this.getField('fixed_dom', 0);
  }
  
  /**
   * Get sub_count.
   * @returns {number}
   */
  getSubscriptionCount() {
    return this.getField('sub_count', 0);
  }
}

/** OrderCustomField data model. */
class OrderCustomField extends Model {
  /**
   * OrderCustomField Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);

    if (!util.isUndefined(this.module)) {
      if (!util.isInstanceOf(this.module, Module) && util.isObject(this.module)) {
        this.module = new Module(this.module);
      } else if (!util.isInstanceOf(this.module, Module)) {
        throw new Error(util.format('Expected Module or an Object but got %s',
          typeof this.module));
      }
    } else {
      this.module = {};
    }
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
   * Get type.
   * @returns {string}
   */
  getType() {
    return this.getField('type');
  }
  
  /**
   * Get searchable.
   * @returns {boolean}
   */
  getSearchable() {
    return this.getField('searchable', false);
  }
  
  /**
   * Get sortable.
   * @returns {boolean}
   */
  getSortable() {
    return this.getField('sortable', false);
  }
  
  /**
   * Get module.
   * @returns {Module|*}
   */
  getModule() {
    return this.getField('module', null);
  }
  
  /**
   * Get choices.
   * @returns {array}
   */
  getChoices() {
    return this.getField('choices', []);
  }
  
  /**
   * Set code.
   * @param {string} code
   * @returns {OrderCustomField}
   */
  setCode(code) {
    return this.setField('code', code);
  }

  /**
   * Set name.
   * @param {string} name
   * @returns {OrderCustomField}
   */
  setName(name) {
    return this.setField('name', name);
  }

  /**
   * Set type.
   * @param {string} type
   * @returns {OrderCustomField}
   */
  setType(type) {
    return this.setField('type', type);
  }

  /**
   * Set searchable.
   * @param {boolean} searchable
   * @returns {OrderCustomField}
   */
  setSearchable(searchable) {
    return this.setField('searchable', searchable);
  }

  /**
   * Set sortable.
   * @param {boolean} sortable
   * @returns {OrderCustomField}
   */
  setSortable(sortable) {
    return this.setField('sortable', sortable);
  }

  /**
   * Set module.
   * @param {Module|Object} module
   * @returns {OrderCustomField}
   * @throws {Error}
   */
  setModule(module) {
    if (util.isInstanceOf(module, Module) || util.isNull(module)) {
      return this.setField('module', module);
    } else if (util.isObject(module)) {
      return this.setField('module', new Module(module));
    }

    throw new Error(util.format('Expected instance of Module, Object, or null but got %s',
      typeof module));
  }

  /**
   * Set choices.
   * @param {Array} choices
   * @returns {OrderCustomField}
   */
  setChoices(choices) {
    return this.setField('choices', choices);
  }
  
  /**
   * @override
   */
  toObject() {
    var ret = Object.assign(this);

    if (util.isInstanceOf(ret['module'], Module)) {
      ret['module'] = ret['module'].toObject();
    }

    return ret;
  }
}

/** CustomerPaymentCard data model. */
class CustomerPaymentCard extends Model {
  /**
   * CustomerPaymentCard Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get id.
   * @returns {number}
   */
  getId() {
    return this.getField('id', 0);
  }
  
  /**
   * Get cust_id.
   * @returns {number}
   */
  getCustomerId() {
    return this.getField('cust_id', 0);
  }
  
  /**
   * Get fname.
   * @returns {string}
   */
  getFirstName() {
    return this.getField('fname');
  }
  
  /**
   * Get lname.
   * @returns {string}
   */
  getLastName() {
    return this.getField('lname');
  }
  
  /**
   * Get exp_month.
   * @returns {number}
   */
  getExpirationMonth() {
    return this.getField('exp_month', 0);
  }
  
  /**
   * Get exp_year.
   * @returns {number}
   */
  getExpirationYear() {
    return this.getField('exp_year', 0);
  }
  
  /**
   * Get lastfour.
   * @returns {string}
   */
  getLastFour() {
    return this.getField('lastfour');
  }
  
  /**
   * Get addr1.
   * @returns {string}
   */
  getAddress1() {
    return this.getField('addr1');
  }
  
  /**
   * Get addr2.
   * @returns {string}
   */
  getAddress2() {
    return this.getField('addr2');
  }
  
  /**
   * Get city.
   * @returns {string}
   */
  getCity() {
    return this.getField('city');
  }
  
  /**
   * Get state.
   * @returns {string}
   */
  getState() {
    return this.getField('state');
  }
  
  /**
   * Get zip.
   * @returns {string}
   */
  getZip() {
    return this.getField('zip');
  }
  
  /**
   * Get cntry.
   * @returns {string}
   */
  getCountry() {
    return this.getField('cntry');
  }
  
  /**
   * Get lastused.
   * @returns {string}
   */
  getLastUsed() {
    return this.getField('lastused');
  }
  
  /**
   * Get token.
   * @returns {string}
   */
  getToken() {
    return this.getField('token');
  }
  
  /**
   * Get type_id.
   * @returns {number}
   */
  getTypeId() {
    return this.getField('type_id', 0);
  }
  
  /**
   * Get refcount.
   * @returns {number}
   */
  getReferenceCount() {
    return this.getField('refcount', 0);
  }
  
  /**
   * Get type.
   * @returns {string}
   */
  getType() {
    return this.getField('type');
  }
  
  /**
   * Get mod_code.
   * @returns {string}
   */
  getModuleCode() {
    return this.getField('mod_code');
  }
  
  /**
   * Get meth_code.
   * @returns {string}
   */
  getMethodCode() {
    return this.getField('meth_code');
  }
}

/** OrderProduct data model. */
class OrderProduct extends Model {
  /**
   * OrderProduct Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    var i;
    var l;

    super(data);

    if (!util.isUndefined(this.attributes) && util.isArray(this.attributes)) {
      for (i = 0, l = this.attributes.length; i < l; i++) {
        if (!util.isInstanceOf(this.attributes[i], OrderProductAttribute) && util.isObject(data['attributes'][i])) {
          this.attributes[i] = new OrderProductAttribute(this.attributes[i]);
        } else if (!util.isInstanceOf(this.attributes[i], OrderProductAttribute)) {
          throw new Error(util.format('Expected array of OrderProductAttribute or an array of Objects but got %s',
            typeof this.attributes[i]));
        }
      }
    } else {
      this.attributes = [];
    }
  }

  /**
   * Get status.
   * @returns {number}
   */
  getStatus() {
    return this.getField('status', 0);
  }
  
  /**
   * Get code.
   * @returns {string}
   */
  getCode() {
    return this.getField('code');
  }
  
  /**
   * Get sku.
   * @returns {string}
   */
  getSku() {
    return this.getField('sku');
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
   * Get quantity.
   * @returns {number}
   */
  getQuantity() {
    return this.getField('quantity', 0);
  }
  
  /**
   * Get attributes.
   * @returns {OrderProductAttribute[]}
   */
  getAttributes() {
    return this.getField('attributes', []);
  }
  
  /**
   * Set status.
   * @param {number} status
   * @returns {OrderProduct}
   */
  setStatus(status) {
    return this.setField('status', status);
  }

  /**
   * Set code.
   * @param {string} code
   * @returns {OrderProduct}
   */
  setCode(code) {
    return this.setField('code', code);
  }

  /**
   * Set sku.
   * @param {string} sku
   * @returns {OrderProduct}
   */
  setSku(sku) {
    return this.setField('sku', sku);
  }

  /**
   * Set tracknum.
   * @param {string} trackingNumber
   * @returns {OrderProduct}
   */
  setTrackingNumber(trackingNumber) {
    return this.setField('tracknum', trackingNumber);
  }

  /**
   * Set tracktype.
   * @param {string} trackingType
   * @returns {OrderProduct}
   */
  setTrackingType(trackingType) {
    return this.setField('tracktype', trackingType);
  }

  /**
   * Set quantity.
   * @param {number} quantity
   * @returns {OrderProduct}
   */
  setQuantity(quantity) {
    return this.setField('quantity', quantity);
  }

  /**
   * Set attributes.
   * @param {OrderProductAttribute[]} attributes
   * @throws {Error}
   * @returns {OrderProduct}
   */
  setAttributes(attributes) {
    var i;
    var l;

    if (!util.isArray(attributes)) {
      throw new Error(util.format('Expected an array but got %s', typeof attributes));
    }

    for (i = 0, l = attributes.length; i < l; i++) {
      if (util.isInstanceOf(attributes[i], OrderProductAttribute)) {
          continue;
      } else if (util.isObject(attributes[i])) {
          attributes[i] = new OrderProductAttribute(attributes[i]);
      } else {
        throw new Error(util.format('Expected instance of OrderProductAttribute, Object, or null but got %s at offset %d',
          typeof attributes[i], i));
      }
    }

    return this.setField('attributes', attributes);
  }

  /**
   * Add a OrderProductAttribute.
   * @param {OrderProductAttribute} attribute
   * @returns {OrderProduct}
   */
  addAttribute(attribute) {
    if (!util.isInstanceOf(attribute, OrderProductAttribute)) {
      throw new Error(util.format('Expected instance of OrderProductAttribute but got %s', typeof attribute));
    }

    if (util.isUndefined(this['attributes'])) {
      this['attributes'] = [];
    }

    this['attributes'].push(attribute);

    return this;
  }
  
  /**
   * @override
   */
  toObject() {
    var i;
    var l;
    var ret = Object.assign(this);

    if (util.isArray(ret['attributes'])) {
      for (i = 0, l = ret['attributes'].length; i < l; i++) {
        if (util.isInstanceOf(ret['attributes'][i], OrderProductAttribute)) {
          ret['attributes'][i] = ret['attributes'][i].toObject();
        }
      }
    }

    return ret;
  }
}

/** OrderProductAttribute data model. */
class OrderProductAttribute extends Model {
  /**
   * OrderProductAttribute Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get code.
   * @returns {string}
   */
  getCode() {
    return this.getField('code');
  }
  
  /**
   * Get template_code.
   * @returns {string}
   */
  getTemplateCode() {
    return this.getField('template_code');
  }
  
  /**
   * Get value.
   * @returns {string}
   */
  getValue() {
    return this.getField('value');
  }
  
  /**
   * Set code.
   * @param {string} code
   * @returns {OrderProductAttribute}
   */
  setCode(code) {
    return this.setField('code', code);
  }

  /**
   * Set template_code.
   * @param {string} templateCode
   * @returns {OrderProductAttribute}
   */
  setTemplateCode(templateCode) {
    return this.setField('template_code', templateCode);
  }

  /**
   * Set value.
   * @param {string} value
   * @returns {OrderProductAttribute}
   */
  setValue(value) {
    return this.setField('value', value);
  }
}

/** ProductInventorySettings data model. */
class ProductInventorySettings extends Model {
  /**
   * ProductInventorySettings Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get active.
   * @returns {boolean}
   */
  getActive() {
    return this.getField('active', false);
  }
  
  /**
   * Get in_short.
   * @returns {string}
   */
  getInStockMessageShort() {
    return this.getField('in_short');
  }
  
  /**
   * Get in_long.
   * @returns {string}
   */
  getInStockMessageLong() {
    return this.getField('in_long');
  }
  
  /**
   * Get low_track.
   * @returns {string}
   */
  getTrackLowStockLevel() {
    return this.getField('low_track');
  }
  
  /**
   * Get low_level.
   * @returns {number}
   */
  getLowStockLevel() {
    return this.getField('low_level', 0);
  }
  
  /**
   * Get low_lvl_d.
   * @returns {boolean}
   */
  getLowStockLevelDefault() {
    return this.getField('low_lvl_d', false);
  }
  
  /**
   * Get low_short.
   * @returns {string}
   */
  getLowStockMessageShort() {
    return this.getField('low_short');
  }
  
  /**
   * Get low_long.
   * @returns {string}
   */
  getLowStockMessageLong() {
    return this.getField('low_long');
  }
  
  /**
   * Get out_track.
   * @returns {string}
   */
  getTrackOutOfStockLevel() {
    return this.getField('out_track');
  }
  
  /**
   * Get out_hide.
   * @returns {string}
   */
  getHideOutOfStock() {
    return this.getField('out_hide');
  }
  
  /**
   * Get out_level.
   * @returns {number}
   */
  getOutOfStockLevel() {
    return this.getField('out_level', 0);
  }
  
  /**
   * Get out_lvl_d.
   * @returns {boolean}
   */
  getOutOfStockLevelDefault() {
    return this.getField('out_lvl_d', false);
  }
  
  /**
   * Get out_short.
   * @returns {string}
   */
  getOutOfStockMessageShort() {
    return this.getField('out_short');
  }
  
  /**
   * Get out_long.
   * @returns {string}
   */
  getOutOfStockMessageLong() {
    return this.getField('out_long');
  }
  
  /**
   * Get ltd_long.
   * @returns {string}
   */
  getLimitedStockMessage() {
    return this.getField('ltd_long');
  }
}

/** CustomFieldValues data model. */
class CustomFieldValues extends Model {
  /**
   * CustomFieldValues Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get a value for a module by its code.
   * @param {string} code
   * @param {string} module
   * @returns {*}
   */
  getValue(code, module = 'customfields') {
    return this.hasValue(code, module) ?
      this[module][code] : null;
  }

  /**
   * Check if a value for code and module exists.
   * @param {string} code
   * @param {string} module
   * @returns {boolean}
   */
  hasValue(code, module = 'customfields') {
    return module in this && code in this[module];
  }

  /**
   * Check if a specific module is defined.
   * @param {string} module
   * @returns {boolean}
   */
  hasModule(module) {
    return module in this;
  }

  /**
   * Get a specific modules custom field values.
   * @param {string} module
   * @returns {Object}
   */
  getModule(module) {
      return this.hasModule(module) ? this[module] : {};
  }
  /**
   * Add a custom field value.
   * @param {string} field
   * @param {*} value
   * @param {string} module
   * @returns {CustomFieldValues}
   */
  addValue(field, value, module = 'customfields') {
    if (!this.hasModule(module)) {
      this[module] = {}
    }
    this[module][field] = value;
    return this;
  }
}

/** ProductVariantPart data model. */
class ProductVariantPart extends Model {
  /**
   * ProductVariantPart Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get product_id.
   * @returns {number}
   */
  getProductId() {
    return this.getField('product_id', 0);
  }
  
  /**
   * Get product_code.
   * @returns {string}
   */
  getProductCode() {
    return this.getField('product_code');
  }
  
  /**
   * Get product_name.
   * @returns {string}
   */
  getProductName() {
    return this.getField('product_name');
  }
  
  /**
   * Get quantity.
   * @returns {number}
   */
  getQuantity() {
    return this.getField('quantity', 0);
  }
}

/** ProductVariantDimension data model. */
class ProductVariantDimension extends Model {
  /**
   * ProductVariantDimension Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get attr_id.
   * @returns {number}
   */
  getAttributeId() {
    return this.getField('attr_id', 0);
  }
  
  /**
   * Get attmpat_id.
   * @returns {number}
   */
  getAttributeTemplateAttributeId() {
    return this.getField('attmpat_id', 0);
  }
  
  /**
   * Get option_id.
   * @returns {number}
   */
  getOptionId() {
    return this.getField('option_id', 0);
  }
  
  /**
   * Get option_code.
   * @returns {string}
   */
  getOptionCode() {
    return this.getField('option_code');
  }
}

/** OrderItemSubscription data model. */
class OrderItemSubscription extends Model {
  /**
   * OrderItemSubscription Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    var i;
    var l;

    super(data);

    if (!util.isUndefined(this.productsubscriptionterm)) {
      if (!util.isInstanceOf(this.productsubscriptionterm, ProductSubscriptionTerm) && util.isObject(this.productsubscriptionterm)) {
        this.productsubscriptionterm = new ProductSubscriptionTerm(this.productsubscriptionterm);
      } else if (!util.isInstanceOf(this.productsubscriptionterm, ProductSubscriptionTerm)) {
        throw new Error(util.format('Expected ProductSubscriptionTerm or an Object but got %s',
          typeof this.productsubscriptionterm));
      }
    } else {
      this.productsubscriptionterm = {};
    }

    if (!util.isUndefined(this.options) && util.isArray(this.options)) {
      for (i = 0, l = this.options.length; i < l; i++) {
        if (!util.isInstanceOf(this.options[i], SubscriptionOption) && util.isObject(data['options'][i])) {
          this.options[i] = new SubscriptionOption(this.options[i]);
        } else if (!util.isInstanceOf(this.options[i], SubscriptionOption)) {
          throw new Error(util.format('Expected array of SubscriptionOption or an array of Objects but got %s',
            typeof this.options[i]));
        }
      }
    } else {
      this.options = [];
    }
  }

  /**
   * Get method.
   * @returns {string}
   */
  getMethod() {
    return this.getField('method');
  }
  
  /**
   * Get productsubscriptionterm.
   * @returns {ProductSubscriptionTerm|*}
   */
  getProductSubscriptionTerm() {
    return this.getField('productsubscriptionterm', null);
  }
  
  /**
   * Get options.
   * @returns {SubscriptionOption[]}
   */
  getOptions() {
    return this.getField('options', []);
  }
  
  /**
   * @override
   */
  toObject() {
    var i;
    var l;
    var ret = Object.assign(this);

    if (util.isInstanceOf(ret['productsubscriptionterm'], ProductSubscriptionTerm)) {
      ret['productsubscriptionterm'] = ret['productsubscriptionterm'].toObject();
    }

    if (util.isArray(ret['options'])) {
      for (i = 0, l = ret['options'].length; i < l; i++) {
        if (util.isInstanceOf(ret['options'][i], SubscriptionOption)) {
          ret['options'][i] = ret['options'][i].toObject();
        }
      }
    }

    return ret;
  }
}

/** SubscriptionOption data model. */
class SubscriptionOption extends Model {
  /**
   * SubscriptionOption Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get subscrp_id.
   * @returns {number}
   */
  getSubscriptionId() {
    return this.getField('subscrp_id', 0);
  }
  
  /**
   * Get templ_code.
   * @returns {string}
   */
  getTemplateCode() {
    return this.getField('templ_code');
  }
  
  /**
   * Get attr_code.
   * @returns {string}
   */
  getAttributeCode() {
    return this.getField('attr_code');
  }
  
  /**
   * Get value.
   * @returns {string}
   */
  getValue() {
    return this.getField('value');
  }
}

/** ProductInventoryAdjustment data model. */
class ProductInventoryAdjustment extends Model {
  /**
   * ProductInventoryAdjustment Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get product_id.
   * @returns {number}
   */
  getProductId() {
    return this.getField('product_id', 0);
  }
  
  /**
   * Get product_code.
   * @returns {string}
   */
  getProductCode() {
    return this.getField('product_code');
  }
  
  /**
   * Get product_sku.
   * @returns {string}
   */
  getProductSku() {
    return this.getField('product_sku');
  }
  
  /**
   * Get adjustment.
   * @returns {number}
   */
  getAdjustment() {
    return this.getField('adjustment', 0.00);
  }
  
  /**
   * Set product_id.
   * @param {number} productId
   * @returns {ProductInventoryAdjustment}
   */
  setProductId(productId) {
    return this.setField('product_id', productId);
  }

  /**
   * Set product_code.
   * @param {string} productCode
   * @returns {ProductInventoryAdjustment}
   */
  setProductCode(productCode) {
    return this.setField('product_code', productCode);
  }

  /**
   * Set product_sku.
   * @param {string} productSku
   * @returns {ProductInventoryAdjustment}
   */
  setProductSku(productSku) {
    return this.setField('product_sku', productSku);
  }

  /**
   * Set adjustment.
   * @param {number} adjustment
   * @returns {ProductInventoryAdjustment}
   */
  setAdjustment(adjustment) {
    return this.setField('adjustment', adjustment);
  }
}

/** OrderItemAttribute data model. */
class OrderItemAttribute extends Model {
  /**
   * OrderItemAttribute Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get attr_code.
   * @returns {string}
   */
  getAttributeCode() {
    return this.getField('attr_code');
  }
  
  /**
   * Get opt_code_or_data.
   * @returns {string}
   */
  getOptionCodeOrData() {
    return this.getField('opt_code_or_data');
  }
  
  /**
   * Get price.
   * @returns {number}
   */
  getPrice() {
    return this.getField('price', 0.00);
  }
  
  /**
   * Get weight.
   * @returns {number}
   */
  getWeight() {
    return this.getField('weight', 0.00);
  }
  
  /**
   * Set attr_code.
   * @param {string} attributeCode
   * @returns {OrderItemAttribute}
   */
  setAttributeCode(attributeCode) {
    return this.setField('attr_code', attributeCode);
  }

  /**
   * Set opt_code_or_data.
   * @param {string} optionCodeOrData
   * @returns {OrderItemAttribute}
   */
  setOptionCodeOrData(optionCodeOrData) {
    return this.setField('opt_code_or_data', optionCodeOrData);
  }

  /**
   * Set price.
   * @param {number} price
   * @returns {OrderItemAttribute}
   */
  setPrice(price) {
    return this.setField('price', price);
  }

  /**
   * Set weight.
   * @param {number} weight
   * @returns {OrderItemAttribute}
   */
  setWeight(weight) {
    return this.setField('weight', weight);
  }
}

/** OrderShipmentUpdate data model. */
class OrderShipmentUpdate extends Model {
  /**
   * OrderShipmentUpdate Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get shpmnt_id.
   * @returns {number}
   */
  getShipmentId() {
    return this.getField('shpmnt_id', 0);
  }
  
  /**
   * Get mark_shipped.
   * @returns {boolean}
   */
  getMarkShipped() {
    return this.getField('mark_shipped', false);
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
   * Get cost.
   * @returns {number}
   */
  getCost() {
    return this.getField('cost', 0.00);
  }
  
  /**
   * Set shpmnt_id.
   * @param {number} shipmentId
   * @returns {OrderShipmentUpdate}
   */
  setShipmentId(shipmentId) {
    return this.setField('shpmnt_id', shipmentId);
  }

  /**
   * Set mark_shipped.
   * @param {boolean} markShipped
   * @returns {OrderShipmentUpdate}
   */
  setMarkShipped(markShipped) {
    return this.setField('mark_shipped', markShipped);
  }

  /**
   * Set tracknum.
   * @param {string} trackingNumber
   * @returns {OrderShipmentUpdate}
   */
  setTrackingNumber(trackingNumber) {
    return this.setField('tracknum', trackingNumber);
  }

  /**
   * Set tracktype.
   * @param {string} trackingType
   * @returns {OrderShipmentUpdate}
   */
  setTrackingType(trackingType) {
    return this.setField('tracktype', trackingType);
  }

  /**
   * Set cost.
   * @param {number} cost
   * @returns {OrderShipmentUpdate}
   */
  setCost(cost) {
    return this.setField('cost', cost);
  }
}

/** ProductVariantLimit data model. */
class ProductVariantLimit extends Model {
  /**
   * ProductVariantLimit Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get attr_id.
   * @returns {number}
   */
  getAttributeId() {
    return this.getField('attr_id', 0);
  }
  
  /**
   * Get attmpat_id.
   * @returns {number}
   */
  getAttributeTemplateId() {
    return this.getField('attmpat_id', 0);
  }
  
  /**
   * Get option_id.
   * @returns {number}
   */
  getOptionId() {
    return this.getField('option_id', 0);
  }
  
  /**
   * Set attr_id.
   * @param {number} attributeId
   * @returns {ProductVariantLimit}
   */
  setAttributeId(attributeId) {
    return this.setField('attr_id', attributeId);
  }

  /**
   * Set attmpat_id.
   * @param {number} attributeTemplateId
   * @returns {ProductVariantLimit}
   */
  setAttributeTemplateId(attributeTemplateId) {
    return this.setField('attmpat_id', attributeTemplateId);
  }

  /**
   * Set option_id.
   * @param {number} optionId
   * @returns {ProductVariantLimit}
   */
  setOptionId(optionId) {
    return this.setField('option_id', optionId);
  }
}

/** ProductVariantExclusion data model. */
class ProductVariantExclusion extends Model {
  /**
   * ProductVariantExclusion Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get attr_id.
   * @returns {number}
   */
  getAttributeId() {
    return this.getField('attr_id', 0);
  }
  
  /**
   * Get attmpat_id.
   * @returns {number}
   */
  getAttributeTemplateId() {
    return this.getField('attmpat_id', 0);
  }
  
  /**
   * Get option_id.
   * @returns {number}
   */
  getOptionId() {
    return this.getField('option_id', 0);
  }
  
  /**
   * Set attr_id.
   * @param {number} attributeId
   * @returns {ProductVariantExclusion}
   */
  setAttributeId(attributeId) {
    return this.setField('attr_id', attributeId);
  }

  /**
   * Set attmpat_id.
   * @param {number} attributeTemplateId
   * @returns {ProductVariantExclusion}
   */
  setAttributeTemplateId(attributeTemplateId) {
    return this.setField('attmpat_id', attributeTemplateId);
  }

  /**
   * Set option_id.
   * @param {number} optionId
   * @returns {ProductVariantExclusion}
   */
  setOptionId(optionId) {
    return this.setField('option_id', optionId);
  }
}

/** ProvisionMessage data model. */
class ProvisionMessage extends Model {
  /**
   * ProvisionMessage Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get dtstamp.
   * @returns {string}
   */
  getDateTimeStamp() {
    return this.getField('dtstamp');
  }
  
  /**
   * Get lineno.
   * @returns {number}
   */
  getLineNumber() {
    return this.getField('lineno', 0);
  }
  
  /**
   * Get tag.
   * @returns {string}
   */
  getTag() {
    return this.getField('tag');
  }
  
  /**
   * Get message.
   * @returns {string}
   */
  getMessage() {
    return this.getField('message');
  }
}

/** CustomerAddress data model. */
class CustomerAddress extends Model {
  /**
   * CustomerAddress Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get id.
   * @returns {number}
   */
  getId() {
    return this.getField('id', 0);
  }
  
  /**
   * Get cust_id.
   * @returns {number}
   */
  getCustomerId() {
    return this.getField('cust_id', 0);
  }
  
  /**
   * Get descrip.
   * @returns {string}
   */
  getDescription() {
    return this.getField('descrip');
  }
  
  /**
   * Get fname.
   * @returns {string}
   */
  getFirstName() {
    return this.getField('fname');
  }
  
  /**
   * Get lname.
   * @returns {string}
   */
  getLastName() {
    return this.getField('lname');
  }
  
  /**
   * Get email.
   * @returns {string}
   */
  getEmail() {
    return this.getField('email');
  }
  
  /**
   * Get comp.
   * @returns {string}
   */
  getCompany() {
    return this.getField('comp');
  }
  
  /**
   * Get phone.
   * @returns {string}
   */
  getPhone() {
    return this.getField('phone');
  }
  
  /**
   * Get fax.
   * @returns {string}
   */
  getFax() {
    return this.getField('fax');
  }
  
  /**
   * Get addr1.
   * @returns {string}
   */
  getAddress1() {
    return this.getField('addr1');
  }
  
  /**
   * Get addr2.
   * @returns {string}
   */
  getAddress2() {
    return this.getField('addr2');
  }
  
  /**
   * Get city.
   * @returns {string}
   */
  getCity() {
    return this.getField('city');
  }
  
  /**
   * Get state.
   * @returns {string}
   */
  getState() {
    return this.getField('state');
  }
  
  /**
   * Get zip.
   * @returns {string}
   */
  getZip() {
    return this.getField('zip');
  }
  
  /**
   * Get cntry.
   * @returns {string}
   */
  getCountry() {
    return this.getField('cntry');
  }
  
  /**
   * Get resdntl.
   * @returns {boolean}
   */
  getResidential() {
    return this.getField('resdntl', false);
  }
}

/** OrderTotal data model. */
class OrderTotal extends Model {
  /**
   * OrderTotal Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
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
}

/** OrderPaymentTotal data model. */
class OrderPaymentTotal extends Model {
  /**
   * OrderPaymentTotal Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get order_id.
   * @returns {number}
   */
  getOrderId() {
    return this.getField('order_id', 0);
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
}

/** PrintQueue data model. */
class PrintQueue extends Model {
  /**
   * PrintQueue Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get id.
   * @returns {number}
   */
  getId() {
    return this.getField('id', 0);
  }
  
  /**
   * Get descrip.
   * @returns {string}
   */
  getDescription() {
    return this.getField('descrip');
  }
}

/** PrintQueueJob data model. */
class PrintQueueJob extends Model {
  /**
   * PrintQueueJob Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get id.
   * @returns {number}
   */
  getId() {
    return this.getField('id', 0);
  }
  
  /**
   * Get queue_id.
   * @returns {number}
   */
  getQueueId() {
    return this.getField('queue_id', 0);
  }
  
  /**
   * Get store_id.
   * @returns {number}
   */
  getStoreId() {
    return this.getField('store_id', 0);
  }
  
  /**
   * Get user_id.
   * @returns {number}
   */
  getUserId() {
    return this.getField('user_id', 0);
  }
  
  /**
   * Get descrip.
   * @returns {string}
   */
  getDescription() {
    return this.getField('descrip');
  }
  
  /**
   * Get job_fmt.
   * @returns {string}
   */
  getJobFormat() {
    return this.getField('job_fmt');
  }
  
  /**
   * Get job_data.
   * @returns {string}
   */
  getJobData() {
    return this.getField('job_data');
  }
  
  /**
   * Get dt_created.
   * @returns {number}
   */
  getDateTimeCreated() {
    return this.getField('dt_created', 0);
  }
  
  /**
   * Get printqueue_descrip.
   * @returns {string}
   */
  getPrintQueueDescription() {
    return this.getField('printqueue_descrip');
  }
  
  /**
   * Get user_name.
   * @returns {string}
   */
  getUserName() {
    return this.getField('user_name');
  }
  
  /**
   * Get store_code.
   * @returns {string}
   */
  getStoreCode() {
    return this.getField('store_code');
  }
  
  /**
   * Get store_name.
   * @returns {string}
   */
  getStoreName() {
    return this.getField('store_name');
  }
}

/** PaymentMethod data model. */
class PaymentMethod extends Model {
  /**
   * PaymentMethod Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);

    if (!util.isUndefined(this.paymentcard)) {
      if (!util.isInstanceOf(this.paymentcard, CustomerPaymentCard) && util.isObject(this.paymentcard)) {
        this.paymentcard = new CustomerPaymentCard(this.paymentcard);
      } else if (!util.isInstanceOf(this.paymentcard, CustomerPaymentCard)) {
        throw new Error(util.format('Expected CustomerPaymentCard or an Object but got %s',
          typeof this.paymentcard));
      }
    } else {
      this.paymentcard = {};
    }

    if (!util.isUndefined(this.orderpaymentcard)) {
      if (!util.isInstanceOf(this.orderpaymentcard, OrderPaymentCard) && util.isObject(this.orderpaymentcard)) {
        this.orderpaymentcard = new OrderPaymentCard(this.orderpaymentcard);
      } else if (!util.isInstanceOf(this.orderpaymentcard, OrderPaymentCard)) {
        throw new Error(util.format('Expected OrderPaymentCard or an Object but got %s',
          typeof this.orderpaymentcard));
      }
    } else {
      this.orderpaymentcard = {};
    }

    if (!util.isUndefined(this.paymentcardtype)) {
      if (!util.isInstanceOf(this.paymentcardtype, PaymentCardType) && util.isObject(this.paymentcardtype)) {
        this.paymentcardtype = new PaymentCardType(this.paymentcardtype);
      } else if (!util.isInstanceOf(this.paymentcardtype, PaymentCardType)) {
        throw new Error(util.format('Expected PaymentCardType or an Object but got %s',
          typeof this.paymentcardtype));
      }
    } else {
      this.paymentcardtype = {};
    }
  }

  /**
   * Get module_id.
   * @returns {number}
   */
  getModuleId() {
    return this.getField('module_id', 0);
  }
  
  /**
   * Get module_api.
   * @returns {number}
   */
  getModuleApi() {
    return this.getField('module_api', 0.00);
  }
  
  /**
   * Get method_code.
   * @returns {string}
   */
  getMethodCode() {
    return this.getField('method_code');
  }
  
  /**
   * Get method_name.
   * @returns {string}
   */
  getMethodName() {
    return this.getField('method_name');
  }
  
  /**
   * Get mivapay.
   * @returns {boolean}
   */
  getMivapay() {
    return this.getField('mivapay', false);
  }
  
  /**
   * Get paymentcard.
   * @returns {CustomerPaymentCard|*}
   */
  getPaymentCard() {
    return this.getField('paymentcard', null);
  }
  
  /**
   * Get orderpaymentcard.
   * @returns {OrderPaymentCard|*}
   */
  getOrderPaymentCard() {
    return this.getField('orderpaymentcard', null);
  }
  
  /**
   * Get paymentcardtype.
   * @returns {PaymentCardType|*}
   */
  getPaymentCardType() {
    return this.getField('paymentcardtype', null);
  }
  
  /**
   * @override
   */
  toObject() {
    var ret = Object.assign(this);

    if (util.isInstanceOf(ret['paymentcard'], CustomerPaymentCard)) {
      ret['paymentcard'] = ret['paymentcard'].toObject();
    }

    if (util.isInstanceOf(ret['orderpaymentcard'], OrderPaymentCard)) {
      ret['orderpaymentcard'] = ret['orderpaymentcard'].toObject();
    }

    if (util.isInstanceOf(ret['paymentcardtype'], PaymentCardType)) {
      ret['paymentcardtype'] = ret['paymentcardtype'].toObject();
    }

    return ret;
  }
}

/** PaymentCardType data model. */
class PaymentCardType extends Model {
  /**
   * PaymentCardType Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get id.
   * @returns {number}
   */
  getId() {
    return this.getField('id', 0);
  }
  
  /**
   * Get type.
   * @returns {string}
   */
  getType() {
    return this.getField('type');
  }
  
  /**
   * Get prefixes.
   * @returns {string}
   */
  getPrefixes() {
    return this.getField('prefixes');
  }
  
  /**
   * Get lengths.
   * @returns {string}
   */
  getLengths() {
    return this.getField('lengths');
  }
  
  /**
   * Get cvv.
   * @returns {boolean}
   */
  getCvv() {
    return this.getField('cvv', false);
  }
}

/** OrderPaymentAuthorize data model. */
class OrderPaymentAuthorize extends Model {
  /**
   * OrderPaymentAuthorize Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get valid.
   * @returns {boolean}
   */
  getValid() {
    return this.getField('valid', false);
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
}

/** OrderNote data model. */
class OrderNote extends Note {
  /**
   * OrderNote Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }
}

/** CategoryProduct data model. */
class CategoryProduct extends Product {
  /**
   * CategoryProduct Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get assigned.
   * @returns {boolean}
   */
  getAssigned() {
    return this.getField('assigned', false);
  }
}

/** CouponPriceGroup data model. */
class CouponPriceGroup extends PriceGroup {
  /**
   * CouponPriceGroup Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get assigned.
   * @returns {boolean}
   */
  getAssigned() {
    return this.getField('assigned', false);
  }
}

/** OrderPaymentCard data model. */
class OrderPaymentCard extends CustomerPaymentCard {
  /**
   * OrderPaymentCard Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }
}

/** PriceGroupProduct data model. */
class PriceGroupProduct extends Product {
  /**
   * PriceGroupProduct Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get assigned.
   * @returns {boolean}
   */
  getAssigned() {
    return this.getField('assigned', false);
  }
}

/** CustomerPriceGroup data model. */
class CustomerPriceGroup extends PriceGroup {
  /**
   * CustomerPriceGroup Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get assigned.
   * @returns {boolean}
   */
  getAssigned() {
    return this.getField('assigned', false);
  }
}

module.exports = {
  AvailabilityGroup,
  Customer,
  Coupon,
  Module,
  Note,
  PriceGroup,
  DiscountModuleCapabilities,
  Product,
  RelatedProduct,
  ProductImageData,
  ProductAttribute,
  ProductOption,
  ProductShippingRules,
  ProductShippingMethod,
  Uri,
  ProductVariant,
  Category,
  Order,
  OrderShipment,
  OrderItem,
  OrderItemOption,
  OrderCharge,
  OrderCoupon,
  OrderItemDiscount,
  OrderDiscountTotal,
  OrderPayment,
  Subscription,
  ProductSubscriptionTerm,
  OrderCustomField,
  CustomerPaymentCard,
  OrderProduct,
  OrderProductAttribute,
  ProductInventorySettings,
  CustomFieldValues,
  ProductVariantPart,
  ProductVariantDimension,
  OrderItemSubscription,
  SubscriptionOption,
  ProductInventoryAdjustment,
  OrderItemAttribute,
  OrderShipmentUpdate,
  ProductVariantLimit,
  ProductVariantExclusion,
  ProvisionMessage,
  CustomerAddress,
  OrderTotal,
  OrderPaymentTotal,
  PrintQueue,
  PrintQueueJob,
  PaymentMethod,
  PaymentCardType,
  OrderPaymentAuthorize,
  OrderNote,
  CategoryProduct,
  CouponPriceGroup,
  OrderPaymentCard,
  PriceGroupProduct,
  CustomerPriceGroup
};
