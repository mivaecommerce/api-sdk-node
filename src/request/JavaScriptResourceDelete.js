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
 * Handles API Request JavaScriptResource_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/javascriptresource_delete
 * @class
 */
class JavaScriptResourceDelete extends Request {
  /**
   * JavaScriptResourceDelete Constructor.
   * @param {?BaseClient} client
   * @param {?JavaScriptResource} javaScriptResource
   */
  constructor(client, javaScriptResource = null) {
    super(client);
    this.function = 'JavaScriptResource_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.javaScriptResourceId = null;
    this.editJavaScriptResource = null;
    this.javaScriptResourceCode = null;

    if (util.isInstanceOf(javaScriptResource, models.JavaScriptResource)) {
      if (javaScriptResource.getId()) {
        this.setJavaScriptResourceId(javaScriptResource.getId());
      } else if (javaScriptResource.getCode()) {
        this.setEditJavaScriptResource(javaScriptResource.getCode());
      } else if (javaScriptResource.getCode()) {
        this.setJavaScriptResourceCode(javaScriptResource.getCode());
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
   * Set JavaScriptResource_ID.
   * @param {number} javaScriptResourceId
   * @returns {JavaScriptResourceDelete}
   */
  setJavaScriptResourceId(javaScriptResourceId) {
    this.javaScriptResourceId = javaScriptResourceId;
    return this;
  }

  /**
   * Set Edit_JavaScriptResource.
   * @param {string} editJavaScriptResource
   * @returns {JavaScriptResourceDelete}
   */
  setEditJavaScriptResource(editJavaScriptResource) {
    this.editJavaScriptResource = editJavaScriptResource;
    return this;
  }

  /**
   * Set JavaScriptResource_Code.
   * @param {string} javaScriptResourceCode
   * @returns {JavaScriptResourceDelete}
   */
  setJavaScriptResourceCode(javaScriptResourceCode) {
    this.javaScriptResourceCode = javaScriptResourceCode;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
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

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.JavaScriptResourceDelete(this, httpResponse, data);
  }
}

module.exports.JavaScriptResourceDelete = JavaScriptResourceDelete;