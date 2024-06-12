let arrayA = Array();
let arrayB = Array();

for (let i = 0; i < 100; i++) {
    let number = Math.round(Math.random() * 100);
    let signalRandomizer = Math.random();
        if (signalRandomizer < 0.5) {
            if (number !== 0) {
                number *= -1;
            }
        }
    arrayA.push(number);
}

for (let y = 0; y < arrayA.length; y++) {
    if (arrayA[y] > 0) {
        arrayB.push(arrayA[y]);
    }
}

console.table(arrayA);
console.table(arrayB);