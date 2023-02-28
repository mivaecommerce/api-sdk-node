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
 * Handles API Request Note_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/note_insert
 * @class
 */
class NoteInsert extends Request {
  /**
   * NoteInsert Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'Note_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.noteText = null;
    this.customerId = null;
    this.accountId = null;
    this.orderId = null;
  }

  /**
   * Get NoteText.
   * @returns {string}
   */
  getNoteText() {
    return this.noteText;
  }

  /**
   * Get Customer_ID.
   * @returns {number}
   */
  getCustomerId() {
    return this.customerId;
  }

  /**
   * Get Account_ID.
   * @returns {number}
   */
  getAccountId() {
    return this.accountId;
  }

  /**
   * Get Order_ID.
   * @returns {number}
   */
  getOrderId() {
    return this.orderId;
  }

  /**
   * Set NoteText.
   * @param {string} noteText
   * @returns {NoteInsert}
   */
  setNoteText(noteText) {
    this.noteText = noteText;
    return this;
  }

  /**
   * Set Customer_ID.
   * @param {number} customerId
   * @returns {NoteInsert}
   */
  setCustomerId(customerId) {
    this.customerId = customerId;
    return this;
  }

  /**
   * Set Account_ID.
   * @param {number} accountId
   * @returns {NoteInsert}
   */
  setAccountId(accountId) {
    this.accountId = accountId;
    return this;
  }

  /**
   * Set Order_ID.
   * @param {number} orderId
   * @returns {NoteInsert}
   */
  setOrderId(orderId) {
    this.orderId = orderId;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['NoteText'] = this.noteText;

    if (!util.isNullOrUndefined(this.customerId)) {
      data['Customer_ID'] = this.customerId;
    }

    if (!util.isNullOrUndefined(this.accountId)) {
      data['Account_ID'] = this.accountId;
    }

    if (!util.isNullOrUndefined(this.orderId)) {
      data['Order_ID'] = this.orderId;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.NoteInsert(this, httpResponse, data);
  }
}

module.exports.NoteInsert = NoteInsert;