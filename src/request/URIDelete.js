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
 * Handles API Request URI_Delete. Scope: Domain. 
 * @see https://docs.miva.com/json-api/functions/uri_delete
 * @class
 */
class URIDelete extends Request {
  /**
   * URIDelete Constructor.
   * @param {?BaseClient} client
   * @param {?Uri} uri
   */
  constructor(client, uri = null) {
    super(client);
    this.function = 'URI_Delete';
    this.scope = Request.REQUEST_SCOPE_DOMAIN;
    this.uriId = null;

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
   * Set URI_ID.
   * @param {number} uriId
   * @returns {URIDelete}
   */
  setUriId(uriId) {
    this.uriId = uriId;
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

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.URIDelete(this, httpResponse, data);
  }
}

module.exports.URIDelete = URIDelete;