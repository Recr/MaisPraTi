let transactionsList = Array();

let possibleCategories = ["Investment", "Health", "Transportation", "Education", "Taxes"];

for (let i = 0; i < 10; i++) {
    let transaction = {};
    transaction.id = i;

    let randomValue = Math.round(Math.random() * 10000); 
    transaction.value = randomValue;
    transactionsList.push(transaction);

    let randomDay = Math.ceil(Math.random() * 30);
    let randomMonth = Math.ceil(Math.random() * 12);
    let randomDate = "2024-" + randomMonth + "-" + randomDay;
    transaction.date = randomDate;

    let randomCategory = possibleCategories[Math.round(Math.random() * 4)];
    transaction.category = randomCategory;
}

function organizeByCategory (transactions) {
    let organizedList = {};
    for (transaction of transactions) {
        if (transaction.category in organizedList){
            let newTransaction = {...transaction};
            delete newTransaction.category;
            organizedList[transaction.category].transactions.push(newTransaction);
            organizedList[transaction.category].subtotal += transaction.value;
        } else {
            organizedList[transaction.category] = {
                transactions: [],
                subtotal: transaction.value
            };

            let newTransaction = { ...transaction};
            delete newTransaction.category;
            let array = organizedList[transaction.category].transactions;
            array.push(newTransaction)
            organizedList[transaction.category].transactions = array;
        }
    }
    return organizedList;
}

let organizedData = organizeByCategory(transactionsList);

for (obj in organizedData) {
    console.log("\n" + obj + ": ")
    console.table(organizedData[obj].transactions);
    console.log("Subtotal: " + organizedData[obj].subtotal);
}