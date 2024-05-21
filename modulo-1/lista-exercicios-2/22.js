const input = require("prompt-sync")();

let people = Array();
let readNumbers = true;

do {
    let newSalary = Number(input("Type the salary: "));
    let newChildrenNumber = Number(input("Type children number: "));
    
    const person = {
        salary: newSalary,
        childrenNumber: newChildrenNumber
    };

    people.push(person);

    let continueReading = input ("Type any button to continue. Type 'x' to stop.");
    if (continueReading === "x"){
        readNumbers = false;
    }
    console.clear();
} while (readNumbers);

let salarySum = 0;
let childrenSum = 0;
let highestSalary = people[0].salary;
let peopleWithLowSalary = 0; //Low Salary being <= 350.

people.forEach(person => {
    salarySum += person.salary;
    childrenSum += person.childrenNumber;
    if (person.salary > highestSalary){
        highestSalary = person.salary;
    }
    if (person.salary <= 350) {
        peopleWithLowSalary++;
    }
});

console.log(`The population average salary is: R$ ${(salarySum/people.length).toFixed(2)}`);
console.log(`The population average number of children is: ${(childrenSum/people.length).toFixed(2)}`);
console.log(`The population highest salary is: ` + highestSalary);
console.log(`The percentage of people with a salary <= R$ 350,00 is: ${peopleWithLowSalary * 100/people.length}%`);
