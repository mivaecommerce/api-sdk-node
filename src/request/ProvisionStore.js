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
 * Handles API Request Provision_Store. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/provision_store
 * @class
 */
class ProvisionStore extends Request {
  /**
   * ProvisionStore Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'Provision_Store';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.xml = null;
  }

  /**
   * Get xml.
   * @returns {string}
   */
  getXml() {
    return this.xml;
  }

  /**
   * Set xml.
   * @param {string} xml
   * @returns {ProvisionStore}
   */
  setXml(xml) {
    this.xml = xml;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['XML'] = this.xml;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ProvisionStore(this, httpResponse, data);
  }
}

module.exports.ProvisionStore = ProvisionStore;