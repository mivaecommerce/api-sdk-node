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
 * Handles API Request AvailabilityGroupCategory_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/availabilitygroupcategory_update_assigned
 * @class
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

module.exports.AvailabilityGroupCategoryUpdateAssigned = AvailabilityGroupCategoryUpdateAssigned;