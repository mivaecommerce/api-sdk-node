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
 * Handles API Request Category_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/category_update
 * @class
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

module.exports.CategoryUpdate = CategoryUpdate;