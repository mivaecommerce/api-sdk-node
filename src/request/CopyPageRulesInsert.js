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
 * Handles API Request CopyPageRules_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/copypagerules_insert
 * @class
 */
class CopyPageRulesInsert extends Request {
  /**
   * CopyPageRulesInsert Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'CopyPageRules_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.name = null;
    this.secure = null;
    this.title = null;
    this.template = null;
    this.items = null;
    this.public = null;
    this.settings = null;
    this.javaScriptResourceAssignments = null;
    this.CSSResourceAssignments = null;
    this.cacheSettings = null;
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
   * Get Public.
   * @returns {boolean}
   */
  getPublic() {
    return this.public;
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
   * Set Name.
   * @param {string} name
   * @returns {CopyPageRulesInsert}
   */
  setName(name) {
    this.name = name;
    return this;
  }

  /**
   * Set Secure.
   * @param {boolean} secure
   * @returns {CopyPageRulesInsert}
   */
  setSecure(secure) {
    this.secure = secure;
    return this;
  }

  /**
   * Set Title.
   * @param {boolean} title
   * @returns {CopyPageRulesInsert}
   */
  setTitle(title) {
    this.title = title;
    return this;
  }

  /**
   * Set Template.
   * @param {boolean} template
   * @returns {CopyPageRulesInsert}
   */
  setTemplate(template) {
    this.template = template;
    return this;
  }

  /**
   * Set Items.
   * @param {boolean} items
   * @returns {CopyPageRulesInsert}
   */
  setItems(items) {
    this.items = items;
    return this;
  }

  /**
   * Set Public.
   * @param {boolean} _public
   * @returns {CopyPageRulesInsert}
   */
  setPublic(_public) {
    this.public = _public;
    return this;
  }

  /**
   * Set Settings.
   * @param {string} settings
   * @returns {CopyPageRulesInsert}
   */
  setSettings(settings) {
    this.settings = settings;
    return this;
  }

  /**
   * Set JavaScriptResourceAssignments.
   * @param {boolean} javaScriptResourceAssignments
   * @returns {CopyPageRulesInsert}
   */
  setJavaScriptResourceAssignments(javaScriptResourceAssignments) {
    this.javaScriptResourceAssignments = javaScriptResourceAssignments;
    return this;
  }

  /**
   * Set CSSResourceAssignments.
   * @param {boolean} CSSResourceAssignments
   * @returns {CopyPageRulesInsert}
   */
  setCSSResourceAssignments(CSSResourceAssignments) {
    this.CSSResourceAssignments = CSSResourceAssignments;
    return this;
  }

  /**
   * Set CacheSettings.
   * @param {boolean} cacheSettings
   * @returns {CopyPageRulesInsert}
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

    data['Name'] = this.name;

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

    if (!util.isNullOrUndefined(this.public)) {
      data['Public'] = this.public;
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
    return new responses.CopyPageRulesInsert(this, httpResponse, data);
  }
}

module.exports.CopyPageRulesInsert = CopyPageRulesInsert;