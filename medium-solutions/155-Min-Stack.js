
var MinStack = function() {
    this.stack = [];
    this.minimumStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if (this.minimumStack.length === 0) {
        this.minimumStack.push(val);
    } else if (val <= this.minimumStack[this.minimumStack.length - 1]) {
        this.minimumStack.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.stack[this.stack.length - 1] === this.minimumStack[this.minimumStack.length - 1]) {
        this.stack.pop();
        this.minimumStack.pop();
    } else {
        this.stack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minimumStack[this.minimumStack.length - 1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
