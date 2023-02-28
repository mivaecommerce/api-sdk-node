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
 * CSSResourceVersion data model.
 * @class
 */
class CSSResourceVersion extends Model {
  /**
   * CSSResourceVersion Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    var i;
    var l;

    super(data);

    if (!util.isUndefined(this.attributes) && util.isArray(this.attributes)) {
      for (i = 0, l = this.attributes.length; i < l; i++) {
        if (!util.isInstanceOf(this.attributes[i], models.CSSResourceVersionAttribute) && util.isObject(data['attributes'][i])) {
          this.attributes[i] = new models.CSSResourceVersionAttribute(this.attributes[i]);
        } else if (!util.isInstanceOf(this.attributes[i], models.CSSResourceVersionAttribute)) {
          throw new Error(util.format('Expected array of CSSResourceVersionAttribute or an array of Objects but got %s',
            typeof this.attributes[i]));
        }
      }
    } else {
      this.attributes = [];
    }

    if (!util.isUndefined(this.linkedpages) && util.isArray(this.linkedpages)) {
      for (i = 0, l = this.linkedpages.length; i < l; i++) {
        if (!util.isInstanceOf(this.linkedpages[i], models.Page) && util.isObject(data['linkedpages'][i])) {
          this.linkedpages[i] = new models.Page(this.linkedpages[i]);
        } else if (!util.isInstanceOf(this.linkedpages[i], models.Page)) {
          throw new Error(util.format('Expected array of Page or an array of Objects but got %s',
            typeof this.linkedpages[i]));
        }
      }
    } else {
      this.linkedpages = [];
    }

    if (!util.isUndefined(this.linkedresources) && util.isArray(this.linkedresources)) {
      for (i = 0, l = this.linkedresources.length; i < l; i++) {
        if (!util.isInstanceOf(this.linkedresources[i], models.CSSResource) && util.isObject(data['linkedresources'][i])) {
          this.linkedresources[i] = new models.CSSResource(this.linkedresources[i]);
        } else if (!util.isInstanceOf(this.linkedresources[i], models.CSSResource)) {
          throw new Error(util.format('Expected array of CSSResource or an array of Objects but got %s',
            typeof this.linkedresources[i]));
        }
      }
    } else {
      this.linkedresources = [];
    }
  }

  /**
   * Get id.
   * @returns {number}
   */
  getId() {
    return this.getField('id', 0);
  }
  
  /**
   * Get res_id.
   * @returns {number}
   */
  getResourceId() {
    return this.getField('res_id', 0);
  }
  
  /**
   * Get code.
   * @returns {string}
   */
  getCode() {
    return this.getField('code');
  }
  
  /**
   * Get type.
   * @returns {string}
   */
  getType() {
    return this.getField('type');
  }
  
  /**
   * Get is_global.
   * @returns {boolean}
   */
  getIsGlobal() {
    return this.getField('is_global', false);
  }
  
  /**
   * Get active.
   * @returns {boolean}
   */
  getActive() {
    return this.getField('active', false);
  }
  
  /**
   * Get file.
   * @returns {string}
   */
  getFile() {
    return this.getField('file');
  }
  
  /**
   * Get branchless_file.
   * @returns {string}
   */
  getBranchlessFile() {
    return this.getField('branchless_file');
  }
  
  /**
   * Get templ_id.
   * @returns {number}
   */
  getTemplateId() {
    return this.getField('templ_id', 0);
  }
  
  /**
   * Get user_id.
   * @returns {number}
   */
  getUserId() {
    return this.getField('user_id', 0);
  }
  
  /**
   * Get user_name.
   * @returns {string}
   */
  getUserName() {
    return this.getField('user_name');
  }
  
  /**
   * Get user_icon.
   * @returns {string}
   */
  getUserIcon() {
    return this.getField('user_icon');
  }
  
  /**
   * Get source_user_id.
   * @returns {number}
   */
  getSourceUserId() {
    return this.getField('source_user_id', 0);
  }
  
  /**
   * Get source_user_name.
   * @returns {string}
   */
  getSourceUserName() {
    return this.getField('source_user_name');
  }
  
  /**
   * Get source_user_icon.
   * @returns {string}
   */
  getSourceUserIcon() {
    return this.getField('source_user_icon');
  }
  
  /**
   * Get source.
   * @returns {string}
   */
  getSource() {
    return this.getField('source');
  }
  
  /**
   * Get attributes.
   * @returns {CSSResourceVersionAttribute[]}
   */
  getAttributes() {
    return this.getField('attributes', []);
  }
  
  /**
   * Get linkedpages.
   * @returns {Page[]}
   */
  getLinkedPages() {
    return this.getField('linkedpages', []);
  }
  
  /**
   * Get linkedresources.
   * @returns {CSSResource[]}
   */
  getLinkedResources() {
    return this.getField('linkedresources', []);
  }
  
  /**
   * Get source_notes.
   * @returns {string}
   */
  getSourceNotes() {
    return this.getField('source_notes');
  }
  
  /**
   * @override
   */
  toObject() {
    var i;
    var l;
    var ret = Object.assign(this);

    if (util.isArray(ret['attributes'])) {
      for (i = 0, l = ret['attributes'].length; i < l; i++) {
        if (util.isInstanceOf(ret['attributes'][i], models.CSSResourceVersionAttribute)) {
          ret['attributes'][i] = ret['attributes'][i].toObject();
        }
      }
    }

    if (util.isArray(ret['linkedpages'])) {
      for (i = 0, l = ret['linkedpages'].length; i < l; i++) {
        if (util.isInstanceOf(ret['linkedpages'][i], models.Page)) {
          ret['linkedpages'][i] = ret['linkedpages'][i].toObject();
        }
      }
    }

    if (util.isArray(ret['linkedresources'])) {
      for (i = 0, l = ret['linkedresources'].length; i < l; i++) {
        if (util.isInstanceOf(ret['linkedresources'][i], models.CSSResource)) {
          ret['linkedresources'][i] = ret['linkedresources'][i].toObject();
        }
      }
    }

    return ret;
  }
}

module.exports.CSSResourceVersion = CSSResourceVersion;