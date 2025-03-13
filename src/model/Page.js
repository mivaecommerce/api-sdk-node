/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const models = require('./../models');
const { Model } = require('./../abstract');

/** PAGE_CACHE_TYPE constants. */
/** @ignore */
const PAGE_CACHE_TYPE_NEVER = 'never';
/** @ignore */
const PAGE_CACHE_TYPE_PROVISIONAL = 'provisional';
/** @ignore */
const PAGE_CACHE_TYPE_ANONEMPTY = 'anonempty';
/** @ignore */
const PAGE_CACHE_TYPE_ALLEMPTY = 'allempty';
/** @ignore */
const PAGE_CACHE_TYPE_ALWAYS = 'always';

/** 
 * Page data model.
 * @class
 */
class Page extends Model {
  /**
   * Page Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    var i;
    var l;

    super(data);

    if (!util.isUndefined(this.settings)) {
      if (!util.isInstanceOf(this.settings, models.VersionSettings)) {
        this.settings = new models.VersionSettings(this.settings);
      }
    }

    if (!util.isUndefined(this.uris) && util.isArray(this.uris)) {
      for (i = 0, l = this.uris.length; i < l; i++) {
        if (!util.isInstanceOf(this.uris[i], models.Uri) && util.isObject(data['uris'][i])) {
          this.uris[i] = new models.Uri(this.uris[i]);
        } else if (!util.isInstanceOf(this.uris[i], models.Uri)) {
          throw new Error(util.format('Expected array of Uri or an array of Objects but got %s',
            typeof this.uris[i]));
        }
      }
    } else {
      this.uris = [];
    }

    if (!util.isUndefined(this.CustomField_Values)) {
      if (!util.isInstanceOf(this.CustomField_Values, models.CustomFieldValues) && util.isObject(this.CustomField_Values)) {
        this.CustomField_Values = new models.CustomFieldValues(this.CustomField_Values);
      } else if (!util.isInstanceOf(this.CustomField_Values, models.CustomFieldValues)) {
        throw new Error(util.format('Expected CustomFieldValues or an Object but got %s',
          typeof this.CustomField_Values));
      }
    } else {
      this.CustomField_Values = {};
    }
  }

  /**
   * Constant PAGE_CACHE_TYPE_NEVER
   * @returns {string}
   * @const
   * @static
   */
  static get PAGE_CACHE_TYPE_NEVER() {
    return PAGE_CACHE_TYPE_NEVER;
  }

  /**
   * Constant PAGE_CACHE_TYPE_PROVISIONAL
   * @returns {string}
   * @const
   * @static
   */
  static get PAGE_CACHE_TYPE_PROVISIONAL() {
    return PAGE_CACHE_TYPE_PROVISIONAL;
  }

  /**
   * Constant PAGE_CACHE_TYPE_ANONEMPTY
   * @returns {string}
   * @const
   * @static
   */
  static get PAGE_CACHE_TYPE_ANONEMPTY() {
    return PAGE_CACHE_TYPE_ANONEMPTY;
  }

  /**
   * Constant PAGE_CACHE_TYPE_ALLEMPTY
   * @returns {string}
   * @const
   * @static
   */
  static get PAGE_CACHE_TYPE_ALLEMPTY() {
    return PAGE_CACHE_TYPE_ALLEMPTY;
  }

  /**
   * Constant PAGE_CACHE_TYPE_ALWAYS
   * @returns {string}
   * @const
   * @static
   */
  static get PAGE_CACHE_TYPE_ALWAYS() {
    return PAGE_CACHE_TYPE_ALWAYS;
  }

  /**
   * Get id.
   * @returns {number}
   */
  getId() {
    return this.getField('id', 0);
  }
  
  /**
   * Get secure.
   * @returns {boolean}
   */
  getSecure() {
    return this.getField('secure', false);
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
   * Get title.
   * @returns {string}
   */
  getTitle() {
    return this.getField('title');
  }
  
  /**
   * Get ui_id.
   * @returns {number}
   */
  getUiId() {
    return this.getField('ui_id', 0);
  }
  
  /**
   * Get templ_id.
   * @returns {number}
   */
  getTemplateId() {
    return this.getField('templ_id', 0);
  }
  
  /**
   * Get admin.
   * @returns {boolean}
   */
  getAdmin() {
    return this.getField('admin', false);
  }
  
  /**
   * Get layout.
   * @returns {boolean}
   */
  getLayout() {
    return this.getField('layout', false);
  }
  
  /**
   * Get fragment.
   * @returns {boolean}
   */
  getFragment() {
    return this.getField('fragment', false);
  }
  
  /**
   * Get public.
   * @returns {boolean}
   */
  getPublic() {
    return this.getField('public', false);
  }
  
  /**
   * Get notes.
   * @returns {string}
   */
  getNotes() {
    return this.getField('notes');
  }
  
  /**
   * Get source.
   * @returns {string}
   */
  getSource() {
    return this.getField('source');
  }
  
  /**
   * Get settings.
   * @returns {VersionSettings|*}
   */
  getSettings() {
    return this.getField('settings', null);
  }
  
  /**
   * Get cache.
   * @returns {string}
   */
  getCache() {
    return this.getField('cache');
  }
  
  /**
   * Get url.
   * @returns {string}
   */
  getUrl() {
    return this.getField('url');
  }
  
  /**
   * Get uris.
   * @returns {Uri[]}
   */
  getUris() {
    return this.getField('uris', []);
  }
  
  /**
   * Get CustomField_Values.
   * @returns {CustomFieldValues|*}
   */
  getCustomFieldValues() {
    return this.getField('CustomField_Values', null);
  }
  
  /**
   * Get version_id.
   * @returns {number}
   */
  getVersionId() {
    return this.getField('version_id', 0);
  }
  
  /**
   * @override
   */
  toObject() {
    var i;
    var l;
    var ret = Object.assign(this);

    if (util.isInstanceOf(ret['settings'], models.VersionSettings)) {
      ret['settings'] = ret['settings'].toObject();
    }

    if (util.isArray(ret['uris'])) {
      for (i = 0, l = ret['uris'].length; i < l; i++) {
        if (util.isInstanceOf(ret['uris'][i], models.Uri)) {
          ret['uris'][i] = ret['uris'][i].toObject();
        }
      }
    }

    if (util.isInstanceOf(ret['CustomField_Values'], models.CustomFieldValues)) {
      ret['CustomField_Values'] = ret['CustomField_Values'].toObject();
    }

    return ret;
  }
}

module.exports.Page = Page;