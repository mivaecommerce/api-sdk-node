/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** CACHE_TYPE constants. */
/** @ignore */
const CACHE_TYPE_NONE = 'none';
/** @ignore */
const CACHE_TYPE_REDIS = 'redis';

/** 
 * Store data model.
 * @class
 */
class Store extends Model {
  /**
   * Store Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Constant CACHE_TYPE_NONE
   * @returns {string}
   * @const
   * @static
   */
  static get CACHE_TYPE_NONE() {
    return CACHE_TYPE_NONE;
  }

  /**
   * Constant CACHE_TYPE_REDIS
   * @returns {string}
   * @const
   * @static
   */
  static get CACHE_TYPE_REDIS() {
    return CACHE_TYPE_REDIS;
  }

  /**
   * Get id.
   * @returns {number}
   */
  getId() {
    return this.getField('id', 0);
  }
  
  /**
   * Get manager_id.
   * @returns {number}
   */
  getManagerId() {
    return this.getField('manager_id', 0);
  }
  
  /**
   * Get code.
   * @returns {string}
   */
  getCode() {
    return this.getField('code');
  }
  
  /**
   * Get license.
   * @returns {string}
   */
  getLicense() {
    return this.getField('license');
  }
  
  /**
   * Get name.
   * @returns {string}
   */
  getName() {
    return this.getField('name');
  }
  
  /**
   * Get icon.
   * @returns {string}
   */
  getIcon() {
    return this.getField('icon');
  }
  
  /**
   * Get owner.
   * @returns {string}
   */
  getOwner() {
    return this.getField('owner');
  }
  
  /**
   * Get email.
   * @returns {string}
   */
  getEmail() {
    return this.getField('email');
  }
  
  /**
   * Get company.
   * @returns {string}
   */
  getCompany() {
    return this.getField('company');
  }
  
  /**
   * Get address.
   * @returns {string}
   */
  getAddress() {
    return this.getField('address');
  }
  
  /**
   * Get city.
   * @returns {string}
   */
  getCity() {
    return this.getField('city');
  }
  
  /**
   * Get state.
   * @returns {string}
   */
  getState() {
    return this.getField('state');
  }
  
  /**
   * Get zip.
   * @returns {string}
   */
  getZip() {
    return this.getField('zip');
  }
  
  /**
   * Get phone.
   * @returns {string}
   */
  getPhone() {
    return this.getField('phone');
  }
  
  /**
   * Get fax.
   * @returns {string}
   */
  getFax() {
    return this.getField('fax');
  }
  
  /**
   * Get country.
   * @returns {string}
   */
  getCountry() {
    return this.getField('country');
  }
  
  /**
   * Get wtunits.
   * @returns {string}
   */
  getWeightUnits() {
    return this.getField('wtunits');
  }
  
  /**
   * Get wtunitcode.
   * @returns {string}
   */
  getWeightUnitCode() {
    return this.getField('wtunitcode');
  }
  
  /**
   * Get wtdispmix.
   * @returns {boolean}
   */
  getDisplayMixedWeightUnits() {
    return this.getField('wtdispmix', false);
  }
  
  /**
   * Get wtdisplow.
   * @returns {boolean}
   */
  getDisplayWeightLessThan() {
    return this.getField('wtdisplow', false);
  }
  
  /**
   * Get wtdispdig.
   * @returns {number}
   */
  getWeightDigits() {
    return this.getField('wtdispdig', 0);
  }
  
  /**
   * Get dmunitcode.
   * @returns {string}
   */
  getDimensionUnits() {
    return this.getField('dmunitcode');
  }
  
  /**
   * Get baskexp.
   * @returns {number}
   */
  getBasketExpiration() {
    return this.getField('baskexp', 0);
  }
  
  /**
   * Get pgrp_ovlp.
   * @returns {string}
   */
  getPriceGroupOverlapResolution() {
    return this.getField('pgrp_ovlp');
  }
  
  /**
   * Get ui_id.
   * @returns {number}
   */
  getUserInterfaceId() {
    return this.getField('ui_id', 0);
  }
  
  /**
   * Get tax_id.
   * @returns {number}
   */
  getTaxId() {
    return this.getField('tax_id', 0);
  }
  
  /**
   * Get currncy_id.
   * @returns {number}
   */
  getCurrencyId() {
    return this.getField('currncy_id', 0);
  }
  
  /**
   * Get mnt_warn.
   * @returns {string}
   */
  getMaintenanceWarningMessage() {
    return this.getField('mnt_warn');
  }
  
  /**
   * Get mnt_close.
   * @returns {string}
   */
  getMaintenanceClosedMessage() {
    return this.getField('mnt_close');
  }
  
  /**
   * Get mnt_time.
   * @returns {number}
   */
  getMaintenanceTime() {
    return this.getField('mnt_time', 0);
  }
  
  /**
   * Get mnt_no_new.
   * @returns {number}
   */
  getMaintenanceNoNewCustomersBefore() {
    return this.getField('mnt_no_new', 0);
  }
  
  /**
   * Get omin_quant.
   * @returns {number}
   */
  getOrderMinimumQuantity() {
    return this.getField('omin_quant', 0);
  }
  
  /**
   * Get omin_price.
   * @returns {number}
   */
  getOrderMinimumPrice() {
    return this.getField('omin_price', 0.00);
  }
  
  /**
   * Get omin_all.
   * @returns {boolean}
   */
  getOrderMinimumRequiredAll() {
    return this.getField('omin_all', false);
  }
  
  /**
   * Get omin_msg.
   * @returns {string}
   */
  getOrderMinimumMessage() {
    return this.getField('omin_msg');
  }
  
  /**
   * Get crypt_id.
   * @returns {number}
   */
  getCryptId() {
    return this.getField('crypt_id', 0);
  }
  
  /**
   * Get req_ship.
   * @returns {boolean}
   */
  getRequireShipping() {
    return this.getField('req_ship', false);
  }
  
  /**
   * Get req_tax.
   * @returns {boolean}
   */
  getRequireTax() {
    return this.getField('req_tax', false);
  }
  
  /**
   * Get req_frship.
   * @returns {boolean}
   */
  getRequireFreeOrderShipping() {
    return this.getField('req_frship', false);
  }
  
  /**
   * Get item_adel.
   * @returns {boolean}
   */
  getItemModuleUninstallable() {
    return this.getField('item_adel', false);
  }
  
  /**
   * Get cache_type.
   * @returns {string}
   */
  getCacheType() {
    return this.getField('cache_type');
  }
  
  /**
   * Get cache_exp.
   * @returns {number}
   */
  getCacheExpiration() {
    return this.getField('cache_exp', 0);
  }
  
  /**
   * Get cache_ver.
   * @returns {number}
   */
  getCacheVersion() {
    return this.getField('cache_ver', 0);
  }
  
  /**
   * Get cache_comp.
   * @returns {boolean}
   */
  getCacheCompression() {
    return this.getField('cache_comp', false);
  }
  
  /**
   * Get cacheset.
   * @returns {number}
   */
  getCacheSet() {
    return this.getField('cacheset', 0);
  }
  
  /**
   * Get redishost.
   * @returns {string}
   */
  getRedisHost() {
    return this.getField('redishost');
  }
  
  /**
   * Get redisport.
   * @returns {number}
   */
  getRedisPort() {
    return this.getField('redisport', 0);
  }
  
  /**
   * Get redisto.
   * @returns {number}
   */
  getRedisTimeout() {
    return this.getField('redisto', 0);
  }
  
  /**
   * Get redisex.
   * @returns {number}
   */
  getRedisExpiration() {
    return this.getField('redisex', 0);
  }
  
  /**
   * Get boxpack_id.
   * @returns {number}
   */
  getBoxPackingId() {
    return this.getField('boxpack_id', 0);
  }
  
  /**
   * Get addrval_id.
   * @returns {number}
   */
  getAddressValidationId() {
    return this.getField('addrval_id', 0);
  }
  
  /**
   * Get deferbask.
   * @returns {boolean}
   */
  getDeferBaskets() {
    return this.getField('deferbask', false);
  }
  
  /**
   * Get trackhits.
   * @returns {boolean}
   */
  getTrackPageHits() {
    return this.getField('trackhits', false);
  }
  
  /**
   * Get mnt_ips.
   * @returns {string}
   */
  getMaintenanceAllowedIps() {
    return this.getField('mnt_ips');
  }
  
  /**
   * Get branch_id.
   * @returns {number}
   */
  getBranchId() {
    return this.getField('branch_id', 0);
  }
  
  /**
   * Get charset.
   * @returns {string}
   */
  getCharacterSet() {
    return this.getField('charset');
  }
  
  /**
   * Get schtsk_adv.
   * @returns {number}
   */
  getScheduledTaskAdvance() {
    return this.getField('schtsk_adv', 0);
  }
  
  /**
   * Get schtsk_min.
   * @returns {number}
   */
  getScheduledTaskTimeout() {
    return this.getField('schtsk_min', 0);
  }
}

module.exports.Store = Store;