package ex6;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<Animal> animals = new ArrayList<>();
        animals.add(new Cat());
        animals.add(new Dog());
        animals.add(new Cow());
        animals.add(new Cat());
        animals.add(new Cow());
        animals.add(new Cat());
        animals.add(new Dog());

        for (Animal animal : animals) {
            animal.makeSound();
        }
    }
}
