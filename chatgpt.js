/* একটা ফাংশন লিখো sumOfEvenNumbers(arr) নামে, যেটা একটা সংখ্যার array নেবে এবং শুধু even (জোড়) সংখ্যাগুলোর যোগফল রিটার্ন করবে। */

function sumOfEvenNumbers(arr) {
  let sum = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      sum = sum + num;
    }
  }
  return sum;
}

// let array = [10, 12, 15, 29, 16, 20];
let array = [1, 2, 3, 4, 5, 6];
let result = sumOfEvenNumbers(array);
// console.log(result);

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* 
- একটা function লিখো — নাম হবে countOddNumbers(arr)
- Parameter: একটি array
- কাজ: array এর মধ্যে কয়টা odd সংখ্যা আছে সেটা গুনে return করবে 
*/

function countOddNumbers(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      total++;
    }
  }
  return total;
}

let num = [10, 15, 21, 35, 27, 29, 55, 66];
let count = countOddNumbers(num);
// console.log(count);

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/* একটা অ্যারে দেওয়া আছে, যেখানে পজিটিভ, নেগেটিভ আর জিরো—সব ধরনের সংখ্যা থাকবে।
তোমার কাজ হবে—
- কতগুলো পজিটিভ সংখ্যা আছে সেটা গোনা
- কতগুলো নেগেটিভ সংখ্যা আছে সেটা গোনা
- কতগুলো জিরো আছে সেটা গোনা
সবগুলো পজিটিভ সংখ্যার যোগফল বের করা */
