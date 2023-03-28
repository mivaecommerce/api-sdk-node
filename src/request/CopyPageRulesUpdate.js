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
 * Handles API Request CopyPageRules_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/copypagerules_update
 * @class
 */
class CopyPageRulesUpdate extends Request {
  /**
   * CopyPageRulesUpdate Constructor.
   * @param {?BaseClient} client
   * @param {?CopyPageRule} copyPageRule
   */
  constructor(client, copyPageRule = null) {
    super(client);
    this.function = 'CopyPageRules_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.copyPageRulesId = null;
    this.copyPageRulesName = null;
    this.name = null;
    this.secure = null;
    this.title = null;
    this.template = null;
    this.items = null;
    this.settings = null;
    this.javaScriptResourceAssignments = null;
    this.CSSResourceAssignments = null;
    this.cacheSettings = null;

    if (util.isInstanceOf(copyPageRule, models.CopyPageRule)) {
      if (copyPageRule.getId()) {
        this.setCopyPageRulesId(copyPageRule.getId());
      } else if (copyPageRule.getName()) {
        this.setCopyPageRulesName(copyPageRule.getName());
      }
    }
  }

  /**
   * Get CopyPageRules_ID.
   * @returns {number}
   */
  getCopyPageRulesId() {
    return this.copyPageRulesId;
  }

  /**
   * Get CopyPageRules_Name.
   * @returns {string}
   */
  getCopyPageRulesName() {
    return this.copyPageRulesName;
  }

  /**
   * Get Name.
   * @returns {string}
   */
  getName() {
    return this.name;
  }

  /**
   * Get Secure.
   * @returns {boolean}
   */
  getSecure() {
    return this.secure;
  }

  /**
   * Get Title.
   * @returns {boolean}
   */
  getTitle() {
    return this.title;
  }

  /**
   * Get Template.
   * @returns {boolean}
   */
  getTemplate() {
    return this.template;
  }

  /**
   * Get Items.
   * @returns {boolean}
   */
  getItems() {
    return this.items;
  }

  /**
   * Get Settings.
   * @returns {string}
   */
  getSettings() {
    return this.settings;
  }

  /**
   * Get JavaScriptResourceAssignments.
   * @returns {boolean}
   */
  getJavaScriptResourceAssignments() {
    return this.javaScriptResourceAssignments;
  }

  /**
   * Get CSSResourceAssignments.
   * @returns {boolean}
   */
  getCSSResourceAssignments() {
    return this.CSSResourceAssignments;
  }

  /**
   * Get CacheSettings.
   * @returns {boolean}
   */
  getCacheSettings() {
    return this.cacheSettings;
  }

  /**
   * Set CopyPageRules_ID.
   * @param {number} copyPageRulesId
   * @returns {CopyPageRulesUpdate}
   */
  setCopyPageRulesId(copyPageRulesId) {
    this.copyPageRulesId = copyPageRulesId;
    return this;
  }

  /**
   * Set CopyPageRules_Name.
   * @param {string} copyPageRulesName
   * @returns {CopyPageRulesUpdate}
   */
  setCopyPageRulesName(copyPageRulesName) {
    this.copyPageRulesName = copyPageRulesName;
    return this;
  }

  /**
   * Set Name.
   * @param {string} name
   * @returns {CopyPageRulesUpdate}
   */
  setName(name) {
    this.name = name;
    return this;
  }

  /**
   * Set Secure.
   * @param {boolean} secure
   * @returns {CopyPageRulesUpdate}
   */
  setSecure(secure) {
    this.secure = secure;
    return this;
  }

  /**
   * Set Title.
   * @param {boolean} title
   * @returns {CopyPageRulesUpdate}
   */
  setTitle(title) {
    this.title = title;
    return this;
  }

  /**
   * Set Template.
   * @param {boolean} template
   * @returns {CopyPageRulesUpdate}
   */
  setTemplate(template) {
    this.template = template;
    return this;
  }

  /**
   * Set Items.
   * @param {boolean} items
   * @returns {CopyPageRulesUpdate}
   */
  setItems(items) {
    this.items = items;
    return this;
  }

  /**
   * Set Settings.
   * @param {string} settings
   * @returns {CopyPageRulesUpdate}
   */
  setSettings(settings) {
    this.settings = settings;
    return this;
  }

  /**
   * Set JavaScriptResourceAssignments.
   * @param {boolean} javaScriptResourceAssignments
   * @returns {CopyPageRulesUpdate}
   */
  setJavaScriptResourceAssignments(javaScriptResourceAssignments) {
    this.javaScriptResourceAssignments = javaScriptResourceAssignments;
    return this;
  }

  /**
   * Set CSSResourceAssignments.
   * @param {boolean} CSSResourceAssignments
   * @returns {CopyPageRulesUpdate}
   */
  setCSSResourceAssignments(CSSResourceAssignments) {
    this.CSSResourceAssignments = CSSResourceAssignments;
    return this;
  }

  /**
   * Set CacheSettings.
   * @param {boolean} cacheSettings
   * @returns {CopyPageRulesUpdate}
   */
  setCacheSettings(cacheSettings) {
    this.cacheSettings = cacheSettings;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.copyPageRulesId)) {
      data['CopyPageRules_ID'] = this.copyPageRulesId;
    } else if (!util.isNullOrUndefined(this.copyPageRulesName)) {
      data['CopyPageRules_Name'] = this.copyPageRulesName;
    }

    if (!util.isNullOrUndefined(this.name)) {
      data['Name'] = this.name;
    }

    if (!util.isNullOrUndefined(this.secure)) {
      data['Secure'] = this.secure;
    }

    if (!util.isNullOrUndefined(this.title)) {
      data['Title'] = this.title;
    }

    if (!util.isNullOrUndefined(this.template)) {
      data['Template'] = this.template;
    }

    if (!util.isNullOrUndefined(this.items)) {
      data['Items'] = this.items;
    }

    if (!util.isNullOrUndefined(this.settings)) {
      data['Settings'] = this.settings;
    }

    if (!util.isNullOrUndefined(this.javaScriptResourceAssignments)) {
      data['JavaScriptResourceAssignments'] = this.javaScriptResourceAssignments;
    }

    if (!util.isNullOrUndefined(this.CSSResourceAssignments)) {
      data['CSSResourceAssignments'] = this.CSSResourceAssignments;
    }

    if (!util.isNullOrUndefined(this.cacheSettings)) {
      data['CacheSettings'] = this.cacheSettings;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CopyPageRulesUpdate(this, httpResponse, data);
  }
}

module.exports.CopyPageRulesUpdate = CopyPageRulesUpdate;