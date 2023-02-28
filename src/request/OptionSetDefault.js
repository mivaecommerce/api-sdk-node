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
 * Handles API Request Option_Set_Default. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/option_set_default
 * @class
 */
class OptionSetDefault extends Request {
  /**
   * OptionSetDefault Constructor.
   * @param {?BaseClient} client
   * @param {?ProductOption} productOption
   */
  constructor(client, productOption = null) {
    super(client);
    this.function = 'Option_Set_Default';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.optionId = null;
    this.optionCode = null;
    this.attributeId = null;
    this.optionDefault = null;

    if (util.isInstanceOf(productOption, models.ProductOption)) {
      if (productOption.getId()) {
        this.setOptionId(productOption.getId());
      } else if (productOption.getCode()) {
        this.setOptionCode(productOption.getCode());
      }

      if (productOption.getAttributeId()) {
        this.setAttributeId(productOption.getAttributeId());
      }

      this.setOptionCode(productOption.getCode());
    }
  }

  /**
   * Get Option_ID.
   * @returns {number}
   */
  getOptionId() {
    return this.optionId;
  }

  /**
   * Get Option_Code.
   * @returns {string}
   */
  getOptionCode() {
    return this.optionCode;
  }

  /**
   * Get Attribute_ID.
   * @returns {number}
   */
  getAttributeId() {
    return this.attributeId;
  }

  /**
   * Get Option_Default.
   * @returns {boolean}
   */
  getOptionDefault() {
    return this.optionDefault;
  }

  /**
   * Set Option_ID.
   * @param {number} optionId
   * @returns {OptionSetDefault}
   */
  setOptionId(optionId) {
    this.optionId = optionId;
    return this;
  }

  /**
   * Set Option_Code.
   * @param {string} optionCode
   * @returns {OptionSetDefault}
   */
  setOptionCode(optionCode) {
    this.optionCode = optionCode;
    return this;
  }

  /**
   * Set Attribute_ID.
   * @param {number} attributeId
   * @returns {OptionSetDefault}
   */
  setAttributeId(attributeId) {
    this.attributeId = attributeId;
    return this;
  }

  /**
   * Set Option_Default.
   * @param {boolean} optionDefault
   * @returns {OptionSetDefault}
   */
  setOptionDefault(optionDefault) {
    this.optionDefault = optionDefault;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.optionId)) {
      data['Option_ID'] = this.optionId;
    } else if (!util.isNullOrUndefined(this.optionCode)) {
      data['Option_Code'] = this.optionCode;
    }

    if (!util.isNullOrUndefined(this.attributeId)) {
      data['Attribute_ID'] = this.attributeId;
    }

    if (!util.isNullOrUndefined(this.optionCode)) {
      data['Option_Code'] = this.optionCode;
    }

    if (!util.isNullOrUndefined(this.optionDefault)) {
      data['Option_Default'] = this.optionDefault;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.OptionSetDefault(this, httpResponse, data);
  }
}

module.exports.OptionSetDefault = OptionSetDefault;