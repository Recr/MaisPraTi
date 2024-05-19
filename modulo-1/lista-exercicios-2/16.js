let randomNumbers = Array(20)

for (let i = 0; i < 20; i++) {
    randomNumbers[i] = Number(Math.floor(Math.random() * (100 - 0) + 0));
}

console.log(randomNumbers);

for (let i = 0; i < randomNumbers.length - 1; i++) {
    for(let u = 1; u < randomNumbers.length; u++){
        if(randomNumbers[i] > randomNumbers[u]){
            let aux = randomNumbers[i];
            randomNumbers[i] = randomNumbers[u];
            randomNumbers[u] = aux;
        }
    }
}

console.log(randomNumbers);