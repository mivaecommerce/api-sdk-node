/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { JavaScriptResourceVersion } = require('./JavaScriptResourceVersion');

/** 
 * ChangesetJavaScriptResourceVersion data model.
 * @class
 */
class ChangesetJavaScriptResourceVersion extends JavaScriptResourceVersion {
  /**
   * ChangesetJavaScriptResourceVersion Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }
}

module.exports.ChangesetJavaScriptResourceVersion = ChangesetJavaScriptResourceVersion;