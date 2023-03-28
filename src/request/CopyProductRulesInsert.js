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
 * Handles API Request CopyProductRules_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/copyproductrules_insert
 * @class
 */
class CopyProductRulesInsert extends Request {
  /**
   * CopyProductRulesInsert Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'CopyProductRules_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.name = null;
    this.coreProductData = null;
    this.attributes = null;
    this.categoryAssignments = null;
    this.inventorySettings = null;
    this.inventoryLevel = null;
    this.images = null;
    this.relatedProducts = null;
    this.upsale = null;
    this.availabilityGroupAssignments = null;
    this.priceGroupAssignments = null;
    this.digitalDownloadSettings = null;
    this.giftCertificateSales = null;
    this.subscriptionSettings = null;
    this.paymentRules = null;
    this.shippingRules = null;
    this.productKits = null;
    this.productVariants = null;
  }

  /**
   * Get Name.
   * @returns {string}
   */
  getName() {
    return this.name;
  }

  /**
   * Get CoreProductData.
   * @returns {boolean}
   */
  getCoreProductData() {
    return this.coreProductData;
  }

  /**
   * Get Attributes.
   * @returns {boolean}
   */
  getAttributes() {
    return this.attributes;
  }

  /**
   * Get CategoryAssignments.
   * @returns {boolean}
   */
  getCategoryAssignments() {
    return this.categoryAssignments;
  }

  /**
   * Get InventorySettings.
   * @returns {boolean}
   */
  getInventorySettings() {
    return this.inventorySettings;
  }

  /**
   * Get InventoryLevel.
   * @returns {boolean}
   */
  getInventoryLevel() {
    return this.inventoryLevel;
  }

  /**
   * Get Images.
   * @returns {boolean}
   */
  getImages() {
    return this.images;
  }

  /**
   * Get RelatedProducts.
   * @returns {boolean}
   */
  getRelatedProducts() {
    return this.relatedProducts;
  }

  /**
   * Get Upsale.
   * @returns {boolean}
   */
  getUpsale() {
    return this.upsale;
  }

  /**
   * Get AvailabilityGroupAssignments.
   * @returns {boolean}
   */
  getAvailabilityGroupAssignments() {
    return this.availabilityGroupAssignments;
  }

  /**
   * Get PriceGroupAssignments.
   * @returns {boolean}
   */
  getPriceGroupAssignments() {
    return this.priceGroupAssignments;
  }

  /**
   * Get DigitalDownloadSettings.
   * @returns {boolean}
   */
  getDigitalDownloadSettings() {
    return this.digitalDownloadSettings;
  }

  /**
   * Get GiftCertificateSales.
   * @returns {boolean}
   */
  getGiftCertificateSales() {
    return this.giftCertificateSales;
  }

  /**
   * Get SubscriptionSettings.
   * @returns {boolean}
   */
  getSubscriptionSettings() {
    return this.subscriptionSettings;
  }

  /**
   * Get PaymentRules.
   * @returns {boolean}
   */
  getPaymentRules() {
    return this.paymentRules;
  }

  /**
   * Get ShippingRules.
   * @returns {boolean}
   */
  getShippingRules() {
    return this.shippingRules;
  }

  /**
   * Get ProductKits.
   * @returns {boolean}
   */
  getProductKits() {
    return this.productKits;
  }

  /**
   * Get ProductVariants.
   * @returns {boolean}
   */
  getProductVariants() {
    return this.productVariants;
  }

  /**
   * Set Name.
   * @param {string} name
   * @returns {CopyProductRulesInsert}
   */
  setName(name) {
    this.name = name;
    return this;
  }

  /**
   * Set CoreProductData.
   * @param {boolean} coreProductData
   * @returns {CopyProductRulesInsert}
   */
  setCoreProductData(coreProductData) {
    this.coreProductData = coreProductData;
    return this;
  }

  /**
   * Set Attributes.
   * @param {boolean} attributes
   * @returns {CopyProductRulesInsert}
   */
  setAttributes(attributes) {
    this.attributes = attributes;
    return this;
  }

  /**
   * Set CategoryAssignments.
   * @param {boolean} categoryAssignments
   * @returns {CopyProductRulesInsert}
   */
  setCategoryAssignments(categoryAssignments) {
    this.categoryAssignments = categoryAssignments;
    return this;
  }

  /**
   * Set InventorySettings.
   * @param {boolean} inventorySettings
   * @returns {CopyProductRulesInsert}
   */
  setInventorySettings(inventorySettings) {
    this.inventorySettings = inventorySettings;
    return this;
  }

  /**
   * Set InventoryLevel.
   * @param {boolean} inventoryLevel
   * @returns {CopyProductRulesInsert}
   */
  setInventoryLevel(inventoryLevel) {
    this.inventoryLevel = inventoryLevel;
    return this;
  }

  /**
   * Set Images.
   * @param {boolean} images
   * @returns {CopyProductRulesInsert}
   */
  setImages(images) {
    this.images = images;
    return this;
  }

  /**
   * Set RelatedProducts.
   * @param {boolean} relatedProducts
   * @returns {CopyProductRulesInsert}
   */
  setRelatedProducts(relatedProducts) {
    this.relatedProducts = relatedProducts;
    return this;
  }

  /**
   * Set Upsale.
   * @param {boolean} upsale
   * @returns {CopyProductRulesInsert}
   */
  setUpsale(upsale) {
    this.upsale = upsale;
    return this;
  }

  /**
   * Set AvailabilityGroupAssignments.
   * @param {boolean} availabilityGroupAssignments
   * @returns {CopyProductRulesInsert}
   */
  setAvailabilityGroupAssignments(availabilityGroupAssignments) {
    this.availabilityGroupAssignments = availabilityGroupAssignments;
    return this;
  }

  /**
   * Set PriceGroupAssignments.
   * @param {boolean} priceGroupAssignments
   * @returns {CopyProductRulesInsert}
   */
  setPriceGroupAssignments(priceGroupAssignments) {
    this.priceGroupAssignments = priceGroupAssignments;
    return this;
  }

  /**
   * Set DigitalDownloadSettings.
   * @param {boolean} digitalDownloadSettings
   * @returns {CopyProductRulesInsert}
   */
  setDigitalDownloadSettings(digitalDownloadSettings) {
    this.digitalDownloadSettings = digitalDownloadSettings;
    return this;
  }

  /**
   * Set GiftCertificateSales.
   * @param {boolean} giftCertificateSales
   * @returns {CopyProductRulesInsert}
   */
  setGiftCertificateSales(giftCertificateSales) {
    this.giftCertificateSales = giftCertificateSales;
    return this;
  }

  /**
   * Set SubscriptionSettings.
   * @param {boolean} subscriptionSettings
   * @returns {CopyProductRulesInsert}
   */
  setSubscriptionSettings(subscriptionSettings) {
    this.subscriptionSettings = subscriptionSettings;
    return this;
  }

  /**
   * Set PaymentRules.
   * @param {boolean} paymentRules
   * @returns {CopyProductRulesInsert}
   */
  setPaymentRules(paymentRules) {
    this.paymentRules = paymentRules;
    return this;
  }

  /**
   * Set ShippingRules.
   * @param {boolean} shippingRules
   * @returns {CopyProductRulesInsert}
   */
  setShippingRules(shippingRules) {
    this.shippingRules = shippingRules;
    return this;
  }

  /**
   * Set ProductKits.
   * @param {boolean} productKits
   * @returns {CopyProductRulesInsert}
   */
  setProductKits(productKits) {
    this.productKits = productKits;
    return this;
  }

  /**
   * Set ProductVariants.
   * @param {boolean} productVariants
   * @returns {CopyProductRulesInsert}
   */
  setProductVariants(productVariants) {
    this.productVariants = productVariants;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['Name'] = this.name;

    if (!util.isNullOrUndefined(this.coreProductData)) {
      data['CoreProductData'] = this.coreProductData;
    }

    if (!util.isNullOrUndefined(this.attributes)) {
      data['Attributes'] = this.attributes;
    }

    if (!util.isNullOrUndefined(this.categoryAssignments)) {
      data['CategoryAssignments'] = this.categoryAssignments;
    }

    if (!util.isNullOrUndefined(this.inventorySettings)) {
      data['InventorySettings'] = this.inventorySettings;
    }

    if (!util.isNullOrUndefined(this.inventoryLevel)) {
      data['InventoryLevel'] = this.inventoryLevel;
    }

    if (!util.isNullOrUndefined(this.images)) {
      data['Images'] = this.images;
    }

    if (!util.isNullOrUndefined(this.relatedProducts)) {
      data['RelatedProducts'] = this.relatedProducts;
    }

    if (!util.isNullOrUndefined(this.upsale)) {
      data['Upsale'] = this.upsale;
    }

    if (!util.isNullOrUndefined(this.availabilityGroupAssignments)) {
      data['AvailabilityGroupAssignments'] = this.availabilityGroupAssignments;
    }

    if (!util.isNullOrUndefined(this.priceGroupAssignments)) {
      data['PriceGroupAssignments'] = this.priceGroupAssignments;
    }

    if (!util.isNullOrUndefined(this.digitalDownloadSettings)) {
      data['DigitalDownloadSettings'] = this.digitalDownloadSettings;
    }

    if (!util.isNullOrUndefined(this.giftCertificateSales)) {
      data['GiftCertificateSales'] = this.giftCertificateSales;
    }

    if (!util.isNullOrUndefined(this.subscriptionSettings)) {
      data['SubscriptionSettings'] = this.subscriptionSettings;
    }

    if (!util.isNullOrUndefined(this.paymentRules)) {
      data['PaymentRules'] = this.paymentRules;
    }

    if (!util.isNullOrUndefined(this.shippingRules)) {
      data['ShippingRules'] = this.shippingRules;
    }

    if (!util.isNullOrUndefined(this.productKits)) {
      data['ProductKits'] = this.productKits;
    }

    if (!util.isNullOrUndefined(this.productVariants)) {
      data['ProductVariants'] = this.productVariants;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.CopyProductRulesInsert(this, httpResponse, data);
  }
}

module.exports.CopyProductRulesInsert = CopyProductRulesInsert;