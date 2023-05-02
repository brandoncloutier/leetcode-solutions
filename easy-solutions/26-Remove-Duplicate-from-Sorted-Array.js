/**
 * SOLUTION 1
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], i);
        }
    }
    const indexArray = Array.from(map.values());
    const k = indexArray.length
    for (let i = 0; i < k; i++) {
        nums[i] = nums[indexArray[i]];
    }

    return k;
};

/*
    @ In this solution we are creating a hash map of the indexs of the first occurance of all unique numbers.
    We then iterate over that array and replace the corresponding index's.
    This solution is confusing and hard to read/reiterate.
    There also isn't the most optimum solution as you have to iterate over the array twice which makes it O(2N). 
    I believe there is a solution to get a O(N) through the use of pointers.
*/

/**
 * SOLUTION 2
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let left = 0;
    let lastLowestNum = -9999999;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > lastLowestNum) {
            nums[left] = nums[i];
            lastLowestNum = nums[i];
            left++;
        }
    }

    return left;
};

/*
    @ In this solution we are using a pointer to save where the next highest number should go. We then use a variable
     to hold the last num in the sequence. If a number is greater than the last num in the sequence then move the variable into
     the sequence and assign reassign lastLowestNum.
     This solution is O(N) since we only have to iterate over the array once. 
*/