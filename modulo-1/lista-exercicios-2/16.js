let randomNumbers = Array(20)

for (let i = 0; i < 20; i++) {
    randomNumbers[i] = Number(Math.floor(Math.random() * (100 - 0) + 0));
}

console.log(randomNumbers);

for (let i = 0; i < randomNumbers.length - 1; i++) {
    for(let u = 0; u < randomNumbers.length-i; u++){
        if(randomNumbers[u] > randomNumbers[u+1]){
            let aux = randomNumbers[u];
            randomNumbers[u] = randomNumbers[u+1];
            randomNumbers[u+1] = aux;
        }
    }
}

console.log(randomNumbers);