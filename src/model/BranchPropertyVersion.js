/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { PropertyVersion } = require('./PropertyVersion');

/** 
 * BranchPropertyVersion data model.
 * @class
 */
class BranchPropertyVersion extends PropertyVersion {
  /**
   * BranchPropertyVersion Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }
}

module.exports.BranchPropertyVersion = BranchPropertyVersion;