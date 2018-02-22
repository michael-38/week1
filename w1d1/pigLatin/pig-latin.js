function pig (string) {
  var newString = "";
  var tempArray = [];
  for (var i = 1; i < string.length; i++) {
    newString += string[i];
  }
  newString += string[0] + "ay ";
  return newString;
}

var args = process.argv;
var finalString = "";
for (var j = 2; j < args.length; j++) {
  finalString += pig(args[j]);
}

console.log(finalString);