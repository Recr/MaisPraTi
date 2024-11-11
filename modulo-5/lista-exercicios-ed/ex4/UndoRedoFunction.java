package ex4;

import java.util.LinkedList;
import java.util.Scanner;

public class UndoRedoFunction {
    public static void main(String[] args) {
        LinkedList<String> editions = new LinkedList<>();
        String text = "";
        int currentIndex = 0;
        int option = 1;
        editions.add(text);
        while (option != 0) {
            System.out.println("\nText Editor\n");
            System.out.println("Choose an option:");
            System.out.println("1 - Edit text");
            System.out.println("2 - Undo");
            System.out.println("3 - Redo");
            System.out.println("4 - Print Text");
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
                    System.out.println("Edit the text below: ");
                    text = input.nextLine();
                    if (currentIndex == editions.size() - 1) {
                        editions.add(text);
                        currentIndex++;
                    } else {
                       while (editions.size() - 1 > currentIndex) {
                            editions.removeLast();
                       }
                       editions.add(text);
                       currentIndex++;
                    }
                    break;

                case 2:
                    if (currentIndex < 1) {
                        System.err.println("No editions history!");
                    } else {
                        currentIndex--;
                        text = editions.get(currentIndex);
                        System.out.print("Last edition undone: ");
                    }
                    break;

                case 3:
                    if (currentIndex >= editions.size()-1 && currentIndex >= 0) {
                        System.err.println("No editions history!");
                    } else {
                        currentIndex++;
                        text = editions.get(currentIndex);
                        System.out.print("Last edition redone: ");
                    }
                    break;

                case 4:
                    System.out.println("Text: ");
                    System.out.println(text);
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
