/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { CSSResourceVersion } = require('./CSSResourceVersion');

/** 
 * BranchCSSResourceVersion data model.
 * @class
 */
class BranchCSSResourceVersion extends CSSResourceVersion {
  /**
   * BranchCSSResourceVersion Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }
}

module.exports.BranchCSSResourceVersion = BranchCSSResourceVersion;