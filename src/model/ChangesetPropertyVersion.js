/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { PropertyVersion } = require('./PropertyVersion');

/** 
 * ChangesetPropertyVersion data model.
 * @class
 */
class ChangesetPropertyVersion extends PropertyVersion {
  /**
   * ChangesetPropertyVersion Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }
}

module.exports.ChangesetPropertyVersion = ChangesetPropertyVersion;