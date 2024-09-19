/*
  Given a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers, 
  return the list of integers that are present in each array of nums sorted in ascending order.
  
  Example 1:
  Input: nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]
  Output: [3,4]

*/

var intersection = function (nums) {
  if (nums.length === 0) return [];

  let commonElements = new Set(nums[0]);

  for (let i = 1; i < nums.length; i++) {
    let currentSet = new Set(nums[i]);

    commonElements = new Set(
      [...commonElements].filter((num) => currentSet.has(num))
    );
  }

  return Array.from(commonElements).sort((a, b) => a - b);
};

console.log(
  intersection([
    [3, 1, 2, 4, 5],
    [1, 2, 3, 4],
    [3, 4, 5, 6],
  ])
);
