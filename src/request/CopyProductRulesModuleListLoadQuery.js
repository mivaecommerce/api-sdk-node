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
 * Handles API Request CopyProductRulesModuleList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/copyproductrulesmodulelist_load_query
 * @class
 */
class CopyProductRulesModuleListLoadQuery extends ListQueryRequest {
  /**
   * CopyProductRulesModuleListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?CopyProductRule} copyProductRule
   */
  constructor(client, copyProductRule = null) {
    super(client);
    this.function = 'CopyProductRulesModuleList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'module_name'
    ];

    this.availableSortFields = [
      'module_name'
    ];

    this.copyProductRulesId = null;
    this.copyProductRulesName = null;
    this.assigned = null;
    this.unassigned = null;

    if (util.isInstanceOf(copyProductRule, models.CopyProductRule)) {
      if (copyProductRule.getId()) {
        this.setCopyProductRulesId(copyProductRule.getId());
      } else if (copyProductRule.getName()) {
        this.setCopyProductRulesName(copyProductRule.getName());
      }
    }
  }

  /**
   * Get CopyProductRules_ID.
   * @returns {number}
   */
  getCopyProductRulesId() {
    return this.copyProductRulesId;
  }

  /**
   * Get CopyProductRules_Name.
   * @returns {string}
   */
  getCopyProductRulesName() {
    return this.copyProductRulesName;
  }

  /**
   * Get Assigned.
   * @returns {boolean}
   */
  getAssigned() {
    return this.assigned;
  }

  /**
   * Get Unassigned.
   * @returns {boolean}
   */
  getUnassigned() {
    return this.unassigned;
  }

  /**
   * Set CopyProductRules_ID.
   * @param {number} copyProductRulesId
   * @returns {CopyProductRulesModuleListLoadQuery}
   */
  setCopyProductRulesId(copyProductRulesId) {
    this.copyProductRulesId = copyProductRulesId;
    return this;
  }

  /**
   * Set CopyProductRules_Name.
   * @param {string} copyProductRulesName
   * @returns {CopyProductRulesModuleListLoadQuery}
   */
  setCopyProductRulesName(copyProductRulesName) {
    this.copyProductRulesName = copyProductRulesName;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {CopyProductRulesModuleListLoadQuery}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Set Unassigned.
   * @param {boolean} unassigned
   * @returns {CopyProductRulesModuleListLoadQuery}
   */
  setUnassigned(unassigned) {
    this.unassigned = unassigned;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.copyProductRulesId)) {
      data['CopyProductRules_ID'] = this.copyProductRulesId;
    } else if (!util.isNullOrUndefined(this.copyProductRulesName)) {
      data['CopyProductRules_Name'] = this.copyProductRulesName;
    }

    if (!util.isNullOrUndefined(this.assigned)) {
      data['Assigned'] = this.assigned;
    }

    if (!util.isNullOrUndefined(this.unassigned)) {
      data['Unassigned'] = this.unassigned;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CopyProductRulesModuleListLoadQuery(this, httpResponse, data);
  }
}

module.exports.CopyProductRulesModuleListLoadQuery = CopyProductRulesModuleListLoadQuery;