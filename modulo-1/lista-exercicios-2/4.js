const input = require('prompt-sync')();

let a = parseInt(input("Type the size of the side a: "));
let b = parseInt(input("Type the size of the side b: "));
let c = parseInt(input("Type the size of the side c: "));

if(a + b > c && a + c > b && b + c > a){   
    console.log("A triangle can be formed.");
} else {
    console.log("A triangle cannot be formed.");
}