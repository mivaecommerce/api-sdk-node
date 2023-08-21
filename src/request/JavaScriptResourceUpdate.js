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
 * Handles API Request JavaScriptResource_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/javascriptresource_update
 * @class
 */
class JavaScriptResourceUpdate extends Request {
  /**
   * JavaScriptResourceUpdate Constructor.
   * @param {?BaseClient} client
   * @param {?JavaScriptResource} javaScriptResource
   */
  constructor(client, javaScriptResource = null) {
    super(client);
    this.function = 'JavaScriptResource_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.javaScriptResourceId = null;
    this.editJavaScriptResource = null;
    this.javaScriptResourceCode = null;
    this.javaScriptResourceType = null;
    this.javaScriptResourceGlobal = null;
    this.javaScriptResourceActive = null;
    this.javaScriptResourceFilePath = null;
    this.javaScriptResourceAttributes = [];
    this.javaScriptResourceModuleCode = null;
    this.javaScriptResourceModuleData = null;

    if (util.isInstanceOf(javaScriptResource, models.JavaScriptResource)) {
      if (javaScriptResource.getId()) {
        this.setJavaScriptResourceId(javaScriptResource.getId());
      } else if (javaScriptResource.getCode()) {
        this.setEditJavaScriptResource(javaScriptResource.getCode());
      }

      this.setJavaScriptResourceCode(javaScriptResource.getCode());
    }
  }

  /**
   * Get JavaScriptResource_ID.
   * @returns {number}
   */
  getJavaScriptResourceId() {
    return this.javaScriptResourceId;
  }

  /**
   * Get Edit_JavaScriptResource.
   * @returns {string}
   */
  getEditJavaScriptResource() {
    return this.editJavaScriptResource;
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
   * Get JavaScriptResource_Module_Code.
   * @returns {string}
   */
  getJavaScriptResourceModuleCode() {
    return this.javaScriptResourceModuleCode;
  }

  /**
   * Get JavaScriptResource_Module_Data.
   * @returns {string}
   */
  getJavaScriptResourceModuleData() {
    return this.javaScriptResourceModuleData;
  }

  /**
   * Set JavaScriptResource_ID.
   * @param {number} javaScriptResourceId
   * @returns {JavaScriptResourceUpdate}
   */
  setJavaScriptResourceId(javaScriptResourceId) {
    this.javaScriptResourceId = javaScriptResourceId;
    return this;
  }

  /**
   * Set Edit_JavaScriptResource.
   * @param {string} editJavaScriptResource
   * @returns {JavaScriptResourceUpdate}
   */
  setEditJavaScriptResource(editJavaScriptResource) {
    this.editJavaScriptResource = editJavaScriptResource;
    return this;
  }

  /**
   * Set JavaScriptResource_Code.
   * @param {string} javaScriptResourceCode
   * @returns {JavaScriptResourceUpdate}
   */
  setJavaScriptResourceCode(javaScriptResourceCode) {
    this.javaScriptResourceCode = javaScriptResourceCode;
    return this;
  }

  /**
   * Set JavaScriptResource_Type.
   * @param {string} javaScriptResourceType
   * @returns {JavaScriptResourceUpdate}
   */
  setJavaScriptResourceType(javaScriptResourceType) {
    this.javaScriptResourceType = javaScriptResourceType;
    return this;
  }

  /**
   * Set JavaScriptResource_Global.
   * @param {boolean} javaScriptResourceGlobal
   * @returns {JavaScriptResourceUpdate}
   */
  setJavaScriptResourceGlobal(javaScriptResourceGlobal) {
    this.javaScriptResourceGlobal = javaScriptResourceGlobal;
    return this;
  }

  /**
   * Set JavaScriptResource_Active.
   * @param {boolean} javaScriptResourceActive
   * @returns {JavaScriptResourceUpdate}
   */
  setJavaScriptResourceActive(javaScriptResourceActive) {
    this.javaScriptResourceActive = javaScriptResourceActive;
    return this;
  }

  /**
   * Set JavaScriptResource_File_Path.
   * @param {string} javaScriptResourceFilePath
   * @returns {JavaScriptResourceUpdate}
   */
  setJavaScriptResourceFilePath(javaScriptResourceFilePath) {
    this.javaScriptResourceFilePath = javaScriptResourceFilePath;
    return this;
  }

  /**
   * Set JavaScriptResource_Attributes.
   * @param {JavaScriptResourceAttribute[]} javaScriptResourceAttributes
   * @throws {Error}
   * @returns {JavaScriptResourceUpdate}
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
   * Set JavaScriptResource_Module_Code.
   * @param {string} javaScriptResourceModuleCode
   * @returns {JavaScriptResourceUpdate}
   */
  setJavaScriptResourceModuleCode(javaScriptResourceModuleCode) {
    this.javaScriptResourceModuleCode = javaScriptResourceModuleCode;
    return this;
  }

  /**
   * Set JavaScriptResource_Module_Data.
   * @param {string} javaScriptResourceModuleData
   * @returns {JavaScriptResourceUpdate}
   */
  setJavaScriptResourceModuleData(javaScriptResourceModuleData) {
    this.javaScriptResourceModuleData = javaScriptResourceModuleData;
    return this;
  }

  /**
   * Add JavaScriptResource_Attributes.
   * @param {JavaScriptResourceAttribute} javaScriptResourceAttribute
   * @throws {Error}
   * @returns {JavaScriptResourceUpdate}
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
   * @returns {JavaScriptResourceUpdate}
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

    if (!util.isNullOrUndefined(this.javaScriptResourceId)) {
      data['JavaScriptResource_ID'] = this.javaScriptResourceId;
    } else if (!util.isNullOrUndefined(this.editJavaScriptResource)) {
      data['Edit_JavaScriptResource'] = this.editJavaScriptResource;
    } else if (!util.isNullOrUndefined(this.javaScriptResourceCode)) {
      data['JavaScriptResource_Code'] = this.javaScriptResourceCode;
    }

    if (!util.isNullOrUndefined(this.javaScriptResourceCode)) {
      data['JavaScriptResource_Code'] = this.javaScriptResourceCode;
    }

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

    if (!util.isNullOrUndefined(this.javaScriptResourceModuleCode)) {
      data['JavaScriptResource_Module_Code'] = this.javaScriptResourceModuleCode;
    }

    if (!util.isNullOrUndefined(this.javaScriptResourceModuleData)) {
      data['JavaScriptResource_Module_Data'] = this.javaScriptResourceModuleData;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.JavaScriptResourceUpdate(this, httpResponse, data);
  }
}

module.exports.JavaScriptResourceUpdate = JavaScriptResourceUpdate;