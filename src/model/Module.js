/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** 
 * Module data model.
 * @class
 */
class Module extends Model {
  /**
   * Module Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get id.
   * @returns {number}
   */
  getId() {
    return this.getField('id', 0);
  }
  
  /**
   * Get code.
   * @returns {string}
   */
  getCode() {
    return this.getField('code');
  }
  
  /**
   * Get name.
   * @returns {string}
   */
  getName() {
    return this.getField('name');
  }
  
  /**
   * Get provider.
   * @returns {string}
   */
  getProvider() {
    return this.getField('provider');
  }
  
  /**
   * Get api_ver.
   * @returns {string}
   */
  getApiVersion() {
    return this.getField('api_ver');
  }
  
  /**
   * Get version.
   * @returns {string}
   */
  getVersion() {
    return this.getField('version');
  }
  
  /**
   * Get module.
   * @returns {string}
   */
  getModule() {
    return this.getField('module');
  }
  
  /**
   * Get refcount.
   * @returns {number}
   */
  getReferenceCount() {
    return this.getField('refcount', 0);
  }
  
  /**
   * Get active.
   * @returns {boolean}
   */
  getActive() {
    return this.getField('active', false);
  }
  
  /**
   * Get priority.
   * @returns {number}
   */
  getPriority() {
    return this.getField('priority', 0);
  }
}

module.exports.Module = Module;