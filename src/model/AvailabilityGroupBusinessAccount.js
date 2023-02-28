/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { BusinessAccount } = require('./BusinessAccount');

/** 
 * AvailabilityGroupBusinessAccount data model.
 * @class
 */
class AvailabilityGroupBusinessAccount extends BusinessAccount {
  /**
   * AvailabilityGroupBusinessAccount Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get assigned.
   * @returns {boolean}
   */
  getAssigned() {
    return this.getField('assigned', false);
  }
}

module.exports.AvailabilityGroupBusinessAccount = AvailabilityGroupBusinessAccount;