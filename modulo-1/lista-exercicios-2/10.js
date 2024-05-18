const input = require("prompt-sync")();

let numbers = Array();

let readNumbers = true;

do {
    let newNumber = Number(input("Type a number: "));
    numbers.push(newNumber);

    let continueReading = input ("Type any button to continue. Type 'x' to stop.");
    if (continueReading === "x"){
        readNumbers = false;
    }
} while (readNumbers);

let sum = 0;
let lowestValue = numbers[0];
let average;
let elementsNumber = 0;
let evenElements = 0;

for (const number of numbers) {
    sum += number;
    if (number < lowestValue) {
        lowestValue = number;
    }
    elementsNumber++;
    if(number % 2 === 0){
        evenElements++;
    }
}

average = sum / elementsNumber;

console.log(`\nThe sum of all values is ${sum}.`);
console.log(`The lowest value is ${lowestValue}.`);
console.log(`The average of all values is ${average}.`);
console.log(`The amount of even elements is ${evenElements}.`);
