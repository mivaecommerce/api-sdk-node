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
 * Handles API Request PriceGroup_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/pricegroup_update
 * @class
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

module.exports.PriceGroupUpdate = PriceGroupUpdate;