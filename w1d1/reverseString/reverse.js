function reverse (string) {
  var newString = "";
  for (var i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}

var args = process.argv;
for (var j = 2; j < args.length; j++) {
console.log(reverse(args[j]));
}

