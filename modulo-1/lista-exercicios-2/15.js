const input = require("prompt-sync")();

let numbers = Array(10);

for(let i = 0; i < 10; i++){
    numbers[i] = input("Type a number: ");
}

numbers.forEach((number, index) => {
    if(number % 2 === 0){
        console.log(`Even number at index ${index}: ${number}`);
    }
});