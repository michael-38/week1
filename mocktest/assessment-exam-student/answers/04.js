/* Question 4
 *
 *  Implement the 'stdev' function defined below
 *
 * STDEV  - the square root of the average of the squared deviations of the values from their average value
 *        - you are allowed to look at Wikipedia's example calculation:
 *            https://en.wikipedia.org/wiki/Standard_deviation#Basic_examples
 *
 *        - use the provided 'round' function before returning your final value
 *        - you can take a square root using `Math.sqrt(number)`
 *
 * For example:
 *
 *    stdev([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    2.67
 */


function mean(arr) {
  var sum = 0;
  var average = 0;
  if (arr === []) {
    average === null;
  } else {
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  }
  return sum / arr.length;
}


function round(number) {
  return Math.round(number * 100) / 100;
}




function stdev(arr) {
  var average = mean(arr);

  var sqrDiffs = arr.map(function(value){
    var diff = value - average;
    var sqrDiff = diff * diff;
    return sqrDiff;
  });

  // return sqrDiffs;


  var avgSquareDiff = mean(sqrDiffs);

  var stdDev = Math.sqrt(avgSquareDiff);
  return round(stdDev);
}



// console.log(stdev([6,2,3,4,9,6,1,0,5]));








// Don't change below:

module.exports = { stdev: stdev };
