let num1 = 0.7; // number
let num2 = 0.1; // number

// console.log(num1.toString() + num2);
// num1 = num1.toString()
// console.log(num1.toString(2)); - representação binária
// console.log(num1.toFixed(0)); // Arredonda para cima // 11

// console.log(num1.toFixed(1)); // 10.6
// console.log(num1.toFixed(2)); // 10.58
// console.log(num1.toFixed(3)); // 10.500
// console.log(Number.isInteger(num1))
// let temp = num1 * 'Olá';
// console.log(temp) // NaN
// console.log(Number.isNaN(temp)) // true
// let temp = num1 * '5'; 

// IEEE 754-2008
// console.log(num1 + num2); // 0.7999999999999999
// num1 += num2; // 0.8999999999999999
// num1 += num2; // 0.9999999999999999
// num1 += num2; // 1.00
// num1 += num2; // 1.1
// num1 += num2; // 1.2
// num1 += num2; // 1.3
// num1 += num2; // 1.4
// num1 += num2; // 1.5
// num1 += num2; // 1.6
// num1 += num2; // 1.7
// num1 += num2; // 1.8
// num1 += num2; // 1.9
// num1 += num2; // 2.0

num1 = ((num1 * 100) + (num2 * 100)) / 100
num1 = ((num1 * 100) + (num2 * 100)) / 100
num1 = ((num1 * 100) + (num2 * 100)) / 100
// num1 = Number(num1.toFixed(2)); // parseFloat ou Number

console.log(num1); // 1.00 // 2.0000000000000004
console.log(Number.isInteger(num1)); // true
// console.log(Number.isInteger(num1)); // false
// console.log(Number.isInteger(num1)); // false
// console.log(Number.isInteger(1.00)); // true