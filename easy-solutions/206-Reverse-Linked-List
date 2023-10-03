/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let current = head;
    let last = null;

    while (current != null) {
        const next = current.next; 
        current.next = last;
        last = current;
        current = next;
    }

    return last;
};

/**
 * REVERSING USING RECURSION
 */
/**
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseNodePointer = function(prev, node) {
    if (!node.next) {
        node.next = prev;
        return node;
    }
    let tail = reverseNodePointer(node, node.next)
    node.next = prev;
    return tail;
}

var reverseList = function(head) {
    if (!head) {
        return head
    }
    const newHead = reverseNodePointer(null, head);
    return newHead
};
