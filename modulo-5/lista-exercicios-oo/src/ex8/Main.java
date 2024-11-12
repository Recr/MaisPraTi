package ex8;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<Employee> employees = new ArrayList<>();
        employees.add(new Intern("Mark", 1000.0));
        employees.add(new Developer("Daniel", 2500.0));
        employees.add(new Manager("Annie", 5000.0));

        System.out.println("Total salaries with bonuses: " + calcPayroll(employees));
        promoteEmployee(employees, employees.get(2));
        System.out.println("Total salaries with bonuses: " + calcPayroll(employees));


    }

    public static double calcPayroll (ArrayList<Employee> employeesList) {
        double salaryWithBonusTotal = 0;
        for (Employee employee: employeesList) {
            salaryWithBonusTotal += employee.calculateSalaryWithBonus();
        }
        return salaryWithBonusTotal;
    }

    public static void promoteEmployee (ArrayList<Employee> employeeList, Employee employeeToPromote) {
        for (int i = 0; i < employeeList.size(); i++) {
            if (employeeList.get(i).equals(employeeToPromote)) {
                employeeList.set(i, employeeToPromote.promote());
                break;
            }
        }
    }
}
