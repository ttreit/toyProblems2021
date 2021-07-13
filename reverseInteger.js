//leetcode #7 REVERSE INTEGER

//input: integer between -2147483648 to 2147483647
//output: input with it's digits reversed

//EXAMPLES\\
// input: 123
//output: 321

//input: -123
//output: -321

//create function

let reverse = function(number) {
  let sign = null;
  let lastDigit = null;
  let numberAsString = '';

  //Determine if integer is negative
  if (number < 0) {
    //store negative or positive
    sign = -1;
  } else {
    sign = 1;
  }

  //deal with zero
  if (number === 0) {
    console.log('special case: original number was 0')
    console.log(0);
    return 0;
  }
  //get the absolute value of the number
  console.log('original number', number)
  number = Math.abs(number);

  //extract digits
  while (number > 0) {
    lastDigit = number % 10;
    numberAsString = numberAsString.concat(lastDigit.toString());
    number = (number - lastDigit) /10;
  }

  //calculate result
  let result = parseInt(numberAsString) * sign;

  if (result < -2147483648 || result > 2147483647) {
    console.log('Special Case: Out of range', 0);
    return 0;
  }

  console.log('reversed number', result);
  return result;

};

reverse(123);


