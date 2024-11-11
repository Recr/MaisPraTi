package ex6;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class ClientQueue {
    public static void main(String[] args) {
        Queue<Client> clientQueue = new LinkedList<>();
        String text = "";
        int option = 1;
        while (option != 0) {
            System.out.println("\nClient Queue\n");
            System.out.println("Choose an option:");
            System.out.println("1 - New Client");
            System.out.println("2 - Serve client");
            System.out.println("0 - Exit");
            Scanner input = new Scanner(System.in);
            String flush; //flush command line
            try {
                option = input.nextInt();
                flush = input.nextLine();
            } catch (Exception e) {
                System.err.println("Invalid Option");
                continue;
            }
            int index;
            switch (option) {
                case 1:
                    System.out.println("Type the client name: ");
                    text = input.nextLine();
                    clientQueue.add(new Client(text));
                    break;

                case 2:
                    if (clientQueue.size() == 0) {
                        System.err.println("No clients to serve!");
                    } else {
                        System.out.println("Client " + clientQueue.poll().name() + " was served!");
                    }
                    break;


                case 0:
                    System.out.println("Exiting...");
                    break;

                default:
                    System.err.println("Invalid Option");
                    break;
            }
        }
    }
}
