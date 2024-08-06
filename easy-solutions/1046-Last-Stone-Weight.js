/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  // Heapify
  const heap = new MaxPriorityQueue()

  stones.forEach(stone => heap.enqueue(stone))

  // while length of heap is > 1.
  while (heap.size() > 1) {
      const y = heap.dequeue().element
      const x = heap.dequeue().element

      if (x != y) {
          heap.enqueue(y - x)
      }
  }
  // if heap length == 0 return 0
  if (heap.size()) return heap.front().element

  return 0
  // if heap length == 1 return value of top
};

/**
 * Solution Notes: 
 * This question is asking for us to go through an array of integers where each integer is the weight of a stone.
 * I want to take the two largest stones and clash them together. If they are the same weight then both of them are
 * destroyed. If one weighs more than the other the larger one loses the weight equivelent to the weight of the lighter stone.
 * My first intuition was to use a MaxHeap. This is because we can receive the largest value at O(1) time complexity. What I can do is 
 * remove the top two elements and if the weight is different then I would add the difference of those values back into the heap. This
 * ensures the structure and order of the heap is conserved. 
 */