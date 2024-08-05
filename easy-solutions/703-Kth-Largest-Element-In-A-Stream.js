/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.k = k
  this.minHeap = new MinPriorityQueue();

  nums.forEach(num => this.add(num))
};

/** 
* @param {number} val
* @return {number}
*/
KthLargest.prototype.add = function(val) {
  // If the value that we are adding is greater than the top of the minheap then we are going to add it
  if (this.minHeap.size() < this.k) {
      this.minHeap.enqueue(val)

      return this.minHeap.front().element
  }

  if (val > this.minHeap.front().element) {
      this.minHeap.dequeue()
      this.minHeap.enqueue(val)
  } 

  return this.minHeap.front().element
};

/** 
* Your KthLargest object will be instantiated and called as such:
* var obj = new KthLargest(k, nums)
* var param_1 = obj.add(val)
*/

/**
 * Solution Notes:
 * In this problem we are looking for a way to always find the kth largest element in a stream of numbers that are being given.
 * How we can achieve this is to use a minHeap. This is because a minHeap can always give us the lowest number of a given sum of 
 * numbers. What we can do is we have a min heap that has a maximum size of k. This would mean that the lowest number will always be at
 * the top and that is the number that we want. We dont really care about the othe numbers below it in the tree because those dont really matter
 * We will use the add and remove properties of the minheap to keep these attributes valid. In the add function of the class we are going to make it
 * so if the minheap isnt full yet to size k we will add the value to the minheap and return the top. If the minheap is full then we will
 * see if the top value or the "lowest value" is less than or greater to the value we are adding. If it is less than then we know that there is going to
 * be a new number that is the kth largest value so we much remove it from the top. You do this by dequeuing the top value from the minHeap.
 * An algorithm will run that will reestablish the structure of the min heap. We will then add the new value to the minHeap and it will reevaluate which value 
 * should be at the top of the minHeap. We will then return the top of the minHeap
 */