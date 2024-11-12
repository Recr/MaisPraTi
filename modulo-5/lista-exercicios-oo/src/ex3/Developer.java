package ex3;

public class Developer extends Employee{

    public Developer(String name, Double salary) {
        super(name, salary);
    }

    @Override
    public Double calculateBonus() {
        return this.salary * 0.1;
    }
}
