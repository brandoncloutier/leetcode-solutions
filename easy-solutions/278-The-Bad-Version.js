/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
      let left = 1;
      let right = n;

      while (right - left >= 1)
      {
          const middle = Math.floor((left + right) / 2);

          if (isBadVersion(middle))
          {
              right = middle;
          }
          else {
              left = middle + 1;
          }
      }
      return right;        
  };
};

/**
 * Solution Notes:
 * In this solution we modled it after binary search. 
 * 
 * What this question is asking is it was us to narrow down which version of a product is the faulty version. 
 * We use binary search to remove half of the remaining elements at every iteration. Effectively giving us a O(logn) solution.
 * If you look in the code we created a left and right pointer pointing to 1 and the last element respectively. We then check the middle
 * element and see if it is a bad version. If it is then we remove all values to the right but keep that version still in the range. Then we check again
 * if it is a good version then we remove all elements to the left including the middle since we know that cant possibly be the version we are looking for.
 * Essentially we are trying to narrow it down to one version and since we are keeping the single bad versions that we are finding it will narrow 
 * the range down to one version which is the bad one we are looking for.
 */