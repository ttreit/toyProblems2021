// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

// Example 1:

// Input: x = 121
// Output: true
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Example 4:

// Input: x = -101
// Output: false

//edge cases: single numbers, zero, negatives

const palindromeNumber = function (number) {
  //negatives cannot be palindromes so throw them out from the beginning

  if (number < 0) {
    return false;
  }

  // convert number to string

  const getNumber = function(number) {
    let result = [];
    let digit = 0;
    while (number > 0) {
      digit = number % 10;
      result.push(digit);
      number = (number - digit) /10;
    }
    return result;
  };

  let numberArray = getNumber(number);

  // put pointers at beginning and end of string

  let frontPointer = 0;
  let endPointer = numberArray.length - 1;

  // loop through string

  //need to optimize next line should be able to stop when pointers meet in the middle
  //length / 2 floor
  while (frontPointer !== Math.floor(numberArray.length / 2) ) {
    // if pointer's values are not equal exit loop and return false
    if (numberArray[frontPointer] !== numberArray[endPointer]) {
      return false;
    } else {
      frontPointer += 1;
      endPointer -= 1;
    }
  }
  return true;


};

console.log(palindromeNumber(123454321));
