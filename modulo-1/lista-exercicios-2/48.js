let possibleProducts = ["chair", "table", "pillow", "cabinet", "tv", "radio"];

let storageStoreA = {};
let storageStoreB = {};

let productAmount = 0;

while (productAmount < 3) {
    let randomItem = Math.round(Math.random() * 5);
    let randomAmount = Math.round(Math.random() * 10);

    if (possibleProducts[randomItem] in storageStoreA) {
        continue;
    }
    storageStoreA[possibleProducts[randomItem]] = randomAmount;
    productAmount++;
}

productAmount = 0;

while (productAmount < 3) {
    let randomItem = Math.round(Math.random() * 5);
    let randomAmount = Math.round(Math.random() * 10);

    if (possibleProducts[randomItem] in storageStoreB) {
        continue;
    }
    storageStoreB[possibleProducts[randomItem]] = randomAmount;
    productAmount++;
}

function combine (stg1, stg2) {
    let combinedStorage = {};
    for (prop in stg1) {
        combinedStorage[prop] = stg1[prop];
    }
    for (prop in stg2) {
        if (prop in combinedStorage) {
            combinedStorage[prop] += stg2[prop];
        } else {
            combinedStorage[prop] = stg2[prop];
        }
    }
    return combinedStorage;
}
console.log("Store A:");
console.table(storageStoreA);
console.log("Store B:")
console.table(storageStoreB);
console.log("Combined Stores:")
console.table(combine(storageStoreA, storageStoreB));


