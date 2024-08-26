const input = require('prompt-sync')();

let num1 = parseInt(input("Type a number: "));
let num2 = parseInt(input("Type a second number: "));
let num3 = parseInt(input("Type a third number: "));
let num4 = parseInt(input("Type a fourth number: "));

num4 = num1 + num2 + num3;
num1 = num1 + 25;
num2 *= 3;
num3 *= 0.12;
console.log(num1, num2, num3, num4);