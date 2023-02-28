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
 * TemplateChange data model.
 * @class
 */
class TemplateChange extends Model {
  /**
   * TemplateChange Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);

    if (!util.isUndefined(this.Settings)) {
      if (!util.isInstanceOf(this.Settings, models.VersionSettings)) {
        this.Settings = new models.VersionSettings(this.Settings);
      }
    }
  }

  /**
   * Get Template_ID.
   * @returns {number}
   */
  getTemplateId() {
    return this.getField('Template_ID', 0);
  }
  
  /**
   * Get Template_Filename.
   * @returns {string}
   */
  getTemplateFilename() {
    return this.getField('Template_Filename');
  }
  
  /**
   * Get Source.
   * @returns {string}
   */
  getSource() {
    return this.getField('Source');
  }
  
  /**
   * Get Settings.
   * @returns {VersionSettings|*}
   */
  getSettings() {
    return this.getField('Settings', null);
  }
  
  /**
   * Get Notes.
   * @returns {string}
   */
  getNotes() {
    return this.getField('Notes');
  }
  
  /**
   * Set Template_ID.
   * @param {number} templateId
   * @returns {TemplateChange}
   */
  setTemplateId(templateId) {
    return this.setField('Template_ID', templateId);
  }

  /**
   * Set Template_Filename.
   * @param {string} templateFilename
   * @returns {TemplateChange}
   */
  setTemplateFilename(templateFilename) {
    return this.setField('Template_Filename', templateFilename);
  }

  /**
   * Set Source.
   * @param {string} source
   * @returns {TemplateChange}
   */
  setSource(source) {
    return this.setField('Source', source);
  }

  /**
   * Set Settings.
   * @param {VersionSettings|Object} settings
   * @returns {TemplateChange}
   * @throws {Error}
   */
  setSettings(settings) {
    if (util.isInstanceOf(settings, models.VersionSettings) || util.isNull(settings)) {
      return this.setField('Settings', settings);
    } else if (util.isObject(settings)) {
      return this.setField('Settings', new models.VersionSettings(settings));
    }

    throw new Error(util.format('Expected instance of VersionSettings, Object, or null but got %s',
      typeof settings));
  }

  /**
   * Set Notes.
   * @param {string} notes
   * @returns {TemplateChange}
   */
  setNotes(notes) {
    return this.setField('Notes', notes);
  }
  
  /**
   * @override
   */
  toObject() {
    var ret = Object.assign(this);

    if (util.isInstanceOf(ret['Settings'], models.VersionSettings)) {
      ret['Settings'] = ret['Settings'].toObject();
    }

    return ret;
  }
}

module.exports.TemplateChange = TemplateChange;