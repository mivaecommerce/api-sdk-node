/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const api  = require('merchantapi');
const util = require('util');

/* Initialize a client */
var client  = new api.Client('https://www.mystore.com/mm5/json.mvc', 'MyApiToken', 'MySigningKey', {});

/* Create a OrderListLoadQuery request instance, passing client to the constructor */
var request = new api.requests.OrderListLoadQuery(client);

/* include additional order information by including ondemandcolumns */
request.setOnDemandColumns([
  'ship_method',              // include the shipping method
  'cust_login',               // include the customers login
  'cust_pw_email',            // include the customers email address
  'business_title',           // include the customers business account title
  'payment_module',           // include the payment module information
  'customer',                 // include the customer information
  'items',                    // include the orders items
  'charges',                  // include the orders charges
  'coupons',                  // include the orders coupons
  'discounts',                // include the orders discounts
  'payments'                  // include the orders payments
]);

request.addOnDemandColumn('notes'); // include the orders notes

/* Include all custom fields */
request.addOnDemandColumn('CustomField_Values:*');

/* Set the list sorting */
request.setSort('id', api.requests.OrderListLoadQuery.SORT_DESCENDING);

/* If you wish to decrypt payment data, you must provide the passphrase used by your encryption key */
request.setPassphrase('MY_ENCRYPTION_KEYS_PASSPHRASE');

/* Send the request */
request.send(function(error, response) {
  if (error) {
    // handle error
    console.log(error);
    return;
  }

  if (!response.isSuccess()) {
    console.log('Error Loading Order List', response.getErrorCode(), response.getErrorMessage());
  } else {
    response.getOrders().forEach(function(order) {
      console.log(util.format('Order ID %d With %d Items, %d Charges Total %s',
        order.getId(),
        order.getItems().length,
        order.getCharges().length,
        order.getFormattedTotal()));
    });
  }
});
