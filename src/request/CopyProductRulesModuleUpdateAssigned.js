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
 * Handles API Request CopyProductRulesModule_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/copyproductrulesmodule_update_assigned
 * @class
 */
class CopyProductRulesModuleUpdateAssigned extends Request {
  /**
   * CopyProductRulesModuleUpdateAssigned Constructor.
   * @param {?BaseClient} client
   * @param {?CopyProductRule} copyProductRule
   */
  constructor(client, copyProductRule = null) {
    super(client);
    this.function = 'CopyProductRulesModule_Update_Assigned';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.copyProductRulesId = null;
    this.copyProductRulesName = null;
    this.moduleCode = null;
    this.assigned = null;

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
   * Get Module_Code.
   * @returns {string}
   */
  getModuleCode() {
    return this.moduleCode;
  }

  /**
   * Get Assigned.
   * @returns {boolean}
   */
  getAssigned() {
    return this.assigned;
  }

  /**
   * Set CopyProductRules_ID.
   * @param {number} copyProductRulesId
   * @returns {CopyProductRulesModuleUpdateAssigned}
   */
  setCopyProductRulesId(copyProductRulesId) {
    this.copyProductRulesId = copyProductRulesId;
    return this;
  }

  /**
   * Set CopyProductRules_Name.
   * @param {string} copyProductRulesName
   * @returns {CopyProductRulesModuleUpdateAssigned}
   */
  setCopyProductRulesName(copyProductRulesName) {
    this.copyProductRulesName = copyProductRulesName;
    return this;
  }

  /**
   * Set Module_Code.
   * @param {string} moduleCode
   * @returns {CopyProductRulesModuleUpdateAssigned}
   */
  setModuleCode(moduleCode) {
    this.moduleCode = moduleCode;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {CopyProductRulesModuleUpdateAssigned}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
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

    data['Module_Code'] = this.moduleCode;

    data['Assigned'] = this.assigned;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CopyProductRulesModuleUpdateAssigned(this, httpResponse, data);
  }
}

module.exports.CopyProductRulesModuleUpdateAssigned = CopyProductRulesModuleUpdateAssigned;