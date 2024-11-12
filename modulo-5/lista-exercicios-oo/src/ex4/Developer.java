package ex4;

public class Developer extends Employee {

    public Developer(String name, Double salary) {
        super(name, salary);
    }

    @Override
    public Double calculateBonus() {
        return this.salary * 0.1;
    }


    @Override
    public String work() {
        return this.name + " is writing some code.";
    }
}
