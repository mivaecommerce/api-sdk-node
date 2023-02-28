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
 * Handles API Request AvailabilityGroup_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/availabilitygroup_insert
 * @class
 */
class AvailabilityGroupInsert extends Request {
  /**
   * AvailabilityGroupInsert Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'AvailabilityGroup_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.availabilityGroupName = null;
    this.availabilityGroupTaxExempt = null;
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
   * Set AvailabilityGroup_Name.
   * @param {string} availabilityGroupName
   * @returns {AvailabilityGroupInsert}
   */
  setAvailabilityGroupName(availabilityGroupName) {
    this.availabilityGroupName = availabilityGroupName;
    return this;
  }

  /**
   * Set AvailabilityGroup_Tax_Exempt.
   * @param {boolean} availabilityGroupTaxExempt
   * @returns {AvailabilityGroupInsert}
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
    return new responses.AvailabilityGroupInsert(this, httpResponse, data);
  }
}

module.exports.AvailabilityGroupInsert = AvailabilityGroupInsert;