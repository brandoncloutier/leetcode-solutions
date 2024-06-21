

/**
 * Solution 1: Insertion Sort
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  for (let i = 1; i < nums.length; i++)
  {
      let j = i - 1;

      while (j >= 0 && nums[j + 1] < nums[j])
      {
          const temp = nums[j + 1];
          nums[j + 1] = nums[j];
          nums[j] = temp;
          j -= 1;
      }
  }
  return nums;
};

/**
 * Solution 1 notes:
 * In this solution we used insertion sort. In this instance we are looking to
 * sort the array in accending order. What we are doing is we are iterating through
 * the array and finding numbers that are lower than the ones on the left of it. Then we
 * are swapping it until it gets to a position where the value to the left of it is lower.
 * Doing this through the entire array will sort it.
 * Time complexity: This solution is a n^2 time complexity. Specifically it shows a 1/2n^2 time complexity
 * but we don't care about constants so we just say its n^2 time complexity.
 */