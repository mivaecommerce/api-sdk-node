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
 * Handles API Request AvailabilityGroupShippingMethod_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/availabilitygroupshippingmethod_update_assigned
 * @class
 */
class AvailabilityGroupShippingMethodUpdateAssigned extends Request {
  /**
   * AvailabilityGroupShippingMethodUpdateAssigned Constructor.
   * @param {?BaseClient} client
   * @param {?AvailabilityGroup} availabilityGroup
   */
  constructor(client, availabilityGroup = null) {
    super(client);
    this.function = 'AvailabilityGroupShippingMethod_Update_Assigned';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.availabilityGroupId = null;
    this.editAvailabilityGroup = null;
    this.availabilityGroupName = null;
    this.moduleCode = null;
    this.methodCode = null;
    this.assigned = null;

    if (util.isInstanceOf(availabilityGroup, models.AvailabilityGroup)) {
      if (availabilityGroup.getId()) {
        this.setAvailabilityGroupId(availabilityGroup.getId());
      } else if (availabilityGroup.getName()) {
        this.setEditAvailabilityGroup(availabilityGroup.getName());
      }
    }
  }

  /**
   * Get AvailabilityGroup_ID.
   * @returns {number}
   */
  getAvailabilityGroupId() {
    return this.availabilityGroupId;
  }

  /**
   * Get Edit_AvailabilityGroup.
   * @returns {string}
   */
  getEditAvailabilityGroup() {
    return this.editAvailabilityGroup;
  }

  /**
   * Get AvailabilityGroup_Name.
   * @returns {string}
   */
  getAvailabilityGroupName() {
    return this.availabilityGroupName;
  }

  /**
   * Get Module_Code.
   * @returns {string}
   */
  getModuleCode() {
    return this.moduleCode;
  }

  /**
   * Get Method_Code.
   * @returns {string}
   */
  getMethodCode() {
    return this.methodCode;
  }

  /**
   * Get Assigned.
   * @returns {boolean}
   */
  getAssigned() {
    return this.assigned;
  }

  /**
   * Set AvailabilityGroup_ID.
   * @param {number} availabilityGroupId
   * @returns {AvailabilityGroupShippingMethodUpdateAssigned}
   */
  setAvailabilityGroupId(availabilityGroupId) {
    this.availabilityGroupId = availabilityGroupId;
    return this;
  }

  /**
   * Set Edit_AvailabilityGroup.
   * @param {string} editAvailabilityGroup
   * @returns {AvailabilityGroupShippingMethodUpdateAssigned}
   */
  setEditAvailabilityGroup(editAvailabilityGroup) {
    this.editAvailabilityGroup = editAvailabilityGroup;
    return this;
  }

  /**
   * Set AvailabilityGroup_Name.
   * @param {string} availabilityGroupName
   * @returns {AvailabilityGroupShippingMethodUpdateAssigned}
   */
  setAvailabilityGroupName(availabilityGroupName) {
    this.availabilityGroupName = availabilityGroupName;
    return this;
  }

  /**
   * Set Module_Code.
   * @param {string} moduleCode
   * @returns {AvailabilityGroupShippingMethodUpdateAssigned}
   */
  setModuleCode(moduleCode) {
    this.moduleCode = moduleCode;
    return this;
  }

  /**
   * Set Method_Code.
   * @param {string} methodCode
   * @returns {AvailabilityGroupShippingMethodUpdateAssigned}
   */
  setMethodCode(methodCode) {
    this.methodCode = methodCode;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {AvailabilityGroupShippingMethodUpdateAssigned}
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

    if (!util.isNullOrUndefined(this.availabilityGroupId)) {
      data['AvailabilityGroup_ID'] = this.availabilityGroupId;
    } else if (!util.isNullOrUndefined(this.editAvailabilityGroup)) {
      data['Edit_AvailabilityGroup'] = this.editAvailabilityGroup;
    } else if (!util.isNullOrUndefined(this.availabilityGroupName)) {
      data['AvailabilityGroup_Name'] = this.availabilityGroupName;
    }

    data['Module_Code'] = this.moduleCode;

    data['Method_Code'] = this.methodCode;

    data['Assigned'] = this.assigned;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.AvailabilityGroupShippingMethodUpdateAssigned(this, httpResponse, data);
  }
}

module.exports.AvailabilityGroupShippingMethodUpdateAssigned = AvailabilityGroupShippingMethodUpdateAssigned;