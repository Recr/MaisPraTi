const input = require("prompt-sync")();

let stop = false;
let employees = Array();

while (!stop) {
    let employeeGender = input("What's the employee gender? Type 'w' for woman and 'm' for man: ").toLowerCase();
    let salary: input("What's the employee salary? ")

    console.log(employeeaa)
}

function newEmployee (employeeGender, employeeSalary) {
    const employee = {
        gender: employeeGender,
        salary: employeeSalary
    }
    employees.push(employee);
}