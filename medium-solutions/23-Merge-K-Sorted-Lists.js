/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  const sentinel = tail = new ListNode()

  while (list1 && list2) {
      if (list1.val <= list2.val) {
          tail.next = list1;
          tail = tail.next;
          list1 = list1.next;
      } else {
          tail.next = list2;
          tail = tail.next;
          list2 = list2.next;
      }
  }

  if (list1) {
      tail.next = list1;
  } else {
      tail.next = list2;
  }

  return sentinel.next;
}
var mergeKLists = function(lists) {
  if (lists.length === 0 || !lists) return null;

  while(lists.length > 1) {
      const mergedList = [];

      for (let i = 0; i < lists.length; i += 2) {
          const list1 = lists[i];
          const list2 = lists[i + 1] ? lists[i + 1] : null
          mergedList.push(mergeTwoLists(list1, list2))
      }

      lists = mergedList;
  }

  return lists[0];
};

/**
 * Solution notes:
 * What we are doing here is we are merging two subarrays at a time until we reduce it until we have one array. 
 */