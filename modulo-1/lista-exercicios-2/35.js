let evens = Array(5);
let evensLength = 0
let odds = Array(5);
let oddsLength = 0;

for (let i = 0; i < 30; i++) {
    let number = Math.round(Math.random() * 10);
    console.log(number);
    if (number % 2 === 0) {
        evens[evensLength] = number;
        evensLength++;
        if (evensLength >= 5) {
            console.log("\nEvens Array:");
            console.log(...evens);
            evens.splice(0, 5);
            evensLength = 0;
        }
    } else {
        odds[oddsLength] = number;
        oddsLength++;
        if (oddsLength >= 5) {
            console.log("\nOdds Array:");
            console.log(...odds);
            odds.splice(0, 5);
            oddsLength = 0;
        }
    }
}

console.log("\nRemaining elements:");
console.log(...evens);
console.log(...odds);
