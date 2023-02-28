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
 * Handles API Request OrderShipmentList_Update. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/ordershipmentlist_update
 * @class
 */
class OrderShipmentListUpdate extends Request {
  /**
   * OrderShipmentListUpdate Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'OrderShipmentList_Update';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.shipmentUpdates = [];
  }

  /**
   * Get Shipment_Updates.
   * @returns {OrderShipmentUpdate[]}
   */
  getShipmentUpdates() {
    return this.shipmentUpdates;
  }

  /**
   * Set Shipment_Updates.
   * @param {OrderShipmentUpdate[]} shipmentUpdates
   * @throws {Error}
   * @returns {OrderShipmentListUpdate}
   */
  setShipmentUpdates(shipmentUpdates) {
    var i;
    var l;

    if (!util.isArray(shipmentUpdates)) {
      throw new Error(util.format('Expected an array but got %s', typeof shipmentUpdates));
    }

    for (i = 0, l = shipmentUpdates.length; i < l; i++) {
      if (!util.isInstanceOf(shipmentUpdates[i], models.OrderShipmentUpdate) && util.isObject(shipmentUpdates[i])) {
        shipmentUpdates[i] = new models.OrderShipmentUpdate(shipmentUpdates[i]);
      } else if (!util.isInstanceOf(shipmentUpdates[i], models.OrderShipmentUpdate)) {
        throw new Error(util.format('Expected instance of OrderShipmentUpdate or an Object but got %s',
          typeof shipmentUpdates[i]));
      }
    }

    this.shipmentUpdates = shipmentUpdates;
    return this;
  }

  /**
   * Add Shipment_Updates.
   * @param {OrderShipmentUpdate} shipmentUpdate
   * @throws {Error}
   * @returns {OrderShipmentListUpdate}
   */
  addShipmentUpdate(shipmentUpdate) {
    if (util.isInstanceOf(shipmentUpdate, models.OrderShipmentUpdate)) {
      this.shipmentUpdates.push(shipmentUpdate);
    } else if (util.isObject(shipmentUpdate)) {
      this.shipmentUpdates.push(new models.OrderShipmentUpdate(shipmentUpdate));
    } else {
      throw new Error(util.format('Expected instance of OrderShipmentUpdate or Object but got %s',
        typeof shipmentUpdate));
    }

    return this;
  }

  /**
   * Add many OrderShipmentUpdate.
   * @param {OrderShipmentUpdate[]} shipmentUpdates
   * @throws {Error}
   * @returns {OrderShipmentListUpdate}
   */
  addShipmentUpdates(shipmentUpdates) {
    var i;
    var l;

    if (!util.isArray(shipmentUpdates)) {
      throw new Error(util.format('Expecting an array of OrderShipmentUpdate but got %s',
        typeof shipmentUpdates));
    }

    for (i = 0, l = shipmentUpdates.length; i < l; i++) {
      if (util.isInstanceOf(shipmentUpdates[i], models.OrderShipmentUpdate)) {
        this.shipmentUpdates.push(shipmentUpdates[i]);
      } else if (util.isObject(shipmentUpdates[i])) {
        this.shipmentUpdates.push(new models.OrderShipmentUpdate(shipmentUpdates[i]));
      } else {
        throw new Error(util.format('Expected array of OrderShipmentUpdate or an array of Object but got %s',
          typeof shipmentUpdates[i]));
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

    if (util.isArray(this.shipmentUpdates)) {
      data['Shipment_Updates'] = [];

      for (i = 0, l = this.shipmentUpdates.length; i < l; i++) {
        data['Shipment_Updates'].push(this.shipmentUpdates[i].toObject());
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
    return new responses.OrderShipmentListUpdate(this, httpResponse, data);
  }
}

module.exports.OrderShipmentListUpdate = OrderShipmentListUpdate;