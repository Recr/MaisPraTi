const input = require('prompt-sync')();

let num1 = input("Type a number: ");
let num2 = input("Type a second number: ");

if(num1 > num2){
    console.log("Ordered numbers: " + num2 + ", " + num1);
} else {
    console.log("Ordered numbers: " + num1 + ", " + num2);
}