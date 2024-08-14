/* 
  Given a non-negative integer x, return the square root of x rounded down to the nearest integer. 
  The returned integer should be non-negative as well. 

  Input: x = 8
  Output: 2

*/

var mySqrt = function (x) {
  if (x < 2) return x;
  let left = 2;
  let right = Math.floor(x / 2);

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    let num = mid * mid;
    if (num < x) {
      left = mid + 1;
    } else if (num > x) {
      right = mid - 1;
    } else return mid;
  }

  return right;
};

console.log(mySqrt(8));
