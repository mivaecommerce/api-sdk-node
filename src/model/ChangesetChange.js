/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** 
 * ChangesetChange data model.
 * @class
 */
class ChangesetChange extends Model {
  /**
   * ChangesetChange Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get item_type.
   * @returns {string}
   */
  getItemType() {
    return this.getField('item_type');
  }
  
  /**
   * Get item_id.
   * @returns {number}
   */
  getItemId() {
    return this.getField('item_id', 0);
  }
  
  /**
   * Get item_user_id.
   * @returns {number}
   */
  getItemUserId() {
    return this.getField('item_user_id', 0);
  }
  
  /**
   * Get item_user_name.
   * @returns {string}
   */
  getItemUserName() {
    return this.getField('item_user_name');
  }
  
  /**
   * Get item_user_icon.
   * @returns {string}
   */
  getItemUserIcon() {
    return this.getField('item_user_icon');
  }
  
  /**
   * Get item_version_id.
   * @returns {number}
   */
  getItemVersionId() {
    return this.getField('item_version_id', 0);
  }
  
  /**
   * Get item_identifier.
   * @returns {string}
   */
  getItemIdentifier() {
    return this.getField('item_identifier');
  }
  
  /**
   * Get item_change_type.
   * @returns {string}
   */
  getItemChangeType() {
    return this.getField('item_change_type');
  }
}

module.exports.ChangesetChange = ChangesetChange;