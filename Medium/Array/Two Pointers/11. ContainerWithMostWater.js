/*

  You are given an integer array height of length n. 
  There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
  Find two lines that together with the x-axis form a container, such that the container contains the most water.
  Return the maximum amount of water a container can store.

*/

var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let res = 0;

  while (left < right) {
    area = Math.min(height[left], height[right]) * (right - left);
    res = Math.max(res, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return res;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
