/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * $Id: client_example.js 71932 2018-12-12 20:25:36Z gidriss $
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
  default_store_code: 'STORE_CODE'
};

var client = new api.Client('https://www.mystore.com/mm5/json.mvc', 'MyApiToken', 'MySigningKey', options);
