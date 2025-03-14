/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { AvailabilityGroup } = require('./model/AvailabilityGroup')
const { AvailabilityGroupShippingMethod } = require('./model/AvailabilityGroupShippingMethod')
const { BusinessAccount } = require('./model/BusinessAccount')
const { Customer } = require('./model/Customer')
const { Coupon } = require('./model/Coupon')
const { CustomFieldValues } = require('./model/CustomFieldValues')
const { Module } = require('./model/Module')
const { Note } = require('./model/Note')
const { PriceGroup } = require('./model/PriceGroup')
const { DiscountModuleCapabilities } = require('./model/DiscountModuleCapabilities')
const { Product } = require('./model/Product')
const { RelatedProduct } = require('./model/RelatedProduct')
const { ProductImageData } = require('./model/ProductImageData')
const { ProductAttribute } = require('./model/ProductAttribute')
const { ProductOption } = require('./model/ProductOption')
const { ProductShippingMethod } = require('./model/ProductShippingMethod')
const { ProductShippingRules } = require('./model/ProductShippingRules')
const { Uri } = require('./model/Uri')
const { UriDetail } = require('./model/UriDetail')
const { ProductVariant } = require('./model/ProductVariant')
const { ProductVariantAttribute } = require('./model/ProductVariantAttribute')
const { ProductKit } = require('./model/ProductKit')
const { ProductKitPart } = require('./model/ProductKitPart')
const { KitPart } = require('./model/KitPart')
const { Category } = require('./model/Category')
const { Order } = require('./model/Order')
const { OrderShipment } = require('./model/OrderShipment')
const { OrderItemOption } = require('./model/OrderItemOption')
const { OrderItem } = require('./model/OrderItem')
const { OrderCharge } = require('./model/OrderCharge')
const { OrderCoupon } = require('./model/OrderCoupon')
const { OrderItemDiscount } = require('./model/OrderItemDiscount')
const { OrderItemOptionDiscount } = require('./model/OrderItemOptionDiscount')
const { OrderDiscountTotal } = require('./model/OrderDiscountTotal')
const { OrderPayment } = require('./model/OrderPayment')
const { BaseSubscription } = require('./model/BaseSubscription')
const { ProductSubscriptionTerm } = require('./model/ProductSubscriptionTerm')
const { OrderCustomField } = require('./model/OrderCustomField')
const { CustomerPaymentCard } = require('./model/CustomerPaymentCard')
const { OrderProductAttribute } = require('./model/OrderProductAttribute')
const { OrderProduct } = require('./model/OrderProduct')
const { ProductInventorySettings } = require('./model/ProductInventorySettings')
const { ProductVariantPart } = require('./model/ProductVariantPart')
const { ProductVariantDimension } = require('./model/ProductVariantDimension')
const { SubscriptionOption } = require('./model/SubscriptionOption')
const { ProductInventoryAdjustment } = require('./model/ProductInventoryAdjustment')
const { OrderShipmentUpdate } = require('./model/OrderShipmentUpdate')
const { ProductVariantLimit } = require('./model/ProductVariantLimit')
const { ProductVariantExclusion } = require('./model/ProductVariantExclusion')
const { ProvisionMessage } = require('./model/ProvisionMessage')
const { CustomerAddress } = require('./model/CustomerAddress')
const { OrderTotal } = require('./model/OrderTotal')
const { OrderPaymentTotal } = require('./model/OrderPaymentTotal')
const { PrintQueue } = require('./model/PrintQueue')
const { PrintQueueJob } = require('./model/PrintQueueJob')
const { PaymentMethod } = require('./model/PaymentMethod')
const { PaymentCardType } = require('./model/PaymentCardType')
const { OrderPaymentAuthorize } = require('./model/OrderPaymentAuthorize')
const { Branch } = require('./model/Branch')
const { BranchTemplateVersion } = require('./model/BranchTemplateVersion')
const { VariableValue } = require('./model/VariableValue')
const { Changeset } = require('./model/Changeset')
const { TemplateChange } = require('./model/TemplateChange')
const { ResourceGroupChange } = require('./model/ResourceGroupChange')
const { CSSResourceChange } = require('./model/CSSResourceChange')
const { JavaScriptResourceChange } = require('./model/JavaScriptResourceChange')
const { ChangesetChange } = require('./model/ChangesetChange')
const { PropertyChange } = require('./model/PropertyChange')
const { ChangesetTemplateVersion } = require('./model/ChangesetTemplateVersion')
const { CSSResourceVersion } = require('./model/CSSResourceVersion')
const { CSSResource } = require('./model/CSSResource')
const { Page } = require('./model/Page')
const { JavaScriptResourceVersion } = require('./model/JavaScriptResourceVersion')
const { JavaScriptResource } = require('./model/JavaScriptResource')
const { ResourceAttribute } = require('./model/ResourceAttribute')
const { CustomerCreditHistory } = require('./model/CustomerCreditHistory')
const { OrderReturn } = require('./model/OrderReturn')
const { ReceivedReturn } = require('./model/ReceivedReturn')
const { PropertyVersion } = require('./model/PropertyVersion')
const { ResourceGroup } = require('./model/ResourceGroup')
const { MerchantVersion } = require('./model/MerchantVersion')
const { Store } = require('./model/Store')
const { CustomerAddressList } = require('./model/CustomerAddressList')
const { VariantAttribute } = require('./model/VariantAttribute')
const { VariantPart } = require('./model/VariantPart')
const { ImageType } = require('./model/ImageType')
const { PriceGroupExclusion } = require('./model/PriceGroupExclusion')
const { AttributeTemplate } = require('./model/AttributeTemplate')
const { AttributeTemplateAttribute } = require('./model/AttributeTemplateAttribute')
const { AttributeTemplateOption } = require('./model/AttributeTemplateOption')
const { OrderPart } = require('./model/OrderPart')
const { ProductAttributeListAttribute } = require('./model/ProductAttributeListAttribute')
const { ProductAttributeListOption } = require('./model/ProductAttributeListOption')
const { ProductAttributeListTemplate } = require('./model/ProductAttributeListTemplate')
const { ProductSubscriptionTermDate } = require('./model/ProductSubscriptionTermDate')
const { SubscriptionAttribute } = require('./model/SubscriptionAttribute')
const { SubscriptionShippingMethod } = require('./model/SubscriptionShippingMethod')
const { SplitOrderItem } = require('./model/SplitOrderItem')
const { ModuleChange } = require('./model/ModuleChange')
const { CopyPageRule } = require('./model/CopyPageRule')
const { CopyPageRulesSettings } = require('./model/CopyPageRulesSettings')
const { CopyProductRule } = require('./model/CopyProductRule')
const { CopyProductRulesModule } = require('./model/CopyProductRulesModule')
const { CopyProductRulesCustomField } = require('./model/CopyProductRulesCustomField')
const { ProductSubscriptionSettings } = require('./model/ProductSubscriptionSettings')
const { BranchItemVersion } = require('./model/BranchItemVersion')
const { ChangesetItemVersion } = require('./model/ChangesetItemVersion')
const { BranchPageVersion } = require('./model/BranchPageVersion')
const { ShippingRuleMethod } = require('./model/ShippingRuleMethod')
const { AvailabilityGroupCustomer } = require('./model/AvailabilityGroupCustomer')
const { AvailabilityGroupCategory } = require('./model/AvailabilityGroupCategory')
const { AvailabilityGroupProduct } = require('./model/AvailabilityGroupProduct')
const { AvailabilityGroupBusinessAccount } = require('./model/AvailabilityGroupBusinessAccount')
const { BusinessAccountCustomer } = require('./model/BusinessAccountCustomer')
const { ChildCategory } = require('./model/ChildCategory')
const { OrderNote } = require('./model/OrderNote')
const { Subscription } = require('./model/Subscription')
const { CategoryProduct } = require('./model/CategoryProduct')
const { AttributeTemplateProduct } = require('./model/AttributeTemplateProduct')
const { CouponPriceGroup } = require('./model/CouponPriceGroup')
const { CouponCustomer } = require('./model/CouponCustomer')
const { OrderPaymentCard } = require('./model/OrderPaymentCard')
const { PriceGroupCustomer } = require('./model/PriceGroupCustomer')
const { PriceGroupProduct } = require('./model/PriceGroupProduct')
const { PriceGroupCategory } = require('./model/PriceGroupCategory')
const { PriceGroupBusinessAccount } = require('./model/PriceGroupBusinessAccount')
const { OrderItemSubscription } = require('./model/OrderItemSubscription')
const { CustomerPriceGroup } = require('./model/CustomerPriceGroup')
const { OrderTotalAndItem } = require('./model/OrderTotalAndItem')
const { VersionSettings } = require('./model/VersionSettings')
const { BranchCSSResourceVersion } = require('./model/BranchCSSResourceVersion')
const { ChangesetCSSResourceVersion } = require('./model/ChangesetCSSResourceVersion')
const { BranchCSSResource } = require('./model/BranchCSSResource')
const { ChangesetCSSResource } = require('./model/ChangesetCSSResource')
const { BranchJavaScriptResourceVersion } = require('./model/BranchJavaScriptResourceVersion')
const { ChangesetJavaScriptResourceVersion } = require('./model/ChangesetJavaScriptResourceVersion')
const { CSSResourceVersionAttribute } = require('./model/CSSResourceVersionAttribute')
const { CSSResourceAttribute } = require('./model/CSSResourceAttribute')
const { JavaScriptResourceVersionAttribute } = require('./model/JavaScriptResourceVersionAttribute')
const { JavaScriptResourceAttribute } = require('./model/JavaScriptResourceAttribute')
const { OrderPriceGroup } = require('./model/OrderPriceGroup')
const { BranchPropertyVersion } = require('./model/BranchPropertyVersion')
const { ChangesetPropertyVersion } = require('./model/ChangesetPropertyVersion')
const { CustomerSubscription } = require('./model/CustomerSubscription')
const { ProductAndSubscriptionTerm } = require('./model/ProductAndSubscriptionTerm')
const { AllOrderPayment } = require('./model/AllOrderPayment')
const { CouponBusinessAccount } = require('./model/CouponBusinessAccount')

/**
 * Prevent circular dependency/load errors by assigning members to the existing
 * export object instead of re-creating the export object.
 */

module.exports.AvailabilityGroup = AvailabilityGroup;
module.exports.AvailabilityGroupShippingMethod = AvailabilityGroupShippingMethod;
module.exports.BusinessAccount = BusinessAccount;
module.exports.Customer = Customer;
module.exports.Coupon = Coupon;
module.exports.CustomFieldValues = CustomFieldValues;
module.exports.Module = Module;
module.exports.Note = Note;
module.exports.PriceGroup = PriceGroup;
module.exports.DiscountModuleCapabilities = DiscountModuleCapabilities;
module.exports.Product = Product;
module.exports.RelatedProduct = RelatedProduct;
module.exports.ProductImageData = ProductImageData;
module.exports.ProductAttribute = ProductAttribute;
module.exports.ProductOption = ProductOption;
module.exports.ProductShippingMethod = ProductShippingMethod;
module.exports.ProductShippingRules = ProductShippingRules;
module.exports.Uri = Uri;
module.exports.UriDetail = UriDetail;
module.exports.ProductVariant = ProductVariant;
module.exports.ProductVariantAttribute = ProductVariantAttribute;
module.exports.ProductKit = ProductKit;
module.exports.ProductKitPart = ProductKitPart;
module.exports.KitPart = KitPart;
module.exports.Category = Category;
module.exports.Order = Order;
module.exports.OrderShipment = OrderShipment;
module.exports.OrderItemOption = OrderItemOption;
module.exports.OrderItem = OrderItem;
module.exports.OrderCharge = OrderCharge;
module.exports.OrderCoupon = OrderCoupon;
module.exports.OrderItemDiscount = OrderItemDiscount;
module.exports.OrderItemOptionDiscount = OrderItemOptionDiscount;
module.exports.OrderDiscountTotal = OrderDiscountTotal;
module.exports.OrderPayment = OrderPayment;
module.exports.BaseSubscription = BaseSubscription;
module.exports.ProductSubscriptionTerm = ProductSubscriptionTerm;
module.exports.OrderCustomField = OrderCustomField;
module.exports.CustomerPaymentCard = CustomerPaymentCard;
module.exports.OrderProductAttribute = OrderProductAttribute;
module.exports.OrderProduct = OrderProduct;
module.exports.ProductInventorySettings = ProductInventorySettings;
module.exports.ProductVariantPart = ProductVariantPart;
module.exports.ProductVariantDimension = ProductVariantDimension;
module.exports.SubscriptionOption = SubscriptionOption;
module.exports.ProductInventoryAdjustment = ProductInventoryAdjustment;
module.exports.OrderShipmentUpdate = OrderShipmentUpdate;
module.exports.ProductVariantLimit = ProductVariantLimit;
module.exports.ProductVariantExclusion = ProductVariantExclusion;
module.exports.ProvisionMessage = ProvisionMessage;
module.exports.CustomerAddress = CustomerAddress;
module.exports.OrderTotal = OrderTotal;
module.exports.OrderPaymentTotal = OrderPaymentTotal;
module.exports.PrintQueue = PrintQueue;
module.exports.PrintQueueJob = PrintQueueJob;
module.exports.PaymentMethod = PaymentMethod;
module.exports.PaymentCardType = PaymentCardType;
module.exports.OrderPaymentAuthorize = OrderPaymentAuthorize;
module.exports.Branch = Branch;
module.exports.BranchTemplateVersion = BranchTemplateVersion;
module.exports.VariableValue = VariableValue;
module.exports.Changeset = Changeset;
module.exports.TemplateChange = TemplateChange;
module.exports.ResourceGroupChange = ResourceGroupChange;
module.exports.CSSResourceChange = CSSResourceChange;
module.exports.JavaScriptResourceChange = JavaScriptResourceChange;
module.exports.ChangesetChange = ChangesetChange;
module.exports.PropertyChange = PropertyChange;
module.exports.ChangesetTemplateVersion = ChangesetTemplateVersion;
module.exports.CSSResourceVersion = CSSResourceVersion;
module.exports.CSSResource = CSSResource;
module.exports.Page = Page;
module.exports.JavaScriptResourceVersion = JavaScriptResourceVersion;
module.exports.JavaScriptResource = JavaScriptResource;
module.exports.ResourceAttribute = ResourceAttribute;
module.exports.CustomerCreditHistory = CustomerCreditHistory;
module.exports.OrderReturn = OrderReturn;
module.exports.ReceivedReturn = ReceivedReturn;
module.exports.PropertyVersion = PropertyVersion;
module.exports.ResourceGroup = ResourceGroup;
module.exports.MerchantVersion = MerchantVersion;
module.exports.Store = Store;
module.exports.CustomerAddressList = CustomerAddressList;
module.exports.VariantAttribute = VariantAttribute;
module.exports.VariantPart = VariantPart;
module.exports.ImageType = ImageType;
module.exports.PriceGroupExclusion = PriceGroupExclusion;
module.exports.AttributeTemplate = AttributeTemplate;
module.exports.AttributeTemplateAttribute = AttributeTemplateAttribute;
module.exports.AttributeTemplateOption = AttributeTemplateOption;
module.exports.OrderPart = OrderPart;
module.exports.ProductAttributeListAttribute = ProductAttributeListAttribute;
module.exports.ProductAttributeListOption = ProductAttributeListOption;
module.exports.ProductAttributeListTemplate = ProductAttributeListTemplate;
module.exports.ProductSubscriptionTermDate = ProductSubscriptionTermDate;
module.exports.SubscriptionAttribute = SubscriptionAttribute;
module.exports.SubscriptionShippingMethod = SubscriptionShippingMethod;
module.exports.SplitOrderItem = SplitOrderItem;
module.exports.ModuleChange = ModuleChange;
module.exports.CopyPageRule = CopyPageRule;
module.exports.CopyPageRulesSettings = CopyPageRulesSettings;
module.exports.CopyProductRule = CopyProductRule;
module.exports.CopyProductRulesModule = CopyProductRulesModule;
module.exports.CopyProductRulesCustomField = CopyProductRulesCustomField;
module.exports.ProductSubscriptionSettings = ProductSubscriptionSettings;
module.exports.BranchItemVersion = BranchItemVersion;
module.exports.ChangesetItemVersion = ChangesetItemVersion;
module.exports.BranchPageVersion = BranchPageVersion;
module.exports.ShippingRuleMethod = ShippingRuleMethod;
module.exports.AvailabilityGroupCustomer = AvailabilityGroupCustomer;
module.exports.AvailabilityGroupCategory = AvailabilityGroupCategory;
module.exports.AvailabilityGroupProduct = AvailabilityGroupProduct;
module.exports.AvailabilityGroupBusinessAccount = AvailabilityGroupBusinessAccount;
module.exports.BusinessAccountCustomer = BusinessAccountCustomer;
module.exports.ChildCategory = ChildCategory;
module.exports.OrderNote = OrderNote;
module.exports.Subscription = Subscription;
module.exports.CategoryProduct = CategoryProduct;
module.exports.AttributeTemplateProduct = AttributeTemplateProduct;
module.exports.CouponPriceGroup = CouponPriceGroup;
module.exports.CouponCustomer = CouponCustomer;
module.exports.OrderPaymentCard = OrderPaymentCard;
module.exports.PriceGroupCustomer = PriceGroupCustomer;
module.exports.PriceGroupProduct = PriceGroupProduct;
module.exports.PriceGroupCategory = PriceGroupCategory;
module.exports.PriceGroupBusinessAccount = PriceGroupBusinessAccount;
module.exports.OrderItemSubscription = OrderItemSubscription;
module.exports.CustomerPriceGroup = CustomerPriceGroup;
module.exports.OrderTotalAndItem = OrderTotalAndItem;
module.exports.VersionSettings = VersionSettings;
module.exports.BranchCSSResourceVersion = BranchCSSResourceVersion;
module.exports.ChangesetCSSResourceVersion = ChangesetCSSResourceVersion;
module.exports.BranchCSSResource = BranchCSSResource;
module.exports.ChangesetCSSResource = ChangesetCSSResource;
module.exports.BranchJavaScriptResourceVersion = BranchJavaScriptResourceVersion;
module.exports.ChangesetJavaScriptResourceVersion = ChangesetJavaScriptResourceVersion;
module.exports.CSSResourceVersionAttribute = CSSResourceVersionAttribute;
module.exports.CSSResourceAttribute = CSSResourceAttribute;
module.exports.JavaScriptResourceVersionAttribute = JavaScriptResourceVersionAttribute;
module.exports.JavaScriptResourceAttribute = JavaScriptResourceAttribute;
module.exports.OrderPriceGroup = OrderPriceGroup;
module.exports.BranchPropertyVersion = BranchPropertyVersion;
module.exports.ChangesetPropertyVersion = ChangesetPropertyVersion;
module.exports.CustomerSubscription = CustomerSubscription;
module.exports.ProductAndSubscriptionTerm = ProductAndSubscriptionTerm;
module.exports.AllOrderPayment = AllOrderPayment;
module.exports.CouponBusinessAccount = CouponBusinessAccount;
