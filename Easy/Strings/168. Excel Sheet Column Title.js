/* Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
 
  Input: columnNumber = 28
  Output: "AB"
*/

var convertToTitle = function (columnNumber) {
  let result = "";
  while (columnNumber > 0) {
    columnNumber = columnNumber - 1;

    const rem = columnNumber % 26;

    result = String.fromCharCode(rem + 65) + result;
    columnNumber = Math.floor(columnNumber / 26);
  }
  return result;
};

console.log(convertToTitle(28));
