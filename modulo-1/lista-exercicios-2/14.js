const input = require("prompt-sync")();

let names = Array(7)

for (let n = 0; n < 7; n++) {
    names[n] = input("Write a name: ");
}

for(let n = 6; n >= 0; n--){
    console.log(names[n]);
}