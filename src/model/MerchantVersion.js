/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** 
 * MerchantVersion data model.
 * @class
 */
class MerchantVersion extends Model {
  /**
   * MerchantVersion Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get version.
   * @returns {string}
   */
  getVersion() {
    return this.getField('version');
  }
  
  /**
   * Get major.
   * @returns {number}
   */
  getMajor() {
    return this.getField('major', 0);
  }
  
  /**
   * Get minor.
   * @returns {number}
   */
  getMinor() {
    return this.getField('minor', 0);
  }
  
  /**
   * Get bugfix.
   * @returns {number}
   */
  getBugfix() {
    return this.getField('bugfix', 0);
  }
}

module.exports.MerchantVersion = MerchantVersion;