var Node = function(preference) {
  this.preference = preference;
  this.next = null;
}
var Queue = function() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

Queue.prototype.enqueue = function(preference) {
  const newNode = new Node(preference)

  if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
  } else {
      this.tail.next = newNode;
      this.tail = newNode;
  }
  this.length += 1;
}

Queue.prototype.dequeue = function() {
  this.head = this.head.next;
  this.length -= 1;
}

/**
* @param {number[]} students
* @param {number[]} sandwiches
* @return {number}
*/
var countStudents = function(students, sandwiches) {
  const queue = new Queue();

  for (let i = 0; i < students.length; i++) {
      queue.enqueue(students[i]);
  }

  let counter = 0;
  let currentSandwichIndex = 0;

  while (counter < queue.length) {
      if (sandwiches[currentSandwichIndex] === queue.head.preference) {
          counter = 0;
          currentSandwichIndex += 1;
          queue.dequeue();
      } else {
          counter += 1;
          queue.enqueue(queue.head.preference)
          queue.dequeue();
      }
  }

  return counter
};