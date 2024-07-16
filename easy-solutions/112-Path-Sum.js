/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var searchPath = function(root, sum, targetSum) {
  // When we want to turn back
  if (root === null) return false

  if (searchPath(root.left, sum + root.val, targetSum)) {
      return true;
  }
  
  if (searchPath(root.right, sum + root.val, targetSum)) {
      return true;
  }

  if (sum + root.val === targetSum && root.left === null && root.right === null) {
      return true
  }

  return false;
}
var hasPathSum = function(root, targetSum) {
  if (root === null) return false;

  return searchPath(root, 0, targetSum)
};

/**
 * Solution Notes:
 * This question is asking for us to find a leaf node where if you add up the path to get to that node
 * if it equals a targetSum. To do this I utilized backtracking where it would try different paths. At each node that 
 * it tries it will add its value to some sum value that is passed down every recusive call. It will check
 * the left child then right child. If those paths are rejected we will check if the sum equals the target
 * if it does then we will make sure that it is a leaf node and we will return true;
 */