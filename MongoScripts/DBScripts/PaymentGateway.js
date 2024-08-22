
//tenant Id to update
var tenantId="294052";
// Array of operations
const operations = [
 {
    condition: { "gatewayType" : "shift4","tenantId":tenantId,"active":true },
    update: {
      $set: {
        "payAgents.0.code" : "test",
       "payAgents.0.url" : "http://localhost:8502/",
       "payAgents.0.description" : "s4",
       "active" : true,
       "primary" : true,
       "nonIntegrated" : false,
       "idTechDevicePresent" : true,
       "configurationInfos.accesstoken" : "4ACCAE1F-95D1-45DF-8A55-F55DEA7376D7",
       "configurationInfos.accountnumber" : "266",
       "configurationInfos.terminalIdsCSV" : ""

      }
    }
  },
  {
    condition: { gatewayType: "Elavon","tenantId":tenantId,"active":true },
    update: {
      $set: {
        "terminalList.0.terminalId": "LMSLOD01",
        "configurationInfos.chaincode": "TSTLA3",
        "configurationInfos.locationname": "AGILYSYS",
        "configurationInfos.laneid": "8888"
      }
    }
  },
  {
    condition: { gatewayType: "FREEDOMPAY","tenantId":tenantId,"active":true },
    update: {
      $set: {
        "terminalList.0.terminalId": "2413665018",
        "configurationInfos.storeid": "1413747011",
        "configurationInfos.clientid": "3366381010"
      }
    }
  },
  {
    condition: { gatewayType: "THREEC","tenantId":tenantId,"active":true },
    update: {
      $set: {
        "configurationInfos": {
          "IntegraPort": "14601",
          "DeviceId": "000137",
          "RequesterLocationId": "000917",
          "RequesterStationId": "001",
          "ValidationId": "VALIDATIONID",
          "ValidationCode": "VALIDATIONCODE"
        }
      }
    }
  }
];

// Perform the updates
operations.forEach(function(operation) {
const result = db.paymentGatewaySettings.updateMany(operation.condition, operation.update);
print(`Matched ${result.matchedCount} documents and modified ${result.modifiedCount} documents for condition }`);
});
