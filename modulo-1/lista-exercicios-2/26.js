let matrixRows1 = Array();
let matrixRows2 = Array();
let productMatrix = Array();

for (let i = 0; i < 3; i++) { //matrix 1
    let matrixColumns = Array();
    for (let u = 0; u < 5; u++) {
        let number = Math.round(Math.random() * 10); // generates number between -10 and 10
        let signalRandomizer = Math.random();
        if (signalRandomizer < 0.5) { // randonly decides if the number will be positive or negative
            if (number !== 0) { // edge case in which the algorithm writes -0.
                number *= -1;
            }
        }
        matrixColumns.push(number);
    }
    matrixRows1.push(matrixColumns);
}

for (let i = 0; i < 5; i++) { //matrix 2
    let matrixColumns = Array();
    for (let u = 0; u < 3; u++) {
        let number = Math.round(Math.random() * 10); 
        let signalRandomizer = Math.random();
        if (signalRandomizer < 0.5) { 
            if (number !== 0) { 
                number *= -1;
            }
        }
        matrixColumns.push(number);
    }
    matrixRows2.push(matrixColumns);
}

matrixRows1.forEach(row => {
    console.log(...row);
});

console.log();

matrixRows2.forEach(row => {
    console.log(...row);
});

console.log();


for (let i = 0; i < parseInt(matrixRows1.length); i++) {
    let matrixColumns = Array();
    let sum = 0;
    for (let u = 0; u < parseInt(matrixRows1.length); u++) {
        for (let y = 0; y < parseInt(matrixRows2.length); y++) {
            sum += matrixRows1[i][y] * matrixRows2[y][u];
        }
        matrixColumns.push(sum);
        sum = 0;
    }
    productMatrix.push(matrixColumns);
}

productMatrix.forEach(row => {
    console.log(...row);
});