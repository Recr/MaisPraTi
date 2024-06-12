let rightNumbers = Array();
let bettors = Array();

for (let i = 0; i < 13; i++) {
    number = Math.round(Math.random() * 60);
    rightNumbers[i] = number;
}

for (let i = 0; i < 100; i++) {
    let bet = Array();
    for (let u = 0; u < 13; u++) {
        number = Math.round(Math.random() * 60);
        bet.push(number);
    }
    let bettor = {
        card: i+1,
        numbersBet: bet
    };
    bettors.push(bettor);
}

let winnerFound = false;
for (let i = 0; i < bettors.length; i++) {
    let hitsMade = analiseBet(bettors[i].numbersBet, rightNumbers);
    console.log(`Card ${i+1} hit ${hitsMade} numbers.`)
    if (hitsMade === rightNumbers.length) {
        winnerFound = true;
        console.log(`Congrats, player of the card ${i + 1}, you've won!`);
        console.log("Numbers: " + bettors[i].numbersBet);
    } 
}

if (!winnerFound) {
    console.log("No one won!");
}

function analiseBet(arr1, arr2) {
    let numberOfHits = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            numberOfHits++;
        }
    }
    return numberOfHits;
}
