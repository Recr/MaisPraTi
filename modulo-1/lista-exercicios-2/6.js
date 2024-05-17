const input = require("prompt-sync")();

console.log("A number between 1 and 5 will be drawn.");
console.log("Try to guess the number!\n");

let computerChoice = Math.floor(Math.random() * (6 - 1) + 1);
let numberFound = false;
while (!numberFound) {
    let userChoice = parseInt(input("I choose: "));
    if (userChoice === computerChoice) {
        console.log("You're right, Congrats!");
        numberFound = true;
    } else {
        console.log("Nope, try again!\n");
    }
}