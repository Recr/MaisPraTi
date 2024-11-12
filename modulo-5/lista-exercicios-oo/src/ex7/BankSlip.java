package ex7;

public class BankSlip extends PaymentMethod{

    @Override
    void processPayment(double value) {
        if (validatePayment())
            System.out.println("Successful payment of " + value + " with bank slip");
    }

    @Override
    boolean validatePayment() {
        System.out.println("Valid payment in bank slip");
        return true;
    }
}
