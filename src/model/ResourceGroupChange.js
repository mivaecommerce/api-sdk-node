/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** 
 * ResourceGroupChange data model.
 * @class
 */
class ResourceGroupChange extends Model {
  /**
   * ResourceGroupChange Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get ResourceGroup_ID.
   * @returns {number}
   */
  getResourceGroupId() {
    return this.getField('ResourceGroup_ID', 0);
  }
  
  /**
   * Get ResourceGroup_Code.
   * @returns {string}
   */
  getResourceGroupCode() {
    return this.getField('ResourceGroup_Code');
  }
  
  /**
   * Get LinkedCSSResources.
   * @returns {Array}
   */
  getLinkedCSSResources() {
    return this.getField('LinkedCSSResources', []);
  }
  
  /**
   * Get LinkedJavaScriptResources.
   * @returns {Array}
   */
  getLinkedJavaScriptResources() {
    return this.getField('LinkedJavaScriptResources', []);
  }
  
  /**
   * Set ResourceGroup_ID.
   * @param {number} resourceGroupId
   * @returns {ResourceGroupChange}
   */
  setResourceGroupId(resourceGroupId) {
    return this.setField('ResourceGroup_ID', resourceGroupId);
  }

  /**
   * Set ResourceGroup_Code.
   * @param {string} resourceGroupCode
   * @returns {ResourceGroupChange}
   */
  setResourceGroupCode(resourceGroupCode) {
    return this.setField('ResourceGroup_Code', resourceGroupCode);
  }

  /**
   * Set LinkedCSSResources.
   * @param {Array} linkedCSSResources
   * @returns {ResourceGroupChange}
   */
  setLinkedCSSResources(linkedCSSResources) {
    return this.setField('LinkedCSSResources', linkedCSSResources);
  }

  /**
   * Set LinkedJavaScriptResources.
   * @param {Array} linkedJavaScriptResources
   * @returns {ResourceGroupChange}
   */
  setLinkedJavaScriptResources(linkedJavaScriptResources) {
    return this.setField('LinkedJavaScriptResources', linkedJavaScriptResources);
  }
}

module.exports.ResourceGroupChange = ResourceGroupChange;