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
 * Handles API Request AttributeTemplateList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/attributetemplatelist_load_query
 * @class
 */
class AttributeTemplateListLoadQuery extends ListQueryRequest {
  /**
   * AttributeTemplateListLoadQuery Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'AttributeTemplateList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'code',
      'prompt',
      'refcount'
    ];

    this.availableSortFields = [
      'id',
      'code',
      'prompt',
      'refcount'
    ];
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.AttributeTemplateListLoadQuery(this, httpResponse, data);
  }
}

module.exports.AttributeTemplateListLoadQuery = AttributeTemplateListLoadQuery;