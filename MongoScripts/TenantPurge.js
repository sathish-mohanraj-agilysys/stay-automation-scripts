
var tenantId = ["12345"];
var db = db.getSiblingDB('rGuestStay-aks-stay-qa-02');

var keyDefinition = [
    {
        "collection": [
            "FieldNameCustomization",
            "FolioCustomizationSettings",
            "GroupSharedReservation",
            "InventoryItemAllocation",
            "MaintenanceStaffMember",
            "PosPmsItems",
            "PosPmsItemsDataPorter",
            "ScheduledDepositDueSnapshot",
            "StaffMember",
            "Teams",
            "UpdatedRoomStatusesResponse",
            "accountHistories",
            "accountingDate",
            "accounts",
            "allocationEventStream",
            "allocations",
            "announcementCategories",
            "announcements",
            "anonymizeEvents",
            "arDefaults",
            "arDeposit",
            "ariChangeStatus",
            "asyncJobResponse",
            "authorizationHistory",
            "autoNightAudit",
            "autoRecurringChargeRules",
            "autoSettlementRule",
            "batchDistributions",
            "batchRooms",
            "batchStatus",
            "binSettings",
            "bookingChannelEventStream",
            "bookingChannels",
            "casinoTier",
            "columnCustomization",
            "comments",
            "commissionEventStream",
            "commissions",
            "compAccountingMappings",
            "compAuthorizers",
            "compDepartments",
            "compOfferDetails",
            "compOfferDetailsResponseDomain",
            "compOffers",
            "compReverseRedemptionResponseDomain",
            "componentBundles",
            "consentPolicyMappings",
            "copyReservationsJobs",
            "creditCardAuthRuleSettings",
            "creditTerms",
            "dailyUserOperations",
            "dataRetentionPolicyDetails",
            "digitalCheckIn",
            "digitalProtectedInventory",
            "documentDetails",
            "earlyCheckInLateCheckoutFees",
            "earlyDeparturePolicy",
            "emailPrintTracking",
            "eventTypes",
            "events",
            "failedAuth",
            "folioInvoices",
            "foreignExchangeDetails",
            "giftCardSettings",
            "groups",
            "guestConsentPolicyDetails",
            "guestMessage",
            "guestMessageEventStream",
            "guestSatisfactionCategories",
            "guestSatisfactionEntries",
            "guestServiceRequests",
            "guestServiceRequestsCounter",
            "housekeepingServiceRequests",
            "httpCache",
            "igTransaction",
            "importEntries",
            "importEntryFileDomain",
            "importExport",
            "invoiceEventStream",
            "invoices",
            "jobs",
            "lastRoomValues",
            "ledgerBalancesUpdates",
            "ledgerSettings",
            "ledgerTransactionUpdates",
            "ledgerTransactions",
            "ledgerTransactionsFlags",
            "linkedProfileRetentionDetails",
            "linkedReservation",
            "lostAndFoundEventStream",
            "lostAndFoundItems",
            "lostAndFoundSettings",
            "loyaltyHKPatterns",
            "maintenanceServiceRequests",
            "maintenanceServiceRequestsCounter",
            "multipleReservationResponseDomain",
            "nextAccountNumbers",
            "noteOfTheDay",
            "offlineAuthInformation",
            "otaMetrics",
            "otaTransactionAttachments",
            "otaTransactions",
            "ownerTypeCategorization",
            "paymentGatewaySettings",
            "paymentInstrument",
            "paymentInstrumentReference",
            "pmsProperties",
            "posInterfaceSettings",
            "postPaymentResponse",
            "preferenceCategories",
            "preferences",
            "profileAnonymizeEntities",
            "profileEventStream",
            "profileOptions",
            "profileSettings",
            "profiles",
            "propertyRateYield",
            "propertyRates",
            "queueRoomDashboardDomain",
            "queueRoomPriorityLookUpDomain",
            "queueRoomSettings",
            "rateAllocationGroup",
            "rateAllocationGroupDetails",
            "rateCalendar",
            "rateChangeHistory",
            "rateFactor",
            "rateOverrides",
            "ratePlan",
            "rateStrategy",
            "ratesConfig",
            "reasons",
            "recurringCharge",
            "relayMessages",
            "reportGroups",
            "reports",
            "reservationDailySnapshot",
            "reservationEventStream",
            "reservationHousekeepingHistory",
            "reservationInternal",
            "resourceAssignmentPlans",
            "roomTypeChangeTracker",
            "roomUpgradeConfig",
            "rooms",
            "routingRuleTemplates",
            "scmTransactions",
            "servicePatternInternal",
            "serviceRequestConfig",
            "settlementHistories",
            "sharedReservations",
            "smsSettings",
            "statementHistories",
            "taxSummaryConfig",
            "tenantDefaultSettings",
            "tokens",
            "transportInfo",
            "travelLocation",
            "travelType",
            "unappliedPaymentHistories",
            "vehicleDetails",
            "vehicleTypes",
            "verifiedIdentities",
            "verifiedIdentitiesEventStream",
            "waitlistInquiries",
            "waitlistInquiryConfig"
        ],
        "pattern": "tenantId"
    },
    {
        "collection": [
            "QueueRoomMutex",
            "QueueRoomPublisherMutex",
            "accountBalances",
            "accountRecurringChargesStatus",
            "accountingItems",
            "autoAssignAndConfirmJob",
            "autoNightAuditErrors",
            "autoRecurringChargeStatus",
            "batchDistributorMutex",
            "createInvoiceStatus",
            "dateRoll",
            "groupMutex",
            "guestHistoryMutex",
            "inventoryItemMutex",
            "invoiceNumbers",
            "invoiceReportStatus",
            "ledgerBalancesUpdateMutex",
            "pantryItems",
            "pmsMutex",
            "propertyRatesMutex",
            "relayMessageJob",
            "reservationCreationJob",
            "timedEntities",
            "transactionItemMutex"
        ],
        "pattern": "_id.tenantId"
    },
    {
        "collection": [
            "accountBalances"
        ],
        "pattern": "value.balance.t"
    },
    {
        "collection": [
            "allocationEventStream"
        ],
        "pattern": "events.ident.tenantId"
    },
    {
        "collection": [
            "auditCommits"
        ],
        "pattern": "ei.ti"
    },
    {
        "collection": [
            "auditCommits"
        ],
        "pattern": "ei.et.t"
    },
    {
        "collection": [
            "auditCommits"
        ],
        "pattern": "c.t"
    },
    {
        "collection": [
            "auditEntities"
        ],
        "pattern": "_id.ti"
    },
    {
        "collection": [
            "auditEntities"
        ],
        "pattern": "_id.et.t"
    },
    {
        "collection": [
            "auditEntities"
        ],
        "pattern": "li.ti"
    },
    {
        "collection": [
            "auditEntities"
        ],
        "pattern": "li.et.t"
    },
    {
        "collection": [
            "batchDistributions",
            "relayMessages"
        ],
        "pattern": "request.tenantId"
    },
    {
        "collection": [
            "batchDistributions"
        ],
        "pattern": "request.account.tenantId"
    },
    {
        "collection": [
            "batchDistributions"
        ],
        "pattern": "data.tenantId"
    },
    {
        "collection": [
            "bookingChannelEventStream",
            "commissionEventStream",
            "verifiedIdentitiesEventStream"
        ],
        "pattern": "events.identifier.tenantId"
    },
    {
        "collection": [
            "config",
            "configEvents"
        ],
        "pattern": "path"
    },
    {
        "collection": [
            "configEvents"
        ],
        "pattern": "events.path"
    },
    {
        "collection": [
            "eonsActivity"
        ],
        "pattern": "entity.tenantId"
    },
    {
        "collection": [
            "guestMessageEventStream",
            "guestServiceRequestEventStream",
            "houseKeepingServiceRequestEventStream",
            "invoiceEventStream",
            "lostAndFoundEventStream",
            "maintenanceServiceRequestEventStream",
            "profileEventStream",
            "reservationEventStream"
        ],
        "pattern": "events._id.tenantId"
    },
    {
        "collection": [
            "guestMessageEventStream"
        ],
        "pattern": "events.guestMessage.tenantId"
    },
    {
        "collection": [
            "guestServiceRequestEventStream",
            "houseKeepingServiceRequestEventStream",
            "maintenanceServiceRequestEventStream"
        ],
        "pattern": "events.tenantId"
    },
    {
        "collection": [
            "invoiceReportResult"
        ],
        "pattern": "owner.tenantId"
    },
    {
        "collection": [
            "invoiceReportResult"
        ],
        "pattern": "invoice.tenantId"
    },
    {
        "collection": [
            "invoices"
        ],
        "pattern": "balance.t"
    },
    {
        "collection": [
            "settlementHistories"
        ],
        "pattern": "autoSettlementRule.tenantId"
    }
];


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