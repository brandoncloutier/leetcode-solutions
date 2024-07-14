/**
 * Solution 1: Using a queue
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root === null || root.length <= 0) return [];

  const queue = [root];
  const output = [];
  let currLevel = [];

  let head = 0;
  while (head < queue.length) {

      for (let i = head; i < queue.length; i++) {
          currLevel.push(queue[i].val);
      }

      let start = head;
      let queueLength = queue.length;

      for (let i = start; i < queueLength; i++) {
          if (queue[i].left) queue.push(queue[i].left);
          if (queue[i].right) queue.push(queue[i].right);
          head++;
      }

      output.push(currLevel);
      currLevel = [];
  }

  return output;
};

/**
 * Solution Notes: 
 * In this question we are asked to return an array where each element represents a level in a BST. To do this I created a queue
 * and for each node in each level I added its descendents to the queue. I also created an array to group those levels together and
 * pushed those to the output array.
 */