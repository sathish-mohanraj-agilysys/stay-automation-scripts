var db = db.getSiblingDB("rGuestStay");
var accuracy =5;
var pathLogger = true;
var cloneLogger = true;
var deleteScriptLogger = true;
var statisticsLogger =true;
var output = {};

function findKeyPaths(obj, keys, currentPath = [], paths = []) {
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            if (keys.includes(prop)) {
                paths.push(currentPath.concat(prop).join('.'));
            }
            if (typeof obj[prop] === 'object') {
                findKeyPaths(obj[prop], keys, currentPath.concat(prop), paths);
            }
        }
    }
    return paths;
}

var tenantPropertyPath = [
    {tenantId: ["tenantId", "ti", "path","t"]},
    {propertyId: ["propertyId", "pi","p"]}
];

function getRandomDocuments(collectionName, numDocuments) {
    var collection = db.getCollection(collectionName);
    var randomDocuments = collection.aggregate([{$sample: {size: numDocuments}}]);
    return randomDocuments.toArray();
}

var myCollections = db.getCollectionNames().sort();
g
myCollections.forEach(collection => {
    var documents = getRandomDocuments(collection, accuracy);

    documents.forEach(document => {
        var collectionOutput = {};
        tenantPropertyPath.forEach(propertyObj => {
            var tenOrProp = Object.keys(propertyObj)[0];
            var keys = propertyObj[tenOrProp];

            var paths = findKeyPaths(document, keys);
            if (paths.length > 0) {
                paths = paths.map(path => path.replace(/\.\d+\./g, '.'));
                collectionOutput[tenOrProp] = paths;
            }
        });
        if (Object.keys(collectionOutput).length > 0) {
            output[collection] = collectionOutput;
        }
    });
});
var firstlog=true;
function stay_mongo_cloner(output) {
    if(!firstlog){print("\n\n");}
    print("This is the input yml file for the stay-mongodb-cloner\n");

    for (let collection in output) {
        print(collection + ":");
        for (let key in output[collection]) {
            print(" " + key + ":");
            let shortestPath = output[collection][key].reduce((shortest, current) => shortest.length < current.length ? shortest : current);
            var paths = shortestPath.trim().split("\\.");
            paths.forEach(path => {
                let subpaths = path.split(".");
                subpaths.forEach(subpath => {
                    let indentedSubpath = ' '.repeat(3) + '- ' + subpath;
                    print(indentedSubpath);
                });
            });
        }
    }
    firstlog = false;
}

function tenant_purge(output) {
    if(!firstlog){print("\n\n");}
    print("This is the input for the TenantPurge script to clean the tenant completely from the mongo db\n");

    let tenantPatterns = [];
    for (let collection in output) {
        output[collection]["tenantId"].forEach(pattern => tenantPatterns.push(pattern));
    }
    let temp = [];
    tenantPatterns = [...new Set(tenantPatterns)];
    tenantPatterns.forEach(x => temp.push({ collection: [], pattern: x }));
    for (let collection in output) {
        output[collection]["tenantId"].forEach(pattern => {
            temp.forEach(purgePattern => {
                if (purgePattern["pattern"] === pattern) {
                    purgePattern["collection"].push(collection);
                }
            });
        });
    }
    temp.forEach(collection=>collection["collection"]=[...new Set(collection["collection"])]);
    print(JSON.stringify(temp));
    firstlog=false;
}


function tentantPropertyPath(output) {
    if(!firstlog){print("\n\n");}
    print("This is the reference to find how the tenant and property data is present in each collection\n")
    temp=[];
    for (let collection in output) {
        temp.push({[collection]:{
            TenantIdPath:[...new Set(output[collection]["tenantId"])],
                PropertyIdPath:[...new Set(output[collection]["propertyId"])]
            }})
    }
    print(JSON.stringify(temp));
    firstlog=false;
}

function statistics(output){
    if(!firstlog){print("\n\n");}
    var collectionToManualOut=[];
    var collectionWithOnlyTenantId=[];
    var collectionWithOnlyPropertyId=[];
    var bothTenantAndPropetryCollection=[];

    for (let collectionName in output){
        let collection = output[collectionName];

        // Check if 'tenantId' or 'propertyId' arrays have length greater than 0
        if (collection.hasOwnProperty("tenantId") && collection["tenantId"].length > 0 &&
            (!collection.hasOwnProperty("propertyId") || collection["propertyId"].length === 0)) {
            collectionWithOnlyTenantId.push(collectionName);
        }
         if ((!collection.hasOwnProperty("tenantId") || collection["tenantId"].length === 0) &&
            collection.hasOwnProperty("propertyId") && collection["propertyId"].length > 0) {
            collectionWithOnlyPropertyId.push(collectionName);
        }
         if ((!collection.hasOwnProperty("tenantId") || collection["tenantId"].length === 0) &&
            (!collection.hasOwnProperty("propertyId") || collection["propertyId"].length === 0)) {
            collectionToManualOut.push(collectionName);
        }
        if ((collection.hasOwnProperty("tenantId") &&collection["tenantId"].length >0) &&
            (collection.hasOwnProperty("propertyId") && collection["propertyId"].length > 0)) {
            bothTenantAndPropetryCollection.push(collectionName);
        }
    }

    print("The Total collections in the db : " + Object.keys(output).length);
    print("The Total collections with both tenant and property id in the db : " + Object.keys(bothTenantAndPropetryCollection).length);
    print("The Total collections with only TenantId in the db : " + collectionWithOnlyTenantId.length);
    print("The Total collections with only PropertyId in the db : " + collectionWithOnlyPropertyId.length);
    print("The collections with no tenant and property id : " + collectionToManualOut.length);

    print("\n\n");
    print("The Total collection Names in the db : " + Object.keys(output));
    print("\n");
    print("The Total collections with both tenant and property id in the db : "+ bothTenantAndPropetryCollection);
    print("\n");
    print("The Total collection Names with only TenantId in the db : " + collectionWithOnlyTenantId);
    print("\n");
    print("The Total collection Names with PropertyId in the db : " + collectionWithOnlyPropertyId);
    print("\n");
    print("The collections with no tenant and property id : " + collectionToManualOut);
    firstlog=false;
}


if (pathLogger){tentantPropertyPath(output);}
if (cloneLogger){stay_mongo_cloner(output);}
if(deleteScriptLogger){tenant_purge(output);}
if(statisticsLogger){statistics(output);}


