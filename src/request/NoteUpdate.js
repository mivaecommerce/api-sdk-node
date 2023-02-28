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
 * Handles API Request Note_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/note_update
 * @class
 */
class NoteUpdate extends Request {
  /**
   * NoteUpdate Constructor.
   * @param {?BaseClient} client
   * @param {?Note} note
   */
  constructor(client, note = null) {
    super(client);
    this.function = 'Note_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.noteId = null;
    this.noteText = null;

    if (util.isInstanceOf(note, models.Note)) {
      this.setNoteId(note.getId());
      this.setNoteText(note.getNoteText());
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
   * Get NoteText.
   * @returns {string}
   */
  getNoteText() {
    return this.noteText;
  }

  /**
   * Set Note_ID.
   * @param {number} noteId
   * @returns {NoteUpdate}
   */
  setNoteId(noteId) {
    this.noteId = noteId;
    return this;
  }

  /**
   * Set NoteText.
   * @param {string} noteText
   * @returns {NoteUpdate}
   */
  setNoteText(noteText) {
    this.noteText = noteText;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['Note_ID'] = this.getNoteId();

    data['NoteText'] = this.noteText;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.NoteUpdate(this, httpResponse, data);
  }
}

module.exports.NoteUpdate = NoteUpdate;