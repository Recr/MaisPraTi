const input = require('prompt-sync')();

let regionCode = parseInt(input("Type the product region code: "));

switch (true) {
    case regionCode === 1:
        console.log("South");
        break;

    case regionCode === 2:
        console.log("North");
        break;

    case regionCode === 3:
        console.log("East");
        break;

    case regionCode === 4:
        console.log("West");
        break;

    case regionCode >= 5 && regionCode <= 6:
        console.log("Northeast");
        break;

    case regionCode <= 9:
        console.log("Southeast");
        break;

    case regionCode <= 20:
        console.log("Central-West");
        break;

    case regionCode >= 25 && regionCode <= 50:
        console.log("Northeast");
        break;

    default:
        console.log("Imported")
        break;
}
