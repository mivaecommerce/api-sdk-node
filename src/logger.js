/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./util');
const fs = require('fs');
const http = require('http');
const { Request, Response } = require('./abstract');

/** @module Logger */

/** Logger data model. */
class Logger {
  /**
   * Logs the request
   * @returns {void}
   */
  logRequest(request, headers, content) {
    var sellf = this;

    if (util.isObject(headers)) {
      var keys = Object.keys(headers);

      if (keys.length) {
        this.writeLine(util.format("\r\n============= Request: %s [HEADERS] =============\r\n", request.getFunction()));

        keys.forEach(function(k, i) {
          self.writeLine(util.format('%s = %s', k, headers[k]));
        });
      }
    }

    this.writeLine(util.format("\r\n============= Request: %s [BODY] =============\r\n", request.getFunction()));

    if (util.isObject(content)) {
      this.writeLine(JSON.stringify(content));
    } else {
      this.writeLine(content);
    }
  }

  /**
   * Logs the response
   * @returns {void}
   */
  logResponse(response, content) {
    var self = this;

    if (util.isObject(response.getHttpResponse().headers)) {
      this.writeLine(util.format("\r\n============= Response: %s [HEADERS] =============\r\n", response.getRequest().getFunction()));
      
      var headers = response.getHttpResponse().headers;
      var keys = Object.keys(headers);

      keys.forEach(function(k, i) {
        self.writeLine(util.format('%s = %s', k, headers[k]));
      });
    }
    
    this.writeLine(util.format("\r\n============= Response: %s [BODY] =============\r\n", response.getRequest().getFunction()));
    this.writeLine(content);
  }

  /**
   * Writes the data to the log
   * @param data
   * @returns {void}
   */
  write(data) {
    throw new Error('Must be implemented in inherited class');
  }

  /**
   * Writes the data to the log appened by EOL
   * @param data
   * @returns {void}
   */
  writeLine(data) {
    throw new Error('Must be implemented in inherited class');
  }
}

/** @ignore */
const DESTINATION_STDOUT = 'stdout';
/** @ignore */
const DESTINATION_STDERR = 'stderr';

/** ConsoleLogger */
class ConsoleLogger extends Logger {
  constructor(destination = DESTINATION_STDOUT) {
    this.destination = destination;
  }

  /**
   * Constant DESTINATION_STDOUT
   * @constant
   * @returns {string}
   */
  static get DESTINATION_STDOUT() {
    return DESTINATION_STDOUT;
  }

  /**
   * Constant DESTINATION_STDERR
   * @constant
   * @returns {string}
   */
  static get DESTINATION_STDERR() {
    return DESTINATION_STDERR;
  }

  /**
   * Writes the data to the log
   * @param data
   * @returns {void}
   */
  write(data) {
    if (this.destination == DESTINATION_STDERR) {
      process.stderr.write(data);
    } else {
      process.stdout.write(data);
    }
  }

  /**
   * Writes the data to the log appened by EOL
   * @param data
   * @returns {void}
   */
  writeLine(data) {
    this.write(data + "\r\n");
  }
}

/** FileLogger */
class FileLogger extends Logger {

  /**
   * Constructor
   * @param {string}
   */
  constructor(filePath) {
    super();

    var self = this;

    this.filePath = filePath;
    this.handle = null;

    fs.open(filePath, 'a+', function(error, fd) {
      if (error) {
        throw error;
      }

      self.handle = fd;
    });
  }

  /**
   * Writes the data to the log
   * @param data
   * @returns {void}
   */
  write(data) {
    if (!this.handle) {
      return;
    }

    fs.writeFileSync(this.handle, data);
  }

  /**
   * Writes the data to the log appened by EOL
   * @param data
   * @returns {void}
   */
  writeLine(data) {
    this.write(data + "\r\n");
  }
}

module.exports = {
  Logger,
  ConsoleLogger,
  FileLogger
};
