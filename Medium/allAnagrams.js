function findAnagrams(s, p) {
  let pMap = new Map();
  let sMap = new Map();
  let result = [];

  // create Map for pattern string
  for (let char of p) {
    pMap.set(char, (pMap.get(char) || 0) + 1);
  }

  // Initialization of first window
  // check for anagram with first ${p.length} char in s (here first 3 char in s)
  for (let i = 0; i < p.length; i++) {
    sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
  }

  if (isEqual(sMap, pMap)) result.push(0);

  // In each loop we get new window
  for (let i = p.length; i < s.length; i++) {
    // Add the new char to the window
    sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);

    // Remove the left most character from the window
    let left = s[i - p.length];
    if (sMap.get(left) === 1) {
      sMap.delete(left);
    } else {
      sMap.set(left, sMap.get(left) - 1);
    }

    if (isEqual(sMap, pMap)) {
      result.push(i - p.length + 1);
    }
  }

  return result;
}

// function to check if 2 Maps are equal
function isEqual(mapA, mapB) {
  if (mapA.size !== mapB.size) return false;
  for (let [key, value] of mapA) {
    if (value !== mapB.get(key)) return false;
  }
  return true;
}

let s = "cbaebabacd";
let p = "abc";
console.log(findAnagrams(s, p));
