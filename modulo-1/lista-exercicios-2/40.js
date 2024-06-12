let rightNumbers = Array();
let bettors = Array();

let counter = 0;
while (counter < 5) {
    number = Math.ceil(Math.random() * 80);
    if (!verifyNotDuplicate(number, rightNumbers)) {
        rightNumbers[counter] = number;
        counter++;
    }
}

for (let i = 0; i < 50; i++) {
    let bet = Array();
    let u = 0;
    while (u < 5) {
        number = Math.ceil(Math.random() * 80);
        if (!verifyNotDuplicate(number, bet)) {
            bet.push(number);
            u++;
        } 
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
        for (let u = 0; u < arr1.length; u++) {
            if (arr1[u] === arr2[i]) {
                numberOfHits++;
            }
        }
    }
    return numberOfHits;
}

function verifyNotDuplicate (number, array) {
    if (array.includes(number)) {
        return true;
    } else {
        return false;
    }
}
