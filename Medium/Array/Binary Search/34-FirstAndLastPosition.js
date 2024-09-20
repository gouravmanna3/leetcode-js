/*

  Given an array of integers nums sorted in non-decreasing order, 
  find the starting and ending position of a given target value.
  If target is not found in the array, return [-1, -1].
  You must write an algorithm with O(log n) runtime complexity.

  Example 1:
  Input: nums = [5,7,7,8,8,10], target = 8
  Output: [3,4]

*/

var searchRange = function (nums, target) {
  function findIndex(nums, target, direction) {
    let left = 0;
    let right = num.length - 1;
    let index = -1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (nums[mid] == target) {
        index = mid;
        if (direction == "left") right = mid - 1;
        if (direction == "right") left = mid + 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return index;
  }

  const leftIndex = findIndex(nums, target, "left");
  const rightIndex = findIndex(nums, target, "right");

  return [leftIndex, rightIndex];
};

console.log(searchRange([5, 7, 7, 8, 8, 10]));
