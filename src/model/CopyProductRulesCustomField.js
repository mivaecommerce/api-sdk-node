/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const models = require('./../models');
const { Model } = require('./../abstract');

/** 
 * CopyProductRulesCustomField data model.
 * @class
 */
class CopyProductRulesCustomField extends Model {
  /**
   * CopyProductRulesCustomField Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);

    if (!util.isUndefined(this.module)) {
      if (!util.isInstanceOf(this.module, models.Module) && util.isObject(this.module)) {
        this.module = new models.Module(this.module);
      } else if (!util.isInstanceOf(this.module, models.Module)) {
        throw new Error(util.format('Expected Module or an Object but got %s',
          typeof this.module));
      }
    } else {
      this.module = {};
    }
  }

  /**
   * Get rules_id.
   * @returns {number}
   */
  getRulesId() {
    return this.getField('rules_id', 0);
  }
  
  /**
   * Get assigned.
   * @returns {boolean}
   */
  getAssigned() {
    return this.getField('assigned', false);
  }
  
  /**
   * Get field_code.
   * @returns {string}
   */
  getFieldCode() {
    return this.getField('field_code');
  }
  
  /**
   * Get field_name.
   * @returns {string}
   */
  getFieldName() {
    return this.getField('field_name');
  }
  
  /**
   * Get module.
   * @returns {Module|*}
   */
  getModule() {
    return this.getField('module', null);
  }
  
  /**
   * @override
   */
  toObject() {
    var ret = Object.assign(this);

    if (util.isInstanceOf(ret['module'], models.Module)) {
      ret['module'] = ret['module'].toObject();
    }

    return ret;
  }
}

module.exports.CopyProductRulesCustomField = CopyProductRulesCustomField;