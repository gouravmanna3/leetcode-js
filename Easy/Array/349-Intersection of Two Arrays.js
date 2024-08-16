/*

  Given two integer arrays nums1 and nums2, return an array of their intersection. 
  Each element in the result must be unique and you may return the result in any order.

  Example 1:
  Input: nums1 = [1,2,2,1], nums2 = [2,2]
  Output: [2]


*/

var intersection = function (nums1, nums2) {
  const setA = new Set(nums1);
  const setB = new Set(nums2);

  const intersectionArray = [...setA].filter((item) => setB.has(item));

  return intersectionArray;
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
