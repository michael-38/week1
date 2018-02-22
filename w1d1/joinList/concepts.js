/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

 var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];


 var joinList = function (array) {
  var empty = "";
  for (var i = 0; i < array.length; i++) {
    if (i < array.length-1) {
        empty += array[i] + "," + " ";
    } else {
      empty += array[i];
    }

  }
  return empty;
}


var concepts = joinList(conceptList);


console.log("Today I learned about " + concepts + ".");

