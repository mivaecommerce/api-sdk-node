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
const { ProductListLoadQuery } = require('./ProductListLoadQuery')

/** 
 * Handles API Request PriceGroupProductList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/pricegroupproductlist_load_query
 * @class
 */
class PriceGroupProductListLoadQuery extends ProductListLoadQuery {
  /**
   * PriceGroupProductListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?PriceGroup} priceGroup
   */
  constructor(client, priceGroup = null) {
    super(client);
    this.function = 'PriceGroupProductList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.priceGroupId = null;
    this.priceGroupName = null;
    this.assigned = null;
    this.unassigned = null;

    if (util.isInstanceOf(priceGroup, models.PriceGroup)) {
      if (priceGroup.getId()) {
        this.setPriceGroupId(priceGroup.getId());
      } else if (priceGroup.getName()) {
        this.setPriceGroupName(priceGroup.getName());
      }
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
   * Get PriceGroup_Name.
   * @returns {string}
   */
  getPriceGroupName() {
    return this.priceGroupName;
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
   * Set PriceGroup_ID.
   * @param {number} priceGroupId
   * @returns {PriceGroupProductListLoadQuery}
   */
  setPriceGroupId(priceGroupId) {
    this.priceGroupId = priceGroupId;
    return this;
  }

  /**
   * Set PriceGroup_Name.
   * @param {string} priceGroupName
   * @returns {PriceGroupProductListLoadQuery}
   */
  setPriceGroupName(priceGroupName) {
    this.priceGroupName = priceGroupName;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {PriceGroupProductListLoadQuery}
   */
  setAssigned(assigned) {
    this.assigned = assigned;
    return this;
  }

  /**
   * Set Unassigned.
   * @param {boolean} unassigned
   * @returns {PriceGroupProductListLoadQuery}
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

    if (!util.isNullOrUndefined(this.priceGroupId)) {
      data['PriceGroup_ID'] = this.priceGroupId;
    } else if (!util.isNullOrUndefined(this.priceGroupName)) {
      data['PriceGroup_Name'] = this.priceGroupName;
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
    return new responses.PriceGroupProductListLoadQuery(this, httpResponse, data);
  }
}

module.exports.PriceGroupProductListLoadQuery = PriceGroupProductListLoadQuery;