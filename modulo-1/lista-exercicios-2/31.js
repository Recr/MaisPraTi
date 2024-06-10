const input = require("prompt-sync")();

let matrixRowsV = Array();
let valueA = parseInt(input("Choose a value: "));

console.log("\nGenerated matrix: \n");

for (let i = 0; i < 30; i++) { 
    let matrixColumns = Array();
    for (let u = 0; u < 30; u++) {
        let number = Math.round(Math.random() * 9); // generates number between 0 and 9
        matrixColumns.push(number);
    }
    matrixRowsV.push(matrixColumns);
}

matrixRowsV.forEach(row => {
    console.log(...row);
});

let matrixRowsX = matrixRowsV;

for (let i = 0; i < matrixRowsV.length; i++) {
    for (let u = 0; u < matrixRowsV.length; u++) {
        if (matrixRowsV[i][u] === valueA) {
            matrixRowsX[i][u] = " ";
        }
    }
}

console.log("\nMatrix without the instances of the value: \n");

matrixRowsX.forEach(row => {
    console.log(...row);
});