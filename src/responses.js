/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./util');
const models = require('./models');
const { Response } = require('./abstract');
const { ListQueryResponse } = require('./listquery');
const { MultiCallResponse } = require('./multicall');
const { AvailabilityGroupBusinessAccountUpdateAssigned } = require('./response/AvailabilityGroupBusinessAccountUpdateAssigned');
const { AvailabilityGroupCustomerUpdateAssigned } = require('./response/AvailabilityGroupCustomerUpdateAssigned');
const { AvailabilityGroupListLoadQuery } = require('./response/AvailabilityGroupListLoadQuery');
const { AvailabilityGroupPaymentMethodUpdateAssigned } = require('./response/AvailabilityGroupPaymentMethodUpdateAssigned');
const { AvailabilityGroupProductUpdateAssigned } = require('./response/AvailabilityGroupProductUpdateAssigned');
const { AvailabilityGroupShippingMethodUpdateAssigned } = require('./response/AvailabilityGroupShippingMethodUpdateAssigned');
const { CategoryListLoadParent } = require('./response/CategoryListLoadParent');
const { CategoryListLoadQuery } = require('./response/CategoryListLoadQuery');
const { CategoryProductUpdateAssigned } = require('./response/CategoryProductUpdateAssigned');
const { CategoryInsert } = require('./response/CategoryInsert');
const { CategoryDelete } = require('./response/CategoryDelete');
const { CategoryUpdate } = require('./response/CategoryUpdate');
const { CouponListDelete } = require('./response/CouponListDelete');
const { CouponListLoadQuery } = require('./response/CouponListLoadQuery');
const { CouponPriceGroupUpdateAssigned } = require('./response/CouponPriceGroupUpdateAssigned');
const { CouponInsert } = require('./response/CouponInsert');
const { CouponUpdate } = require('./response/CouponUpdate');
const { CustomerListLoadQuery } = require('./response/CustomerListLoadQuery');
const { CustomerDelete } = require('./response/CustomerDelete');
const { CustomerInsert } = require('./response/CustomerInsert');
const { CustomerUpdate } = require('./response/CustomerUpdate');
const { CustomerPaymentCardRegister } = require('./response/CustomerPaymentCardRegister');
const { Module } = require('./response/Module');
const { NoteListLoadQuery } = require('./response/NoteListLoadQuery');
const { NoteDelete } = require('./response/NoteDelete');
const { NoteInsert } = require('./response/NoteInsert');
const { NoteUpdate } = require('./response/NoteUpdate');
const { OrderCustomFieldListLoad } = require('./response/OrderCustomFieldListLoad');
const { OrderCustomFieldsUpdate } = require('./response/OrderCustomFieldsUpdate');
const { OrderItemListBackOrder } = require('./response/OrderItemListBackOrder');
const { OrderItemListCancel } = require('./response/OrderItemListCancel');
const { OrderItemListCreateShipment } = require('./response/OrderItemListCreateShipment');
const { OrderItemListDelete } = require('./response/OrderItemListDelete');
const { OrderItemAdd } = require('./response/OrderItemAdd');
const { OrderItemUpdate } = require('./response/OrderItemUpdate');
const { OrderListLoadQuery } = require('./response/OrderListLoadQuery');
const { OrderPaymentCapture } = require('./response/OrderPaymentCapture');
const { OrderPaymentRefund } = require('./response/OrderPaymentRefund');
const { OrderPaymentVoid } = require('./response/OrderPaymentVoid');
const { OrderShipmentListUpdate } = require('./response/OrderShipmentListUpdate');
const { OrderCreate } = require('./response/OrderCreate');
const { OrderDelete } = require('./response/OrderDelete');
const { OrderUpdateCustomerInformation } = require('./response/OrderUpdateCustomerInformation');
const { PriceGroupCustomerUpdateAssigned } = require('./response/PriceGroupCustomerUpdateAssigned');
const { PriceGroupListLoadQuery } = require('./response/PriceGroupListLoadQuery');
const { PriceGroupProductUpdateAssigned } = require('./response/PriceGroupProductUpdateAssigned');
const { ProductImageAdd } = require('./response/ProductImageAdd');
const { ProductImageDelete } = require('./response/ProductImageDelete');
const { ProductListAdjustInventory } = require('./response/ProductListAdjustInventory');
const { ProductListLoadQuery } = require('./response/ProductListLoadQuery');
const { ProductVariantListLoadProduct } = require('./response/ProductVariantListLoadProduct');
const { ProductInsert } = require('./response/ProductInsert');
const { ProductDelete } = require('./response/ProductDelete');
const { ProductUpdate } = require('./response/ProductUpdate');
const { ProvisionDomain } = require('./response/ProvisionDomain');
const { ProvisionStore } = require('./response/ProvisionStore');
const { CustomerAddressListLoadQuery } = require('./response/CustomerAddressListLoadQuery');
const { PrintQueueListLoadQuery } = require('./response/PrintQueueListLoadQuery');
const { PrintQueueJobListLoadQuery } = require('./response/PrintQueueJobListLoadQuery');
const { PrintQueueJobDelete } = require('./response/PrintQueueJobDelete');
const { PrintQueueJobInsert } = require('./response/PrintQueueJobInsert');
const { PrintQueueJobStatus } = require('./response/PrintQueueJobStatus');
const { PaymentMethodListLoad } = require('./response/PaymentMethodListLoad');
const { OrderCreateFromOrder } = require('./response/OrderCreateFromOrder');
const { OrderAuthorize } = require('./response/OrderAuthorize');
const { CustomerPaymentCardListLoadQuery } = require('./response/CustomerPaymentCardListLoadQuery');
const { BranchCopy } = require('./response/BranchCopy');
const { BranchCreate } = require('./response/BranchCreate');
const { BranchDelete } = require('./response/BranchDelete');
const { ChangesetCreate } = require('./response/ChangesetCreate');
const { ChangesetListMerge } = require('./response/ChangesetListMerge');
const { ChangesetChangeListLoadQuery } = require('./response/ChangesetChangeListLoadQuery');
const { BranchListLoadQuery } = require('./response/BranchListLoadQuery');
const { BranchTemplateVersionListLoadQuery } = require('./response/BranchTemplateVersionListLoadQuery');
const { BranchCSSResourceVersionListLoadQuery } = require('./response/BranchCSSResourceVersionListLoadQuery');
const { BranchJavaScriptResourceVersionListLoadQuery } = require('./response/BranchJavaScriptResourceVersionListLoadQuery');
const { ChangesetListLoadQuery } = require('./response/ChangesetListLoadQuery');
const { ChangesetTemplateVersionListLoadQuery } = require('./response/ChangesetTemplateVersionListLoadQuery');
const { ChangesetCSSResourceVersionListLoadQuery } = require('./response/ChangesetCSSResourceVersionListLoadQuery');
const { ChangesetJavaScriptResourceVersionListLoadQuery } = require('./response/ChangesetJavaScriptResourceVersionListLoadQuery');
const { CustomerCreditHistoryListLoadQuery } = require('./response/CustomerCreditHistoryListLoadQuery');
const { CustomerCreditHistoryInsert } = require('./response/CustomerCreditHistoryInsert');
const { CustomerCreditHistoryDelete } = require('./response/CustomerCreditHistoryDelete');
const { OrderCouponUpdateAssigned } = require('./response/OrderCouponUpdateAssigned');
const { OrderPriceGroupUpdateAssigned } = require('./response/OrderPriceGroupUpdateAssigned');
const { OrderItemListCreateReturn } = require('./response/OrderItemListCreateReturn');
const { OrderReturnListReceived } = require('./response/OrderReturnListReceived');
const { BranchPropertyVersionListLoadQuery } = require('./response/BranchPropertyVersionListLoadQuery');
const { ChangesetPropertyVersionListLoadQuery } = require('./response/ChangesetPropertyVersionListLoadQuery');
const { ResourceGroupListLoadQuery } = require('./response/ResourceGroupListLoadQuery');
const { BranchListDelete } = require('./response/BranchListDelete');
const { MivaMerchantVersion } = require('./response/MivaMerchantVersion');
const { AttributeLoadCode } = require('./response/AttributeLoadCode');
const { AttributeInsert } = require('./response/AttributeInsert');
const { AttributeUpdate } = require('./response/AttributeUpdate');
const { AttributeDelete } = require('./response/AttributeDelete');
const { OptionListLoadAttribute } = require('./response/OptionListLoadAttribute');
const { OptionDelete } = require('./response/OptionDelete');
const { OptionInsert } = require('./response/OptionInsert');
const { OptionUpdate } = require('./response/OptionUpdate');
const { OptionLoadCode } = require('./response/OptionLoadCode');
const { OptionSetDefault } = require('./response/OptionSetDefault');
const { AttributeAndOptionListLoadProduct } = require('./response/AttributeAndOptionListLoadProduct');
const { OrderShipmentListLoadQuery } = require('./response/OrderShipmentListLoadQuery');
const { OrderItemSplit } = require('./response/OrderItemSplit');
const { OrderItemListRemoveFromShipment } = require('./response/OrderItemListRemoveFromShipment');
const { CustomerAddressInsert } = require('./response/CustomerAddressInsert');
const { CustomerAddressUpdate } = require('./response/CustomerAddressUpdate');
const { CustomerAddressDelete } = require('./response/CustomerAddressDelete');
const { CustomerAddressListDelete } = require('./response/CustomerAddressListDelete');
const { CustomerAddressUpdateResidential } = require('./response/CustomerAddressUpdateResidential');
const { URIListLoadQuery } = require('./response/URIListLoadQuery');
const { URIInsert } = require('./response/URIInsert');
const { ProductURIInsert } = require('./response/ProductURIInsert');
const { CategoryURIInsert } = require('./response/CategoryURIInsert');
const { PageURIInsert } = require('./response/PageURIInsert');
const { FeedURIInsert } = require('./response/FeedURIInsert');
const { URIUpdate } = require('./response/URIUpdate');
const { ProductURIUpdate } = require('./response/ProductURIUpdate');
const { CategoryURIUpdate } = require('./response/CategoryURIUpdate');
const { PageURIUpdate } = require('./response/PageURIUpdate');
const { FeedURIUpdate } = require('./response/FeedURIUpdate');
const { URIDelete } = require('./response/URIDelete');
const { ProductURIListLoadQuery } = require('./response/ProductURIListLoadQuery');
const { CategoryURIListLoadQuery } = require('./response/CategoryURIListLoadQuery');
const { PageURIListLoadQuery } = require('./response/PageURIListLoadQuery');
const { FeedURIListLoadQuery } = require('./response/FeedURIListLoadQuery');
const { ProductURIListDelete } = require('./response/ProductURIListDelete');
const { PageURIListDelete } = require('./response/PageURIListDelete');
const { CategoryURIListDelete } = require('./response/CategoryURIListDelete');
const { FeedURIListDelete } = require('./response/FeedURIListDelete');
const { URIListDelete } = require('./response/URIListDelete');
const { PageURIRedirect } = require('./response/PageURIRedirect');
const { ProductURIRedirect } = require('./response/ProductURIRedirect');
const { CategoryURIRedirect } = require('./response/CategoryURIRedirect');
const { AvailabilityGroupDelete } = require('./response/AvailabilityGroupDelete');
const { AvailabilityGroupInsert } = require('./response/AvailabilityGroupInsert');
const { AvailabilityGroupUpdate } = require('./response/AvailabilityGroupUpdate');
const { AvailabilityGroupCategoryUpdateAssigned } = require('./response/AvailabilityGroupCategoryUpdateAssigned');
const { AvailabilityGroupShippingMethodListLoadQuery } = require('./response/AvailabilityGroupShippingMethodListLoadQuery');
const { PriceGroupBusinessAccountUpdateAssigned } = require('./response/PriceGroupBusinessAccountUpdateAssigned');
const { PriceGroupCategoryUpdateAssigned } = require('./response/PriceGroupCategoryUpdateAssigned');
const { PriceGroupExcludedCategoryUpdateAssigned } = require('./response/PriceGroupExcludedCategoryUpdateAssigned');
const { PriceGroupExcludedProductUpdateAssigned } = require('./response/PriceGroupExcludedProductUpdateAssigned');
const { PriceGroupQualifyingProductUpdateAssigned } = require('./response/PriceGroupQualifyingProductUpdateAssigned');
const { PriceGroupDelete } = require('./response/PriceGroupDelete');
const { PriceGroupInsert } = require('./response/PriceGroupInsert');
const { PriceGroupUpdate } = require('./response/PriceGroupUpdate');
const { CouponCustomerUpdateAssigned } = require('./response/CouponCustomerUpdateAssigned');
const { BusinessAccountListLoadQuery } = require('./response/BusinessAccountListLoadQuery');
const { BusinessAccountInsert } = require('./response/BusinessAccountInsert');
const { BusinessAccountUpdate } = require('./response/BusinessAccountUpdate');
const { BusinessAccountListDelete } = require('./response/BusinessAccountListDelete');
const { BusinessAccountCustomerUpdateAssigned } = require('./response/BusinessAccountCustomerUpdateAssigned');
const { StoreListLoadQuery } = require('./response/StoreListLoadQuery');
const { StoreLoad } = require('./response/StoreLoad');
const { ProductVariantListLoadQuery } = require('./response/ProductVariantListLoadQuery');
const { ProductVariantInsert } = require('./response/ProductVariantInsert');
const { ProductVariantUpdate } = require('./response/ProductVariantUpdate');
const { ProductVariantGenerate } = require('./response/ProductVariantGenerate');
const { ProductKitListLoadQuery } = require('./response/ProductKitListLoadQuery');
const { ProductKitGenerateVariants } = require('./response/ProductKitGenerateVariants');
const { ProductKitUpdateParts } = require('./response/ProductKitUpdateParts');
const { ProductKitVariantCount } = require('./response/ProductKitVariantCount');
const { RelatedProductUpdateAssigned } = require('./response/RelatedProductUpdateAssigned');
const { InventoryProductSettingsUpdate } = require('./response/InventoryProductSettingsUpdate');
const { ProductVariantListDelete } = require('./response/ProductVariantListDelete');
const { ImageTypeListLoadQuery } = require('./response/ImageTypeListLoadQuery');
const { ProductImageUpdateType } = require('./response/ProductImageUpdateType');
const { AttributeTemplateListLoadQuery } = require('./response/AttributeTemplateListLoadQuery');
const { AttributeTemplateAttributeListLoadQuery } = require('./response/AttributeTemplateAttributeListLoadQuery');
const { AttributeTemplateOptionListLoadAttribute } = require('./response/AttributeTemplateOptionListLoadAttribute');
const { AttributeTemplateAttributeDelete } = require('./response/AttributeTemplateAttributeDelete');
const { AttributeTemplateAttributeInsert } = require('./response/AttributeTemplateAttributeInsert');
const { AttributeTemplateAttributeUpdate } = require('./response/AttributeTemplateAttributeUpdate');
const { AttributeTemplateOptionDelete } = require('./response/AttributeTemplateOptionDelete');
const { AttributeTemplateOptionInsert } = require('./response/AttributeTemplateOptionInsert');
const { AttributeTemplateOptionUpdate } = require('./response/AttributeTemplateOptionUpdate');
const { AttributeTemplateInsert } = require('./response/AttributeTemplateInsert');
const { AttributeTemplateUpdate } = require('./response/AttributeTemplateUpdate');
const { AttributeTemplateDelete } = require('./response/AttributeTemplateDelete');
const { AttributeTemplateOptionSetDefault } = require('./response/AttributeTemplateOptionSetDefault');
const { AttributeTemplateProductUpdateAssigned } = require('./response/AttributeTemplateProductUpdateAssigned');
const { BranchSetPrimary } = require('./response/BranchSetPrimary');
const { BranchUpdate } = require('./response/BranchUpdate');
const { AttributeCopyTemplate } = require('./response/AttributeCopyTemplate');
const { AttributeCopyLinkedTemplate } = require('./response/AttributeCopyLinkedTemplate');
const { ProductAttributeAndOptionListLoadQuery } = require('./response/ProductAttributeAndOptionListLoadQuery');
const { SubscriptionListLoadQuery } = require('./response/SubscriptionListLoadQuery');
const { ProductSubscriptionTermListLoadQuery } = require('./response/ProductSubscriptionTermListLoadQuery');
const { SubscriptionShippingMethodListLoadQuery } = require('./response/SubscriptionShippingMethodListLoadQuery');
const { SubscriptionInsert } = require('./response/SubscriptionInsert');
const { SubscriptionUpdate } = require('./response/SubscriptionUpdate');
const { SubscriptionListDelete } = require('./response/SubscriptionListDelete');
const { SubscriptionAndOrderItemAdd } = require('./response/SubscriptionAndOrderItemAdd');
const { SubscriptionAndOrderItemUpdate } = require('./response/SubscriptionAndOrderItemUpdate');
const { CSSResourceInsert } = require('./response/CSSResourceInsert');
const { CSSResourceUpdate } = require('./response/CSSResourceUpdate');
const { CSSResourceDelete } = require('./response/CSSResourceDelete');
const { JavaScriptResourceInsert } = require('./response/JavaScriptResourceInsert');
const { JavaScriptResourceUpdate } = require('./response/JavaScriptResourceUpdate');
const { JavaScriptResourceDelete } = require('./response/JavaScriptResourceDelete');
const { PageInsert } = require('./response/PageInsert');
const { PageUpdate } = require('./response/PageUpdate');
const { PageDelete } = require('./response/PageDelete');
const { PageCopy } = require('./response/PageCopy');
const { CategoryProductListLoadQuery } = require('./response/CategoryProductListLoadQuery');
const { CouponPriceGroupListLoadQuery } = require('./response/CouponPriceGroupListLoadQuery');
const { PriceGroupCustomerListLoadQuery } = require('./response/PriceGroupCustomerListLoadQuery');
const { PriceGroupProductListLoadQuery } = require('./response/PriceGroupProductListLoadQuery');
const { CustomerPriceGroupListLoadQuery } = require('./response/CustomerPriceGroupListLoadQuery');
const { OrderPriceGroupListLoadQuery } = require('./response/OrderPriceGroupListLoadQuery');
const { OrderCouponListLoadQuery } = require('./response/OrderCouponListLoadQuery');
const { ChildCategoryListLoadQuery } = require('./response/ChildCategoryListLoadQuery');
const { AvailabilityGroupCustomerListLoadQuery } = require('./response/AvailabilityGroupCustomerListLoadQuery');
const { AvailabilityGroupProductListLoadQuery } = require('./response/AvailabilityGroupProductListLoadQuery');
const { AvailabilityGroupCategoryListLoadQuery } = require('./response/AvailabilityGroupCategoryListLoadQuery');
const { AvailabilityGroupBusinessAccountListLoadQuery } = require('./response/AvailabilityGroupBusinessAccountListLoadQuery');
const { PriceGroupBusinessAccountListLoadQuery } = require('./response/PriceGroupBusinessAccountListLoadQuery');
const { PriceGroupCategoryListLoadQuery } = require('./response/PriceGroupCategoryListLoadQuery');
const { PriceGroupExcludedCategoryListLoadQuery } = require('./response/PriceGroupExcludedCategoryListLoadQuery');
const { PriceGroupExcludedProductListLoadQuery } = require('./response/PriceGroupExcludedProductListLoadQuery');
const { PriceGroupQualifyingProductListLoadQuery } = require('./response/PriceGroupQualifyingProductListLoadQuery');
const { CouponCustomerListLoadQuery } = require('./response/CouponCustomerListLoadQuery');
const { BusinessAccountCustomerListLoadQuery } = require('./response/BusinessAccountCustomerListLoadQuery');
const { ProductVariantGenerateDelimiter } = require('./response/ProductVariantGenerateDelimiter');
const { RelatedProductListLoadQuery } = require('./response/RelatedProductListLoadQuery');
const { AttributeTemplateProductListLoadQuery } = require('./response/AttributeTemplateProductListLoadQuery');
const { CustomerSubscriptionListLoadQuery } = require('./response/CustomerSubscriptionListLoadQuery');
const { ProductAndSubscriptionTermListLoadQuery } = require('./response/ProductAndSubscriptionTermListLoadQuery');
const { AllOrderPaymentListLoadQuery } = require('./response/AllOrderPaymentListLoadQuery');
const { RequestBuilder } = require('./response/RequestBuilder');
const { ListQueryRequestBuilder } = require('./response/RequestBuilder');

module.exports = {
  Response,
  ListQueryResponse,
  MultiCallResponse,
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
