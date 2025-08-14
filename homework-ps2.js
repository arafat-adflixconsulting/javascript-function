/* Task -1:
- Find the lowest number in the array below.
- const heights2 = [167, 190, 120, 165, 137];
 */

const heights2 = [167, 190, 120, 165, 137];

function lowValue(numbers) {
  let min = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }

  //   for (const num of numbers) {
  //     if (num < min) {
  //       min = num;
  //     }
  //   }
  return min;
}
const low = lowValue(heights2);
// console.log(low);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

/* Task -2:
 - Find the friend with the smallest name.
 - const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
 */

function smallName(friends) {
  let small = friends[0];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i] < small) {
      small = friends[i];
    }
  }
  return small;
}

let allFriends = ["rahim", "robin", "rafi", "ron", "rashed"];
let frnd = smallName(allFriends);
// console.log(frnd);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

/* Task-3:
Your task is to calculate the total budget required to buy electronics:
  -  laptop = 35000 tk
  -  tablet = 15000 tk
  -  mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget, 
that takes in the number of laptop, tablets, and mobile and returns the total money required. */

function calculateElectronicsBudget(
  laptopQuantity,
  tabletQuantity,
  mobileQuantity
) {
  const laptopPrice = 35000;
  const tabletPrice = 15000;
  const mobilePrice = 20000;

  let totalLaptopPrice = laptopPrice * laptopQuantity;
  let totaltabletPrice = tabletPrice * tabletQuantity;
  let totalmobilePrice = mobilePrice * mobileQuantity;

  let total = totalLaptopPrice + totalmobilePrice + totaltabletPrice;
  return total;
}

let deviceQuantity = calculateElectronicsBudget(2, 5, 10);
// console.log(deviceQuantity);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/* Task-4:
You are given an array of phone objects, each containing information about the model, brand, and price. 
Your task is to write a JavaScript function named findAveragePhonePrice 
that takes this array as input and returns the average price of phone. */

function findAveragePhonePrice(phone) {
  let sum = 0;
  for (let i = 0; i < phone.length; i++) {
    sum = sum + phone[i].price;
  }
  // let averagePrice = (sum / phone.length).toFixed(2);
  let averagePrice = Math.round(sum / phone.length);
  return averagePrice;
}

const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

const phoneList = findAveragePhonePrice(phones);
// console.log(phoneList);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/* Task -5: (Hard)
For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. 
Now calculate is the total salary has to be provided by the company in a month. */

function claculatedCurrencySalary(employee) {
  let sum = 0;
  for (let i = 0; i < employee.length; i++) {
    let totalIncrement = employee[i].experience * employee[i].increment;
    let perEmployeeSalary = employee[i].starting + totalIncrement;
    sum = sum + perEmployeeSalary;
  }
  return sum;
}

const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
const currenctSalary = claculatedCurrencySalary(employees);
console.log(currenctSalary);
