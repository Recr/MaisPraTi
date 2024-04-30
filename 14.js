const input = require('prompt-sync')();

let sum = 0;
let numberAmount = 0;

while(true){
    let aux = parseInt(input("Type a number: "));
    if(aux !== 0){
        sum += aux;
        numberAmount++;
    } else{
        break;
    }
}

console.log("Average: " + (sum/numberAmount));