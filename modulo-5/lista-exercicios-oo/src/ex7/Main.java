package ex7;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<PaymentMethod> methods = new ArrayList<>();
        methods.add(new BankSlip());
        methods.add(new CreditCard());
        methods.add(new Pix());

        methods.get(0).processPayment(250.50);
        methods.get(1).processPayment(1420.37);
        methods.get(2).processPayment(148.12);

    }
}
