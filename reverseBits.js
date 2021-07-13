// Reverse bits of a given 32 bits unsigned integer.

// Example 1:

// Input: n = 00000010100101000001111010011100
// Output:    964176192 (00111001011110000010100101000000)
// Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.
// Example 2:

// Input: n = 11111111111111111111111111111101
// Output:   3221225471 (10111111111111111111111111111111)
// Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.

//parseInt(binary, 2)
//console.log(parseInt('001000', 2));


var reverseBits = function(n) {
  let stringN = n.toString();
  console.log('first', stringN);



  //stringN = stringN.padEnd(32, '0');
  //console.log('after padEnd', stringN);
  let reversed = '';
  for (let element of stringN) {
    reversed = element.concat(reversed);
    }
  let value = parseInt(reversed, 2);
  let result = value.toString() + ` (${reversed})`;
  console.log(result);
  return result
};

reverseBits(1000);