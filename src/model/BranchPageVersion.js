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
 * BranchPageVersion data model.
 * @class
 */
class BranchPageVersion extends Model {
  /**
   * BranchPageVersion Constructor.
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
   * Get page_id.
   * @returns {number}
   */
  getPageId() {
    return this.getField('page_id', 0);
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
   * Get admin.
   * @returns {boolean}
   */
  getAdmin() {
    return this.getField('admin', false);
  }
  
  /**
   * Get layout.
   * @returns {boolean}
   */
  getLayout() {
    return this.getField('layout', false);
  }
  
  /**
   * Get secure.
   * @returns {boolean}
   */
  getSecure() {
    return this.getField('secure', false);
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
   * Get title.
   * @returns {string}
   */
  getTitle() {
    return this.getField('title');
  }
  
  /**
   * Get ui_id.
   * @returns {number}
   */
  getUiId() {
    return this.getField('ui_id', 0);
  }
  
  /**
   * Get templ_id.
   * @returns {number}
   */
  getTemplId() {
    return this.getField('templ_id', 0);
  }
  
  /**
   * Get cache.
   * @returns {string}
   */
  getCache() {
    return this.getField('cache');
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

module.exports.BranchPageVersion = BranchPageVersion;