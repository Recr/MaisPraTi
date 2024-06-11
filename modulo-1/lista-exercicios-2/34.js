let matrixRows = Array();

console.log("\nGenerated matrix: \n");

for (let i = 0; i < 50; i++) {
    let matrixColumns = Array();
    for (let u = 0; u < 50; u++) {
        let number = Math.round(Math.random() * 10 * 10) / 10; // generates number between 0 and 10
        let signalRandomizer = Math.random();
        if (signalRandomizer < 0.5) { // randonly decides if the number will be positive or negative
            if (number !== 0) { // edge case in which the algorithm writes -0.
                number *= -1;
            }
        }
        matrixColumns.push(number);
    }
    
    matrixRows.push(matrixColumns);
}

matrixRows.forEach(row => {
    console.log(...row);
});

for (let i = 0; i < 50; i++) {
    let mainDiagonalElement = matrixRows[i][i];
    for (let u = 0; u < 50; u++) {
        matrixRows[i][u] = (matrixRows[i][u] * mainDiagonalElement).toFixed(2);
    }
}

console.log("\nMatrix after multiplications: \n");

matrixRows.forEach(row => {
    console.log(...row);
});
