/**
 * SOLUTION 1
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let left = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[left] = nums[i];
            left++;
        }
    }
    return left;
};

/** 
 * Q: What the question was asking us was to remove all of the elements
 * in the array that equal to some number "val". Then move the elements
 * in place so that the first k elements equal all the elements in the array
 * that are not equal to val. Then return k
 * 
 * A: What I did here was I created a pointer "left" that will save
 * where the next index in the sequence should be in the nums array.
 * I then iterated over the nums array and looked for any elements 
 * that are not equal to val and moved them to the index that left is
 * pointing at. I then incremented left (the pointer).
 * At the end I return left which will be the number of elements in the array.
*/