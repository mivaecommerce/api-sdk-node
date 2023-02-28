/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** 
 * OrderShipmentUpdate data model.
 * @class
 */
class OrderShipmentUpdate extends Model {
  /**
   * OrderShipmentUpdate Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Get shpmnt_id.
   * @returns {number}
   */
  getShipmentId() {
    return this.getField('shpmnt_id', 0);
  }
  
  /**
   * Get mark_shipped.
   * @returns {boolean}
   */
  getMarkShipped() {
    return this.getField('mark_shipped', false);
  }
  
  /**
   * Get tracknum.
   * @returns {string}
   */
  getTrackingNumber() {
    return this.getField('tracknum');
  }
  
  /**
   * Get tracktype.
   * @returns {string}
   */
  getTrackingType() {
    return this.getField('tracktype');
  }
  
  /**
   * Get cost.
   * @returns {number}
   */
  getCost() {
    return this.getField('cost', 0.00);
  }
  
  /**
   * Set shpmnt_id.
   * @param {number} shipmentId
   * @returns {OrderShipmentUpdate}
   */
  setShipmentId(shipmentId) {
    return this.setField('shpmnt_id', shipmentId);
  }

  /**
   * Set mark_shipped.
   * @param {boolean} markShipped
   * @returns {OrderShipmentUpdate}
   */
  setMarkShipped(markShipped) {
    return this.setField('mark_shipped', markShipped);
  }

  /**
   * Set tracknum.
   * @param {string} trackingNumber
   * @returns {OrderShipmentUpdate}
   */
  setTrackingNumber(trackingNumber) {
    return this.setField('tracknum', trackingNumber);
  }

  /**
   * Set tracktype.
   * @param {string} trackingType
   * @returns {OrderShipmentUpdate}
   */
  setTrackingType(trackingType) {
    return this.setField('tracktype', trackingType);
  }

  /**
   * Set cost.
   * @param {number} cost
   * @returns {OrderShipmentUpdate}
   */
  setCost(cost) {
    return this.setField('cost', cost);
  }
}

module.exports.OrderShipmentUpdate = OrderShipmentUpdate;