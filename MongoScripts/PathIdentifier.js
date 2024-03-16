var db = db.getSiblingDB("rGuestStay");
var pathLogger = false;
var cloneLogger = false;
var deleteScriptLogger = false;
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

var myCollections = db.getCollectionNames();

myCollections.forEach(collection => {
    var documents = getRandomDocuments(collection, 1);

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

function stay_mongo_cloner(output) {
    for (let collection in output) {
        print(collection + ":");
        for (let key in output[collection]) {
            print(" " + key + ":");
            let shortestPath = output[collection][key].reduce((shortest, current) => shortest.length < current.length ? shortest : current);
            print("  - " + shortestPath);
        }

    }

}

function tenant_purge(output) {
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
}


function tentantPropertyPath(output) {
    temp=[];
    for (let collection in output) {
        temp.push({[collection]:{
            TenantIdPath:[...new Set(output[collection]["tenantId"])],
                PropertyIdPath:[...new Set(output[collection]["propertyId"])]
            }})
    }
    print(JSON.stringify(temp));
}


if (pathLogger){tentantPropertyPath(output);}
if (cloneLogger){stay_mongo_cloner(output);}
if(deleteScriptLogger){tenant_purge(output);}


