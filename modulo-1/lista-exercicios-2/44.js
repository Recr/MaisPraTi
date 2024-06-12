let obj = {
    name: "Wolfgang Amadeus Mozart",
    job: "Musician",
    age: 30,
    musics: ["Concertos", "Sonatas"],
    mainInstrument: "Piano"
};

let stringAmount = 0;
for (property in obj) {
    if (typeof obj[property] === "string") {
        stringAmount++;
    }
}

console.log(`There is ${stringAmount} strings in the object.`);