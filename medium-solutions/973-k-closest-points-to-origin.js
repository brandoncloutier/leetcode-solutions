/**
 * MIN HEAP IMPLEMENTATION
 */
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
  // Origin x2 = 0 y2 = 0
  // Create ouput array
  const output = []

  // Create Minheap
  const minHeap = new MinPriorityQueue()

  points.forEach(point => minHeap.enqueue(point, Math.sqrt((point[0] * point[0]) + (point[1] * point[1]))))
  // Heapify
  // Pop the kth number of elements from the top of the heap and push it to the points to the output array. 

  for (let i = 0; i < k; i++) {
      output.push(minHeap.dequeue().element)
  }

  return output
};

/**
 * Solution Notes: 
 * In this question we are given points in a grid and we want to find the k closest elements from the origin.
 * First I was thinking okay I can use a minHeap and I could add all the values in the array to the min heap and the priority
 * would be calculated by finding the distance from the point to the origin. I would then enqueue kth number of elements from the heap
 * and push those to an ouput array. I would then return the ouput array.
 */

/**
 * MAX HEAP IMPLEMENTATION
 */
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
  /**
   * Comments: We want to create a MaxHeap and iterate through the points array and compare the distance to the top element. If it is less
   * then, then we want to dequeue the top element and add the new element. If the MaxHeap is underCapacity then we will just add the element.
   * Pretty much the top element is the bound between the k closest elements to the origin and the other elements.
   */
  const maxHeap = new MaxPriorityQueue()

  points.forEach(point => {
      const priority = Math.round(Math.sqrt((point[0] * point[0]) + (point[1] * point[1])) * 10 * 10 * 10 * 10)

      if (maxHeap.size() < k) {
          maxHeap.enqueue(point, priority)
          return
      }

      if (priority < maxHeap.front().priority) {
          maxHeap.dequeue()
          maxHeap.enqueue(point, priority)
      }
  })

  return maxHeap.toArray().map(i => i.element)
};

/**
 * Solution Notes:
 * In this solution I decided to use a maxheap of a fixed size k. A MaxHeap is used when you want to be able to see the larget priority element
 * in the datastructure in O(1) time. This works for this solution because I want to keep a group of k number of elements and only need to check the largest element in the group.
 * We will then iterate through all the points and compare it to the largest. If it is smaller than the largest then we will replace the new point with the top element.
 * The time complexity of dequeuing from a MaxHeap is O(logn) and enqueuing is O(logn). What is nice about this solution is we get to skip some of the values in
 * the inputed array. Worst case we would get a O(nlogn + klogn). In the best case we will get a O(2klogn) 
 */