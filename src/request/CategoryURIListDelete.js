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
 * Handles API Request CategoryURIList_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/categoryurilist_delete
 * @class
 */
class CategoryURIListDelete extends Request {
  /**
   * CategoryURIListDelete Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'CategoryURIList_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.uriIds = [];
  }

  /**
   * Get URI_IDs.
   * @returns {Array}
   */
  getUriIds() {
    return this.uriIds;
  }

  /**
   * Add URI_IDs.
   * @param {number} uriId
   * @returns {CategoryURIListDelete}
   */
  addUriID(uriId) {
    this.uriIds.push(uriId);
    return this;
  }

  /**
   * Add Uri model.
   * @param {Uri} uri
   * @throws {Error}
   * @returns {CategoryURIListDelete}
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

    data['URI_IDs'] = this.uriIds;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CategoryURIListDelete(this, httpResponse, data);
  }
}

module.exports.CategoryURIListDelete = CategoryURIListDelete;