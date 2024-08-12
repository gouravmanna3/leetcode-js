var addBinary = function (a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let result = "";
  let carry = 0;

  // loop until the first index or carry is not 0
  while (i >= 0 || j >= 0 || carry != 0) {
    let x = 0,
      y = 0;
    if (i >= 0 && a[i] == "1") x = 1; // convert binary string to integer number

    if (j >= 0 && b[j] == "1") y = 1;

    result = ((x + y + carry) % 2).toString() + result; // modulus 2 gives sum

    carry = Math.floor((x + y + carry) / 2); // divide by 2 gives carry

    i--;
    j--;
  }

  return result;
};

console.log(addBinary("1010", "1011"));
