/*
  Write a function to find the longest common prefix string 
  amongst an array of strings.
  If there is no common prefix, return an empty string "".

  Example 1:

  Input: strs = ["flower","flow","flight"]
  Output: "fl"

*/

var longestCommonPrefix = function (strs) {
  let result = "";

  for (let i = 0; i < strs[0].length; i++) {
    for (const str of strs) {
      if (i === str.length || strs[0][i] !== str[i]) {
        return result;
      }
    }
    result = result + strs[0][i];
  }

  return result;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
