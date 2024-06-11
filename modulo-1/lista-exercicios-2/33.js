let matrixRows = Array();

console.log("\nGenerated matrix: \n");

for (let i = 0; i < 3; i++) { 
    let matrixColumns = Array();
    for (let u = 0; u < 3; u++) {
        let number = Math.round(Math.random() * 9); // generates number between 0 and 9
        matrixColumns.push(number);
    }
    matrixRows.push(matrixColumns);
}

matrixRows.forEach(row => {
    console.log(...row);
});

let matrixRowsX = matrixRows;
let secondaryDiagonalAverage = 0;

for (let i = 0; i < matrixRows.length; i++) {
    let size = matrixRows.length-1;
    secondaryDiagonalAverage += matrixRows[i][size-i];
}
secondaryDiagonalAverage /= 3;
for (let i = 0; i < matrixRows.length; i++) {
    matrixRowsX[i][i] = Number((matrixRowsX[i][i] * secondaryDiagonalAverage).toFixed(2));
}

console.log("\nMatrix with the elements of the main diagonal multiplied by the average of the secondary diagonal: \n");

matrixRowsX.forEach(row => {
    console.log(...row);
});