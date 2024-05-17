const input = require("prompt-sync")();

let carSpeed = input("Type the car speed: ");
if(carSpeed > 80){
    let fineValue = (carSpeed - 80) * 5;
    console.log(`You've been fined!\nFine value: R$${fineValue.toFixed(2)}`);
}
