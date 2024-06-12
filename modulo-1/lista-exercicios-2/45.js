const possibleString = ["Apple", "Pear", "Melon", "Starfruit", "Strawberry"];

let stringsArray = Array();

for (let i = 0; i < 50; i++) {
    let number = Math.round(Math.random() * 4);
    stringsArray.push(possibleString[number]);
}

let stringContainer = {};

for (string of stringsArray) {
    if (string in stringContainer) {
        stringContainer[string]++;
    } else {
        stringContainer[string] = 1;
    }
}
console.log(stringContainer)