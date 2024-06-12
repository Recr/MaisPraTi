let vendors = ["Sherlock", "Alan", "Edgar", "Poe", "Watson"];

let sales = Array();

for (let i = 0; i < 10; i++) {
    let randomVendor = vendors[Math.round(Math.random() * 4)];
    let randomValue = Math.round(Math.random() * 100);
    let sale = {
        name: randomVendor,
        value: randomValue
    };
    sales.push(sale);
}

function totalSalesPerVendor (salesArray) {
    let total = {};
    for (sale in salesArray) {
        if (salesArray[sale].name in total) {
            total[salesArray[sale].name] += salesArray[sale].value;
        } else {
            total[salesArray[sale].name] = salesArray[sale].value;
        }
    }
    return total;
}
console.log("Sales:")
console.table(sales)
console.log("\nTotal per Vendor:")
console.table(totalSalesPerVendor(sales));


