/**
 * Solution 1: Quick Select
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var quickSelect = function (nums, start, end, k) {
  let pivot = end;
  let swapPtr = start;
  let iterator = start;

  // Partition the array around the pivot
  while (iterator < end) {
      if (nums[iterator] <= nums[pivot]) {
          let temp = nums[swapPtr];
          nums[swapPtr] = nums[iterator];
          nums[iterator] = temp;
          swapPtr++;
      }
      iterator++;
  }

  // Place pivot in correct place by swapping value at pivot and swapPtr;
  let temp = nums[swapPtr];
  nums[swapPtr] = nums[pivot];
  nums[pivot] = temp;

  // Check if the swapPtr value is equal to k
  if (nums.length - k === swapPtr) return nums[swapPtr];

  // If the Kth largest value is to the right then we want to quickSelect the right side of the swapPtr
  // Else quickSelect the left side
  else if (nums.length - k < swapPtr) return quickSelect(nums, start, swapPtr - 1, k)
  else return quickSelect(nums, swapPtr + 1, end, k)
}

var findKthLargest = function(nums, k) {
  return quickSelect(nums, 0, nums.length - 1, k)
};

/**
 * Solution 1 Notes:
 * This one uses a similar concept to quickSort. Specifically uses the concept of partitioning.
 * Partitioning: Partitioning is organizing an array so that all elements to the left of a integer 
 * pivot element is less than it and everything to the right is greater than it. This does not mean that
 * the sub array that makes up the left and right are sorted it just means they are less than it.
 * This is done by first choosing a pivot element (usually the last one in the case of an interview). We create a left pointer
 * that points to the first element in the array. We then iterate through the array and if a value is less than or equal to the pivot
 * we swap the value at the left pointer and the value at the iterator and increment the left pointer. Once we reach the pivot we swap the pivot
 * and where ever the left pointer lands. This will partition the array. Once we partition the array we see if the left pointer is equal to length - k.
 * If not we use recursion to partition and check the left and right side and check again.
 * 
 */