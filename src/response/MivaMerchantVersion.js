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
 * API Response for MivaMerchantVersion.
 * @see https://docs.miva.com/json-api/functions/mivamerchantversion
 * @class
 */
class MivaMerchantVersion extends Response {
  /**
   * MivaMerchantVersion Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);

    if (!this.isSuccess()) {
      return;
    }

    this.data['data'] = new models.MerchantVersion(this.data['data']);
  }

  /**
   * Get merchantVersion.
   * @returns {?MerchantVersion}
   */
  getMerchantVersion() {
    return util.isNullOrUndefined(this.data['data']) ?
      {} : this.data['data'];
  }
}

module.exports.MivaMerchantVersion = MivaMerchantVersion;