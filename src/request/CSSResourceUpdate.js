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
 * Handles API Request CSSResource_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/cssresource_update
 * @class
 */
class CSSResourceUpdate extends Request {
  /**
   * CSSResourceUpdate Constructor.
   * @param {?BaseClient} client
   * @param {?CSSResource} CSSResource
   */
  constructor(client, CSSResource = null) {
    super(client);
    this.function = 'CSSResource_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.CSSResourceId = null;
    this.editCSSResource = null;
    this.CSSResourceCode = null;
    this.CSSResourceGlobal = null;
    this.CSSResourceActive = null;
    this.CSSResourceFilePath = null;
    this.CSSResourceAttributes = [];
    this.CSSResourceModuleCode = null;
    this.CSSResourceModuleData = null;

    if (util.isInstanceOf(CSSResource, models.CSSResource)) {
      if (CSSResource.getId()) {
        this.setCSSResourceId(CSSResource.getId());
      } else if (CSSResource.getCode()) {
        this.setEditCSSResource(CSSResource.getCode());
      }

      this.setCSSResourceCode(CSSResource.getCode());
    }
  }

  /**
   * Get CSSResource_ID.
   * @returns {number}
   */
  getCSSResourceId() {
    return this.CSSResourceId;
  }

  /**
   * Get Edit_CSSResource.
   * @returns {string}
   */
  getEditCSSResource() {
    return this.editCSSResource;
  }

  /**
   * Get CSSResource_Code.
   * @returns {string}
   */
  getCSSResourceCode() {
    return this.CSSResourceCode;
  }

  /**
   * Get CSSResource_Global.
   * @returns {boolean}
   */
  getCSSResourceGlobal() {
    return this.CSSResourceGlobal;
  }

  /**
   * Get CSSResource_Active.
   * @returns {boolean}
   */
  getCSSResourceActive() {
    return this.CSSResourceActive;
  }

  /**
   * Get CSSResource_File_Path.
   * @returns {string}
   */
  getCSSResourceFilePath() {
    return this.CSSResourceFilePath;
  }

  /**
   * Get CSSResource_Attributes.
   * @returns {CSSResourceAttribute[]}
   */
  getCSSResourceAttributes() {
    return this.CSSResourceAttributes;
  }

  /**
   * Get CSSResource_Module_Code.
   * @returns {string}
   */
  getCSSResourceModuleCode() {
    return this.CSSResourceModuleCode;
  }

  /**
   * Get CSSResource_Module_Data.
   * @returns {string}
   */
  getCSSResourceModuleData() {
    return this.CSSResourceModuleData;
  }

  /**
   * Set CSSResource_ID.
   * @param {number} CSSResourceId
   * @returns {CSSResourceUpdate}
   */
  setCSSResourceId(CSSResourceId) {
    this.CSSResourceId = CSSResourceId;
    return this;
  }

  /**
   * Set Edit_CSSResource.
   * @param {string} editCSSResource
   * @returns {CSSResourceUpdate}
   */
  setEditCSSResource(editCSSResource) {
    this.editCSSResource = editCSSResource;
    return this;
  }

  /**
   * Set CSSResource_Code.
   * @param {string} CSSResourceCode
   * @returns {CSSResourceUpdate}
   */
  setCSSResourceCode(CSSResourceCode) {
    this.CSSResourceCode = CSSResourceCode;
    return this;
  }

  /**
   * Set CSSResource_Global.
   * @param {boolean} CSSResourceGlobal
   * @returns {CSSResourceUpdate}
   */
  setCSSResourceGlobal(CSSResourceGlobal) {
    this.CSSResourceGlobal = CSSResourceGlobal;
    return this;
  }

  /**
   * Set CSSResource_Active.
   * @param {boolean} CSSResourceActive
   * @returns {CSSResourceUpdate}
   */
  setCSSResourceActive(CSSResourceActive) {
    this.CSSResourceActive = CSSResourceActive;
    return this;
  }

  /**
   * Set CSSResource_File_Path.
   * @param {string} CSSResourceFilePath
   * @returns {CSSResourceUpdate}
   */
  setCSSResourceFilePath(CSSResourceFilePath) {
    this.CSSResourceFilePath = CSSResourceFilePath;
    return this;
  }

  /**
   * Set CSSResource_Attributes.
   * @param {CSSResourceAttribute[]} CSSResourceAttributes
   * @throws {Error}
   * @returns {CSSResourceUpdate}
   */
  setCSSResourceAttributes(CSSResourceAttributes) {
    var i;
    var l;

    if (!util.isArray(CSSResourceAttributes)) {
      throw new Error(util.format('Expected an array but got %s', typeof CSSResourceAttributes));
    }

    for (i = 0, l = CSSResourceAttributes.length; i < l; i++) {
      if (!util.isInstanceOf(CSSResourceAttributes[i], models.CSSResourceAttribute) && util.isObject(CSSResourceAttributes[i])) {
        CSSResourceAttributes[i] = new models.CSSResourceAttribute(CSSResourceAttributes[i]);
      } else if (!util.isInstanceOf(CSSResourceAttributes[i], models.CSSResourceAttribute)) {
        throw new Error(util.format('Expected instance of CSSResourceAttribute or an Object but got %s',
          typeof CSSResourceAttributes[i]));
      }
    }

    this.CSSResourceAttributes = CSSResourceAttributes;
    return this;
  }

  /**
   * Set CSSResource_Module_Code.
   * @param {string} CSSResourceModuleCode
   * @returns {CSSResourceUpdate}
   */
  setCSSResourceModuleCode(CSSResourceModuleCode) {
    this.CSSResourceModuleCode = CSSResourceModuleCode;
    return this;
  }

  /**
   * Set CSSResource_Module_Data.
   * @param {string} CSSResourceModuleData
   * @returns {CSSResourceUpdate}
   */
  setCSSResourceModuleData(CSSResourceModuleData) {
    this.CSSResourceModuleData = CSSResourceModuleData;
    return this;
  }

  /**
   * Add CSSResource_Attributes.
   * @param {CSSResourceAttribute} CSSResourceAttribute
   * @throws {Error}
   * @returns {CSSResourceUpdate}
   */
  addCSSResourceAttribute(CSSResourceAttribute) {
    if (util.isInstanceOf(CSSResourceAttribute, models.CSSResourceAttribute)) {
      this.CSSResourceAttributes.push(CSSResourceAttribute);
    } else if (util.isObject(CSSResourceAttribute)) {
      this.CSSResourceAttributes.push(new models.CSSResourceAttribute(CSSResourceAttribute));
    } else {
      throw new Error(util.format('Expected instance of CSSResourceAttribute or Object but got %s',
        typeof CSSResourceAttribute));
    }

    return this;
  }

  /**
   * Add many CSSResourceAttribute.
   * @param {CSSResourceAttribute[]} CSSResourceAttributes
   * @throws {Error}
   * @returns {CSSResourceUpdate}
   */
  addCSSResourceAttributes(CSSResourceAttributes) {
    var i;
    var l;

    if (!util.isArray(CSSResourceAttributes)) {
      throw new Error(util.format('Expecting an array of CSSResourceAttribute but got %s',
        typeof CSSResourceAttributes));
    }

    for (i = 0, l = CSSResourceAttributes.length; i < l; i++) {
      if (util.isInstanceOf(CSSResourceAttributes[i], models.CSSResourceAttribute)) {
        this.CSSResourceAttributes.push(CSSResourceAttributes[i]);
      } else if (util.isObject(CSSResourceAttributes[i])) {
        this.CSSResourceAttributes.push(new models.CSSResourceAttribute(CSSResourceAttributes[i]));
      } else {
        throw new Error(util.format('Expected array of CSSResourceAttribute or an array of Object but got %s',
          typeof CSSResourceAttributes[i]));
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

    if (!util.isNullOrUndefined(this.CSSResourceId)) {
      data['CSSResource_ID'] = this.CSSResourceId;
    } else if (!util.isNullOrUndefined(this.editCSSResource)) {
      data['Edit_CSSResource'] = this.editCSSResource;
    } else if (!util.isNullOrUndefined(this.CSSResourceCode)) {
      data['CSSResource_Code'] = this.CSSResourceCode;
    }

    if (!util.isNullOrUndefined(this.CSSResourceCode)) {
      data['CSSResource_Code'] = this.CSSResourceCode;
    }

    if (!util.isNullOrUndefined(this.CSSResourceGlobal)) {
      data['CSSResource_Global'] = this.CSSResourceGlobal;
    }

    if (!util.isNullOrUndefined(this.CSSResourceActive)) {
      data['CSSResource_Active'] = this.CSSResourceActive;
    }

    data['CSSResource_File_Path'] = this.CSSResourceFilePath;

    if (util.isArray(this.CSSResourceAttributes)) {
      data['CSSResource_Attributes'] = [];

      for (i = 0, l = this.CSSResourceAttributes.length; i < l; i++) {
        if (util.isObject(this.CSSResourceAttributes[i])) {
            data['CSSResource_Attributes'].push(this.CSSResourceAttributes[i].toObject());
        }
      }
    }

    if (!util.isNullOrUndefined(this.CSSResourceModuleCode)) {
      data['CSSResource_Module_Code'] = this.CSSResourceModuleCode;
    }

    if (!util.isNullOrUndefined(this.CSSResourceModuleData)) {
      data['CSSResource_Module_Data'] = this.CSSResourceModuleData;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CSSResourceUpdate(this, httpResponse, data);
  }
}

module.exports.CSSResourceUpdate = CSSResourceUpdate;