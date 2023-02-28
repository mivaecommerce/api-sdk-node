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
 * Handles API Request AvailabilityGroup_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/availabilitygroup_update
 * @class
 */
class AvailabilityGroupUpdate extends Request {
  /**
   * AvailabilityGroupUpdate Constructor.
   * @param {?BaseClient} client
   * @param {?AvailabilityGroup} availabilityGroup
   */
  constructor(client, availabilityGroup = null) {
    super(client);
    this.function = 'AvailabilityGroup_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.availabilityGroupId = null;
    this.editAvailabilityGroup = null;
    this.availabilityGroupName = null;
    this.availabilityGroupTaxExempt = null;

    if (util.isInstanceOf(availabilityGroup, models.AvailabilityGroup)) {
      if (availabilityGroup.getId()) {
        this.setAvailabilityGroupId(availabilityGroup.getId());
      }

      this.setAvailabilityGroupTaxExempt(availabilityGroup.getTaxExempt());
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
   * Get AvailabilityGroup_Tax_Exempt.
   * @returns {boolean}
   */
  getAvailabilityGroupTaxExempt() {
    return this.availabilityGroupTaxExempt;
  }

  /**
   * Set AvailabilityGroup_ID.
   * @param {number} availabilityGroupId
   * @returns {AvailabilityGroupUpdate}
   */
  setAvailabilityGroupId(availabilityGroupId) {
    this.availabilityGroupId = availabilityGroupId;
    return this;
  }

  /**
   * Set Edit_AvailabilityGroup.
   * @param {string} editAvailabilityGroup
   * @returns {AvailabilityGroupUpdate}
   */
  setEditAvailabilityGroup(editAvailabilityGroup) {
    this.editAvailabilityGroup = editAvailabilityGroup;
    return this;
  }

  /**
   * Set AvailabilityGroup_Name.
   * @param {string} availabilityGroupName
   * @returns {AvailabilityGroupUpdate}
   */
  setAvailabilityGroupName(availabilityGroupName) {
    this.availabilityGroupName = availabilityGroupName;
    return this;
  }

  /**
   * Set AvailabilityGroup_Tax_Exempt.
   * @param {boolean} availabilityGroupTaxExempt
   * @returns {AvailabilityGroupUpdate}
   */
  setAvailabilityGroupTaxExempt(availabilityGroupTaxExempt) {
    this.availabilityGroupTaxExempt = availabilityGroupTaxExempt;
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
    }

    data['AvailabilityGroup_Name'] = this.availabilityGroupName;

    if (!util.isNullOrUndefined(this.availabilityGroupTaxExempt)) {
      data['AvailabilityGroup_Tax_Exempt'] = this.availabilityGroupTaxExempt;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.AvailabilityGroupUpdate(this, httpResponse, data);
  }
}

module.exports.AvailabilityGroupUpdate = AvailabilityGroupUpdate;