/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const models = require('./../models');
const { Model } = require('./../abstract');

/** 
 * PropertyChange data model.
 * @class
 */
class PropertyChange extends Model {
  /**
   * PropertyChange Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);

    if (!util.isUndefined(this.Settings)) {
      if (!util.isInstanceOf(this.Settings, models.VersionSettings)) {
        this.Settings = new models.VersionSettings(this.Settings);
      }
    }
  }

  /**
   * Get Property_ID.
   * @returns {number}
   */
  getPropertyId() {
    return this.getField('Property_ID', 0);
  }
  
  /**
   * Get Property_Type.
   * @returns {string}
   */
  getPropertyType() {
    return this.getField('Property_Type');
  }
  
  /**
   * Get Property_Code.
   * @returns {string}
   */
  getPropertyCode() {
    return this.getField('Property_Code');
  }
  
  /**
   * Get Product_ID.
   * @returns {number}
   */
  getProductId() {
    return this.getField('Product_ID', 0);
  }
  
  /**
   * Get Product_Code.
   * @returns {string}
   */
  getProductCode() {
    return this.getField('Product_Code');
  }
  
  /**
   * Get Edit_Product.
   * @returns {string}
   */
  getEditProduct() {
    return this.getField('Edit_Product');
  }
  
  /**
   * Get Category_ID.
   * @returns {number}
   */
  getCategoryId() {
    return this.getField('Category_ID', 0);
  }
  
  /**
   * Get Category_Code.
   * @returns {string}
   */
  getCategoryCode() {
    return this.getField('Category_Code');
  }
  
  /**
   * Get Edit_Category.
   * @returns {string}
   */
  getEditCategory() {
    return this.getField('Edit_Category');
  }
  
  /**
   * Get Source.
   * @returns {string}
   */
  getSource() {
    return this.getField('Source');
  }
  
  /**
   * Get Settings.
   * @returns {VersionSettings|*}
   */
  getSettings() {
    return this.getField('Settings', null);
  }
  
  /**
   * Get Image.
   * @returns {string}
   */
  getImage() {
    return this.getField('Image');
  }
  
  /**
   * Get Image_ID.
   * @returns {number}
   */
  getImageId() {
    return this.getField('Image_ID', 0);
  }
  
  /**
   * Get Notes.
   * @returns {string}
   */
  getNotes() {
    return this.getField('Notes');
  }
  
  /**
   * Set Property_ID.
   * @param {number} propertyId
   * @returns {PropertyChange}
   */
  setPropertyId(propertyId) {
    return this.setField('Property_ID', propertyId);
  }

  /**
   * Set Property_Type.
   * @param {string} propertyType
   * @returns {PropertyChange}
   */
  setPropertyType(propertyType) {
    return this.setField('Property_Type', propertyType);
  }

  /**
   * Set Property_Code.
   * @param {string} propertyCode
   * @returns {PropertyChange}
   */
  setPropertyCode(propertyCode) {
    return this.setField('Property_Code', propertyCode);
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {PropertyChange}
   */
  setProductId(productId) {
    return this.setField('Product_ID', productId);
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {PropertyChange}
   */
  setProductCode(productCode) {
    return this.setField('Product_Code', productCode);
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {PropertyChange}
   */
  setEditProduct(editProduct) {
    return this.setField('Edit_Product', editProduct);
  }

  /**
   * Set Category_ID.
   * @param {number} categoryId
   * @returns {PropertyChange}
   */
  setCategoryId(categoryId) {
    return this.setField('Category_ID', categoryId);
  }

  /**
   * Set Category_Code.
   * @param {string} categoryCode
   * @returns {PropertyChange}
   */
  setCategoryCode(categoryCode) {
    return this.setField('Category_Code', categoryCode);
  }

  /**
   * Set Edit_Category.
   * @param {string} editCategory
   * @returns {PropertyChange}
   */
  setEditCategory(editCategory) {
    return this.setField('Edit_Category', editCategory);
  }

  /**
   * Set Source.
   * @param {string} source
   * @returns {PropertyChange}
   */
  setSource(source) {
    return this.setField('Source', source);
  }

  /**
   * Set Settings.
   * @param {VersionSettings|Object} settings
   * @returns {PropertyChange}
   * @throws {Error}
   */
  setSettings(settings) {
    if (util.isInstanceOf(settings, models.VersionSettings) || util.isNull(settings)) {
      return this.setField('Settings', settings);
    } else if (util.isObject(settings)) {
      return this.setField('Settings', new models.VersionSettings(settings));
    }

    throw new Error(util.format('Expected instance of VersionSettings, Object, or null but got %s',
      typeof settings));
  }

  /**
   * Set Image.
   * @param {string} image
   * @returns {PropertyChange}
   */
  setImage(image) {
    return this.setField('Image', image);
  }

  /**
   * Set Image_ID.
   * @param {number} imageId
   * @returns {PropertyChange}
   */
  setImageId(imageId) {
    return this.setField('Image_ID', imageId);
  }

  /**
   * Set Notes.
   * @param {string} notes
   * @returns {PropertyChange}
   */
  setNotes(notes) {
    return this.setField('Notes', notes);
  }
  
  /**
   * @override
   */
  toObject() {
    var ret = Object.assign(this);

    if (util.isInstanceOf(ret['Settings'], models.VersionSettings)) {
      ret['Settings'] = ret['Settings'].toObject();
    }

    return ret;
  }
}

module.exports.PropertyChange = PropertyChange;