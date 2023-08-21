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
 * Handles API Request CSSResource_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/cssresource_insert
 * @class
 */
class CSSResourceInsert extends Request {
  /**
   * CSSResourceInsert Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'CSSResource_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.CSSResourceCode = null;
    this.CSSResourceType = null;
    this.CSSResourceGlobal = null;
    this.CSSResourceActive = null;
    this.CSSResourceFilePath = null;
    this.CSSResourceAttributes = [];
    this.CSSResourceModuleCode = null;
    this.CSSResourceModuleData = null;
  }

  /**
   * Get CSSResource_Code.
   * @returns {string}
   */
  getCSSResourceCode() {
    return this.CSSResourceCode;
  }

  /**
   * Get CSSResource_Type.
   * @returns {string}
   */
  getCSSResourceType() {
    return this.CSSResourceType;
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
   * Set CSSResource_Code.
   * @param {string} CSSResourceCode
   * @returns {CSSResourceInsert}
   */
  setCSSResourceCode(CSSResourceCode) {
    this.CSSResourceCode = CSSResourceCode;
    return this;
  }

  /**
   * Set CSSResource_Type.
   * @param {string} CSSResourceType
   * @returns {CSSResourceInsert}
   */
  setCSSResourceType(CSSResourceType) {
    this.CSSResourceType = CSSResourceType;
    return this;
  }

  /**
   * Set CSSResource_Global.
   * @param {boolean} CSSResourceGlobal
   * @returns {CSSResourceInsert}
   */
  setCSSResourceGlobal(CSSResourceGlobal) {
    this.CSSResourceGlobal = CSSResourceGlobal;
    return this;
  }

  /**
   * Set CSSResource_Active.
   * @param {boolean} CSSResourceActive
   * @returns {CSSResourceInsert}
   */
  setCSSResourceActive(CSSResourceActive) {
    this.CSSResourceActive = CSSResourceActive;
    return this;
  }

  /**
   * Set CSSResource_File_Path.
   * @param {string} CSSResourceFilePath
   * @returns {CSSResourceInsert}
   */
  setCSSResourceFilePath(CSSResourceFilePath) {
    this.CSSResourceFilePath = CSSResourceFilePath;
    return this;
  }

  /**
   * Set CSSResource_Attributes.
   * @param {CSSResourceAttribute[]} CSSResourceAttributes
   * @throws {Error}
   * @returns {CSSResourceInsert}
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
   * @returns {CSSResourceInsert}
   */
  setCSSResourceModuleCode(CSSResourceModuleCode) {
    this.CSSResourceModuleCode = CSSResourceModuleCode;
    return this;
  }

  /**
   * Set CSSResource_Module_Data.
   * @param {string} CSSResourceModuleData
   * @returns {CSSResourceInsert}
   */
  setCSSResourceModuleData(CSSResourceModuleData) {
    this.CSSResourceModuleData = CSSResourceModuleData;
    return this;
  }

  /**
   * Add CSSResource_Attributes.
   * @param {CSSResourceAttribute} CSSResourceAttribute
   * @throws {Error}
   * @returns {CSSResourceInsert}
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
   * @returns {CSSResourceInsert}
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

    data['CSSResource_Code'] = this.CSSResourceCode;

    data['CSSResource_Type'] = this.CSSResourceType;

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
    return new responses.CSSResourceInsert(this, httpResponse, data);
  }
}

module.exports.CSSResourceInsert = CSSResourceInsert;