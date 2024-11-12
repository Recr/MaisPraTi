package ex5;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<IMeansOfTransport> transportations = new ArrayList<>();
        transportations.add(new Bicycle());
        transportations.add(new Car());
        transportations.add(new Train());
        transportations.add(new Car());
        transportations.add(new Bicycle());
        transportations.add(new Train());

        for (IMeansOfTransport transport : transportations) {
            transport.accelerate();
            transport.brake();
        }

    }
}
