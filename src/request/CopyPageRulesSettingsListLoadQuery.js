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
 * Handles API Request CopyPageRulesSettingsList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/copypagerulessettingslist_load_query
 * @class
 */
class CopyPageRulesSettingsListLoadQuery extends ListQueryRequest {
  /**
   * CopyPageRulesSettingsListLoadQuery Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'CopyPageRulesSettingsList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'code',
      'module_name'
    ];

    this.availableSortFields = [
      'id',
      'code',
      'module_name'
    ];

    this.copyPageRulesId = null;
    this.copyPageRulesName = null;
    this.assigned = null;
    this.unassigned = null;
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
   * Set CopyPageRules_ID.
   * @param {number} copyPageRulesId
   * @returns {CopyPageRulesSettingsListLoadQuery}
   */
  setCopyPageRulesId(copyPageRulesId) {
    this.copyPageRulesId = copyPageRulesId;
    return this;
  }

  /**
   * Set CopyPageRules_Name.
   * @param {string} copyPageRulesName
   * @returns {CopyPageRulesSettingsListLoadQuery}
   */
  setCopyPageRulesName(copyPageRulesName) {
    this.copyPageRulesName = copyPageRulesName;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {CopyPageRulesSettingsListLoadQuery}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Set Unassigned.
   * @param {boolean} unassigned
   * @returns {CopyPageRulesSettingsListLoadQuery}
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

    if (!util.isNullOrUndefined(this.copyPageRulesId)) {
      data['CopyPageRules_ID'] = this.copyPageRulesId;
    } else if (!util.isNullOrUndefined(this.copyPageRulesName)) {
      data['CopyPageRules_Name'] = this.copyPageRulesName;
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
    return new responses.CopyPageRulesSettingsListLoadQuery(this, httpResponse, data);
  }
}

module.exports.CopyPageRulesSettingsListLoadQuery = CopyPageRulesSettingsListLoadQuery;