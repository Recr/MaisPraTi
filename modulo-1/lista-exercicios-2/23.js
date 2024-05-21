let matrix = [7];

for (let i = 0; i < 7; i++) {
    let column = [7];
    for (let u = 0; u < 7; u++) {
        if (i === u) {
            column[u] = 1;
        } else {
            column[u] = 0;
        }
    }
    matrix[i] = column;
}

matrix.forEach(row => console.log(...row));