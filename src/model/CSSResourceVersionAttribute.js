/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { ResourceAttribute } = require('./ResourceAttribute');

/** 
 * CSSResourceVersionAttribute data model.
 * @class
 */
class CSSResourceVersionAttribute extends ResourceAttribute {
  /**
   * CSSResourceVersionAttribute Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }
}

module.exports.CSSResourceVersionAttribute = CSSResourceVersionAttribute;