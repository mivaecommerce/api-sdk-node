/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const models = require('./../models');
const responses = require('./../responses');
const { Request }  = require('./../abstract');

/** 
 * Handles API Request Order_Create. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/order_create
 * @class
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

module.exports.OrderCreate = OrderCreate;