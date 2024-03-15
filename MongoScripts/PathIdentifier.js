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
    {tenantId: ["tenantId", "ti", "path"]},
    {propertyId: ["propertyId", "pi"]}
];

function getRandomDocuments(collectionName, numDocuments) {
    var collection = db.getCollection(collectionName);
    var randomDocuments = collection.aggregate([{$sample: {size: numDocuments}}]);
    return randomDocuments.toArray();
}

var myCollections = ["accounts", "auditCommits", "configEvents", "maintenanceServiceRequestEventStream", "config"];

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

function printFormattedOutput(output) {
    for (let collection in output) {
        print(collection + ":");
        for (let key in output[collection]) {
            print(" " + key + ":");
            let shortestPath = output[collection][key].reduce((shortest, current) => shortest.length < current.length ? shortest : current);
            print("  - " + shortestPath);
        }

    }

}

printFormattedOutput(output);

