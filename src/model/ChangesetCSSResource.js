/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { CSSResource } = require('./CSSResource');

/** 
 * ChangesetCSSResource data model.
 * @class
 */
class ChangesetCSSResource extends CSSResource {
  /**
   * ChangesetCSSResource Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }
}

module.exports.ChangesetCSSResource = ChangesetCSSResource;