/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** 
 * PrintQueueJob data model.
 * @class
 */
class PrintQueueJob extends Model {
  /**
   * PrintQueueJob Constructor.
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
   * Get queue_id.
   * @returns {number}
   */
  getQueueId() {
    return this.getField('queue_id', 0);
  }
  
  /**
   * Get store_id.
   * @returns {number}
   */
  getStoreId() {
    return this.getField('store_id', 0);
  }
  
  /**
   * Get user_id.
   * @returns {number}
   */
  getUserId() {
    return this.getField('user_id', 0);
  }
  
  /**
   * Get descrip.
   * @returns {string}
   */
  getDescription() {
    return this.getField('descrip');
  }
  
  /**
   * Get job_fmt.
   * @returns {string}
   */
  getJobFormat() {
    return this.getField('job_fmt');
  }
  
  /**
   * Get job_data.
   * @returns {string}
   */
  getJobData() {
    return this.getField('job_data');
  }
  
  /**
   * Get dt_created.
   * @returns {number}
   */
  getDateTimeCreated() {
    return this.getTimestampField('dt_created');
  }
  
  /**
   * Get user_name.
   * @returns {string}
   */
  getUserName() {
    return this.getField('user_name');
  }
  
  /**
   * Get store_code.
   * @returns {string}
   */
  getStoreCode() {
    return this.getField('store_code');
  }
  
  /**
   * Get store_name.
   * @returns {string}
   */
  getStoreName() {
    return this.getField('store_name');
  }
}

module.exports.PrintQueueJob = PrintQueueJob;