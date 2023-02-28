/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { CSSResourceVersion } = require('./CSSResourceVersion');

/** 
 * ChangesetCSSResourceVersion data model.
 * @class
 */
class ChangesetCSSResourceVersion extends CSSResourceVersion {
  /**
   * ChangesetCSSResourceVersion Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }
}

module.exports.ChangesetCSSResourceVersion = ChangesetCSSResourceVersion;