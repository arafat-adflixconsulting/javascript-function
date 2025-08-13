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
// console.log(num);

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
// console.log(numb);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - -- - - - - - - - -*/
/* 
* Findout the total cost of shoping
- Shirt price = 500
- Pant price = 400
- Shoe price = 1200
- Belt price  = 150
*/

const shirtPrice = 500;
const pantPrice = 400;
const shoePrice = 1200;
const beltPrice = 150;

function shoppingCost(shirtQuantity, pantQuantity, shoeQuantity, beltQuantity) {
  const shirtCost = shirtPrice * shirtQuantity;
  const pantCost = pantPrice * pantQuantity;
  const shoeCost = shoePrice * shoeQuantity;
  const beltCost = beltPrice * beltQuantity;

  const totalCost = shirtCost + pantCost + shoeCost + beltCost;
  return totalCost;
}

let productQuantity = shoppingCost(2, 2, 2, 1);
// console.log(productQuantity);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - -- - - - - - - - -*/

const items = [
  {
    item_name: "shirt",
    item_price: 800,
    quantity: 3,
  },

  {
    item_name: "pant",
    item_price: 900,
    quantity: 2,
  },

  {
    item_name: "shoe",
    item_price: 1200,
    quantity: 2,
  },
];

function isShoppingCost(products) {
  let sum = 0;
  // for (let i = 0; i < products.length; i++) {
  //   const totalCost = products[i].item_price * products[i].quantity;
  //   sum = sum + totalCost;
  // }

  for (let item of products) {
    //using for...of loop
    const totalCost = item.item_price * item.quantity;
    sum = sum + totalCost;
  }
  return sum;
}

let productPrice = isShoppingCost(items);
// console.log(productPrice);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - -- - - - - - - - -*/
/* 
(advanced) Multi-layer discount price calculation
* first 100 = 100 tk
* 101 - 200 = 90 tk
* above 200 = 70 tk
*/

function ticketPrice(quantity) {
  const first100price = 100;
  const second100Price = 90;
  const above200Price = 70;

  if (quantity <= 100) {
    const total = quantity * first100price;
    return total;
  } else if (quantity <= 200) {
    const first100total = 100 * first100price;
    const nextQuantity = quantity - 100;
    const nextTotal = nextQuantity * second100Price;
    const total = first100total + nextTotal;
    return total;
  } else {
    const first100total = 100 * first100price;
    const second100total = 100 * second100Price;
    const nextQuantity = quantity - 200;
    const nextTotal = nextQuantity * above200Price;
    const total = first100total + second100total + nextTotal;
  }
  return total;
}

let ticket = 150;
let totalTicketPrice = ticketPrice(ticket);
console.log(totalTicketPrice);
