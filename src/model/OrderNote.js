/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Note } = require('./Note');

/** 
 * OrderNote data model.
 * @class
 */
class OrderNote extends Note {
  /**
   * OrderNote Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }
}

module.exports.OrderNote = OrderNote;