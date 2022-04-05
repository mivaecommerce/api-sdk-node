# Upgrade Guide from 2.0.X to 2.1.0+

The class `TemplateVersionSettings` has been renamed to `VersionSettings`.

If you are utilizing this class within your code then you will need to be renamed in their type declarations. Usage has stayed the same.

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
