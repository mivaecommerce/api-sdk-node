/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * This example will load an order by its ID from the from a constant 
 * then proceed to create a shipment for all items in the order 
 * and then finally update the shipment with tracking information and 
 * mark it as shipped.
 */

const api   = require('merchantapi');
const util  = require('util');

var client  = new api.Client('https://www.mystore.com/mm5/json.mvc', 'MyApiToken', 'MySigningKey', {});

var orderRequest = new api.requests.OrderListLoadQuery(client);

orderRequest.getFilters().equal('id', 10000);

orderRequest.send(function(error, orderResponse) {
  if (error) {
    console.log(error);
    return;
  } else if (!orderResponse.isSuccess()) {
    console.log('Error Loading Order', orderResponse.getErrorCode(), orderResponse.getErrorMessage());
    return;
  }

  orderResponse.getOrders().forEach(function(order) {
    if (!order.getItems().length) {
      return;
    }

     // Create a shipment for all items in the order that do not have a shipment

    var createShipmentRequest = new api.requests.OrderItemListCreateShipment(client);

    order.getItems().forEach(function(item) {
      if (!item.getShipmentId()) {
        createShipmentRequest.addOrderItem(item);
      }
    });

    createShipmentRequest.send(function(error, createShipmentResponse) {
      if (error) {
        console.log(error);
        return;
      } else if (!createShipmentResponse.isSuccess()) {
        console.log('Error Creating Shipment', createShipmentResponse.getErrorCode(), createShipmentResponse.getErrorMessage());
        return;
      }

      var shipment = createShipmentResponse.getShipment();

      // Now that we have created a shipment for the items in the order we can
      // assign a tracking number and mark it shipped

      var trackingNumber = util.format('Z%s', Math.random());
      var shipmentUpdateRequest = new api.requests.OrderShipmentListUpdate(client);
      var shipmentUpdate = new api.models.OrderShipmentUpdate();

      shipmentUpdate.setCost(1.00)
        .setMarkedShipped(true)
        .setShipmentId(shipment.getId())
        .setTrackingNumber(trackingNumber)
        .setTrackingType('UPS');

      shipmentUpdateRequest.addShipmentUpdate(shipmentUpdate);

      shipmentUpdateRequest.send(function(error, shipmentUpdateResponse) {
        if (error) {
          console.log(error);
          return;
        } else if (!shipmentUpdateResponse.isSuccess()) {
          console.log('Error Updating Shipment', shipmentUpdateResponse.getErrorCode(), shipmentUpdateResponse.getErrorMessage());
          return;
        }

        console.log(util.format('Order %d Shipment %d Updated With Tracking %s', order.getId(), shipment.getId(), trackingNumber));
      });
    });
  });
});
