# Upgrade Guide from 1.x to 2.x

## Usage of OrderItemOption

Usage of OrderItemOption will need to be updated to support the change to the member `attribute` to `attributeCode`.

Replace all usage of `OrderItemOption` models that call either `getAttribute()` or `setAttribute(str)` with `getAttributeCode()` and `setAttributeCode(str)`.

**Example usage from 1.x:**

    var itemOption = new merchantapi.models.OrderItemOption();
    itemOption.setAttribute("code");

**Should be updated for 2.x:**

    itemOption = new merchantapi.models.OrderItemOption();
    itemOption.setAttributeCode('code');

**Example usage from 1.x:**

	var itemOption; // A OrderItemOption model loaded from an OrderListLoadQuery, for example
	itemOption.getAttribute();

**Should be updated for 2.x:**

	var itemOption; // A OrderItemOption model loaded from an OrderListLoadQuery, for example
	itemOption.getAttributeCode();
