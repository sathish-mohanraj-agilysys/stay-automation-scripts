var siblingDb = db.getSiblingDB('rGuestStay-aks-stay-qaint');
var collectionNames=["auditCommits","accounts","auditEntities"];
var patternsList = [
    { name: "tenantId", patterns: ["ti", "t", "tenantId"] },
    { name: "propertyId", patterns: ["pi", "p", "propertyId"] }
];

function findKeys(obj, path, patterns, currentPath, shortestPaths) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            var newPath = (path === "") ? key : path + "." + key;
            var fullPath = (currentPath === "") ? key : currentPath + "." + key;
            patterns.forEach(function(pattern) {
                if (pattern.patterns.includes(key)) {
                    if (!shortestPaths[pattern.name] || fullPath.length < shortestPaths[pattern.name].length) {
                        shortestPaths[pattern.name] = shortestPaths[pattern.name] || [];
                        shortestPaths[pattern.name].push(fullPath);
                    }
                }
            });
            if (typeof obj[key] === "object") {
                findKeys(obj[key], newPath, patterns, fullPath, shortestPaths);
            }
        }
    }
}

var yamlContent = "";

collectionNames.getCollectionNames().forEach(function(collection) {
    yamlContent += collection + ":\n";

    patternsList.forEach(function(pattern) {
        var documents = siblingDb.getCollection(collectionName).find({}).limit(3);

        while (documents.hasNext()) {
            var doc = documents.next();
            var shortestPaths = {};
            findKeys(doc, "", [pattern], "", shortestPaths);
            if (shortestPaths[pattern.name]) {
                yamlContent += "  " + pattern.name + ":\n";
                shortestPaths[pattern.name].forEach(function(path) {
                    var pathSegments = path.split(".");
                    yamlContent += "    - " + pathSegments.join("\n     - ") + "\n";
                });
            }
        }
    });
});
print(yamlContent);
