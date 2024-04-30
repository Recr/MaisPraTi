const input = require('prompt-sync')();

let grade1 = Number(input("Type the first exam grade: "));
let grade2 = Number(input("Type the second exam grade: "));

let average = (grade1 + grade2) / 2;

console.log(`Your average grade was: ${average.toFixed(2)}`)
if(average >= 6){
    console.log("Congrats! You've been approved");
} else {
    console.log("Oh no! You've been disapproved. Study more!");
}