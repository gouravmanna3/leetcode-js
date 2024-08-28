function majorityElement(nums) {
  let candidate = null;
  let count = 0;

  // Iterate through the array to find the candidate
  for (let num of nums) {
    if (count === 0) {
      candidate = num; // Set the current number as candidate
    }

    // Simplified logic to adjust the count
    if (num === candidate) {
      count += 1;
    } else {
      count -= 1;
    }
  }

  // Return the candidate, which is the majority element
  return candidate;
}

console.log(majorityElement([2, 2, 1, 1, 1, 3, 2, 2, 2]));
