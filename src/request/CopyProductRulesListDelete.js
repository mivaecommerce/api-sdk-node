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
 * Handles API Request CopyProductRulesList_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/copyproductruleslist_delete
 * @class
 */
class CopyProductRulesListDelete extends Request {
  /**
   * CopyProductRulesListDelete Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'CopyProductRulesList_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.copyProductRulesIds = [];
  }

  /**
   * Get CopyProductRules_IDs.
   * @returns {Array}
   */
  getCopyProductRulesIds() {
    return this.copyProductRulesIds;
  }

  /**
   * Add CopyProductRules_IDs.
   * @param {number} copyProductRuleId
   * @returns {CopyProductRulesListDelete}
   */
  addCopyProductRuleId(copyProductRuleId) {
    this.copyProductRulesIds.push(copyProductRuleId);
    return this;
  }

  /**
   * Add CopyProductRule model.
   * @param {CopyProductRule} copyProductRule
   * @throws {Error}
   * @returns {CopyProductRulesListDelete}
   */
  addCopyProductRule(copyProductRule) {
    if (!util.isInstanceOf(copyProductRule, models.CopyProductRule)) {
      throw new Error(util.format('Expected instance of CopyProductRule but got %s',
        typeof copyProductRule));
    }

    if (copyProductRule.getId()) {
      this.copyProductRulesIds.push(copyProductRule.getId());
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

    data['CopyProductRules_IDs'] = this.copyProductRulesIds;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CopyProductRulesListDelete(this, httpResponse, data);
  }
}

module.exports.CopyProductRulesListDelete = CopyProductRulesListDelete;