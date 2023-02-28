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
 * Handles API Request URI_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/uri_insert
 * @class
 */
class URIInsert extends Request {
  /**
   * URIInsert Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'URI_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.uri = null;
    this.destinationType = null;
    this.destination = null;
    this.status = null;
    this.canonical = null;
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
   * Set URI.
   * @param {string} uri
   * @returns {URIInsert}
   */
  setUri(uri) {
    this.uri = uri;
    return this;
  }

  /**
   * Set Destination_Type.
   * @param {string} destinationType
   * @returns {URIInsert}
   */
  setDestinationType(destinationType) {
    this.destinationType = destinationType;
    return this;
  }

  /**
   * Set Destination.
   * @param {string} destination
   * @returns {URIInsert}
   */
  setDestination(destination) {
    this.destination = destination;
    return this;
  }

  /**
   * Set Status.
   * @param {number} status
   * @returns {URIInsert}
   */
  setStatus(status) {
    this.status = status;
    return this;
  }

  /**
   * Set Canonical.
   * @param {boolean} canonical
   * @returns {URIInsert}
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
    return new responses.URIInsert(this, httpResponse, data);
  }
}

module.exports.URIInsert = URIInsert;