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
 * Handles API Request PrintQueueJob_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/printqueuejob_insert
 * @class
 */
class PrintQueueJobInsert extends Request {
  /**
   * PrintQueueJobInsert Constructor.
   * @param {?BaseClient} client
   * @param {?PrintQueue} printQueue
   */
  constructor(client, printQueue = null) {
    super(client);
    this.function = 'PrintQueueJob_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.printQueueId = null;
    this.editPrintQueue = null;
    this.printQueueDescription = null;
    this.printQueueJobDescription = null;
    this.printQueueJobFormat = null;
    this.printQueueJobData = null;

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
   * Get PrintQueueJob_Description.
   * @returns {string}
   */
  getPrintQueueJobDescription() {
    return this.printQueueJobDescription;
  }

  /**
   * Get PrintQueueJob_Format.
   * @returns {string}
   */
  getPrintQueueJobFormat() {
    return this.printQueueJobFormat;
  }

  /**
   * Get PrintQueueJob_Data.
   * @returns {string}
   */
  getPrintQueueJobData() {
    return this.printQueueJobData;
  }

  /**
   * Set PrintQueue_ID.
   * @param {number} printQueueId
   * @returns {PrintQueueJobInsert}
   */
  setPrintQueueId(printQueueId) {
    this.printQueueId = printQueueId;
    return this;
  }

  /**
   * Set Edit_PrintQueue.
   * @param {string} editPrintQueue
   * @returns {PrintQueueJobInsert}
   */
  setEditPrintQueue(editPrintQueue) {
    this.editPrintQueue = editPrintQueue;
    return this;
  }

  /**
   * Set PrintQueue_Description.
   * @param {string} printQueueDescription
   * @returns {PrintQueueJobInsert}
   */
  setPrintQueueDescription(printQueueDescription) {
    this.printQueueDescription = printQueueDescription;
    return this;
  }

  /**
   * Set PrintQueueJob_Description.
   * @param {string} printQueueJobDescription
   * @returns {PrintQueueJobInsert}
   */
  setPrintQueueJobDescription(printQueueJobDescription) {
    this.printQueueJobDescription = printQueueJobDescription;
    return this;
  }

  /**
   * Set PrintQueueJob_Format.
   * @param {string} printQueueJobFormat
   * @returns {PrintQueueJobInsert}
   */
  setPrintQueueJobFormat(printQueueJobFormat) {
    this.printQueueJobFormat = printQueueJobFormat;
    return this;
  }

  /**
   * Set PrintQueueJob_Data.
   * @param {string} printQueueJobData
   * @returns {PrintQueueJobInsert}
   */
  setPrintQueueJobData(printQueueJobData) {
    this.printQueueJobData = printQueueJobData;
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

    if (!util.isNullOrUndefined(this.printQueueJobDescription)) {
      data['PrintQueueJob_Description'] = this.printQueueJobDescription;
    }

    if (!util.isNullOrUndefined(this.printQueueJobFormat)) {
      data['PrintQueueJob_Format'] = this.printQueueJobFormat;
    }

    if (!util.isNullOrUndefined(this.printQueueJobData)) {
      data['PrintQueueJob_Data'] = this.printQueueJobData;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.PrintQueueJobInsert(this, httpResponse, data);
  }
}

module.exports.PrintQueueJobInsert = PrintQueueJobInsert;