/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
  let lower = 1;
  let higher = n;

  while (lower <= higher)
  {
      let middle = Math.floor((lower + higher) / 2);
      let guessCheck = guess(middle);

      if (guessCheck === -1)
      {
          higher = middle - 1;
      } 
      else if (guessCheck === 1)
      {
          lower = middle + 1;
      }
      else
      {
          return middle;
      }
  }
};

/**
 * Solution Notes:
 * This problem is basically binary search but we adapted it to check in a range of numbers instead of inside of an array.
 */