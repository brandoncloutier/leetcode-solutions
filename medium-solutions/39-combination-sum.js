/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const output = [];
  const subset = [];

  var dfs = function(total, i) {

      // Means we have read
      if (total > target) {
          return;
      }

      // We found a solution
      if (total === target) {
          output.push(subset.slice());
          return;
      }

      // dfs all possible solutions
      for (let j = i; j < candidates.length; j++) {
          subset.push(candidates[j]);
          if (total + candidates[j] <= target) {
              dfs(total + candidates[j], j)
          }
          subset.pop()
      }
  }

  for (let i = 0; i < candidates.length; i++) {
      subset.push(candidates[i])
      dfs(candidates[i], i)
      subset.pop()
  }

  return output;
};

/**
 * Solution Notes: Here the question is asking us to find all the combinations of integers in the array
 * candidates that add up to equal to the target. My first thought was okay we can use some sort of decision tree. 
 * However, the question is asking that the answer have no duplicates. The way that I solved this problem is to iterate through
 * the candidates array and allow it to only add numbers that come after it. Because the combination will be covered by 
 * the numbers before if they exist.
 */