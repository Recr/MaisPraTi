// Ex16: Print the first 50 prime numbers after 100.

let numberOfPrimes = 50;
let testedNumber = 101;
while(numberOfPrimes > 0){
    let prime = true;
    let divider = 2;
    while (divider <= testedNumber/2){
        if(testedNumber % divider === 0){
            prime = false;
            break;
        }
        divider++;
    }
    if(prime){
        console.log(testedNumber);
        numberOfPrimes--;
    }
    testedNumber++;
}
