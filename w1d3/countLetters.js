function countLetters(string) {
  var adjustedString = string.split(" ").join("").toLowerCase();
  var result = {};
  for (var i = 0; i < adjustedString.length; i++) {
    if (result[adjustedString[i]]) {
      result[adjustedString[i]] += 1;
    } else {
      result[adjustedString[i]] = 1;
    }
  }
  return result;
}


console.log(countLetters("abcdddee"));