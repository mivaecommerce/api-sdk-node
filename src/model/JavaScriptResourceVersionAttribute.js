/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { ResourceAttribute } = require('./ResourceAttribute');

/** 
 * JavaScriptResourceVersionAttribute data model.
 * @class
 */
class JavaScriptResourceVersionAttribute extends ResourceAttribute {
  /**
   * JavaScriptResourceVersionAttribute Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }
}

module.exports.JavaScriptResourceVersionAttribute = JavaScriptResourceVersionAttribute;