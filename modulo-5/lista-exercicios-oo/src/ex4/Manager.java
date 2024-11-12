package ex4;

public class Manager extends Employee {
    public Manager(String name, Double salary) {
        super(name, salary);
    }

    @Override
    public Double calculateBonus() {
        return this.salary * 0.2;
    }

    @Override
    public String work() {
        return this.name + " is managing the development team.";
    }
}
