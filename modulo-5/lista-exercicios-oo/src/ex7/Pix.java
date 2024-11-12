package ex7;

public class Pix extends PaymentMethod{
    @Override
    void processPayment(double value) {
        if (validatePayment())
            System.out.println("Successful payment of " + value + " with Pix");
    }

    @Override
    boolean validatePayment() {
        System.out.println("Valid payment in Pix");
        return true;
    }
}
