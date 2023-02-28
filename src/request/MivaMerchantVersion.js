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
 * Handles API Request MivaMerchantVersion. Scope: Domain. 
 * @see https://docs.miva.com/json-api/functions/mivamerchantversion
 * @class
 */
class MivaMerchantVersion extends Request {
  /**
   * MivaMerchantVersion Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'MivaMerchantVersion';
    this.scope = Request.REQUEST_SCOPE_DOMAIN;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.MivaMerchantVersion(this, httpResponse, data);
  }
}

module.exports.MivaMerchantVersion = MivaMerchantVersion;