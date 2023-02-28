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
 * ResourceGroup data model.
 * @class
 */
class ResourceGroup extends Model {
  /**
   * ResourceGroup Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    var i;
    var l;

    super(data);

    if (!util.isUndefined(this.linkedcssresources) && util.isArray(this.linkedcssresources)) {
      for (i = 0, l = this.linkedcssresources.length; i < l; i++) {
        if (!util.isInstanceOf(this.linkedcssresources[i], models.CSSResource) && util.isObject(data['linkedcssresources'][i])) {
          this.linkedcssresources[i] = new models.CSSResource(this.linkedcssresources[i]);
        } else if (!util.isInstanceOf(this.linkedcssresources[i], models.CSSResource)) {
          throw new Error(util.format('Expected array of CSSResource or an array of Objects but got %s',
            typeof this.linkedcssresources[i]));
        }
      }
    } else {
      this.linkedcssresources = [];
    }

    if (!util.isUndefined(this.linkedjavascriptresources) && util.isArray(this.linkedjavascriptresources)) {
      for (i = 0, l = this.linkedjavascriptresources.length; i < l; i++) {
        if (!util.isInstanceOf(this.linkedjavascriptresources[i], models.JavaScriptResource) && util.isObject(data['linkedjavascriptresources'][i])) {
          this.linkedjavascriptresources[i] = new models.JavaScriptResource(this.linkedjavascriptresources[i]);
        } else if (!util.isInstanceOf(this.linkedjavascriptresources[i], models.JavaScriptResource)) {
          throw new Error(util.format('Expected array of JavaScriptResource or an array of Objects but got %s',
            typeof this.linkedjavascriptresources[i]));
        }
      }
    } else {
      this.linkedjavascriptresources = [];
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
   * Get code.
   * @returns {string}
   */
  getCode() {
    return this.getField('code');
  }
  
  /**
   * Get linkedcssresources.
   * @returns {CSSResource[]}
   */
  getLinkedCSSResources() {
    return this.getField('linkedcssresources', []);
  }
  
  /**
   * Get linkedjavascriptresources.
   * @returns {JavaScriptResource[]}
   */
  getLinkedJavaScriptResources() {
    return this.getField('linkedjavascriptresources', []);
  }
  
  /**
   * @override
   */
  toObject() {
    var i;
    var l;
    var ret = Object.assign(this);

    if (util.isArray(ret['linkedcssresources'])) {
      for (i = 0, l = ret['linkedcssresources'].length; i < l; i++) {
        if (util.isInstanceOf(ret['linkedcssresources'][i], models.CSSResource)) {
          ret['linkedcssresources'][i] = ret['linkedcssresources'][i].toObject();
        }
      }
    }

    if (util.isArray(ret['linkedjavascriptresources'])) {
      for (i = 0, l = ret['linkedjavascriptresources'].length; i < l; i++) {
        if (util.isInstanceOf(ret['linkedjavascriptresources'][i], models.JavaScriptResource)) {
          ret['linkedjavascriptresources'][i] = ret['linkedjavascriptresources'][i].toObject();
        }
      }
    }

    return ret;
  }
}

module.exports.ResourceGroup = ResourceGroup;