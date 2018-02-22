function returnIndices(string) {
  var adjustedString = string.toLowerCase();
  var result = {};
  for (var i = 0; i < adjustedString.length; i++) {
   if (result[adjustedString[i]]) {
    result[adjustedString[i]].push(i);
  } else {
    result[adjustedString[i]] = [i];
  }
}
delete result[" "];
return result;
}

console.log(returnIndices("lighthouse in the house"));



