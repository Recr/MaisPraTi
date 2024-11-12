package ex3;

public class Manager extends Employee{
    public Manager(String name, Double salary) {
        super(name, salary);
    }

    @Override
    public Double calculateBonus() {
        return this.salary * 0.2;
    }
}
