/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const models = require('./../models');
const responses = require('./../responses');
const { Request }  = require('./../abstract');

/** 
 * Handles API Request PrintQueueJob_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/printqueuejob_delete
 * @class
 */
class PrintQueueJobDelete extends Request {
  /**
   * PrintQueueJobDelete Constructor.
   * @param {?BaseClient} client
   * @param {?PrintQueueJob} printQueueJob
   */
  constructor(client, printQueueJob = null) {
    super(client);
    this.function = 'PrintQueueJob_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.printQueueJobId = null;

    if (util.isInstanceOf(printQueueJob, models.PrintQueueJob)) {
      if (printQueueJob.getId()) {
        this.setPrintQueueJobId(printQueueJob.getId());
      }
    }
  }

  /**
   * Get PrintQueueJob_ID.
   * @returns {number}
   */
  getPrintQueueJobId() {
    return this.printQueueJobId;
  }

  /**
   * Set PrintQueueJob_ID.
   * @param {number} printQueueJobId
   * @returns {PrintQueueJobDelete}
   */
  setPrintQueueJobId(printQueueJobId) {
    this.printQueueJobId = printQueueJobId;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.printQueueJobId)) {
      data['PrintQueueJob_ID'] = this.printQueueJobId;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.PrintQueueJobDelete(this, httpResponse, data);
  }
}

module.exports.PrintQueueJobDelete = PrintQueueJobDelete;