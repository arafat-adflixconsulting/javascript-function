/* Task-1
 * Take four parameters. Multiply the four numbers and then return the result */

function fourNumbers(a, b, c, d) {
  return a * b * c * d;
}
let data = fourNumbers(10, 12, 33, 64);
// console.log(data);

/* Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result. */

function oddEven(number) {
  if (number % 2 !== 0) {
    let result = number * 2;
    // console.log("The odd number is:", number, "and result =", result);
    return result;
  } else if (number % 2 === 0) {
    let result = number / 2;
    // console.log("The even number is:", number, "and result =", result);
    return result;
  }
}

let actualNumber = oddEven(13);
// console.log("returnValue =", actualNumber);

/* Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values. */

let array = [10, 15, 20, 25, 30];
let quantity = array.length;
let arrayNumbs = make_avg(array, quantity);

function make_avg(param, size) {
  let sum = 0;
  for (let i = 0; i < size; i++) {
    sum = sum + param[i];
  }
  //   console.log(sum);
  let average = sum / size;
  return average;
}
// console.log(arrayNumbs);

/* Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string. */

/* Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd */
