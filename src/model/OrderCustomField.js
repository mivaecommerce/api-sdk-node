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
 * OrderCustomField data model.
 * @class
 */
class OrderCustomField extends Model {
  /**
   * OrderCustomField Constructor.
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
   * Get code.
   * @returns {string}
   */
  getCode() {
    return this.getField('code');
  }
  
  /**
   * Get name.
   * @returns {string}
   */
  getName() {
    return this.getField('name');
  }
  
  /**
   * Get type.
   * @returns {string}
   */
  getType() {
    return this.getField('type');
  }
  
  /**
   * Get searchable.
   * @returns {boolean}
   */
  getSearchable() {
    return this.getField('searchable', false);
  }
  
  /**
   * Get sortable.
   * @returns {boolean}
   */
  getSortable() {
    return this.getField('sortable', false);
  }
  
  /**
   * Get module.
   * @returns {Module|*}
   */
  getModule() {
    return this.getField('module', null);
  }
  
  /**
   * Get choices.
   * @returns {Array}
   */
  getChoices() {
    return this.getField('choices', []);
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

module.exports.OrderCustomField = OrderCustomField;