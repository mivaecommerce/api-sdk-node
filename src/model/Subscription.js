/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const models = require('./../models');
const { BaseSubscription } = require('./BaseSubscription');
const Decimal = require('decimal.js-light');

/** 
 * Subscription data model.
 * @class
 */
class Subscription extends BaseSubscription {
  /**
   * Subscription Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    var i;
    var l;

    super(data);

    if (!util.isUndefined(this.options) && util.isArray(this.options)) {
      for (i = 0, l = this.options.length; i < l; i++) {
        if (!util.isInstanceOf(this.options[i], models.SubscriptionOption) && util.isObject(data['options'][i])) {
          this.options[i] = new models.SubscriptionOption(this.options[i]);
        } else if (!util.isInstanceOf(this.options[i], models.SubscriptionOption)) {
          throw new Error(util.format('Expected array of SubscriptionOption or an array of Objects but got %s',
            typeof this.options[i]));
        }
      }
    } else {
      this.options = [];
    }

    if (!util.isNullOrUndefined(this.product_price))  this.product_price = new Decimal(this.product_price);
    if (!util.isNullOrUndefined(this.product_cost))  this.product_cost = new Decimal(this.product_cost);
    if (!util.isNullOrUndefined(this.product_weight))  this.product_weight = new Decimal(this.product_weight);
  }

  /**
   * Get frequency.
   * @returns {string}
   */
  getFrequency() {
    return this.getField('frequency');
  }
  
  /**
   * Get term.
   * @returns {number}
   */
  getTerm() {
    return this.getField('term', 0);
  }
  
  /**
   * Get descrip.
   * @returns {string}
   */
  getDescription() {
    return this.getField('descrip');
  }
  
  /**
   * Get n.
   * @returns {number}
   */
  getN() {
    return this.getField('n', 0);
  }
  
  /**
   * Get fixed_dow.
   * @returns {number}
   */
  getFixedDayOfWeek() {
    return this.getField('fixed_dow', 0);
  }
  
  /**
   * Get fixed_dom.
   * @returns {number}
   */
  getFixedDayOfMonth() {
    return this.getField('fixed_dom', 0);
  }
  
  /**
   * Get sub_count.
   * @returns {number}
   */
  getSubscriptionCount() {
    return this.getField('sub_count', 0);
  }
  
  /**
   * Get method.
   * @returns {string}
   */
  getMethod() {
    return this.getField('method');
  }
  
  /**
   * Get product_code.
   * @returns {string}
   */
  getProductCode() {
    return this.getField('product_code');
  }
  
  /**
   * Get product_name.
   * @returns {string}
   */
  getProductName() {
    return this.getField('product_name');
  }
  
  /**
   * Get product_sku.
   * @returns {string}
   */
  getProductSku() {
    return this.getField('product_sku');
  }
  
  /**
   * Get product_price.
   * @returns {Decimal}
   */
  getProductPrice() {
    return this.getField('product_price', new Decimal(0.00));
  }
  
  /**
   * Get product_formatted_price.
   * @returns {string}
   */
  getProductFormattedPrice() {
    return this.getField('product_formatted_price');
  }
  
  /**
   * Get product_cost.
   * @returns {Decimal}
   */
  getProductCost() {
    return this.getField('product_cost', new Decimal(0.00));
  }
  
  /**
   * Get product_formatted_cost.
   * @returns {string}
   */
  getProductFormattedCost() {
    return this.getField('product_formatted_cost');
  }
  
  /**
   * Get product_weight.
   * @returns {Decimal}
   */
  getProductWeight() {
    return this.getField('product_weight', new Decimal(0.00));
  }
  
  /**
   * Get product_formatted_weight.
   * @returns {string}
   */
  getProductFormattedWeight() {
    return this.getField('product_formatted_weight');
  }
  
  /**
   * Get product_descrip.
   * @returns {string}
   */
  getProductDescrip() {
    return this.getField('product_descrip');
  }
  
  /**
   * Get product_taxable.
   * @returns {boolean}
   */
  getProductTaxable() {
    return this.getField('product_taxable', false);
  }
  
  /**
   * Get product_thumbnail.
   * @returns {string}
   */
  getProductThumbnail() {
    return this.getField('product_thumbnail');
  }
  
  /**
   * Get product_image.
   * @returns {string}
   */
  getProductImage() {
    return this.getField('product_image');
  }
  
  /**
   * Get product_active.
   * @returns {boolean}
   */
  getProductActive() {
    return this.getField('product_active', false);
  }
  
  /**
   * Get product_dt_created.
   * @returns {number}
   */
  getProductDateTimeCreated() {
    return this.getTimestampField('product_dt_created');
  }
  
  /**
   * Get product_dt_updated.
   * @returns {number}
   */
  getProductDateTimeUpdated() {
    return this.getTimestampField('product_dt_updated');
  }
  
  /**
   * Get product_page_title.
   * @returns {string}
   */
  getProductPageTitle() {
    return this.getField('product_page_title');
  }
  
  /**
   * Get product_page_id.
   * @returns {number}
   */
  getProductPageId() {
    return this.getField('product_page_id', 0);
  }
  
  /**
   * Get product_page_code.
   * @returns {string}
   */
  getProductPageCode() {
    return this.getField('product_page_code');
  }
  
  /**
   * Get product_cancat_id.
   * @returns {number}
   */
  getProductCanonicalCategoryId() {
    return this.getField('product_cancat_id', 0);
  }
  
  /**
   * Get product_cancat_code.
   * @returns {string}
   */
  getProductCanonicalCategoryCode() {
    return this.getField('product_cancat_code');
  }
  
  /**
   * Get product_inventory_active.
   * @returns {boolean}
   */
  getProductInventoryActive() {
    return this.getField('product_inventory_active', false);
  }
  
  /**
   * Get product_inventory.
   * @returns {number}
   */
  getProductInventory() {
    return this.getField('product_inventory', 0);
  }
  
  /**
   * Get imagetypes.
   * @returns {imagetypes}
   */
  getImageTypes() {
    // Missing imagetypes [5]
  }
  
  /**
   * Get paymentcard_lastfour.
   * @returns {string}
   */
  getPaymentCardLastFour() {
    return this.getField('paymentcard_lastfour');
  }
  
  /**
   * Get paymentcard_type.
   * @returns {string}
   */
  getPaymentCardType() {
    return this.getField('paymentcard_type');
  }
  
  /**
   * Get address_descrip.
   * @returns {string}
   */
  getAddressDescription() {
    return this.getField('address_descrip');
  }
  
  /**
   * Get address_fname.
   * @returns {string}
   */
  getAddressFirstName() {
    return this.getField('address_fname');
  }
  
  /**
   * Get address_lname.
   * @returns {string}
   */
  getAddressLastName() {
    return this.getField('address_lname');
  }
  
  /**
   * Get address_email.
   * @returns {string}
   */
  getAddressEmail() {
    return this.getField('address_email');
  }
  
  /**
   * Get address_comp.
   * @returns {string}
   */
  getAddressCompany() {
    return this.getField('address_comp');
  }
  
  /**
   * Get address_phone.
   * @returns {string}
   */
  getAddressPhone() {
    return this.getField('address_phone');
  }
  
  /**
   * Get address_fax.
   * @returns {string}
   */
  getAddressFax() {
    return this.getField('address_fax');
  }
  
  /**
   * Get address_addr.
   * @returns {string}
   */
  getAddressAddress() {
    return this.getField('address_addr');
  }
  
  /**
   * Get address_addr1.
   * @returns {string}
   */
  getAddressAddress1() {
    return this.getField('address_addr1');
  }
  
  /**
   * Get address_addr2.
   * @returns {string}
   */
  getAddressAddress2() {
    return this.getField('address_addr2');
  }
  
  /**
   * Get address_city.
   * @returns {string}
   */
  getAddressCity() {
    return this.getField('address_city');
  }
  
  /**
   * Get address_state.
   * @returns {string}
   */
  getAddressState() {
    return this.getField('address_state');
  }
  
  /**
   * Get address_zip.
   * @returns {string}
   */
  getAddressZip() {
    return this.getField('address_zip');
  }
  
  /**
   * Get address_cntry.
   * @returns {string}
   */
  getAddressCountry() {
    return this.getField('address_cntry');
  }
  
  /**
   * Get address_resdntl.
   * @returns {boolean}
   */
  getAddressResidential() {
    return this.getField('address_resdntl', false);
  }
  
  /**
   * Get customer_login.
   * @returns {string}
   */
  getCustomerLogin() {
    return this.getField('customer_login');
  }
  
  /**
   * Get customer_pw_email.
   * @returns {string}
   */
  getCustomerPasswordEmail() {
    return this.getField('customer_pw_email');
  }
  
  /**
   * Get customer_business_title.
   * @returns {string}
   */
  getCustomerBusinessTitle() {
    return this.getField('customer_business_title');
  }
  
  /**
   * Get options.
   * @returns {SubscriptionOption[]}
   */
  getOptions() {
    return this.getField('options', []);
  }
  
  /**
   * @override
   */
  toObject() {
    var i;
    var l;
    var ret = Object.assign(this);

    if (util.isArray(ret['options'])) {
      for (i = 0, l = ret['options'].length; i < l; i++) {
        if (util.isInstanceOf(ret['options'][i], models.SubscriptionOption)) {
          ret['options'][i] = ret['options'][i].toObject();
        }
      }
    }

    return ret;
  }
}

module.exports.Subscription = Subscription;