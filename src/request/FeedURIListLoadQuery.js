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
 * Handles API Request FeedURIList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/feedurilist_load_query
 * @class
 */
class FeedURIListLoadQuery extends ListQueryRequest {
  /**
   * FeedURIListLoadQuery Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'FeedURIList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'canonical',
      'status',
      'uri'
    ];

    this.availableSortFields = [
      'uri'
    ];

    this.feedId = null;
    this.feedCode = null;
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
   * Set Feed_ID.
   * @param {number} feedId
   * @returns {FeedURIListLoadQuery}
   */
  setFeedId(feedId) {
    this.feedId = feedId;
    return this;
  }

  /**
   * Set Feed_Code.
   * @param {string} feedCode
   * @returns {FeedURIListLoadQuery}
   */
  setFeedCode(feedCode) {
    this.feedCode = feedCode;
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

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.FeedURIListLoadQuery(this, httpResponse, data);
  }
}

module.exports.FeedURIListLoadQuery = FeedURIListLoadQuery;