let numberOfPrimes = 50;
let startingNumber = 101;

for(let i = startingNumber; numberOfPrimes > 0; i++){
    let prime = true;
    for(let u = 2; u < i/2; u++){
        if(i % u === 0){
            prime = false;
            break;
        }
    }
    if(prime){
        console.log(i);
        numberOfPrimes--;
    }
}