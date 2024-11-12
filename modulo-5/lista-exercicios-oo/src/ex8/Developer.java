package ex8;

public class Developer extends Employee {

    public Developer(String name, Double salary) {
        super(name, salary);
    }

    @Override
    public Double calculateSalaryWithBonus() {
        return this.salary * 1.1;
    }

    public Employee promote () {
        return new Manager(this.name, this.salary);
    }
}
