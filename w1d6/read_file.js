var fs = require("fs");

// for this exercise, the file path is being passed in the command line as args
// args = "/tmp/test_async.txt";
var args = process.argv.slice(2);


fs.readFile(args.toString(), function(err, content) { // Note: convert file path (args) to a string to avoid error
  if (err) {
    throw err;
  }
  console.log(content.toString());
});