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
const { ListQueryRequest }  = require('./../listquery');

/** 
 * Handles API Request PrintQueueJobList_Load_Query. Scope: Domain. 
 * @see https://docs.miva.com/json-api/functions/printqueuejoblist_load_query
 * @class
 */
class PrintQueueJobListLoadQuery extends ListQueryRequest {
  /**
   * PrintQueueJobListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?PrintQueue} printQueue
   */
  constructor(client, printQueue = null) {
    super(client);
    this.function = 'PrintQueueJobList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_DOMAIN;

    this.availableSearchFields = [
      'id',
      'queue_id',
      'store_id',
      'user_id',
      'descrip',
      'job_fmt',
      'job_data',
      'dt_created'
    ];

    this.availableSortFields = [
      'id',
      'queue_id',
      'store_id',
      'user_id',
      'descrip',
      'job_fmt',
      'job_data',
      'dt_created'
    ];

    this.availableOnDemandColumns = [
      'job_data'
    ];
    this.printQueueId = null;
    this.editPrintQueue = null;
    this.printQueueDescription = null;

    if (util.isInstanceOf(printQueue, models.PrintQueue)) {
      if (printQueue.getId()) {
        this.setPrintQueueId(printQueue.getId());
      } else if (printQueue.getDescription()) {
        this.setEditPrintQueue(printQueue.getDescription());
      }
    }
  }

  /**
   * Get PrintQueue_ID.
   * @returns {number}
   */
  getPrintQueueId() {
    return this.printQueueId;
  }

  /**
   * Get Edit_PrintQueue.
   * @returns {string}
   */
  getEditPrintQueue() {
    return this.editPrintQueue;
  }

  /**
   * Get PrintQueue_Description.
   * @returns {string}
   */
  getPrintQueueDescription() {
    return this.printQueueDescription;
  }

  /**
   * Set PrintQueue_ID.
   * @param {number} printQueueId
   * @returns {PrintQueueJobListLoadQuery}
   */
  setPrintQueueId(printQueueId) {
    this.printQueueId = printQueueId;
    return this;
  }

  /**
   * Set Edit_PrintQueue.
   * @param {string} editPrintQueue
   * @returns {PrintQueueJobListLoadQuery}
   */
  setEditPrintQueue(editPrintQueue) {
    this.editPrintQueue = editPrintQueue;
    return this;
  }

  /**
   * Set PrintQueue_Description.
   * @param {string} printQueueDescription
   * @returns {PrintQueueJobListLoadQuery}
   */
  setPrintQueueDescription(printQueueDescription) {
    this.printQueueDescription = printQueueDescription;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.printQueueId)) {
      data['PrintQueue_ID'] = this.printQueueId;
    } else if (!util.isNullOrUndefined(this.editPrintQueue)) {
      data['Edit_PrintQueue'] = this.editPrintQueue;
    } else if (!util.isNullOrUndefined(this.printQueueDescription)) {
      data['PrintQueue_Description'] = this.printQueueDescription;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.PrintQueueJobListLoadQuery(this, httpResponse, data);
  }
}

module.exports.PrintQueueJobListLoadQuery = PrintQueueJobListLoadQuery;