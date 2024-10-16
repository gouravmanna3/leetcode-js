/* 
  There is an integer array nums sorted in ascending order.
  Given the array nums after the possible rotation and an integer target, 
  return the index of target if it is in nums, or -1 if it is not in nums.

  Input: nums = [4,5,6,7,0,1,2], target = 0
  Output: 4

*/

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // check if the left half is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1; // target is in the left half
      } else {
        left = mid + 1; // target is in the right half
      }
    } else {
      // else right half must be sorted
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1; // target is in the right half
      } else {
        right = mid - 1; // target is in the left half
      }
    }
  }

  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
