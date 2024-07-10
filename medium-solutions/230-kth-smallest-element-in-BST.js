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
 * @param {number} k
 * @return {number}
 */
var traverse = function(root, arr) {
  if (root === null) return;

  if (root.left) traverse(root.left, arr);

  arr.push(root.val);

  if (root.right) traverse(root.right, arr);
}
var kthSmallest = function(root, k) {
  const outputArr = [];

  traverse(root, outputArr);

  return outputArr[k - 1]
};

/**
 * Solution Notes:
 * In this problem we are asked to get the kth smallest element in the BST. My initial thought was to iterate through the
 * BST and increment a counter once we start traversing back up through the tree. Once this counter hits k then we know we found
 * the value. However one issue that I found was sending this value back up through the tree. I found it very difficult and I would
 * need some sort of global variable however I read online that this is not ideal. So I looked at the description and people said that
 * you should create an array and return the k - 1 element. My first thought was dang isnt it gonna take O(N) time complexity
 * to do this because we need to traverse the entire array. That is correct however it is a very simple solution. I also read in the editorial
 * that you can use a stack to save elements that we have traversed and then decrement k until it hits zero knowing that we have found the element.
 * This looked like a complicated solution but im going to look into it. This solution allows for a O(N + k) for the wrost time complexity and 
 * O(logn + k) for the best time complexity.
 */