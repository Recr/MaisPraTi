const input = require("prompt-sync")();

let height = Number(input("Type your height: "));
let gender = input("Type your gender. 'w' for woman and 'm' for man: ");


function idealWeight (height, gender) {
    if (height > 0){
        let idealWeight;
        if (gender === 'w') {
            idealWeight = (62.1 * height) - 44.7; 
            return "Your ideal weight is: " + idealWeight.toFixed(2);
        } else if (gender === 'm') {
            idealWeight = (72.7 * height) - 58; 
            return "Your ideal weight is: " + idealWeight.toFixed(2);
        } else {
            return "Invalid Gender!";
        }
    } else {
        return "Invalid Height!";
    }
}

console.log(idealWeight(height, gender));