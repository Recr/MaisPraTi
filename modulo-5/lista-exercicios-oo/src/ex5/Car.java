package ex5;

public class Car implements IMeansOfTransport{
    @Override
    public void accelerate() {
        System.out.println("Car accelerates...");
    }

    @Override
    public void brake() {
        System.out.println("Car brakes...");
    }
}
