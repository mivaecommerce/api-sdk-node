/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** 
 * CustomerPaymentCard data model.
 * @class
 */
class CustomerPaymentCard extends Model {
  /**
   * CustomerPaymentCard Constructor.
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
   * Get cust_id.
   * @returns {number}
   */
  getCustomerId() {
    return this.getField('cust_id', 0);
  }
  
  /**
   * Get fname.
   * @returns {string}
   */
  getFirstName() {
    return this.getField('fname');
  }
  
  /**
   * Get lname.
   * @returns {string}
   */
  getLastName() {
    return this.getField('lname');
  }
  
  /**
   * Get exp_month.
   * @returns {number}
   */
  getExpirationMonth() {
    return this.getField('exp_month', 0);
  }
  
  /**
   * Get exp_year.
   * @returns {number}
   */
  getExpirationYear() {
    return this.getField('exp_year', 0);
  }
  
  /**
   * Get lastfour.
   * @returns {string}
   */
  getLastFour() {
    return this.getField('lastfour');
  }
  
  /**
   * Get addr1.
   * @returns {string}
   */
  getAddress1() {
    return this.getField('addr1');
  }
  
  /**
   * Get addr2.
   * @returns {string}
   */
  getAddress2() {
    return this.getField('addr2');
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
   * Get cntry.
   * @returns {string}
   */
  getCountry() {
    return this.getField('cntry');
  }
  
  /**
   * Get lastused.
   * @returns {string}
   */
  getLastUsed() {
    return this.getField('lastused');
  }
  
  /**
   * Get token.
   * @returns {string}
   */
  getToken() {
    return this.getField('token');
  }
  
  /**
   * Get type_id.
   * @returns {number}
   */
  getTypeId() {
    return this.getField('type_id', 0);
  }
  
  /**
   * Get refcount.
   * @returns {number}
   */
  getReferenceCount() {
    return this.getField('refcount', 0);
  }
  
  /**
   * Get type.
   * @returns {string}
   */
  getType() {
    return this.getField('type');
  }
  
  /**
   * Get mod_code.
   * @returns {string}
   */
  getModuleCode() {
    return this.getField('mod_code');
  }
  
  /**
   * Get meth_code.
   * @returns {string}
   */
  getMethodCode() {
    return this.getField('meth_code');
  }
}

module.exports.CustomerPaymentCard = CustomerPaymentCard;