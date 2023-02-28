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
const { ProductVariantGenerate } = require('./ProductVariantGenerate')

/** 
 * Handles API Request ProductVariant_Generate_Delimiter. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/productvariant_generate_delimiter
 * @class
 */
class ProductVariantGenerateDelimiter extends ProductVariantGenerate {
  /**
   * ProductVariantGenerateDelimiter Constructor.
   * @param {?BaseClient} client
   * @param {?Product} product
   */
  constructor(client, product = null) {
    super(client, product);
    this.function = 'ProductVariant_Generate_Delimiter';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.delimiter = null;
  }

  /**
   * Get Delimiter.
   * @returns {string}
   */
  getDelimiter() {
    return this.delimiter;
  }

  /**
   * Set Delimiter.
   * @param {string} delimiter
   * @returns {ProductVariantGenerateDelimiter}
   */
  setDelimiter(delimiter) {
    this.delimiter = delimiter;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.delimiter)) {
      data['Delimiter'] = this.delimiter;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ProductVariantGenerateDelimiter(this, httpResponse, data);
  }
}

module.exports.ProductVariantGenerateDelimiter = ProductVariantGenerateDelimiter;