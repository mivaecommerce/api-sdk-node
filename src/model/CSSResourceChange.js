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
 * CSSResourceChange data model.
 * @class
 */
class CSSResourceChange extends Model {
  /**
   * CSSResourceChange Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    var i;
    var l;

    super(data);

    if (!util.isUndefined(this.Attributes) && util.isArray(this.Attributes)) {
      for (i = 0, l = this.Attributes.length; i < l; i++) {
        if (!util.isInstanceOf(this.Attributes[i], models.CSSResourceVersionAttribute) && util.isObject(data['Attributes'][i])) {
          this.Attributes[i] = new models.CSSResourceVersionAttribute(this.Attributes[i]);
        } else if (!util.isInstanceOf(this.Attributes[i], models.CSSResourceVersionAttribute)) {
          throw new Error(util.format('Expected array of CSSResourceVersionAttribute or an array of Objects but got %s',
            typeof this.Attributes[i]));
        }
      }
    } else {
      this.Attributes = [];
    }
  }

  /**
   * Get CSSResource_ID.
   * @returns {number}
   */
  getCSSResourceId() {
    return this.getField('CSSResource_ID', 0);
  }
  
  /**
   * Get CSSResource_Code.
   * @returns {string}
   */
  getCSSResourceCode() {
    return this.getField('CSSResource_Code');
  }
  
  /**
   * Get Type.
   * @returns {string}
   */
  getType() {
    return this.getField('Type');
  }
  
  /**
   * Get Global.
   * @returns {boolean}
   */
  getGlobal() {
    return this.getField('Global', false);
  }
  
  /**
   * Get Active.
   * @returns {boolean}
   */
  getActive() {
    return this.getField('Active', false);
  }
  
  /**
   * Get File_Path.
   * @returns {string}
   */
  getFilePath() {
    return this.getField('File_Path');
  }
  
  /**
   * Get Branchless_File_Path.
   * @returns {string}
   */
  getBranchlessFilePath() {
    return this.getField('Branchless_File_Path');
  }
  
  /**
   * Get Source.
   * @returns {string}
   */
  getSource() {
    return this.getField('Source');
  }
  
  /**
   * Get LinkedPages.
   * @returns {Array}
   */
  getLinkedPages() {
    return this.getField('LinkedPages', []);
  }
  
  /**
   * Get LinkedResources.
   * @returns {Array}
   */
  getLinkedResources() {
    return this.getField('LinkedResources', []);
  }
  
  /**
   * Get Attributes.
   * @returns {CSSResourceVersionAttribute[]}
   */
  getAttributes() {
    return this.getField('Attributes', []);
  }
  
  /**
   * Get Notes.
   * @returns {string}
   */
  getNotes() {
    return this.getField('Notes');
  }
  
  /**
   * Set CSSResource_ID.
   * @param {number} CSSResourceId
   * @returns {CSSResourceChange}
   */
  setCSSResourceId(CSSResourceId) {
    return this.setField('CSSResource_ID', CSSResourceId);
  }

  /**
   * Set CSSResource_Code.
   * @param {string} CSSResourceCode
   * @returns {CSSResourceChange}
   */
  setCSSResourceCode(CSSResourceCode) {
    return this.setField('CSSResource_Code', CSSResourceCode);
  }

  /**
   * Set Type.
   * @param {string} type
   * @returns {CSSResourceChange}
   */
  setType(type) {
    return this.setField('Type', type);
  }

  /**
   * Set Global.
   * @param {boolean} global
   * @returns {CSSResourceChange}
   */
  setGlobal(global) {
    return this.setField('Global', global);
  }

  /**
   * Set Active.
   * @param {boolean} active
   * @returns {CSSResourceChange}
   */
  setActive(active) {
    return this.setField('Active', active);
  }

  /**
   * Set File_Path.
   * @param {string} filePath
   * @returns {CSSResourceChange}
   */
  setFilePath(filePath) {
    return this.setField('File_Path', filePath);
  }

  /**
   * Set Branchless_File_Path.
   * @param {string} branchlessFilePath
   * @returns {CSSResourceChange}
   */
  setBranchlessFilePath(branchlessFilePath) {
    return this.setField('Branchless_File_Path', branchlessFilePath);
  }

  /**
   * Set Source.
   * @param {string} source
   * @returns {CSSResourceChange}
   */
  setSource(source) {
    return this.setField('Source', source);
  }

  /**
   * Set LinkedPages.
   * @param {Array} linkedPages
   * @returns {CSSResourceChange}
   */
  setLinkedPages(linkedPages) {
    return this.setField('LinkedPages', linkedPages);
  }

  /**
   * Set LinkedResources.
   * @param {Array} linkedResources
   * @returns {CSSResourceChange}
   */
  setLinkedResources(linkedResources) {
    return this.setField('LinkedResources', linkedResources);
  }

  /**
   * Set Attributes.
   * @param {CSSResourceVersionAttribute[]} attributes
   * @throws {Error}
   * @returns {CSSResourceChange}
   */
  setAttributes(attributes) {
    var i;
    var l;

    if (!util.isArray(attributes)) {
      throw new Error(util.format('Expected an array but got %s', typeof attributes));
    }

    for (i = 0, l = attributes.length; i < l; i++) {
      if (util.isInstanceOf(attributes[i], models.CSSResourceVersionAttribute)) {
          continue;
      } else if (util.isObject(attributes[i])) {
          attributes[i] = new models.CSSResourceVersionAttribute(attributes[i]);
      } else {
        throw new Error(util.format('Expected instance of CSSResourceVersionAttribute, Object, or null but got %s at offset %d',
          typeof attributes[i], i));
      }
    }

    return this.setField('Attributes', attributes);
  }

  /**
   * Set Notes.
   * @param {string} notes
   * @returns {CSSResourceChange}
   */
  setNotes(notes) {
    return this.setField('Notes', notes);
  }
  /**
   * Add a CSSResourceVersionAttribute.
   * @param {CSSResourceVersionAttribute} attribute
   * @returns {CSSResourceChange}
   */
  addAttribute(attribute) {
    if (!util.isInstanceOf(attribute, models.CSSResourceVersionAttribute)) {
      throw new Error(util.format('Expected instance of CSSResourceVersionAttribute but got %s', typeof attribute));
    }

    if (util.isUndefined(this['Attributes'])) {
      this['Attributes'] = [];
    }

    this['Attributes'].push(attribute);

    return this;
  }
  
  /**
   * @override
   */
  toObject() {
    var i;
    var l;
    var ret = Object.assign(this);

    if (util.isArray(ret['Attributes'])) {
      for (i = 0, l = ret['Attributes'].length; i < l; i++) {
        if (util.isInstanceOf(ret['Attributes'][i], models.CSSResourceVersionAttribute)) {
          ret['Attributes'][i] = ret['Attributes'][i].toObject();
        }
      }
    }

    return ret;
  }
}

module.exports.CSSResourceChange = CSSResourceChange;