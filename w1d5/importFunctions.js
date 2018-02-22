var exportedFunctions = require("./exportFunctions.js");


exportedFunctions.addToArray(2);
exportedFunctions.addToArray(3);
exportedFunctions.addToArray(10);
exportedFunctions.addToArray(8);

console.log(exportedFunctions.returnSortedArray());
