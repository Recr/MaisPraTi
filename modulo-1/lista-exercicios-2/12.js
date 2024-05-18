let n1 = 1;
let n2 = 1;

for (let i = 0; i < 50; i++){
    console.log(n1);
    let aux = n2;
    n2 = n2 + n1;
    n1 = aux;
}