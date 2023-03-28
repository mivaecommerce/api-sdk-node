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
 * Handles API Request CopyPageRulesSettings_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/copypagerulessettings_update_assigned
 * @class
 */
class CopyPageRulesSettingsUpdateAssigned extends Request {
  /**
   * CopyPageRulesSettingsUpdateAssigned Constructor.
   * @param {?BaseClient} client
   * @param {?CopyPageRule} copyPageRule
   */
  constructor(client, copyPageRule = null) {
    super(client);
    this.function = 'CopyPageRulesSettings_Update_Assigned';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.copyPageRulesId = null;
    this.copyPageRulesName = null;
    this.itemCode = null;
    this.assigned = null;

    if (util.isInstanceOf(copyPageRule, models.CopyPageRule)) {
      if (copyPageRule.getId()) {
        this.setCopyPageRulesId(copyPageRule.getId());
      } else if (copyPageRule.getName()) {
        this.setCopyPageRulesName(copyPageRule.getName());
      }
    }
  }

  /**
   * Get CopyPageRules_ID.
   * @returns {number}
   */
  getCopyPageRulesId() {
    return this.copyPageRulesId;
  }

  /**
   * Get CopyPageRules_Name.
   * @returns {string}
   */
  getCopyPageRulesName() {
    return this.copyPageRulesName;
  }

  /**
   * Get Item_Code.
   * @returns {string}
   */
  getItemCode() {
    return this.itemCode;
  }

  /**
   * Get Assigned.
   * @returns {boolean}
   */
  getAssigned() {
    return this.assigned;
  }

  /**
   * Set CopyPageRules_ID.
   * @param {number} copyPageRulesId
   * @returns {CopyPageRulesSettingsUpdateAssigned}
   */
  setCopyPageRulesId(copyPageRulesId) {
    this.copyPageRulesId = copyPageRulesId;
    return this;
  }

  /**
   * Set CopyPageRules_Name.
   * @param {string} copyPageRulesName
   * @returns {CopyPageRulesSettingsUpdateAssigned}
   */
  setCopyPageRulesName(copyPageRulesName) {
    this.copyPageRulesName = copyPageRulesName;
    return this;
  }

  /**
   * Set Item_Code.
   * @param {string} itemCode
   * @returns {CopyPageRulesSettingsUpdateAssigned}
   */
  setItemCode(itemCode) {
    this.itemCode = itemCode;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {CopyPageRulesSettingsUpdateAssigned}
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

    if (!util.isNullOrUndefined(this.copyPageRulesId)) {
      data['CopyPageRules_ID'] = this.copyPageRulesId;
    } else if (!util.isNullOrUndefined(this.copyPageRulesName)) {
      data['CopyPageRules_Name'] = this.copyPageRulesName;
    }

    data['Item_Code'] = this.itemCode;

    data['Assigned'] = this.assigned;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CopyPageRulesSettingsUpdateAssigned(this, httpResponse, data);
  }
}

module.exports.CopyPageRulesSettingsUpdateAssigned = CopyPageRulesSettingsUpdateAssigned;