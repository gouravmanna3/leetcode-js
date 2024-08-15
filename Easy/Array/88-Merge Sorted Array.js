/*
  You are given two integer arrays nums1 and nums2, 
  sorted in non-decreasing order, and two integers m and n, 
  representing the number of elements in nums1 and nums2 respectively.

  Merge nums1 and nums2 into a single array sorted in non-decreasing order.
  The final sorted array should not be returned by the function, 
  but instead be stored inside the array nums1.

  Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
  Output: [1,2,2,3,5,6]

*/

var merge = function (nums1, m, nums2, n) {
  let a = m - 1;
  let b = n - 1;
  let c = m + n - 1;

  while (b >= 0) {
    if (nums1[a] > nums2[b]) {
      nums1[c] = nums1[a];
      a--;
    } else {
      nums1[c] = nums2[b];
      b--;
    }
    c--;
  }

  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
