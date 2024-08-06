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