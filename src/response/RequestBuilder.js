/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Response } = require('./../abstract');

/** 
 * Response for RequestBuilder.
 * @class
 */
class RequestBuilder extends Response {
  /**
   * RequestBuilder Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

/** 
 * Response for ListQueryRequestBuilder.
 * @class
 */
class ListQueryRequestBuilder extends Response {
  /**
   * RequestBuilder Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

module.exports = {
  RequestBuilder,
  ListQueryRequestBuilder
};