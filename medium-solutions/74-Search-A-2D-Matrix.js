/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var binarySearch = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
      const middle = Math.floor((left + right) / 2);

      if (nums[middle] === target) return true
      else if (target < nums[middle]) {
          right = middle - 1;
      } else {
          left = middle + 1;
      }
  }

  return false;
}

var binarySearchMatrix = function(matrix, target) {
    let left = 0;
    let right = matrix.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        // check left
        if (target < matrix[middle][0])
        {
            right = middle - 1;
        } 
        // check right
        else if (target > matrix[middle][matrix[middle].length - 1]) 
        {
            left = middle + 1;
        } 
        // check middle
        else 
        {
            return binarySearch(matrix[middle], target)
        }

    }
    return false;
}
var searchMatrix = function(matrix, target) {
    return binarySearchMatrix(matrix, target);
};

/**
 * Solution Notes:
 * In this solution we used a modified version of binary search to apply it to a 2D matrix. 
 * 
 * Binary search
 * is an interesting algorithm. One caveat to it is that the array needs to already by in sorted order.
 * What we do is the pick the middle element of the array and check if it is equal to the target value. If it is equal to the target
 * then we return the index of that element. If it isnt we need to see if it is less than or greater than the target.
 * This will tell us if we need to check to the left or to the right of the middle element. We continue this until either
 * we find the element and return the index or we run out of elements. At every iteration we are halfing the array we are checking
 * effectively giving us a O(logn) TC. 
 * 
 * In the case of this problem we are looking for a value in a 2D array and each subarray is sorted and the last element of an array is always less than the
 * first value of the next array. The approach that I took was trying to narrow down which sub array the target could possibly be in by looking at the first and last element
 * of the middle array. If it is less than the first element then we know that it has to be in a sub array that is less than it so we continue to search the lower arrays. The same goes for 
 * the higher arrays. Once we find an array that it could possibly be in we do binarySearch on that specific array.
 * 
 * 
 * EX: 
 * target = 3
 * [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
 *                  ^
 * Target is less than 10 so we check the lower half of the range
 * [[1,3,5,7]]
 *      ^
 * 
 * Target is in this range so we run binary search on this array
 * 
 * [1,3,5,7]
 *    ^
 * 
 * Middle is equal to the target so we return true.
 */