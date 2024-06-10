let matrixRows = Array();
let elementsAboveDiagonalSum = 0;
let elementsBelowDiagonalSum = 0;

console.log("\nGenerated matrix: \n");

for (let i = 0; i < 10; i++) { 
    let matrixColumns = Array();
    let diagonalFound = false;
    for (let u = 0; u < 10; u++) {
        let number = Math.round(Math.random() * 10); // generates number between 0 and 10
        matrixColumns.push(number);
        
        if (u === i) {
            diagonalFound = true;
        }

        if (!diagonalFound && u !== i) {
            elementsBelowDiagonalSum += number;
        } else if (u !== i) {
            elementsAboveDiagonalSum += number;
        }

    }
    matrixRows.push(matrixColumns);
}

matrixRows.forEach(row => {
    console.log(...row);
});

console.log(`\nSum of elements above main diagonal: ${elementsAboveDiagonalSum}\n`);
console.log(`Sum of elements below main diagonal: ${elementsBelowDiagonalSum}`);
