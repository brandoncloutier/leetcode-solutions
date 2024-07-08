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
 * @param {number} val
 * @return {TreeNode}
 */

var searchBST = function(root, val) {
  // Base Case: if its equal to null then we return an empty array.
  if (root === null) return null;

  // If TreeNode value equals the target val return that TreeNode.
  if (root.val === val) return root;

  // Check left
  if (val < root.val) return searchBST(root.left, val);

  else return searchBST(root.right, val);
};

/**
 * Solution Notes: In this solution we are just looking through the BST to either find
 * the target value or return null. In this solution we are using recursion. The two different base
 * cases we are considering is if we either reach NULL meaning the value doesn't exist or we 
 * find the value in which we return that Node.
 * 
 * If neither of the base cases are hit then we check left or check right.
 * 
 * TC: The time complexity of this solution is O(logn) because we are halving the amount of elements we are searching with
 * every iteration. This is similar to binary search.
 */

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
 * @param {number} val
 * @return {TreeNode}
 */

var searchBST = function(root, val) {
  // Base Case: if its equal to null then we return an empty array.
  if (root === null) return null;

  // Check if I should go left
  if (val < root.val) return searchBST(root.left, val);

  // Check if I should go right
  else if (val > root.val) return searchBST(root.right, val);

  // Only last scenario we found the value
  else return root
};

/**
 * Updated Solution: Here I made a small change. Instead of making if we found the value a base case
 * I made it implied if we made it through all of the if statements. I can see how this could give a slight
 * computational advantage because lets say you have a large BST. The chances you have to run into the value versus
 * having to traverse left or right is very slim. So lets check the higher percentage scenarios first as in going left
 * or right and this will save some time. We have to check if root equals to null first because we cannot check the .val
 * attribute of a null object. 
 */