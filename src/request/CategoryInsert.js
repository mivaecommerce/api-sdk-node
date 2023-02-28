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
 * Handles API Request Category_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/category_insert
 * @class
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
      this.setCategoryParentCategory(category.getParentCategory());
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

module.exports.CategoryInsert = CategoryInsert;