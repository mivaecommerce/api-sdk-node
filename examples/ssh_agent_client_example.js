/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const api = require('merchantapi');

/**
 * The SSHAgentClient allow you to authenticate requests by using your local
 * SSH Agent socket to sign the request. This is ideal with using hardware keys
 * such as Yubikey.
 */

var options = {
  /*
      Boolean value designating if each request should include a
      timestamp or not. Default is true.
  */
  require_timestamps: true,
  /*
      The default store code that will be added to each request that
      did not have one specified. Default is null.
  */
  default_store_code: 'STORE_CODE',

  /* Multi call operation timeout, in seconds. Defaults to 60 */
  'operation_timeout': 60
};

var publicKeyFile = '/path/to/my/id_rsa.pub';

/** The store username associated with the key*/
var storeUsername = 'Username';

/**
 * The full path to your public key file. 
 * For more information on the key format, reference the README
 */
var publicKeyFile = '/path/to/my/id_rsa.pub';

/** you can optionally provide this, but the default value is whatever is in the SSH_AGENT_SOCK environment variable value. */
var agentSocketPath ='';

var client = new api.SSHAgentClient('https://www.mystore.com/mm5/json.mvc', 'Username', publicKeyFile, agentSocketPath, options);
