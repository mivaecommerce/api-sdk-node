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

/** INVENTORY_CHOICE constants. */
/** @ignore */
const INVENTORY_CHOICE_DEFAULT = 'Default';
/** @ignore */
const INVENTORY_CHOICE_YES = 'Yes';
/** @ignore */
const INVENTORY_CHOICE_NO = 'No';

/** 
 * Handles API Request InventoryProductSettings_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/inventoryproductsettings_update
 * @class
 */
class InventoryProductSettingsUpdate extends Request {
  /**
   * InventoryProductSettingsUpdate Constructor.
   * @param {?BaseClient} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client);
    this.function = 'InventoryProductSettings_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productId = null;
    this.productCode = null;
    this.editProduct = null;
    this.trackLowStockLevel = null;
    this.trackOutOfStockLevel = null;
    this.hideOutOfStockProducts = null;
    this.lowStockLevel = null;
    this.outOfStockLevel = null;
    this.trackProduct = null;
    this.inStockMessageShort = null;
    this.inStockMessageLong = null;
    this.lowStockMessageShort = null;
    this.lowStockMessageLong = null;
    this.outOfStockMessageShort = null;
    this.outOfStockMessageLong = null;
    this.limitedStockMessage = null;
    this.adjustStockBy = null;
    this.currentStock = null;

    if (util.isInstanceOf(product, models.Product)) {
      if (product.getId()) {
        this.setProductId(product.getId());
      } else if (product.getCode()) {
        this.setEditProduct(product.getCode());
      }
    }
  }

  /**
   * Constant INVENTORY_CHOICE_DEFAULT
   * @returns {string}
   * @const
   * @static
   */
  static get INVENTORY_CHOICE_DEFAULT() {
    return INVENTORY_CHOICE_DEFAULT;
  }

  /**
   * Constant INVENTORY_CHOICE_YES
   * @returns {string}
   * @const
   * @static
   */
  static get INVENTORY_CHOICE_YES() {
    return INVENTORY_CHOICE_YES;
  }

  /**
   * Constant INVENTORY_CHOICE_NO
   * @returns {string}
   * @const
   * @static
   */
  static get INVENTORY_CHOICE_NO() {
    return INVENTORY_CHOICE_NO;
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
   * Get Edit_Product.
   * @returns {string}
   */
  getEditProduct() {
    return this.editProduct;
  }

  /**
   * Get TrackLowStockLevel.
   * @returns {string}
   */
  getTrackLowStockLevel() {
    return this.trackLowStockLevel;
  }

  /**
   * Get TrackOutOfStockLevel.
   * @returns {string}
   */
  getTrackOutOfStockLevel() {
    return this.trackOutOfStockLevel;
  }

  /**
   * Get HideOutOfStockProducts.
   * @returns {string}
   */
  getHideOutOfStockProducts() {
    return this.hideOutOfStockProducts;
  }

  /**
   * Get LowStockLevel.
   * @returns {number}
   */
  getLowStockLevel() {
    return this.lowStockLevel;
  }

  /**
   * Get OutOfStockLevel.
   * @returns {number}
   */
  getOutOfStockLevel() {
    return this.outOfStockLevel;
  }

  /**
   * Get TrackProduct.
   * @returns {boolean}
   */
  getTrackProduct() {
    return this.trackProduct;
  }

  /**
   * Get InStockMessageShort.
   * @returns {string}
   */
  getInStockMessageShort() {
    return this.inStockMessageShort;
  }

  /**
   * Get InStockMessageLong.
   * @returns {string}
   */
  getInStockMessageLong() {
    return this.inStockMessageLong;
  }

  /**
   * Get LowStockMessageShort.
   * @returns {string}
   */
  getLowStockMessageShort() {
    return this.lowStockMessageShort;
  }

  /**
   * Get LowStockMessageLong.
   * @returns {string}
   */
  getLowStockMessageLong() {
    return this.lowStockMessageLong;
  }

  /**
   * Get OutOfStockMessageShort.
   * @returns {string}
   */
  getOutOfStockMessageShort() {
    return this.outOfStockMessageShort;
  }

  /**
   * Get OutOfStockMessageLong.
   * @returns {string}
   */
  getOutOfStockMessageLong() {
    return this.outOfStockMessageLong;
  }

  /**
   * Get LimitedStockMessage.
   * @returns {string}
   */
  getLimitedStockMessage() {
    return this.limitedStockMessage;
  }

  /**
   * Get AdjustStockBy.
   * @returns {number}
   */
  getAdjustStockBy() {
    return this.adjustStockBy;
  }

  /**
   * Get CurrentStock.
   * @returns {number}
   */
  getCurrentStock() {
    return this.currentStock;
  }

  /**
   * Set Product_ID.
   * @param {number} productId
   * @returns {InventoryProductSettingsUpdate}
   */
  setProductId(productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {InventoryProductSettingsUpdate}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Edit_Product.
   * @param {string} editProduct
   * @returns {InventoryProductSettingsUpdate}
   */
  setEditProduct(editProduct) {
    this.editProduct = editProduct;
    return this;
  }

  /**
   * Set TrackLowStockLevel.
   * @param {string} trackLowStockLevel
   * @returns {InventoryProductSettingsUpdate}
   */
  setTrackLowStockLevel(trackLowStockLevel) {
    this.trackLowStockLevel = trackLowStockLevel;
    return this;
  }

  /**
   * Set TrackOutOfStockLevel.
   * @param {string} trackOutOfStockLevel
   * @returns {InventoryProductSettingsUpdate}
   */
  setTrackOutOfStockLevel(trackOutOfStockLevel) {
    this.trackOutOfStockLevel = trackOutOfStockLevel;
    return this;
  }

  /**
   * Set HideOutOfStockProducts.
   * @param {string} hideOutOfStockProducts
   * @returns {InventoryProductSettingsUpdate}
   */
  setHideOutOfStockProducts(hideOutOfStockProducts) {
    this.hideOutOfStockProducts = hideOutOfStockProducts;
    return this;
  }

  /**
   * Set LowStockLevel.
   * @param {number} lowStockLevel
   * @returns {InventoryProductSettingsUpdate}
   */
  setLowStockLevel(lowStockLevel) {
    this.lowStockLevel = lowStockLevel;
    return this;
  }

  /**
   * Set OutOfStockLevel.
   * @param {number} outOfStockLevel
   * @returns {InventoryProductSettingsUpdate}
   */
  setOutOfStockLevel(outOfStockLevel) {
    this.outOfStockLevel = outOfStockLevel;
    return this;
  }

  /**
   * Set TrackProduct.
   * @param {boolean} trackProduct
   * @returns {InventoryProductSettingsUpdate}
   */
  setTrackProduct(trackProduct) {
    this.trackProduct = trackProduct;
    return this;
  }

  /**
   * Set InStockMessageShort.
   * @param {string} inStockMessageShort
   * @returns {InventoryProductSettingsUpdate}
   */
  setInStockMessageShort(inStockMessageShort) {
    this.inStockMessageShort = inStockMessageShort;
    return this;
  }

  /**
   * Set InStockMessageLong.
   * @param {string} inStockMessageLong
   * @returns {InventoryProductSettingsUpdate}
   */
  setInStockMessageLong(inStockMessageLong) {
    this.inStockMessageLong = inStockMessageLong;
    return this;
  }

  /**
   * Set LowStockMessageShort.
   * @param {string} lowStockMessageShort
   * @returns {InventoryProductSettingsUpdate}
   */
  setLowStockMessageShort(lowStockMessageShort) {
    this.lowStockMessageShort = lowStockMessageShort;
    return this;
  }

  /**
   * Set LowStockMessageLong.
   * @param {string} lowStockMessageLong
   * @returns {InventoryProductSettingsUpdate}
   */
  setLowStockMessageLong(lowStockMessageLong) {
    this.lowStockMessageLong = lowStockMessageLong;
    return this;
  }

  /**
   * Set OutOfStockMessageShort.
   * @param {string} outOfStockMessageShort
   * @returns {InventoryProductSettingsUpdate}
   */
  setOutOfStockMessageShort(outOfStockMessageShort) {
    this.outOfStockMessageShort = outOfStockMessageShort;
    return this;
  }

  /**
   * Set OutOfStockMessageLong.
   * @param {string} outOfStockMessageLong
   * @returns {InventoryProductSettingsUpdate}
   */
  setOutOfStockMessageLong(outOfStockMessageLong) {
    this.outOfStockMessageLong = outOfStockMessageLong;
    return this;
  }

  /**
   * Set LimitedStockMessage.
   * @param {string} limitedStockMessage
   * @returns {InventoryProductSettingsUpdate}
   */
  setLimitedStockMessage(limitedStockMessage) {
    this.limitedStockMessage = limitedStockMessage;
    return this;
  }

  /**
   * Set AdjustStockBy.
   * @param {number} adjustStockBy
   * @returns {InventoryProductSettingsUpdate}
   */
  setAdjustStockBy(adjustStockBy) {
    this.adjustStockBy = adjustStockBy;
    return this;
  }

  /**
   * Set CurrentStock.
   * @param {number} currentStock
   * @returns {InventoryProductSettingsUpdate}
   */
  setCurrentStock(currentStock) {
    this.currentStock = currentStock;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.productId)) {
      data['Product_ID'] = this.productId;
    } else if (!util.isNullOrUndefined(this.productCode)) {
      data['Product_Code'] = this.productCode;
    } else if (!util.isNullOrUndefined(this.editProduct)) {
      data['Edit_Product'] = this.editProduct;
    }

    if (!util.isNullOrUndefined(this.trackLowStockLevel)) {
      data['TrackLowStockLevel'] = this.trackLowStockLevel;
    }

    if (!util.isNullOrUndefined(this.trackOutOfStockLevel)) {
      data['TrackOutOfStockLevel'] = this.trackOutOfStockLevel;
    }

    if (!util.isNullOrUndefined(this.hideOutOfStockProducts)) {
      data['HideOutOfStockProducts'] = this.hideOutOfStockProducts;
    }

    if (!util.isNullOrUndefined(this.lowStockLevel)) {
      data['LowStockLevel'] = this.lowStockLevel;
    }

    if (!util.isNullOrUndefined(this.outOfStockLevel)) {
      data['OutOfStockLevel'] = this.outOfStockLevel;
    }

    if (!util.isNullOrUndefined(this.trackProduct)) {
      data['TrackProduct'] = this.trackProduct;
    }

    if (!util.isNullOrUndefined(this.inStockMessageShort)) {
      data['InStockMessageShort'] = this.inStockMessageShort;
    }

    if (!util.isNullOrUndefined(this.inStockMessageLong)) {
      data['InStockMessageLong'] = this.inStockMessageLong;
    }

    if (!util.isNullOrUndefined(this.lowStockMessageShort)) {
      data['LowStockMessageShort'] = this.lowStockMessageShort;
    }

    if (!util.isNullOrUndefined(this.lowStockMessageLong)) {
      data['LowStockMessageLong'] = this.lowStockMessageLong;
    }

    if (!util.isNullOrUndefined(this.outOfStockMessageShort)) {
      data['OutOfStockMessageShort'] = this.outOfStockMessageShort;
    }

    if (!util.isNullOrUndefined(this.outOfStockMessageLong)) {
      data['OutOfStockMessageLong'] = this.outOfStockMessageLong;
    }

    if (!util.isNullOrUndefined(this.limitedStockMessage)) {
      data['LimitedStockMessage'] = this.limitedStockMessage;
    }

    if (!util.isNullOrUndefined(this.adjustStockBy)) {
      data['AdjustStockBy'] = this.adjustStockBy;
    }

    if (!util.isNullOrUndefined(this.currentStock)) {
      data['CurrentStock'] = this.currentStock;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.InventoryProductSettingsUpdate(this, httpResponse, data);
  }
}

module.exports.InventoryProductSettingsUpdate = InventoryProductSettingsUpdate;