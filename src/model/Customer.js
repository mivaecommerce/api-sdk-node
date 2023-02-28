/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const models = require('./../models');
const { Model } = require('./../abstract');

/** 
 * Customer data model.
 * @class
 */
class Customer extends Model {
  /**
   * Customer Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);

    if (!util.isUndefined(this.CustomField_Values)) {
      if (!util.isInstanceOf(this.CustomField_Values, models.CustomFieldValues) && util.isObject(this.CustomField_Values)) {
        this.CustomField_Values = new models.CustomFieldValues(this.CustomField_Values);
      } else if (!util.isInstanceOf(this.CustomField_Values, models.CustomFieldValues)) {
        throw new Error(util.format('Expected CustomFieldValues or an Object but got %s',
          typeof this.CustomField_Values));
      }
    } else {
      this.CustomField_Values = {};
    }
  }

  /**
   * Get id.
   * @returns {number}
   */
  getId() {
    return this.getField('id', 0);
  }
  
  /**
   * Get account_id.
   * @returns {number}
   */
  getAccountId() {
    return this.getField('account_id', 0);
  }
  
  /**
   * Get login.
   * @returns {string}
   */
  getLogin() {
    return this.getField('login');
  }
  
  /**
   * Get pw_email.
   * @returns {string}
   */
  getPasswordEmail() {
    return this.getField('pw_email');
  }
  
  /**
   * Get ship_id.
   * @returns {number}
   */
  getShipId() {
    return this.getField('ship_id', 0);
  }
  
  /**
   * Get ship_res.
   * @returns {boolean}
   */
  getShippingResidential() {
    return this.getField('ship_res', false);
  }
  
  /**
   * Get ship_fname.
   * @returns {string}
   */
  getShipFirstName() {
    return this.getField('ship_fname');
  }
  
  /**
   * Get ship_lname.
   * @returns {string}
   */
  getShipLastName() {
    return this.getField('ship_lname');
  }
  
  /**
   * Get ship_email.
   * @returns {string}
   */
  getShipEmail() {
    return this.getField('ship_email');
  }
  
  /**
   * Get ship_comp.
   * @returns {string}
   */
  getShipCompany() {
    return this.getField('ship_comp');
  }
  
  /**
   * Get ship_phone.
   * @returns {string}
   */
  getShipPhone() {
    return this.getField('ship_phone');
  }
  
  /**
   * Get ship_fax.
   * @returns {string}
   */
  getShipFax() {
    return this.getField('ship_fax');
  }
  
  /**
   * Get ship_addr1.
   * @returns {string}
   */
  getShipAddress1() {
    return this.getField('ship_addr1');
  }
  
  /**
   * Get ship_addr2.
   * @returns {string}
   */
  getShipAddress2() {
    return this.getField('ship_addr2');
  }
  
  /**
   * Get ship_city.
   * @returns {string}
   */
  getShipCity() {
    return this.getField('ship_city');
  }
  
  /**
   * Get ship_state.
   * @returns {string}
   */
  getShipState() {
    return this.getField('ship_state');
  }
  
  /**
   * Get ship_zip.
   * @returns {string}
   */
  getShipZip() {
    return this.getField('ship_zip');
  }
  
  /**
   * Get ship_cntry.
   * @returns {string}
   */
  getShipCountry() {
    return this.getField('ship_cntry');
  }
  
  /**
   * Get bill_id.
   * @returns {number}
   */
  getBillId() {
    return this.getField('bill_id', 0);
  }
  
  /**
   * Get bill_fname.
   * @returns {string}
   */
  getBillFirstName() {
    return this.getField('bill_fname');
  }
  
  /**
   * Get bill_lname.
   * @returns {string}
   */
  getBillLastName() {
    return this.getField('bill_lname');
  }
  
  /**
   * Get bill_email.
   * @returns {string}
   */
  getBillEmail() {
    return this.getField('bill_email');
  }
  
  /**
   * Get bill_comp.
   * @returns {string}
   */
  getBillCompany() {
    return this.getField('bill_comp');
  }
  
  /**
   * Get bill_phone.
   * @returns {string}
   */
  getBillPhone() {
    return this.getField('bill_phone');
  }
  
  /**
   * Get bill_fax.
   * @returns {string}
   */
  getBillFax() {
    return this.getField('bill_fax');
  }
  
  /**
   * Get bill_addr1.
   * @returns {string}
   */
  getBillAddress1() {
    return this.getField('bill_addr1');
  }
  
  /**
   * Get bill_addr2.
   * @returns {string}
   */
  getBillAddress2() {
    return this.getField('bill_addr2');
  }
  
  /**
   * Get bill_city.
   * @returns {string}
   */
  getBillCity() {
    return this.getField('bill_city');
  }
  
  /**
   * Get bill_state.
   * @returns {string}
   */
  getBillState() {
    return this.getField('bill_state');
  }
  
  /**
   * Get bill_zip.
   * @returns {string}
   */
  getBillZip() {
    return this.getField('bill_zip');
  }
  
  /**
   * Get bill_cntry.
   * @returns {string}
   */
  getBillCountry() {
    return this.getField('bill_cntry');
  }
  
  /**
   * Get tax_exempt.
   * @returns {boolean}
   */
  getTaxExempt() {
    return this.getField('tax_exempt', false);
  }
  
  /**
   * Get order_cnt.
   * @returns {number}
   */
  getOrderCount() {
    return this.getField('order_cnt', 0);
  }
  
  /**
   * Get order_avg.
   * @returns {number}
   */
  getOrderAverage() {
    return this.getField('order_avg', 0.00);
  }
  
  /**
   * Get formatted_order_avg.
   * @returns {string}
   */
  getFormattedOrderAverage() {
    return this.getField('formatted_order_avg');
  }
  
  /**
   * Get order_tot.
   * @returns {number}
   */
  getOrderTotal() {
    return this.getField('order_tot', 0.00);
  }
  
  /**
   * Get formatted_order_tot.
   * @returns {string}
   */
  getFormattedOrderTotal() {
    return this.getField('formatted_order_tot');
  }
  
  /**
   * Get note_count.
   * @returns {number}
   */
  getNoteCount() {
    return this.getField('note_count', 0);
  }
  
  /**
   * Get dt_created.
   * @returns {number}
   */
  getCreatedOn() {
    return this.getTimestampField('dt_created');
  }
  
  /**
   * Get dt_login.
   * @returns {number}
   */
  getLastLogin() {
    return this.getTimestampField('dt_login');
  }
  
  /**
   * Get dt_pwchg.
   * @returns {number}
   */
  getPasswordChangeDateTime() {
    return this.getTimestampField('dt_pwchg');
  }
  
  /**
   * Get credit.
   * @returns {number}
   */
  getCredit() {
    return this.getField('credit', 0.00);
  }
  
  /**
   * Get formatted_credit.
   * @returns {string}
   */
  getFormattedCredit() {
    return this.getField('formatted_credit');
  }
  
  /**
   * Get business_title.
   * @returns {string}
   */
  getBusinessTitle() {
    return this.getField('business_title');
  }
  
  /**
   * Get CustomField_Values.
   * @returns {CustomFieldValues|*}
   */
  getCustomFieldValues() {
    return this.getField('CustomField_Values', null);
  }
  
  /**
   * @override
   */
  toObject() {
    var ret = Object.assign(this);

    if (util.isInstanceOf(ret['CustomField_Values'], models.CustomFieldValues)) {
      ret['CustomField_Values'] = ret['CustomField_Values'].toObject();
    }

    return ret;
  }
}

module.exports.Customer = Customer;