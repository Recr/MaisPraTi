const input = require('prompt-sync')();

let cigarettesPerDay = input("How many cigarettes you smoke per day? ");
let yearsSmoking = input("How many years have you smoked? ");

let daysLost = (yearsSmoking * 365 * cigarettesPerDay * 10) / 60 / 24;
console.log(`You have lost ${daysLost.toFixed(2)} days of life!`);
