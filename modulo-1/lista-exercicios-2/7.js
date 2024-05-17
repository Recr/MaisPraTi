const input = require("prompt-sync")();

let carType = (input("What car type have you rented? 'Popular' or 'Luxury'? ")).toLowerCase;
let daysRented = Number(input("For how many days the car was rent? "));
let distanceTraveled = Number(input("How many kilometers have you traveled? "));
let cost;
if(carType === "popular"){
    cost = daysRented * 90 + (distanceTraveled > 100 ? distanceTraveled * 0.1 : distanceTraveled * 0.2);
    console.log("Cost: " + cost.toFixed(2));
} else if(carType === "luxury"){
    cost = daysRented * 150 + (distanceTraveled > 200 ? distanceTraveled * 0.25 : distanceTraveled * 0.3);
    console.log("Cost: " + cost.toFixed(2));
} else {
    console.log("Invalid car type.");
}