/* 
  Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
  You must implement a solution with a linear runtime complexity and use only constant extra space.

  Example 1:

  Input: nums = [2,2,1]
  Output: 1
*/

var singleNumber = function (nums) {
  let uniqueElement = 0;
  for (let i = 0; i < nums.length; i++) {
    uniqueElement = uniqueElement ^ nums[i];
  }

  return uniqueElement;
};

console.log(singleNumber([2, 2, 1]));
