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
 * JavaScriptResourceChange data model.
 * @class
 */
class JavaScriptResourceChange extends Model {
  /**
   * JavaScriptResourceChange Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    var i;
    var l;

    super(data);

    if (!util.isUndefined(this.Attributes) && util.isArray(this.Attributes)) {
      for (i = 0, l = this.Attributes.length; i < l; i++) {
        if (!util.isInstanceOf(this.Attributes[i], models.JavaScriptResourceVersionAttribute) && util.isObject(data['Attributes'][i])) {
          this.Attributes[i] = new models.JavaScriptResourceVersionAttribute(this.Attributes[i]);
        } else if (!util.isInstanceOf(this.Attributes[i], models.JavaScriptResourceVersionAttribute)) {
          throw new Error(util.format('Expected array of JavaScriptResourceVersionAttribute or an array of Objects but got %s',
            typeof this.Attributes[i]));
        }
      }
    } else {
      this.Attributes = [];
    }
  }

  /**
   * Get JavaScriptResource_ID.
   * @returns {number}
   */
  getJavaScriptResourceId() {
    return this.getField('JavaScriptResource_ID', 0);
  }
  
  /**
   * Get JavaScriptResource_Code.
   * @returns {string}
   */
  getJavaScriptResourceCode() {
    return this.getField('JavaScriptResource_Code');
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
   * @returns {array}
   */
  getLinkedPages() {
    return this.getField('LinkedPages', []);
  }
  
  /**
   * Get LinkedResources.
   * @returns {array}
   */
  getLinkedResources() {
    return this.getField('LinkedResources', []);
  }
  
  /**
   * Get Attributes.
   * @returns {JavaScriptResourceVersionAttribute[]}
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
   * Set JavaScriptResource_ID.
   * @param {number} javaScriptResourceId
   * @returns {JavaScriptResourceChange}
   */
  setJavaScriptResourceId(javaScriptResourceId) {
    return this.setField('JavaScriptResource_ID', javaScriptResourceId);
  }

  /**
   * Set JavaScriptResource_Code.
   * @param {string} javaScriptResourceCode
   * @returns {JavaScriptResourceChange}
   */
  setJavaScriptResourceCode(javaScriptResourceCode) {
    return this.setField('JavaScriptResource_Code', javaScriptResourceCode);
  }

  /**
   * Set Type.
   * @param {string} type
   * @returns {JavaScriptResourceChange}
   */
  setType(type) {
    return this.setField('Type', type);
  }

  /**
   * Set Global.
   * @param {boolean} global
   * @returns {JavaScriptResourceChange}
   */
  setGlobal(global) {
    return this.setField('Global', global);
  }

  /**
   * Set Active.
   * @param {boolean} active
   * @returns {JavaScriptResourceChange}
   */
  setActive(active) {
    return this.setField('Active', active);
  }

  /**
   * Set File_Path.
   * @param {string} filePath
   * @returns {JavaScriptResourceChange}
   */
  setFilePath(filePath) {
    return this.setField('File_Path', filePath);
  }

  /**
   * Set Branchless_File_Path.
   * @param {string} branchlessFilePath
   * @returns {JavaScriptResourceChange}
   */
  setBranchlessFilePath(branchlessFilePath) {
    return this.setField('Branchless_File_Path', branchlessFilePath);
  }

  /**
   * Set Source.
   * @param {string} source
   * @returns {JavaScriptResourceChange}
   */
  setSource(source) {
    return this.setField('Source', source);
  }

  /**
   * Set LinkedPages.
   * @param {Array} linkedPages
   * @returns {JavaScriptResourceChange}
   */
  setLinkedPages(linkedPages) {
    return this.setField('LinkedPages', linkedPages);
  }

  /**
   * Set LinkedResources.
   * @param {Array} linkedResources
   * @returns {JavaScriptResourceChange}
   */
  setLinkedResources(linkedResources) {
    return this.setField('LinkedResources', linkedResources);
  }

  /**
   * Set Attributes.
   * @param {JavaScriptResourceVersionAttribute[]} attributes
   * @throws {Error}
   * @returns {JavaScriptResourceChange}
   */
  setAttributes(attributes) {
    var i;
    var l;

    if (!util.isArray(attributes)) {
      throw new Error(util.format('Expected an array but got %s', typeof attributes));
    }

    for (i = 0, l = attributes.length; i < l; i++) {
      if (util.isInstanceOf(attributes[i], models.JavaScriptResourceVersionAttribute)) {
          continue;
      } else if (util.isObject(attributes[i])) {
          attributes[i] = new models.JavaScriptResourceVersionAttribute(attributes[i]);
      } else {
        throw new Error(util.format('Expected instance of JavaScriptResourceVersionAttribute, Object, or null but got %s at offset %d',
          typeof attributes[i], i));
      }
    }

    return this.setField('Attributes', attributes);
  }

  /**
   * Set Notes.
   * @param {string} notes
   * @returns {JavaScriptResourceChange}
   */
  setNotes(notes) {
    return this.setField('Notes', notes);
  }
  /**
   * Add a JavaScriptResourceVersionAttribute.
   * @param {JavaScriptResourceVersionAttribute} attribute
   * @returns {JavaScriptResourceChange}
   */
  addAttribute(attribute) {
    if (!util.isInstanceOf(attribute, models.JavaScriptResourceVersionAttribute)) {
      throw new Error(util.format('Expected instance of JavaScriptResourceVersionAttribute but got %s', typeof attribute));
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
        if (util.isInstanceOf(ret['Attributes'][i], models.JavaScriptResourceVersionAttribute)) {
          ret['Attributes'][i] = ret['Attributes'][i].toObject();
        }
      }
    }

    return ret;
  }
}

module.exports.JavaScriptResourceChange = JavaScriptResourceChange;