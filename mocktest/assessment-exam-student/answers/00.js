/* Question 0
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * COUNT - the number of numbers in a list
 *
 * For example:
 *
 *    count([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    9
 */
function count(arr) {
  return arr.length;
}


/* ===========================================================================
 * SUM - the sum of the numbers in a list
 *
 * For example:
 *
 *    sum([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    36
 */
function sum(arr) {
  var answer = 0;
  for (var i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer;
}


/* ===========================================================================
 * MEAN - the average value of numbers in a list
 *      - use the provided 'round' function when returning your value
 *
 * For example:
 *
 *    mean([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    4
 */



function round(number) {
  return Math.round(number * 100) / 100;
}



//  function mean(arr) {
//   var sum = 0;
//   var average = 0;
//   if (arr === []) {
//     average === null;
//   } else
//   for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return round(sum / arr.length);
// }

function mean(arr) {
  if (arr.length === 0) {
    return null;
  } else {
    var sum = 0;
    var average = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return round(sum / arr.length);
  }
}


// console.log(mean([6,2,3,3,10,6,1,0,5]));
// console.log(mean([]));






// Don't change below:

module.exports = { count: count, sum: sum, mean: mean };
