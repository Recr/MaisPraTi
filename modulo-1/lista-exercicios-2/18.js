const input = require("prompt-sync")();

let employee = {
    name: "",
    position: "",
    salary: 0
};

employee.name = input("Type the employee's name: ");
employee.position = input("Type the employee's position: ");
employee.salary = Number(input("Type the employee's salary: "));

console.log(employee);