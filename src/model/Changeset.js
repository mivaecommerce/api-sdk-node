/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** 
 * Changeset data model.
 * @class
 */
class Changeset extends Model {
  /**
   * Changeset Constructor.
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
   * Get branch_id.
   * @returns {number}
   */
  getBranchId() {
    return this.getField('branch_id', 0);
  }
  
  /**
   * Get user_id.
   * @returns {number}
   */
  getUserId() {
    return this.getField('user_id', 0);
  }
  
  /**
   * Get dtstamp.
   * @returns {number}
   */
  getDateTimeStamp() {
    return this.getTimestampField('dtstamp');
  }
  
  /**
   * Get notes.
   * @returns {string}
   */
  getNotes() {
    return this.getField('notes');
  }
  
  /**
   * Get user_name.
   * @returns {string}
   */
  getUserName() {
    return this.getField('user_name');
  }
  
  /**
   * Get user_icon.
   * @returns {string}
   */
  getUserIcon() {
    return this.getField('user_icon');
  }
  
  /**
   * Get tags.
   * @returns {array}
   */
  getTags() {
    return this.getField('tags', []);
  }
  
  /**
   * Get formatted_tags.
   * @returns {string}
   */
  getFormattedTags() {
    return this.getField('formatted_tags');
  }
}

module.exports.Changeset = Changeset;