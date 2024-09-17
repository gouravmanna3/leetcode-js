/*

  Given the head of a singly linked list, return true if it is a  palindrome or false otherwise.

*/

var isPalindrome = function (head) {
  let stack = [];
  let curr = head;

  while (curr !== null) {
    stack.push(curr.val);
    curr = curr.next;
  }

  while (head !== null) {
    if (head.val !== stack.pop()) return false;
    head = head.next;
  }

  return true;
};
