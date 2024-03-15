var db = db.getSiblingDB("rGuestStay");

function findKeyPaths(obj, key, currentPath = [], paths = []) {
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            if (prop === key) {
                paths.push(currentPath.concat(prop).join('.'));
            }
            if (typeof obj[prop] === 'object') {
                findKeyPaths(obj[prop], key, currentPath.concat(prop), paths);
            }
        }
    }
    return paths;
}

var tenantPropertyPath = [
    { tenantId: ["tenantId", "ti","path"] },
    { propertyId: ["propertyId", "pi"] }
];

function getRandomDocuments(collectionName, numDocuments) {
    var collection = db.getCollection(collectionName);
    var randomDocuments = collection.aggregate([{ $sample: { size: numDocuments } }]);
    return randomDocuments.toArray();
}

var myCollections = ["accounts", "auditCommits","configEvents","maintenanceServiceRequestEventStream","config"];

var finalOutput = {};
myCollections.forEach(collection => {
    var documents = getRandomDocuments(collection, 1);
    print("   ");
    print("Working on collection: " + collection);

    documents.forEach(document => {
        tenantPropertyPath.forEach(propertyObj => {
            var tenOrProp = Object.keys(propertyObj)[0];

            var patterns = propertyObj[tenOrProp];
            patterns.forEach(key => {
                var paths = findKeyPaths(document, key);
                if (paths.length > 0) {
                    print(tenOrProp + "-->" + paths);
                }
            });
        });
    });
});
