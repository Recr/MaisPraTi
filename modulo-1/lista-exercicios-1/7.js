const input = require('prompt-sync')();

let appleNumber = parseInt(input("Type the number of bought apples: "));

if(appleNumber >= 0){
    if(appleNumber >= 12){
        console.log(`The total value is: ${(appleNumber*0.25).toFixed(2)}`)
    } else {
        console.log(`The total value is: ${(appleNumber*0.3).toFixed(2)}`)
    }
} else {
    console.log("Type a valid number!")
}
