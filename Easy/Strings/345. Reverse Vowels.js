/*
  Given a string s, reverse only all the vowels in the string and return it.
  The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

  Example 1:

  Input: s = "hello"
  Output: "holle"

*/

var reverseVowels = function (s) {
  let left = 0;
  let right = s.length - 1;
  let arr = s.split("");
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  while (left < right) {
    while (left < right && !vowels.has(arr[left])) {
      left++;
    }

    while (left < right && !vowels.has(arr[right])) {
      right--;
    }

    if (left < right) {
      let temp = arr[right];
      arr[right] = arr[left];
      arr[left] = temp;
      left++;
      right--;
    }
  }

  return arr.join("");
};

console.log(reverseVowels("hello"));
