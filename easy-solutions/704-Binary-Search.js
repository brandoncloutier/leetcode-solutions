/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
      const middle = Math.floor((left + right) / 2);

      if (nums[middle] === target) return middle
      else if (target < nums[middle]) {
          right = middle - 1;
      } else {
          left = middle + 1;
      }
  }

  return -1;
};

/**
 * Solution Notes: Here we are using Binary Search. A caveat with binary search is that we need to make sure that the array
 * is in some kind of sorted order. The technique we are using is we are looking at the middle element and looking if it is equal to the 
 * target. If it isnt we check if it is less than or greater than the target. We then check the left or right side. This effectively halves the array
 * at every iteration. This gives the algorithm a O(logn) TC.
 */