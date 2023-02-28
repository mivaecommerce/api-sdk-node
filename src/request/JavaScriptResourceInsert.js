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
 * Handles API Request JavaScriptResource_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/javascriptresource_insert
 * @class
 */
class JavaScriptResourceInsert extends Request {
  /**
   * JavaScriptResourceInsert Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'JavaScriptResource_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.javaScriptResourceCode = null;
    this.javaScriptResourceType = null;
    this.javaScriptResourceGlobal = null;
    this.javaScriptResourceActive = null;
    this.javaScriptResourceFilePath = null;
    this.javaScriptResourceAttributes = [];
  }

  /**
   * Get JavaScriptResource_Code.
   * @returns {string}
   */
  getJavaScriptResourceCode() {
    return this.javaScriptResourceCode;
  }

  /**
   * Get JavaScriptResource_Type.
   * @returns {string}
   */
  getJavaScriptResourceType() {
    return this.javaScriptResourceType;
  }

  /**
   * Get JavaScriptResource_Global.
   * @returns {boolean}
   */
  getJavaScriptResourceGlobal() {
    return this.javaScriptResourceGlobal;
  }

  /**
   * Get JavaScriptResource_Active.
   * @returns {boolean}
   */
  getJavaScriptResourceActive() {
    return this.javaScriptResourceActive;
  }

  /**
   * Get JavaScriptResource_File_Path.
   * @returns {string}
   */
  getJavaScriptResourceFilePath() {
    return this.javaScriptResourceFilePath;
  }

  /**
   * Get JavaScriptResource_Attributes.
   * @returns {JavaScriptResourceAttribute[]}
   */
  getJavaScriptResourceAttributes() {
    return this.javaScriptResourceAttributes;
  }

  /**
   * Set JavaScriptResource_Code.
   * @param {string} javaScriptResourceCode
   * @returns {JavaScriptResourceInsert}
   */
  setJavaScriptResourceCode(javaScriptResourceCode) {
    this.javaScriptResourceCode = javaScriptResourceCode;
    return this;
  }

  /**
   * Set JavaScriptResource_Type.
   * @param {string} javaScriptResourceType
   * @returns {JavaScriptResourceInsert}
   */
  setJavaScriptResourceType(javaScriptResourceType) {
    this.javaScriptResourceType = javaScriptResourceType;
    return this;
  }

  /**
   * Set JavaScriptResource_Global.
   * @param {boolean} javaScriptResourceGlobal
   * @returns {JavaScriptResourceInsert}
   */
  setJavaScriptResourceGlobal(javaScriptResourceGlobal) {
    this.javaScriptResourceGlobal = javaScriptResourceGlobal;
    return this;
  }

  /**
   * Set JavaScriptResource_Active.
   * @param {boolean} javaScriptResourceActive
   * @returns {JavaScriptResourceInsert}
   */
  setJavaScriptResourceActive(javaScriptResourceActive) {
    this.javaScriptResourceActive = javaScriptResourceActive;
    return this;
  }

  /**
   * Set JavaScriptResource_File_Path.
   * @param {string} javaScriptResourceFilePath
   * @returns {JavaScriptResourceInsert}
   */
  setJavaScriptResourceFilePath(javaScriptResourceFilePath) {
    this.javaScriptResourceFilePath = javaScriptResourceFilePath;
    return this;
  }

  /**
   * Set JavaScriptResource_Attributes.
   * @param {JavaScriptResourceAttribute[]} javaScriptResourceAttributes
   * @throws {Error}
   * @returns {JavaScriptResourceInsert}
   */
  setJavaScriptResourceAttributes(javaScriptResourceAttributes) {
    var i;
    var l;

    if (!util.isArray(javaScriptResourceAttributes)) {
      throw new Error(util.format('Expected an array but got %s', typeof javaScriptResourceAttributes));
    }

    for (i = 0, l = javaScriptResourceAttributes.length; i < l; i++) {
      if (!util.isInstanceOf(javaScriptResourceAttributes[i], models.JavaScriptResourceAttribute) && util.isObject(javaScriptResourceAttributes[i])) {
        javaScriptResourceAttributes[i] = new models.JavaScriptResourceAttribute(javaScriptResourceAttributes[i]);
      } else if (!util.isInstanceOf(javaScriptResourceAttributes[i], models.JavaScriptResourceAttribute)) {
        throw new Error(util.format('Expected instance of JavaScriptResourceAttribute or an Object but got %s',
          typeof javaScriptResourceAttributes[i]));
      }
    }

    this.javaScriptResourceAttributes = javaScriptResourceAttributes;
    return this;
  }

  /**
   * Add JavaScriptResource_Attributes.
   * @param {JavaScriptResourceAttribute} javaScriptResourceAttribute
   * @throws {Error}
   * @returns {JavaScriptResourceInsert}
   */
  addJavaScriptResourceAttribute(javaScriptResourceAttribute) {
    if (util.isInstanceOf(javaScriptResourceAttribute, models.JavaScriptResourceAttribute)) {
      this.javaScriptResourceAttributes.push(javaScriptResourceAttribute);
    } else if (util.isObject(javaScriptResourceAttribute)) {
      this.javaScriptResourceAttributes.push(new models.JavaScriptResourceAttribute(javaScriptResourceAttribute));
    } else {
      throw new Error(util.format('Expected instance of JavaScriptResourceAttribute or Object but got %s',
        typeof javaScriptResourceAttribute));
    }

    return this;
  }

  /**
   * Add many JavaScriptResourceAttribute.
   * @param {JavaScriptResourceAttribute[]} javaScriptResourceAttributes
   * @throws {Error}
   * @returns {JavaScriptResourceInsert}
   */
  addJavaScriptResourceAttributes(javaScriptResourceAttributes) {
    var i;
    var l;

    if (!util.isArray(javaScriptResourceAttributes)) {
      throw new Error(util.format('Expecting an array of JavaScriptResourceAttribute but got %s',
        typeof javaScriptResourceAttributes));
    }

    for (i = 0, l = javaScriptResourceAttributes.length; i < l; i++) {
      if (util.isInstanceOf(javaScriptResourceAttributes[i], models.JavaScriptResourceAttribute)) {
        this.javaScriptResourceAttributes.push(javaScriptResourceAttributes[i]);
      } else if (util.isObject(javaScriptResourceAttributes[i])) {
        this.javaScriptResourceAttributes.push(new models.JavaScriptResourceAttribute(javaScriptResourceAttributes[i]));
      } else {
        throw new Error(util.format('Expected array of JavaScriptResourceAttribute or an array of Object but got %s',
          typeof javaScriptResourceAttributes[i]));
      }
    }

    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var i;
    var l;
    var data = super.toObject();

    data['JavaScriptResource_Code'] = this.javaScriptResourceCode;

    data['JavaScriptResource_Type'] = this.javaScriptResourceType;

    if (!util.isNullOrUndefined(this.javaScriptResourceGlobal)) {
      data['JavaScriptResource_Global'] = this.javaScriptResourceGlobal;
    }

    if (!util.isNullOrUndefined(this.javaScriptResourceActive)) {
      data['JavaScriptResource_Active'] = this.javaScriptResourceActive;
    }

    data['JavaScriptResource_File_Path'] = this.javaScriptResourceFilePath;

    if (util.isArray(this.javaScriptResourceAttributes)) {
      data['JavaScriptResource_Attributes'] = [];

      for (i = 0, l = this.javaScriptResourceAttributes.length; i < l; i++) {
        if (util.isObject(this.javaScriptResourceAttributes[i])) {
            data['JavaScriptResource_Attributes'].push(this.javaScriptResourceAttributes[i].toObject());
        }
      }
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.JavaScriptResourceInsert(this, httpResponse, data);
  }
}

module.exports.JavaScriptResourceInsert = JavaScriptResourceInsert;