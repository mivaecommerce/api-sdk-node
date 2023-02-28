/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const models = require('./../models');
const { Response }  = require('./../abstract');

/** 
 * API Response for Provision_Store.
 * @see https://docs.miva.com/json-api/functions/provision_store
 * @class
 */
class ProvisionStore extends Response {
  /**
   * ProvisionStore Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
    var i;
    var l;

    if (!this.isSuccess()) {
      return;
    }

    if (util.isArray(this.data['data'])) {
      for (i = 0, l = this.data['data'].length; i < l; i++) {
        this.data['data'][i] = new models.ProvisionMessage(this.data['data'][i]);
      }
    }
  }

  /**
   * Get provisionMessages.
   * @returns {ProvisionMessage[]}
   */
  getProvisionMessages() {
    return util.isNullOrUndefined(this.data['data']) ?
      [] : this.data['data'];
  }
}

module.exports.ProvisionStore = ProvisionStore;