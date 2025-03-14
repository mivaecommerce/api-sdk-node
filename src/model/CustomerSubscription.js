/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Subscription } = require('./Subscription');

/** 
 * CustomerSubscription data model.
 * @class
 */
class CustomerSubscription extends Subscription {
  /**
   * CustomerSubscription Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }
}

module.exports.CustomerSubscription = CustomerSubscription;