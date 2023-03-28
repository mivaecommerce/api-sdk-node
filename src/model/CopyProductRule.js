/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** 
 * CopyProductRule data model.
 * @class
 */
class CopyProductRule extends Model {
  /**
   * CopyProductRule Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }
  /**
   * Get id.
   * @returns {number}
   */
  getId() {
    return this.getField('id', 0);
  }
  
  /**
   * Get name.
   * @returns {string}
   */
  getName() {
    return this.getField('name');
  }
  
  /**
   * Get product.
   * @returns {boolean}
   */
  getCoreProductData() {
    return this.getField('product', false);
  }
  
  /**
   * Get attributes.
   * @returns {boolean}
   */
  getAttributes() {
    return this.getField('attributes', false);
  }
  
  /**
   * Get categories.
   * @returns {boolean}
   */
  getCategoryAssignments() {
    return this.getField('categories', false);
  }
  
  /**
   * Get invset.
   * @returns {boolean}
   */
  getInventorySettings() {
    return this.getField('invset', false);
  }
  
  /**
   * Get invlevel.
   * @returns {boolean}
   */
  getInventoryLevel() {
    return this.getField('invlevel', false);
  }
  
  /**
   * Get images.
   * @returns {boolean}
   */
  getImages() {
    return this.getField('images', false);
  }
  
  /**
   * Get relprod.
   * @returns {boolean}
   */
  getRelatedProducts() {
    return this.getField('relprod', false);
  }
  
  /**
   * Get upsale.
   * @returns {boolean}
   */
  getUpsale() {
    return this.getField('upsale', false);
  }
  
  /**
   * Get availgroup.
   * @returns {boolean}
   */
  getAvailabilityGroupAssignments() {
    return this.getField('availgroup', false);
  }
  
  /**
   * Get pricegroup.
   * @returns {boolean}
   */
  getPriceGroupAssignments() {
    return this.getField('pricegroup', false);
  }
  
  /**
   * Get ddownload.
   * @returns {boolean}
   */
  getDigitalDownloadSettings() {
    return this.getField('ddownload', false);
  }
  
  /**
   * Get giftcert.
   * @returns {boolean}
   */
  getGiftCertificateSales() {
    return this.getField('giftcert', false);
  }
  
  /**
   * Get subscrip.
   * @returns {boolean}
   */
  getSubscriptionSettings() {
    return this.getField('subscrip', false);
  }
  
  /**
   * Get payment.
   * @returns {boolean}
   */
  getPaymentRules() {
    return this.getField('payment', false);
  }
  
  /**
   * Get shipping.
   * @returns {boolean}
   */
  getShippingRules() {
    return this.getField('shipping', false);
  }
  
  /**
   * Get kit.
   * @returns {boolean}
   */
  getProductKits() {
    return this.getField('kit', false);
  }
  
  /**
   * Get variants.
   * @returns {boolean}
   */
  getProductVariants() {
    return this.getField('variants', false);
  }
}

module.exports.CopyProductRule = CopyProductRule;