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
 * Handles API Request URI_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/uri_update
 * @class
 */
class URIUpdate extends Request {
  /**
   * URIUpdate Constructor.
   * @param {?BaseClient} client
   * @param {?Uri} uri
   */
  constructor(client, uri = null) {
    super(client);
    this.function = 'URI_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.uriId = null;
    this.uri = null;
    this.destinationType = null;
    this.destination = null;
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
   * Get Destination_Type.
   * @returns {string}
   */
  getDestinationType() {
    return this.destinationType;
  }

  /**
   * Get Destination.
   * @returns {string}
   */
  getDestination() {
    return this.destination;
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
   * @returns {URIUpdate}
   */
  setUriId(uriId) {
    this.uriId = uriId;
    return this;
  }

  /**
   * Set URI.
   * @param {string} uri
   * @returns {URIUpdate}
   */
  setUri(uri) {
    this.uri = uri;
    return this;
  }

  /**
   * Set Destination_Type.
   * @param {string} destinationType
   * @returns {URIUpdate}
   */
  setDestinationType(destinationType) {
    this.destinationType = destinationType;
    return this;
  }

  /**
   * Set Destination.
   * @param {string} destination
   * @returns {URIUpdate}
   */
  setDestination(destination) {
    this.destination = destination;
    return this;
  }

  /**
   * Set Status.
   * @param {number} status
   * @returns {URIUpdate}
   */
  setStatus(status) {
    this.status = status;
    return this;
  }

  /**
   * Set Canonical.
   * @param {boolean} canonical
   * @returns {URIUpdate}
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

    if (!util.isNullOrUndefined(this.destinationType)) {
      data['Destination_Type'] = this.destinationType;
    }

    if (!util.isNullOrUndefined(this.destination)) {
      data['Destination'] = this.destination;
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
    return new responses.URIUpdate(this, httpResponse, data);
  }
}

module.exports.URIUpdate = URIUpdate;