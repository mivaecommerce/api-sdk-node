/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** 
 * Branch data model.
 * @class
 */
class Branch extends Model {
  /**
   * Branch Constructor.
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
   * Get immutable.
   * @returns {boolean}
   */
  getImmutable() {
    return this.getField('immutable', false);
  }
  
  /**
   * Get branchkey.
   * @returns {string}
   */
  getBranchKey() {
    return this.getField('branchkey');
  }
  
  /**
   * Get name.
   * @returns {string}
   */
  getName() {
    return this.getField('name');
  }
  
  /**
   * Get color.
   * @returns {string}
   */
  getColor() {
    return this.getField('color');
  }
  
  /**
   * Get framework.
   * @returns {string}
   */
  getFramework() {
    return this.getField('framework');
  }
  
  /**
   * Get is_primary.
   * @returns {boolean}
   */
  getIsPrimary() {
    return this.getField('is_primary', false);
  }
  
  /**
   * Get is_working.
   * @returns {boolean}
   */
  getIsWorking() {
    return this.getField('is_working', false);
  }
  
  /**
   * Get preview_url.
   * @returns {string}
   */
  getPreviewUrl() {
    return this.getField('preview_url');
  }
}

module.exports.Branch = Branch;