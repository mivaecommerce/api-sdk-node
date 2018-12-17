/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * $Id: multicall_example.js 72034 2018-12-17 18:53:54Z gidriss $
 */

const api   = require('merchantapi');
const util  = require('util');

/* Initialize a client */
var client  = new api.Client('https://www.mystore.com/mm5/json.mvc', 'MyApiToken', 'MySigningKey', {});

/* Create a ProductInsert request instance, passing client to the constructor */
var request = new api.MultiCallRequest(client);

/*
 * Create a MultiCallRequest and add Request objects to it
 */
request.addRequest(new api.requests.ProductListLoadQuery())
    .addRequest(new api.requests.CategoryListLoadQuery())
    .addRequest(new api.requests.PriceGroupListLoadQuery());

/* Send the request */
request.send(function(error, response) {
  if (error) {
    // handle error
    console.log(error);
    return;
  }

  if (!response.isSuccess()) {
    console.log('Error Executing MultiCallRequest', response.getErrorCode(), response.getErrorMessage());
  } else {
  	var responses = response.getResponses();

    for(var i = 0, l = responses.length; i < l; i++) {
    	console.log(util.format('Response for %s', responses[i].getFunction()));
    	console.log(responses[i].getData());
    }
  }
});

/*
 * Utilizing the Iterations feature allows you to compact request
 * data by grouping multiple iterations to the same API function
 * in sequence.
 *
 * @see MultiCallOperation
 */

request = new api.MultiCallRequest(client);

/* Create a new MultiCallOperation and adds it to the Request. */
var operation = request.operation();

/*
    Alternately:
        var operation = new api.MultiCallOperation();
        request.addOperation(operation);
*/

/*  Set shared data between the iterations, for example we can set a shared
    value for Product_Price and update many products without specifying the same
    data for each of the iterations.
 */

operation.setSharedData('Product_Price', 29.99);

/* We now add all the same request types to the operation to make use of iterations */

var update1 = new api.requests.ProductUpdate(client);

update1.setEditProduct('PROD_1');

var update2 = new api.requests.ProductUpdate(client);

update2.setEditProduct('PROD_2');

var update3 = new api.requests.ProductUpdate(client);

update3.setEditProduct('PROD_3');

var update4 = new api.requests.ProductUpdate(client);

update4.setEditProduct('PROD_4')
  .setProductName('Product 4');

operation.addRequest(update1);
operation.addRequest(update2);
operation.addRequest(update3);
operation.addRequest(update4);

// We can add more requests as well. Add a Product List Load to get the updated products at the end
checkProducts = new api.requests.ProductListLoadQuery(client);

checkProducts.setFilters(
    checkProducts.filterExpression().isIn('code', ['PROD_1', 'PROD_2', 'PROD_3', 'PROD_4'])
);

request.addRequest(checkProducts);

/* Send the request */
request.send(function(error, response) {
  if (error) {
    // handle error
    console.log(error);
    return;
  }

  if (!response.isSuccess()) {
    console.log('Error Executing MultiCallRequest', response.getErrorCode(), response.getErrorMessage());
  } else {
  	var responses = response.getResponses();

    for(var i = 0, l = responses.length; i < l; i++) {
    	console.log(util.format('Response for %s', responses[i].getFunction()));
    	console.log(responses[i].getData());
    }
  }
});
