//Task-1:
/* Write a function to convert temperature from Celsius to Fahrenheit. */

let celTemp = 45;
let celToFahren = convert(celTemp);

function convert(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

// console.log(celToFahren);

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

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

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
// Task-3:
/* Write a function to count the number of vowels in a string. */

function vowels(context) {
  let count = "";
  let vowelList = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < context.length; i++) {
    if (vowelList.includes(context[i].toLowerCase())) count++;
  }
  return count;
}

let text = "equipment";
let quantityOfVowels = vowels(text);
// console.log(quantityOfVowels);

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/* Task-4:
 * Write a function to find the longest word in a given string.
 * sample-input: I am learning Programming to become a programmer
 * sample-output: Programming
 */

function findLongestWord(sentence) {
  let words = sentence.split(" "); // বাক্যকে স্পেস দিয়ে ভাগ করা
  let longest = words[0]; // প্রথম শব্দটাকে ধরা

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i]; // বড় শব্দ পেলে সেটাকে longest এ রাখবো
    }
  }

  return longest;
}

let mainText = "I am learning Programming to become a programmer";
console.log(findLongestWord(mainText)); // Output: Programming
