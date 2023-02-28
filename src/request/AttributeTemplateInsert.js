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
 * Handles API Request AttributeTemplate_Insert. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/attributetemplate_insert
 * @class
 */
class AttributeTemplateInsert extends Request {
  /**
   * AttributeTemplateInsert Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'AttributeTemplate_Insert';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.code = null;
    this.prompt = null;
  }

  /**
   * Get Code.
   * @returns {string}
   */
  getCode() {
    return this.code;
  }

  /**
   * Get Prompt.
   * @returns {string}
   */
  getPrompt() {
    return this.prompt;
  }

  /**
   * Set Code.
   * @param {string} code
   * @returns {AttributeTemplateInsert}
   */
  setCode(code) {
    this.code = code;
    return this;
  }

  /**
   * Set Prompt.
   * @param {string} prompt
   * @returns {AttributeTemplateInsert}
   */
  setPrompt(prompt) {
    this.prompt = prompt;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['Code'] = this.code;

    data['Prompt'] = this.prompt;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.AttributeTemplateInsert(this, httpResponse, data);
  }
}

module.exports.AttributeTemplateInsert = AttributeTemplateInsert;