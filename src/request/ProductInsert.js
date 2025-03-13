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
const Decimal = require('decimal.js-light');

/** 
 * Handles API Request Product_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/product_insert
 * @class
 */
class ProductInsert extends Request {
  /**
   * ProductInsert Constructor.
   * @param {?BaseClient} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client);
    this.function = 'Product_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.productCode = null;
    this.productSku = null;
    this.productName = null;
    this.productDescription = null;
    this.productCanonicalCategoryCode = null;
    this.productAlternateDisplayPage = null;
    this.productPageTitle = null;
    this.productThumbnail = null;
    this.productImage = null;
    this.productPrice = null;
    this.productCost = null;
    this.productWeight = null;
    this.productInventory = null;
    this.productTaxable = null;
    this.productActive = null;
    this.customFieldValues = new models.CustomFieldValues();

    if (util.isInstanceOf(product, models.Product)) {
      this.setProductCode(product.getCode());
      this.setProductSku(product.getSku());
      this.setProductName(product.getName());
      this.setProductDescription(product.getDescription());
      this.setProductCanonicalCategoryCode(product.getCanonicalCategoryCode());
      this.setProductAlternateDisplayPage(product.getPageCode());
      this.setProductPageTitle(product.getPageTitle());
      this.setProductThumbnail(product.getThumbnail());
      this.setProductImage(product.getImage());
      this.setProductPrice(product.getPrice());
      this.setProductCost(product.getCost());
      this.setProductWeight(product.getWeight());
      this.setProductInventory(product.getProductInventory());
      this.setProductTaxable(product.getTaxable());
      this.setProductActive(product.getActive());

      if (product.getCustomFieldValues()) {
        this.setCustomFieldValues(product.getCustomFieldValues());
      }
    }
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
   * Get Product_Name.
   * @returns {string}
   */
  getProductName() {
    return this.productName;
  }

  /**
   * Get Product_Description.
   * @returns {string}
   */
  getProductDescription() {
    return this.productDescription;
  }

  /**
   * Get Product_Canonical_Category_Code.
   * @returns {string}
   */
  getProductCanonicalCategoryCode() {
    return this.productCanonicalCategoryCode;
  }

  /**
   * Get Product_Alternate_Display_Page.
   * @returns {string}
   */
  getProductAlternateDisplayPage() {
    return this.productAlternateDisplayPage;
  }

  /**
   * Get Product_Page_Title.
   * @returns {string}
   */
  getProductPageTitle() {
    return this.productPageTitle;
  }

  /**
   * Get Product_Thumbnail.
   * @returns {string}
   */
  getProductThumbnail() {
    return this.productThumbnail;
  }

  /**
   * Get Product_Image.
   * @returns {string}
   */
  getProductImage() {
    return this.productImage;
  }

  /**
   * Get Product_Price.
   * @returns {Decimal}
   */
  getProductPrice() {
    return this.productPrice;
  }

  /**
   * Get Product_Cost.
   * @returns {Decimal}
   */
  getProductCost() {
    return this.productCost;
  }

  /**
   * Get Product_Weight.
   * @returns {Decimal}
   */
  getProductWeight() {
    return this.productWeight;
  }

  /**
   * Get Product_Inventory.
   * @returns {number}
   */
  getProductInventory() {
    return this.productInventory;
  }

  /**
   * Get Product_Taxable.
   * @returns {boolean}
   */
  getProductTaxable() {
    return this.productTaxable;
  }

  /**
   * Get Product_Active.
   * @returns {boolean}
   */
  getProductActive() {
    return this.productActive;
  }

  /**
   * Get CustomField_Values.
   * @returns {?CustomFieldValues}
   */
  getCustomFieldValues() {
    return this.customFieldValues;
  }

  /**
   * Set Product_Code.
   * @param {string} productCode
   * @returns {ProductInsert}
   */
  setProductCode(productCode) {
    this.productCode = productCode;
    return this;
  }

  /**
   * Set Product_SKU.
   * @param {string} productSku
   * @returns {ProductInsert}
   */
  setProductSku(productSku) {
    this.productSku = productSku;
    return this;
  }

  /**
   * Set Product_Name.
   * @param {string} productName
   * @returns {ProductInsert}
   */
  setProductName(productName) {
    this.productName = productName;
    return this;
  }

  /**
   * Set Product_Description.
   * @param {string} productDescription
   * @returns {ProductInsert}
   */
  setProductDescription(productDescription) {
    this.productDescription = productDescription;
    return this;
  }

  /**
   * Set Product_Canonical_Category_Code.
   * @param {string} productCanonicalCategoryCode
   * @returns {ProductInsert}
   */
  setProductCanonicalCategoryCode(productCanonicalCategoryCode) {
    this.productCanonicalCategoryCode = productCanonicalCategoryCode;
    return this;
  }

  /**
   * Set Product_Alternate_Display_Page.
   * @param {string} productAlternateDisplayPage
   * @returns {ProductInsert}
   */
  setProductAlternateDisplayPage(productAlternateDisplayPage) {
    this.productAlternateDisplayPage = productAlternateDisplayPage;
    return this;
  }

  /**
   * Set Product_Page_Title.
   * @param {string} productPageTitle
   * @returns {ProductInsert}
   */
  setProductPageTitle(productPageTitle) {
    this.productPageTitle = productPageTitle;
    return this;
  }

  /**
   * Set Product_Thumbnail.
   * @param {string} productThumbnail
   * @returns {ProductInsert}
   */
  setProductThumbnail(productThumbnail) {
    this.productThumbnail = productThumbnail;
    return this;
  }

  /**
   * Set Product_Image.
   * @param {string} productImage
   * @returns {ProductInsert}
   */
  setProductImage(productImage) {
    this.productImage = productImage;
    return this;
  }

  /**
   * Set Product_Price.
   * @param {Decimal} productPrice
   * @returns {ProductInsert}
   */
  setProductPrice(productPrice) {
    if (util.isInstanceOf(productPrice, Decimal)) {
      this.productPrice = productPrice;
    } else {
      this.productPrice = new Decimal(productPrice);
    }
    return this;
  }

  /**
   * Set Product_Cost.
   * @param {Decimal} productCost
   * @returns {ProductInsert}
   */
  setProductCost(productCost) {
    if (util.isInstanceOf(productCost, Decimal)) {
      this.productCost = productCost;
    } else {
      this.productCost = new Decimal(productCost);
    }
    return this;
  }

  /**
   * Set Product_Weight.
   * @param {Decimal} productWeight
   * @returns {ProductInsert}
   */
  setProductWeight(productWeight) {
    if (util.isInstanceOf(productWeight, Decimal)) {
      this.productWeight = productWeight;
    } else {
      this.productWeight = new Decimal(productWeight);
    }
    return this;
  }

  /**
   * Set Product_Inventory.
   * @param {number} productInventory
   * @returns {ProductInsert}
   */
  setProductInventory(productInventory) {
    this.productInventory = productInventory;
    return this;
  }

  /**
   * Set Product_Taxable.
   * @param {boolean} productTaxable
   * @returns {ProductInsert}
   */
  setProductTaxable(productTaxable) {
    this.productTaxable = productTaxable;
    return this;
  }

  /**
   * Set Product_Active.
   * @param {boolean} productActive
   * @returns {ProductInsert}
   */
  setProductActive(productActive) {
    this.productActive = productActive;
    return this;
  }

  /**
   * Set CustomField_Values.
   * @param {?CustomFieldValues} customFieldValues
   * @throws {Error}
   * @returns {ProductInsert}
   */
  setCustomFieldValues(customFieldValues) {
    if (!util.isInstanceOf(customFieldValues, models.CustomFieldValues) && util.isObject(customFieldValues)) {
      customFieldValues = new models.CustomFieldValues(customFieldValues);
    } else if (!util.isInstanceOf(customFieldValues, models.CustomFieldValues)) {
      throw new Error(util.format('Expected instance of CustomFieldValues or an Object but got %s',
        typeof customFieldValues));
    }

    this.customFieldValues = customFieldValues;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['Product_Code'] = this.productCode;

    data['Product_SKU'] = this.productSku;

    data['Product_Name'] = this.productName;

    if (!util.isNullOrUndefined(this.productDescription)) {
      data['Product_Description'] = this.productDescription;
    }

    if (!util.isNullOrUndefined(this.productCanonicalCategoryCode)) {
      data['Product_Canonical_Category_Code'] = this.productCanonicalCategoryCode;
    }

    if (!util.isNullOrUndefined(this.productAlternateDisplayPage)) {
      data['Product_Alternate_Display_Page'] = this.productAlternateDisplayPage;
    }

    if (!util.isNullOrUndefined(this.productPageTitle)) {
      data['Product_Page_Title'] = this.productPageTitle;
    }

    if (!util.isNullOrUndefined(this.productThumbnail)) {
      data['Product_Thumbnail'] = this.productThumbnail;
    }

    if (!util.isNullOrUndefined(this.productImage)) {
      data['Product_Image'] = this.productImage;
    }

    if (!util.isNullOrUndefined(this.productPrice)) {
      data['Product_Price'] = this.productPrice;
    }

    if (!util.isNullOrUndefined(this.productCost)) {
      data['Product_Cost'] = this.productCost;
    }

    if (!util.isNullOrUndefined(this.productWeight)) {
      data['Product_Weight'] = this.productWeight;
    }

    if (!util.isNullOrUndefined(this.productInventory)) {
      data['Product_Inventory'] = this.productInventory;
    }

    if (!util.isNullOrUndefined(this.productTaxable)) {
      data['Product_Taxable'] = this.productTaxable;
    }

    if (!util.isNullOrUndefined(this.productActive)) {
      data['Product_Active'] = this.productActive;
    }

    if (this.customFieldValues && util.isObject(this.customFieldValues)) {
      data['CustomField_Values'] = this.customFieldValues.toObject();
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ProductInsert(this, httpResponse, data);
  }
}

module.exports.ProductInsert = ProductInsert;