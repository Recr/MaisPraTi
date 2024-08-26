const input = require('prompt-sync')();

const votersNumber = input("Type the number of voters: "); 
const blankVotes = input("Type the number of blank votes: "); 
const nullVotes = input("Type the number of null votes: ");
const validVotes = input("Type the number of valid votes: ");

let blankVotesPercentage = (blankVotes * 100) / votersNumber;
let nullVotesPercentage = (nullVotes * 100) / votersNumber;
let validVotesPercentage = (validVotes * 100) / votersNumber;

console.log(`Percentage of blank votes: ${blankVotesPercentage.toFixed(2)}%`);
console.log(`Percentage of null votes: ${nullVotesPercentage.toFixed(2)}%`);
console.log(`Percentage of valid votes: ${validVotesPercentage.toFixed(2)}%`);