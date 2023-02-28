/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Category } = require('./Category');

/** 
 * AvailabilityGroupCategory data model.
 * @class
 */
class AvailabilityGroupCategory extends Category {
  /**
   * AvailabilityGroupCategory Constructor.
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

module.exports.AvailabilityGroupCategory = AvailabilityGroupCategory;