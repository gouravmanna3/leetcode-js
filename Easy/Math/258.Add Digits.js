/*
  Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

  Example 1:

  Input: num = 38
  Output: 2
  Explanation: The process is
  38 --> 3 + 8 --> 11
  11 --> 1 + 1 --> 2 
  Since 2 has only one digit, return it.

*/

var addDigits = function (num) {
  if (num <= 9) return num;
  if (num % 9 == 0) return 9;

  return num % 9; // modulus of 9 gives the sum of the digits
};

console.log(addDigits(38));
