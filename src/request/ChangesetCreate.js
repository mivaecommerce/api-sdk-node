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
 * Handles API Request Changeset_Create. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/changeset_create
 * @class
 */
class ChangesetCreate extends Request {
  /**
   * ChangesetCreate Constructor.
   * @param {?BaseClient} client
   * @param {?Branch} branch
   */
  constructor(client, branch = null) {
    super(client);
    this.function = 'Changeset_Create';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.branchId = null;
    this.branchName = null;
    this.editBranch = null;
    this.notes = null;
    this.tags = null;
    this.templateChanges = [];
    this.resourceGroupChanges = [];
    this.CSSResourceChanges = [];
    this.javaScriptResourceChanges = [];
    this.propertyChanges = [];
    this.moduleChanges = [];

    if (util.isInstanceOf(branch, models.Branch)) {
      if (branch.getId()) {
        this.setBranchId(branch.getId());
      }

      this.setBranchName(branch.getName());
    }
  }

  /**
   * Get Branch_ID.
   * @returns {number}
   */
  getBranchId() {
    return this.branchId;
  }

  /**
   * Get Branch_Name.
   * @returns {string}
   */
  getBranchName() {
    return this.branchName;
  }

  /**
   * Get Edit_Branch.
   * @returns {string}
   */
  getEditBranch() {
    return this.editBranch;
  }

  /**
   * Get Notes.
   * @returns {string}
   */
  getNotes() {
    return this.notes;
  }

  /**
   * Get Tags.
   * @returns {string}
   */
  getTags() {
    return this.tags;
  }

  /**
   * Get Template_Changes.
   * @returns {TemplateChange[]}
   */
  getTemplateChanges() {
    return this.templateChanges;
  }

  /**
   * Get ResourceGroup_Changes.
   * @returns {ResourceGroupChange[]}
   */
  getResourceGroupChanges() {
    return this.resourceGroupChanges;
  }

  /**
   * Get CSSResource_Changes.
   * @returns {CSSResourceChange[]}
   */
  getCSSResourceChanges() {
    return this.CSSResourceChanges;
  }

  /**
   * Get JavaScriptResource_Changes.
   * @returns {JavaScriptResourceChange[]}
   */
  getJavaScriptResourceChanges() {
    return this.javaScriptResourceChanges;
  }

  /**
   * Get Property_Changes.
   * @returns {PropertyChange[]}
   */
  getPropertyChanges() {
    return this.propertyChanges;
  }

  /**
   * Get Module_Changes.
   * @returns {ModuleChange[]}
   */
  getModuleChanges() {
    return this.moduleChanges;
  }

  /**
   * Set Branch_ID.
   * @param {number} branchId
   * @returns {ChangesetCreate}
   */
  setBranchId(branchId) {
    this.branchId = branchId;
    return this;
  }

  /**
   * Set Branch_Name.
   * @param {string} branchName
   * @returns {ChangesetCreate}
   */
  setBranchName(branchName) {
    this.branchName = branchName;
    return this;
  }

  /**
   * Set Edit_Branch.
   * @param {string} editBranch
   * @returns {ChangesetCreate}
   */
  setEditBranch(editBranch) {
    this.editBranch = editBranch;
    return this;
  }

  /**
   * Set Notes.
   * @param {string} notes
   * @returns {ChangesetCreate}
   */
  setNotes(notes) {
    this.notes = notes;
    return this;
  }

  /**
   * Set Tags.
   * @param {string} tags
   * @returns {ChangesetCreate}
   */
  setTags(tags) {
    this.tags = tags;
    return this;
  }

  /**
   * Set Template_Changes.
   * @param {TemplateChange[]} templateChanges
   * @throws {Error}
   * @returns {ChangesetCreate}
   */
  setTemplateChanges(templateChanges) {
    var i;
    var l;

    if (!util.isArray(templateChanges)) {
      throw new Error(util.format('Expected an array but got %s', typeof templateChanges));
    }

    for (i = 0, l = templateChanges.length; i < l; i++) {
      if (!util.isInstanceOf(templateChanges[i], models.TemplateChange) && util.isObject(templateChanges[i])) {
        templateChanges[i] = new models.TemplateChange(templateChanges[i]);
      } else if (!util.isInstanceOf(templateChanges[i], models.TemplateChange)) {
        throw new Error(util.format('Expected instance of TemplateChange or an Object but got %s',
          typeof templateChanges[i]));
      }
    }

    this.templateChanges = templateChanges;
    return this;
  }

  /**
   * Set ResourceGroup_Changes.
   * @param {ResourceGroupChange[]} resourceGroupChanges
   * @throws {Error}
   * @returns {ChangesetCreate}
   */
  setResourceGroupChanges(resourceGroupChanges) {
    var i;
    var l;

    if (!util.isArray(resourceGroupChanges)) {
      throw new Error(util.format('Expected an array but got %s', typeof resourceGroupChanges));
    }

    for (i = 0, l = resourceGroupChanges.length; i < l; i++) {
      if (!util.isInstanceOf(resourceGroupChanges[i], models.ResourceGroupChange) && util.isObject(resourceGroupChanges[i])) {
        resourceGroupChanges[i] = new models.ResourceGroupChange(resourceGroupChanges[i]);
      } else if (!util.isInstanceOf(resourceGroupChanges[i], models.ResourceGroupChange)) {
        throw new Error(util.format('Expected instance of ResourceGroupChange or an Object but got %s',
          typeof resourceGroupChanges[i]));
      }
    }

    this.resourceGroupChanges = resourceGroupChanges;
    return this;
  }

  /**
   * Set CSSResource_Changes.
   * @param {CSSResourceChange[]} CSSResourceChanges
   * @throws {Error}
   * @returns {ChangesetCreate}
   */
  setCSSResourceChanges(CSSResourceChanges) {
    var i;
    var l;

    if (!util.isArray(CSSResourceChanges)) {
      throw new Error(util.format('Expected an array but got %s', typeof CSSResourceChanges));
    }

    for (i = 0, l = CSSResourceChanges.length; i < l; i++) {
      if (!util.isInstanceOf(CSSResourceChanges[i], models.CSSResourceChange) && util.isObject(CSSResourceChanges[i])) {
        CSSResourceChanges[i] = new models.CSSResourceChange(CSSResourceChanges[i]);
      } else if (!util.isInstanceOf(CSSResourceChanges[i], models.CSSResourceChange)) {
        throw new Error(util.format('Expected instance of CSSResourceChange or an Object but got %s',
          typeof CSSResourceChanges[i]));
      }
    }

    this.CSSResourceChanges = CSSResourceChanges;
    return this;
  }

  /**
   * Set JavaScriptResource_Changes.
   * @param {JavaScriptResourceChange[]} javaScriptResourceChanges
   * @throws {Error}
   * @returns {ChangesetCreate}
   */
  setJavaScriptResourceChanges(javaScriptResourceChanges) {
    var i;
    var l;

    if (!util.isArray(javaScriptResourceChanges)) {
      throw new Error(util.format('Expected an array but got %s', typeof javaScriptResourceChanges));
    }

    for (i = 0, l = javaScriptResourceChanges.length; i < l; i++) {
      if (!util.isInstanceOf(javaScriptResourceChanges[i], models.JavaScriptResourceChange) && util.isObject(javaScriptResourceChanges[i])) {
        javaScriptResourceChanges[i] = new models.JavaScriptResourceChange(javaScriptResourceChanges[i]);
      } else if (!util.isInstanceOf(javaScriptResourceChanges[i], models.JavaScriptResourceChange)) {
        throw new Error(util.format('Expected instance of JavaScriptResourceChange or an Object but got %s',
          typeof javaScriptResourceChanges[i]));
      }
    }

    this.javaScriptResourceChanges = javaScriptResourceChanges;
    return this;
  }

  /**
   * Set Property_Changes.
   * @param {PropertyChange[]} propertyChanges
   * @throws {Error}
   * @returns {ChangesetCreate}
   */
  setPropertyChanges(propertyChanges) {
    var i;
    var l;

    if (!util.isArray(propertyChanges)) {
      throw new Error(util.format('Expected an array but got %s', typeof propertyChanges));
    }

    for (i = 0, l = propertyChanges.length; i < l; i++) {
      if (!util.isInstanceOf(propertyChanges[i], models.PropertyChange) && util.isObject(propertyChanges[i])) {
        propertyChanges[i] = new models.PropertyChange(propertyChanges[i]);
      } else if (!util.isInstanceOf(propertyChanges[i], models.PropertyChange)) {
        throw new Error(util.format('Expected instance of PropertyChange or an Object but got %s',
          typeof propertyChanges[i]));
      }
    }

    this.propertyChanges = propertyChanges;
    return this;
  }

  /**
   * Set Module_Changes.
   * @param {ModuleChange[]} moduleChanges
   * @throws {Error}
   * @returns {ChangesetCreate}
   */
  setModuleChanges(moduleChanges) {
    var i;
    var l;

    if (!util.isArray(moduleChanges)) {
      throw new Error(util.format('Expected an array but got %s', typeof moduleChanges));
    }

    for (i = 0, l = moduleChanges.length; i < l; i++) {
      if (!util.isInstanceOf(moduleChanges[i], models.ModuleChange) && util.isObject(moduleChanges[i])) {
        moduleChanges[i] = new models.ModuleChange(moduleChanges[i]);
      } else if (!util.isInstanceOf(moduleChanges[i], models.ModuleChange)) {
        throw new Error(util.format('Expected instance of ModuleChange or an Object but got %s',
          typeof moduleChanges[i]));
      }
    }

    this.moduleChanges = moduleChanges;
    return this;
  }

  /**
   * Add Template_Changes.
   * @param {TemplateChange} templateChange
   * @throws {Error}
   * @returns {ChangesetCreate}
   */
  addTemplateChange(templateChange) {
    if (util.isInstanceOf(templateChange, models.TemplateChange)) {
      this.templateChanges.push(templateChange);
    } else if (util.isObject(templateChange)) {
      this.templateChanges.push(new models.TemplateChange(templateChange));
    } else {
      throw new Error(util.format('Expected instance of TemplateChange or Object but got %s',
        typeof templateChange));
    }

    return this;
  }

  /**
   * Add many TemplateChange.
   * @param {TemplateChange[]} templateChanges
   * @throws {Error}
   * @returns {ChangesetCreate}
   */
  addTemplateChanges(templateChanges) {
    var i;
    var l;

    if (!util.isArray(templateChanges)) {
      throw new Error(util.format('Expecting an array of TemplateChange but got %s',
        typeof templateChanges));
    }

    for (i = 0, l = templateChanges.length; i < l; i++) {
      if (util.isInstanceOf(templateChanges[i], models.TemplateChange)) {
        this.templateChanges.push(templateChanges[i]);
      } else if (util.isObject(templateChanges[i])) {
        this.templateChanges.push(new models.TemplateChange(templateChanges[i]));
      } else {
        throw new Error(util.format('Expected array of TemplateChange or an array of Object but got %s',
          typeof templateChanges[i]));
      }
    }

    return this;
  }

  /**
   * Add ResourceGroup_Changes.
   * @param {ResourceGroupChange} resourceGroupChange
   * @throws {Error}
   * @returns {ChangesetCreate}
   */
  addResourceGroupChange(resourceGroupChange) {
    if (util.isInstanceOf(resourceGroupChange, models.ResourceGroupChange)) {
      this.resourceGroupChanges.push(resourceGroupChange);
    } else if (util.isObject(resourceGroupChange)) {
      this.resourceGroupChanges.push(new models.ResourceGroupChange(resourceGroupChange));
    } else {
      throw new Error(util.format('Expected instance of ResourceGroupChange or Object but got %s',
        typeof resourceGroupChange));
    }

    return this;
  }

  /**
   * Add many ResourceGroupChange.
   * @param {ResourceGroupChange[]} resourceGroupChanges
   * @throws {Error}
   * @returns {ChangesetCreate}
   */
  addResourceGroupChanges(resourceGroupChanges) {
    var i;
    var l;

    if (!util.isArray(resourceGroupChanges)) {
      throw new Error(util.format('Expecting an array of ResourceGroupChange but got %s',
        typeof resourceGroupChanges));
    }

    for (i = 0, l = resourceGroupChanges.length; i < l; i++) {
      if (util.isInstanceOf(resourceGroupChanges[i], models.ResourceGroupChange)) {
        this.resourceGroupChanges.push(resourceGroupChanges[i]);
      } else if (util.isObject(resourceGroupChanges[i])) {
        this.resourceGroupChanges.push(new models.ResourceGroupChange(resourceGroupChanges[i]));
      } else {
        throw new Error(util.format('Expected array of ResourceGroupChange or an array of Object but got %s',
          typeof resourceGroupChanges[i]));
      }
    }

    return this;
  }

  /**
   * Add CSSResource_Changes.
   * @param {CSSResourceChange} CSSResourceChange
   * @throws {Error}
   * @returns {ChangesetCreate}
   */
  addCSSResourceChange(CSSResourceChange) {
    if (util.isInstanceOf(CSSResourceChange, models.CSSResourceChange)) {
      this.CSSResourceChanges.push(CSSResourceChange);
    } else if (util.isObject(CSSResourceChange)) {
      this.CSSResourceChanges.push(new models.CSSResourceChange(CSSResourceChange));
    } else {
      throw new Error(util.format('Expected instance of CSSResourceChange or Object but got %s',
        typeof CSSResourceChange));
    }

    return this;
  }

  /**
   * Add many CSSResourceChange.
   * @param {CSSResourceChange[]} CSSResourceChanges
   * @throws {Error}
   * @returns {ChangesetCreate}
   */
  addCSSResourceChanges(CSSResourceChanges) {
    var i;
    var l;

    if (!util.isArray(CSSResourceChanges)) {
      throw new Error(util.format('Expecting an array of CSSResourceChange but got %s',
        typeof CSSResourceChanges));
    }

    for (i = 0, l = CSSResourceChanges.length; i < l; i++) {
      if (util.isInstanceOf(CSSResourceChanges[i], models.CSSResourceChange)) {
        this.CSSResourceChanges.push(CSSResourceChanges[i]);
      } else if (util.isObject(CSSResourceChanges[i])) {
        this.CSSResourceChanges.push(new models.CSSResourceChange(CSSResourceChanges[i]));
      } else {
        throw new Error(util.format('Expected array of CSSResourceChange or an array of Object but got %s',
          typeof CSSResourceChanges[i]));
      }
    }

    return this;
  }

  /**
   * Add JavaScriptResource_Changes.
   * @param {JavaScriptResourceChange} javaScriptResourceChange
   * @throws {Error}
   * @returns {ChangesetCreate}
   */
  addJavaScriptResourceChange(javaScriptResourceChange) {
    if (util.isInstanceOf(javaScriptResourceChange, models.JavaScriptResourceChange)) {
      this.javaScriptResourceChanges.push(javaScriptResourceChange);
    } else if (util.isObject(javaScriptResourceChange)) {
      this.javaScriptResourceChanges.push(new models.JavaScriptResourceChange(javaScriptResourceChange));
    } else {
      throw new Error(util.format('Expected instance of JavaScriptResourceChange or Object but got %s',
        typeof javaScriptResourceChange));
    }

    return this;
  }

  /**
   * Add many JavaScriptResourceChange.
   * @param {JavaScriptResourceChange[]} javaScriptResourceChanges
   * @throws {Error}
   * @returns {ChangesetCreate}
   */
  addJavaScriptResourceChanges(javaScriptResourceChanges) {
    var i;
    var l;

    if (!util.isArray(javaScriptResourceChanges)) {
      throw new Error(util.format('Expecting an array of JavaScriptResourceChange but got %s',
        typeof javaScriptResourceChanges));
    }

    for (i = 0, l = javaScriptResourceChanges.length; i < l; i++) {
      if (util.isInstanceOf(javaScriptResourceChanges[i], models.JavaScriptResourceChange)) {
        this.javaScriptResourceChanges.push(javaScriptResourceChanges[i]);
      } else if (util.isObject(javaScriptResourceChanges[i])) {
        this.javaScriptResourceChanges.push(new models.JavaScriptResourceChange(javaScriptResourceChanges[i]));
      } else {
        throw new Error(util.format('Expected array of JavaScriptResourceChange or an array of Object but got %s',
          typeof javaScriptResourceChanges[i]));
      }
    }

    return this;
  }

  /**
   * Add Property_Changes.
   * @param {PropertyChange} propertyChange
   * @throws {Error}
   * @returns {ChangesetCreate}
   */
  addPropertyChange(propertyChange) {
    if (util.isInstanceOf(propertyChange, models.PropertyChange)) {
      this.propertyChanges.push(propertyChange);
    } else if (util.isObject(propertyChange)) {
      this.propertyChanges.push(new models.PropertyChange(propertyChange));
    } else {
      throw new Error(util.format('Expected instance of PropertyChange or Object but got %s',
        typeof propertyChange));
    }

    return this;
  }

  /**
   * Add many PropertyChange.
   * @param {PropertyChange[]} propertyChanges
   * @throws {Error}
   * @returns {ChangesetCreate}
   */
  addPropertyChanges(propertyChanges) {
    var i;
    var l;

    if (!util.isArray(propertyChanges)) {
      throw new Error(util.format('Expecting an array of PropertyChange but got %s',
        typeof propertyChanges));
    }

    for (i = 0, l = propertyChanges.length; i < l; i++) {
      if (util.isInstanceOf(propertyChanges[i], models.PropertyChange)) {
        this.propertyChanges.push(propertyChanges[i]);
      } else if (util.isObject(propertyChanges[i])) {
        this.propertyChanges.push(new models.PropertyChange(propertyChanges[i]));
      } else {
        throw new Error(util.format('Expected array of PropertyChange or an array of Object but got %s',
          typeof propertyChanges[i]));
      }
    }

    return this;
  }

  /**
   * Add Module_Changes.
   * @param {ModuleChange} moduleChange
   * @throws {Error}
   * @returns {ChangesetCreate}
   */
  addModuleChange(moduleChange) {
    if (util.isInstanceOf(moduleChange, models.ModuleChange)) {
      this.moduleChanges.push(moduleChange);
    } else if (util.isObject(moduleChange)) {
      this.moduleChanges.push(new models.ModuleChange(moduleChange));
    } else {
      throw new Error(util.format('Expected instance of ModuleChange or Object but got %s',
        typeof moduleChange));
    }

    return this;
  }

  /**
   * Add many ModuleChange.
   * @param {ModuleChange[]} moduleChanges
   * @throws {Error}
   * @returns {ChangesetCreate}
   */
  addModuleChanges(moduleChanges) {
    var i;
    var l;

    if (!util.isArray(moduleChanges)) {
      throw new Error(util.format('Expecting an array of ModuleChange but got %s',
        typeof moduleChanges));
    }

    for (i = 0, l = moduleChanges.length; i < l; i++) {
      if (util.isInstanceOf(moduleChanges[i], models.ModuleChange)) {
        this.moduleChanges.push(moduleChanges[i]);
      } else if (util.isObject(moduleChanges[i])) {
        this.moduleChanges.push(new models.ModuleChange(moduleChanges[i]));
      } else {
        throw new Error(util.format('Expected array of ModuleChange or an array of Object but got %s',
          typeof moduleChanges[i]));
      }
    }

    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var i;
    var l;
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.branchId)) {
      data['Branch_ID'] = this.branchId;
    } else if (!util.isNullOrUndefined(this.branchName)) {
      data['Branch_Name'] = this.branchName;
    } else if (!util.isNullOrUndefined(this.editBranch)) {
      data['Edit_Branch'] = this.editBranch;
    }

    if (!util.isNullOrUndefined(this.branchName)) {
      data['Branch_Name'] = this.branchName;
    }

    if (!util.isNullOrUndefined(this.notes)) {
      data['Notes'] = this.notes;
    }

    if (!util.isNullOrUndefined(this.tags)) {
      data['Tags'] = this.tags;
    }

    if (util.isArray(this.templateChanges)) {
      data['Template_Changes'] = [];

      for (i = 0, l = this.templateChanges.length; i < l; i++) {
        if (util.isObject(this.templateChanges[i])) {
            data['Template_Changes'].push(this.templateChanges[i].toObject());
        }
      }
    }

    if (util.isArray(this.resourceGroupChanges)) {
      data['ResourceGroup_Changes'] = [];

      for (i = 0, l = this.resourceGroupChanges.length; i < l; i++) {
        if (util.isObject(this.resourceGroupChanges[i])) {
            data['ResourceGroup_Changes'].push(this.resourceGroupChanges[i].toObject());
        }
      }
    }

    if (util.isArray(this.CSSResourceChanges)) {
      data['CSSResource_Changes'] = [];

      for (i = 0, l = this.CSSResourceChanges.length; i < l; i++) {
        if (util.isObject(this.CSSResourceChanges[i])) {
            data['CSSResource_Changes'].push(this.CSSResourceChanges[i].toObject());
        }
      }
    }

    if (util.isArray(this.javaScriptResourceChanges)) {
      data['JavaScriptResource_Changes'] = [];

      for (i = 0, l = this.javaScriptResourceChanges.length; i < l; i++) {
        if (util.isObject(this.javaScriptResourceChanges[i])) {
            data['JavaScriptResource_Changes'].push(this.javaScriptResourceChanges[i].toObject());
        }
      }
    }

    if (util.isArray(this.propertyChanges)) {
      data['Property_Changes'] = [];

      for (i = 0, l = this.propertyChanges.length; i < l; i++) {
        if (util.isObject(this.propertyChanges[i])) {
            data['Property_Changes'].push(this.propertyChanges[i].toObject());
        }
      }
    }

    if (util.isArray(this.moduleChanges)) {
      data['Module_Changes'] = [];

      for (i = 0, l = this.moduleChanges.length; i < l; i++) {
        if (util.isObject(this.moduleChanges[i])) {
            data['Module_Changes'].push(this.moduleChanges[i].toObject());
        }
      }
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ChangesetCreate(this, httpResponse, data);
  }
}

module.exports.ChangesetCreate = ChangesetCreate;