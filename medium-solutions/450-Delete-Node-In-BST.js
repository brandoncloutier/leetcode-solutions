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
 * @param {number} key
 * @return {TreeNode}
 */
var findMinimumValue = function(root) {
  let curr = root;
  while (curr && curr.left) 
  {
      curr = curr.left;
  }
  return curr;
}
var deleteNode = function(root, key) {
  // Base case of we didnt find the node in the tree -> we hit null;
  if (root === null) return root;

  // Check left or check right
  else if (key < root.val)
  {
      root.left = deleteNode(root.left, key);
  }
  else if (key > root.val)
  {
      root.right = deleteNode(root.right, key);
  }

  // We found the node to delete
  else 
  {
      // Check if only one left or one right, We do this by checking if left doesnt exits. If it doesnt exist then we know to return right
      if (root.left === null) return root.right;

      // check if right doesnt exists. If it doesnt then we know to return left.
      else if (root.right === null) return root.left; 

      // If both exists then we have the case of 2 children so we must do that

      /**
       *  HERE: We have found the node that we want to remove. We want to essentially replace it with the minimum value of the 
       * higher subtree. We will then remove the value from that same subtree. This will do two things it will replace the value in the
       * node we want to remove with the new node we want there and it will restructure the tree.
       * We are using the function findMinimumValue to traverse the right subtree to find the minimumValue then we are setting the value of
       * the node we want to remove with that newnodes value essentially just replacing it. We then want to set the roots.right side to the result
       * of deleting the newly moved node. This will reset the BST structure below that node. 
       * */
  
      else 
      {
          let minimumSubTreeNode = findMinimumValue(root.right);
          root.val = minimumSubTreeNode.val;
          root.right = deleteNode(root.right, minimumSubTreeNode.val)
      }
  }

  return root;
};

/**
 * Solution Notes:
 */