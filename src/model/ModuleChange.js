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
 * ModuleChange data model.
 * @class
 */
class ModuleChange extends Model {
  /**
   * ModuleChange Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);

    if (!util.isUndefined(this.Module_Data)) {
      if (!util.isInstanceOf(this.Module_Data, models.VersionSettings)) {
        this.Module_Data = new models.VersionSettings(this.Module_Data);
      }
    }
  }

  /**
   * Get Module_Code.
   * @returns {string}
   */
  getModuleCode() {
    return this.getField('Module_Code');
  }
  
  /**
   * Get Module_Operation.
   * @returns {string}
   */
  getModuleOperation() {
    return this.getField('Module_Operation');
  }
  
  /**
   * Get Module_Data.
   * @returns {VersionSettings|*}
   */
  getModuleData() {
    return this.getField('Module_Data', null);
  }
  
  /**
   * Set Module_Code.
   * @param {string} moduleCode
   * @returns {ModuleChange}
   */
  setModuleCode(moduleCode) {
    return this.setField('Module_Code', moduleCode);
  }

  /**
   * Set Module_Operation.
   * @param {string} moduleOperation
   * @returns {ModuleChange}
   */
  setModuleOperation(moduleOperation) {
    return this.setField('Module_Operation', moduleOperation);
  }

  /**
   * Set Module_Data.
   * @param {VersionSettings|Object} moduleData
   * @returns {ModuleChange}
   * @throws {Error}
   */
  setModuleData(moduleData) {
    if (util.isInstanceOf(moduleData, models.VersionSettings) || util.isNull(moduleData)) {
      return this.setField('Module_Data', moduleData);
    } else if (util.isObject(moduleData)) {
      return this.setField('Module_Data', new models.VersionSettings(moduleData));
    }

    throw new Error(util.format('Expected instance of VersionSettings, Object, or null but got %s',
      typeof moduleData));
  }
  
  /**
   * @override
   */
  toObject() {
    var ret = Object.assign(this);

    if (util.isInstanceOf(ret['Module_Data'], models.VersionSettings)) {
      ret['Module_Data'] = ret['Module_Data'].toObject();
    }

    return ret;
  }
}

module.exports.ModuleChange = ModuleChange;