let matrixRows = Array();
let rowFourSum = 0;
let columnTwoSum = 0;
let mainDiagonalSum = 0;
let elementsSum = 0;

console.log("\nGenerated matrix: \n");

for (let i = 0; i < 5; i++) { 
    let matrixColumns = Array();
    for (let u = 0; u < 5; u++) {
        let number = Math.round(Math.random() * 10); // generates number between 0 and 10
        matrixColumns.push(number);
        elementsSum += number;
    }
    matrixRows.push(matrixColumns);
}

matrixRows.forEach(row => {
    console.log(...row);
});

for (let i = 0; i < matrixRows.length; i++) {
    rowFourSum += matrixRows[3][i];
}

for (let i = 0; i < matrixRows.length; i++) {
    columnTwoSum += matrixRows[i][1];
}

for (let i = 0; i < matrixRows.length; i++) {
    mainDiagonalSum += matrixRows[i][i];
}

console.log(`\nSum of elements in row 4: ${rowFourSum}\n`);
console.log(`Sum of elements in column 2: ${columnTwoSum}\n`);
console.log(`Sum of elements in main diagonal: ${mainDiagonalSum}\n`);
console.log(`Sum of all elements: ${elementsSum}`);