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
 * Handles API Request CopyPageRulesList_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/copypageruleslist_delete
 * @class
 */
class CopyPageRulesListDelete extends Request {
  /**
   * CopyPageRulesListDelete Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'CopyPageRulesList_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.copyPageRulesIds = [];
  }

  /**
   * Get CopyPageRules_IDs.
   * @returns {Array}
   */
  getCopyPageRulesIds() {
    return this.copyPageRulesIds;
  }

  /**
   * Add CopyPageRules_IDs.
   * @param {number} copyPageRuleId
   * @returns {CopyPageRulesListDelete}
   */
  addCopyPageRuleId(copyPageRuleId) {
    this.copyPageRulesIds.push(copyPageRuleId);
    return this;
  }

  /**
   * Add CopyPageRule model.
   * @param {CopyPageRule} copyPageRule
   * @throws {Error}
   * @returns {CopyPageRulesListDelete}
   */
  addCopyPageRule(copyPageRule) {
    if (!util.isInstanceOf(copyPageRule, models.CopyPageRule)) {
      throw new Error(util.format('Expected instance of CopyPageRule but got %s',
        typeof copyPageRule));
    }

    if (copyPageRule.getId()) {
      this.copyPageRulesIds.push(copyPageRule.getId());
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

    data['CopyPageRules_IDs'] = this.copyPageRulesIds;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CopyPageRulesListDelete(this, httpResponse, data);
  }
}

module.exports.CopyPageRulesListDelete = CopyPageRulesListDelete;