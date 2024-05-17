const input = require("prompt-sync")();
let gameLoop = true;
console.log("JoKenPo!!!\n\n");

while (gameLoop) {
    console.log("0 ---> Rock\n1 ---> Paper\n2 ---> Scissors\n")
    let userChoice = input("What do you choose: ");
    let computerChoice = Math.floor(Math.random() * (3 - 0) + 0);
    switch (userChoice) {
        case "0":
            if (computerChoice === 1) {
                console.log("You lost!");
            } else if (computerChoice === 2) {
                console.log("You win!");
            } else {
                console.log("Draw!");
            }
            break;

        case "1":
            if (computerChoice === 2) {
                console.log("You lost!");
            } else if (computerChoice === 0) {
                console.log("You win!");
            } else {
                console.log("Draw!");
            }
            break;

        case "2":
            if (computerChoice === 0) {
                console.log("You lost!");
            } else if (computerChoice === 1) {
                console.log("You win!");
            } else {
                console.log("Draw!");
            }
            break;

        default:
            console.log("Invalid Choice!");
            break;
    }

    console.log();
    let stop = input("Type 'y' to continue playing. ");
    console.log();
    if(stop !== 'y'){
        gameLoop = false;
    }

}

