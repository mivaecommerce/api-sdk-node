/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const api = require('merchantapi');

/**
 * The SSHClient allow you to authenticate requests by using a ssh private key
 * to sign requests.
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

/** The store username associated with the key*/
var storeUsername = 'Username';

/**
 * The full path to your private key file, in PEM format.
 * For more information on the key format, reference the README
 */
var privateKeyFile = '/path/to/my/id_rsa';

/** An optional password, if your key is encrypted */
var privateKeyPassword = 'MyKeyPassword';

var client = new api.SSHClient('https://www.mystore.com/mm5/json.mvc', storeUsername, privateKeyFile, privateKeyPassword, options);
