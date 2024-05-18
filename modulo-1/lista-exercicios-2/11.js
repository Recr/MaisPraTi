const input = require("prompt-sync")();

let firstElement = Number(input("What's the AP (Arithmetic Progression) first element? "));
let ratio = Number(input("What's the AP ratio? "));

let sum = 0;
for(let n = 0; n < 10; n++){
    let element = firstElement + (ratio * n);
    console.log(`Element ${n+1}: ${element}`);
    sum += element;
}

console.log(`\nThe sum of all the elements is: ${sum}`);