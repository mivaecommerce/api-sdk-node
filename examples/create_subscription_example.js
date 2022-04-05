/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const api = require('merchantapi');

/* Initialize a client */
var client  = new api.Client('https://www.mystore.com/mm5/json.mvc', 'MyApiToken', 'MySigningKey', {});

var productCode = 'MySubscriptionProduct';
var productSubscriptionTerm = 'MySubscriptionTermDescription';
var customerLogin = 'CustomerLogin';

/* Load our subscribing customers addresses */
var addressRequest = new api.requests.CustomerAddressListLoadQuery(client);

addressRequest.setCustomerLogin(customerLogin);

addressRequest.send(function(error, addressResponse) {
  if (error) {
    console.log(error);
    return;
  }

  if (!addressResponse.isSuccess()) {
    console.log('Error Loading Addresses', addressResponse.getErrorCode(), addressResponse.getErrorMessage());
    return;
  } else if (addressResponse.getTotalCount() == 0) {
    console.log('Address not found');
    return;
  }

  var address = addressResponse.getCustomerAddresses()[0];

  /*
  Register a payment card with CustmerPaymentCardRegister
  Or load an existing card with CustomerPaymentCardListLoadQuery
  In this example we are going to register a payment card
  */

  var paymentCardRequest = new api.requests.CustomerPaymentCardRegister(client);

  paymentCardRequest.setCustomerLogin(customerLogin);
  paymentCardRequest.setFirstName(address.getFirstName());
  paymentCardRequest.setLastName(address.getLastName());
  paymentCardRequest.setCardType('Visa');
  paymentCardRequest.setCardNumber('4111111111111111');
  paymentCardRequest.setExpirationMonth(08);
  paymentCardRequest.setExpirationYear(2025);
  paymentCardRequest.setAddress1(address.getAddress1());
  paymentCardRequest.setAddress2(address.getAddress2());
  paymentCardRequest.setCity(address.getCity());
  paymentCardRequest.setState(address.getState());
  paymentCardRequest.setZip(address.getZip());
  paymentCardRequest.setCountry(address.getCountry());
  
  paymentCardRequest.send(function(error, paymentCardResponse) {
    if (error) {
      console.log(error);
      return;
    }

    if (!paymentCardResponse.isSuccess()) {
      console.log('Error Registering Payment Card', paymentCardResponse.getErrorCode(), paymentCardResponse.getErrorMessage());
      return;
    }

    var paymentCard = paymentCardResponse.getCustomerPaymentCard();

    /* Find a valid shipping method */
    var methodRequest = new api.requests.SubscriptionShippingMethodListLoadQuery(client);
    
    methodRequest.setProductCode(productCode);
    methodRequest.setCustomerLogin(customerLogin);
    methodRequest.setAddressId(address.getId());
    methodRequest.setPaymentCardId(paymentCard.getId());
    methodRequest.setQuantity(1);
    methodRequest.setProductSubscriptionTermDescription(productSubscriptionTerm);
    
    methodRequest.send(function(error, methodResponse) {
      if (error) {
        console.log(error);
        return;
      }

      if (!methodResponse.isSuccess()) {
        console.log('Error Loading Shipping Methods', methodResponse.getErrorCode(), methodResponse.getErrorMessage());
        return;
      } else if (methodResponse.getTotalCount() == 0) {
        console.log('Shipping method not found');
        return;
      }

      var method = methodResponse.getSubscriptionShippingMethods()[0];
      
      /* Create the subscription */
      var request = api.requests.SubscriptionInsert(client);
                  
      request.setProductCode(productCode);
      request.setProductSubscriptionTermDescription(productSubscriptionTerm);
      request.setCustomerLogin(customerLogin);
      request.setCustomerAddressId(address.getId());
      request.setPaymentCardId(paymentCard.getId());
      request.setQuantity(1);
      request.setShipId(method.getModule().getId());   // Supply the shipping module id
      request.setShipData('MyShippingMethodData');     // Supply any required shipping data for this method
      request.setNextDate(new Date());                 // Set the next charge date, in this case we are using today

      // If you have attributes, you can specify them here

      var attr1 = api.models.SubscriptionAttribute();
      var attr2 = api.models.SubscriptionAttribute();

      attr1.setCode('attr1');
      attr1.setValue('attr1val');

      attr2.setCode('attr2');
      attr2.setValue('attr2val');

      request.addAttribute(attr1);
      request.addAttribute(attr2);
      
      request.send(function(error, response) {
        if (error) {
          console.log(error);
          return;
        }

        if (!response.isSuccess()) {
          console.log('Error Creating Subscription', response.getErrorCode(), response.getErrorMessage());
          return;
        }

        console.log('Created Subscription ' + response.getSubscription().getId() + ' For Customer ' + customerLogin + ' Product ' + productCode + ' Term ' + productSubscriptionTerm)''
      });
    });
  });
});