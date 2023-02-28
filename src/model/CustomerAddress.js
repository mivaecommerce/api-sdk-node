/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** 
 * CustomerAddress data model.
 * @class
 */
class CustomerAddress extends Model {
  /**
   * CustomerAddress Constructor.
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
   * Get descrip.
   * @returns {string}
   */
  getDescription() {
    return this.getField('descrip');
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
   * Get email.
   * @returns {string}
   */
  getEmail() {
    return this.getField('email');
  }
  
  /**
   * Get comp.
   * @returns {string}
   */
  getCompany() {
    return this.getField('comp');
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
   * Get resdntl.
   * @returns {boolean}
   */
  getResidential() {
    return this.getField('resdntl', false);
  }
}

module.exports.CustomerAddress = CustomerAddress;