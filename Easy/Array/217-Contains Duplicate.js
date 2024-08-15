/*
  Given an integer array nums, return true if any value appears at least twice in the array, 
  and return false if every element is distinct.

  Input: nums = [1,2,3,1]
  Output: true
*/

var containsDuplicate = function (nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i]) !== undefined) {
      return true;
    }

    map.set(nums[i], i);
  }
  return false;
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
