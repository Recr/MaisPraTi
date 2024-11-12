package ex8;

public class Manager extends Employee {
    public Manager(String name, Double salary) {
        super(name, salary);
    }

    @Override
    public Double calculateSalaryWithBonus() {
        return this.salary * 1.2;
    }

    public Employee promote () {
        return new Manager(this.name, this.salary * 1.2);
    }
}
