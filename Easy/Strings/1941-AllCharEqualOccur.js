/*
  Given a string s, return true if s is a good string, or false otherwise.
  A string s is good if all the characters that appear in s have the same 
  number of occurrences (i.e., the same frequency).

  Example 1:
  Input: s = "abacbc"
  Output: true
  Explanation: The characters that appear in s are 'a', 'b', and 'c'. 
  All characters occur 2 times in s.

*/

var areOccurrencesEqual = function (s) {
  let countMap = new Map();

  for (const char of s) {
    countMap.set(char, (countMap.get(char) || 0) + 1);
  }

  const freq = countMap.get(s[0]);

  for (let value of countMap.values()) {
    if (value !== freq) return false;
  }

  return true;
};

console.log(areOccurrencesEqual("abacbc"));
