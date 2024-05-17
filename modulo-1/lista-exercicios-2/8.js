const input = require("prompt-sync")();

let hoursExercised = Number(input("How many hours have you exercised in the month? "));
let points;

if(hoursExercised > 20) {
    points = hoursExercised * 10;
} else if (hoursExercised > 10) {
    points = hoursExercised * 5;
} else {
    points = hoursExercised * 2;
} 

if (points <= 0) {
    console.log("You're pretty sedentary, exercise more!.");
} else {
    console.log(`You've made ${points} points.\nThey can be exchanged for R$ ${(points * 0.05).toFixed(2)}.`);
}
