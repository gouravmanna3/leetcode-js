// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]

function removeElement(nums, val) {
  let left = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[left] = nums[i];
      left++;
    }
  }

  return left;
}

const arr = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;
console.log(removeElement(arr, val));
