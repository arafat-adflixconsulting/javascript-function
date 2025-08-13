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
console.log(low);
