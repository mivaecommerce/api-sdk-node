/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./util');
const models = require('./models');
const responses = require('./responses');
const { Request } = require('./abstract');
const { ListQueryRequest } = require('./listquery');
const { MultiCallRequest } = require('./multicall');
const { MultiCallOperation } = require('./multicall');

const { AvailabilityGroupBusinessAccountUpdateAssigned } = require('./request/AvailabilityGroupBusinessAccountUpdateAssigned');
const { AvailabilityGroupCustomerUpdateAssigned } = require('./request/AvailabilityGroupCustomerUpdateAssigned');
const { AvailabilityGroupListLoadQuery } = require('./request/AvailabilityGroupListLoadQuery');
const { AvailabilityGroupPaymentMethodUpdateAssigned } = require('./request/AvailabilityGroupPaymentMethodUpdateAssigned');
const { AvailabilityGroupProductUpdateAssigned } = require('./request/AvailabilityGroupProductUpdateAssigned');
const { AvailabilityGroupShippingMethodUpdateAssigned } = require('./request/AvailabilityGroupShippingMethodUpdateAssigned');
const { CategoryListLoadParent } = require('./request/CategoryListLoadParent');
const { CategoryListLoadQuery } = require('./request/CategoryListLoadQuery');
const { CategoryProductUpdateAssigned } = require('./request/CategoryProductUpdateAssigned');
const { CategoryInsert } = require('./request/CategoryInsert');
const { CategoryDelete } = require('./request/CategoryDelete');
const { CategoryUpdate } = require('./request/CategoryUpdate');
const { CouponListDelete } = require('./request/CouponListDelete');
const { CouponListLoadQuery } = require('./request/CouponListLoadQuery');
const { CouponPriceGroupUpdateAssigned } = require('./request/CouponPriceGroupUpdateAssigned');
const { CouponInsert } = require('./request/CouponInsert');
const { CouponUpdate } = require('./request/CouponUpdate');
const { CustomerListLoadQuery } = require('./request/CustomerListLoadQuery');
const { CustomerDelete } = require('./request/CustomerDelete');
const { CustomerInsert } = require('./request/CustomerInsert');
const { CustomerUpdate } = require('./request/CustomerUpdate');
const { CustomerPaymentCardRegister } = require('./request/CustomerPaymentCardRegister');
const { Module } = require('./request/Module');
const { NoteListLoadQuery } = require('./request/NoteListLoadQuery');
const { NoteDelete } = require('./request/NoteDelete');
const { NoteInsert } = require('./request/NoteInsert');
const { NoteUpdate } = require('./request/NoteUpdate');
const { OrderCustomFieldListLoad } = require('./request/OrderCustomFieldListLoad');
const { OrderCustomFieldsUpdate } = require('./request/OrderCustomFieldsUpdate');
const { OrderItemListBackOrder } = require('./request/OrderItemListBackOrder');
const { OrderItemListCancel } = require('./request/OrderItemListCancel');
const { OrderItemListCreateShipment } = require('./request/OrderItemListCreateShipment');
const { OrderItemListDelete } = require('./request/OrderItemListDelete');
const { OrderItemAdd } = require('./request/OrderItemAdd');
const { OrderItemUpdate } = require('./request/OrderItemUpdate');
const { OrderListLoadQuery } = require('./request/OrderListLoadQuery');
const { OrderPaymentCapture } = require('./request/OrderPaymentCapture');
const { OrderPaymentRefund } = require('./request/OrderPaymentRefund');
const { OrderPaymentVoid } = require('./request/OrderPaymentVoid');
const { OrderShipmentListUpdate } = require('./request/OrderShipmentListUpdate');
const { OrderCreate } = require('./request/OrderCreate');
const { OrderDelete } = require('./request/OrderDelete');
const { OrderUpdateCustomerInformation } = require('./request/OrderUpdateCustomerInformation');
const { PriceGroupCustomerUpdateAssigned } = require('./request/PriceGroupCustomerUpdateAssigned');
const { PriceGroupListLoadQuery } = require('./request/PriceGroupListLoadQuery');
const { PriceGroupProductUpdateAssigned } = require('./request/PriceGroupProductUpdateAssigned');
const { ProductImageAdd } = require('./request/ProductImageAdd');
const { ProductImageDelete } = require('./request/ProductImageDelete');
const { ProductListAdjustInventory } = require('./request/ProductListAdjustInventory');
const { ProductListLoadQuery } = require('./request/ProductListLoadQuery');
const { ProductVariantListLoadProduct } = require('./request/ProductVariantListLoadProduct');
const { ProductInsert } = require('./request/ProductInsert');
const { ProductDelete } = require('./request/ProductDelete');
const { ProductUpdate } = require('./request/ProductUpdate');
const { ProvisionDomain } = require('./request/ProvisionDomain');
const { ProvisionStore } = require('./request/ProvisionStore');
const { CustomerAddressListLoadQuery } = require('./request/CustomerAddressListLoadQuery');
const { PrintQueueListLoadQuery } = require('./request/PrintQueueListLoadQuery');
const { PrintQueueJobListLoadQuery } = require('./request/PrintQueueJobListLoadQuery');
const { PrintQueueJobDelete } = require('./request/PrintQueueJobDelete');
const { PrintQueueJobInsert } = require('./request/PrintQueueJobInsert');
const { PrintQueueJobStatus } = require('./request/PrintQueueJobStatus');
const { PaymentMethodListLoad } = require('./request/PaymentMethodListLoad');
const { OrderCreateFromOrder } = require('./request/OrderCreateFromOrder');
const { OrderAuthorize } = require('./request/OrderAuthorize');
const { CustomerPaymentCardListLoadQuery } = require('./request/CustomerPaymentCardListLoadQuery');
const { BranchCopy } = require('./request/BranchCopy');
const { BranchCreate } = require('./request/BranchCreate');
const { BranchDelete } = require('./request/BranchDelete');
const { ChangesetCreate } = require('./request/ChangesetCreate');
const { ChangesetListMerge } = require('./request/ChangesetListMerge');
const { ChangesetChangeListLoadQuery } = require('./request/ChangesetChangeListLoadQuery');
const { BranchListLoadQuery } = require('./request/BranchListLoadQuery');
const { BranchTemplateVersionListLoadQuery } = require('./request/BranchTemplateVersionListLoadQuery');
const { BranchCSSResourceVersionListLoadQuery } = require('./request/BranchCSSResourceVersionListLoadQuery');
const { BranchJavaScriptResourceVersionListLoadQuery } = require('./request/BranchJavaScriptResourceVersionListLoadQuery');
const { ChangesetListLoadQuery } = require('./request/ChangesetListLoadQuery');
const { ChangesetTemplateVersionListLoadQuery } = require('./request/ChangesetTemplateVersionListLoadQuery');
const { ChangesetCSSResourceVersionListLoadQuery } = require('./request/ChangesetCSSResourceVersionListLoadQuery');
const { ChangesetJavaScriptResourceVersionListLoadQuery } = require('./request/ChangesetJavaScriptResourceVersionListLoadQuery');
const { CustomerCreditHistoryListLoadQuery } = require('./request/CustomerCreditHistoryListLoadQuery');
const { CustomerCreditHistoryInsert } = require('./request/CustomerCreditHistoryInsert');
const { CustomerCreditHistoryDelete } = require('./request/CustomerCreditHistoryDelete');
const { OrderCouponUpdateAssigned } = require('./request/OrderCouponUpdateAssigned');
const { OrderPriceGroupUpdateAssigned } = require('./request/OrderPriceGroupUpdateAssigned');
const { OrderItemListCreateReturn } = require('./request/OrderItemListCreateReturn');
const { OrderReturnListReceived } = require('./request/OrderReturnListReceived');
const { BranchPropertyVersionListLoadQuery } = require('./request/BranchPropertyVersionListLoadQuery');
const { ChangesetPropertyVersionListLoadQuery } = require('./request/ChangesetPropertyVersionListLoadQuery');
const { ResourceGroupListLoadQuery } = require('./request/ResourceGroupListLoadQuery');
const { BranchListDelete } = require('./request/BranchListDelete');
const { MivaMerchantVersion } = require('./request/MivaMerchantVersion');
const { AttributeLoadCode } = require('./request/AttributeLoadCode');
const { AttributeInsert } = require('./request/AttributeInsert');
const { AttributeUpdate } = require('./request/AttributeUpdate');
const { AttributeDelete } = require('./request/AttributeDelete');
const { OptionListLoadAttribute } = require('./request/OptionListLoadAttribute');
const { OptionDelete } = require('./request/OptionDelete');
const { OptionInsert } = require('./request/OptionInsert');
const { OptionUpdate } = require('./request/OptionUpdate');
const { OptionLoadCode } = require('./request/OptionLoadCode');
const { OptionSetDefault } = require('./request/OptionSetDefault');
const { AttributeAndOptionListLoadProduct } = require('./request/AttributeAndOptionListLoadProduct');
const { OrderShipmentListLoadQuery } = require('./request/OrderShipmentListLoadQuery');
const { OrderItemSplit } = require('./request/OrderItemSplit');
const { OrderItemListRemoveFromShipment } = require('./request/OrderItemListRemoveFromShipment');
const { CustomerAddressInsert } = require('./request/CustomerAddressInsert');
const { CustomerAddressUpdate } = require('./request/CustomerAddressUpdate');
const { CustomerAddressDelete } = require('./request/CustomerAddressDelete');
const { CustomerAddressListDelete } = require('./request/CustomerAddressListDelete');
const { CustomerAddressUpdateResidential } = require('./request/CustomerAddressUpdateResidential');
const { URIListLoadQuery } = require('./request/URIListLoadQuery');
const { URIInsert } = require('./request/URIInsert');
const { ProductURIInsert } = require('./request/ProductURIInsert');
const { CategoryURIInsert } = require('./request/CategoryURIInsert');
const { PageURIInsert } = require('./request/PageURIInsert');
const { FeedURIInsert } = require('./request/FeedURIInsert');
const { URIUpdate } = require('./request/URIUpdate');
const { ProductURIUpdate } = require('./request/ProductURIUpdate');
const { CategoryURIUpdate } = require('./request/CategoryURIUpdate');
const { PageURIUpdate } = require('./request/PageURIUpdate');
const { FeedURIUpdate } = require('./request/FeedURIUpdate');
const { URIDelete } = require('./request/URIDelete');
const { ProductURIListLoadQuery } = require('./request/ProductURIListLoadQuery');
const { CategoryURIListLoadQuery } = require('./request/CategoryURIListLoadQuery');
const { PageURIListLoadQuery } = require('./request/PageURIListLoadQuery');
const { FeedURIListLoadQuery } = require('./request/FeedURIListLoadQuery');
const { ProductURIListDelete } = require('./request/ProductURIListDelete');
const { PageURIListDelete } = require('./request/PageURIListDelete');
const { CategoryURIListDelete } = require('./request/CategoryURIListDelete');
const { FeedURIListDelete } = require('./request/FeedURIListDelete');
const { URIListDelete } = require('./request/URIListDelete');
const { PageURIRedirect } = require('./request/PageURIRedirect');
const { ProductURIRedirect } = require('./request/ProductURIRedirect');
const { CategoryURIRedirect } = require('./request/CategoryURIRedirect');
const { AvailabilityGroupDelete } = require('./request/AvailabilityGroupDelete');
const { AvailabilityGroupInsert } = require('./request/AvailabilityGroupInsert');
const { AvailabilityGroupUpdate } = require('./request/AvailabilityGroupUpdate');
const { AvailabilityGroupCategoryUpdateAssigned } = require('./request/AvailabilityGroupCategoryUpdateAssigned');
const { AvailabilityGroupShippingMethodListLoadQuery } = require('./request/AvailabilityGroupShippingMethodListLoadQuery');
const { PriceGroupBusinessAccountUpdateAssigned } = require('./request/PriceGroupBusinessAccountUpdateAssigned');
const { PriceGroupCategoryUpdateAssigned } = require('./request/PriceGroupCategoryUpdateAssigned');
const { PriceGroupExcludedCategoryUpdateAssigned } = require('./request/PriceGroupExcludedCategoryUpdateAssigned');
const { PriceGroupExcludedProductUpdateAssigned } = require('./request/PriceGroupExcludedProductUpdateAssigned');
const { PriceGroupQualifyingProductUpdateAssigned } = require('./request/PriceGroupQualifyingProductUpdateAssigned');
const { PriceGroupDelete } = require('./request/PriceGroupDelete');
const { PriceGroupInsert } = require('./request/PriceGroupInsert');
const { PriceGroupUpdate } = require('./request/PriceGroupUpdate');
const { CouponCustomerUpdateAssigned } = require('./request/CouponCustomerUpdateAssigned');
const { BusinessAccountListLoadQuery } = require('./request/BusinessAccountListLoadQuery');
const { BusinessAccountInsert } = require('./request/BusinessAccountInsert');
const { BusinessAccountUpdate } = require('./request/BusinessAccountUpdate');
const { BusinessAccountListDelete } = require('./request/BusinessAccountListDelete');
const { BusinessAccountCustomerUpdateAssigned } = require('./request/BusinessAccountCustomerUpdateAssigned');
const { StoreListLoadQuery } = require('./request/StoreListLoadQuery');
const { StoreLoad } = require('./request/StoreLoad');
const { ProductVariantListLoadQuery } = require('./request/ProductVariantListLoadQuery');
const { ProductVariantInsert } = require('./request/ProductVariantInsert');
const { ProductVariantUpdate } = require('./request/ProductVariantUpdate');
const { ProductVariantGenerate } = require('./request/ProductVariantGenerate');
const { ProductKitListLoadQuery } = require('./request/ProductKitListLoadQuery');
const { ProductKitGenerateVariants } = require('./request/ProductKitGenerateVariants');
const { ProductKitUpdateParts } = require('./request/ProductKitUpdateParts');
const { ProductKitVariantCount } = require('./request/ProductKitVariantCount');
const { RelatedProductUpdateAssigned } = require('./request/RelatedProductUpdateAssigned');
const { InventoryProductSettingsUpdate } = require('./request/InventoryProductSettingsUpdate');
const { ProductVariantListDelete } = require('./request/ProductVariantListDelete');
const { ImageTypeListLoadQuery } = require('./request/ImageTypeListLoadQuery');
const { ProductImageUpdateType } = require('./request/ProductImageUpdateType');
const { AttributeTemplateListLoadQuery } = require('./request/AttributeTemplateListLoadQuery');
const { AttributeTemplateAttributeListLoadQuery } = require('./request/AttributeTemplateAttributeListLoadQuery');
const { AttributeTemplateOptionListLoadAttribute } = require('./request/AttributeTemplateOptionListLoadAttribute');
const { AttributeTemplateAttributeDelete } = require('./request/AttributeTemplateAttributeDelete');
const { AttributeTemplateAttributeInsert } = require('./request/AttributeTemplateAttributeInsert');
const { AttributeTemplateAttributeUpdate } = require('./request/AttributeTemplateAttributeUpdate');
const { AttributeTemplateOptionDelete } = require('./request/AttributeTemplateOptionDelete');
const { AttributeTemplateOptionInsert } = require('./request/AttributeTemplateOptionInsert');
const { AttributeTemplateOptionUpdate } = require('./request/AttributeTemplateOptionUpdate');
const { AttributeTemplateInsert } = require('./request/AttributeTemplateInsert');
const { AttributeTemplateUpdate } = require('./request/AttributeTemplateUpdate');
const { AttributeTemplateDelete } = require('./request/AttributeTemplateDelete');
const { AttributeTemplateOptionSetDefault } = require('./request/AttributeTemplateOptionSetDefault');
const { AttributeTemplateProductUpdateAssigned } = require('./request/AttributeTemplateProductUpdateAssigned');
const { BranchSetPrimary } = require('./request/BranchSetPrimary');
const { BranchUpdate } = require('./request/BranchUpdate');
const { AttributeCopyTemplate } = require('./request/AttributeCopyTemplate');
const { AttributeCopyLinkedTemplate } = require('./request/AttributeCopyLinkedTemplate');
const { ProductAttributeAndOptionListLoadQuery } = require('./request/ProductAttributeAndOptionListLoadQuery');
const { SubscriptionListLoadQuery } = require('./request/SubscriptionListLoadQuery');
const { ProductSubscriptionTermListLoadQuery } = require('./request/ProductSubscriptionTermListLoadQuery');
const { SubscriptionShippingMethodListLoadQuery } = require('./request/SubscriptionShippingMethodListLoadQuery');
const { SubscriptionInsert } = require('./request/SubscriptionInsert');
const { SubscriptionUpdate } = require('./request/SubscriptionUpdate');
const { SubscriptionListDelete } = require('./request/SubscriptionListDelete');
const { SubscriptionAndOrderItemAdd } = require('./request/SubscriptionAndOrderItemAdd');
const { SubscriptionAndOrderItemUpdate } = require('./request/SubscriptionAndOrderItemUpdate');
const { CSSResourceInsert } = require('./request/CSSResourceInsert');
const { CSSResourceUpdate } = require('./request/CSSResourceUpdate');
const { CSSResourceDelete } = require('./request/CSSResourceDelete');
const { JavaScriptResourceInsert } = require('./request/JavaScriptResourceInsert');
const { JavaScriptResourceUpdate } = require('./request/JavaScriptResourceUpdate');
const { JavaScriptResourceDelete } = require('./request/JavaScriptResourceDelete');
const { PageInsert } = require('./request/PageInsert');
const { PageUpdate } = require('./request/PageUpdate');
const { PageDelete } = require('./request/PageDelete');
const { PageCopy } = require('./request/PageCopy');
const { CategoryProductListLoadQuery } = require('./request/CategoryProductListLoadQuery');
const { CouponPriceGroupListLoadQuery } = require('./request/CouponPriceGroupListLoadQuery');
const { PriceGroupCustomerListLoadQuery } = require('./request/PriceGroupCustomerListLoadQuery');
const { PriceGroupProductListLoadQuery } = require('./request/PriceGroupProductListLoadQuery');
const { CustomerPriceGroupListLoadQuery } = require('./request/CustomerPriceGroupListLoadQuery');
const { OrderPriceGroupListLoadQuery } = require('./request/OrderPriceGroupListLoadQuery');
const { OrderCouponListLoadQuery } = require('./request/OrderCouponListLoadQuery');
const { ChildCategoryListLoadQuery } = require('./request/ChildCategoryListLoadQuery');
const { AvailabilityGroupCustomerListLoadQuery } = require('./request/AvailabilityGroupCustomerListLoadQuery');
const { AvailabilityGroupProductListLoadQuery } = require('./request/AvailabilityGroupProductListLoadQuery');
const { AvailabilityGroupCategoryListLoadQuery } = require('./request/AvailabilityGroupCategoryListLoadQuery');
const { AvailabilityGroupBusinessAccountListLoadQuery } = require('./request/AvailabilityGroupBusinessAccountListLoadQuery');
const { PriceGroupBusinessAccountListLoadQuery } = require('./request/PriceGroupBusinessAccountListLoadQuery');
const { PriceGroupCategoryListLoadQuery } = require('./request/PriceGroupCategoryListLoadQuery');
const { PriceGroupExcludedCategoryListLoadQuery } = require('./request/PriceGroupExcludedCategoryListLoadQuery');
const { PriceGroupExcludedProductListLoadQuery } = require('./request/PriceGroupExcludedProductListLoadQuery');
const { PriceGroupQualifyingProductListLoadQuery } = require('./request/PriceGroupQualifyingProductListLoadQuery');
const { CouponCustomerListLoadQuery } = require('./request/CouponCustomerListLoadQuery');
const { BusinessAccountCustomerListLoadQuery } = require('./request/BusinessAccountCustomerListLoadQuery');
const { ProductVariantGenerateDelimiter } = require('./request/ProductVariantGenerateDelimiter');
const { RelatedProductListLoadQuery } = require('./request/RelatedProductListLoadQuery');
const { AttributeTemplateProductListLoadQuery } = require('./request/AttributeTemplateProductListLoadQuery');
const { CustomerSubscriptionListLoadQuery } = require('./request/CustomerSubscriptionListLoadQuery');
const { ProductAndSubscriptionTermListLoadQuery } = require('./request/ProductAndSubscriptionTermListLoadQuery');
const { AllOrderPaymentListLoadQuery } = require('./request/AllOrderPaymentListLoadQuery');
const { RequestBuilder } = require('./request/RequestBuilder');
const { ListQueryRequestBuilder } = require('./request/RequestBuilder');

module.exports = {
  Request,
  ListQueryRequest,
  MultiCallRequest,
  MultiCallOperation,
  RequestBuilder,
  ListQueryRequestBuilder,
  AvailabilityGroupBusinessAccountUpdateAssigned,
  AvailabilityGroupCustomerUpdateAssigned,
  AvailabilityGroupListLoadQuery,
  AvailabilityGroupPaymentMethodUpdateAssigned,
  AvailabilityGroupProductUpdateAssigned,
  AvailabilityGroupShippingMethodUpdateAssigned,
  CategoryListLoadParent,
  CategoryListLoadQuery,
  CategoryProductUpdateAssigned,
  CategoryInsert,
  CategoryDelete,
  CategoryUpdate,
  CouponListDelete,
  CouponListLoadQuery,
  CouponPriceGroupUpdateAssigned,
  CouponInsert,
  CouponUpdate,
  CustomerListLoadQuery,
  CustomerDelete,
  CustomerInsert,
  CustomerUpdate,
  CustomerPaymentCardRegister,
  Module,
  NoteListLoadQuery,
  NoteDelete,
  NoteInsert,
  NoteUpdate,
  OrderCustomFieldListLoad,
  OrderCustomFieldsUpdate,
  OrderItemListBackOrder,
  OrderItemListCancel,
  OrderItemListCreateShipment,
  OrderItemListDelete,
  OrderItemAdd,
  OrderItemUpdate,
  OrderListLoadQuery,
  OrderPaymentCapture,
  OrderPaymentRefund,
  OrderPaymentVoid,
  OrderShipmentListUpdate,
  OrderCreate,
  OrderDelete,
  OrderUpdateCustomerInformation,
  PriceGroupCustomerUpdateAssigned,
  PriceGroupListLoadQuery,
  PriceGroupProductUpdateAssigned,
  ProductImageAdd,
  ProductImageDelete,
  ProductListAdjustInventory,
  ProductListLoadQuery,
  ProductVariantListLoadProduct,
  ProductInsert,
  ProductDelete,
  ProductUpdate,
  ProvisionDomain,
  ProvisionStore,
  CustomerAddressListLoadQuery,
  PrintQueueListLoadQuery,
  PrintQueueJobListLoadQuery,
  PrintQueueJobDelete,
  PrintQueueJobInsert,
  PrintQueueJobStatus,
  PaymentMethodListLoad,
  OrderCreateFromOrder,
  OrderAuthorize,
  CustomerPaymentCardListLoadQuery,
  BranchCopy,
  BranchCreate,
  BranchDelete,
  ChangesetCreate,
  ChangesetListMerge,
  ChangesetChangeListLoadQuery,
  BranchListLoadQuery,
  BranchTemplateVersionListLoadQuery,
  BranchCSSResourceVersionListLoadQuery,
  BranchJavaScriptResourceVersionListLoadQuery,
  ChangesetListLoadQuery,
  ChangesetTemplateVersionListLoadQuery,
  ChangesetCSSResourceVersionListLoadQuery,
  ChangesetJavaScriptResourceVersionListLoadQuery,
  CustomerCreditHistoryListLoadQuery,
  CustomerCreditHistoryInsert,
  CustomerCreditHistoryDelete,
  OrderCouponUpdateAssigned,
  OrderPriceGroupUpdateAssigned,
  OrderItemListCreateReturn,
  OrderReturnListReceived,
  BranchPropertyVersionListLoadQuery,
  ChangesetPropertyVersionListLoadQuery,
  ResourceGroupListLoadQuery,
  BranchListDelete,
  MivaMerchantVersion,
  AttributeLoadCode,
  AttributeInsert,
  AttributeUpdate,
  AttributeDelete,
  OptionListLoadAttribute,
  OptionDelete,
  OptionInsert,
  OptionUpdate,
  OptionLoadCode,
  OptionSetDefault,
  AttributeAndOptionListLoadProduct,
  OrderShipmentListLoadQuery,
  OrderItemSplit,
  OrderItemListRemoveFromShipment,
  CustomerAddressInsert,
  CustomerAddressUpdate,
  CustomerAddressDelete,
  CustomerAddressListDelete,
  CustomerAddressUpdateResidential,
  URIListLoadQuery,
  URIInsert,
  ProductURIInsert,
  CategoryURIInsert,
  PageURIInsert,
  FeedURIInsert,
  URIUpdate,
  ProductURIUpdate,
  CategoryURIUpdate,
  PageURIUpdate,
  FeedURIUpdate,
  URIDelete,
  ProductURIListLoadQuery,
  CategoryURIListLoadQuery,
  PageURIListLoadQuery,
  FeedURIListLoadQuery,
  ProductURIListDelete,
  PageURIListDelete,
  CategoryURIListDelete,
  FeedURIListDelete,
  URIListDelete,
  PageURIRedirect,
  ProductURIRedirect,
  CategoryURIRedirect,
  AvailabilityGroupDelete,
  AvailabilityGroupInsert,
  AvailabilityGroupUpdate,
  AvailabilityGroupCategoryUpdateAssigned,
  AvailabilityGroupShippingMethodListLoadQuery,
  PriceGroupBusinessAccountUpdateAssigned,
  PriceGroupCategoryUpdateAssigned,
  PriceGroupExcludedCategoryUpdateAssigned,
  PriceGroupExcludedProductUpdateAssigned,
  PriceGroupQualifyingProductUpdateAssigned,
  PriceGroupDelete,
  PriceGroupInsert,
  PriceGroupUpdate,
  CouponCustomerUpdateAssigned,
  BusinessAccountListLoadQuery,
  BusinessAccountInsert,
  BusinessAccountUpdate,
  BusinessAccountListDelete,
  BusinessAccountCustomerUpdateAssigned,
  StoreListLoadQuery,
  StoreLoad,
  ProductVariantListLoadQuery,
  ProductVariantInsert,
  ProductVariantUpdate,
  ProductVariantGenerate,
  ProductKitListLoadQuery,
  ProductKitGenerateVariants,
  ProductKitUpdateParts,
  ProductKitVariantCount,
  RelatedProductUpdateAssigned,
  InventoryProductSettingsUpdate,
  ProductVariantListDelete,
  ImageTypeListLoadQuery,
  ProductImageUpdateType,
  AttributeTemplateListLoadQuery,
  AttributeTemplateAttributeListLoadQuery,
  AttributeTemplateOptionListLoadAttribute,
  AttributeTemplateAttributeDelete,
  AttributeTemplateAttributeInsert,
  AttributeTemplateAttributeUpdate,
  AttributeTemplateOptionDelete,
  AttributeTemplateOptionInsert,
  AttributeTemplateOptionUpdate,
  AttributeTemplateInsert,
  AttributeTemplateUpdate,
  AttributeTemplateDelete,
  AttributeTemplateOptionSetDefault,
  AttributeTemplateProductUpdateAssigned,
  BranchSetPrimary,
  BranchUpdate,
  AttributeCopyTemplate,
  AttributeCopyLinkedTemplate,
  ProductAttributeAndOptionListLoadQuery,
  SubscriptionListLoadQuery,
  ProductSubscriptionTermListLoadQuery,
  SubscriptionShippingMethodListLoadQuery,
  SubscriptionInsert,
  SubscriptionUpdate,
  SubscriptionListDelete,
  SubscriptionAndOrderItemAdd,
  SubscriptionAndOrderItemUpdate,
  CSSResourceInsert,
  CSSResourceUpdate,
  CSSResourceDelete,
  JavaScriptResourceInsert,
  JavaScriptResourceUpdate,
  JavaScriptResourceDelete,
  PageInsert,
  PageUpdate,
  PageDelete,
  PageCopy,
  CategoryProductListLoadQuery,
  CouponPriceGroupListLoadQuery,
  PriceGroupCustomerListLoadQuery,
  PriceGroupProductListLoadQuery,
  CustomerPriceGroupListLoadQuery,
  OrderPriceGroupListLoadQuery,
  OrderCouponListLoadQuery,
  ChildCategoryListLoadQuery,
  AvailabilityGroupCustomerListLoadQuery,
  AvailabilityGroupProductListLoadQuery,
  AvailabilityGroupCategoryListLoadQuery,
  AvailabilityGroupBusinessAccountListLoadQuery,
  PriceGroupBusinessAccountListLoadQuery,
  PriceGroupCategoryListLoadQuery,
  PriceGroupExcludedCategoryListLoadQuery,
  PriceGroupExcludedProductListLoadQuery,
  PriceGroupQualifyingProductListLoadQuery,
  CouponCustomerListLoadQuery,
  BusinessAccountCustomerListLoadQuery,
  ProductVariantGenerateDelimiter,
  RelatedProductListLoadQuery,
  AttributeTemplateProductListLoadQuery,
  CustomerSubscriptionListLoadQuery,
  ProductAndSubscriptionTermListLoadQuery,
  AllOrderPaymentListLoadQuery
};