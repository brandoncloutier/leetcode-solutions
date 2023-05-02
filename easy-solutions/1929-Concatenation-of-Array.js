/**
 * SOLUTION 1
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const array = [];
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        array[i] = nums[i];
        array[i + length] = nums[i]
    }

    return array;
}

/**
 * Q: What the question is asking it to construct an array ans that is 
 * twice the size of the array nums where ans[i] == nums[i] and also where
 * ans[i + nums.length] = nums[i]. Essentially we are copying the nums array 
 * twice into the ans array.
 * 
 * A: Since we know the array is dynamic we can simply copy each index into ans 
 * and also copy it into the index ans + nums.length. We created a for loop
 * that iterated over all the index's of nums and we insterted two the element
 * twice into ans, Once at the corresponding index and another time at the index + nums.length.
 */