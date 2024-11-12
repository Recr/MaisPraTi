package ex7;

public class CreditCard extends PaymentMethod{
    @Override
    void processPayment(double value) {
        if (validatePayment())
            System.out.println("Successful payment of" + value + " with credit card");
    }

    @Override
    boolean validatePayment() {
        System.out.println("Valid payment in credit card");
        return true;
    }
}
