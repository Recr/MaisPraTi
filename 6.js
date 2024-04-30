const input = require('prompt-sync')();

let a = parseInt(input("Type the size of the side a: "));
let b = parseInt(input("Type the size of the side b: "));
let c = parseInt(input("Type the size of the side c: "));

if(a + b > c && a + c > b && b + c > a){
    let triangleType;
    if(a === b && b === c){
        triangleType = "equilateral";
    } else if (a === b || a === c || b === c){
        triangleType = "isosceles";
    } else {
        triangleType = "scalene";
    }
    console.log(`A ${triangleType} triangle will be formed.`)
} else {
    console.log("A triangle cannot be formed.")
}
