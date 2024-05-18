const input = require("prompt-sync")();

let stop = false;
let employees = Array();

while (!stop) {
    let employeeGender = input("What's the employee gender? Type 'w' for woman and 'm' for man: ").toLowerCase();
    let salary = Number(input("What's the employee salary? "));
    if (salary > 0) {
        if (employeeGender === 'w') {
            newEmployee("woman", salary);
        } else if (employeeGender === 'm') {
            newEmployee("man", salary);
        } else {
            console.log("Invalid Gender!")
        }
    } else {
        console.log("Invalid salary!");
    }

    let stopLoop = input("Stop adding employees? 'y' for yes.").toLowerCase();
    if (stopLoop === 'y') {
        stop = true;
    }
    console.clear();
}

function newEmployee(employeeGender, employeeSalary) {
    const employee = {
        gender: employeeGender,
        salary: employeeSalary
    }
    employees.push(employee);
}

let womenTotalSalary = 0;
let menTotalSalary = 0;

employees.forEach((currentEmployee) => {
    if (currentEmployee.gender === 'woman') {
        womenTotalSalary += currentEmployee.salary;
    } else {
        menTotalSalary += currentEmployee.salary;
    }
    }
)

console.log(`The total amount paid for women was R$ ${womenTotalSalary}.`);
console.log(`And for the men it was R$ ${menTotalSalary}.`);