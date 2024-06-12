let object = {
    name: "Wolfgang Amadeus Mozart",
    job: "Musician",
    age: 30,
    musics: ["Concertos", "Sonatas"],
    mainInstrument: "Piano"
};

function countString(obj) {
    let stringAmount = 0;
    for (property in obj) {
        if (typeof obj[property] === "string") {
            stringAmount++;
        }
    }
    return stringAmount;
}

console.log(`There is ${countString(object)} strings in the object.`);