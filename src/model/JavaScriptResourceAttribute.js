/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { ResourceAttribute } = require('./ResourceAttribute');

/** 
 * JavaScriptResourceAttribute data model.
 * @class
 */
class JavaScriptResourceAttribute extends ResourceAttribute {
  /**
   * JavaScriptResourceAttribute Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }
}

module.exports.JavaScriptResourceAttribute = JavaScriptResourceAttribute;