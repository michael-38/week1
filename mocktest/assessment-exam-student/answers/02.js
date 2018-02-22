/* Question 2
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *           [ 0, 1, 2, 3, 4, 5, 6, 6, 9 ]      //4
 *           [ 0, 1, 2, 3, 4, 5, 6, 6, 9, 9 ]   //4.5
 * Returns:
 *
 *    4
 */

function ascending(a, b) {
  return a - b;
}


function median(arr) {
  var sortedArray = arr.sort(ascending);
  var mid = arr.length / 2;


  if (mid % 1 === 0) {
    return (sortedArray[Math.floor(mid)] + sortedArray[Math.floor(mid) - 1]) / 2;
  } else {
    return sortedArray[Math.floor(mid)];
  }
}


function round(number) {
  return Math.round(number * 100) / 100;
}



// console.log(median([ 0, 0, 2, 3, 3, 0, 0, 6, 7 ]));
// console.log(median([6,2,3,4,9,6,1,0,5,7]));




// Don't change below:

module.exports = { median: median };
