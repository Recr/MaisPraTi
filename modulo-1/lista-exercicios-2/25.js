let matrixRows = Array();
let C = Array();

for (let i = 0; i < 15; i++) {
    let matrixColums = Array();
    for (let u = 0; u < 20; u++) {
        let number = Math.round(Math.random() * 10 * 10) / 10; // generates number between 0 and 10
        let signalRandomizer = Math.random();
        if (signalRandomizer < 0.5) { // randonly decides if the number will be positive or negative
            if (number !== 0) { // edge case in which the algorithm writes -0.
                number *= -1;
            }
        }
        matrixColums.push(number);
    }
    matrixRows.push(matrixColums);
}

matrixRows.forEach(row => {
    console.log(...row);
});

for (let i = 0; i < 20; i++) {
    let columnSum = 0;
    for (let u = 0; u < 15; u++) {
        columnSum += matrixRows[u][i];
    }
    console.log(`The sum of the column ${i+1} is: ${columnSum}`);
}

