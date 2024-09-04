/*

  Given two strings s and t, return true if t is an anagram of s, and false otherwise.

  Example 1:
  Input: s = "anagram", t = "nagaram"
  Output: true

*/

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let charCount = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    charCount[s.charCodeAt(i) - 97]++;
    charCount[t.charCodeAt(i) - 97]--;
  }

  for (let count of charCount) {
    if (count !== 0) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram("anagram", "nagaram"));
