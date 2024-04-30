const input = require('prompt-sync')();

let number;
let question = true;

while (question) {
    number = parseInt(input("Type a number: "));
    if (number !== null && number >= 0) {
        if (number % 2 === 0) {
            console.log("This number is even!");
            console.log(); //spacing}
        } else {
            console.log("This number is odd!");
            console.log(); //spacing}
        }
    } else{
        question = false;
    }
}
