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
 * Handles API Request ProductList_Adjust_Inventory. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/productlist_adjust_inventory
 * @class
 */
class ProductListAdjustInventory extends Request {
  /**
   * ProductListAdjustInventory Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'ProductList_Adjust_Inventory';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.inventoryAdjustments = [];
  }

  /**
   * Get Inventory_Adjustments.
   * @returns {ProductInventoryAdjustment[]}
   */
  getInventoryAdjustments() {
    return this.inventoryAdjustments;
  }

  /**
   * Set Inventory_Adjustments.
   * @param {ProductInventoryAdjustment[]} inventoryAdjustments
   * @throws {Error}
   * @returns {ProductListAdjustInventory}
   */
  setInventoryAdjustments(inventoryAdjustments) {
    var i;
    var l;

    if (!util.isArray(inventoryAdjustments)) {
      throw new Error(util.format('Expected an array but got %s', typeof inventoryAdjustments));
    }

    for (i = 0, l = inventoryAdjustments.length; i < l; i++) {
      if (!util.isInstanceOf(inventoryAdjustments[i], models.ProductInventoryAdjustment) && util.isObject(inventoryAdjustments[i])) {
        inventoryAdjustments[i] = new models.ProductInventoryAdjustment(inventoryAdjustments[i]);
      } else if (!util.isInstanceOf(inventoryAdjustments[i], models.ProductInventoryAdjustment)) {
        throw new Error(util.format('Expected instance of ProductInventoryAdjustment or an Object but got %s',
          typeof inventoryAdjustments[i]));
      }
    }

    this.inventoryAdjustments = inventoryAdjustments;
    return this;
  }

  /**
   * Add Inventory_Adjustments.
   * @param {ProductInventoryAdjustment} inventoryAdjustment
   * @throws {Error}
   * @returns {ProductListAdjustInventory}
   */
  addInventoryAdjustment(inventoryAdjustment) {
    if (util.isInstanceOf(inventoryAdjustment, models.ProductInventoryAdjustment)) {
      this.inventoryAdjustments.push(inventoryAdjustment);
    } else if (util.isObject(inventoryAdjustment)) {
      this.inventoryAdjustments.push(new models.ProductInventoryAdjustment(inventoryAdjustment));
    } else {
      throw new Error(util.format('Expected instance of ProductInventoryAdjustment or Object but got %s',
        typeof inventoryAdjustment));
    }

    return this;
  }

  /**
   * Add many ProductInventoryAdjustment.
   * @param {ProductInventoryAdjustment[]} inventoryAdjustments
   * @throws {Error}
   * @returns {ProductListAdjustInventory}
   */
  addInventoryAdjustments(inventoryAdjustments) {
    var i;
    var l;

    if (!util.isArray(inventoryAdjustments)) {
      throw new Error(util.format('Expecting an array of ProductInventoryAdjustment but got %s',
        typeof inventoryAdjustments));
    }

    for (i = 0, l = inventoryAdjustments.length; i < l; i++) {
      if (util.isInstanceOf(inventoryAdjustments[i], models.ProductInventoryAdjustment)) {
        this.inventoryAdjustments.push(inventoryAdjustments[i]);
      } else if (util.isObject(inventoryAdjustments[i])) {
        this.inventoryAdjustments.push(new models.ProductInventoryAdjustment(inventoryAdjustments[i]));
      } else {
        throw new Error(util.format('Expected array of ProductInventoryAdjustment or an array of Object but got %s',
          typeof inventoryAdjustments[i]));
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

    if (util.isArray(this.inventoryAdjustments)) {
      data['Inventory_Adjustments'] = [];

      for (i = 0, l = this.inventoryAdjustments.length; i < l; i++) {
        data['Inventory_Adjustments'].push(this.inventoryAdjustments[i].toObject());
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
    return new responses.ProductListAdjustInventory(this, httpResponse, data);
  }
}

module.exports.ProductListAdjustInventory = ProductListAdjustInventory;