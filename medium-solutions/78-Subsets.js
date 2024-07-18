/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const output = [];

  const subset = [];

  var dfs = function(i) {
      // We found a leaf node meaning that it is an element of the subset
      if (i >= nums.length) {
          output.push(subset.slice());
          return;
      }

      // Decision 1: We add the element
      subset.push(nums[i]);
      dfs(i + 1);

      // Decision 2: We dont add the element
      // We must pop here because we pushed nums in the code above. So we must remove it to align 
      // with the decision to not add an element.
      subset.pop();
      dfs(i + 1);
  }

  dfs(0)

  return output
};

/**
 * Solution Notes:
 * This question is asking us to create a power set of the set [1,2,3]. I learned about power sets
 * in discrete math. A power set is a set that contains all the possible combinations of the original set. 
 * This also includes the empty set. I was originally having trouble finding a solution to this problem. 
 * Originally I thought I would iterate through the original subset and with pointers I would use a stack and push and
 * pop values using some complicated algorithm. Long story short I cant even put my solution into words since
 * it was so complicated. However, I watched Neetcodes solution and he showed an insightful diagram of a decision tree.
 * The root would be the empty node and you had to decisions to either add a number to the subset or not. Each level I would
 * make this decision to all the nodes at said level with the next element in the original subset. I would continue this until I ran out of 
 * elements in the original subset. Once we have reached leaf nodes then we know those are the possible solutions.
 * In discrete math I learned that the length of the power set is 2^n which in the case where the inputed array has a
 * length of 3 it would yeild a powerset of length 8. This means that we would have 8 total leaf nodes which is
 * apparent when you create the decision tree. 
 * 
 * The solution:
 * A solution that I could use is backtracking. Backtracking is a algorithm that utilizes DFS however if it runs into an
 * obsticle it will go back and try a new path. This is very interesting because what we can do is we can write the algorithm 
 * so that when it reaches a leaf node it will go back and look for another leaf node. It will continue to do this
 * until it runs out of leaf nodes. In the solution we created two variables output and subset. Output is self explanitory. 
 * Subset is the stack we are going to use to save the current permutation of the decision tree as we are traversing it.
 */