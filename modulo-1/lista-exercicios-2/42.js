let data = {
    name: "example",
    age: 20,
    email: "example@test.mail",
    salary: 2000,
    cars: ["Ferrari", "Charger", "Porsche"],
    yearsOfWonPrizes: [2005, 2007, 2011, 2017, 2024]
};

function returnArrays (obj) {
    let newObj = {};
    for (property in obj) {
        if (Array.isArray(obj[property])) {
            newObj[property] = obj[property];
        }
    }
    return newObj;
}

console.log(returnArrays(data));

