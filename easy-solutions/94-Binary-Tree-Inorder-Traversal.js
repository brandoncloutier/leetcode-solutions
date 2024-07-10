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
 * @return {number[]}
 */
var traverse = function(root, arr) {
  // Base Case If we reached null meaning we got to the bottom we would return
  if (root === null) return;

  /**
   * Here we are checking left then once we make it all the way to the end we want to add that value to the array. Then we want to check all the left subtrees because these values are going to all be greater than the parent but less than the grandparent.

   */
  if (root.left) traverse(root.left, arr);

  arr.push(root.val)

  if (root.right) traverse(root.right, arr);
  
}
var inorderTraversal = function(root) {
  const output = [];

  traverse(root, output);

  return output;
};

