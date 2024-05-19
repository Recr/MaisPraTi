let fibonacciNumbers = Array(15);

let n1 = 1;
let n2 = 1;

for (let i = 0; i < 15; i++){
    fibonacciNumbers[i] = n1;
    let aux = n2;
    n2 = n2 + n1;
    n1 = aux;
}

console.log(fibonacciNumbers);