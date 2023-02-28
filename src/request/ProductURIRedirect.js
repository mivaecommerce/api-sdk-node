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
const { ListQueryRequest }  = require('./../listquery');

/** 
 * Handles API Request ProductURI_Redirect. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/producturi_redirect
 * @class
 */
class ProductURIRedirect extends ListQueryRequest {
  /**
   * ProductURIRedirect Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'ProductURI_Redirect';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.destinationStoreCode = null;
    this.destinationType = null;
    this.destination = null;
    this.status = null;
    this.uriIds = [];
  }

  /**
   * Get Destination_Store_Code.
   * @returns {string}
   */
  getDestinationStoreCode() {
    return this.destinationStoreCode;
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
   * Get URI_IDs.
   * @returns {Array}
   */
  getUriIds() {
    return this.uriIds;
  }

  /**
   * Set Destination_Store_Code.
   * @param {string} destinationStoreCode
   * @returns {ProductURIRedirect}
   */
  setDestinationStoreCode(destinationStoreCode) {
    this.destinationStoreCode = destinationStoreCode;
    return this;
  }

  /**
   * Set Destination_Type.
   * @param {string} destinationType
   * @returns {ProductURIRedirect}
   */
  setDestinationType(destinationType) {
    this.destinationType = destinationType;
    return this;
  }

  /**
   * Set Destination.
   * @param {string} destination
   * @returns {ProductURIRedirect}
   */
  setDestination(destination) {
    this.destination = destination;
    return this;
  }

  /**
   * Set Status.
   * @param {number} status
   * @returns {ProductURIRedirect}
   */
  setStatus(status) {
    this.status = status;
    return this;
  }

  /**
   * Add URI_IDs.
   * @param {number} uriId
   * @returns {ProductURIRedirect}
   */
  addUriID(uriId) {
    this.uriIds.push(uriId);
    return this;
  }

  /**
   * Add Uri model.
   * @param {Uri} uri
   * @throws {Error}
   * @returns {ProductURIRedirect}
   */
  addUri(uri) {
    if (!util.isInstanceOf(uri, models.Uri)) {
      throw new Error(util.format('Expected instance of Uri but got %s',
        typeof uri));
    }

    if (uri.getId()) {
      this.uriIds.push(uri.getId());
    }

    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.destinationStoreCode)) {
      data['Destination_Store_Code'] = this.destinationStoreCode;
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

    data['URI_IDs'] = this.uriIds;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ProductURIRedirect(this, httpResponse, data);
  }
}

module.exports.ProductURIRedirect = ProductURIRedirect;