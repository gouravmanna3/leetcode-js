/*
  You are given an integer array nums where the largest integer is unique.
  Determine whether the largest element in the array is at least twice as 
  much as every other number in the array. If it is, return the index 
  of the largest element, or return -1 otherwise.

  Example 1:
  Input: nums = [3,6,1,0]
  Output: 1

*/

var dominantIndex = function (nums) {
  let max = -Infinity;
  let secondMax = -Infinity;
  let maxIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      secondMax = max;
      max = nums[i];
      maxIndex = i;
    } else if (nums[i] > secondMax) {
      secondMax = nums[i];
    }
  }

  if (2 * secondMax <= max) {
    return maxIndex;
  } else {
    return -1;
  }
};

console.log(dominantIndex([1, 0]));
