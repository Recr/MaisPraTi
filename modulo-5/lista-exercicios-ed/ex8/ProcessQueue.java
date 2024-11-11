package ex8;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class ProcessQueue {
    public static void main(String[] args) {
        Queue<ProcessQueue.Process> processQueue = new LinkedList<>();
        String text = "";
        int option = 1;
        while (option != 0) {
            System.out.println("\nProcess Queue\n");
            System.out.println("Choose an option:");
            System.out.println("1 - New Process");
            System.out.println("2 - Execute");
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
                    System.out.println("Type process name: ");
                    text = input.nextLine();
                    processQueue.add(new ProcessQueue.Process(text));
                    break;

                case 2:
                    if (processQueue.size() == 0) {
                        System.err.println("Nothing to execute!");
                    } else {
                        System.out.println(processQueue.poll().name() + " was executed!");
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
    private record Process (String name){}
}
