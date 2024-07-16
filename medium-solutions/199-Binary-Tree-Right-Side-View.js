/**
 * Solution 1: BFS
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
 * @return {number[]}
 */
var rightSideView = function(root) {
  if (root === null) return []

  const queue = [root];
  const output = []
  let head = 0;

  while (head < queue.length) {
      const currentHead = head;
      const currentLength = queue.length;

      for (let i = currentHead; i < currentLength; i++) {
          if (queue[i].left) queue.push(queue[i].left)
          if (queue[i].right) queue.push(queue[i].right)
          if (i === currentLength - 1) output.push(queue[i].val);
          head++;
      }
  }

  return output;
};

/**
 * Solution 1 Notes:
 * In this solution we are using BFS to do a level traversal. Then we are checking if it is the last 
 * element in the level then we push that to the output. In this solution we are checking the if statement at every node
 * which I can see being less efficient so I want to check it at the end of every level traversal.
 */