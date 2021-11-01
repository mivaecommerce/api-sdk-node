/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
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
    this.autoTimeoutContinue = false;
    this.initialResponse = null;
    this.autoContinueCallback = null;
    this.continueError = null;
    this.range = {
      completed: 0,
      total: 0
    };
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
   * Set the state of the auto timeout continue flag
   * @param {bool}
   * @returns {MultiCallRequest}
   */
  setAutoTimeoutContinue(state) {
    this.autoTimeoutContinue = state;
    return this;
  }
  
  /**
   * Get the state of the auto timeout continue flag
   * @returns {bool}
   */
  getAutoTimeoutContinue() {
    return this.autoTimeoutContinue;
  }

  /**
   * Set the callback used throughout the auto continue feature. 
   * This callback gets called on error, on each chunk, and on completion
   * @param  {MultiCallRequest~autoContinueCallback}
   * @returns {MultiCallRequest}
   * @throws {Error}
   */
  setAutoContinueCallback(cb) {
    if (!util.isNullOrUndefined(cb) && !util.isFunction(cb)) {
      throw new Error('Callback expected to be null or a function');
    }

    this.autoContinueCallback = cb;
    return this;
  }

  /**
   * The callback signature for MultiCallRequest~autoContinueCallback
   * @callback MultiCallRequest~autoContinueCallback
   * @param {?Error} error
   * @param {?Response} response
   * @param {?bool} completed
   */

  /**
   * @overrides
   * @param {Object} headers
   * @returns {Object}
   */
  processRequestHeaders(headers) {
    if (util.isInstanceOf(this.initialResponse, MultiCallResponse)) {
      if (this.initialResponse.isTimeout()) {
        headers['RANGE'] = util.format('Operations=%d-%d', this.range.completed + 1, this.range.total)
      }
    }

    return headers;
  }

  /**
   * @param {Object} httpResponse
   * @param {Object} data
   * @override
   */
  createResponse(httpResponse, data) {
    var response = new MultiCallResponse(this, httpResponse, data);

    if (response.isTimeout() && this.autoTimeoutContinue) {
      this.initialResponse = response;
      this.range = response.readContentRange();
      this.processContinue();
    }

    return response;
  }

  /**
   * @returns {void}
   */
  processContinue() {
    var self = this;

    if (this.continueError == null && this.range.completed != this.range.total) {
      this.send(function(error, response) {
        var e, range;

        if (error) {
          self.continueError = new MultiCallError(error, self.request, self);
          return self.processContinue();
        }

        if (!util.isArray(response.data)) {
          self.continueError = new MultiCallError('Expected an array of objects', self.request, self);
          return self.processContinue();
        }

        response.getResponses().forEach(function(chunkResponse) {
          self.initialResponse.addResponse(chunkResponse);
          self.initialResponse.data.concat(chunkResponse.data);
        });

        range = response.readContentRange();

        if (range.completed > 0 ) {
          self.range.completed += range.completed;
        } else {
          if ((self.range.total - self.range.completed) == response.data.length) {
            self.range.completed = self.range.total;
          }
        }

        if (util.isFunction(self.autoContinueCallback)) {
          self.autoContinueCallback(null, response, false);
        }

        self.processContinue();
      });
    } else {
      var initialResponse = this.initialResponse;
      if (this.continueError == null) {
        this.initialResponse = null;
        initialResponse.timeout = false;
      }

      if (util.isFunction(this.autoContinueCallback)) {
        this.autoContinueCallback(this.continueError, initialResponse, (this.continueError == null));
      }
    }
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
   * @param {Object} httpResponse
   * @param {Object} data
   * @returns {void}
   */
  constructor(request, httpResponse, data) {
    super(request, httpResponse, {});

    var requests, requestStartIndex;
    var self = this;

    this.data      = data;
    this.responses = [];
    this.timeout = false;

    if (httpResponse.statusCode === 206) {
      this.timeout = true;
    }

    requestStartIndex = 0;
    requests = request.getRequests();

    if (request.initialResponse != null) {
        requestStartIndex = request.initialResponse.getResponses().length;
    }

    if (util.isArray(this.data)) {
      this.data.forEach(function(rdata, index) {
        var requestIndex = requestStartIndex + index;
        var crequest = requests[requestIndex];
        
        if (util.isNullOrUndefined(crequest)) {
          throw new MultiCallError('Unable to match response data chunk to request object', self.request, self);
        }

        if (util.isInstanceOf(crequest, MultiCallOperation)) {
          crequest.getRequests().forEach(function(oprequest, opindex) {
            self.addResponse(oprequest.createResponse(self.httpResponse, rdata[opindex]));
          });
        } else {
          self.addResponse(crequest.createResponse(self.httpResponse, rdata));
        }
      }); 
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
   * @returns {boolean}
   */
  isTimeout() {
    return this.timeout;
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
      throw new MultiCallError("Expecting an instance of Response", this.request, this);
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

  /**
   * @returns {Object}
   */
  readContentRange() {
    var ranges;
    var completed = 0;
    var total = 0;

    var range = this.httpResponse.headers['content-range'];

    if (!util.isNullOrUndefined(range))
    {
      ranges = range.split('/');

      if (ranges.length == 2) {
        completed = parseInt(ranges[0]);
        total = parseInt(ranges[1]);
      }
    }

    return {
      completed: completed,
      total: total
    }
  }
}

/** 
 * Any errors thrown within MultiCall will be of this type
 */
class MultiCallError extends Error {
  constructor(message, request, response) {
    super(message);
    this.request = request;
    this.response = response;
  }

  getRequest() {
    return this.request;
  }

  getResponse() {
    return this.response;
  }
}

module.exports = {
  MultiCallRequest,
  MultiCallResponse,
  MultiCallOperation,
  MultiCallError
};
