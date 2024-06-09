let matrixRows = Array();
let elementsAboveDiagonalSum = 0;
let elementsBelowDiagonalSum = 0;

console.log("\nGenerated matrix: \n");

for (let i = 0; i < 5; i++) { 
    let matrixColums = Array();
    let diagonalFound = false;
    for (let u = 0; u < 5; u++) {
        let number = Math.round(Math.random() * 10); // generates number between 0 and 10
        matrixColums.push(number);
        
        if (u === i) {
            diagonalFound = true;
        }

        if (!diagonalFound && u !== i) {
            elementsBelowDiagonalSum += number;
        } else if (u !== i) {
            elementsAboveDiagonalSum += number;
        }

    }
    matrixRows.push(matrixColums);
}

matrixRows.forEach(row => {
    console.log(...row);
});

console.log(`\nSum of elements above main diagonal: ${elementsAboveDiagonalSum}\n`);
console.log(`Sum of elements below main diagonal: ${elementsBelowDiagonalSum}`);
