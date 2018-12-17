/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * $Id: load_and_edit_product_example.js 71519 2018-11-13 23:25:31Z gidriss $
 */

const api  = require('merchantapi');
const util = require('util');

/* Initialize a client */
var client  = new api.Client('https://www.mystore.com/mm5/json.mvc', 'MyApiToken', 'MySigningKey', {});

/* Load the product first */
var loadProductRequest = new api.requests.ProductListLoadQuery(client);

/*
 * or
 * request = $client->createRequest('ProductListLoadQuery');
 */

/*
 * apply filtering to match a specific product
 *
 * @see list_query_example.js
 */
loadProductRequest.setFilters(
  loadProductRequest.filterExpression()
    .equal('code', 'MY_PRODUCT')
);

loadProductRequest.send(function(error, loadProductResponse){
  if (error) {
    // handle error
    console.log(error);
    return;
  }

  if (!loadProductResponse.isSuccess()) {
    console.log('Load Product Error', loadProductResponse.getErrorCode(), loadProductResponse.getErrorMessage());
    return;
  } else if (!loadProductResponse.getProducts().length) {
    console.log('Product Not Found');
    return;
  }

  var product = loadProductResponse.getProducts()[0];

  console.log(util.format('Loaded Product %s Code %s Name %s', 
      product.getId(), product.getCode(), product.getName()));

  /*
   * Some requests accept a Model object in their constructor
   * which will allow the Request object to inherit data from.
   * ProductUpdate accepts a Product model.
   */
  var request = new api.requests.ProductUpdate(client, product);

  /*
   * or
   * request = $client->createRequest('ProductUpdate', product );
   */

  request.setProductName('The New Product Name')
    .setProductDescription('New Product Description')
    .setProductPrice(39.99)
    .setProductCost(29.99)
    .setProductWeight(2.5);

  request.send(function(error, updateResponse){
    if (error) {
      // handle error
      console.log(error);
      return;
    }

    if (!updateResponse.isSuccess()) {
      console.log('Load Product Error', updateResponse.getErrorCode(), updateResponse.getErrorMessage());
    } else {
      console.log('Product Updated');
    }
  });
});
