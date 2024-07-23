tenantId = "264101";
propertyId = "QAINT1752103";
var db = db.getSiblingDB('rGuestStay');
var collectionNames = ["anonymizeEvents","businessContext","casinoPointIssuanceSettings","comments","consentPolicyMappings","dataRetentionPolicyDetails","featureToggles","gdprCommits","guestConsentPolicyDetails","guestStayHistory","invoices","linkedProfileRetentionDetails","payAgentEvents","paymentInstrument","paymentInstrumentReference","preferenceCategories","preferences","profileAnonymizeEntities","profileEventStream","profiles","profileSettings","startupKey","tenantDefaultSettings","userEventStream","verifiedIdentities","verifiedIdentitiesEventStream","roomUpgradeConfig","appliance"];
collectionNames.forEach(function(collname) {
print(collname+" : " + db[collname].updateMany({ "tenantId": tenantId },{$set:{"notWrittenInWarehouse": ISODate("2000-01-01T00:00:00.000Z")}}).matchedCount);})

var collectionNames = ["accountDisplaySettings","accountHistories","accountingDate","accounts","allocationEventStream","allocations","announcementCategories","announcements","appCuesConfig","appliance","arDeposit","authorizationHistory","batchDistributions","batchRooms","binSettings","bookingChannelEventStream","bookingChannels","casinoPointIssuanceSettings","casinoTier","commissionEventStream","commissions","compAccountingMappings","compAuthorizers","compDepartments","compOfferDetails","compOfferDetailsResponseDomain","compOffers","componentBundles","compReverseRedemptionResponseDomain","condoOwners","condoRooms","contents","copyReservationsJobs","couponSettings","creditCardAuthRuleSettings","customFields","customizableDashBoard","dailyUserOperations","departmentDetails","documentDetails","documentTypes","earlyCheckInLateCheckoutFees","earlyCheckoutFees","emailPrintTracking","events","eventTypes","failedAuth","fiscalYear","folioInvoices","giftCardSettings","groups","GroupSharedReservation","guestMessage","guestMessageEventStream","guestSatisfactionCategories","guestSatisfactionEntries","guestSatisfactionSettings","guestServiceRequests","guestServiceRequestsCounter","housekeepingServiceRequests","httpCache","importEntries","importEntryFileDomain","importExport","InventoryItemAllocation","invoiceEventStream","jobs","lastRoomValues","ledgerBalancesUpdates","ledgerSettings","ledgerTransactions","ledgerTransactionsFlags","LedgerTransactionUpdates","linkedReservation","losHKPattern","lostAndFoundEventStream","lostAndFoundItems","lostAndFoundSettings","lostBusinessTracking","loyaltyHKPatterns","maintenanceServiceRequests","maintenanceServiceRequestsCounter","nextAccountNumbers","offlineAuthInformation","otaManualSyncStatus","otaMetrics","otaOutboundEntity","otaReSyncStatus","payAgentTransactionEventStream","payAgentTransactions","paymentGatewaySettings","planAttributes","PosPmsItems","PosPmsItemsDataPorter","postPaymentResponse","profileOptions","propertyRates","propertyRateYield","propertySettings","rateAllocationGroup","rateAllocationGroupDetails","rateOverrides","recurringCharge","relayDeviceMapping","relayMessages","reportGroups","reports","reservationBookingNotice","reservationDailySnapshot","reservationEventStream","reservationInternal","roomMoveReasons","rooms","roomTypeChangeTracker","roomTypeConversionDetails","routingRuleTemplates","ScheduledDepositDueSnapshot","schedules","servicePatternInternal","serviceRequests","sharedReservations","smsSettings","statementHistories","taskDetails","taxGroups","taxSummaryConfig","tenantData","tokens","vehicleDetails","vehicleTypes","waitlistInquiries","waitlistInquiryConfig","accountReference","arDefaults","autoSettlementRule","batchStatus","creditTerms","digitalCheckIn","FieldNameCustomization","fieldSettings","FolioCustomizationSettings","groupReportFavouritesExecution","multipleReservationResponseDomain","otaTransactionRevisions","ownerTypeCategorization","PlayerRetailRatingDetails","postingRuleStatus","queueRoomDashboardDomain","queueRoomPriorityLookUpDomain","queueRoomSettings","rateCalendar","rateChangeHistory","rateFactor","ratePlan","ratesConfig","rateStrategy","reportFavourites","reportFavouritesGenerationInfo","reportFavouritesGroup","reservationHousekeepingHistory","resourceAssignmentPlans","settlementHistories","transportInfo","travelLocation","travelType","unappliedPaymentHistories","UpdatedRoomStatusesResponse"];
collectionNames.forEach(function(collname) {
print(collname+" : " + db[collname].updateMany({ "tenantId": tenantId, "propertyId": propertyId },{$set:{"notWrittenInWarehouse": ISODate("2000-01-01T00:00:00.000Z")}}).matchedCount);})

var collectionNames = ["MaintenanceStaffMember","StaffMember"];
collectionNames.forEach(function(collname) {
print(collname+" : " + db[collname].updateMany({ "tenantId": tenantId, "staffMemberPropertyAssignments.propertyId": propertyId },{$set:{"notWrittenInWarehouse": ISODate("2000-01-01T00:00:00.000Z")}}).matchedCount);})


var collectionNames = ["autoCollectDeposit","autoNightAudit","pmsProperties","transactionItemMutex"];
collectionNames.forEach(function(collname) {
print(collname+" : " + db[collname].updateMany({ "tenantId": tenantId, "_id": propertyId },{$set:{"notWrittenInWarehouse": ISODate("2000-01-01T00:00:00.000Z")}}).matchedCount);});


var collectionNames = ["adHocScheduledUserDetails","dateRoll","featureToggleMutex","homepagePreference"];
collectionNames.forEach(function(collname) {
print(collname+" : " + db[collname].updateMany({ "_id.tenantId": tenantId },{$set:{"notWrittenInWarehouse": ISODate("2000-01-01T00:00:00.000Z")}}).matchedCount);})

var collectionNames = ["accountBalances","accountDaterollStatus","accountingItems","accountRecurringChargesStatus","autoNightAuditErrors","autoRecurringChargeStatus","corruptedEntities","createInvoiceStatus","dateRoll","invoiceNumbers","invoiceReportStatus","ledgerBalancesUpdateMutex","pantryItems","roomTypeConversion","timedEntities","batchDistributorMutex","groupMutex","guestHistoryMutex","inventoryItemMutex","otaOutboundReSyncMutex","QueueRoomMutex","QueueRoomPublisherMutex"];
collectionNames.forEach(function(collname) {
print(collname+" : " + db[collname].updateMany({ "_id.tenantId": tenantId ,"_id.propertyId": propertyId },{$set:{"notWrittenInWarehouse": ISODate("2000-01-01T00:00:00.000Z")}}).matchedCount);})


var collectionNames = ["houseKeepingServiceRequestEventStream"];
collectionNames.forEach(function(collname) {
print(collname+" : " + db[collname].updateMany({ "events.tenantId": tenantId ,"events.propertyId": propertyId },{$set:{"notWrittenInWarehouse": ISODate("2000-01-01T00:00:00.000Z")}}).matchedCount);})


var collectionNames = ["guestServiceRequestEventStream"];
collectionNames.forEach(function(collname) {
print(collname+" : " + db[collname].updateMany({ "events.dataObject._id.tenantId": tenantId ,"events.dataObject._id.propertyId": propertyId },{$set:{"notWrittenInWarehouse": ISODate("2000-01-01T00:00:00.000Z")}}).matchedCount);})


var collectionNames = ["invoiceReportResult"];
collectionNames.forEach(function(collname) {
print(collname+" : " + db[collname].updateMany({ "invoice.tenantId": tenantId },{$set:{"notWrittenInWarehouse": ISODate("2000-01-01T00:00:00.000Z")}}).matchedCount);})


var collectionNames = ["config"];
collectionNames.forEach(function(collname) {
print(collname+" : " + db[collname].updateMany({"path":{$regex:tenantId}},{$set:{"notWrittenInWarehouse": ISODate("2000-01-01T00:00:00.000Z")}}).matchedCount);})


var collectionNames = ["configEvents"];
collectionNames.forEach(function(collname) {
print(collname+" : " + db[collname].updateMany({"path":{$regex:tenantId}},{$set:{"notWrittenInWarehouse": ISODate("2000-01-01T00:00:00.000Z")}}).matchedCount);})


var collectionNames = ["adHocReportAudit"];
collectionNames.forEach(function(collname) {
print(collname+" : " + db[collname].updateMany({ "ti": tenantId, "pi": propertyId },{$set:{"notWrittenInWarehouse": ISODate("2000-01-01T00:00:00.000Z")}}).matchedCount);})


var collectionNames = ["auditEntities"];
collectionNames.forEach(function(collname) {
print(collname+" : " + db[collname].updateMany({ "_id.ti": tenantId, "_id.pi": propertyId },{$set:{"notWrittenInWarehouse": ISODate("2000-01-01T00:00:00.000Z")}}).matchedCount);})