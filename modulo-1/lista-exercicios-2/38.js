const input = require("prompt-sync")();

let array = Array();

for (let x = 0; x < 6; x++) {
    let number = parseInt(input("Type a number: "));
    array.push(number);
}
console.log();
console.log("1 - Sum of the elements");
console.log("2 - Multiplication of the elements");
console.log("3 - Average of the elements");
console.log("4 - Sort the elements");
console.log("5 - Show the array");
console.log();

let loop = true;
do {

    let choice = parseInt(input("Choose an option: "))
    switch (choice) {
        case 1:
            let sum = 0;
            for (let i = 0; i < array.length; i++) {
                sum += array[i];
            }
            console.log("\nThe sum is: " + sum);
            break;

        case 2:
            let product = array[0];
            for (let i = 1; i < array.length; i++) {
                product *= array[i];
            }
            console.log("\nThe product is: " + product);
            break;

        case 3:
            let average = 0;
            for (let i = 0; i < array.length; i++) {
                average += array[i];
            }
            average = (average / array.length).toFixed(2);
            console.log("\nThe average is: " + average);
            break;

        case 4:
            array.sort(function (a, b) {
                return a - b;
            });
            break;

        case 5:
            console.log(...array);
            break;

        default:
            loop = false;
            break;
    }
} while (loop)