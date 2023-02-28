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
 * CustomerAddressList data model.
 * @class
 */
class CustomerAddressList extends Model {
  /**
   * CustomerAddressList Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    var i;
    var l;

    super(data);

    if (!util.isUndefined(this.addresses) && util.isArray(this.addresses)) {
      for (i = 0, l = this.addresses.length; i < l; i++) {
        if (!util.isInstanceOf(this.addresses[i], models.CustomerAddress) && util.isObject(data['addresses'][i])) {
          this.addresses[i] = new models.CustomerAddress(this.addresses[i]);
        } else if (!util.isInstanceOf(this.addresses[i], models.CustomerAddress)) {
          throw new Error(util.format('Expected array of CustomerAddress or an array of Objects but got %s',
            typeof this.addresses[i]));
        }
      }
    } else {
      this.addresses = [];
    }
  }

  /**
   * Get ship_id.
   * @returns {number}
   */
  getShipId() {
    return this.getField('ship_id', 0);
  }
  
  /**
   * Get bill_id.
   * @returns {number}
   */
  getBillId() {
    return this.getField('bill_id', 0);
  }
  
  /**
   * Get addresses.
   * @returns {CustomerAddress[]}
   */
  getAddresses() {
    return this.getField('addresses', []);
  }
  
  /**
   * @override
   */
  toObject() {
    var i;
    var l;
    var ret = Object.assign(this);

    if (util.isArray(ret['addresses'])) {
      for (i = 0, l = ret['addresses'].length; i < l; i++) {
        if (util.isInstanceOf(ret['addresses'][i], models.CustomerAddress)) {
          ret['addresses'][i] = ret['addresses'][i].toObject();
        }
      }
    }

    return ret;
  }
}

module.exports.CustomerAddressList = CustomerAddressList;