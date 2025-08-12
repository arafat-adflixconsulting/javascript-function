/* What is the biggest value */

function biggest(input1, input2, input3) {
  if (input1 > input2 && input1 > input3) {
    return input1;
  } else if (input2 > input1 && input2 > input3) {
    return input2;
  }
  return input3;
}

// let x = 101;
// let y = 299;
// let z = 98;

let value = biggest(150, 99, 217);
// console.log("The biggest value is : " + value);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - -- - - - - - - - -*/
/*
 * What is the biggest number
 * numbers = [10, 25, 35, 47, 17, 21, 33]
 */

function big(numbers) {
  let max = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

let totalNumbers = [10, 25, 35, 47, 17, 21, 33];
let num = big(totalNumbers);
console.log(num);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - -- - - - - - - - -*/
/*
 * What is the lowest number
 * numbers = [10, 25, 35, 47, 17, 21, 5]
 */

function small(numbers) {
  let min = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
}

let allNumbers = [10, 25, 35, 4, 17, 21, 5];
let numb = small(allNumbers);
console.log(numb);
