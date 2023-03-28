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
 * Product data model.
 * @class
 */
class Product extends Model {
  /**
   * Product Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    var i;
    var l;

    super(data);

    if (!util.isUndefined(this.productinventorysettings)) {
      if (!util.isInstanceOf(this.productinventorysettings, models.ProductInventorySettings) && util.isObject(this.productinventorysettings)) {
        this.productinventorysettings = new models.ProductInventorySettings(this.productinventorysettings);
      } else if (!util.isInstanceOf(this.productinventorysettings, models.ProductInventorySettings)) {
        throw new Error(util.format('Expected ProductInventorySettings or an Object but got %s',
          typeof this.productinventorysettings));
      }
    } else {
      this.productinventorysettings = {};
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

    if (!util.isUndefined(this.relatedproducts) && util.isArray(this.relatedproducts)) {
      for (i = 0, l = this.relatedproducts.length; i < l; i++) {
        if (!util.isInstanceOf(this.relatedproducts[i], models.RelatedProduct) && util.isObject(data['relatedproducts'][i])) {
          this.relatedproducts[i] = new models.RelatedProduct(this.relatedproducts[i]);
        } else if (!util.isInstanceOf(this.relatedproducts[i], models.RelatedProduct)) {
          throw new Error(util.format('Expected array of RelatedProduct or an array of Objects but got %s',
            typeof this.relatedproducts[i]));
        }
      }
    } else {
      this.relatedproducts = [];
    }

    if (!util.isUndefined(this.categories) && util.isArray(this.categories)) {
      for (i = 0, l = this.categories.length; i < l; i++) {
        if (!util.isInstanceOf(this.categories[i], models.Category) && util.isObject(data['categories'][i])) {
          this.categories[i] = new models.Category(this.categories[i]);
        } else if (!util.isInstanceOf(this.categories[i], models.Category)) {
          throw new Error(util.format('Expected array of Category or an array of Objects but got %s',
            typeof this.categories[i]));
        }
      }
    } else {
      this.categories = [];
    }

    if (!util.isUndefined(this.productshippingrules)) {
      if (!util.isInstanceOf(this.productshippingrules, models.ProductShippingRules) && util.isObject(this.productshippingrules)) {
        this.productshippingrules = new models.ProductShippingRules(this.productshippingrules);
      } else if (!util.isInstanceOf(this.productshippingrules, models.ProductShippingRules)) {
        throw new Error(util.format('Expected ProductShippingRules or an Object but got %s',
          typeof this.productshippingrules));
      }
    } else {
      this.productshippingrules = {};
    }

    if (!util.isUndefined(this.productimagedata) && util.isArray(this.productimagedata)) {
      for (i = 0, l = this.productimagedata.length; i < l; i++) {
        if (!util.isInstanceOf(this.productimagedata[i], models.ProductImageData) && util.isObject(data['productimagedata'][i])) {
          this.productimagedata[i] = new models.ProductImageData(this.productimagedata[i]);
        } else if (!util.isInstanceOf(this.productimagedata[i], models.ProductImageData)) {
          throw new Error(util.format('Expected array of ProductImageData or an array of Objects but got %s',
            typeof this.productimagedata[i]));
        }
      }
    } else {
      this.productimagedata = [];
    }

    if (!util.isUndefined(this.attributes) && util.isArray(this.attributes)) {
      for (i = 0, l = this.attributes.length; i < l; i++) {
        if (!util.isInstanceOf(this.attributes[i], models.ProductAttribute) && util.isObject(data['attributes'][i])) {
          this.attributes[i] = new models.ProductAttribute(this.attributes[i]);
        } else if (!util.isInstanceOf(this.attributes[i], models.ProductAttribute)) {
          throw new Error(util.format('Expected array of ProductAttribute or an array of Objects but got %s',
            typeof this.attributes[i]));
        }
      }
    } else {
      this.attributes = [];
    }

    if (!util.isUndefined(this.subscriptionsettings)) {
      if (!util.isInstanceOf(this.subscriptionsettings, models.ProductSubscriptionSettings) && util.isObject(this.subscriptionsettings)) {
        this.subscriptionsettings = new models.ProductSubscriptionSettings(this.subscriptionsettings);
      } else if (!util.isInstanceOf(this.subscriptionsettings, models.ProductSubscriptionSettings)) {
        throw new Error(util.format('Expected ProductSubscriptionSettings or an Object but got %s',
          typeof this.subscriptionsettings));
      }
    } else {
      this.subscriptionsettings = {};
    }

    if (!util.isUndefined(this.subscriptionterms) && util.isArray(this.subscriptionterms)) {
      for (i = 0, l = this.subscriptionterms.length; i < l; i++) {
        if (!util.isInstanceOf(this.subscriptionterms[i], models.ProductSubscriptionTerm) && util.isObject(data['subscriptionterms'][i])) {
          this.subscriptionterms[i] = new models.ProductSubscriptionTerm(this.subscriptionterms[i]);
        } else if (!util.isInstanceOf(this.subscriptionterms[i], models.ProductSubscriptionTerm)) {
          throw new Error(util.format('Expected array of ProductSubscriptionTerm or an array of Objects but got %s',
            typeof this.subscriptionterms[i]));
        }
      }
    } else {
      this.subscriptionterms = [];
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
   * Get sku.
   * @returns {string}
   */
  getSku() {
    return this.getField('sku');
  }
  
  /**
   * Get name.
   * @returns {string}
   */
  getName() {
    return this.getField('name');
  }
  
  /**
   * Get thumbnail.
   * @returns {string}
   */
  getThumbnail() {
    return this.getField('thumbnail');
  }
  
  /**
   * Get image.
   * @returns {string}
   */
  getImage() {
    return this.getField('image');
  }
  
  /**
   * Get price.
   * @returns {number}
   */
  getPrice() {
    return this.getField('price', 0.00);
  }
  
  /**
   * Get formatted_price.
   * @returns {string}
   */
  getFormattedPrice() {
    return this.getField('formatted_price');
  }
  
  /**
   * Get cost.
   * @returns {number}
   */
  getCost() {
    return this.getField('cost', 0.00);
  }
  
  /**
   * Get formatted_cost.
   * @returns {string}
   */
  getFormattedCost() {
    return this.getField('formatted_cost');
  }
  
  /**
   * Get descrip.
   * @returns {string}
   */
  getDescription() {
    return this.getField('descrip');
  }
  
  /**
   * Get catcount.
   * @returns {number}
   */
  getCategoryCount() {
    return this.getField('catcount', 0);
  }
  
  /**
   * Get weight.
   * @returns {number}
   */
  getWeight() {
    return this.getField('weight', 0.00);
  }
  
  /**
   * Get active.
   * @returns {boolean}
   */
  getActive() {
    return this.getField('active', false);
  }
  
  /**
   * Get page_title.
   * @returns {string}
   */
  getPageTitle() {
    return this.getField('page_title');
  }
  
  /**
   * Get taxable.
   * @returns {boolean}
   */
  getTaxable() {
    return this.getField('taxable', false);
  }
  
  /**
   * Get dt_created.
   * @returns {number}
   */
  getDateTimeCreated() {
    return this.getTimestampField('dt_created');
  }
  
  /**
   * Get dt_updated.
   * @returns {number}
   */
  getDateTimeUpdate() {
    return this.getTimestampField('dt_updated');
  }
  
  /**
   * Get productinventorysettings.
   * @returns {ProductInventorySettings|*}
   */
  getProductInventorySettings() {
    return this.getField('productinventorysettings', null);
  }
  
  /**
   * Get product_inventory_active.
   * @returns {boolean}
   */
  getProductInventoryActive() {
    return this.getField('product_inventory_active', false);
  }
  
  /**
   * Get product_inventory.
   * @returns {number}
   */
  getProductInventory() {
    return this.getField('product_inventory', 0);
  }
  
  /**
   * Get cancat_code.
   * @returns {string}
   */
  getCanonicalCategoryCode() {
    return this.getField('cancat_code');
  }
  
  /**
   * Get page_code.
   * @returns {string}
   */
  getPageCode() {
    return this.getField('page_code');
  }
  
  /**
   * Get CustomField_Values.
   * @returns {CustomFieldValues|*}
   */
  getCustomFieldValues() {
    return this.getField('CustomField_Values', null);
  }
  
  /**
   * Get uris.
   * @returns {Uri[]}
   */
  getUris() {
    return this.getField('uris', []);
  }
  
  /**
   * Get relatedproducts.
   * @returns {RelatedProduct[]}
   */
  getRelatedProducts() {
    return this.getField('relatedproducts', []);
  }
  
  /**
   * Get categories.
   * @returns {Category[]}
   */
  getCategories() {
    return this.getField('categories', []);
  }
  
  /**
   * Get productshippingrules.
   * @returns {ProductShippingRules|*}
   */
  getProductShippingRules() {
    return this.getField('productshippingrules', null);
  }
  
  /**
   * Get productimagedata.
   * @returns {ProductImageData[]}
   */
  getProductImageData() {
    return this.getField('productimagedata', []);
  }
  
  /**
   * Get attributes.
   * @returns {ProductAttribute[]}
   */
  getAttributes() {
    return this.getField('attributes', []);
  }
  
  /**
   * Get url.
   * @returns {string}
   */
  getUrl() {
    return this.getField('url');
  }
  
  /**
   * Get imagetypes.
   * @returns {imagetypes}
   */
  getImageTypes() {
    // Missing imagetypes [5]
  }
  
  /**
   * Get disp_order.
   * @returns {number}
   */
  getDisplayOrder() {
    return this.getField('disp_order', 0);
  }
  
  /**
   * Get subscriptionsettings.
   * @returns {ProductSubscriptionSettings|*}
   */
  getSubscriptionSettings() {
    return this.getField('subscriptionsettings', null);
  }
  
  /**
   * Get subscriptionterms.
   * @returns {ProductSubscriptionTerm[]}
   */
  getSubscriptionTerms() {
    return this.getField('subscriptionterms', []);
  }
  
  /**
   * @override
   */
  toObject() {
    var i;
    var l;
    var ret = Object.assign(this);

    if (util.isInstanceOf(ret['productinventorysettings'], models.ProductInventorySettings)) {
      ret['productinventorysettings'] = ret['productinventorysettings'].toObject();
    }

    if (util.isInstanceOf(ret['CustomField_Values'], models.CustomFieldValues)) {
      ret['CustomField_Values'] = ret['CustomField_Values'].toObject();
    }

    if (util.isArray(ret['uris'])) {
      for (i = 0, l = ret['uris'].length; i < l; i++) {
        if (util.isInstanceOf(ret['uris'][i], models.Uri)) {
          ret['uris'][i] = ret['uris'][i].toObject();
        }
      }
    }

    if (util.isArray(ret['relatedproducts'])) {
      for (i = 0, l = ret['relatedproducts'].length; i < l; i++) {
        if (util.isInstanceOf(ret['relatedproducts'][i], models.RelatedProduct)) {
          ret['relatedproducts'][i] = ret['relatedproducts'][i].toObject();
        }
      }
    }

    if (util.isArray(ret['categories'])) {
      for (i = 0, l = ret['categories'].length; i < l; i++) {
        if (util.isInstanceOf(ret['categories'][i], models.Category)) {
          ret['categories'][i] = ret['categories'][i].toObject();
        }
      }
    }

    if (util.isInstanceOf(ret['productshippingrules'], models.ProductShippingRules)) {
      ret['productshippingrules'] = ret['productshippingrules'].toObject();
    }

    if (util.isArray(ret['productimagedata'])) {
      for (i = 0, l = ret['productimagedata'].length; i < l; i++) {
        if (util.isInstanceOf(ret['productimagedata'][i], models.ProductImageData)) {
          ret['productimagedata'][i] = ret['productimagedata'][i].toObject();
        }
      }
    }

    if (util.isArray(ret['attributes'])) {
      for (i = 0, l = ret['attributes'].length; i < l; i++) {
        if (util.isInstanceOf(ret['attributes'][i], models.ProductAttribute)) {
          ret['attributes'][i] = ret['attributes'][i].toObject();
        }
      }
    }

    if (util.isInstanceOf(ret['subscriptionsettings'], models.ProductSubscriptionSettings)) {
      ret['subscriptionsettings'] = ret['subscriptionsettings'].toObject();
    }

    if (util.isArray(ret['subscriptionterms'])) {
      for (i = 0, l = ret['subscriptionterms'].length; i < l; i++) {
        if (util.isInstanceOf(ret['subscriptionterms'][i], models.ProductSubscriptionTerm)) {
          ret['subscriptionterms'][i] = ret['subscriptionterms'][i].toObject();
        }
      }
    }

    return ret;
  }
}

module.exports.Product = Product;