const input = require("prompt-sync")();

let distance = input("How many kilometers will you travel? ");

if(!distance <= 0){
    if(distance > 200){
        console.log("Trip value: R$ " + (0.45 * distance).toFixed(2));
    } else {
        console.log("Trip value: R$ " + (0.5 * distance).toFixed(2));
    }
} else {
    console.log("You've typed a invalid number.");
}