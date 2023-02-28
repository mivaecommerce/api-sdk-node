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
 * Handles API Request PriceGroup_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/pricegroup_delete
 * @class
 */
class PriceGroupDelete extends Request {
  /**
   * PriceGroupDelete Constructor.
   * @param {?BaseClient} client
   * @param {?PriceGroup} priceGroup
   */
  constructor(client, priceGroup = null) {
    super(client);
    this.function = 'PriceGroup_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.priceGroupId = null;
    this.editPriceGroup = null;
    this.priceGroupName = null;

    if (util.isInstanceOf(priceGroup, models.PriceGroup)) {
      if (priceGroup.getId()) {
        this.setPriceGroupId(priceGroup.getId());
      }

      this.setPriceGroupName(priceGroup.getName());
    }
  }

  /**
   * Get PriceGroup_ID.
   * @returns {number}
   */
  getPriceGroupId() {
    return this.priceGroupId;
  }

  /**
   * Get Edit_PriceGroup.
   * @returns {string}
   */
  getEditPriceGroup() {
    return this.editPriceGroup;
  }

  /**
   * Get PriceGroup_Name.
   * @returns {string}
   */
  getPriceGroupName() {
    return this.priceGroupName;
  }

  /**
   * Set PriceGroup_ID.
   * @param {number} priceGroupId
   * @returns {PriceGroupDelete}
   */
  setPriceGroupId(priceGroupId) {
    this.priceGroupId = priceGroupId;
    return this;
  }

  /**
   * Set Edit_PriceGroup.
   * @param {string} editPriceGroup
   * @returns {PriceGroupDelete}
   */
  setEditPriceGroup(editPriceGroup) {
    this.editPriceGroup = editPriceGroup;
    return this;
  }

  /**
   * Set PriceGroup_Name.
   * @param {string} priceGroupName
   * @returns {PriceGroupDelete}
   */
  setPriceGroupName(priceGroupName) {
    this.priceGroupName = priceGroupName;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.priceGroupId)) {
      data['PriceGroup_ID'] = this.priceGroupId;
    } else if (!util.isNullOrUndefined(this.editPriceGroup)) {
      data['Edit_PriceGroup'] = this.editPriceGroup;
    } else if (!util.isNullOrUndefined(this.priceGroupName)) {
      data['PriceGroup_Name'] = this.priceGroupName;
    }

    data['PriceGroup_Name'] = this.priceGroupName;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.PriceGroupDelete(this, httpResponse, data);
  }
}

module.exports.PriceGroupDelete = PriceGroupDelete;