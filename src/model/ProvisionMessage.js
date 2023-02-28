/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** 
 * ProvisionMessage data model.
 * @class
 */
class ProvisionMessage extends Model {
  /**
   * ProvisionMessage Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get dtstamp.
   * @returns {string}
   */
  getDateTimeStamp() {
    return this.getField('dtstamp');
  }
  
  /**
   * Get lineno.
   * @returns {number}
   */
  getLineNumber() {
    return this.getField('lineno', 0);
  }
  
  /**
   * Get tag.
   * @returns {string}
   */
  getTag() {
    return this.getField('tag');
  }
  
  /**
   * Get message.
   * @returns {string}
   */
  getMessage() {
    return this.getField('message');
  }
}

module.exports.ProvisionMessage = ProvisionMessage;