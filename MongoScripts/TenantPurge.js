
var tenantId = ["12345"];
var db = db.getSiblingDB('rGuestStay-aks-stay-qa-02');

var keyDefinition = [
    {
        collection: "accountDisplaySettings,accountHistories,accountingDate,accounts,allocationEventStream,allocations,announcementCategories,announcements,anonymizeEvents,appCuesConfig,arDeposit,authorizationHistory,autoCollectDeposit,autoNightAudit,autoRecurringChargeRules,batchDistributions,batchRooms,bookingChannelEventStream,bookingChannels,businessContext,casinoPointIssuanceSettings,casinoTier,comments,commissionEventStream,commissions,compAccountingMappings,compAuthorizers,compDepartments,compOfferDetails,compOfferDetailsResponseDomain,compOffers,componentBundles,compReverseRedemptionResponseDomain,condoOwners,condoRooms,consentPolicyMappings,contents,copyReservationsJobs,couponSettings,creditCardAuthRuleSettings,customFields,customizableDashBoard,dailyUserOperations,dataRetentionPolicyDetails,departmentDetails,documentDetails,emailPrintTracking,events,eventTypes,failedAuth,featureToggles,fiscalYear,gdprCommits,giftCardSettings,groups,guestConsentPolicyDetails,guestMessage,guestMessageEventStream,guestSatisfactionCategories,guestSatisfactionEntries,guestSatisfactionSettings,guestServiceRequests,guestServiceRequestsCounter,guestStayHistory,housekeepingServiceRequests,importEntries,importEntryFileDomain,importExport,InventoryItemAllocation,invoiceEventStream,invoices,jobs,lastRoomValues,ledgerBalancesUpdates,ledgerSettings,ledgerTransactions,ledgerTransactionsFlags,LedgerTransactionUpdates,linkedProfileRetentionDetails,linkedReservation,lostAndFoundEventStream,lostAndFoundItems,lostAndFoundSettings,lostBusinessTracking,loyaltyHKPatterns,maintenanceServiceRequests,maintenanceServiceRequestsCounter,MaintenanceStaffMember,nextAccountNumbers,offlineAuthInformation,otaManualSyncStatus,otaMetrics,otaReSyncStatus,payAgentEvents,payAgentTransactionEventStream,payAgentTransactions,paymentGatewaySettings,paymentInstrument,paymentInstrumentReference,planAttributes,PosPmsItems,PosPmsItemsDataPorter,postPaymentResponse,preferenceCategories,preferences,profileAnonymizeEntities,profileEventStream,profileOptions,profiles,profileSettings,propertyRates,propertyRateYield,propertySettings,rateAllocationGroup,rateAllocationGroupDetails,rateOverrides,recurringCharge,relayDeviceMapping,relayMessages,reportGroups,reports,reservationBookingNotice,reservationDailySnapshot,reservationEventStream,reservationInternal,roomMoveReasons,rooms,roomTypeChangeTracker,roomTypeConversionDetails,routingRuleTemplates,ScheduledDepositDueSnapshot,schedules,servicePatternInternal,serviceRequests,smsSettings,StaffMember,startupKey,statementHistories,taskDetails,taxGroups,taxSummaryConfig,tenantData,tenantDefaultSettings,tokens,transactionItemMutex,userEventStream,vehicleDetails,vehicleTypes,verifiedIdentities,verifiedIdentitiesEventStream,waitlistInquiries,waitlistInquiryConfig,accountReference,arDefaults,autoSettlementRule,batchStatus,creditTerms,digitalCheckIn,FieldNameCustomization,fieldSettings,FolioCustomizationSettings,groupReportFavouritesExecution,multipleReservationResponseDomain,otaTransactionRevisions,ownerTypeCategorization,PlayerRetailRatingDetails,postingRuleStatus,queueRoomDashboardDomain,queueRoomPriorityLookUpDomain,queueRoomSettings,rateCalendar,rateChangeHistory,rateFactor,ratePlan,ratesConfig,rateStrategy,reportFavourites,reportFavouritesGenerationInfo,reportFavouritesGroup,reservationHousekeepingHistory,resourceAssignmentPlans,roomUpgradeConfig,settlementHistories,transportInfo,travelLocation,travelType,unappliedPaymentHistories,UpdatedRoomStatusesResponse,appliance,binSettings,documentTypes,earlyCheckInLateCheckoutFees,earlyCheckoutFees,GroupSharedReservation,folioInvoices,httpCache,losHKPattern,sharedReservations,pmsProperties,otaOutboundEntity,adjustCharges,alertNotification,ariCache,ariChangeStatus,asyncJobResponse,autoCheckInManualStartStopDomain,AutoCheckoutSettings,checkoutScheduler,compRestrictions,digitalSettings,doNotMoveGuest,earlyDeparturePolicy,emailedReports,guestProfileReference,housekeepingBoards,igTransaction,noteOfTheDay,otaTransactionAttachments,otaTransactions,OwnersRevPar,posInterfaceSettings,queueColumnPreferenceConfig,reasons,reportsV1,reservationEventStreamRollback,reservationInternalRollback,routingTransferHistory,ruleTemplate,scmTransactions,secondaryWritesStatus,SelfCheckInCheckOutSetup,SelfCheckInCheckOutSetupImages,serviceRequestConfig,Teams,universalAlertFailedEvents,universalAlerts,universalAlertSetup,userPreferredColumns",
        pattern: "tenantId"
    },
    {
        collection: "transactionItemMutex,accountBalances,accountDaterollStatus,accountingItems,accountRecurringChargesStatus,adHocScheduledUserDetails,autoNightAuditErrors,autoRecurringChargeStatus,corruptedEntities,createInvoiceStatus,dateRoll,featureToggleMutex,homepagePreference,invoiceNumbers,invoiceReportStatus,ledgerBalancesUpdateMutex,pantryItems,roomTypeConversion,timedEntities,batchDistributorMutex,groupMutex,guestHistoryMutex,inventoryItemMutex,otaOutboundReSyncMutex,QueueRoomMutex,QueueRoomPublisherMutex,accountMutex,ariStatus,pmsMutex,propertyRatesMutex,relayMessageJob,reportFavouriteJobMutex,reservationCreationJob",
        pattern: "_id.tenantId"
    },
    {
        collection: "houseKeepingServiceRequestEventStream,maintenanceServiceRequestEventStream",
        pattern: "events.tenantId"
    },
    {
        collection: "guestServiceRequestEventStream",
        pattern: "events.dataObject._id.tenantId"
    },
    {
        collection: "invoiceReportResult",
        pattern: "invoice.tenantId"
    },
    {
        collection: "config",
        pattern: "path"
    },
    {
        collection: "configEvents",
        pattern: "events.path"
    },
    {
        collection: "adHocReportAudit",
        pattern: "ti"
    },
    {
        collection: "auditEntities",
        pattern: "_id.ti"
    },
    {
        collection: "auditCommits",
        pattern: "ei.ti"
    },
    {
        collection: "eonsActivity",
        pattern: "entity.ti"
    },
    {
        collection: "gdprSettings,warehouseUser",
        pattern: "_id"
    }
];
keyDefinition = keyDefinition.map(item => ({
    collection: item.collection.trim().split(","),
    pattern: item.pattern
}));

function deleteDocuments(collections, query) {
    collections.forEach(collection=>{
        var count = db[collection].deleteMany(query);
        print(collection + " : " + count.deletedCount);
    })
}


var patterns = keyDefinition.map(definition => {
    var query = {};
    query[definition.pattern] = { $in: tenantId };
    return query;
});

var query = { $or: patterns };

keyDefinition.forEach(definition => deleteDocuments(definition.collection, query));