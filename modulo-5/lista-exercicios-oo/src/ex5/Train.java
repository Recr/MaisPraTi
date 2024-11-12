package ex5;

public class Train implements IMeansOfTransport{

    @Override
    public void accelerate() {
        System.out.println("Train accelerates...");
    }

    @Override
    public void brake() {
        System.out.println("Train brakes...");
    }
}
