const input = require("prompt-sync")();

let hours = Array();
//let minutes = Array();
//let seconds = Array();

for (let i = 0; i < 5; i++){
    let moment = input("Type the hour in the format HH:MM:SS (Hour, Minute, Second): ");
    let momentSplit = moment.split(":");
    if (momentSplit[0] < 0 || momentSplit[0] > 23){
        console.log("Invalid hour. Not saved!");
        continue;
    }
    if (momentSplit[1] < 0 || momentSplit[1] > 59){
        console.log("Invalid hour. Not saved!");
        continue;
    }
    if (momentSplit[2] < 0 || momentSplit[2] > 59){
        console.log("Invalid hour. Not saved!");
        continue;
    }

    hours.push(moment);
}

hours.forEach(hour => {
    console.log(hour);
});