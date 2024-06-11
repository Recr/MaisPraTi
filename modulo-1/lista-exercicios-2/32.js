let matrixRowsM = Array();
let biggestNumbers = Array();

console.log("\nGenerated matrix: \n");

for (let i = 0; i < 12; i++) { 
    let biggestNumber = 0;
    let matrixColumns = Array();
    for (let u = 0; u < 13; u++) {
        let number = Math.round(Math.random() * 99); // generates number between 0 and 9
        let signalRandomizer = Math.random();
        if (signalRandomizer < 0.5) { // randonly decides if the number will be positive or negative
            if (number !== 0) { // edge case in which the algorithm writes -0.
                number *= -1;
            }
        }
        if (Math.abs(number) > biggestNumber) {
            biggestNumber = Math.abs(number);
        }
        matrixColumns.push(number);
    }
    matrixRowsM.push(matrixColumns);
    biggestNumbers.push(biggestNumber);
}

matrixRowsM.forEach(row => {
    console.log(...row);
});

let matrixRowsDivided = matrixRowsM;

for (let i = 0; i < matrixRowsDivided.length; i++) {
    for (let u = 0; u < matrixRowsDivided[i].length; u++) {
        matrixRowsDivided[i][u] = (matrixRowsDivided[i][u] / biggestNumbers[i]).toFixed(2);
    }
}

console.log("\nMatrix with the divided values: \n");

matrixRowsDivided.forEach(row => {
    console.log(...row);
});