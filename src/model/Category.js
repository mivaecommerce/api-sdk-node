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
 * Category data model.
 * @class
 */
class Category extends Model {
  /**
   * Category Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    var i;
    var l;

    super(data);

    if (!util.isUndefined(this.uris) && util.isArray(this.uris)) {
      for (i = 0, l = this.uris.length; i < l; i++) {
        if (!util.isInstanceOf(this.uris[i], models.Uri) && util.isObject(data['uris'][i])) {
          this.uris[i] = new models.Uri(this.uris[i]);
        } else if (!util.isInstanceOf(this.uris[i], models.Uri)) {
          throw new Error(util.format('Expected array of Uri or an array of Objects but got %s',
            typeof this.uris[i]));
        }
      }
    } else {
      this.uris = [];
    }

    if (!util.isUndefined(this.CustomField_Values)) {
      if (!util.isInstanceOf(this.CustomField_Values, models.CustomFieldValues) && util.isObject(this.CustomField_Values)) {
        this.CustomField_Values = new models.CustomFieldValues(this.CustomField_Values);
      } else if (!util.isInstanceOf(this.CustomField_Values, models.CustomFieldValues)) {
        throw new Error(util.format('Expected CustomFieldValues or an Object but got %s',
          typeof this.CustomField_Values));
      }
    } else {
      this.CustomField_Values = {};
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
   * Get parent_id.
   * @returns {number}
   */
  getParentId() {
    return this.getField('parent_id', 0);
  }
  
  /**
   * Get agrpcount.
   * @returns {number}
   */
  getAvailabilityGroupCount() {
    return this.getField('agrpcount', 0);
  }
  
  /**
   * Get depth.
   * @returns {number}
   */
  getDepth() {
    return this.getField('depth', 0);
  }
  
  /**
   * Get disp_order.
   * @returns {number}
   */
  getDisplayOrder() {
    return this.getField('disp_order', 0);
  }
  
  /**
   * Get page_id.
   * @returns {number}
   */
  getPageId() {
    return this.getField('page_id', 0);
  }
  
  /**
   * Get code.
   * @returns {string}
   */
  getCode() {
    return this.getField('code');
  }
  
  /**
   * Get name.
   * @returns {string}
   */
  getName() {
    return this.getField('name');
  }
  
  /**
   * Get page_title.
   * @returns {string}
   */
  getPageTitle() {
    return this.getField('page_title');
  }
  
  /**
   * Get active.
   * @returns {boolean}
   */
  getActive() {
    return this.getField('active', false);
  }
  
  /**
   * Get dt_created.
   * @returns {number}
   */
  getDateTimeCreated() {
    return this.getTimestampField('dt_created');
  }
  
  /**
   * Get dt_updated.
   * @returns {number}
   */
  getDateTimeUpdated() {
    return this.getTimestampField('dt_updated');
  }
  
  /**
   * Get page_code.
   * @returns {string}
   */
  getPageCode() {
    return this.getField('page_code');
  }
  
  /**
   * Get parent_category.
   * @returns {string}
   */
  getParentCategory() {
    return this.getField('parent_category');
  }
  
  /**
   * Get uris.
   * @returns {Uri[]}
   */
  getUris() {
    return this.getField('uris', []);
  }
  
  /**
   * Get url.
   * @returns {string}
   */
  getUrl() {
    return this.getField('url');
  }
  
  /**
   * Get CustomField_Values.
   * @returns {CustomFieldValues|*}
   */
  getCustomFieldValues() {
    return this.getField('CustomField_Values', null);
  }
  
  /**
   * @override
   */
  toObject() {
    var i;
    var l;
    var ret = Object.assign(this);

    if (util.isArray(ret['uris'])) {
      for (i = 0, l = ret['uris'].length; i < l; i++) {
        if (util.isInstanceOf(ret['uris'][i], models.Uri)) {
          ret['uris'][i] = ret['uris'][i].toObject();
        }
      }
    }

    if (util.isInstanceOf(ret['CustomField_Values'], models.CustomFieldValues)) {
      ret['CustomField_Values'] = ret['CustomField_Values'].toObject();
    }

    return ret;
  }
}

module.exports.Category = Category;