/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occuring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
function mode(arr) {
  var occurrence = {};
  var highestFreqency = 0;
  var mode;

  arr.forEach(function findMode(number) {
    occurrence[number] = (occurrence[number] || 0) + 1;

    if (highestFreqency < occurrence[number]) {
      highestFreqency = occurrence[number];
      mode = number;
    }
  });
  return mode;
}


// console.log(mode([6,2,3,4,3,3,9,6,0,5]));








// Don't change below:

module.exports = { mode: mode };
