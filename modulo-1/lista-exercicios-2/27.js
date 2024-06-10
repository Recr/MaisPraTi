const input = require("prompt-sync")();

let matrixRows = Array();
let V = Array();
let A = parseInt(input("Type a number to multiply the matrix: "));

console.log("\nGenerated matrix: \n");

for (let i = 0; i < 6; i++) { 
    let matrixColumns = Array();
    for (let u = 0; u < 6; u++) {
        let number = Math.round(Math.random() * 10); // generates number between 0 and 10
        matrixColumns.push(number);
        V.push(number * A);
    }
    matrixRows.push(matrixColumns);
}

matrixRows.forEach(row => {
    console.log(...row);
});


console.log("\nArray with the matrix values multiplied: \n");
console.log(...V);