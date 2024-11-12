package ex5;

public class Bicycle implements IMeansOfTransport{
    @Override
    public void accelerate() {
        System.out.println("Bicycle accelerates...");
    }

    @Override
    public void brake() {
        System.out.println("Bicycle brakes...");
    }
}
