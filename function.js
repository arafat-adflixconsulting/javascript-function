/* Function parameter and call with dynamically (Hard Code)*/

function data(data1, data2) {
  let sum = data1 + data2;
  //   console.log(sum);
}
data(121, 141);
data(1, 5);
data(10, 20);

/* function parameter & argument via varibale */

function age(father, son) {
  let difference = father - son;
  //   console.log(father, son, "Different between :", difference);
}

let fAge = 50;
let sAge = 15;
age(fAge, sAge);

/* * * * *  *    FUNCTION AND RETURN  * * *  * */

function amount(tk) {
  //   let total = tk * 10;
  //   return total;
  return tk * 10; //direct return without declare variable
}

amount(30);
let result = amount(30); //store in a varibale
// console.log("output :", result);

/* * * * *  *    ODD-EVEN FUNCTION AND RETURN WITH CONDITION  * * *  * */

function numType(number) {
  if (number % 2 === 0) {
    return "This is even";
  } else {
    return "This is odd";
  }
}
// console.log(numType(99));
// console.log(numType(40));
// console.log(numType(185));
// console.log(numType(170));
// console.log(numType(246));

/* * * * *  *  Sum of numbers of an array using function  * * * * 

* Array created
* function has written
* function name ("sumOfNumbers") and parameter("numbers") is added 
* Argument added in stored into a variable ("arrayNums")
* For loop strated with length
* sum variable declared with (0) value
* return the sum outside of function because we need the total of array numbers
* finally printed the sum
*/

function sumOfNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}

let array = [10, 45, 55, 121, 522];
let arrayNums = sumOfNumbers(array);
// console.log("Sum of numbers is :", sum);
// console.log("Sum of numbers is :", arrayNums);

/* * * * *  *  Sum of the even numbers of an array using function  * * * */

function sumOfeven(data) {
  let evevSum = 0;
  for (let value of data) {
    if (value % 2 === 0) {
      // console.log(value);
      evevSum = evevSum + value;
    }
  }
  // console.log("The sum of even numbers is :", evevSum);
  return evevSum;
}

let arrayData = [10, 15, 22, 37, 28, 33, 45, 55, 66];
let numbsOfArray = sumOfeven(arrayData);
// console.log(numbsOfArray);

/* LEAP YEAR CHECKING WITH FUNCTION */

function isLeapYear(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}
let checkYear = isLeapYear(2038);
console.log(checkYear);

/* REMOVE DUPLICATE ELEMENT FROM ARRAY */
// use function
// use includes of condition
// use if condition
// make a the return

function noDuplicate(array) {
  let unique = [];
  for (let item of array) {
    if (unique.includes(item) === false) {
      // jodi value ti unique array te na thake taole push hobe.
      unique.push(item);
    }
  }
  return unique;
}

let dupArray = ["abul", "babul", "cabul", "dabul", "kabul", "abul", "dabul"];
let names = noDuplicate(dupArray);
console.log(names);
