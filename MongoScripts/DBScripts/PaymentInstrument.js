// Define the collection name
var collectionName = "paymentInstrument";
//tenant to update the details
var tenantId="294052";
// Define the operations
var operations = [
    {
        "condition": {
            "tenantId": tenantId,
            "gatewayType": "FREEDOMPAY",
            "cardIssuer": "Visa"
        },
        "update": {
            "token": "4761730A001AZ4VE4D68W7B30011",
            "tokenCreationDate": ISODate("2024-08-05T12:22:38.609+0000"),
            "tokenExpirationDate": ISODate("2024-12-31T23:59:59.999+0000"),
            "cardType": "NA",
            "prepaidCard": false,
            "expirationYearMonth": "202412",
            "accountNumberLast4": "0011",
            "correlationId": "56b1ef92a29f40bb1caa3b513437be737e87cf9625502e00c816fb0588329460"
        }
    },
    {
        "condition": {
            "tenantId": tenantId,
            "gatewayType": "FREEDOMPAY",
            "cardIssuer": "Mastercard"
        },
        "update": {
            "token": "5413330A0012G45MGF77W3C64111",
            "tokenCreationDate": ISODate("2024-08-05T06:25:56.681+0000"),
            "tokenExpirationDate": ISODate("2025-12-31T23:59:59.999+0000"),
            "cardType": "CREDIT",
            "prepaidCard": false,
            "expirationYearMonth": "202512",
            "accountNumberLast4": "4111"
        }
    },
    {
        "condition": {
            "tenantId": tenantId,
            "gatewayType": "FREEDOMPAY",
            "cardIssuer": "American Express"
        },
        "update": {
            "token": "3742450A0019KMWB2I4J4UJU1006",
            "tokenCreationDate": ISODate("2024-08-05T11:00:27.331+0000"),
            "tokenExpirationDate": ISODate("2024-12-31T23:59:59.999+0000"),
            "cardType": "CREDIT",
            "prepaidCard": false,
            "expirationYearMonth": "202412",
            "accountNumberLast4": "1006"
        }
    },
    {
        "condition": {
            "tenantId": tenantId,
            "gatewayType": "shift4",
            "cardIssuer": "Visa"
        },
        "update": {
            "token": "84421225980511190000000266",
            "tokenCreationDate": ISODate("2024-08-01T07:09:44.027+0000"),
            "tokenExpirationDate": ISODate("2026-08-01T07:11:04.574+0000"),
            "cardType": "credit",
            "prepaidCard": false,
            "transactionResponsesForSale": [
                {
                    "transactionId": "1061000003",
                    "transactionFollowOnData": "dmVyc2lvbg==$MS4w&SW52b2ljZQ==$MTA2MTAwMDAwMw==&VW5pcXVlSWQ=$ODQ0MjEyMjU5ODA1MTExOQ==&Q3VzdG9tZXJSZWZlcmVuY2U=$Q0cxMDAwMDA=&UmVxdWVzdG9yUmVmZXJlbmNl$RVZCSVVZSEU1MVE3&SXNCYXNlT2ZmbGluZVRyYW5zYWN0aW9u$RmFsc2U=&R2VuZXJhdGVUb2tlbg==$VHJ1ZQ==&QWxsb3dQYXJ0aWFsQXV0aA==$RmFsc2U=",
                    "authCode": "OK729Z"
                }
            ],
            "correlationId": "37391acd56b21e89580f1d8eda14c39f000fff9da11e78302d5ce0ed6ceed9b5",
            "expirationYearMonth": "202612",
            "tenantId": "222739",
            "accountNumberLast4": "1119",
            "nonIntegrated": false
        }
    },
    {
        "condition": {
            "tenantId": tenantId,
            "gatewayType": "shift4",
            "cardIssuer" : "Discover"
        },
        "update": {
            "token" : "86426220189868830000000266",
            "tokenCreationDate" : ISODate("2024-08-01T05:28:46.491+0000"),
            "tokenExpirationDate" : ISODate("2026-08-01T05:28:46.491+0000"),
            "prepaidCard" : false,
            "correlationId" : "7bc2566af4d6f76919237106e63c0adfdb51bb1e3d2b378b343e3c24424c9e47",
            "expirationYearMonth" : "202612",
            "cardIssuer" : "Discover",
            "accountNumberLast4" : "6883",
            "nonIntegrated" : false
        }
    },
    {
        "condition": {
            "tenantId": tenantId,
            "gatewayType": "shift4",
            "cardIssuer" : "American Express"
        },
        "update": {
            "token" : "83461701380122210000000266",
            "tokenCreationDate" : ISODate("2024-08-22T11:13:17.995+0000"),
            "tokenExpirationDate" : ISODate("2026-08-22T11:13:17.995+0000"),
            "cardType" : "credit",
            "prepaidCard" : false,
            "correlationId" : "0e92b368d0a78f12bc8c019b7c531b83c4059515817b50295f415c1dce747f22",
            "expirationYearMonth" : "202612",
            "cardIssuer" : "American Express",
            "accountNumberLast4" : "2221",
            "nonIntegrated" : false
        }
    },
    {
        "condition": {
            "tenantId": tenantId,
            "gatewayType": "FREEDOMPAY",
            "cardIssuer": "Discover"
        },
        "update": {
            "token": "6510000A00160YL8O0R0KI5J0331",
            "tokenCreationDate": ISODate("2023-10-26T12:58:20.094+0000"),
            "tokenExpirationDate": ISODate("2026-03-01T06:36:24.441+0000"),
            "cardType": "credit",
            "prepaidCard": false,
            "expirationYearMonth": "202212",
            "accountNumberLast4": "0331"
        }
    },
    {
        "condition": {
            "tenantId": tenantId,
            "gatewayType": "CELOPAY",
            "cardIssuer": "Visa"
        },
        "update": {
            "token": "8479488838221119"
        }
    }
];

// Connect to the database
//var db = connect("localhost:27015/rGuestStay");

// Iterate over the operations, perform the updates, and print the number of documents updated
operations.forEach(function (operation) {
    var result = db.getCollection(collectionName).updateMany(
        operation.condition,
        {$set: operation.update}
    );
    print("Updated " + result.matchedCount + " documents for condition: " + JSON.stringify(operation.condition));
});

print("Updates complete.");
