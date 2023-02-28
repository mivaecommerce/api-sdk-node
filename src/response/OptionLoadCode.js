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
 * API Response for Option_Load_Code.
 * @see https://docs.miva.com/json-api/functions/option_load_code
 * @class
 */
class OptionLoadCode extends Response {
  /**
   * OptionLoadCode Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);

    if (!this.isSuccess()) {
      return;
    }

    this.data['data'] = new models.ProductOption(this.data['data']);
  }

  /**
   * Get productOption.
   * @returns {?ProductOption}
   */
  getProductOption() {
    return util.isNullOrUndefined(this.data['data']) ?
      {} : this.data['data'];
  }
}

module.exports.OptionLoadCode = OptionLoadCode;