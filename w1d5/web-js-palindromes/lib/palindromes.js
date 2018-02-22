function isPalindrome(s) {
  var noSpaces = s.split(" ").join("");
  var stringReverse = "";

  for (var i = noSpaces.length-1; i >=0; i--) {
    stringReverse += noSpaces[i];
  }

  var adjustInput = s.split(" ").join("");

  return adjustInput === stringReverse;
}


console.log(isPalindrome("a man a plan a canal panama"));

module.exports = isPalindrome;
