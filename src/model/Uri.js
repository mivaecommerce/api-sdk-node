/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const models = require('./../models');
const { Model } = require('./../abstract');

/** DESTINATION_TYPE constants. */
/** @ignore */
const DESTINATION_TYPE_SCREEN = 'screen';
/** @ignore */
const DESTINATION_TYPE_PAGE = 'page';
/** @ignore */
const DESTINATION_TYPE_CATEGORY = 'category';
/** @ignore */
const DESTINATION_TYPE_PRODUCT = 'product';
/** @ignore */
const DESTINATION_TYPE_FEED = 'feed';

/** 
 * Uri data model.
 * @class
 */
class Uri extends Model {
  /**
   * Uri Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);

    if (!util.isUndefined(this.store)) {
      if (!util.isInstanceOf(this.store, models.UriDetail) && util.isObject(this.store)) {
        this.store = new models.UriDetail(this.store);
      } else if (!util.isInstanceOf(this.store, models.UriDetail)) {
        throw new Error(util.format('Expected UriDetail or an Object but got %s',
          typeof this.store));
      }
    } else {
      this.store = {};
    }

    if (!util.isUndefined(this.product)) {
      if (!util.isInstanceOf(this.product, models.UriDetail) && util.isObject(this.product)) {
        this.product = new models.UriDetail(this.product);
      } else if (!util.isInstanceOf(this.product, models.UriDetail)) {
        throw new Error(util.format('Expected UriDetail or an Object but got %s',
          typeof this.product));
      }
    } else {
      this.product = {};
    }

    if (!util.isUndefined(this.category)) {
      if (!util.isInstanceOf(this.category, models.UriDetail) && util.isObject(this.category)) {
        this.category = new models.UriDetail(this.category);
      } else if (!util.isInstanceOf(this.category, models.UriDetail)) {
        throw new Error(util.format('Expected UriDetail or an Object but got %s',
          typeof this.category));
      }
    } else {
      this.category = {};
    }

    if (!util.isUndefined(this.page)) {
      if (!util.isInstanceOf(this.page, models.UriDetail) && util.isObject(this.page)) {
        this.page = new models.UriDetail(this.page);
      } else if (!util.isInstanceOf(this.page, models.UriDetail)) {
        throw new Error(util.format('Expected UriDetail or an Object but got %s',
          typeof this.page));
      }
    } else {
      this.page = {};
    }

    if (!util.isUndefined(this.feed)) {
      if (!util.isInstanceOf(this.feed, models.UriDetail) && util.isObject(this.feed)) {
        this.feed = new models.UriDetail(this.feed);
      } else if (!util.isInstanceOf(this.feed, models.UriDetail)) {
        throw new Error(util.format('Expected UriDetail or an Object but got %s',
          typeof this.feed));
      }
    } else {
      this.feed = {};
    }
  }

  /**
   * Constant DESTINATION_TYPE_SCREEN
   * @returns {string}
   * @const
   * @static
   */
  static get DESTINATION_TYPE_SCREEN() {
    return DESTINATION_TYPE_SCREEN;
  }

  /**
   * Constant DESTINATION_TYPE_PAGE
   * @returns {string}
   * @const
   * @static
   */
  static get DESTINATION_TYPE_PAGE() {
    return DESTINATION_TYPE_PAGE;
  }

  /**
   * Constant DESTINATION_TYPE_CATEGORY
   * @returns {string}
   * @const
   * @static
   */
  static get DESTINATION_TYPE_CATEGORY() {
    return DESTINATION_TYPE_CATEGORY;
  }

  /**
   * Constant DESTINATION_TYPE_PRODUCT
   * @returns {string}
   * @const
   * @static
   */
  static get DESTINATION_TYPE_PRODUCT() {
    return DESTINATION_TYPE_PRODUCT;
  }

  /**
   * Constant DESTINATION_TYPE_FEED
   * @returns {string}
   * @const
   * @static
   */
  static get DESTINATION_TYPE_FEED() {
    return DESTINATION_TYPE_FEED;
  }

  /**
   * Get id.
   * @returns {number}
   */
  getId() {
    return this.getField('id', 0);
  }
  
  /**
   * Get uri.
   * @returns {string}
   */
  getUri() {
    return this.getField('uri');
  }
  
  /**
   * Get store_id.
   * @returns {number}
   */
  getStoreId() {
    return this.getField('store_id', 0);
  }
  
  /**
   * Get screen.
   * @returns {string}
   */
  getScreen() {
    return this.getField('screen');
  }
  
  /**
   * Get page_id.
   * @returns {number}
   */
  getPageId() {
    return this.getField('page_id', 0);
  }
  
  /**
   * Get cat_id.
   * @returns {number}
   */
  getCategoryId() {
    return this.getField('cat_id', 0);
  }
  
  /**
   * Get product_id.
   * @returns {number}
   */
  getProductId() {
    return this.getField('product_id', 0);
  }
  
  /**
   * Get feed_id.
   * @returns {number}
   */
  getFeedId() {
    return this.getField('feed_id', 0);
  }
  
  /**
   * Get canonical.
   * @returns {boolean}
   */
  getCanonical() {
    return this.getField('canonical', false);
  }
  
  /**
   * Get status.
   * @returns {number}
   */
  getStatus() {
    return this.getField('status', 0);
  }
  
  /**
   * Get store.
   * @returns {UriDetail|*}
   */
  getStore() {
    return this.getField('store', null);
  }
  
  /**
   * Get product.
   * @returns {UriDetail|*}
   */
  getProduct() {
    return this.getField('product', null);
  }
  
  /**
   * Get category.
   * @returns {UriDetail|*}
   */
  getCategory() {
    return this.getField('category', null);
  }
  
  /**
   * Get page.
   * @returns {UriDetail|*}
   */
  getPage() {
    return this.getField('page', null);
  }
  
  /**
   * Get feed.
   * @returns {UriDetail|*}
   */
  getFeed() {
    return this.getField('feed', null);
  }
  
  /**
   * @override
   */
  toObject() {
    var ret = Object.assign(this);

    if (util.isInstanceOf(ret['store'], models.UriDetail)) {
      ret['store'] = ret['store'].toObject();
    }

    if (util.isInstanceOf(ret['product'], models.UriDetail)) {
      ret['product'] = ret['product'].toObject();
    }

    if (util.isInstanceOf(ret['category'], models.UriDetail)) {
      ret['category'] = ret['category'].toObject();
    }

    if (util.isInstanceOf(ret['page'], models.UriDetail)) {
      ret['page'] = ret['page'].toObject();
    }

    if (util.isInstanceOf(ret['feed'], models.UriDetail)) {
      ret['feed'] = ret['feed'].toObject();
    }

    return ret;
  }
}

module.exports.Uri = Uri;