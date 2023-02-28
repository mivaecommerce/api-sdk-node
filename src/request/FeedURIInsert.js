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
 * Handles API Request FeedURI_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/feeduri_insert
 * @class
 */
class FeedURIInsert extends Request {
  /**
   * FeedURIInsert Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'FeedURI_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.feedId = null;
    this.feedCode = null;
    this.uri = null;
    this.status = null;
    this.canonical = null;
  }

  /**
   * Get Feed_ID.
   * @returns {number}
   */
  getFeedId() {
    return this.feedId;
  }

  /**
   * Get Feed_Code.
   * @returns {string}
   */
  getFeedCode() {
    return this.feedCode;
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
   * Set Feed_ID.
   * @param {number} feedId
   * @returns {FeedURIInsert}
   */
  setFeedId(feedId) {
    this.feedId = feedId;
    return this;
  }

  /**
   * Set Feed_Code.
   * @param {string} feedCode
   * @returns {FeedURIInsert}
   */
  setFeedCode(feedCode) {
    this.feedCode = feedCode;
    return this;
  }

  /**
   * Set URI.
   * @param {string} uri
   * @returns {FeedURIInsert}
   */
  setUri(uri) {
    this.uri = uri;
    return this;
  }

  /**
   * Set Status.
   * @param {number} status
   * @returns {FeedURIInsert}
   */
  setStatus(status) {
    this.status = status;
    return this;
  }

  /**
   * Set Canonical.
   * @param {boolean} canonical
   * @returns {FeedURIInsert}
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

    if (!util.isNullOrUndefined(this.feedId)) {
      data['Feed_ID'] = this.feedId;
    } else if (!util.isNullOrUndefined(this.feedCode)) {
      data['Feed_Code'] = this.feedCode;
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
    return new responses.FeedURIInsert(this, httpResponse, data);
  }
}

module.exports.FeedURIInsert = FeedURIInsert;