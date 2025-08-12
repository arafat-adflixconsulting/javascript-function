//Task-1:
/* Write a function to convert temperature from Celsius to Fahrenheit. */

let celTemp = 45;
let celToFahren = convert(celTemp);

function convert(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

// console.log(celToFahren);

//Task-2:
/* You are given an array of numbers. Count how many times the a number is repeated in the array. */

// sample-input: numbers = [5,6,11,12,98, 5]
// find: 5
// output: 2

// sample-input: numbers = [5,6,11,12,98, 5]
// find: 25
// output: 0

function repeateTime(numbers, find) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === find) {
      count++;
    }
  }
  return count;
}
let arrayNumbers = [5, 6, 11, 12, 98, 5];
let checkNumber = repeateTime(arrayNumbers, 5);
// console.log(checkNumber);
