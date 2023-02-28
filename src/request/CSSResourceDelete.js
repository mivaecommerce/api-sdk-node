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
 * Handles API Request CSSResource_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/cssresource_delete
 * @class
 */
class CSSResourceDelete extends Request {
  /**
   * CSSResourceDelete Constructor.
   * @param {?BaseClient} client
   * @param {?CSSResource} CSSResource
   */
  constructor(client, CSSResource = null) {
    super(client);
    this.function = 'CSSResource_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.CSSResourceId = null;
    this.editCSSResource = null;
    this.CSSResourceCode = null;

    if (util.isInstanceOf(CSSResource, models.CSSResource)) {
      if (CSSResource.getId()) {
        this.setCSSResourceId(CSSResource.getId());
      } else if (CSSResource.getCode()) {
        this.setEditCSSResource(CSSResource.getCode());
      } else if (CSSResource.getCode()) {
        this.setCSSResourceCode(CSSResource.getCode());
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
   * Set CSSResource_ID.
   * @param {number} CSSResourceId
   * @returns {CSSResourceDelete}
   */
  setCSSResourceId(CSSResourceId) {
    this.CSSResourceId = CSSResourceId;
    return this;
  }

  /**
   * Set Edit_CSSResource.
   * @param {string} editCSSResource
   * @returns {CSSResourceDelete}
   */
  setEditCSSResource(editCSSResource) {
    this.editCSSResource = editCSSResource;
    return this;
  }

  /**
   * Set CSSResource_Code.
   * @param {string} CSSResourceCode
   * @returns {CSSResourceDelete}
   */
  setCSSResourceCode(CSSResourceCode) {
    this.CSSResourceCode = CSSResourceCode;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
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

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CSSResourceDelete(this, httpResponse, data);
  }
}

module.exports.CSSResourceDelete = CSSResourceDelete;