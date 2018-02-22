//After refactoring
function obfuscate(input) {
  return input
  .replace(/[Aa]/g, "4")
  .replace(/[Ee]/g, "3")
  .replace(/[Oo]/g, "0")
  .replace(/[Ll]/g, "1");
};

var args = process.argv;
console.log(obfuscate(args[2]));


/*
//Before refactoring
function obfuscate(input) {
  var newString = input;
  newString = newString.replace(/[Aa]/g, "4");
  newString = newString.replace(/[Ee]/g, "3");
  newString = newString.replace(/[Oo]/g, "0");
  newString = newString.replace(/[Ll]/g, "1");
  return newString;
}

var args = process.argv;
console.log(obfuscate(args[2]));
*/