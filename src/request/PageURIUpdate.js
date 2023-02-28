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
 * Handles API Request PageURI_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/pageuri_update
 * @class
 */
class PageURIUpdate extends Request {
  /**
   * PageURIUpdate Constructor.
   * @param {?BaseClient} client
   * @param {?Uri} uri
   */
  constructor(client, uri = null) {
    super(client);
    this.function = 'PageURI_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.uriId = null;
    this.uri = null;
    this.status = null;
    this.canonical = null;

    if (util.isInstanceOf(uri, models.Uri)) {
      if (uri.getId()) {
        this.setUriId(uri.getId());
      }
    }
  }

  /**
   * Get URI_ID.
   * @returns {number}
   */
  getUriId() {
    return this.uriId;
  }

  /**
   * Get URI.
   * @returns {string}
   */
  getUri() {
    return this.uri;
  }

  /**
   * Get Status.
   * @returns {number}
   */
  getStatus() {
    return this.status;
  }

  /**
   * Get Canonical.
   * @returns {boolean}
   */
  getCanonical() {
    return this.canonical;
  }

  /**
   * Set URI_ID.
   * @param {number} uriId
   * @returns {PageURIUpdate}
   */
  setUriId(uriId) {
    this.uriId = uriId;
    return this;
  }

  /**
   * Set URI.
   * @param {string} uri
   * @returns {PageURIUpdate}
   */
  setUri(uri) {
    this.uri = uri;
    return this;
  }

  /**
   * Set Status.
   * @param {number} status
   * @returns {PageURIUpdate}
   */
  setStatus(status) {
    this.status = status;
    return this;
  }

  /**
   * Set Canonical.
   * @param {boolean} canonical
   * @returns {PageURIUpdate}
   */
  setCanonical(canonical) {
    this.canonical = canonical;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.uriId)) {
      data['URI_ID'] = this.uriId;
    }

    if (!util.isNullOrUndefined(this.uri)) {
      data['URI'] = this.uri;
    }

    if (!util.isNullOrUndefined(this.status)) {
      data['Status'] = this.status;
    }

    if (!util.isNullOrUndefined(this.canonical)) {
      data['Canonical'] = this.canonical;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.PageURIUpdate(this, httpResponse, data);
  }
}

module.exports.PageURIUpdate = PageURIUpdate;