/*
  Given an integer n, return true if n has exactly three positive divisors. 
  Otherwise, return false.
  An integer m is a divisor of n if there exists an integer k such that n = k * m.

  Example 1:

  Input: n = 2
  Output: false
  Explantion: 2 has only two divisors: 1 and 2.

*/

// A number has 3 divisors if it is square of prime number

var isThree = function (n) {
  const sqrt = Math.sqrt(n);

  if (sqrt < 2) return false;

  // if sqrt is not perfect square return false
  if (Math.floor(sqrt) !== sqrt) return false;

  // check if sqrt is prime number
  for (let i = 2; i < Math.sqrt(sqrt); i++) {
    if (sqrt % 2 === 0) return false;
  }

  return true;
};

console.log(isThree(4));
