/**
 * SOLUTION 1
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const closingChar = { ")": "(", "]": "[", "}": "{" };

    for (let i = 0; i < s.length; i++) {
        if (closingChar[s[i]]) {
            if (stack.length > 0 && stack[stack.length - 1] === closingChar[s[i]]) {
                stack.pop();
            }
            else {
                return false;
            }
        } else {
            stack.push(s[i]);
        }
    }

    if (stack.length > 0) {
        return false;
    }

    return true;
};

/**
 * Q: we are given an array of character 's' that contain open and closing 
 * parenthesis, square brackets and curly braces. They want us to return true
 * if it is a valid sequence of open to close. What we can use here is a
 * stack to make sure that every open braces is closed and we can also check
 * if there were any close braces that were never opened.
 */