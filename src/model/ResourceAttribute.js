/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** 
 * ResourceAttribute data model.
 * @class
 */
class ResourceAttribute extends Model {
  /**
   * ResourceAttribute Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get name.
   * @returns {string}
   */
  getName() {
    return this.getField('name');
  }
  
  /**
   * Get value.
   * @returns {string}
   */
  getValue() {
    return this.getField('value');
  }
  
  /**
   * Set name.
   * @param {string} name
   * @returns {ResourceAttribute}
   */
  setName(name) {
    return this.setField('name', name);
  }

  /**
   * Set value.
   * @param {string} value
   * @returns {ResourceAttribute}
   */
  setValue(value) {
    return this.setField('value', value);
  }
}

module.exports.ResourceAttribute = ResourceAttribute;