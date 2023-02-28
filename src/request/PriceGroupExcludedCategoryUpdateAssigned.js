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
 * Handles API Request PriceGroupExcludedCategory_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/pricegroupexcludedcategory_update_assigned
 * @class
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

module.exports.PriceGroupExcludedCategoryUpdateAssigned = PriceGroupExcludedCategoryUpdateAssigned;