package ex8;

public class Intern extends Employee{
    public Intern(String name, Double salary) {
        super(name, salary);
    }

    @Override
    public Double calculateSalaryWithBonus() {
        return this.salary;
    }

    @Override
    public Employee promote() {
        return new Developer(this.name, this.salary);
    }
}
