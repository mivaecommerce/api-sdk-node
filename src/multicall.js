/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * Id: multicall.js 71465 2018-11-09 18:59:55Z gidriss 
 */

const { Request, Response } = require('./abstract');
const util = require('./util');

/** @module MultiCall */

/** 
 * Handles creation of an Operation with Iterations.
 * @see MultiCallRequest
 */
class MultiCallOperation {
  /**
   * MultiCallOperation Constructor.
   * @param {Request[]|Request|?} request
   * @param {Object} sharedData
   * @returns {void}
   */
  constructor(request = null, sharedData = {}) {
    var i;
    var l;

    this.requests   = [];
    this.sharedData = {};

    if (util.isInstanceOf(request, Request)) {
      this.addRequest(request);
    } else if (util.isArray(request)) {
      for (i = 0, l = request.length; i < l; i++) {
        this.addRequest(request[i]);
      }
    }

    if (util.isObject(sharedData)) {
      this.sharedData = sharedData;
    }
  }

  /**
   * Add a request iteration.
   * @param {Request} request
   * @returns {MultiCallOperation}
   */
  addRequest(request) {
    if (!util.isInstanceOf(request, Request)) {
      throw new Error('Expecting an instance of Request');
    } else if (util.isInstanceOf(request, MultiCallRequest)) {
      throw new Error('Can\'t nest a MultiCallRequest in a MultiCallOperation');
    }

    this.requests.push(request);

    return this;
  }

  /**
   * Get the request iterations.
   * @returns {Array}
   */
  getRequests() {
    return this.requests;
  }

  /**
   * Set and override the request iterations.
   * @param {Array} requests
   * @returns {MultiCallOperation}
   * @throws {Error}
   */
  setRequests(requests) {
    var i;
    var l;

    if (!util.isArray(requests)) {
      throw new Error(util.format('Expecting an array of Request but got %s', 
        typeof requests));
    }

    this.requests = [];

    for (i = 0, l = requests.length; i < l; i++) {
      this.addRequest(requests[i]);
    }

    return this;
  }

  /**
   * Add an array of requests iterations.
   * @param {Array} requests
   * @returns {MultiCallOperation}
   * @throws {Error}
   */
  addRequests(requests) {
    var i;
    var l;

    if (!util.isArray(requests)) {
      throw new Error(util.format('Expecting an array of Request but got %s', 
        typeof requests));
    }

    for (i = 0, l = requests.length; i < l; i++) {
      this.addRequest(requests[i]);
    }

    return this;
  }

  /**
   * Add a shared data value for key.
   * @param {string} key
   * @param {string|object} value
   * @returns {MultiCallOperation}
   */
  addSharedData(key, value) {
    this.sharedData[key] = value;

    return this;
  }

  /**
   * Set the shared data object.
   * @param {Object} values
   * @returns {MultiCallOperation}
   */
  setSharedData(values) {
    if (util.isObject(values)) {
      this.sharedData = values;
    }

    return this;
  }

  /**
   * Get the shared data between the iterations.
   * @returns {Object}
   */
  getSharedData() {
    return this.sharedData;
  }

  /**
   * Reduce the operation to an object.
   * @returns {Object}
   */
  toObject() {
    var i;
    var l;

    if (!this.requests.length) {
        return {};
    }

    var data = Object.assign(this.sharedData, {
        'Function'   : this.requests[0].getFunction(),
        'Iterations' : []
    });

    for (i = 0, l = this.requests.length; i < l; i++) {
        data['Iterations'].push(this.requests[i].toObject());
    }

    return data;
  }
}

/** 
 * Handles sending multiple Request objects as one request.
 * @see https://docs.miva.com/json-api/multicall
 */
class MultiCallRequest extends Request {
  /**
   * MultiCallRequest Constructor.
   * @param {?Client} client
   * @param {Array} requests
   * @returns {void}
   */
  constructor(client = null, requests = []) {
    super(client);
    this.requests = [];
    this.useIterations = false;
  }

  /**
   * Add a request to be sent.
   * @param {Request} request
   * @returns {MultiCallRequest}
   * @throws {Error}
   */
  addRequest(request) {
    var multirequests;
    var i;
    var l;

    if (!util.isInstanceOf(request, Request)) {
      throw new Error(util.format('Expecting an instance of Request but got %s', 
        typeof request));
    }
    
    if (util.isInstanceOf(request, MultiCallRequest)) {
      multirequests = request.getRequests();

      for (i = 0, l = multirequests.length; i < l; i++) {
        this.addRequest(multirequests[i]);
      }
    } else {
      this.requests.push(request);
    }

    return this;
  }

  /**
   * Get the requests to be sent.
   * @returns {Array}
   */
  getRequests() {
    return this.requests;
  }

  /**
   * Set and override the requests to be sent.
   * @param {Array} requests
   * @returns {MultiCallRequest}
   * @throws {Error}
   */
  setRequests(requests) {
    var i;
    var l;

    if (!util.isArray(requests)) {
      throw new Error(util.format('Expecting an array of Request but got %s', 
        typeof requests));
    }

    this.requests = [];

    for (i = 0, l = requests.length; i < l; i++) {
      this.addRequest(requests[i]);
    }

    return this;
  }

  /**
   * Add requests to be sent.
   * @param {Array} requests
   * @returns {MultiCallRequest}
   * @throws {Error}
   */
  addRequests(requests) {
    var i;
    var l;

    if (!util.isArray(requests)) {
      throw new Error(util.format('Expecting an array of Request but got %s', 
        typeof requests));
    }

    for (i = 0, l = requests.length; i < l; i++) {
      this.addRequest(requests[i]);
    }

    return this;
  }

  /**
   * Create an operation instance and add it to the request.
   * @param {Request|Request[]|*}
   * @returns {MultiCallOperation}
   */
  operation(request = null, sharedData = {}) {
    var operation = new MultiCallOperation(request, sharedData);

    this.addOperation(operation);

    return operation;
  }

  /**
   * Add a operation to be sent.
   * @param {MultiCallOperation} request
   * @returns {MultiCallRequest}
   */
  addOperation(operation) {
    if (!util.isInstanceOf(operation, MultiCallOperation)) {
      throw new Error('Expecting an instance of MultiCallOperation');
    }

    this.requests.push(operation);

    return this;
  }

  /**
   * Add an array of operations.
   * @param {MultiCallOperation[]} request
   * @returns {MultiCallRequest}
   * @throws {Error}
   */
  addOperations(operations) {
    var i;
    var l;

    if (!util.isArray(operations)) {
      throw new Error(util.format('Expecting an array of MultiCallOperation but got %s', 
        typeof operations));
    }

    for (i = 0, l = operations.length; i < l; i++) {
      this.addOperation(operations[i]);
    }    

    return this;
  }

  /**
   * Reduce the request to an Object.
   * @returns {Object}
   * @override
   */
  toObject() {
    var i;
    var l;
    var groups;

    var data = {
      Operations : []
    };

    for (i = 0, l = this.requests.length; i < l; i++) {
      if (util.isInstanceOf(this.requests[i], MultiCallOperation)) {
        data['Operations'].push(this.requests[i].toObject());
      } else {
        data['Operations'].push(Object.assign(this.requests[i].toObject(), {
          Function : this.requests[i].getFunction()
        }));
      }
    }

    return data;
  }

  /**
   * @param {Object} data
   * @override
   */
  createResponse(data) { {}
    return new MultiCallResponse(this, data);
  }
}

/** 
 * Handles multicall response.
 * @see https://docs.miva.com/json-api/multicall
 */
class MultiCallResponse extends Response {
  /**
   * MultiCallResponse constructor.
   * @param {Request} request
   * @param {Object} data
   * @returns {void}
   */
  constructor(request, data) {
    super(request, {});
    var gi;
    var gl;
    var ri;
    var rl;
    var iter_requests;

    var requests   = request.getRequests();

    this.data      = data;
    this.responses = [];

    if (!this.isSuccess()) {
      return;
    }

    for (gi = 0, gl = requests.length; gi < gl; gi++) {
      if (util.isNullOrUndefined(this.data[gi])) {
        throw new Error(util.format('Unexpected Response. Expected response for request %d.', gi));
      }

      if (util.isInstanceOf(requests[gi], MultiCallOperation)) {
        iter_requests = requests[gi].getRequests();

        for (ri = 0, rl = iter_requests.length; ri < rl; ri++) {
          if (util.isNullOrUndefined(this.data[gi][ri])) {
            throw new Error(util.format('Unexpected Response. Expected response for request %d iteration %d',
              gi, ri));
          }

          this.addResponse(iter_requests[ri].createResponse(this.data[gi][ri]));
        }

      } else {
        this.addResponse(requests[gi].createResponse(this.data[gi]));
      }
    }      
  }

  /**
   * @returns {boolean}
   * @override
   */
  isSuccess() {
    return util.isArray(this.data);
  }

  /**
   * Get the responses.
   * @returns {Response[]}
   */
  getResponses() {
    return this.responses;
  }

  /**
   * Add a response.
   * @param {Response} response
   * @returns {MultiCallResponse}
   * @throws Error
   */
  addResponse(response) {
    if (!util.isInstanceOf(response, Response)) {
      throw new Error("Expecting an instance of Response");
    }

    this.responses.push(response);

    return this;
  }

  /**
   * Set and overwrite the responses.
   * @param {Response[]} responses
   * @returns {MultiCallResponse}
   */
  setResponses(responses) {
    var i;
    var l;

    for (i = 0, l = responses.length; i < l; i++) {
      this.addResponse(responses[i]);
    }

    return this;
  }
}

module.exports = {
  MultiCallRequest,
  MultiCallResponse,
  MultiCallOperation
};
