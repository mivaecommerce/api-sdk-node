/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { CSSResource } = require('./CSSResource');

/** 
 * BranchCSSResource data model.
 * @class
 */
class BranchCSSResource extends CSSResource {
  /**
   * BranchCSSResource Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }
}

module.exports.BranchCSSResource = BranchCSSResource;