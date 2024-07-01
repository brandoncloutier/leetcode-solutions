/**
 * Solution: Bucket Sort
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  // First we need to create an array that represents the buckets
  const counts = new Array(3).fill(0);
  
  // then we need to iterate through nums and increases the counters corresponding to each bucket.
  for (let i = 0; i < nums.length; i++) {
      counts[nums[i]] += 1;
  }

  // iterate through the bucket and repopulate the original array.
  let left = 0;
  for (let i = 0; i < counts.length; i++)
  {
      for (let j = 0; j < counts[i]; j++) {
          nums[left] = i;
          left++;
      }
  }
  return nums;
};

/**
 * Solution Notes: 
 * Here we are using Bucket Sort. Bucket sort is an algorithm that is used to sort an array of numbers. The caveat is that we need to know
 * the district range the numbers in the array fall into. For example for the array -> [2, 0, 2, 1, 1, 0] the district range would be 0 - 2. 
 * For the amount of numbers in the range we would create a bucket count array of length of the length of that range. In this instance we would create
 * a bucket counter array with a length of 3 initializing all of the elements to 0. We will then iterate through the initital array and increment the counter
 * at the bucket corresponding to the element we are iterating over. We will then iterate through the bucket counter array and repopulate the initial array 
 * with the sorted values. 
 */