function double (x) {
    return x * 2;
}

function transform (obj, transformer) {
    let newObj = {}
    for (prop in obj) {
            newObj[prop] = transformer(obj[prop]);
    }
    return newObj;
}

let car = {
    year: 2000,
    hp: 457,
    cost: 150000
};

console.log("Normal values: ");
console.log(car);
console.log("\nTransformed values: ");
console.log(transform(car, double));

