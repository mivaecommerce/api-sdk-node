/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** PAGE_RULE_SETTINGS constants. */
/** @ignore */
const PAGE_RULE_SETTINGS_ALL = 'all';
/** @ignore */
const PAGE_RULE_SETTINGS_NONE = 'none';
/** @ignore */
const PAGE_RULE_SETTINGS_SPECIFIC = 'specific';

/** 
 * CopyPageRule data model.
 * @class
 */
class CopyPageRule extends Model {
  /**
   * CopyPageRule Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Constant PAGE_RULE_SETTINGS_ALL
   * @returns {string}
   * @const
   * @static
   */
  static get PAGE_RULE_SETTINGS_ALL() {
    return PAGE_RULE_SETTINGS_ALL;
  }

  /**
   * Constant PAGE_RULE_SETTINGS_NONE
   * @returns {string}
   * @const
   * @static
   */
  static get PAGE_RULE_SETTINGS_NONE() {
    return PAGE_RULE_SETTINGS_NONE;
  }

  /**
   * Constant PAGE_RULE_SETTINGS_SPECIFIC
   * @returns {string}
   * @const
   * @static
   */
  static get PAGE_RULE_SETTINGS_SPECIFIC() {
    return PAGE_RULE_SETTINGS_SPECIFIC;
  }

  /**
   * Get id.
   * @returns {number}
   */
  getId() {
    return this.getField('id', 0);
  }
  
  /**
   * Get name.
   * @returns {string}
   */
  getName() {
    return this.getField('name');
  }
  
  /**
   * Get secure.
   * @returns {boolean}
   */
  getSecure() {
    return this.getField('secure', false);
  }
  
  /**
   * Get title.
   * @returns {boolean}
   */
  getTitle() {
    return this.getField('title', false);
  }
  
  /**
   * Get template.
   * @returns {boolean}
   */
  getTemplate() {
    return this.getField('template', false);
  }
  
  /**
   * Get items.
   * @returns {boolean}
   */
  getItems() {
    return this.getField('items', false);
  }
  
  /**
   * Get settings.
   * @returns {string}
   */
  getSettings() {
    return this.getField('settings');
  }
  
  /**
   * Get jsres.
   * @returns {boolean}
   */
  getJavascriptResourceAssignments() {
    return this.getField('jsres', false);
  }
  
  /**
   * Get cssres.
   * @returns {boolean}
   */
  getCSSResourceAssignments() {
    return this.getField('cssres', false);
  }
  
  /**
   * Get cacheset.
   * @returns {boolean}
   */
  getCacheSettings() {
    return this.getField('cacheset', false);
  }
  
  /**
   * Get public.
   * @returns {boolean}
   */
  getPublic() {
    return this.getField('public', false);
  }
}

module.exports.CopyPageRule = CopyPageRule;