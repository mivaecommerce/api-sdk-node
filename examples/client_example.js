/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const api = require('merchantapi');

var options = {
  /*
      Boolean value designating if each request should include a
      timestamp or not. Default is true.
  */
  require_timestamps: true,
  /*
      The signing digest type used for request signatures. Available
      options:
          Client.SIGN_DIGEST_SHA1
          Client.SIGN_DIGEST_SHA256
          Client.SIGN_DIGEST_NONE

      defaults to Client.SIGN_DIGEST_SHA256
  */
  signing_key_digest: api.Client.SIGN_DIGEST_SHA256,
  /*
      The default store code that will be added to each request that
      did not have one specified. Default is null.
  */
  default_store_code: 'STORE_CODE',

  /* Multi call operation timeout, in seconds. Defaults to 60 */
  'operation_timeout': 60
};

var client = new api.Client('https://www.mystore.com/mm5/json.mvc', 'MyApiToken', 'MySigningKey', options);

/// Request Logging can be enabled by assigning a Logger instance to the client

/// Currently, we provide two logger types:
//       FileLogger - logs to a local file
//       ConsoleLogger - logs to std out/err

// Setting up a FileLogger
client.setLogger(new api.logger.FileLogger("/path/to/my/logfile.log"));

// Setting up a ConsoleLogger to log to stdout
client.setLogger(new api.logger.ConsoleLogger('stdout'));

// Setting up a ConsoleLogger to log to stderr
client.setLogger(new api.logger.ConsoleLogger('stderr'));