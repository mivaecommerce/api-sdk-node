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
const { ListQueryRequest }  = require('./../listquery');

/** PRODUCT_SHOW constants. */
/** @ignore */
const PRODUCT_SHOW_ALL = 'All';
/** @ignore */
const PRODUCT_SHOW_UNCATEGORIZED = 'Uncategorized';
/** @ignore */
const PRODUCT_SHOW_ACTIVE = 'Active';

/** 
 * Handles API Request ProductList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/productlist_load_query
 * @class
 */
class ProductListLoadQuery extends ListQueryRequest {
  /**
   * ProductListLoadQuery Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'ProductList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'code',
      'sku',
      'cancat_code',
      'page_code',
      'name',
      'thumbnail',
      'image',
      'price',
      'cost',
      'descrip',
      'weight',
      'taxable',
      'active',
      'page_title',
      'dt_created',
      'dt_updated',
      'category',
      'product_inventory'
    ];

    this.availableSortFields = [
      'id',
      'code',
      'sku',
      'cancat_code',
      'page_code',
      'name',
      'thumbnail',
      'image',
      'price',
      'cost',
      'descrip',
      'weight',
      'taxable',
      'active',
      'page_title',
      'dt_created',
      'dt_updated'
    ];

    this.availableOnDemandColumns = [
      'descrip',
      'catcount',
      'cancat_code',
      'page_code',
      'product_inventory',
      'productinventorysettings',
      'attributes',
      'productimagedata',
      'categories',
      'productshippingrules',
      'relatedproducts',
      'uris',
      'url'
    ];

    this.availableCustomFilters = {
      Product_Show : [
          PRODUCT_SHOW_ALL,
          PRODUCT_SHOW_UNCATEGORIZED,
          PRODUCT_SHOW_ACTIVE
      ],
    };
  }

  /**
   * Constant PRODUCT_SHOW_ALL
   * @returns {string}
   * @const
   * @static
   */
  static get PRODUCT_SHOW_ALL() {
    return PRODUCT_SHOW_ALL;
  }

  /**
   * Constant PRODUCT_SHOW_UNCATEGORIZED
   * @returns {string}
   * @const
   * @static
   */
  static get PRODUCT_SHOW_UNCATEGORIZED() {
    return PRODUCT_SHOW_UNCATEGORIZED;
  }

  /**
   * Constant PRODUCT_SHOW_ACTIVE
   * @returns {string}
   * @const
   * @static
   */
  static get PRODUCT_SHOW_ACTIVE() {
    return PRODUCT_SHOW_ACTIVE;
  }
  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ProductListLoadQuery(this, httpResponse, data);
  }
}

module.exports.ProductListLoadQuery = ProductListLoadQuery;