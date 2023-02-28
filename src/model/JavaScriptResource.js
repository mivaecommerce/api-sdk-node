/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const models = require('./../models');
const { Model } = require('./../abstract');

/** RESOURCE_TYPE constants. */
/** @ignore */
const RESOURCE_TYPE_COMBINED = 'C';
/** @ignore */
const RESOURCE_TYPE_INLINE = 'I';
/** @ignore */
const RESOURCE_TYPE_EXTERNAL = 'E';
/** @ignore */
const RESOURCE_TYPE_LOCAL = 'L';

/** 
 * JavaScriptResource data model.
 * @class
 */
class JavaScriptResource extends Model {
  /**
   * JavaScriptResource Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    var i;
    var l;

    super(data);

    if (!util.isUndefined(this.attributes) && util.isArray(this.attributes)) {
      for (i = 0, l = this.attributes.length; i < l; i++) {
        if (!util.isInstanceOf(this.attributes[i], models.JavaScriptResourceAttribute) && util.isObject(data['attributes'][i])) {
          this.attributes[i] = new models.JavaScriptResourceAttribute(this.attributes[i]);
        } else if (!util.isInstanceOf(this.attributes[i], models.JavaScriptResourceAttribute)) {
          throw new Error(util.format('Expected array of JavaScriptResourceAttribute or an array of Objects but got %s',
            typeof this.attributes[i]));
        }
      }
    } else {
      this.attributes = [];
    }
  }

  /**
   * Constant RESOURCE_TYPE_COMBINED
   * @returns {string}
   * @const
   * @static
   */
  static get RESOURCE_TYPE_COMBINED() {
    return RESOURCE_TYPE_COMBINED;
  }

  /**
   * Constant RESOURCE_TYPE_INLINE
   * @returns {string}
   * @const
   * @static
   */
  static get RESOURCE_TYPE_INLINE() {
    return RESOURCE_TYPE_INLINE;
  }

  /**
   * Constant RESOURCE_TYPE_EXTERNAL
   * @returns {string}
   * @const
   * @static
   */
  static get RESOURCE_TYPE_EXTERNAL() {
    return RESOURCE_TYPE_EXTERNAL;
  }

  /**
   * Constant RESOURCE_TYPE_LOCAL
   * @returns {string}
   * @const
   * @static
   */
  static get RESOURCE_TYPE_LOCAL() {
    return RESOURCE_TYPE_LOCAL;
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
   * Get templ_id.
   * @returns {number}
   */
  getTemplateId() {
    return this.getField('templ_id', 0);
  }
  
  /**
   * Get attributes.
   * @returns {JavaScriptResourceAttribute[]}
   */
  getAttributes() {
    return this.getField('attributes', []);
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
        if (util.isInstanceOf(ret['attributes'][i], models.JavaScriptResourceAttribute)) {
          ret['attributes'][i] = ret['attributes'][i].toObject();
        }
      }
    }

    return ret;
  }
}

module.exports.JavaScriptResource = JavaScriptResource;