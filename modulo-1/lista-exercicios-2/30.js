let matrixRows = Array();
let SL = Array();
let SC = Array();

console.log("\nGenerated matrix: \n");

for (let i = 0; i < 5; i++) { 
    let matrixColumns = Array();
    let rowSum = 0;
    for (let u = 0; u < 5; u++) {
        let number = Math.round(Math.random() * 10); // generates number between 0 and 10
        matrixColumns.push(number);
        rowSum += number;
    }
    matrixRows.push(matrixColumns);
    SL.push(rowSum);
}

matrixRows.forEach(row => {
    console.log(...row);
});

for (let i = 0; i < matrixRows.length; i++) {
    let columnSum = 0;
    for (let u = 0; u < matrixRows.length; u++) {
        columnSum += matrixRows[u][i];
    }
    SC.push(columnSum);
}

console.log(`\nSums of the rows: ${SL}\n`);
console.log(`Sums of the columns: ${SC}\n`);