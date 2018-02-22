var fs = require("fs");

var filePath = "/tmp/test_async.txt";
var fileData = "print content - success";

fs.writeFile(filePath, fileData, function(err) {
  if (err) {
    throw err;
  }

  console.log("write file - success");
});
