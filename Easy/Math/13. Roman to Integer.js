/*
  Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 
12 is written as XII, which is simply X + II. 
The number 27 is written as XXVII, which is XX + V + II.

Given a roman numeral, convert it to an integer.

Example: 
  Input: s = "III"
  Output: 3
  Explanation: III = 3.

*/

function romanToInt(s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    // Get the value of the current Roman numeral symbol
    const current = map[s[i]];
    // Get the value of the next Roman numeral symbol (if it exists)
    const next = map[s[i + 1]];

    // If the current value is less than the next value, subtract it (for cases like IV, IX)
    if (current < next) {
      result = result - current;
    } else {
      // Otherwise, add it to the result
      result = result + current;
    }
  }

  return result;
}

console.log(romanToInt("IV"));
