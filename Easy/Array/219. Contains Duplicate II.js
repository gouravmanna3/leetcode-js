/*
  Given an integer array nums and an integer k, 
  return true if there are two distinct indices i and j in the array 
  such that nums[i] == nums[j] and abs(i - j) <= k.

  Input: nums = [1,2,3,1], k = 3
  Output: true

  Input: nums = [1,2,3,1,2,3], k = 2
  Output: false
*/

var containsNearbyDuplicate = function (nums, k) {
  const indexMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (indexMap.has(num)) {
      const prevIndex = indexMap.get(num);
      if (i - prevIndex <= k) {
        return true;
      }
    }

    indexMap.set(num, i);
  }

  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
