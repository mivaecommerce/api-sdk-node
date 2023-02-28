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
 * BranchTemplateVersion data model.
 * @class
 */
class BranchTemplateVersion extends Model {
  /**
   * BranchTemplateVersion Constructor.
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
  }

  /**
   * Get id.
   * @returns {number}
   */
  getId() {
    return this.getField('id', 0);
  }
  
  /**
   * Get templ_id.
   * @returns {number}
   */
  getTemplateId() {
    return this.getField('templ_id', 0);
  }
  
  /**
   * Get parent_id.
   * @returns {number}
   */
  getParentId() {
    return this.getField('parent_id', 0);
  }
  
  /**
   * Get user_id.
   * @returns {number}
   */
  getUserId() {
    return this.getField('user_id', 0);
  }
  
  /**
   * Get user_name.
   * @returns {string}
   */
  getUserName() {
    return this.getField('user_name');
  }
  
  /**
   * Get user_icon.
   * @returns {string}
   */
  getUserIcon() {
    return this.getField('user_icon');
  }
  
  /**
   * Get item_id.
   * @returns {number}
   */
  getItemId() {
    return this.getField('item_id', 0);
  }
  
  /**
   * Get prop_id.
   * @returns {number}
   */
  getPropertyId() {
    return this.getField('prop_id', 0);
  }
  
  /**
   * Get sync.
   * @returns {boolean}
   */
  getSync() {
    return this.getField('sync', false);
  }
  
  /**
   * Get filename.
   * @returns {string}
   */
  getFilename() {
    return this.getField('filename');
  }
  
  /**
   * Get dtstamp.
   * @returns {number}
   */
  getDateTimeStamp() {
    return this.getTimestampField('dtstamp');
  }
  
  /**
   * Get notes.
   * @returns {string}
   */
  getNotes() {
    return this.getField('notes');
  }
  
  /**
   * Get source.
   * @returns {string}
   */
  getSource() {
    return this.getField('source');
  }
  
  /**
   * Get settings.
   * @returns {VersionSettings|*}
   */
  getSettings() {
    return this.getField('settings', null);
  }
  
  /**
   * @override
   */
  toObject() {
    var ret = Object.assign(this);

    if (util.isInstanceOf(ret['settings'], models.VersionSettings)) {
      ret['settings'] = ret['settings'].toObject();
    }

    return ret;
  }
}

module.exports.BranchTemplateVersion = BranchTemplateVersion;