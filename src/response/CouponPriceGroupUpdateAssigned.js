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
 * API Response for CouponPriceGroup_Update_Assigned.
 * @see https://docs.miva.com/json-api/functions/couponpricegroup_update_assigned
 * @class
 */
class CouponPriceGroupUpdateAssigned extends Response {
  /**
   * CouponPriceGroupUpdateAssigned Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

module.exports.CouponPriceGroupUpdateAssigned = CouponPriceGroupUpdateAssigned;