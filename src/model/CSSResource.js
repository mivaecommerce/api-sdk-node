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
/** @ignore */
const RESOURCE_TYPE_MODULE = 'M';
/** @ignore */
const RESOURCE_TYPE_MODULE_INLINE = 'Y';
/** @ignore */
const RESOURCE_TYPE_MODULE_MANAGED = 'Z';

/** 
 * CSSResource data model.
 * @class
 */
class CSSResource extends Model {
  /**
   * CSSResource Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    var i;
    var l;

    super(data);

    if (!util.isUndefined(this.attributes) && util.isArray(this.attributes)) {
      for (i = 0, l = this.attributes.length; i < l; i++) {
        if (!util.isInstanceOf(this.attributes[i], models.CSSResourceAttribute) && util.isObject(data['attributes'][i])) {
          this.attributes[i] = new models.CSSResourceAttribute(this.attributes[i]);
        } else if (!util.isInstanceOf(this.attributes[i], models.CSSResourceAttribute)) {
          throw new Error(util.format('Expected array of CSSResourceAttribute or an array of Objects but got %s',
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
   * Constant RESOURCE_TYPE_MODULE
   * @returns {string}
   * @const
   * @static
   */
  static get RESOURCE_TYPE_MODULE() {
    return RESOURCE_TYPE_MODULE;
  }

  /**
   * Constant RESOURCE_TYPE_MODULE_INLINE
   * @returns {string}
   * @const
   * @static
   */
  static get RESOURCE_TYPE_MODULE_INLINE() {
    return RESOURCE_TYPE_MODULE_INLINE;
  }

  /**
   * Constant RESOURCE_TYPE_MODULE_MANAGED
   * @returns {string}
   * @const
   * @static
   */
  static get RESOURCE_TYPE_MODULE_MANAGED() {
    return RESOURCE_TYPE_MODULE_MANAGED;
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
   * @returns {CSSResourceAttribute[]}
   */
  getAttributes() {
    return this.getField('attributes', []);
  }
  
  /**
   * Get mod_code.
   * @returns {string}
   */
  getModuleCode() {
    return this.getField('mod_code');
  }
  
  /**
   * Get mod_data.
   * @returns {string}
   */
  getModuleData() {
    return this.getField('mod_data');
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
        if (util.isInstanceOf(ret['attributes'][i], models.CSSResourceAttribute)) {
          ret['attributes'][i] = ret['attributes'][i].toObject();
        }
      }
    }

    return ret;
  }
}

module.exports.CSSResource = CSSResource;