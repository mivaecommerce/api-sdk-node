/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const models = require('./../models');
const { Response }  = require('./../abstract');
const { ProductVariantGenerate } = require('./ProductVariantGenerate')

/** 
 * API Response for ProductVariant_Generate_Delimiter.
 * @see https://docs.miva.com/json-api/functions/productvariant_generate_delimiter
 * @class
 */
class ProductVariantGenerateDelimiter extends ProductVariantGenerate {
  /**
   * ProductVariantGenerateDelimiter Constructor.
   * @param {Request} request
   * @param {http.IncomingMessage} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }
}

module.exports.ProductVariantGenerateDelimiter = ProductVariantGenerateDelimiter;