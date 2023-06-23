//  WHILE: Write a JavaScript program that prints the numbers from 1 to 10 using a while loop.

let number = 1;
while (number <= 10) {
  console.log(number);
  number++;
}

// WHILE: Write a JavaScript program that calculates the sum of the first 50 odd numbers using a while loop.
let count = 1;
let sum = 0;
let oddNumbersCount = 0;

while (oddNumbersCount < 50) {
  if (count % 2 !== 0) {
    sum += count;
    oddNumbersCount++;
  }
  count++;
}
console.log("Sum of the first 50 odd numbers:", sum);

// - DO WHILE: 
// Write a JavaScript program that counts down from 10 to 1 using a do-while loop.
let number1 = 10;
do {
  console.log(number1);
  number1--;
} while (number1 >= 1);

// - FOR:
// Write a JavaScript program that prints the even numbers from 1 to 20 using a for loop.

for (let number = 2; number <= 20; number += 2) {
  console.log(number);
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Write a JavaScript program that calculates the sum of numbers from 1 to 10 using a for loop.

let sum1 = 0;

for (let number = 1; number <= 10; number++) {
  sum1 += number;
}

console.log("Sum:", sum1);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ for + array

let arr = [12, 3, 1, 2, -6, 5, -8, 6];
console.log(arr[arr.length - 1]); // 6
console.log(arr[arr.length]); // undefined
// i < numbers.length-1 - before last || j < numbers.length  - include last



function calculateSum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

const numbers = [1, 2, 3, 4, 5];
const result = calculateSum(numbers);

console.log("Sum of array elements:", result);
// ===========================================================================================================