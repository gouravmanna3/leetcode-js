/*
  Given an integer array nums of length n and an integer target, 
  find three integers in nums such that the sum is closest to target.
  Return the sum of the three integers.
  You may assume that each input would have exactly one solution.

  Example 1:

  Input: nums = [-1,2,1,-4], target = 1
  Output: 2
  Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

*/

var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let closetSum = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      // If the current sum is closer to the target, update the closest sum
      if (Math.abs(sum - target) < Math.abs(closetSum - target)) {
        closetSum = sum;
        8;
      }

      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closetSum;
};
