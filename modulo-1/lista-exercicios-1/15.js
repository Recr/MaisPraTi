const input = require('prompt-sync')();

let sum = 0;
let weightsSum = 0;

while(true){
    let aux = parseFloat(input("Type a number: "));
    let weightAux = Number(input("Type the weight: "));
    if(aux !== 0){
        sum += aux * weightAux;
        weightsSum += weightAux;
    } else{
        break;
    }
}

console.log("Weighted average: " + (sum/weightsSum).toFixed(2));