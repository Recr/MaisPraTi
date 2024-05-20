const input = require("prompt-sync")();

let names = Array();
let ages = Array();

for (let i = 0; i < 9; i++) {
    let name = input(`Type the name of the person ${i+1}: `);
    names.push(name);
    let age = Number(input(`Type the age of the person ${i+1}: `));
    ages.push(age);
}

ages.forEach((age, index) => {
    if(age < 18){
        console.log(`${names[index]} - ${age} years old.`);
    }
});