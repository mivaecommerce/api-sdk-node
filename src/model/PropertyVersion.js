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
 * PropertyVersion data model.
 * @class
 */
class PropertyVersion extends Model {
  /**
   * PropertyVersion Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);

    if (!util.isUndefined(this.settings)) {
      if (!util.isInstanceOf(this.settings, models.VersionSettings)) {
        this.settings = new models.VersionSettings(this.settings);
      }
    }

    if (!util.isUndefined(this.product)) {
      if (!util.isInstanceOf(this.product, models.Product) && util.isObject(this.product)) {
        this.product = new models.Product(this.product);
      } else if (!util.isInstanceOf(this.product, models.Product)) {
        throw new Error(util.format('Expected Product or an Object but got %s',
          typeof this.product));
      }
    } else {
      this.product = {};
    }

    if (!util.isUndefined(this.category)) {
      if (!util.isInstanceOf(this.category, models.Category) && util.isObject(this.category)) {
        this.category = new models.Category(this.category);
      } else if (!util.isInstanceOf(this.category, models.Category)) {
        throw new Error(util.format('Expected Category or an Object but got %s',
          typeof this.category));
      }
    } else {
      this.category = {};
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
   * Get prop_id.
   * @returns {number}
   */
  getPropertyId() {
    return this.getField('prop_id', 0);
  }
  
  /**
   * Get version_id.
   * @returns {number}
   */
  getVersionId() {
    return this.getField('version_id', 0);
  }
  
  /**
   * Get type.
   * @returns {string}
   */
  getType() {
    return this.getField('type');
  }
  
  /**
   * Get code.
   * @returns {string}
   */
  getCode() {
    return this.getField('code');
  }
  
  /**
   * Get product_id.
   * @returns {number}
   */
  getProductId() {
    return this.getField('product_id', 0);
  }
  
  /**
   * Get cat_id.
   * @returns {number}
   */
  getCategoryId() {
    return this.getField('cat_id', 0);
  }
  
  /**
   * Get version_user_id.
   * @returns {number}
   */
  getVersionUserId() {
    return this.getField('version_user_id', 0);
  }
  
  /**
   * Get version_user_name.
   * @returns {string}
   */
  getVersionUserName() {
    return this.getField('version_user_name');
  }
  
  /**
   * Get version_user_icon.
   * @returns {string}
   */
  getVersionUserIcon() {
    return this.getField('version_user_icon');
  }
  
  /**
   * Get source_user_id.
   * @returns {number}
   */
  getSourceUserId() {
    return this.getField('source_user_id', 0);
  }
  
  /**
   * Get source_user_name.
   * @returns {string}
   */
  getSourceUserName() {
    return this.getField('source_user_name');
  }
  
  /**
   * Get source_user_icon.
   * @returns {string}
   */
  getSourceUserIcon() {
    return this.getField('source_user_icon');
  }
  
  /**
   * Get templ_id.
   * @returns {number}
   */
  getTemplateId() {
    return this.getField('templ_id', 0);
  }
  
  /**
   * Get settings.
   * @returns {VersionSettings|*}
   */
  getSettings() {
    return this.getField('settings', null);
  }
  
  /**
   * Get product.
   * @returns {Product|*}
   */
  getProduct() {
    return this.getField('product', null);
  }
  
  /**
   * Get category.
   * @returns {Category|*}
   */
  getCategory() {
    return this.getField('category', null);
  }
  
  /**
   * Get source.
   * @returns {string}
   */
  getSource() {
    return this.getField('source');
  }
  
  /**
   * Get sync.
   * @returns {boolean}
   */
  getSync() {
    return this.getField('sync', false);
  }
  
  /**
   * Get source_notes.
   * @returns {string}
   */
  getSourceNotes() {
    return this.getField('source_notes');
  }
  
  /**
   * Get image_id.
   * @returns {number}
   */
  getImageId() {
    return this.getField('image_id', 0);
  }
  
  /**
   * Get image.
   * @returns {string}
   */
  getImage() {
    return this.getField('image');
  }
  
  /**
   * Get image_refcount.
   * @returns {number}
   */
  getImageRefcount() {
    return this.getField('image_refcount', 0);
  }
  
  /**
   * Get image_head_count.
   * @returns {number}
   */
  getImageHeadCount() {
    return this.getField('image_head_count', 0);
  }
  
  /**
   * @override
   */
  toObject() {
    var ret = Object.assign(this);

    if (util.isInstanceOf(ret['settings'], models.VersionSettings)) {
      ret['settings'] = ret['settings'].toObject();
    }

    if (util.isInstanceOf(ret['product'], models.Product)) {
      ret['product'] = ret['product'].toObject();
    }

    if (util.isInstanceOf(ret['category'], models.Category)) {
      ret['category'] = ret['category'].toObject();
    }

    return ret;
  }
}

module.exports.PropertyVersion = PropertyVersion;