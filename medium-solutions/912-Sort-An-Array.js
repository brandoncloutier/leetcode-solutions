

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


/**
 * Solution 2: Merge Sort
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var merge = function(arr, start, middle, end)
{
  // Here we are creating two array copies that are the arrays we sorted before.
  // We then iterate through both of them and compare values against each other.
  // The smaller value will be pushed to the main array. 
  // Since these sub arrays should already by in sorted order we can just walk through them both.
  // Once one of them runs out of values than we know we can push the rest of the remaining array to the main array since its already sorted.
  const leftArr = arr.slice(start, middle + 1);
  const rightArr = arr.slice(middle + 1, end + 1);

  let leftPtr = 0;
  let rightPtr = 0;
  let currentInsertionIndex = start;

  while (leftPtr < leftArr.length && rightPtr < rightArr.length)
  {
    if (leftArr[leftPtr] <= rightArr[rightPtr])
    {
      arr[currentInsertionIndex] = leftArr[leftPtr];
      leftPtr++;
    }
    else
    {
      arr[currentInsertionIndex] = rightArr[rightPtr];
      rightPtr++;
    }

    currentInsertionIndex++;
  }

  while (leftPtr < leftArr.length)
  {
    arr[currentInsertionIndex] = leftArr[leftPtr];
    leftPtr++;
    currentInsertionIndex++;
  }

  while (rightPtr < rightArr.length)
  {
    arr[currentInsertionIndex] = rightArr[rightPtr];
    rightPtr++;
    currentInsertionIndex++;
  }
}
var mergeSort = function(arr, start, end)
// Pretty much what we want to do is divide the array into halves until we get to single arrays and we sort on the way up.
{
  // Base Case: When the array gets to length 1 then we know that the array is "sorted" because a     single element array is sorted so we return the array
  if (start >= end)
  {
    return arr;
  }

  // Middle
  const middle = Math.floor((end + start) / 2);

  // Merge Left
  mergeSort(arr, start, middle)

  // Merge Right
  mergeSort(arr, middle + 1, end);

  // Merge both sorted arrays together
  merge(arr, start, middle, end)

  return arr;
}

var sortArray = function(nums) {
    const sortedArr = mergeSort(nums, 0, nums.length - 1);
    return sortedArr;
};

/**
 * Solution 2 notes:
 * In this solution we are using divide and conquer, specifically utilizing recursion
 * to break the problem down into smaller sub problems that are easier to solve.
 * In this instance we are halfing the array until we get to a single element array
 * which is considered "sorted" since its a single element. We then merge the two half arrays
 * together as we go back up through the recursion. We do this by interating through both halfs
 * and inserting the lowest values ones after each other from the arrays. If there is no more elements
 * in one array than we know that all the elements left in the other are already in order so we just push
 * the rest of the elements.
 */

/**
 * Solution 3: Quick Sort
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var quickSort = function(nums, start, end) {

  // Base Case
  if (start >= end) return nums;
  //
  let pivot = end;
  let swapPtr = start;
  let iterationPtr = start;

  // swap everything before pivot
  while (iterationPtr < pivot) {
      if (nums[iterationPtr] <= nums[pivot]) {
          let temp = nums[swapPtr];
          nums[swapPtr] = nums[iterationPtr];
          nums[iterationPtr] = temp;
          swapPtr++;
      }
      iterationPtr++;
  }

  // switch pivot and swapPtr
  let temp = nums[swapPtr];
  nums[swapPtr] = nums[pivot];
  nums[pivot] = temp;

  // quickSort Left
  quickSort(nums, start, swapPtr - 1)

  // quickSort Right
  quickSort(nums, swapPtr + 1, end)

  return nums;
}
var sortArray = function(nums) {
  return quickSort(nums, 0, nums.length - 1)
};

/**
 * Solution 3 notes:
 * Recursion
 * 1. Find pivot (Use last element)
 * 2. Create two pointers
 *     a. one to iterate through the array
 *     b. one pointer to save where to swap next
 * 3. iterate through the array and swap any values that are less than or equal to the pivot
 * 4. Swap the pivot and the swap pointer
 * 5. quicksort left and quick sort right of the swap pointer.
 */