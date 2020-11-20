/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const api = require('merchantapi');

/* Initialize a client */
var client  = new api.Client('https://www.mystore.com/mm5/json.mvc', 'MyApiToken', 'MySigningKey', {});

/* Create a ProductListAdjustInventory request instance, passing client to the constructor */
var request = new api.requests.ProductListAdjustInventory(client);

/* or
 * client.createRequest('ProductListAdjustInventory');
 */

/* Create instances of ProductInventoryAdjustment for each adjustment we want to make */

/* Add 100 to inventory count by product code */
adjustment1 = new api.models.ProductInventoryAdjustment();
adjustment1.setProductCode('PRODUCT_1')
  .setAdjustment(100);

/* Subtract 25 from inventory count by product code */
adjustment2 = new api.models.ProductInventoryAdjustment();
adjustment2.setProductCode('PRODUCT_2')
  .setAdjustment(-25);

/* Add 10 to inventory count by product id */
adjustment3 = new api.models.ProductInventoryAdjustment();
adjustment3.setProductId(10248)
  .setAdjustment(10);

/* Add 30 to inventory count by product sku */
adjustment4 = new api.models.ProductInventoryAdjustment();
adjustment4.setProductSku('ProductSku1')
  .setAdjustment(30);

/* Add the ProductInventoryAdjustment object to the Request */
request.addInventoryAdjustment(adjustment1);

/* You can also add an array of ProductInventoryAdjustment */
request.addInventoryAdjustments([
  adjustment2,
  adjustment3,
  adjustment4
]);

/* Send the request */
request.send(function(error, response) {
  if (error) {
    // handle error
    console.log(error);
    return;
  }

  if (!response.isSuccess()) {
    console.log('Error Updating Product Inventory', response.getErrorCode(), response.getErrorMessage());
  } else {
    console.log('Successfully Updated Product Inventory');
  }
});
