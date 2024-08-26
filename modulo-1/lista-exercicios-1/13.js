const input = require('prompt-sync')();

let N;

for(let i = 0; i < 5; i++){
    N = parseInt(input("Type a number: "));
    for(let u = 1; u <= N; u++){
        console.log(`${u} x ${N} = ${u*N}`);
    }
}