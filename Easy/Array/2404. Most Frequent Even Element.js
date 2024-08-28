/*
  2404. Most Frequent Even Element

  Given an integer array nums, return the most frequent even element.
  If there is a tie, return the smallest one. If there is no such element, return -1.
  
  Example 1:
  Input: nums = [0,1,2,2,4,4,1]
  Output: 2
*/

var mostFrequentEven = function (nums) {
  let myMap = new Map();
  let frequentElement = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      myMap.set(nums[i], (myMap.get(nums[i]) || 0) + 1);
    }
  }

  if (myMap.size === 0) {
    return -1;
  }

  let maxFreq = 0;
  let smallestOne = -1;

  for (const [num, count] of myMap) {
    if (count > maxFreq || (count === maxFreq && num < smallestOne)) {
      maxFreq = count;
      smallestOne = num;
    }
  }

  return smallestOne;
};

console.log(mostFrequentEven([0, 1, 2, 2, 4, 4, 1]));
