/*
  You are given the heads of two sorted linked lists list1 and list2.
  Merge the two lists into one sorted list. 
  The list should be made by splicing together the nodes of the first two lists.
  Return the head of the merged linked list.

  Input: list1 = [1,2,4], list2 = [1,3,4]
  Output: [1,1,2,3,4,4]

*/

var mergeTwoLists = function (list1, list2) {
  // Create a dummy node to serve as the start of the merged list
  let dummy = new ListNode(0);
  let curr = dummy;

  let p1 = list1;
  let p2 = list2;

  // Iterate through both lists
  while (p1 !== null && p2 !== null) {
    if (p1.val < p2.val) {
      curr.next = p1;
      p1 = p1.next;
    } else {
      curr.next = p2;
      p2 = p2.next;
    }
    curr = curr.next;
  }

  // If there are remaining nodes in list1 or list2, attach them
  if (p1 !== null) curr.next = p1;
  else if (p2 !== null) curr.next = p2;

  return dummy.next;
};
