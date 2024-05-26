let matrixRows = Array();
let C = Array();

for (let i = 0; i < 6; i++) {
    let matrixColums = Array();
    for (let u = 0; u < 8; u++) {
        let number = Math.round(Math.random() * 100); // generates number between 0 and 99
        let signalRandomizer = Math.random();
        if (signalRandomizer < 0.5) { // randonly decides if the number will be positive or negative
            if (number !== 0) {
                number *= -1;
            }
        }
        matrixColums.push(number);
    }
    matrixRows.push(matrixColums);
}

matrixRows.forEach(row => {
    console.log(...row)
});

for (let i = 0; i < 6; i++) {
    let negativesNumber = 0;
    for (let u = 0; u < 8; u++) {
        if (matrixRows[i][u] < 0) {
            negativesNumber++;
        }
    }
    C.push(negativesNumber);
}

for (let i = 0; i < C.length; i++) {
    console.log(`There is ${C[i]} negative numbers in row ${i+1}`);
}