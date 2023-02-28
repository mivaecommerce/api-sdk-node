/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { CustomerPaymentCard } = require('./CustomerPaymentCard');

/** 
 * OrderPaymentCard data model.
 * @class
 */
class OrderPaymentCard extends CustomerPaymentCard {
  /**
   * OrderPaymentCard Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }
}

module.exports.OrderPaymentCard = OrderPaymentCard;