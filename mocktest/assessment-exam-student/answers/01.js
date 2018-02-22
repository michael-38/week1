/* Question 1
 *
 *  Implement the functions defined below
 *
 */

 /* ===========================================================================
  * MIN - the lowest value in a list
  *
  * For example:
  *
  *    min([6,2,3,4,9,6,1,0,5])
  *
  * Returns:
  *
  *    0
  */

function ascending(a, b) {
  return a - b;
}


function min(arr) {
  return arr.sort(ascending)[0];
}



// console.log(min([6,2,3,4,9,6,1,0,5]))

/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
function max(arr) {
  return arr.sort(ascending)[arr.length - 1];
}




/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
function range(arr) {
  return arr.sort(ascending)[arr.length - 1] - arr.sort(ascending)[0];
}


// console.log(range([6,2,3,4,9,6,1,0,5]));

// Don't change below:

module.exports = { min: min, max: max, range: range };
