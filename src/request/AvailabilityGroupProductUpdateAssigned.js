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
 * Handles API Request AvailabilityGroupProduct_Update_Assigned. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/availabilitygroupproduct_update_assigned
 * @class
 */
class AvailabilityGroupProductUpdateAssigned extends Request {
  /**
   * AvailabilityGroupProductUpdateAssigned Constructor.
   * @param {?BaseClient} client
   * @param {?AvailabilityGroup} availabilityGroup
   */
  constructor(client, availabilityGroup = null) {
    super(client);
    this.function = 'AvailabilityGroupProduct_Update_Assigned';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.availabilityGroupId = null;
    this.editAvailabilityGroup = null;
    this.availabilityGroupName = null;
    this.productId = null;
    this.productCode = null;
    this.productSku = null;
    this.editProduct = null;
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
   * Get Product_ID.
   * @returns {number}
   */
  getProductId() {
    return this.productId;
  }

  /**
   * Get Product_Code.
   * @returns {string}
   */
  getProductCode() {
    return this.productCode;
  }

  /**
   * Get Product_SKU.
   * @returns {string}
   */
  getProductSku() {
    return this.productSku;
  }

  /**
   * Get Edit_Product.
   * @returns {string}
   */
  getEditProduct() {
    return this.editProduct;
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
   * @returns {AvailabilityGroupProductUpdateAssigned}
   */
  setAvailabilityGroupId(availabilityGroupId) {
    this.availabilityGroupId = availabilityGroupId;
    return this;
  }

  /**
   * Set Edit_AvailabilityGroup.
   * @param {string} editAvailabilityGroup
   * @returns {AvailabilityGroupProductUpdateAssigned}
   */
  setEditAvailabilityGroup(editAvailabilityGroup) {
    this.editAvailabilityGroup = editAvailabilityGroup;
    return this;
  }

  /**
   * Set AvailabilityGroup_Name.
   * @param {string} availabilityGroupName
   * @returns {AvailabilityGroupProductUpdateAssigned}
   */
  setAvailabilityGroupName(availabilityGroupName) {
    this.availabilityGroupName = availabilityGroupName;
    return this;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {AvailabilityGroupProductUpdateAssigned}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {AvailabilityGroupProductUpdateAssigned}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Product_SKU.
   * @param {string} productSku
   * @returns {AvailabilityGroupProductUpdateAssigned}
   */
  setProductSku(productSku) {
    this.productSku = productSku;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {AvailabilityGroupProductUpdateAssigned}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set Assigned.
   * @param {boolean} assigned
   * @returns {AvailabilityGroupProductUpdateAssigned}
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

    if (!util.isNullOrUndefined(this.productId)) {
      data['Product_ID'] = this.productId;
    } else if (!util.isNullOrUndefined(this.editProduct)) {
      data['Edit_Product'] = this.editProduct;
    } else if (!util.isNullOrUndefined(this.productCode)) {
      data['Product_Code'] = this.productCode;
    } else if (!util.isNullOrUndefined(this.productSku)) {
      data['Product_SKU'] = this.productSku;
    }

    data['Assigned'] = this.assigned;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.AvailabilityGroupProductUpdateAssigned(this, httpResponse, data);
  }
}

module.exports.AvailabilityGroupProductUpdateAssigned = AvailabilityGroupProductUpdateAssigned;