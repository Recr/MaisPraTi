package ex7;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class PrintQueue {
    public static void main(String[] args) {
        Queue<Print> printQueue = new LinkedList<>();
        String text = "";
        int option = 1;
        while (option != 0) {
            System.out.println("\nPrint Queue\n");
            System.out.println("Choose an option:");
            System.out.println("1 - New Print");
            System.out.println("2 - Print");
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
                    System.out.println("Type print name: ");
                    text = input.nextLine();
                    printQueue.add(new Print(text));
                    break;

                case 2:
                    if (printQueue.size() == 0) {
                        System.err.println("Nothing to print!");
                    } else {
                        System.out.println(printQueue.poll().name() + " was printed!");
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
    private record Print (String name){}
}
