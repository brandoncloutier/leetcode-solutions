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
var insertIntoBST = function(root, val) {
  if (root === null) return new TreeNode(val);

  else if (val < root.val) {
      root.left = insertIntoBST(root.left, val);
  } 
  else if (val > root.val) {
      root.right = insertIntoBST(root.right, val);
  }

  return root;
};

/**
 * Solution Notes:
 * The question is asking to write an algorithm to insert into a binary search tree.
 * My solution uses a recursive algorithm it "insert" into every subtree until we reach a null position
 * we then create the new node and return it. In the traversal back through the stack the new Node is made a left or right child
 * of the parent. Eventually the code continues until it reaches the root and we return the root.
 */