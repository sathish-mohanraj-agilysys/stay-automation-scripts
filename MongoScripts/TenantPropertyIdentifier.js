var db = db.getSiblingDB("rGuestStay");

function isPathExists(obj, path) {
    const keys = path.split(".");

    function traverse(obj, keys) {
        if (obj == null) return false;

        if (keys.length === 0) return true;
        const key = keys.shift();

        if (obj.hasOwnProperty(key)) {
            return traverse(obj[key], keys);
        }

        return false;
    }

    return traverse(obj, keys);
}

function getRandomDocuments(collectionName, numDocuments) {
    var collection = db.getCollection(collectionName);
    var randomDocuments = collection.aggregate([{$sample: {size: numDocuments}}]);
    return randomDocuments.toArray();
}

var tenantPropertyPath = [
    {tenantId: ["tenantId", "ti"]},
    {propertyId: ["propertyId", "pi"]}
];

var myCollections = db.getCollectionNames();

var finalOutput = {};
myCollections.forEach(collection => {
    var documents = getRandomDocuments(collection, 1);
    documents.forEach(document => {
        tenantPropertyPath.forEach(propertyObj => {
            var tenOrProp = Object.keys(propertyObj)[0]; // Get the key (e.g., tenantId or propertyId)
            var patterns = propertyObj[tenOrProp];
            patterns.forEach(pattern => {
                if (isPathExists(document, pattern)) {
                    if (!finalOutput[collection]) {
                        finalOutput[collection] = {};
                    }
                    finalOutput[collection][tenOrProp] = pattern;
                    print("collectionName:" + collection + "    &&" + tenOrProp + " ---> " + pattern);
                }
            });
        });
    });
});

printjson(finalOutput);
