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
 * Handles API Request PriceGroup_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/pricegroup_insert
 * @class
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
    this.editModule = null;
    this.moduleCode = null;
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
   * Get Edit_Module.
   * @returns {string}
   */
  getEditModule() {
    return this.editModule;
  }

  /**
   * Get Module_Code.
   * @returns {string}
   */
  getModuleCode() {
    return this.moduleCode;
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
   * Set Edit_Module.
   * @param {string} editModule
   * @returns {PriceGroupInsert}
   */
  setEditModule(editModule) {
    this.editModule = editModule;
    return this;
  }

  /**
   * Set Module_Code.
   * @param {string} moduleCode
   * @returns {PriceGroupInsert}
   */
  setModuleCode(moduleCode) {
    this.moduleCode = moduleCode;
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
   * Set Exclusions.
   * @param {PriceGroupExclusion[]} exclusions
   * @throws {Error}
   * @returns {PriceGroupInsert}
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
   * @returns {PriceGroupInsert}
   */
  setModuleFields(moduleFields) {
    this.moduleFields = moduleFields;
    return this;
  }

  /**
   * Add Exclusions.
   * @param {PriceGroupExclusion} priceGroupExclusion
   * @throws {Error}
   * @returns {PriceGroupInsert}
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
   * @returns {PriceGroupInsert}
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
    var i;
    var l;
    var data = Object.assign(super.toObject(), this.getModuleFields());

    if (!util.isNullOrUndefined(this.moduleId)) {
      data['Module_ID'] = this.moduleId;
    } else if (!util.isNullOrUndefined(this.editModule)) {
      data['Edit_Module'] = this.editModule;
    } else if (!util.isNullOrUndefined(this.moduleCode)) {
      data['Module_Code'] = this.moduleCode;
    }

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
    return new responses.PriceGroupInsert(this, httpResponse, data);
  }
}

module.exports.PriceGroupInsert = PriceGroupInsert;