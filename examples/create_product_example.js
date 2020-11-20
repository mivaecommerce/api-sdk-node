/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const api = require('merchantapi');

/* Initialize a client */
var client  = new api.Client('https://www.mystore.com/mm5/json.mvc', 'MyApiToken', 'MySigningKey', {});

/* Create a ProductInsert request instance, passing client to the constructor */
var request = new api.requests.ProductInsert(client);

/* Setup our request variables */
request.setProductCode('NEW_PRODUCT')
  .setProductName('My New Product')
  .setProductPrice(29.99)
  .setProductWeight(1.5);

/* Send the request */
request.send(function(error, response) {
  if (error) {
    // handle error
    console.log(error);
    return;
  }

  if (!response.isSuccess()) {
    console.log('Error Inserting Product', response.getErrorCode(), response.getErrorMessage());
  } else {
    console.log('Successfully Inserted Product');
  }
});
