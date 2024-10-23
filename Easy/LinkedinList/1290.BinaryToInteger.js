/*
  Given head which is a reference node to a singly-linked list. 
  The value of each node in the linked list is either 0 or 1.
  The linked list holds the binary representation of a number.
  Return the decimal value of the number in the linked list.
  The most significant bit is at the head of the linked list.

*/

var getDecimalValue = function (head) {
  let num = 0;

  while (head !== null) {
    num = (num << 1) | head.val; // left shift by 1 and OR with head.val which is  multiple by 2 and add head.val
    head = head.next;
  }

  return head;
};
