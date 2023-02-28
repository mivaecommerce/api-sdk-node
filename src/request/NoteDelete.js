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
 * Handles API Request Note_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/note_delete
 * @class
 */
class NoteDelete extends Request {
  /**
   * NoteDelete Constructor.
   * @param {?BaseClient} client
   * @param {?Note} note
   */
  constructor(client, note = null) {
    super(client);
    this.function = 'Note_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.noteId = null;

    if (util.isInstanceOf(note, models.Note)) {
      this.setNoteId(note.getId());
    }
  }

  /**
   * Get Note_ID.
   * @returns {number}
   */
  getNoteId() {
    return this.noteId;
  }

  /**
   * Set Note_ID.
   * @param {number} noteId
   * @returns {NoteDelete}
   */
  setNoteId(noteId) {
    this.noteId = noteId;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['Note_ID'] = this.noteId;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.NoteDelete(this, httpResponse, data);
  }
}

module.exports.NoteDelete = NoteDelete;