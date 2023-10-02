var NewNode = function(val) {
  this.val = val;
  this.next = null;
}
var MyLinkedList = function() {
  this.head = null;
  this.length = 0;
};

/** 
* @param {number} index
* @return {number}
*/
MyLinkedList.prototype.get = function(index) {
  if (index >= this.length) {
      return -1;
  }

  let currNode = this.head;
  for (let i = 0; i < index; i++) {
      currNode = currNode.next;
  }
  return currNode.val;
};

/** 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtHead = function(val) {
  const newNode = new NewNode(val);

  newNode.next = this.head;
  this.head = newNode;
  this.length += 1;
};

/** 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtTail = function(val) {
  if (this.length === 0) {
      return this.addAtHead(val)
  }

  let currNode = this.head;
  while(currNode.next) {
      currNode = currNode.next;
  }

  const newNode = new NewNode(val);
  currNode.next = newNode;
  this.length += 1;
};

/** 
* @param {number} index 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index === 0) {
      return this.addAtHead(val)
  }

  if (index === this.length) {
      return this.addAtTail(val);
  }

  if (index > this.length) {
      return
  }

  let prev = null;
  let currNode = this.head;

  for (let i = 0; i < index; i++) {
      prev = currNode;
      currNode = currNode.next;
  }

  const newNode = new NewNode(val);
  prev.next = newNode;
  newNode.next = currNode;
  this.length += 1
};

/** 
* @param {number} index
* @return {void}
*/
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index >= this.length) {
      return;
  }

  if (index === 0) {
      this.head = this.head.next;
      this.length -= 1;
      return
  }
  let prev = null;
  let currNode = this.head;

  for (let i = 0; i < index; i++) {
      prev = currNode;
      currNode = currNode.next;
  }

  prev.next = currNode.next;
  this.length -= 1;
};

/** 
* Your MyLinkedList object will be instantiated and called as such:
* var obj = new MyLinkedList()
* var param_1 = obj.get(index)
* obj.addAtHead(val)
* obj.addAtTail(val)
* obj.addAtIndex(index,val)
* obj.deleteAtIndex(index)
*/