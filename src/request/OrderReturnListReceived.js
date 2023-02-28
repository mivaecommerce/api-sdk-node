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
 * Handles API Request OrderReturnList_Received. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/orderreturnlist_received
 * @class
 */
class OrderReturnListReceived extends Request {
  /**
   * OrderReturnListReceived Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'OrderReturnList_Received';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.returns = [];
  }

  /**
   * Get Returns.
   * @returns {ReceivedReturn[]}
   */
  getReturns() {
    return this.returns;
  }

  /**
   * Set Returns.
   * @param {ReceivedReturn[]} returns
   * @throws {Error}
   * @returns {OrderReturnListReceived}
   */
  setReturns(returns) {
    var i;
    var l;

    if (!util.isArray(returns)) {
      throw new Error(util.format('Expected an array but got %s', typeof returns));
    }

    for (i = 0, l = returns.length; i < l; i++) {
      if (!util.isInstanceOf(returns[i], models.ReceivedReturn) && util.isObject(returns[i])) {
        returns[i] = new models.ReceivedReturn(returns[i]);
      } else if (!util.isInstanceOf(returns[i], models.ReceivedReturn)) {
        throw new Error(util.format('Expected instance of ReceivedReturn or an Object but got %s',
          typeof returns[i]));
      }
    }

    this.returns = returns;
    return this;
  }

  /**
   * Add Returns.
   * @param {ReceivedReturn} receivedReturn
   * @throws {Error}
   * @returns {OrderReturnListReceived}
   */
  addReceivedReturn(receivedReturn) {
    if (util.isInstanceOf(receivedReturn, models.ReceivedReturn)) {
      this.returns.push(receivedReturn);
    } else if (util.isObject(receivedReturn)) {
      this.returns.push(new models.ReceivedReturn(receivedReturn));
    } else {
      throw new Error(util.format('Expected instance of ReceivedReturn or Object but got %s',
        typeof receivedReturn));
    }

    return this;
  }

  /**
   * Add many ReceivedReturn.
   * @param {ReceivedReturn[]} returns
   * @throws {Error}
   * @returns {OrderReturnListReceived}
   */
  addReturns(returns) {
    var i;
    var l;

    if (!util.isArray(returns)) {
      throw new Error(util.format('Expecting an array of ReceivedReturn but got %s',
        typeof returns));
    }

    for (i = 0, l = returns.length; i < l; i++) {
      if (util.isInstanceOf(returns[i], models.ReceivedReturn)) {
        this.returns.push(returns[i]);
      } else if (util.isObject(returns[i])) {
        this.returns.push(new models.ReceivedReturn(returns[i]));
      } else {
        throw new Error(util.format('Expected array of ReceivedReturn or an array of Object but got %s',
          typeof returns[i]));
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

    if (util.isArray(this.returns)) {
      data['Returns'] = [];

      for (i = 0, l = this.returns.length; i < l; i++) {
        data['Returns'].push(this.returns[i].toObject());
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
    return new responses.OrderReturnListReceived(this, httpResponse, data);
  }
}

module.exports.OrderReturnListReceived = OrderReturnListReceived;