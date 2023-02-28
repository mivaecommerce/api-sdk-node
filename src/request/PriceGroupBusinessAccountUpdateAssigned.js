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
 * Handles API Request PriceGroupBusinessAccount_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/pricegroupbusinessaccount_update_assigned
 * @class
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

module.exports.PriceGroupBusinessAccountUpdateAssigned = PriceGroupBusinessAccountUpdateAssigned;